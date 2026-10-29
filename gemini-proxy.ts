// Supabase Edge Function «gemini-proxy»
// Ключ Gemini хранится ТОЛЬКО здесь (секрет GEMINI_API_KEY) и никогда не попадает в браузер.
// Действия: redeem (ввод промокода), status (есть ли доступ), chat (запрос к Gemini).
import { createClient } from 'npm:@supabase/supabase-js@2';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, apikey, content-type, x-client-info',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });

const DAILY_LIMIT = Number(Deno.env.get('AI_DAILY_LIMIT') ?? 100);   // запросов в сутки на пользователя
const MODEL = Deno.env.get('GEMINI_MODEL') ?? 'gemini-3.5-flash';

function secretKey(): string {
  try {
    const keys = JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS') ?? '{}');
    if (keys.default) return keys.default;
  } catch { /* ignore */ }
  return Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
}
const admin = createClient(Deno.env.get('SUPABASE_URL')!, secretKey(), { auth: { persistSession: false } });

// Пропускаем только безопасные поля и ограничиваем размеры
// deno-lint-ignore no-explicit-any
function sanitize(payload: any) {
  // deno-lint-ignore no-explicit-any
  const out: any = {};
  const sys = payload?.systemInstruction?.parts?.[0]?.text;
  if (sys) out.systemInstruction = { parts: [{ text: String(sys).slice(0, 20000) }] };
  const contents = Array.isArray(payload?.contents) ? payload.contents.slice(-30) : [];
  // deno-lint-ignore no-explicit-any
  out.contents = contents.map((c: any) => ({
    role: c?.role === 'model' ? 'model' : 'user',
    parts: [{ text: String(c?.parts?.[0]?.text ?? '').slice(0, 20000) }],
  }));
  const g = payload?.generationConfig ?? {};
  out.generationConfig = {
    temperature: Math.min(1, Math.max(0, Number(g.temperature ?? 0.7))),
    maxOutputTokens: Math.min(1800, Math.max(50, Number(g.maxOutputTokens ?? 1200))),
  };
  if (g.responseMimeType === 'application/json') {
    out.generationConfig.responseMimeType = 'application/json';
    if (g.responseSchema && typeof g.responseSchema === 'object') out.generationConfig.responseSchema = g.responseSchema;
  }
  return out;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json(405, { error: 'method' });

  // Кто это? (JWT пользователя из Authorization)
  const token = (req.headers.get('Authorization') ?? '').replace(/^Bearer\s+/i, '');
  const { data: { user }, error: authError } = await admin.auth.getUser(token);
  if (authError || !user) return json(401, { error: 'auth' });

  const raw = await req.text();
  if (raw.length > 120000) return json(413, { error: 'too_big' });
  // deno-lint-ignore no-explicit-any
  let body: any;
  try { body = JSON.parse(raw); } catch { return json(400, { error: 'bad_json' }); }

  // --- Промокод ---
  if (body.action === 'redeem') {
    const code = String(body.code ?? '').trim().toUpperCase().slice(0, 40);
    if (!code) return json(404, { error: 'bad_code' });
    const { data: promo } = await admin.from('promo_codes').select('code,max_uses,uses,active').eq('code', code).maybeSingle();
    if (!promo || promo.active === false) return json(404, { error: 'bad_code' });
    const { data: existing } = await admin.from('ai_access').select('user_id').eq('user_id', user.id).maybeSingle();
    if (!existing) {
      if (promo.max_uses != null && promo.uses >= promo.max_uses) return json(404, { error: 'bad_code' });
      const { error } = await admin.from('ai_access').insert({ user_id: user.id, code });
      if (error) return json(500, { error: 'db' });
      await admin.from('promo_codes').update({ uses: promo.uses + 1 }).eq('code', code);
    }
    return json(200, { ok: true });
  }

  // --- Дальше нужен доступ ---
  const { data: access } = await admin.from('ai_access').select('user_id').eq('user_id', user.id).maybeSingle();
  if (!access) return json(403, { error: 'no_access' });
  if (body.action === 'status') return json(200, { ok: true });
  if (body.action !== 'chat') return json(400, { error: 'bad_action' });

  const apiKey = Deno.env.get('GEMINI_API_KEY');
  if (!apiKey) return json(500, { error: 'no_gemini_key' });

  // Суточный лимит на пользователя
  const day = new Date().toISOString().slice(0, 10);
  const { data: usage } = await admin.from('ai_usage').select('n').eq('user_id', user.id).eq('day', day).maybeSingle();
  const used = usage?.n ?? 0;
  if (used >= DAILY_LIMIT) return json(429, { error: 'limit' });
  await admin.from('ai_usage').upsert({ user_id: user.id, day, n: used + 1 });

  const upstream = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
    body: JSON.stringify(sanitize(body.payload)),
  });
  return new Response(await upstream.text(), { status: upstream.status, headers: { ...CORS, 'Content-Type': 'application/json' } });
});
