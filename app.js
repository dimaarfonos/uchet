const icons = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  arrows: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v14M3 7l4-4 4 4M17 21V7m4 10-4 4-4-4"/></svg>',
  pie: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21.2 15.1A9.2 9.2 0 1 1 8.9 2.8v9.5Z"/><path d="M13 2.2a8.8 8.8 0 0 1 8.8 8.8H13Z"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
  rotate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15.4-6.4L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.4 6.4L3 16"/><path d="M3 21v-5h5"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></svg>',
  'trend-up': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 15 5-5 3 3 6-7"/><path d="M14 6h5v5"/></svg>',
  'chevron-down': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  'arrow-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  'arrow-down-left': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M17 7 7 17M7 9v8h8"/></svg>',
  'arrow-up-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m7 17 10-10M9 7h8v8"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.2-4.2"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H19v16H6a2 2 0 0 1-2-2Z"/><path d="M4 7h15v5H4"/><path d="M16 14h.01"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m12 3-1.1 4.3L7 8.5l3.9 1.2L12 14l1.1-4.3L17 8.5l-3.9-1.2L12 3ZM5 15l-.7 2.3L2 18l2.3.7L5 21l.7-2.3L8 18l-2.3-.7L5 15ZM19 15l-.7 2.3L16 18l2.3.7L19 21l.7-2.3L22 18l-2.3-.7L19 15Z"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 14.5A8.5 8.5 0 0 1 9.5 3.8 8.5 8.5 0 1 0 20.2 14.5Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="3.5"/><path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16.5H6.5A2.5 2.5 0 0 0 4 22V5.5Z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M8 7h8M8 11h6"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="3" width="8" height="12" rx="4"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8.5 21h7"/></svg>',
  'arrow-up': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6.5 10.5 12 5l5.5 5.5"/></svg>',
  'arrow-down': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6.5 13.5 12 19l5.5-5.5"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 6h9M19 6h1M4 12h3M13 12h7M4 18h11M19 18h1"/><circle cx="16" cy="6" r="2.2"/><circle cx="10" cy="12" r="2.2"/><circle cx="17" cy="18" r="2.2"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5M8 3h8l-1 6 3 4H6l3-4-1-6Z"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V5M7 9l5-5 5 5M5 20h14"/></svg>',
  grip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 7h.01M15 7h.01M9 12h.01M15 12h.01M9 17h.01M15 17h.01"/></svg>'
};

const categoryMeta = {
  'Продукты': { color:'#66b17d', icon:'bag', bg:'#e9f7eb' },
  'Кафе и рестораны': { color:'#e38f62', icon:'sparkles', bg:'#fff0e7' },
  'Транспорт': { color:'#9276dc', icon:'arrows', bg:'#f0ecfb' },
  'Подписки': { color:'#e6b343', icon:'pie', bg:'#fff8df' },
  'Здоровье': { color:'#dd7174', icon:'target', bg:'#fff0f0' },
  'Учёба': { color:'#6f8be1', icon:'sparkles', bg:'#edf1ff' },
  'Жильё': { color:'#c6875e', icon:'wallet', bg:'#fff1e8' },
  'Кредит': { color:'#cd7282', icon:'pie', bg:'#fff0f3' },
  'Покупки': { color:'#629bc6', icon:'bag', bg:'#ecf5fb' },
  'Захотелось': { color:'#b76ca6', icon:'sparkles', bg:'#f9eaf6' },
  'Другое': { color:'#89958f', icon:'grid', bg:'#eff2ef' },
  'Зарплата': { color:'#459d77', icon:'wallet', bg:'#e7f8ed' },
  'Фриланс': { color:'#4d94bf', icon:'sparkles', bg:'#e8f5fb' },
  'Подарки': { color:'#bc7dd4', icon:'target', bg:'#f8edfb' }
};

const isoDate = date => {
  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return offsetDate.toISOString().slice(0, 10);
};
const dateFromToday = daysAgo => {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() - daysAgo);
  return isoDate(date);
};
const currentMonthKey = () => isoDate(new Date()).slice(0, 7);
const monthLabel = (date = new Date()) => new Intl.DateTimeFormat('ru-RU', { month:'long', year:'numeric' }).format(date).replace(' г.', '').replace(/^./, char => char.toUpperCase());

const initialState = { budget: 30000, transactions: [], shopping: [], plans: [], notes: [] };

const clone = data => JSON.parse(JSON.stringify(data));

/* =====================================================================
   v9 · ЯДРО: профили, хранение, слияние данных, облако (Supabase), PIN
   ===================================================================== */

/* ---- Облако: вставьте свои значения сюда ИЛИ в окне «Профиль и облако» ---- */
const SUPABASE_URL = 'https://thxaxrnbprlgufxvilxy.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_-u4QG3A9BjTwsOv4wqsFCg_2cqXj76I';  // публичный (publishable) ключ — его можно хранить в приложении
const APP_VERSION = 11;

const COLLECTIONS = ['transactions', 'shopping', 'plans', 'notes'];
const SCALARS = ['budget', 'userName', 'theme', 'avatar'];
const TOMBSTONE_TTL = 90 * 86400000;

const LS = {
  get(key, fallback = null) { try { const raw = localStorage.getItem(key); return raw == null ? fallback : JSON.parse(raw); } catch { return fallback; } },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; } },
  del(key) { try { localStorage.removeItem(key); } catch { /* ignore */ } },
  raw(key) { try { return localStorage.getItem(key); } catch { return null; } }
};

/* ---- Профили ---- */
let profiles = LS.get('schetchik-profiles', null);
const profilesWereMissing = !Array.isArray(profiles) || !profiles.length;
(function initProfiles() {
  if (profilesWereMissing) {
    const legacy = LS.get('schetchik-state');
    profiles = [{ id:'main', name:legacy ? 'Дмитрий' : 'Гость', pin:null, createdAt:Date.now() }];
    if (legacy) LS.set('schetchik-state:main', legacy);
    LS.set('schetchik-profiles', profiles);
  }
  let id = LS.get('schetchik-active');
  if (!profiles.find(p => p.id === id)) id = profiles[0].id;
  LS.set('schetchik-active', id);
})();
const profileId = LS.get('schetchik-active');
const getProfile = () => profiles.find(p => p.id === profileId) || profiles[0];
const saveProfiles = () => { LS.set('schetchik-profiles', profiles); idbSet('profiles', profiles); };
const stateKey = (id = profileId) => `schetchik-state:${id}`;
const sessionKey = (id = profileId) => `schetchik-session:${id}`;

/* ---- IndexedDB (резервная копия, которую браузер стирает реже) ---- */
let idbPromise = null;
function idbOpen() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) return reject(new Error('no idb'));
    const request = indexedDB.open('schetchik', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('kv');
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
const idb = () => idbPromise || (idbPromise = idbOpen().catch(() => null));
async function idbGet(key) {
  const db = await idb(); if (!db) return null;
  return new Promise(resolve => { try { const rq = db.transaction('kv').objectStore('kv').get(key); rq.onsuccess = () => resolve(rq.result ?? null); rq.onerror = () => resolve(null); } catch { resolve(null); } });
}
async function idbSet(key, value) {
  const db = await idb(); if (!db) return false;
  return new Promise(resolve => { try { const tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').put(value, key); tx.oncomplete = () => resolve(true); tx.onerror = () => resolve(false); tx.onabort = () => resolve(false); } catch { resolve(false); } });
}
async function idbDel(key) { const db = await idb(); if (!db) return; try { db.transaction('kv', 'readwrite').objectStore('kv').delete(key); } catch { /* ignore */ } }

/* ---- Состояние ---- */
let state = LS.get(stateKey(), null);
const live = list => list.filter(item => !item.deletedAt);
const liveTx = () => live(state.transactions);
const livePlans = () => live(state.plans);
const activePlans = () => livePlans().filter(plan => !plan.done).sort((a, b) => (a.pos ?? 0) - (b.pos ?? 0));
const stamp = item => Math.max(item.updatedAt || 0, item.deletedAt || 0);

function normalizeState() {
  if (!state || typeof state !== 'object' || Array.isArray(state)) state = clone(initialState);
  for (const c of COLLECTIONS) {
    if (!Array.isArray(state[c])) state[c] = clone(initialState[c]);
    state[c] = state[c].filter(item => item && item.id != null).map(item => ({ ...item, id:String(item.id), updatedAt:Number(item.updatedAt) || 0 }));
  }
  if (!(Number(state.budget) > 0)) state.budget = initialState.budget;
  if (typeof state.avatar !== 'string') state.avatar = '';
  if (typeof state.userName !== 'string' || !state.userName.trim()) state.userName = getProfile()?.name || 'Гость';
  if (state.theme !== 'light' && state.theme !== 'dark') state.theme = LS.raw('schetchik-theme') === 'light' ? 'light' : 'dark';
  for (const k of SCALARS) if (typeof state[k + 'At'] !== 'number') state[k + 'At'] = 0;
  state.shopping = state.shopping.map(item => ({ category:'Покупки', priority:'normal', date:'', ...item }));
  state.plans = state.plans.map((item, index) => ({ ...item, kind:item.kind === 'goal' ? 'purchase' : (item.kind || 'payment'), pos:typeof item.pos === 'number' ? item.pos : index }));
  state.notes = state.notes.map((item, index) => ({ mood:'calm', pinned:false, time:'', createdAt:Number(String(item.id || '').replace(/\D/g, '')) || index, ...item }));
}
normalizeState();

/* ---- Снимок для определения изменений: кто изменился — получает updatedAt, кто исчез — deletedAt ---- */
const itemJson = item => { const { updatedAt, ...rest } = item; return JSON.stringify(rest); };
let snap = new Map(); let snapScalars = {};
function takeSnapshot() {
  snap = new Map();
  for (const c of COLLECTIONS) for (const item of state[c]) snap.set(c + ':' + item.id, itemJson(item));
  snapScalars = Object.fromEntries(SCALARS.map(k => [k, state[k]]));
}
function nextTopPos() { const all = livePlans(); return all.length ? Math.min(...all.map(p => p.pos ?? 0)) - 1 : 0; }
function reconcile() {
  const now = Date.now(); const next = new Map();
  for (const c of COLLECTIONS) {
    const present = new Set();
    for (const item of state[c]) {
      if (c === 'plans' && typeof item.pos !== 'number') item.pos = nextTopPos();
      const key = c + ':' + item.id; present.add(key);
      const json = itemJson(item); next.set(key, json);
      if (snap.get(key) !== json) item.updatedAt = now;
    }
    for (const [key, json] of snap) {
      if (key.startsWith(c + ':') && !present.has(key)) {
        const tomb = { ...JSON.parse(json), deletedAt:now, updatedAt:now };
        state[c].push(tomb); next.set(key, itemJson(tomb));
      }
    }
  }
  for (const k of SCALARS) if (snapScalars[k] !== state[k]) state[k + 'At'] = now;
  snap = next; snapScalars = Object.fromEntries(SCALARS.map(k => [k, state[k]]));
}
normalizeState(); takeSnapshot();

/* ---- Слияние двух состояний (по updatedAt / deletedAt, без потери записей) ---- */
function mergeItems(a, b) {
  const map = new Map(); const cutoff = Date.now() - TOMBSTONE_TTL;
  for (const item of [...a, ...b]) {
    const current = map.get(item.id);
    if (!current) { map.set(item.id, item); continue; }
    const s1 = stamp(item), s2 = stamp(current);
    if (s1 > s2 || (s1 === s2 && item.deletedAt && !current.deletedAt)) map.set(item.id, item);
  }
  return [...map.values()].filter(item => !(item.deletedAt && item.deletedAt < cutoff));
}
function mergeStates(local, remote) {
  const out = { ...local };
  for (const c of COLLECTIONS) out[c] = mergeItems(local[c] || [], (remote && remote[c]) || []);
  for (const k of SCALARS) if (remote && remote[k] !== undefined && (remote[k + 'At'] || 0) > (local[k + 'At'] || 0)) { out[k] = remote[k]; out[k + 'At'] = remote[k + 'At']; }
  return out;
}
const stable = value => Array.isArray(value) ? value.map(stable) : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(k => [k, stable(value[k])])) : value;
function canon(s) {
  const sorted = c => [...(s[c] || [])].sort((x, y) => String(x.id).localeCompare(String(y.id)));
  return JSON.stringify(stable([COLLECTIONS.map(sorted), SCALARS.map(k => [s[k], s[k + 'At'] || 0])]));
}
function cleanForCloud(s) { const { savedAt, ...rest } = s; return JSON.parse(JSON.stringify(rest)); }

/* ---- Сохранение: мгновенно localStorage, затем IndexedDB, затем облако ---- */
let idbTimer = null;
function persistLocal() {
  state.savedAt = Date.now();
  const ok = LS.set(stateKey(), state);
  if (!ok) setSyncStatus('error', 'Память браузера заполнена — скачайте копию данных');
  clearTimeout(idbTimer); idbTimer = setTimeout(() => idbSet(stateKey(), state), 250);
}
function save({ sync = true } = {}) { reconcile(); persistLocal(); if (sync) scheduleSync(); }
function applyMerged(merged) {
  state = merged; normalizeState(); takeSnapshot(); persistLocal();
  onStateReplaced();
}

/* ---- Облако: Supabase по REST (без библиотек) ---- */
const cloud = {
  session: LS.get(sessionKey(), null),
  cfg() { const c = LS.get('schetchik-cloud', {}) || {}; return { url:String(c.url || SUPABASE_URL || '').trim().replace(/\/+$/, ''), key:String(c.key || SUPABASE_ANON_KEY || '').trim() }; },
  configured() { const c = this.cfg(); return /^https?:\/\//.test(c.url) && c.key.length > 20; },
  setSession(session) { this.session = session; if (session) LS.set(sessionKey(), session); else LS.del(sessionKey()); },
  async raw(path, { method = 'GET', body, token, headers = {} } = {}) {
    const { url, key } = this.cfg();
    let response;
    try {
      const head = { apikey:key, 'Content-Type':'application/json', ...headers }; if (token) head.Authorization = 'Bearer ' + token;   // publishable-ключ не JWT: без входа заголовок Authorization не отправляем
      response = await fetch(url + path, { method, headers:head, body:body === undefined ? undefined : JSON.stringify(body) });
    } catch { const error = new Error('network'); error.code = 'network'; throw error; }
    const text = await response.text(); let data = null; try { data = text ? JSON.parse(text) : null; } catch { data = text; }
    if (!response.ok) { const error = new Error((data && (data.error_description || data.msg || data.message || data.error)) || ('HTTP ' + response.status)); error.status = response.status; error.data = data; throw error; }
    return data;
  },
  normalizeSession(data) {
    if (!data || !data.access_token) return null;
    return { access_token:data.access_token, refresh_token:data.refresh_token, expires_at:data.expires_at || Math.floor(Date.now() / 1000) + (data.expires_in || 3600), user:{ id:data.user?.id, email:data.user?.email } };
  },
  async signUp(email, password) { const data = await this.raw('/auth/v1/signup', { method:'POST', body:{ email, password } }); return this.normalizeSession(data); },
  async signIn(email, password) { const data = await this.raw('/auth/v1/token?grant_type=password', { method:'POST', body:{ email, password } }); return this.normalizeSession(data); },
  async sendLink(email) { const redirect = encodeURIComponent(location.origin + location.pathname); await this.raw('/auth/v1/otp?redirect_to=' + redirect, { method:'POST', body:{ email, create_user:true } }); },
  async verifyCode(email, token) { const data = await this.raw('/auth/v1/verify', { method:'POST', body:{ type:'email', email, token:String(token).trim() } }); return this.normalizeSession(data); },
  async userFromToken(access_token, refresh_token, expires_in) {
    const user = await this.raw('/auth/v1/user', { token:access_token });
    return { access_token, refresh_token, expires_at:Math.floor(Date.now() / 1000) + Number(expires_in || 3600), user:{ id:user.id, email:user.email } };
  },
  async token() {
    const s = this.session; if (!s) throw Object.assign(new Error('no session'), { code:'auth' });
    if (s.expires_at * 1000 - Date.now() > 60000) return s.access_token;
    try {
      const data = await this.raw('/auth/v1/token?grant_type=refresh_token', { method:'POST', body:{ refresh_token:s.refresh_token } });
      this.setSession(this.normalizeSession(data)); return this.session.access_token;
    } catch (error) { if (error.code === 'network') throw error; this.setSession(null); throw Object.assign(new Error('session expired'), { code:'auth' }); }
  },
  async signOut() { try { if (this.session) await this.raw('/auth/v1/logout', { method:'POST', token:this.session.access_token }); } catch { /* ignore */ } this.setSession(null); }
};
function authMessage(error) {
  const text = String(error && error.message || '');
  if (error && error.code === 'network') return 'Нет связи с сервером. Проверьте интернет и адрес проекта.';
  if (/Invalid login/i.test(text)) return 'Неверный email или пароль.';
  if (/already registered|already been registered/i.test(text)) return 'Этот email уже зарегистрирован — войдите.';
  if (/not confirmed/i.test(text)) return 'Подтвердите почту по ссылке из письма и войдите.';
  if (/at least|weak/i.test(text)) return 'Пароль слишком короткий — минимум 6 символов.';
  if (/rate limit|too many|seconds/i.test(text)) return 'Слишком часто. Подождите минуту и повторите.';
  if (/expired|invalid.*(token|otp)|token.*invalid/i.test(text)) return 'Код неверный или устарел — запросите новый.';
  if (/signups? not allowed|disabled/i.test(text)) return 'Регистрация отключена в настройках Supabase.';
  return text || 'Не удалось выполнить запрос.';
}

let syncing = false, syncQueued = false, syncTimer = null, syncStatus = 'local', lastSyncAt = 0;
function scheduleSync(delay = 700) { clearTimeout(syncTimer); if (!cloud.configured() || !cloud.session) { setSyncStatus(cloud.configured() ? 'auth' : 'local'); return; } if (!navigator.onLine) { setSyncStatus('offline'); return; } setSyncStatus('pending'); syncTimer = setTimeout(syncNow, delay); }
async function syncNow() {
  clearTimeout(syncTimer);
  if (!cloud.configured()) return setSyncStatus('local');
  if (!cloud.session) return setSyncStatus('auth');
  if (!navigator.onLine) return setSyncStatus('offline');
  if (syncing) { syncQueued = true; return; }
  syncing = true; setSyncStatus('syncing');
  try {
    const uid = cloud.session.user.id;
    for (let attempt = 0; attempt < 4; attempt++) {
      const token = await cloud.token();
      const rows = await cloud.raw(`/rest/v1/schetchik_state?select=data,updated_at&user_id=eq.${uid}`, { token });
      const row = Array.isArray(rows) ? rows[0] : null;
      const merged = row ? mergeStates(state, row.data || {}) : state;
      if (row && canon(merged) !== canon(state)) applyMerged(merged);
      if (row && canon(merged) === canon(row.data || {})) break;
      const body = { data:cleanForCloud(state), updated_at:new Date().toISOString() };
      if (!row) {
        try { await cloud.raw('/rest/v1/schetchik_state', { method:'POST', token, body:{ user_id:uid, ...body }, headers:{ Prefer:'return=minimal' } }); break; }
        catch (error) { if (error.status === 409) continue; throw error; }
      }
      const result = await cloud.raw(`/rest/v1/schetchik_state?user_id=eq.${uid}&updated_at=eq.${encodeURIComponent(row.updated_at)}`, { method:'PATCH', token, body, headers:{ Prefer:'return=representation' } });
      if (Array.isArray(result) && result.length) break;
    }
    lastSyncAt = Date.now(); setSyncStatus('synced');
  } catch (error) {
    if (error.code === 'auth' || error.status === 401) { setSyncStatus('auth'); toast('Сессия облака истекла — войдите снова'); }
    else if (error.code === 'network' || !navigator.onLine) setSyncStatus('offline');
    else if (error.status === 404 || /schetchik_state/.test(String(error.message))) setSyncStatus('error', 'В Supabase нет таблицы schetchik_state — выполните SQL из инструкции');
    else setSyncStatus('error', 'Ошибка облака: ' + (error.message || error.status));
  } finally { syncing = false; if (syncQueued) { syncQueued = false; scheduleSync(300); } }
}

/* ---- Код переноса (синхронизация без сервера: копируете код → вставляете на другом устройстве) ---- */
function makeTransferCode() {
  const bytes = new TextEncoder().encode(JSON.stringify(cleanForCloud(state))); let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return 'SC1:' + btoa(bin);
}
function readTransferCode(text) {
  const code = String(text || '').replace(/\s+/g, '');
  if (!code.startsWith('SC1:')) throw new Error('Это не код переноса «Счётчика»');
  const bin = atob(code.slice(4)); const bytes = Uint8Array.from(bin, ch => ch.charCodeAt(0));
  const data = JSON.parse(new TextDecoder().decode(bytes));
  if (!data || !Array.isArray(data.transactions)) throw new Error('Код повреждён');
  return data;
}

/* ---- PIN-код (локальная блокировка экрана, хеш PBKDF2 с солью) ---- */
const bytesToB64 = bytes => btoa(String.fromCharCode(...bytes));
const b64ToBytes = text => Uint8Array.from(atob(text), ch => ch.charCodeAt(0));
async function hashPin(pin, salt) {
  if (window.crypto && crypto.subtle) {
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(pin), 'PBKDF2', false, ['deriveBits']);
    const bits = await crypto.subtle.deriveBits({ name:'PBKDF2', salt:b64ToBytes(salt), iterations:120000, hash:'SHA-256' }, key, 256);
    return bytesToB64(new Uint8Array(bits));
  }
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57; const text = salt + pin;   // запасной вариант для небезопасного контекста
  for (let round = 0; round < 5000; round++) for (let i = 0; i < text.length; i++) { const c = text.charCodeAt(i); h1 = Math.imul(h1 ^ c, 2654435761); h2 = Math.imul(h2 ^ c, 1597334677); }
  return 'x' + (h1 >>> 0).toString(16) + (h2 >>> 0).toString(16);
}
async function makePin(pin) { const salt = bytesToB64(crypto.getRandomValues(new Uint8Array(16))); return { salt, hash:await hashPin(pin, salt) }; }
async function checkPin(profile, pin) { return !!profile.pin && (await hashPin(pin, profile.pin.salt)) === profile.pin.hash; }

let transactionType = 'expense';
let planType = 'payment';
let editingPlanId = null;
let editingNoteId = null;
let editingTransactionId = null;
let editingShoppingId = null;
let showBalance = true;
let activeFilter = 'all';
let searchText = '';

const qs = selector => document.querySelector(selector);
const qsa = selector => [...document.querySelectorAll(selector)];
const NF = new Intl.NumberFormat('ru-RU', { maximumFractionDigits:0 });
const fmt = value => NF.format(Math.round(value)) + ' ₽';
const shortFmt = value => new Intl.NumberFormat('ru-RU', { notation:'compact', maximumFractionDigits:1 }).format(value).replace(/\s/g,'') + ' ₽';
const DF_SHORT = new Intl.DateTimeFormat('ru-RU', { day:'numeric', month:'short' });
const dateCache = new Map();
const dateDisplay = date => { let text = dateCache.get(date); if (text === undefined) { text = DF_SHORT.format(new Date(date + 'T12:00:00')).replace('.', ''); dateCache.set(date, text); } return text; };
const monthTransactions = () => liveTx().filter(item => item.date.startsWith(currentMonthKey()));
const sum = (items, property='amount') => items.reduce((total, item) => total + Number(item[property] || 0), 0);

function setIcons() { qsa('[data-icon]').forEach(el => { const name = el.dataset.icon; if (icons[name] && el.dataset.iconDone !== name) { el.innerHTML = icons[name]; el.dataset.iconDone = name; } }); }

function iconFor(category) { return categoryMeta[category] || categoryMeta['Другое']; }
function transactionHTML(item, detailed = false) {
  const meta = iconFor(item.category);
  const sign = item.type === 'income' ? '+' : '−';
  return `<div class="transaction" data-id="${item.id}">
    <div class="transaction-icon" style="color:${meta.color};background:${meta.bg}">${icons[meta.icon]}</div>
    <div class="transaction-info"><span class="transaction-title">${escapeHtml(item.title)}</span><span class="transaction-sub">${item.category} · ${dateDisplay(item.date)}</span></div>
    <span class="transaction-amount ${item.type}-amount">${sign}${fmt(item.amount)}</span>
    ${detailed ? `<button class="delete-transaction" title="Редактировать" aria-label="Редактировать" data-edit-transaction="${item.id}">${icons.edit}</button><button class="delete-transaction" title="Удалить" aria-label="Удалить" data-delete-transaction="${item.id}">${icons.trash}</button>` : ''}
  </div>`;
}
const ESC_MAP = { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' };
function escapeHtml(text) { return String(text == null ? '' : text).replace(/[&<>"']/g, ch => ESC_MAP[ch]); }

function renderDashboard() {
  const items = monthTransactions();
  const income = sum(items.filter(i => i.type === 'income'));
  const expenses = sum(items.filter(i => i.type === 'expense'));
  const all = liveTx(); const balance = sum(all.filter(i => i.type === 'income')) - sum(all.filter(i => i.type === 'expense'));
  const progress = Math.min(100, Math.round((expenses / state.budget) * 100));
  qs('#currentBalance').textContent = showBalance ? fmt(balance) : '••••••';
  qs('#incomeTotal').textContent = fmt(income);
  qs('#expenseTotal').textContent = fmt(expenses);
  qs('#chartTotal').textContent = fmt(expenses);
  qs('#budgetProgress').textContent = progress + '%';
  qs('#budgetSubtitle').textContent = `${fmt(expenses)} из ${fmt(state.budget)}`;
  qs('#balanceMonth').textContent = monthLabel();
  qs('#chartMonth').textContent = monthLabel();
  qs('#balanceChange').textContent = income > 0 ? `${income >= expenses ? '+' : '−'}${Math.abs(Math.round(((income - expenses) / income) * 100))}%` : '0%';
  const circle = qs('#progressRing .ring-value');
  circle.style.strokeDasharray = `${progress} ${100 - progress}`;
  renderCategoryChart(items.filter(i => i.type === 'expense'), expenses);
  renderBarChart();
  qs('#recentTransactions').innerHTML = liveTx().sort((a,b) => (b.date < a.date ? -1 : b.date > a.date ? 1 : 0) || (b.updatedAt || 0) - (a.updatedAt || 0)).slice(0,4).map(i => transactionHTML(i)).join('') || '<div class="empty-state">Пока нет операций — нажмите «Добавить» или скажите голосом</div>';
}

function renderCategoryChart(expenses, total) {
  const amounts = Object.entries(expenses.reduce((result, item) => { result[item.category] = (result[item.category] || 0) + item.amount; return result; }, {})).sort((a,b)=>b[1]-a[1]).slice(0,4);
  const palette = amounts.map(([cat]) => iconFor(cat).color);
  let at = 0;
  const stops = amounts.map(([,amount], i) => { const from = at; at += (amount / Math.max(total, 1)) * 100; return `${palette[i]} ${from.toFixed(1)}% ${at.toFixed(1)}%`; });
  qs('#donutChart').style.background = total ? `conic-gradient(${stops.join(',')})` : 'var(--line)';
  qs('#categoryLegend').innerHTML = amounts.length ? amounts.map(([cat, amount], index) => `<div class="legend-row"><i class="legend-dot" style="background:${palette[index]}"></i><span class="legend-name">${cat}</span><b class="legend-value">${shortFmt(amount)}</b><span class="legend-pct">${Math.round(amount / total * 100)}%</span></div>`).join('') : '<div class="empty-state">Пока нет расходов</div>';
}

function renderBarChart() {
  const all = liveTx();
  const periods = [-5, -4, -3, -2, -1, 0].map(offset => {
    const date = new Date(); const first = new Date(date.getFullYear(), date.getMonth() + offset, 1, 12);
    const key = isoDate(first).slice(0, 7); const items = all.filter(i => i.date.startsWith(key));
    const label = new Intl.DateTimeFormat('ru-RU', { month:'short' }).format(first).replace('.', '').replace(/^./, char => char.toUpperCase()).slice(0, 3);
    return [label, sum(items.filter(i => i.type === 'income')), sum(items.filter(i => i.type === 'expense'))];
  });
  const max = Math.max(...periods.flatMap(x=>[x[1],x[2]]), 1);
  qs('#barChart').innerHTML = periods.map(([label, income, expense]) => `<div><div class="bar-set"><span class="bar income-bar" style="height:${Math.max(4, income/max*100)}%" title="Доходы: ${fmt(income)}"></span><span class="bar expense-bar" style="height:${Math.max(4, expense/max*100)}%" title="Расходы: ${fmt(expense)}"></span></div><div class="bar-label">${label}</div></div>`).join('');
}

function renderTransactions() {
  const all = liveTx().sort((a, b) => (b.date < a.date ? -1 : b.date > a.date ? 1 : 0) || (b.updatedAt || 0) - (a.updatedAt || 0))
    .filter(item => (activeFilter === 'all' || item.type === activeFilter) && `${item.title} ${item.category}`.toLowerCase().includes(searchText));
  const shown = all.slice(0, txLimit);
  qs('#allTransactions').innerHTML = shown.length
    ? shown.map(i => transactionHTML(i, true)).join('') + (all.length > shown.length ? `<button class="more-button-row" type="button" data-more-tx>Показать ещё · ${all.length - shown.length}</button>` : '')
    : `<div class="empty-state"><span>⌕</span>${liveTx().length ? 'Ничего не нашлось' : 'Пока пусто — нажмите «Добавить» и внесите первую операцию'}</div>`;
}

function renderBudget() {
  const expenses = monthTransactions().filter(i=>i.type==='expense'); const spent = sum(expenses); const remaining = state.budget - spent;
  qs('#budgetTotalLarge').textContent = fmt(state.budget); qs('#budgetSpentLarge').textContent = fmt(spent); qs('#budgetLeftLarge').textContent = fmt(Math.max(0, remaining));
  const weights = { 'Продукты':.22, 'Кафе и рестораны':.10, 'Транспорт':.08, 'Подписки':.05, 'Покупки':.10, 'Захотелось':.06, 'Здоровье':.06, 'Учёба':.12, 'Жильё':.12, 'Кредит':.06, 'Другое':.03 };
  qs('#budgetCategories').innerHTML = Object.entries(weights).map(([category, weight]) => {
    const limit = Math.round(state.budget * weight); const actual = sum(expenses.filter(i=>i.category===category)); const percent = Math.min(100, actual / limit * 100); const meta = iconFor(category); const overspend = actual > limit;
    return `<div class="budget-category"><div class="budget-category-top"><div class="budget-cat-label"><span class="budget-cat-icon" style="color:${meta.color};background:${meta.bg}">${icons[meta.icon]}</span>${category}</div><span class="budget-numbers"><b>${fmt(actual)}</b> / ${fmt(limit)}</span></div><div class="budget-track"><div class="budget-fill" style="width:${percent}%;background:${overspend ? '#e76661' : meta.color}"></div></div><div class="budget-meta"><span>${Math.round(percent)}% использовано</span><span class="${overspend ? 'budget-warning':''}">${overspend ? 'Превышен лимит' : 'Осталось ' + fmt(limit-actual)}</span></div></div>`;
  }).join('');
}



// <parser>
/* ===== Голосовой разбор: числа, даты, намерение, категория ===== */
const VOICE_UNITS = {ноль:0,один:1,одна:1,одну:1,два:2,две:2,три:3,четыре:4,пять:5,шесть:6,семь:7,восемь:8,девять:9,десять:10,одиннадцать:11,двенадцать:12,тринадцать:13,четырнадцать:14,пятнадцать:15,шестнадцать:16,семнадцать:17,восемнадцать:18,девятнадцать:19,двадцать:20,тридцать:30,сорок:40,пятьдесят:50,шестьдесят:60,семьдесят:70,восемьдесят:80,девяносто:90,сто:100,двести:200,триста:300,четыреста:400,пятьсот:500,шестьсот:600,семьсот:700,восемьсот:800,девятьсот:900,
  первого:1,второго:2,третьего:3,четвертого:4,пятого:5,шестого:6,седьмого:7,восьмого:8,девятого:9,десятого:10,одиннадцатого:11,двенадцатого:12,тринадцатого:13,четырнадцатого:14,пятнадцатого:15,шестнадцатого:16,семнадцатого:17,восемнадцатого:18,девятнадцатого:19,двадцатого:20,тридцатого:30,
  шестое:6,седьмое:7,восьмое:8,девятое:9,десятое:10,первое:1,второе:2,третье:3,четвертое:4,пятое:5};
const VOICE_MONTHS = { января:0, январь:0, февраля:1, февраль:1, марта:2, март:2, апреля:3, апрель:3, мая:4, май:4, июня:5, июнь:5, июля:6, июль:6, августа:7, август:7, сентября:8, сентябрь:8, октября:9, октябрь:9, ноября:10, ноябрь:10, декабря:11, декабрь:11 };
const MONTH_RE = '(?:' + Object.keys(VOICE_MONTHS).join('|') + ')';
const WEEKDAYS = { воскресенье:0, понедельник:1, вторник:2, среду:3, среда:3, четверг:4, пятницу:5, пятница:5, субботу:6, суббота:6 };

function normalizeSpeech(text) {
  return String(text || '').toLowerCase().replace(/ё/g, 'е').replace(/[\u00a0\u202f]/g, ' ').replace(/\s+/g, ' ').trim();
}

/* «две тысячи пятьсот» → «2500», «3 тысячи 500» → «3500», «3,5 тыс» → «3500», «3 500» → «3500» */
function wordsToDigits(text) {
  let t = normalizeSpeech(text);
  t = t.replace(/(\d+(?:[.,]\d+)?)\s*(?:тыс\.?|тысяч[а-я]*|к)(?![а-я])(?:\s+(\d{1,3})(?!\d))?/g, (_, n, rest) => String(Math.round(parseFloat(n.replace(',', '.')) * 1000) + (rest ? Number(rest) : 0)));
  t = t.replace(/(\d+(?:[.,]\d+)?)\s*(?:млн\.?|миллион[а-я]*)/g, (_, n) => String(Math.round(parseFloat(n.replace(',', '.')) * 1e6)));
  const tokens = t.split(' '); const out = []; let total = 0, current = 0, active = false;
  const flush = () => { if (active) out.push(String(total + current)); total = 0; current = 0; active = false; };
  for (const raw of tokens) {
    const word = raw.replace(/[,.!?;:]+$/, '');
    if (Object.prototype.hasOwnProperty.call(VOICE_UNITS, word)) { current += VOICE_UNITS[word]; active = true; continue; }
    if (/^тысяч[аиу]?$|^тыс$/.test(word)) { total += (current || 1) * 1000; current = 0; active = true; continue; }
    if (/^миллион(?:а|ов)?$|^млн$/.test(word)) { total += (current || 1) * 1e6; current = 0; active = true; continue; }
    if (word === 'полторы' || word === 'полтора') { current += 1.5; active = true; continue; }
    flush(); out.push(raw);
  }
  flush();
  t = out.join(' ');
  // «3 500», «12 990» → слитно (только группы по 3 цифры)
  let prev; do { prev = t; t = t.replace(/(?<![\d.,])(\d{1,3})\s(\d{3})(?!\d)/g, '$1$2'); } while (t !== prev);
  return t;
}

function voiceDate(rawText, now = new Date()) {
  const text = wordsToDigits(rawText);
  const base = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
  const today0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const shift = days => { const d = new Date(base); d.setDate(d.getDate() + days); return d; };
  const iso = d => isoDate(d);
  let m;
  if (/послезавтра/.test(text)) return { date: iso(shift(2)), found: true };
  if (/завтра/.test(text)) return { date: iso(shift(1)), found: true };
  if (/позавчера/.test(text)) return { date: iso(shift(-2)), found: true };
  if (/вчера/.test(text)) return { date: iso(shift(-1)), found: true };
  if (/сегодня/.test(text)) return { date: iso(shift(0)), found: true };
  if ((m = text.match(new RegExp('(\\d{1,2})\\s+(' + MONTH_RE + ')(?:\\s+(\\d{4}))?')))) {
    const day = Number(m[1]), month = VOICE_MONTHS[m[2]];
    if (day >= 1 && day <= 31) {
      const year = m[3] ? Number(m[3]) : now.getFullYear();
      let d = new Date(year, month, day, 12);
      if (!m[3] && d < today0) d = new Date(year + 1, month, day, 12);
      return { date: iso(d), found: true };
    }
  }
  if ((m = text.match(/(?<![\d.])(\d{1,2})[.\/](\d{1,2})(?:[.\/](\d{2,4}))?(?![\d])/))) {
    const day = Number(m[1]), month = Number(m[2]) - 1;
    if (day >= 1 && day <= 31 && month >= 0 && month <= 11) {
      const year = m[3] ? Number(m[3].length === 2 ? '20' + m[3] : m[3]) : now.getFullYear();
      let d = new Date(year, month, day, 12);
      if (!m[3] && d < today0) d = new Date(year + 1, month, day, 12);
      return { date: iso(d), found: true };
    }
  }
  if ((m = text.match(/через\s+(\d+)\s*(дн[а-я]*|день|недел[а-я]*|месяц[а-я]*)/))) {
    const n = Number(m[1]), unit = m[2];
    if (/^дн|^день/.test(unit)) return { date: iso(shift(n)), found: true };
    if (/^недел/.test(unit)) return { date: iso(shift(n * 7)), found: true };
    const d = new Date(base); d.setMonth(d.getMonth() + n); return { date: iso(d), found: true };
  }
  if ((m = text.match(/через\s+(недел[а-я]*|месяц[а-я]*)/))) {
    if (/^недел/.test(m[1])) return { date: iso(shift(7)), found: true };
    const d = new Date(base); d.setMonth(d.getMonth() + 1); return { date: iso(d), found: true };
  }
  if (/на выходных|в выходные|в субботу/.test(text)) { const diff = (6 - base.getDay() + 7) % 7 || 7; return { date: iso(shift(diff)), found: true }; }
  if ((m = text.match(new RegExp('(?:в|во|на|к)\\s+(' + Object.keys(WEEKDAYS).join('|') + ')')))) {
    const diff = (WEEKDAYS[m[1]] - base.getDay() + 7) % 7 || 7; return { date: iso(shift(diff)), found: true };
  }
  if (/в конце месяца|до конца месяца/.test(text)) return { date: iso(new Date(now.getFullYear(), now.getMonth() + 1, 0, 12)), found: true };
  if ((m = text.match(/(?:^|\s)(?:до|к|на)?\s*(\d{1,2})\s*(?:-?го\s+)?числа/))) {
    const day = Number(m[1]);
    if (day >= 1 && day <= 31) {
      let d = new Date(now.getFullYear(), now.getMonth(), day, 12);
      if (d < today0) d = new Date(now.getFullYear(), now.getMonth() + 1, day, 12);
      return { date: iso(d), found: true };
    }
  }
  return { date: iso(shift(7)), found: false };
}

function stripDatePhrases(text) {
  return text
    .replace(new RegExp('(?:(?<![а-яa-z\d])(?:на|к|до|в|во)\\s+)?\\d{1,2}\\s+' + MONTH_RE + '(?:\\s+\\d{4})?', 'g'), ' ')
    .replace(/(?:(?<![а-яa-z\d])(?:на|к|до)\s+)?(?<![\d.])\d{1,2}[.\/]\d{1,2}(?:[.\/]\d{2,4})?(?![\d])/g, ' ')
    .replace(/через\s+(?:\d+\s*)?(?:дн[а-я]*|день|недел[а-я]*|месяц[а-я]*)/g, ' ')
    .replace(/(?:(?<![а-яa-z\d])(?:на|в|к|до)\s+)?(?<![а-яa-z\d])(?:послезавтра|позавчера|завтра|сегодня|вчера)(?![а-яa-z\d])/g, ' ')
    .replace(/(?<![а-яa-z\d])(?:на|в)\s+выходных|(?<![а-яa-z\d])в\s+выходные(?![а-яa-z\d])/g, ' ')
    .replace(new RegExp('(?<![а-яa-z\d])(?:в|во|на|к)\\s+(?:' + Object.keys(WEEKDAYS).join('|') + ')(?![а-яa-z\d])', 'g'), ' ')
    .replace(/(?<![а-яa-z\d])(?:в|до)\s+конце\s+месяца|до конца месяца/g, ' ')
    .replace(/(?:(?<![а-яa-z\d])(?:до|к|на)\s+)?\d{1,2}\s*(?:-?го\s+)?числа/g, ' ');
}

function voiceAmount(rawText) {
  const text = stripDatePhrases(wordsToDigits(rawText));
  let m = text.match(/(?:за|на сумму|стоимостью|по цене|цена|ценой|около|примерно|потратил[а]?|заплатил[а]?|оплатил[а]?|получил[а]?|заработал[а]?|пришло|пришла|минус|плюс)\s*(?:порядка\s+)?(\d+(?:[.,]\d+)?)/);
  if (!m) m = text.match(/(\d+(?:[.,]\d+)?)\s*(?:руб[а-я.]*|₽|р(?![а-яa-z\d]))/);
  if (!m) { const all = [...text.matchAll(/(?<![\d.])(\d+(?:[.,]\d+)?)(?![\d.])/g)]; m = all.length ? all[all.length - 1] : null; }
  const amount = m ? Math.round(parseFloat(m[1].replace(',', '.'))) : 0;
  return amount > 0 && amount < 1e9 ? amount : 0;
}

const CATEGORY_RULES = [
  ['Кредит', /кредит|ипотек|рассрочк|займ/],
  ['Жильё', /общежит|аренд|квартплат|жкх|коммунал|квартир|съем|интернет|за свет|электричеств/],
  ['Подписки', /подписк|netflix|spotify|яндекс плюс|яндекс музык|кинопоиск|youtube/],
  ['Здоровье', /аптек|лекарств|врач|стоматолог|зуб|анализ|витамин|клиник|медицин|спортзал|абонемент/],
  ['Продукты', /продукт|молок|хлеб|овощ|фрукт|мясо|мяса|пятерочк|магнит|ашан|вкусвилл|(?<![а-яa-z\d])еда(?![а-яa-z\d])|(?<![а-яa-z\d])еду(?![а-яa-z\d])/],
  ['Кафе и рестораны', /кафе|ресторан|кофе|обед|ужин|завтрак|пицц|суши|бургер|доставк[а-я]* еды/],
  ['Транспорт', /такси|метро|автобус|проезд|бензин|заправк|парковк|самокат|каршеринг|электричк/],
  ['Учёба', /учеб|курс|книг|репетитор|универ|институт|семестр|тетрад|лекци|экзамен/],
];
const INCOME_RULES = [
  ['Зарплата', /зарплат|аванс|оклад|премия|премию/],
  ['Фриланс', /фриланс|проект|заказ|подработк|гонорар/],
  ['Подарки', /подарил|подарок|подарили|подарка/],
];
function voiceCategory(text, { wish = false, kind = 'expense', isPurchase = false } = {}) {
  const t = normalizeSpeech(text);
  if (kind === 'income') { for (const [cat, re] of INCOME_RULES) if (re.test(t)) return cat; return 'Другое'; }
  for (const [cat, re] of CATEGORY_RULES) if (re.test(t)) return cat;
  if (wish) return 'Захотелось';
  return isPurchase ? 'Покупки' : 'Другое';
}

const VOICE_PAYMENT_RE = /оплат|заплат|платеж|взнос|штраф|налог|кредит|ипотек|жкх|аренд|общежит|квартплат|подписк|абонемент|интернет|за свет|коммунал/;
const VOICE_WISH_RE = /(?<![а-яa-z\d])(?:хочу|хочется|захотел[а-я]*|захотелось|мечтаю|хотел[а]?|хотелось бы|хотелка)(?![а-яa-z\d])/;
const VOICE_STRONG_PLAN_RE = /(?<![а-яa-z\d])(?:хочу|хочется|захотел[а-я]*|планирую|собираюсь|мечтаю|хотел[а]?|запланируй[а-я]*|добавь(?: в)? план[а-я]*|в планы)(?![а-яa-z\d])/;
const VOICE_WEAK_PLAN_RE = /(?<![а-яa-z\d])(?:надо|нужно|необходимо|не забыть)(?![а-яa-z\d])/;
const VOICE_PAST_EXPENSE_RE = /(?<![а-яa-z\d])(?:потратил[а-я]*|купил[а-я]*|заплатил[а-я]*|оплатил[а-я]*|отдал[а-я]*|взял[а-я]*|снял[а-я]*|минус)(?![а-яa-z\d])/;
const VOICE_PAST_INCOME_RE = /(?<![а-яa-z\d])(?:получил[а-я]*|заработал[а-я]*|пришл[аои]|перевели|вернули|кэшбэк|кешбэк|зачислили|плюс)(?![а-яa-z\d])/;
const VOICE_NOTE_RE = /^(?:новая\s+)?(?:заметк[а-я]*|запиши|записать|запись|дневник|в дневник|заметь|мысль|идея|запомни)(?![а-я])[\s,:.\-—]*/;

function titleCase(s) { return s ? s[0].toUpperCase() + s.slice(1) : s; }
function cleanTitle(s) {
  let r = s.replace(/\s{2,}/g, ' ').trim();
  r = r.replace(/^(?:[,.\-—:;]|\s|(?<![а-яa-z\d])(?:на|в|во|к|до|за|по|и|а|то|что|чтобы|мне|себе|ещё|еще)(?![а-яa-z\d]))+/g, '');
  r = r.replace(/(?:[,.\-—:;]|\s|(?<![а-яa-z\d])(?:на|в|во|к|до|за|по|и|а|то|что|чтобы|ещё|еще)(?![а-яa-z\d]))+$/g, '');
  return r.trim();
}
function detectMood(text) {
  const t = normalizeSpeech(text);
  if (/идея|придумал|а что если|можно было бы/.test(t)) return 'idea';
  if (/важно|не забыть|срочно|обязательно|запомнить/.test(t)) return 'important';
  if (/(?<![а-яa-z\d])рад(?![а-яa-z\d])|(?<![а-яa-z\d])рада(?![а-яa-z\d])|круто|классн|отличн|счастлив|прекрасн|здорово|порадовал|удалось|получилось|хорош/.test(t)) return 'good';
  return 'calm';
}

/* Главная функция: фраза → { intent, ... } */
function parseVoiceCommand(transcript, { mode = 'auto', page = 'dashboard', now = new Date() } = {}) {
  const original = String(transcript || '').replace(/\s+/g, ' ').trim();
  const text = wordsToDigits(original);
  const norm = normalizeSpeech(original);
  if (!norm) return { intent: 'empty' };
  const amount = voiceAmount(original);
  const when = voiceDate(original, now);
  const noteTrigger = VOICE_NOTE_RE.test(norm);
  const infinitive = /(?<![а-яa-z\d])(?:купить|оплатить|заплатить)(?![а-яa-z\d])/.test(norm);
  const strongPlan = VOICE_STRONG_PLAN_RE.test(norm);
  const planWords = strongPlan || VOICE_WEAK_PLAN_RE.test(norm);
  const pastIncome = VOICE_PAST_INCOME_RE.test(norm) && !planWords;
  const pastExpense = VOICE_PAST_EXPENSE_RE.test(norm) && !planWords && !infinitive;
  const futureDate = when.found && when.date > isoDate(now);
  const planish = planWords || infinitive || (futureDate && !pastExpense && !pastIncome);

  let intent = mode;
  if (mode === 'auto') {
    if (noteTrigger) intent = 'note';
    else if (strongPlan || infinitive || (planish && amount)) intent = 'plan';
    else if ((pastIncome || pastExpense) && amount) intent = 'transaction';
    else if (page === 'notes') intent = 'note';
    else if (amount) intent = 'transaction';
    else intent = 'note';
  }

  if (intent === 'note') {
    let body = original.replace(new RegExp(VOICE_NOTE_RE.source, 'i'), '').trim() || original;
    body = titleCase(body.replace(/^[,.:\-—\s]+/, ''));
    return { intent: 'note', text: body, mood: detectMood(original), date: isoDate(now), complete: body.length > 0 };
  }

  const isPaymentLike = VOICE_PAYMENT_RE.test(norm);
  const wish = VOICE_WISH_RE.test(norm);
  let title = stripDatePhrases(text);
  title = title
    .replace(/(?:за|на сумму|стоимостью|по цене|цена|ценой|около|примерно|порядка)\s*\d+(?:[.,]\d+)?\s*(?:руб[а-я.]*|₽|р(?![а-яa-z\d]))?/g, ' ')
    .replace(/\d+(?:[.,]\d+)?\s*(?:руб[а-я.]*|₽|р(?![а-яa-z\d]))/g, ' ')
    .replace(/(?<![\d.])\d{3,}(?![\d.])/g, ' ');
  title = title
    .replace(/(?<![а-яa-z\d])(?:я\s+)?(?:очень\s+)?(?:хочу|хочется|захотел[а-я]*|захотелось|мечтаю|планирую|собираюсь|хотел[а]?|хотелось бы)(?![а-яa-z\d])/g, ' ')
    .replace(/(?<![а-яa-z\d])(?:мне\s+)?(?:надо|нужно|необходимо|не забыть|придется)(?![а-яa-z\d])/g, ' ')
    .replace(/(?<![а-яa-z\d])(?:запланируй[а-я]*|добавь(?: в)?\s*план[а-я]*|в планы|добавить|добавь)(?![а-яa-z\d])/g, ' ')
    .replace(/(?<![а-яa-z\d])(?:я\s+)?(?:потратил[а-я]*|заплатил[а-я]*|получил[а-я]*|заработал[а-я]*|отдал[а-я]*|снял[а-я]*|взял[а-я]*|купил[а-я]*)(?![а-яa-z\d])/g, ' ')
    .replace(/(?<![а-яa-z\d])купить(?![а-яa-z\d])/g, ' ');
  const payVerb = /(?<![а-яa-z\d])(?:оплатить|заплатить)(?![а-яa-z\d])/.test(norm);
  title = title.replace(/(?<![а-яa-z\d])(?:оплатить|заплатить)(?![а-яa-z\d])/g, ' ');
  title = cleanTitle(title);
  if (payVerb && title) title = 'Оплатить ' + title;
  if (!title) title = intent === 'plan' ? (isPaymentLike ? 'Платёж' : 'Покупка') : 'Операция';
  title = titleCase(title);

  if (intent === 'plan') {
    const kind = isPaymentLike ? 'payment' : 'purchase';
    const category = voiceCategory(norm, { wish, kind: 'expense', isPurchase: true });
    return { intent: 'plan', kind, title, amount, date: when.date, dateFound: when.found, category, complete: amount > 0 };
  }
  const type = pastIncome ? 'income' : 'expense';
  const category = voiceCategory(norm, { wish: false, kind: type, isPurchase: false });
  return { intent: 'transaction', type, title, amount, date: when.found ? when.date : isoDate(now), dateFound: when.found, category, complete: amount > 0 };
}
// </parser>

/* =====================================================================
   v9 · ИНТЕРФЕЙС АККАУНТА, СИНХРОНИЗАЦИИ, PWA
   ===================================================================== */
const SUPABASE_SQL = `create table if not exists public.schetchik_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.schetchik_state enable row level security;
create policy "own row" on public.schetchik_state
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);`;

/* ---- Индикатор синхронизации ---- */
const SYNC_TEXT = {
  local:'Сохранено на устройстве', auth:'На устройстве · войти для синхронизации', pending:'Сохранено · отправляю…',
  syncing:'Синхронизация…', synced:'Сохранено в облаке ✓', offline:'Офлайн — сохранено на устройстве', error:'Ошибка облака — данные на устройстве'
};
let syncDetail = '';
function setSyncStatus(status, detail = '') {
  syncStatus = status; syncDetail = detail;
  const badge = qs('#syncBadge'); if (!badge) return;
  badge.dataset.status = status; qs('#syncText').textContent = SYNC_TEXT[status] || SYNC_TEXT.local;
  const when = lastSyncAt ? 'Последняя синхронизация: ' + new Date(lastSyncAt).toLocaleTimeString('ru-RU', { hour:'2-digit', minute:'2-digit' }) : '';
  badge.title = detail || when || 'Данные всегда сохраняются на устройстве';
  const line = qs('#syncDetail'); if (line) line.textContent = detail || (status === 'synced' ? when : '');
}
const timeLabel = ts => new Date(ts).toLocaleTimeString('ru-RU', { hour:'2-digit', minute:'2-digit' });

/* ---- Профиль в интерфейсе ---- */
const initialLetter = name => (String(name || 'Г').trim()[0] || 'Г').toUpperCase();
function applyAvatar(el, name, src) {
  if (src) { el.style.backgroundImage = `url("${src}")`; el.classList.add('has-photo'); el.textContent = ''; }
  else { el.style.backgroundImage = ''; el.classList.remove('has-photo'); el.textContent = initialLetter(name); }
}
const avatarHTML = (name, src) => src ? `<span class="avatar has-photo" style="background-image:url('${src}')"></span>` : `<span class="avatar">${escapeHtml(initialLetter(name))}</span>`;
async function fileToAvatar(file) {
  if (!file || !/^image\//.test(file.type)) throw new Error('Выберите изображение');
  if (file.size > 15 * 1024 * 1024) throw new Error('Файл слишком большой');
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise((resolve, reject) => { const i = new Image(); i.onload = () => resolve(i); i.onerror = () => reject(new Error('Не удалось открыть изображение')); i.src = url; });
    const size = 192; const canvas = document.createElement('canvas'); canvas.width = canvas.height = size; const ctx = canvas.getContext('2d');
    const side = Math.min(img.naturalWidth, img.naturalHeight); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, size, size);
    ctx.drawImage(img, (img.naturalWidth - side) / 2, (img.naturalHeight - side) / 2, side, side, 0, 0, size, size);
    return canvas.toDataURL('image/jpeg', 0.85);
  } finally { URL.revokeObjectURL(url); }
}
function setAvatar(data) {
  getProfile().avatar = data; saveProfiles();
  commit(data ? 'Фото обновлено' : 'Фото убрано', () => { state.avatar = data; }, { undo:false });
  updateProfileUI(); renderSettings();
}
const prettyName = email => { const n = String(email).split('@')[0].replace(/[._\-+]+/g, ' ').trim(); return n ? n[0].toUpperCase() + n.slice(1, 24) : 'Друг'; };
function updateProfileUI() {
  const profile = getProfile(); const name = state.userName || profile.name;
  const sub = cloud.session ? cloud.session.user.email : 'Локальный профиль';
  qs('#profileName').textContent = name; qs('#profileSub').textContent = sub;
  applyAvatar(qs('#profileAvatar'), name, state.avatar); applyAvatar(qs('#setAvatar'), name, state.avatar); qs('#avatarRemove').hidden = !state.avatar;
  qs('#setAccountTitle').textContent = cloud.session ? cloud.session.user.email : 'Локальный профиль';
  qs('#setAccountLine').textContent = cloud.session ? 'Данные синхронизируются между устройствами' : (cloud.configured() ? 'Войдите, чтобы данные были на всех устройствах' : 'Данные хранятся только на этом устройстве');
  qs('#accountAction').textContent = cloud.session ? 'Выйти' : 'Войти';
  qs('#signOutBtn').hidden = !cloud.session;
  qs('#lockName').textContent = name;
}
function onStateReplaced() {
  const profile = getProfile();
  if (profile && (profile.name !== state.userName || (profile.avatar || '') !== (state.avatar || ''))) { profile.name = state.userName; profile.avatar = state.avatar; saveProfiles(); }
  if (document.documentElement.dataset.theme !== state.theme) setTheme(state.theme, { persist:false });
  updateProfileUI(); invalidate(); scheduleRender();
  if (activePageId() === 'dashboard') qs('#pageTitle').innerHTML = greeting();
}

/* ---- Настройки ---- */
function renderSettings() {
  updateProfileUI(); renderAISettings();
  qs('#nameInput').value = state.userName;
  const cfg = LS.get('schetchik-cloud', {}) || {}; qs('#cloudUrl').value = cfg.url || SUPABASE_URL; qs('#cloudKey').value = cfg.key || SUPABASE_ANON_KEY;
  qs('#sqlBox').textContent = SUPABASE_SQL;
  qs('#pinBtnTitle').textContent = getProfile().pin ? 'Изменить или убрать PIN-код' : 'Установить PIN-код';
  qs('#profileList').innerHTML = profiles.map(p => `<div class="profile-row ${p.id === profileId ? 'current' : ''}">${avatarHTML(p.name, p.avatar)}<div class="profile-text"><b>${escapeHtml(p.name)}${p.pin ? ' 🔒' : ''}</b><small>${escapeHtml(p.email || 'Локальный профиль')}</small></div>${p.id === profileId ? '<span class="current-chip">Текущий</span>' : `<button type="button" class="profile-open" data-switch-profile="${p.id}">Открыть</button>`}${profiles.length > 1 ? `<button type="button" class="profile-del" data-del-profile="${p.id}" aria-label="Удалить профиль ${escapeHtml(p.name)}" title="Удалить профиль">${icons.x}</button>` : ''}</div>`).join('');
  setSyncStatus(syncStatus, syncDetail);
}
function openSettings(section) { renderSettings(); if (section === 'cloud') qs('#cloudDetails').open = true; if (section === 'ai') qs('#aiDetails').open = true; openModal('settingsModal'); }
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch { /* fallback */ }
  const area = document.createElement('textarea'); area.value = text; area.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(area); area.select();
  let ok = false; try { ok = document.execCommand('copy'); } catch { ok = false; } area.remove(); return ok;
}
function switchProfile(id) { LS.set('schetchik-active', id); idbSet('active', id); location.reload(); }
function deleteProfile(id) {
  const profile = profiles.find(p => p.id === id); if (!profile) return;
  if (!confirm(`Удалить профиль «${profile.name}» с этого устройства? Данные из облака (если вы входили) останутся и вернутся после входа.`)) return;
  profiles = profiles.filter(p => p.id !== id); LS.del(stateKey(id)); LS.del(sessionKey(id)); idbDel(stateKey(id));
  if (!profiles.length) profiles = [{ id:'p' + Date.now().toString(36), name:'Гость', pin:null, createdAt:Date.now() }];
  saveProfiles();
  if (id === profileId) switchProfile(profiles[0].id); else renderSettings();
}

/* ---- Вход: по умолчанию только email + код из письма ---- */
let authMode = 'code', codeSent = false;
const AUTH_TEXT = {
  code:{ title:'Вход по email', note:'Введите почту — пришлём код. Аккаунт создастся сам.', submit:'Получить код' },
  signin:{ title:'Вход с паролем', note:'', submit:'Войти' },
  signup:{ title:'Новый аккаунт', note:'Придумайте пароль от 6 символов.', submit:'Создать аккаунт' }
};
const authLinkButtons = {
  code:[['signin', 'Войти с паролем']],
  signin:[['code', 'Войти по коду'], ['signup', 'Создать аккаунт с паролем']],
  signup:[['code', 'Войти по коду']]
};
function renderAuthLinks() {
  const links = codeSent ? [['resend', 'Отправить код ещё раз'], ['code', 'Другой email']] : authLinkButtons[authMode];
  qs('#authLinks').innerHTML = links.map(([mode, label]) => `<button type="button" data-auth-mode="${mode}">${label}</button>`).join('');
}
function setAuthMode(mode) {
  authMode = mode; codeSent = false;
  const form = qs('#accountForm').elements;
  qs('#accountTitle').textContent = AUTH_TEXT[mode].title;
  qs('#authPassField').hidden = mode === 'code'; form.password.required = mode !== 'code';
  form.password.autocomplete = mode === 'signup' ? 'new-password' : 'current-password';
  qs('#authCodeField').hidden = true; form.code.required = false; form.email.readOnly = false;
  qs('#authSubmit').textContent = AUTH_TEXT[mode].submit;
  const note = cloud.configured() ? AUTH_TEXT[mode].note : 'Облако не подключено: укажите адрес проекта и ключ в настройках.';
  qs('#authNote').textContent = note; qs('#authNote').hidden = !note; qs('#authNote').classList.toggle('warn', !cloud.configured());
  renderAuthLinks();
}
function openAccount(mode = 'code') {
  if (!cloud.configured()) { openSettings('cloud'); toast('Сначала подключите Supabase (URL и ключ)'); return; }
  closeModals(); qs('#accountForm').reset(); setAuthMode(mode); LS.set('schetchik-welcomed', 1); openModal('accountModal');
}
async function afterAuth(session) {
  const profile = getProfile();
  if (profile.cloudUserId && profile.cloudUserId !== session.user.id) {
    const created = { id:'p' + Date.now().toString(36), name:session.user.email.split('@')[0], pin:null, createdAt:Date.now(), email:session.user.email, cloudUserId:session.user.id };
    profiles.push(created); saveProfiles(); LS.set(sessionKey(created.id), session); toast('Другой аккаунт — открываю отдельный профиль…');
    setTimeout(() => switchProfile(created.id), 700); return;
  }
  profile.cloudUserId = session.user.id; profile.email = session.user.email; saveProfiles(); cloud.setSession(session);
  closeModals(); updateProfileUI(); toast('Вы вошли: ' + session.user.email);
  await syncNow();
  if (state.userName === 'Гость' && !state.userNameAt) { const name = prettyName(session.user.email); getProfile().name = name; saveProfiles(); state.userName = name; save(); updateProfileUI(); if (activePageId() === 'dashboard') qs('#pageTitle').innerHTML = greeting(); }
  aiCheckAccess();
}
async function handleAuthHash() {
  const hash = location.hash;
  if (/error_description=/.test(hash)) { const msg = new URLSearchParams(hash.slice(1)).get('error_description'); history.replaceState(null, '', location.pathname + location.search + '#dashboard'); setTimeout(() => toast(authMessage({ message:msg })), 400); return; }
  if (!/access_token=/.test(hash)) return;
  const params = new URLSearchParams(hash.slice(1));
  history.replaceState(null, '', location.pathname + location.search + '#dashboard');
  if (!cloud.configured()) return;
  try { await afterAuth(await cloud.userFromToken(params.get('access_token'), params.get('refresh_token'), params.get('expires_in'))); }
  catch (error) { toast(authMessage(error)); }
}

/* ---- PIN-блокировка ---- */
let pinFails = 0, pinBlockedUntil = 0, hiddenAt = 0;
function lockApp() { if (!getProfile().pin) return; document.documentElement.dataset.locked = '1'; qs('#lockPin').value = ''; qs('#lockError').textContent = ''; setTimeout(() => qs('#lockPin').focus(), 60); }
function unlockApp() { delete document.documentElement.dataset.locked; pinFails = 0; qs('#lockPin').value = ''; }
let pinMode = 'set';
function openPinModal() {
  const has = !!getProfile().pin; pinMode = has ? 'change' : 'set';
  qs('#pinForm').reset(); qs('#pinForm').querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  qs('#pinTitle').textContent = has ? 'Изменить PIN-код' : 'Установить PIN-код';
  qs('#pinCurrentField').hidden = !has; qs('#pinForm').elements.current.required = has;
  qs('#pinForm').elements.pin.required = true; qs('#pinForm').elements.pin2.required = true;
  qs('#pinRemove').hidden = !has; openModal('pinModal');
}
const validPin = value => /^\d{4,8}$/.test(String(value));

/* ---- Установка приложения ---- */
let deferredInstall = null;
const isStandalone = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
function updateInstallUI() { const show = !isStandalone(); qsa('[data-install]').forEach(el => { el.hidden = !show; }); }
async function installApp() {
  if (deferredInstall) {
    deferredInstall.prompt(); try { await deferredInstall.userChoice; } catch { /* ignore */ }
    deferredInstall = null; updateInstallUI(); return;
  }
  qs('#installIOS').hidden = !isIOS; qs('#installOther').hidden = isIOS;
  qs('#installTitle').textContent = isIOS ? 'Установка на iPhone' : 'Установка приложения';
  openModal('installModal');
}
window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); deferredInstall = event; updateInstallUI(); });
window.addEventListener('appinstalled', () => { deferredInstall = null; updateInstallUI(); toast('Счётчик установлен — ищите иконку на экране'); });
function ensureAppleIcon() {
  const link = qs('#appleIcon'); if (!link) return;
  const img = new Image();
  img.onerror = () => {
    const svg = new Image();
    svg.onload = () => {
      try { const canvas = document.createElement('canvas'); canvas.width = canvas.height = 180; const ctx = canvas.getContext('2d'); ctx.fillStyle = '#143c35'; ctx.fillRect(0, 0, 180, 180); ctx.drawImage(svg, 0, 0, 180, 180); link.href = canvas.toDataURL('image/png'); } catch { /* ignore */ }
    };
    svg.src = 'icon.svg';
  };
  img.src = link.getAttribute('href');
}

/* ---- Дата и время: обновление после полуночи / смены часового пояса ---- */
let lastDay = isoDate(new Date());
function refreshClock() {
  const now = new Date(); const day = isoDate(now);
  qs('#todayLabel').textContent = new Intl.DateTimeFormat('ru-RU', { weekday:'long', day:'numeric', month:'long' }).format(now).replace(/^./, x => x.toUpperCase());
  qs('#budgetPageTitle').textContent = `Бюджет на ${new Intl.DateTimeFormat('ru-RU', { month:'long' }).format(now)}`;
  if (activePageId() === 'dashboard') qs('#pageTitle').innerHTML = greeting();
  if (day !== lastDay) {
    lastDay = day;
    const open = qsa('.modal-backdrop.open').length > 0;
    if (!open) { qs('#transactionDate').value = day; qs('#noteDate').value = day; qs('#planDate').value = dateFromToday(-7); qs('#shoppingDate').value = dateFromToday(-7); }
    invalidate(); scheduleRender();
  }
}

/* ---- Свайп вниз закрывает окно (на телефоне) ---- */
let swipe = null;
document.addEventListener('touchstart', event => {
  if (window.innerWidth > 760) return;
  const modal = event.target.closest('.modal'); if (!modal || event.target.closest('textarea,input,select,pre,.plan-drag-handle')) return;
  if (modal.scrollTop > 0) return;
  swipe = { modal, y:event.touches[0].clientY, dy:0 };
}, { passive:true });
document.addEventListener('touchmove', event => {
  if (!swipe) return; const dy = event.touches[0].clientY - swipe.y;
  if (dy <= 0) { swipe.dy = 0; swipe.modal.style.transform = ''; return; }
  swipe.dy = dy; swipe.modal.style.transition = 'none'; swipe.modal.style.transform = `translateY(${dy}px)`;
}, { passive:true });
document.addEventListener('touchend', () => {
  if (!swipe) return; const { modal, dy } = swipe; swipe = null; modal.style.transition = '';
  if (dy > 110) { closeModals(); setTimeout(() => { modal.style.transform = ''; }, 320); } else modal.style.transform = '';
});

/* ---- Защита от двойной отправки форм ---- */
document.addEventListener('submit', event => {
  const form = event.target; if (!(form instanceof HTMLFormElement)) return;
  if (form.dataset.busy) { event.preventDefault(); event.stopImmediatePropagation(); return; }
  form.dataset.busy = '1'; setTimeout(() => { delete form.dataset.busy; }, 450);
}, true);

/* ---- Обработчики интерфейса v9 ---- */
function wireV9() {
  qs('#syncBadge').addEventListener('click', () => {
    if (!cloud.configured()) return openSettings('cloud');
    if (!cloud.session) return openAccount('code');
    syncNow().then(() => { if (syncStatus === 'error') toast(syncDetail || 'Ошибка облака'); });
  });
  async function signOutCloud() { await cloud.signOut(); updateProfileUI(); setSyncStatus(cloud.configured() ? 'auth' : 'local'); toast('Вы вышли из облака. Данные остались на устройстве'); }
  qs('#accountAction').addEventListener('click', () => { if (cloud.session) signOutCloud(); else openAccount('code'); });
  qs('#syncNowBtn').addEventListener('click', () => { if (!cloud.configured()) return toast('Сначала подключите Supabase'); if (!cloud.session) return openAccount('code'); syncNow(); });
  qs('#signOutBtn').addEventListener('click', signOutCloud);
  qs('#saveCloud').addEventListener('click', () => {
    const url = qs('#cloudUrl').value.trim(), key = qs('#cloudKey').value.trim();
    if (url && !/^https?:\/\/[^\s]+\.[^\s]+/.test(url)) return toast('Проверьте адрес проекта: https://xxxx.supabase.co');
    LS.set('schetchik-cloud', { url, key }); updateProfileUI();
    toast(cloud.configured() ? 'Подключение сохранено' : 'Подключение очищено'); if (cloud.configured() && cloud.session) syncNow(); else setSyncStatus(cloud.configured() ? 'auth' : 'local');
  });
  qs('#copySql').addEventListener('click', async () => toast((await copyText(SUPABASE_SQL)) ? 'SQL скопирован' : 'Не удалось скопировать — выделите текст вручную'));
  qs('#copyCode').addEventListener('click', async () => toast((await copyText(makeTransferCode())) ? 'Код скопирован. Вставьте его на другом устройстве' : 'Не удалось скопировать код'));
  qs('#applyCode').addEventListener('click', () => {
    try {
      const incoming = readTransferCode(qs('#transferInput').value); const merged = mergeStates(state, incoming);
      commit('Данные объединены по коду', () => { state = merged; normalizeState(); }); qs('#transferInput').value = '';
    } catch (error) { toast(error.message || 'Не удалось прочитать код'); }
  });
  qs('#nameInput').addEventListener('change', event => {
    const name = event.target.value.trim().slice(0, 30); if (!name) { event.target.value = state.userName; return; }
    if (name === state.userName) return;
    getProfile().name = name; saveProfiles(); commit('Имя сохранено', () => { state.userName = name; }, { undo:false }); updateProfileUI();
    if (activePageId() === 'dashboard') qs('#pageTitle').innerHTML = greeting();
  });
  qs('#authLinks').addEventListener('click', async event => {
    const button = event.target.closest('[data-auth-mode]'); if (!button) return;
    const mode = button.dataset.authMode; const email = qs('#accountForm').elements.email.value;
    if (mode === 'resend') {
      try { await cloud.sendLink(email.trim().toLowerCase()); toast('Код отправлен ещё раз'); } catch (error) { toast(authMessage(error)); }
      return;
    }
    setAuthMode(mode); qs('#accountForm').elements.email.value = email;
  });
  qs('#guestBtn').addEventListener('click', () => { closeModals(); toast('Без аккаунта: данные хранятся только на этом устройстве'); });
  qs('#accountForm').addEventListener('submit', async event => {
    event.preventDefault(); if (!validateForm(event.target)) return;
    const data = new FormData(event.target); const email = String(data.get('email')).trim().toLowerCase(); const password = String(data.get('password') || '');
    const button = qs('#authSubmit'); const label = button.textContent; button.disabled = true; button.textContent = 'Подождите…';
    let restore = true;
    try {
      if (authMode === 'signin') await afterAuth(await cloud.signIn(email, password));
      else if (authMode === 'signup') {
        const session = await cloud.signUp(email, password);
        if (session) await afterAuth(session); else { toast('Проверьте почту: подтвердите адрес и войдите'); setAuthMode('signin'); restore = false; }
      } else if (!codeSent) {
        await cloud.sendLink(email); codeSent = true; restore = false;
        const form = qs('#accountForm').elements; form.email.readOnly = true; qs('#authCodeField').hidden = false; form.code.required = true;
        button.textContent = 'Войти'; qs('#authNote').hidden = false; qs('#authNote').textContent = `Код отправлен на ${email}. Введите его ниже.`;
        renderAuthLinks(); form.code.focus();
      } else await afterAuth(await cloud.verifyCode(email, String(data.get('code'))));
    } catch (error) { toast(authMessage(error)); }
    button.disabled = false; if (restore && button.textContent === 'Подождите…') button.textContent = label;
    delete event.target.dataset.busy;
  });
  qs('#setAvatar').addEventListener('click', () => qs('#avatarFile').click());
  qs('#avatarFile').addEventListener('change', async event => {
    const file = event.target.files[0]; event.target.value = ''; if (!file) return;
    try { setAvatar(await fileToAvatar(file)); } catch (error) { toast(error.message || 'Не удалось загрузить фото'); }
  });
  qs('#avatarRemove').addEventListener('click', () => setAvatar(''));
  qs('#pinBtn').addEventListener('click', openPinModal);
  qs('#newProfileBtn').addEventListener('click', () => { qs('#profileForm').reset(); openModal('profileModal'); });
  qs('#pinForm').addEventListener('submit', async event => {
    event.preventDefault(); if (!validateForm(event.target)) return;
    const form = event.target.elements; const profile = getProfile();
    if (profile.pin && !(await checkPin(profile, form.current.value))) return toast('Текущий PIN указан неверно');
    if (!validPin(form.pin.value)) return toast('PIN — от 4 до 8 цифр');
    if (form.pin.value !== form.pin2.value) return toast('PIN-коды не совпадают');
    profile.pin = await makePin(form.pin.value); saveProfiles(); closeModals(); renderSettings(); toast('PIN-код установлен');
  });
  qs('#pinRemove').addEventListener('click', async () => {
    const current = qs('#pinForm').elements.current.value; const profile = getProfile();
    if (!(await checkPin(profile, current))) { qs('#pinCurrentField').classList.add('invalid'); return toast('Введите текущий PIN, чтобы убрать его'); }
    profile.pin = null; saveProfiles(); closeModals(); renderSettings(); toast('PIN-код убран');
  });
  qs('#profileForm').addEventListener('submit', async event => {
    event.preventDefault(); if (!validateForm(event.target)) return;
    const form = event.target.elements; const pin = form.pin.value.trim();
    if (pin && !validPin(pin)) return toast('PIN — от 4 до 8 цифр');
    const created = { id:'p' + Date.now().toString(36), name:form.name.value.trim(), pin:pin ? await makePin(pin) : null, createdAt:Date.now() };
    profiles.push(created); saveProfiles(); switchProfile(created.id);
  });
  qs('#lockForm').addEventListener('submit', async event => {
    event.preventDefault(); const error = qs('#lockError');
    if (Date.now() < pinBlockedUntil) { error.textContent = `Подождите ${Math.ceil((pinBlockedUntil - Date.now()) / 1000)} с`; return; }
    if (await checkPin(getProfile(), qs('#lockPin').value)) { unlockApp(); return; }
    pinFails++; qs('#lockPin').value = ''; qs('#lockForm').classList.remove('shake'); void qs('#lockForm').offsetWidth; qs('#lockForm').classList.add('shake');
    if (pinFails >= 5) { pinBlockedUntil = Date.now() + 30000; pinFails = 0; error.textContent = 'Слишком много попыток. Подождите 30 секунд'; } else error.textContent = 'Неверный PIN';
  });
  qs('#lockForgot').addEventListener('click', () => deleteProfile(profileId));
  qsa('[data-install]').forEach(button => button.addEventListener('click', installApp));
  document.addEventListener('click', event => {
    let el;
    if ((el = event.target.closest('[data-switch-profile]'))) switchProfile(el.dataset.switchProfile);
    if ((el = event.target.closest('[data-del-profile]'))) deleteProfile(el.dataset.delProfile);
  });
  window.addEventListener('online', () => scheduleSync(300));
  window.addEventListener('offline', () => setSyncStatus('offline'));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { hiddenAt = Date.now(); if (syncStatus === 'pending') syncNow(); return; }
    refreshClock();
    if (getProfile().pin && hiddenAt && Date.now() - hiddenAt > 120000) lockApp();
    scheduleSync(200);
  });
  window.addEventListener('pagehide', () => { if (syncStatus === 'pending') syncNow(); });
  setInterval(() => { if (!document.hidden) syncNow(); }, 30000);
  setInterval(() => { if (!document.hidden) refreshClock(); }, 60000);
}

/* ---- Восстановление из IndexedDB, если localStorage очищен ---- */
async function recoverFromBackup() {
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch { /* ignore */ }
  const savedProfiles = await idbGet('profiles');
  if (profilesWereMissing && Array.isArray(savedProfiles) && savedProfiles.length) {
    profiles = savedProfiles; LS.set('schetchik-profiles', profiles);
    const active = await idbGet('active'); LS.set('schetchik-active', profiles.find(p => p.id === active) ? active : profiles[0].id);
    location.reload(); return;
  }
  idbSet('profiles', profiles); idbSet('active', profileId);
  const backup = await idbGet(stateKey());
  if (backup && typeof backup === 'object' && Array.isArray(backup.transactions)) {
    const merged = mergeStates(state, backup);
    if (canon(merged) !== canon(state)) { applyMerged(merged); toast('Данные восстановлены из резервной копии браузера'); }
  }
  idbSet(stateKey(), state);
}

/* =====================================================================
   v11 · ИИ-ПОМОЩНИК (Google Gemini)
   Два способа подключения:
   1) свой ключ Gemini — хранится только на этом устройстве;
   2) промокод — запросы идут через серверную функцию Supabase «gemini-proxy»,
      ключ владельца лежит в секретах сервера и в браузер не попадает.
   Вместе с вопросом уходит краткая сводка финансов — база данных и её ключи ИИ не передаются.
   ===================================================================== */
const AI_DEFAULT_MODEL = 'gemini-3.5-flash';
const AI_ACCESS_KEY = 'schetchik-ai-access';
const AI_SYSTEM = 'Ты — личный помощник по финансам и решениям в приложении «Счётчик». Пользователь пишет заметки и идеи. Отвечай по-русски, дружелюбно и кратко (до 120 слов). Помогай принять решение: оцени идею с учётом его бюджета, планов и приоритетов, назови плюсы и риски, предложи конкретный следующий шаг. Опирайся на цифры из данных; если данных не хватает — так и скажи, ничего не выдумывай. Не обещай доходность и не давай юридических гарантий. Без вступлений и без пересказа заметки.';
const aiCfg = () => ({ key:'', model:AI_DEFAULT_MODEL, auto:true, context:true, ...(LS.get('schetchik-ai', {}) || {}) });
const aiHasAccess = () => LS.get(AI_ACCESS_KEY, false) === true;
function aiMode() { if (aiCfg().key) return 'own'; if (cloud.session && aiHasAccess()) return 'promo'; return null; }
const aiBusy = new Set(), aiDrafts = {}, aiErrors = {};
const aiCollapsed = new Set(LS.get('schetchik-ai-collapsed', []) || []);
const saveCollapsed = () => LS.set('schetchik-ai-collapsed', [...aiCollapsed]);

/* ---- Сводка финансов для ИИ ---- */
function buildFinanceContext() {
  const all = liveTx(); const now = new Date(); const monthKey = isoDate(now).slice(0, 7);
  const month = all.filter(t => t.date.startsWith(monthKey));
  const income = sum(month.filter(t => t.type === 'income')), expense = sum(month.filter(t => t.type === 'expense'));
  const balance = sum(all.filter(t => t.type === 'income')) - sum(all.filter(t => t.type === 'expense'));
  const byCategory = {}; month.filter(t => t.type === 'expense').forEach(t => { byCategory[t.category] = (byCategory[t.category] || 0) + t.amount; });
  const categories = Object.entries(byCategory).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([c, v]) => `${c}: ${fmt(v)}`).join('; ');
  const previous = [1, 2, 3].map(offset => {
    const d = new Date(now.getFullYear(), now.getMonth() - offset, 1, 12); const key = isoDate(d).slice(0, 7); const m = all.filter(t => t.date.startsWith(key));
    return `${key}: доходы ${fmt(sum(m.filter(t => t.type === 'income')))}, расходы ${fmt(sum(m.filter(t => t.type === 'expense')))}`;
  }).join('; ');
  const recent = all.slice().sort((a, b) => (b.date < a.date ? -1 : b.date > a.date ? 1 : 0) || (b.updatedAt || 0) - (a.updatedAt || 0)).slice(0, 12)
    .map(t => `${t.date} ${t.type === 'income' ? '+' : '−'}${fmt(t.amount)} ${t.title} (${t.category})`).join('\n');
  const plans = activePlans().map((p, i) => `${i + 1}. ${p.title} — ${fmt(p.amount)}, ${p.kind === 'purchase' ? 'покупка' : 'платёж'}, срок ${p.date} (через ${daysUntil(p.date)} дн.), ${p.category}`).join('\n') || 'нет';
  const shopping = live(state.shopping).filter(i => !i.done).slice(0, 15).map(i => `${i.title}${i.amount ? ' — ' + fmt(i.amount) : ''}${i.priority === 'high' ? ' (важно)' : ''}`).join('; ') || 'нет';
  const empty = !all.length && !activePlans().length ? '\n(Данных пока почти нет — пользователь только начал пользоваться приложением.)' : '';
  return `Сегодня: ${isoDate(now)}\nБаланс (за всё время): ${fmt(balance)}\nЭтот месяц: доходы ${fmt(income)}, расходы ${fmt(expense)}; бюджет месяца ${fmt(state.budget)} (потрачено ${state.budget ? Math.round(expense / state.budget * 100) : 0}%)\nРасходы по категориям: ${categories || 'нет'}\nПрошлые месяцы: ${previous}\nПланы по приоритету (1 — самый важный):\n${plans}\nСписок покупок: ${shopping}\nПоследние операции:\n${recent || 'нет'}${empty}`;
}

/* ---- Запросы к Gemini: напрямую (свой ключ) или через сервер (промокод) ---- */
async function geminiDirect(payload) {
  const cfg = aiCfg(); let response;
  try {
    response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(cfg.model || AI_DEFAULT_MODEL)}:generateContent`, {
      method:'POST', headers:{ 'Content-Type':'application/json', 'x-goog-api-key':cfg.key }, body:JSON.stringify(payload)
    });
  } catch { throw Object.assign(new Error('network'), { code:'network' }); }
  const data = await response.json().catch(() => null);
  if (!response.ok) { const error = new Error((data && data.error && data.error.message) || ('HTTP ' + response.status)); error.status = response.status; throw error; }
  return data;
}
async function proxyCall(body) {
  const { url, key } = cloud.cfg(); let token;
  try { token = await cloud.token(); } catch (error) { throw Object.assign(new Error('auth'), { code:error.code === 'network' ? 'network' : 'auth' }); }
  let response;
  try { response = await fetch(url + '/functions/v1/gemini-proxy', { method:'POST', headers:{ apikey:key, Authorization:'Bearer ' + token, 'Content-Type':'application/json' }, body:JSON.stringify(body) }); }
  catch { throw Object.assign(new Error('network'), { code:'network' }); }
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error('HTTP ' + response.status); error.status = response.status;
    if (data && typeof data.error === 'string') error.code = data.error; else if (data && data.error && data.error.message) error.message = data.error.message;
    else if (response.status === 404) error.code = 'no_function';
    throw error;
  }
  return data;
}
async function callGemini(contents, system, extra = {}) {
  const mode = aiMode(); if (!mode) throw Object.assign(new Error('no key'), { code:'nokey' });
  const payload = { systemInstruction:{ parts:[{ text:system }] }, contents, generationConfig:{ temperature:0.7, maxOutputTokens:1400, ...extra } };
  let data;
  try { data = mode === 'own' ? await geminiDirect(payload) : await proxyCall({ action:'chat', payload }); }
  catch (error) { if (error.code === 'no_access') LS.set(AI_ACCESS_KEY, false); throw error; }
  const parts = (((data || {}).candidates || [])[0] || {}).content;
  const text = ((parts && parts.parts) || []).map(p => p.text || '').join('').trim();
  if (!text) throw Object.assign(new Error('empty'), { code:'empty', blocked:!!(data && data.promptFeedback && data.promptFeedback.blockReason) });
  return text;
}
function aiErrorMessage(error) {
  const code = error.code;
  if (code === 'nokey') return 'Подключите помощника: введите промокод или свой ключ Gemini в настройках.';
  if (code === 'network') return 'Нет связи. Проверьте интернет.';
  if (code === 'auth') return 'Войдите в аккаунт, чтобы пользоваться помощником по промокоду.';
  if (code === 'no_access') return 'Доступ по промокоду не найден — введите промокод в настройках.';
  if (code === 'limit') return 'Суточный лимит помощника исчерпан — попробуйте завтра.';
  if (code === 'no_function') return 'Сервер помощника не подключён (функция gemini-proxy не найдена).';
  if (code === 'no_gemini_key') return 'На сервере не задан ключ Gemini (секрет GEMINI_API_KEY).';
  if (code === 'empty') return error.blocked ? 'Gemini отказался отвечать на этот текст.' : 'Gemini вернул пустой ответ — попробуйте ещё раз.';
  if (error.status === 400 && /API key/i.test(error.message)) return 'Ключ Gemini не подошёл — проверьте, что он скопирован целиком.';
  if (error.status === 400) return 'Gemini не принял запрос: ' + String(error.message).slice(0, 120);
  if (error.status === 403) return 'Нет доступа: ключ ограничен или Gemini API выключен для проекта.';
  if (error.status === 404) return 'Модель не найдена — измените название модели в настройках помощника.';
  if (error.status === 429) return 'Лимит запросов Gemini исчерпан — подождите минуту.';
  return 'Ошибка помощника: ' + String(error.message || error.status || '').slice(0, 120);
}

/* ---- Промокод ---- */
async function aiCheckAccess() {
  if (!cloud.configured() || !cloud.session) return;
  try { await proxyCall({ action:'status' }); LS.set(AI_ACCESS_KEY, true); }
  catch (error) { if (error.code === 'no_access') LS.set(AI_ACCESS_KEY, false); }
  if (qs('#promoStatus')) renderAISettings();
}
async function redeemPromo(code) {
  if (!cloud.session) { toast('Сначала войдите по email — доступ привязывается к аккаунту'); openAccount('code'); return false; }
  try { await proxyCall({ action:'redeem', code }); LS.set(AI_ACCESS_KEY, true); toast('Промокод принят — помощник подключён ✓'); renderAISettings(); return true; }
  catch (error) {
    if (error.code === 'bad_code') toast('Промокод не подошёл');
    else toast(aiErrorMessage(error));
    return false;
  }
}

/* ---- Заметки: диалог ---- */
function aiFormat(text) {
  return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/^[*-]\s+/gm, '• ').replace(/\n/g, '<br>');
}
function aiMessagesHTML(item) {
  const thread = item.thread || []; const busy = aiBusy.has(item.id); const error = aiErrors[item.id];
  const messages = thread.map(m => `<div class="ai-msg ${m.r}">${m.r === 'ai' ? '<span class="ai-badge">ИИ</span>' : ''}<div class="ai-text">${aiFormat(m.t)}</div></div>`).join('');
  const typing = busy ? '<div class="ai-msg ai"><span class="ai-badge">ИИ</span><div class="ai-text ai-typing">Думаю<span>.</span><span>.</span><span>.</span></div></div>' : '';
  const failure = error ? `<div class="ai-error">${escapeHtml(error)} <button type="button" data-ai-retry="${item.id}">Повторить</button></div>` : '';
  return messages + typing + failure;
}
function aiFormHTML(item) {
  const busy = aiBusy.has(item.id);
  return `<form class="ai-ask" data-ai-form="${item.id}"><input name="q" placeholder="Спросить помощника…" value="${escapeHtml(aiDrafts[item.id] || '')}" autocomplete="off" enterkeyhint="send" ${busy ? 'disabled' : ''} /><button type="submit" aria-label="Отправить" ${busy ? 'disabled' : ''}>${icons['arrow-up']}</button></form>`;
}
function aiThreadHTML(item) {
  const thread = item.thread || []; const busy = aiBusy.has(item.id); const error = aiErrors[item.id];
  if (!thread.length && !busy && !error) return '';
  const collapsed = aiCollapsed.has(item.id) && !busy && !error;
  const head = `<div class="ai-head"><span class="ai-title">Разговор с ИИ · ${thread.length}</span><span class="ai-head-actions"><button type="button" data-ai-open="${item.id}" title="Открыть разговор целиком">На весь экран</button><button type="button" data-ai-toggle="${item.id}">${collapsed ? 'Показать' : 'Скрыть разговор'}</button></span></div>`;
  if (collapsed) return `<div class="ai-thread collapsed">${head}</div>`;
  return `<div class="ai-thread">${head}<div class="ai-msgs">${aiMessagesHTML(item)}</div>${aiFormHTML(item)}</div>`;
}
function renderNotesIfActive() { if (activePageId() === 'notes') renderNotes(); renderAiChatModal(); }

let aiChatNoteId = null;
function renderAiChatModal() {
  if (!aiChatNoteId || !qs('#aiChatModal').classList.contains('open')) return;
  const note = state.notes.find(n => n.id === aiChatNoteId && !n.deletedAt);
  if (!note) { closeModals(); return; }
  qs('#aiChatNote').textContent = note.text;
  const body = qs('#aiChatBody'); const nearBottom = body.scrollHeight - body.scrollTop - body.clientHeight < 80;
  body.innerHTML = `<div class="ai-msgs full">${aiMessagesHTML(note)}</div>`;
  qs('#aiChatForm').innerHTML = aiFormHTML(note);
  if (nearBottom || !body.dataset.ready) { body.scrollTop = body.scrollHeight; body.dataset.ready = '1'; }
}
function openAiChat(noteId) {
  const note = state.notes.find(n => n.id === noteId && !n.deletedAt); if (!note) return;
  aiChatNoteId = noteId; qs('#aiChatBody').dataset.ready = ''; openModal('aiChatModal'); renderAiChatModal();
  setTimeout(() => { const input = qs('#aiChatForm input'); if (input && !input.disabled) input.focus(); }, 200);
}

async function askAI(noteId, question = '') {
  const cfg = aiCfg();
  if (!aiMode()) { openSettings('ai'); toast('Подключите помощника: промокод или ключ Gemini'); return; }
  const note = state.notes.find(n => n.id === noteId && !n.deletedAt); if (!note || aiBusy.has(noteId)) return;
  if (question) { note.thread = [...(note.thread || []), { r:'me', t:question, at:Date.now() }]; save(); }
  aiCollapsed.delete(noteId); saveCollapsed();
  aiBusy.add(noteId); delete aiErrors[noteId]; renderNotesIfActive();
  const system = AI_SYSTEM + (cfg.context ? '\n\nДанные пользователя из приложения:\n' + buildFinanceContext() : '\n\n(Финансовые данные пользователя недоступны — отвечай только по тексту заметки.)');
  const thread = note.thread || [];
  const raw = [{ role:'user', text:`Моя заметка:\n${note.text}` + (thread.length ? '' : '\n\nПрокомментируй и помоги принять решение.') }, ...thread.map(m => ({ role:m.r === 'ai' ? 'model' : 'user', text:m.t }))];
  const contents = []; raw.forEach(m => { const last = contents[contents.length - 1]; if (last && last.role === m.role) last.parts[0].text += '\n\n' + m.text; else contents.push({ role:m.role, parts:[{ text:m.text }] }); });
  try {
    const reply = await callGemini(contents, system);
    const fresh = state.notes.find(n => n.id === noteId && !n.deletedAt);
    if (fresh) { fresh.thread = [...(fresh.thread || []), { r:'ai', t:reply, at:Date.now() }]; save(); }
    if (activePageId() !== 'notes' && !qs('#aiChatModal').classList.contains('open')) toast('Помощник ответил на заметку');
  } catch (error) { aiErrors[noteId] = aiErrorMessage(error); }
  aiBusy.delete(noteId); renderNotesIfActive();
}
function maybeAutoAI(noteId) {
  const cfg = aiCfg(); if (!aiMode() || !cfg.auto) return;
  setTimeout(() => { const note = state.notes.find(n => n.id === noteId && !n.deletedAt); if (note && note.text.length >= 15 && !(note.thread || []).length) askAI(noteId); }, 250);
}

/* ---- ИИ-планировщик: из пары слов делает готовые планы ---- */
const planner = { log:[], busy:false, error:'' };
const PLANNER_SCHEMA = {
  type:'OBJECT',
  properties:{
    reply:{ type:'STRING' },
    plans:{ type:'ARRAY', items:{ type:'OBJECT', properties:{ title:{ type:'STRING' }, kind:{ type:'STRING', enum:['payment', 'purchase'] }, amount:{ type:'NUMBER' }, date:{ type:'STRING' }, category:{ type:'STRING' } }, required:['title', 'kind', 'amount', 'date', 'category'] } }
  },
  required:['reply', 'plans']
};
const plannerSystem = () => `Ты — планировщик расходов в приложении «Счётчик». Пользователь коротко описывает цель или трату, ты превращаешь это в готовые планы.
Правила:
- Если данных не хватает (сумма, срок, цель), задай 1–2 коротких вопроса в поле reply, а plans верни пустым. Не задавай лишнего: если можно разумно предположить (например, типичную цену), предположи и скажи об этом в reply.
- Когда данных достаточно или пользователь согласился, верни конкретные plans: короткое название, kind ("payment" — обязательный платёж или взнос, "purchase" — покупка/желание), amount — целое число в рублях, date — YYYY-MM-DD (не раньше сегодняшней даты), category — одна из: ${expenseCategories().join(', ')}.
- Для накоплений на цель, если пользователь просит или это уместно, разбей на ежемесячные взносы (kind "payment") с понятными датами.
- Учитывай баланс, бюджет, уже существующие планы и их приоритет; не дублируй существующие планы. Планы расположи по приоритету: важное и срочное — первым.
- reply — 1–3 коротких предложения по-русски: что понял и что предлагаешь. Не выдумывай данные пользователя.`;
function parsePlannerJson(text) {
  const clean = String(text).replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
  let data; try { data = JSON.parse(clean); } catch { const m = clean.match(/\{[\s\S]*\}/); data = m ? JSON.parse(m[0]) : { reply:clean, plans:[] }; }
  const plans = (Array.isArray(data.plans) ? data.plans : []).map(validatePlannedPlan).filter(Boolean).slice(0, 12);
  return { reply:String(data.reply || 'Готово.').slice(0, 800), plans };
}
function validatePlannedPlan(p) {
  if (!p || typeof p !== 'object') return null;
  const title = String(p.title || '').trim().slice(0, 80); const amount = Math.round(Number(p.amount));
  if (!title || !(amount > 0) || amount > 1e9) return null;
  const kind = p.kind === 'payment' ? 'payment' : 'purchase';
  let date = String(p.date || ''); const parsed = new Date(date + 'T12:00:00');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || isNaN(parsed)) date = dateFromToday(-7);
  else if (date < isoDate(new Date())) date = isoDate(new Date());
  const category = expenseCategories().includes(p.category) ? p.category : (kind === 'payment' ? 'Другое' : 'Покупки');
  return { title, kind, amount, date, category };
}
const plannerChips = ['Хочу накопить на отпуск', 'Купить ноутбук до конца года', 'Разложить платежи на месяц'];
function plannerPlanHTML(p, logIndex, planIndex) {
  const meta = iconFor(p.category);
  return `<div class="proposal ${p.added ? 'added' : ''}"><span class="proposal-icon" style="color:${meta.color};background:${meta.bg}">${icons[meta.icon]}</span><div class="proposal-main"><b>${escapeHtml(p.title)}</b><small>${p.kind === 'purchase' ? 'Покупка' : 'Платёж'} · ${p.category} · ${dateDisplay(p.date)}</small></div><b class="proposal-amount">${fmt(p.amount)}</b><button type="button" class="proposal-add" data-planner-add="${logIndex}:${planIndex}" ${p.added ? 'disabled' : ''}>${p.added ? 'Добавлено ✓' : 'Добавить'}</button></div>`;
}
function renderPlanner() {
  const log = qs('#plannerLog'); if (!log) return;
  let html = '';
  if (!planner.log.length) html = `<div class="ai-msg ai"><span class="ai-badge">ИИ</span><div class="ai-text">Опишите, что хотите запланировать, — хватит и пары слов. Если чего-то не хватит, я спрошу.</div></div><div class="planner-chips">${plannerChips.map(c => `<button type="button" data-planner-chip="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('')}</div>`;
  planner.log.forEach((m, i) => {
    if (m.r === 'me') html += `<div class="ai-msg me"><div class="ai-text">${escapeHtml(m.text)}</div></div>`;
    else {
      const unadded = m.plans.filter(p => !p.added).length;
      html += `<div class="ai-msg ai"><span class="ai-badge">ИИ</span><div class="ai-text">${aiFormat(m.text)}${m.plans.length ? `<div class="proposals">${m.plans.map((p, j) => plannerPlanHTML(p, i, j)).join('')}${unadded > 1 ? `<button type="button" class="proposal-all" data-planner-add="${i}:all">Добавить все (${unadded})</button>` : ''}</div>` : ''}</div></div>`;
    }
  });
  if (planner.busy) html += '<div class="ai-msg ai"><span class="ai-badge">ИИ</span><div class="ai-text ai-typing">Думаю<span>.</span><span>.</span><span>.</span></div></div>';
  if (planner.error) html += `<div class="ai-error">${escapeHtml(planner.error)} <button type="button" data-planner-retry>Повторить</button></div>`;
  log.innerHTML = html; log.scrollTop = log.scrollHeight;
  const input = qs('#plannerForm input'); const send = qs('#plannerForm button'); if (input) input.disabled = planner.busy; if (send) send.disabled = planner.busy;
  qs('#plannerReset').hidden = !planner.log.length;
}
function openPlanner() {
  if (!aiMode()) { openSettings('ai'); toast('Подключите помощника: промокод или ключ Gemini'); return; }
  openModal('plannerModal'); renderPlanner(); setTimeout(() => { const input = qs('#plannerForm input'); if (input && !input.disabled) input.focus(); }, 200);
}
async function plannerSend(text) {
  text = String(text || '').trim(); if (!text || planner.busy) return;
  if (!aiMode()) { toast('Подключите помощника в настройках'); return; }
  if (text !== '__retry__') planner.log.push({ r:'me', text });
  planner.busy = true; planner.error = ''; renderPlanner();
  const cfg = aiCfg();
  const system = plannerSystem() + '\n\nДанные пользователя из приложения:\n' + (cfg.context ? buildFinanceContext() : `Сегодня: ${isoDate(new Date())}\n(Финансовые данные пользователя недоступны.)`);
  const raw = planner.log.map(m => ({ role:m.r === 'me' ? 'user' : 'model', text:m.r === 'me' ? m.text : (m.raw || m.text) }));
  const contents = []; raw.forEach(m => { const last = contents[contents.length - 1]; if (last && last.role === m.role) last.parts[0].text += '\n\n' + m.text; else contents.push({ role:m.role, parts:[{ text:m.text }] }); });
  try {
    const answer = await callGemini(contents, system, { responseMimeType:'application/json', responseSchema:PLANNER_SCHEMA, temperature:0.5, maxOutputTokens:1800 });
    const parsed = parsePlannerJson(answer);
    planner.log.push({ r:'ai', text:parsed.reply, raw:answer, plans:parsed.plans.map(p => ({ ...p, added:false })) });
  } catch (error) { planner.error = error instanceof SyntaxError ? 'Не удалось разобрать ответ — попробуйте переформулировать.' : aiErrorMessage(error); }
  planner.busy = false; renderPlanner();
}
function plannerAdd(ref) {
  const [logIndex, which] = ref.split(':'); const entry = planner.log[Number(logIndex)]; if (!entry || !entry.plans) return;
  const list = which === 'all' ? entry.plans.filter(p => !p.added) : [entry.plans[Number(which)]].filter(p => p && !p.added);
  if (!list.length) return;
  commit(list.length > 1 ? `Добавлено планов: ${list.length}` : `План добавлен: «${list[0].title}»`, () => {
    const base = nextTopPos(); const n = list.length; const stampId = Date.now().toString(36);
    list.forEach((p, i) => state.plans.push({ id:`p${stampId}${i}`, kind:p.kind, title:p.title, category:p.category, amount:p.amount, date:p.date, done:false, pos:base - (n - 1) + i }));
  });
  list.forEach(p => { p.added = true; }); renderPlanner();
}

/* ---- Настройки помощника ---- */
function renderAISettings() {
  const c = aiCfg(); qs('#aiKey').value = c.key; qs('#aiModel').value = c.model; qs('#aiAuto').checked = c.auto; qs('#aiContext').checked = c.context;
  const status = qs('#promoStatus'); const access = aiHasAccess() && !!cloud.session;
  status.hidden = !access && !c.key; status.textContent = c.key ? 'Работает через ваш ключ Gemini' : 'Доступ по промокоду активен ✓';
  qs('#promoRow').hidden = !!c.key || access;
}
function wireAI() {
  const store = () => LS.set('schetchik-ai', { key:qs('#aiKey').value.trim(), model:qs('#aiModel').value.trim() || AI_DEFAULT_MODEL, auto:qs('#aiAuto').checked, context:qs('#aiContext').checked });
  ['#aiKey', '#aiModel', '#aiAuto', '#aiContext'].forEach(sel => qs(sel).addEventListener('change', () => { store(); renderAISettings(); }));
  qs('#promoApply').addEventListener('click', async () => {
    const input = qs('#promoCode'); const code = input.value.trim(); if (!code) return toast('Введите промокод');
    const button = qs('#promoApply'); button.disabled = true;
    if (await redeemPromo(code)) input.value = '';
    button.disabled = false;
  });
  qs('#promoCode').addEventListener('keydown', event => { if (event.key === 'Enter') { event.preventDefault(); qs('#promoApply').click(); } });
  qs('#aiTest').addEventListener('click', async () => {
    store(); const button = qs('#aiTest'); button.disabled = true;
    try { await callGemini([{ role:'user', parts:[{ text:'Ответь одним словом: готов?' }] }], 'Отвечай одним словом по-русски.'); toast('Помощник подключён ✓'); }
    catch (error) { toast(aiErrorMessage(error)); }
    button.disabled = false;
  });
  qs('#aiClear').addEventListener('click', () => { LS.del('schetchik-ai'); renderAISettings(); toast('Ключ удалён с этого устройства'); });
  qs('#openPlanner').addEventListener('click', openPlanner);
  qs('#plannerReset').addEventListener('click', () => { planner.log = []; planner.error = ''; renderPlanner(); });
  qs('#plannerForm').addEventListener('submit', event => { event.preventDefault(); const input = event.target.elements.q; const text = input.value; input.value = ''; plannerSend(text); });
  document.addEventListener('input', event => { const form = event.target.closest && event.target.closest('[data-ai-form]'); if (form) aiDrafts[form.dataset.aiForm] = event.target.value; });
  document.addEventListener('submit', event => {
    const form = event.target.closest && event.target.closest('[data-ai-form]'); if (!form) return;
    event.preventDefault(); const question = form.elements.q.value.trim(); if (!question) return;
    delete aiDrafts[form.dataset.aiForm]; askAI(form.dataset.aiForm, question);
  });
  document.addEventListener('click', event => {
    let el;
    if ((el = event.target.closest('[data-ai-note]'))) {
      const note = state.notes.find(n => n.id === el.dataset.aiNote);
      if (note && (note.thread || []).length) { aiCollapsed.delete(note.id); saveCollapsed(); renderNotes(); const input = qs(`[data-ai-form="${note.id}"] input`); if (input) input.focus(); } else askAI(el.dataset.aiNote);
    }
    if ((el = event.target.closest('[data-ai-retry]'))) askAI(el.dataset.aiRetry);
    if ((el = event.target.closest('[data-ai-toggle]'))) { const id = el.dataset.aiToggle; if (aiCollapsed.has(id)) aiCollapsed.delete(id); else aiCollapsed.add(id); saveCollapsed(); renderNotes(); }
    if ((el = event.target.closest('[data-ai-open]'))) openAiChat(el.dataset.aiOpen);
    if ((el = event.target.closest('[data-planner-chip]'))) plannerSend(el.dataset.plannerChip);
    if ((el = event.target.closest('[data-planner-add]'))) plannerAdd(el.dataset.plannerAdd);
    if (event.target.closest('[data-planner-retry]')) { planner.error = ''; plannerSend('__retry__'); }
  });
}

/* ===== v9: рендер только активной вкладки ===== */
const TX_PAGE = 60, NOTE_PAGE = 40;
let txLimit = TX_PAGE, noteLimit = NOTE_PAGE;
const PAGES = ['dashboard', 'transactions', 'budget', 'shopping', 'notes'];
const dirty = new Set(PAGES);
let renderFrame = 0;
const activePageId = () => { const el = qs('.page.active'); return el ? el.id : 'dashboard'; };
const renderers = {
  dashboard() { renderDashboard(); renderPlansPreview(); },
  transactions() { renderTransactions(); },
  budget() { renderBudget(); },
  shopping() { renderPlansFull(); renderShopping(); },
  notes() { renderNotes(); }
};
function renderActive() {
  const id = activePageId();
  if (dirty.has(id)) { dirty.delete(id); (renderers[id] || renderers.dashboard)(); setIcons(); }
}
function invalidate() { PAGES.forEach(page => dirty.add(page)); renderCounters(); }
function scheduleRender() { if (renderFrame) return; renderFrame = requestAnimationFrame(() => { renderFrame = 0; renderActive(); }); }
function refresh() { invalidate(); renderActive(); }
function renderCounters() { qs('#plansNavCount').textContent = activePlans().length; updateBell(); }
function greeting() {
  const hour = new Date().getHours();
  const word = hour >= 5 && hour < 12 ? 'Доброе утро' : hour < 18 && hour >= 12 ? 'Добрый день' : hour >= 18 && hour < 23 ? 'Добрый вечер' : 'Доброй ночи';
  return `${word}, ${escapeHtml(state.userName)} <span class="wave">👋</span>`;
}

/* ===== Планы (порядок хранится в поле pos, поэтому синхронизируется) ===== */
function renderPlansPreview() {
  const active = activePlans();
  qs('#plansPreview').innerHTML = active.length ? active.slice(0, 3).map(planPreviewHTML).join('') : '<div class="empty-state"><span>✓</span>Планов пока нет</div>';
}
function renderPlansFull() {
  const active = activePlans();
  qs('#plansPendingCount').textContent = active.length;
  qs('#plansBudgetSum').textContent = `${fmt(sum(active))} ожидается`;
  qs('#plansSubtitle').textContent = active.length ? `${active.length} ${plural(active.length, ['план', 'плана', 'планов'])} · по приоритету` : 'Нет ближайших платежей';
  qs('#plansFull').innerHTML = active.length ? active.map((item, index) => planRowHTML(item, index, active.length)).join('') : '<div class="empty-state"><span>✓</span>Планов пока нет. Нажмите «Добавить план», скажите голосом или «Составить с ИИ».</div>';
}
function reorderPlan(planId, targetId, after = false) {
  const list = activePlans(); const moved = list.find(plan => plan.id === planId);
  const rest = list.filter(plan => plan.id !== planId); const targetIndex = rest.findIndex(plan => plan.id === targetId);
  if (!moved || targetIndex < 0) return false;
  const index = targetIndex + (after ? 1 : 0);
  if (list.indexOf(moved) === index) return false;
  const prev = rest[index - 1], next = rest[index];
  if (prev && next && Math.abs(next.pos - prev.pos) < 1e-6) { rest.splice(index, 0, moved); rest.forEach((plan, i) => { plan.pos = i; }); }
  else moved.pos = prev && next ? (prev.pos + next.pos) / 2 : prev ? prev.pos + 1 : next.pos - 1;
  save(); refresh(); flashPlan(planId);
  return true;
}
function movePlan(id, direction) {
  const active = activePlans(); const current = active.findIndex(item => item.id === id);
  const neighbour = active[current + direction];
  if (current < 0 || !neighbour) { toast(direction < 0 ? 'Этот план уже первый' : 'Этот план уже последний'); return false; }
  const done = reorderPlan(id, neighbour.id, direction > 0);
  if (done) toast(direction < 0 ? `Поднято на место №${current}` : `Опущено на место №${current + 2}`);
  return done;
}

/* ===== Страницы, тема, данные ===== */
function activatePage(page) {
  const safe = /^[a-z]+$/.test(page || '') && qs(`#${page}`) && qs(`#${page}`).classList.contains('page') ? page : 'dashboard';
  qsa('.page').forEach(el => el.classList.toggle('active', el.id === safe));
  document.body.dataset.view = safe;
  qsa('[data-page]').forEach(el => el.classList.toggle('active', el.dataset.page === (safe === 'transactions' ? 'dashboard' : safe)));
  const titles = { dashboard:greeting(), transactions:'Все операции', budget:'Ваш бюджет', shopping:'Планы и покупки', notes:'Заметки' };
  qs('#pageTitle').innerHTML = titles[safe]; renderActive(); window.scrollTo({ top:0, behavior:'smooth' });
}
function setTheme(theme, { persist = true } = {}) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('schetchik-theme', theme); } catch { /* ignore */ }
  const toggle = qs('#themeToggle'); const isDark = theme === 'dark';
  toggle.dataset.icon = isDark ? 'sun' : 'moon';
  toggle.setAttribute('aria-label', isDark ? 'Включить светлую тему' : 'Включить тёмную тему');
  toggle.setAttribute('title', toggle.getAttribute('aria-label'));
  toggle.innerHTML = icons[toggle.dataset.icon];
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#0b1712' : '#f8f8f5');
  if (persist && state.theme !== theme) { state.theme = theme; save(); }
}
function exportData() {
  const blob = new Blob([JSON.stringify({ app:'schetchik', version:APP_VERSION, exportedAt:new Date().toISOString(), state:cleanForCloud(state) }, null, 2)], { type:'application/json' });
  const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `schetchik-${isoDate(new Date())}.json`;
  document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(link.href), 1500);
  toast('Копия данных скачана');
}
function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result); const incoming = data.state || data;
      if (!incoming || !Array.isArray(incoming.transactions)) throw new Error('bad');
      const merged = mergeStates(state, incoming);
      closeModals(); commit('Копия объединена с текущими данными', () => { state = merged; normalizeState(); });
    } catch { toast('Не удалось прочитать файл копии'); }
  };
  reader.readAsText(file);
}

const plural = (n, [one, few, many]) => { const a = Math.abs(n) % 100, b = a % 10; return a > 10 && a < 20 ? many : b > 1 && b < 5 ? few : b === 1 ? one : many; };
const daysUntil = date => {
  if (!date) return Infinity;
  const now = new Date(); now.setHours(0, 0, 0, 0);
  const due = new Date(date + 'T12:00:00'); due.setHours(0, 0, 0, 0);
  return Math.round((due - now) / 86400000);
};

/* ===== Список мелких покупок ===== */
function shoppingTiming(item) {
  if (!item.date) return { label:'Без срока', urgent:false };
  const days = daysUntil(item.date);
  if (days < 0) return { label:'Срок прошёл', urgent:true };
  if (days === 0) return { label:'Купить сегодня', urgent:true };
  if (days === 1) return { label:'Купить завтра', urgent:true };
  if (days < 8) return { label:`Через ${days} дн.`, urgent:days <= 3 };
  return { label:dateDisplay(item.date), urgent:false };
}
function shoppingItemHTML(item) {
  const meta = iconFor(item.category); const timing = shoppingTiming(item);
  const priority = item.priority === 'high' ? 'Важно' : item.priority === 'low' ? 'Можно подождать' : '';
  return `<div class="shopping-item ${item.done ? 'done':''}">
    <button class="check-control" data-toggle-shopping="${item.id}" aria-label="${item.done ? 'Вернуть в список' : 'Отметить как купленное'}">${item.done ? icons.check : ''}</button>
    <span class="shopping-icon" style="color:${meta.color};background:${meta.bg}">${icons[meta.icon]}</span>
    <div class="shopping-info" data-edit-shopping="${item.id}" title="Нажмите, чтобы изменить"><span class="shopping-name">${escapeHtml(item.title)}</span><span class="shopping-meta ${timing.urgent ? 'urgent':''}">${item.category} · ${timing.label}${priority ? `<span class="meta-prio"> · ${priority}</span>` : ''}</span></div>
    ${priority ? `<span class="priority-chip ${item.priority}">${priority}</span>` : ''}
    ${item.amount ? `<span class="shopping-price">${fmt(item.amount)}</span>` : ''}
    <button class="shopping-delete" data-edit-shopping="${item.id}" aria-label="Редактировать" title="Редактировать">${icons.edit}</button>
    <button class="shopping-delete" data-delete-shopping="${item.id}" aria-label="Удалить" title="Удалить">${icons.x}</button>
  </div>`;
}

/* ===== Планы ===== */
function planTiming(date) {
  const days = daysUntil(date);
  if (days === 0) return { short:'Сегодня', label:'Сегодня', urgent:true, days };
  if (days === 1) return { short:'Завтра', label:'Завтра', urgent:true, days };
  if (days > 1 && days < 8) return { short:`${days} дн.`, label:`Через ${days} дн.`, urgent:days <= 3, days };
  if (days < 0) return { short:'Просроч.', label:'Срок прошёл', urgent:true, days };
  return { short:dateDisplay(date), label:dateDisplay(date), urgent:false, days };
}
function planPreviewHTML(item) {
  const timing = planTiming(item.date);
  return `<div class="plan-preview"><span class="plan-date-badge ${timing.urgent ? 'urgent':''}">${timing.short}</span><div class="plan-preview-info"><span class="plan-preview-title">${escapeHtml(item.title)}</span><span class="plan-preview-meta">${item.category} · ${timing.label}</span></div><b class="plan-preview-amount">${fmt(item.amount)}</b></div>`;
}
function planRowHTML(item, index, total) {
  const timing = planTiming(item.date); const isPurchase = item.kind === 'purchase'; const meta = iconFor(item.category);
  return `<article class="plan-row ${timing.urgent ? 'urgent':''} ${index === 0 ? 'top':''}" data-plan-card="${item.id}" tabindex="0" aria-label="${escapeHtml(item.title)}, приоритет ${index + 1} из ${total}">
    <button class="plan-drag-handle" type="button" title="Зажмите и тяните вверх или вниз — так меняется приоритет" aria-label="Перетащить план">${icons.grip}</button>
    <span class="plan-rank" title="Место в приоритете">${index + 1}</span>
    <div class="plan-main">
      <div class="plan-tags"><span class="plan-kind ${isPurchase ? 'purchase':''}">${isPurchase ? icons.bag : icons.wallet}${isPurchase ? 'Покупка' : 'Платёж'}</span><span class="plan-cat"><i class="cat-dot" style="background:${meta.color}"></i>${item.category}</span>${index === 0 && total > 1 ? '<span class="plan-first">Первым делом</span>' : ''}</div>
      <h3>${escapeHtml(item.title)}</h3>
    </div>
    <div class="plan-when ${timing.urgent ? 'urgent':''}"><b>${timing.label}</b><small>${dateDisplay(item.date)}</small></div>
    <b class="plan-amount">${fmt(item.amount)}</b>
    <div class="plan-card-actions">
      <button class="plan-action" type="button" data-move-plan-up="${item.id}" title="Поднять выше" aria-label="Поднять выше" ${index === 0 ? 'disabled' : ''}>${icons['arrow-up']}</button>
      <button class="plan-action" type="button" data-move-plan-down="${item.id}" title="Опустить ниже" aria-label="Опустить ниже" ${index === total - 1 ? 'disabled' : ''}>${icons['arrow-down']}</button>
      <button class="plan-action" type="button" data-edit-plan="${item.id}" title="Редактировать" aria-label="Редактировать план">${icons.edit}</button>
      <button class="plan-action delete-plan" type="button" data-delete-plan="${item.id}" title="Удалить" aria-label="Удалить план">${icons.x}</button>
    </div>
    <button class="pay-plan" data-pay-plan="${item.id}">${isPurchase ? 'Купить' : 'Оплатить'}</button>
  </article>`;
}
function flashPlan(id) { const row = qs(`[data-plan-card="${id}"]`); if (row) { row.classList.add('moved'); setTimeout(() => row.classList.remove('moved'), 900); } }
/* Перетаскивание мышью, пальцем и пером (Pointer Events) за иконку «точки» */
let drag = null;
document.addEventListener('pointerdown', e => {
  const handle = e.target.closest('.plan-drag-handle'); if (!handle) return;
  const row = handle.closest('[data-plan-card]'); if (!row) return;
  e.preventDefault();
  drag = { id:row.dataset.planCard, row, startY:e.clientY, startScroll:window.scrollY, pointerId:e.pointerId, target:null, after:false };
  row.classList.add('dragging'); document.body.classList.add('is-dragging');
  try { handle.setPointerCapture(e.pointerId); } catch {}
});
document.addEventListener('pointermove', e => {
  if (!drag || e.pointerId !== drag.pointerId) return;
  if (e.clientY < 70) window.scrollBy(0, -16); else if (e.clientY > window.innerHeight - 70) window.scrollBy(0, 16);
  drag.row.style.transform = `translateY(${e.clientY - drag.startY + (window.scrollY - drag.startScroll)}px)`;
  const rows = qsa('[data-plan-card]').filter(row => row !== drag.row);
  rows.forEach(row => row.classList.remove('drop-before', 'drop-after'));
  drag.target = null;
  if (!rows.length) return;
  const first = rows[0].getBoundingClientRect(), last = rows[rows.length - 1].getBoundingClientRect();
  if (e.clientY < first.top + first.height / 2) { drag.target = rows[0]; drag.after = false; }
  else if (e.clientY > last.top + last.height / 2) { drag.target = rows[rows.length - 1]; drag.after = true; }
  else for (const row of rows) { const box = row.getBoundingClientRect(); if (e.clientY >= box.top && e.clientY <= box.bottom) { drag.target = row; drag.after = e.clientY > box.top + box.height / 2; break; } }
  drag.target?.classList.add(drag.after ? 'drop-after' : 'drop-before');
});
function finishDrag(cancelled) {
  if (!drag) return;
  const { id, row, target, after } = drag; drag = null;
  row.style.transform = ''; row.classList.remove('dragging'); document.body.classList.remove('is-dragging');
  qsa('.drop-before,.drop-after').forEach(el => el.classList.remove('drop-before', 'drop-after'));
  if (!cancelled && target && reorderPlan(id, target.dataset.planCard, after)) {
    const place = qsa('[data-plan-card]').findIndex(el => el.dataset.planCard === id) + 1;
    toast(`Приоритет обновлён: план теперь №${place}`);
  }
}
document.addEventListener('pointerup', e => { if (drag && e.pointerId === drag.pointerId) finishDrag(false); });
document.addEventListener('pointercancel', () => finishDrag(true));
document.addEventListener('touchmove', e => { if (drag && e.cancelable) e.preventDefault(); }, { passive:false });
document.addEventListener('keydown', e => {
  const row = e.target.closest?.('[data-plan-card]');
  if (!row || e.target !== row || !e.altKey || (e.key !== 'ArrowUp' && e.key !== 'ArrowDown')) return;
  e.preventDefault(); const id = row.dataset.planCard;
  if (movePlan(id, e.key === 'ArrowUp' ? -1 : 1)) qs(`[data-plan-card="${id}"]`)?.focus();
});

/* ===== Заметки (мини-дневник) ===== */
const noteMoods = {
  calm: { label:'Спокойно', icon:'☁', className:'calm' },
  good: { label:'Хорошо', icon:'☀', className:'good' },
  idea: { label:'Идея', icon:'✦', className:'idea' },
  important: { label:'Важно', icon:'!', className:'important' }
};
const noteQuestions = ['Что сегодня порадовало?', 'За что вы благодарны сегодня?', 'Какая трата сегодня была удачной, а какая — лишней?', 'Чему вы научились на этой неделе?', 'Какую маленькую победу хочется отметить?', 'Что бы вы улучшили в завтрашнем дне?', 'Чего вам хочется купить и зачем это вам?', 'Что сейчас беспокоит? Выпишите — станет легче.', 'Какая идея крутится в голове?', 'Кому хочется сказать спасибо?'];
let noteFilter = { mood:'all', query:'' };
const DF_LONG = new Intl.DateTimeFormat('ru-RU', { day:'numeric', month:'long' });
const DF_WEEK = new Intl.DateTimeFormat('ru-RU', { weekday:'long', day:'numeric', month:'long' });
function noteDateDisplay(date) { return DF_LONG.format(new Date(date + 'T12:00:00')); }
function noteGroupLabel(date) {
  const d = daysUntil(date);
  const long = DF_WEEK.format(new Date(date + 'T12:00:00'));
  return d === 0 ? `Сегодня · ${noteDateDisplay(date)}` : d === -1 ? `Вчера · ${noteDateDisplay(date)}` : long.replace(/^./, c => c.toUpperCase());
}
function noteBodyHTML(text) {
  return escapeHtml(text).replace(/(^|\s)#([\p{L}\d_]{2,30})/gu, (m, space, tag) => `${space}<button type="button" class="note-tag" data-note-tag="${tag.toLowerCase()}">#${tag}</button>`).replace(/\n/g, '<br>');
}
function noteHTML(item) {
  const mood = noteMoods[item.mood] || noteMoods.calm;
  return `<article class="note-card ${item.pinned ? 'pinned':''}"><div class="note-card-top"><span class="note-mood ${mood.className}" title="${mood.label}">${mood.icon}</span><span class="note-date">${item.time ? item.time + ' · ' : ''}${mood.label}</span><div class="note-actions"><button class="note-action ai-btn" type="button" data-ai-note="${item.id}" aria-label="Спросить помощника" title="Спросить ИИ-помощника">${icons.sparkles}</button><button class="note-action ${item.pinned ? 'on':''}" type="button" data-pin-note="${item.id}" aria-label="${item.pinned ? 'Открепить' : 'Закрепить'}" title="${item.pinned ? 'Открепить' : 'Закрепить сверху'}">${icons.pin}</button><button class="note-action" type="button" data-edit-note="${item.id}" aria-label="Редактировать заметку" title="Редактировать">${icons.edit}</button><button class="note-action note-delete" type="button" data-delete-note="${item.id}" aria-label="Удалить заметку" title="Удалить">${icons.x}</button></div></div><p>${noteBodyHTML(item.text)}</p>${aiThreadHTML(item)}</article>`;
}
function noteStreak() {
  const days = new Set(live(state.notes).map(n => n.date)); let streak = 0; const cursor = new Date(); cursor.setHours(12, 0, 0, 0);
  if (!days.has(isoDate(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (days.has(isoDate(cursor))) { streak++; cursor.setDate(cursor.getDate() - 1); }
  return streak;
}
function renderNotes() {
  const todayKey = isoDate(new Date());
  const q = noteFilter.query.trim().toLowerCase();
  const all = live(state.notes);
  const filtered = all.filter(n => (noteFilter.mood === 'all' || n.mood === noteFilter.mood) && (!q || (q.startsWith('#') ? new RegExp('(^|\\s)' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![\\p{L}\\d_])', 'iu').test(n.text) : n.text.toLowerCase().includes(q))));
  const order = (a, b) => (b.date < a.date ? -1 : b.date > a.date ? 1 : 0) || (b.createdAt || 0) - (a.createdAt || 0);
  const pinned = filtered.filter(n => n.pinned).sort(order);
  const rest = filtered.filter(n => !n.pinned).sort(order);
  qs('#notesTodayCount').textContent = all.filter(n => n.date === todayKey).length;
  qs('#notesTotalCount').textContent = all.length;
  const streak = noteStreak(); qs('#notesStreak').textContent = streak;
  qs('#notesSubtitle').textContent = all.length ? `Записей: ${all.length}${filtered.length !== all.length ? ` · найдено: ${filtered.length}` : ''}` : 'Запишите мысль, чтобы вернуться к ней позже.';
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const question = noteQuestions[dayOfYear % noteQuestions.length];
  qs('#notePrompt').innerHTML = `<span data-icon="sparkles"></span><div><b>Вопрос дня</b><small>${question}</small></div><button type="button" class="wide-subtle-button" data-use-prompt="${escapeHtml(question)}">Ответить</button>`;
  setIcons();
  let html = '';
  if (pinned.length) html += `<h3 class="note-group-title">Закреплённые</h3>` + pinned.map(noteHTML).join('');
  let lastDate = '';
  for (const note of rest.slice(0, noteLimit)) { if (note.date !== lastDate) { lastDate = note.date; html += `<h3 class="note-group-title">${noteGroupLabel(note.date)}</h3>`; } html += noteHTML(note); }
  if (rest.length > noteLimit) html += `<button class="more-button-row" type="button" data-more-note>Показать ещё · ${rest.length - noteLimit}</button>`;
  qs('#notesList').innerHTML = html || (all.length ? '<div class="empty-state notes-empty"><span>⌕</span>Ничего не найдено. Сбросьте поиск или фильтр.</div>' : '<div class="empty-state notes-empty"><span>✦</span>Первая заметка уже ждёт вас</div>');
}

/* ===== Рендер списка покупок ===== */
function renderShopping() {
  const weight = { high:0, normal:1, low:2 };
  const dateOrder = item => item.date || '9999-12-31';
  const active = live(state.shopping).filter(i => !i.done).sort((a, b) => weight[a.priority] - weight[b.priority] || dateOrder(a).localeCompare(dateOrder(b)) || a.title.localeCompare(b.title));
  const done = live(state.shopping).filter(i => i.done);
  qs('#shoppingPendingCount').textContent = active.length; qs('#shoppingBudgetSum').textContent = `${fmt(sum(active))} запланировано`;
  qs('#shoppingSubtitle').textContent = active.length ? `${active.length} ${plural(active.length, ['покупка','покупки','покупок'])} · мелочи на каждый день, крупное — в планах выше` : 'Всё куплено';
  const focus = active.filter(item => item.priority === 'high' || (item.date && daysUntil(item.date) <= 7));
  qs('#purchaseFocus').innerHTML = focus.length ? `<span data-icon="target"></span><div><b>${focus.length === 1 ? 'Покупка в фокусе' : `${focus.length} ${plural(focus.length, ['покупка','покупки','покупок'])} в фокусе`}</b><small>${fmt(sum(focus))} — важные или со сроком на неделю</small></div>` : `<span data-icon="sparkles"></span><div><b>Спокойный список</b><small>Отметьте важность или дату, чтобы ничего не упустить</small></div>`;
  setIcons();
  qs('#shoppingFull').innerHTML = active.length ? active.map(shoppingItemHTML).join('') : '<div class="empty-state"><span>✓</span>Всё куплено — можно отдыхать</div>';
  const wasOpen = !qs('#completedList').hidden;
  qs('#completedCount').textContent = done.length; qs('#completedList').innerHTML = done.map(shoppingItemHTML).join('');
  qs('#completedList').hidden = !(wasOpen && done.length);
}


/* ===== Общие утилиты интерфейса ===== */
function openModal(id) {
  const modal = qs(`#${id}`); modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
  if (!['voiceModal', 'settingsModal', 'installModal'].includes(id)) setTimeout(() => qs(`#${id} input:not([type="hidden"]), #${id} textarea`)?.focus(), 150);
}
function closeModals() { stopVoice(); qsa('.modal-backdrop').forEach(el => { el.classList.remove('open'); el.setAttribute('aria-hidden', 'true'); }); }
let toastTimer;
function toast(message, undoFn = null) {
  const box = qs('#toast'); const button = qs('#toastUndo');
  qs('#toastText').textContent = message;
  button.hidden = !undoFn; button.onclick = undoFn ? () => { box.classList.remove('show'); undoFn(); } : null;
  box.classList.toggle('has-action', !!undoFn); box.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => box.classList.remove('show'), undoFn ? 6500 : 2800);
}
/* Любое изменение данных: снимок → правка → сохранение → перерисовка → «Отменить» */
function commit(message, mutator, { undo = true } = {}) {
  const before = JSON.stringify(state);
  mutator(); save(); refresh();
  toast(message, undo ? () => { state = JSON.parse(before); normalizeState(); save(); refresh(); toast('Действие отменено'); } : null);
}
function validateForm(form) {
  form.querySelectorAll('.field.invalid').forEach(field => field.classList.remove('invalid'));
  for (const control of form.querySelectorAll('[required]')) {
    const value = String(control.value || '').trim();
    const bad = !value || (control.type === 'number' && !(Number(value) > 0));
    if (bad) {
      const field = control.closest('.field'); field?.classList.add('invalid');
      const label = (field?.querySelector('span')?.textContent || 'поле').split(',')[0].replace('?', '').trim();
      toast(control.type === 'number' && value ? `«${label}» должна быть больше нуля` : `Заполните поле «${label}»`);
      control.focus(); delete form.dataset.busy; return false;
    }
  }
  return true;
}
function updateBell() {
  const urgent = activePlans().filter(p => daysUntil(p.date) <= 3);
  const dot = qs('.notification i'); if (dot) dot.style.display = urgent.length ? '' : 'none';
}

const expenseCategories = () => Object.keys(categoryMeta).filter(key => !['Зарплата','Фриланс','Подарки'].includes(key));
function populateCategories() { const options = expenseCategories().map(c => `<option>${c}</option>`).join(''); qs('#categorySelect').innerHTML = options; qs('#planCategorySelect').innerHTML = options; qs('#shoppingCategorySelect').innerHTML = options; }
function refreshCategorySelect() { const select = qs('#categorySelect'); const allowed = transactionType === 'income' ? ['Зарплата','Фриланс','Подарки','Другое'] : expenseCategories(); select.innerHTML = allowed.map(c => `<option>${c}</option>`).join(''); }

/* ===== Формы: операции, покупки, планы, заметки ===== */
function setTransactionType(type) {
  transactionType = type === 'income' ? 'income' : 'expense';
  qsa('.type-option').forEach(el => el.classList.toggle('active', el.dataset.type === transactionType));
  refreshCategorySelect();
}
function openTransactionForm(item = null, prefill = null) {
  const form = qs('#transactionForm'); const source = item || prefill;
  editingTransactionId = item?.id || null;
  form.reset(); form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  setTransactionType(source?.type || 'expense');
  qs('#transactionModalEyebrow').textContent = item ? 'Редактирование' : 'Новая запись';
  qs('#transactionModalTitle').textContent = item ? 'Изменить операцию' : 'Добавить операцию';
  qs('#transactionSubmit').innerHTML = `${item ? 'Сохранить изменения' : 'Сохранить операцию'} ${icons['arrow-right']}`;
  form.elements.date.value = source?.date || isoDate(new Date());
  if (source) {
    form.elements.title.value = source.title || ''; form.elements.amount.value = source.amount || '';
    if (source.category) form.elements.category.value = source.category;
  }
  openModal('transactionModal');
}
function openShoppingForm(item = null) {
  const form = qs('#shoppingForm'); editingShoppingId = item?.id || null;
  form.reset(); form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  qs('#shoppingModalEyebrow').textContent = item ? 'Редактирование' : 'План покупок';
  qs('#shoppingModalTitle').textContent = item ? 'Изменить покупку' : 'Добавить в список';
  qs('#shoppingSubmit').innerHTML = `${item ? 'Сохранить изменения' : 'Добавить в список'} ${icons['arrow-right']}`;
  form.elements.date.value = item ? (item.date || '') : dateFromToday(-7);
  if (item) { form.elements.title.value = item.title; form.elements.amount.value = item.amount || ''; form.elements.category.value = item.category; form.elements.priority.value = item.priority; }
  openModal('shoppingModal');
}
const planTypeHints = {
  payment: 'Платёж — то, что нужно оплатить в срок: общежитие, кредит, подписка.',
  purchase: 'Покупка — вещь, которую хотите купить: наушники, куртка, планшет.'
};
function setPlanType(type) {
  planType = type === 'goal' ? 'purchase' : type;
  qsa('.plan-type-option').forEach(button => button.classList.toggle('active', button.dataset.planType === planType));
  qs('#planDateLabel').textContent = planType === 'purchase' ? 'Когда купить?' : 'Когда оплатить?';
  qs('#planTypeHint').textContent = planTypeHints[planType];
}
function openPlanForm(plan = null, prefill = null) {
  const form = qs('#planForm'); const source = plan || prefill;
  editingPlanId = plan?.id || null;
  form.reset(); form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  setPlanType(source?.kind || 'payment');
  qs('#planModalEyebrow').textContent = editingPlanId ? 'Планы и покупки' : 'Будущие траты';
  qs('#planModalTitle').textContent = editingPlanId ? 'Редактировать план' : 'Добавить план';
  qs('#planFormSubmit').innerHTML = `${editingPlanId ? 'Сохранить изменения' : 'Добавить в планы'} ${icons['arrow-right']}`;
  form.elements.date.value = source?.date || dateFromToday(-7);
  if (source) {
    form.elements.title.value = source.title || ''; form.elements.amount.value = source.amount || '';
    if (source.category) form.elements.category.value = source.category;
  }
  openModal('planModal');
}
function openNoteForm(note = null, prefill = null) {
  const form = qs('#noteForm'); const source = note || prefill;
  editingNoteId = note?.id || null;
  form.reset(); form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  qs('#noteModalTitle').textContent = editingNoteId ? 'Редактировать заметку' : 'Новая заметка';
  qs('#noteFormSubmit').innerHTML = `${editingNoteId ? 'Сохранить изменения' : 'Сохранить заметку'} ${icons['arrow-right']}`;
  form.elements.date.value = source?.date || isoDate(new Date());
  if (source) { form.elements.text.value = source.text || ''; form.elements.mood.value = source.mood || 'calm'; }
  openModal('noteModal');
}

/* ===== Голосовой помощник ===== */
const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
const voice = { mode:'auto', rec:null, listening:false, parsed:null, timer:null, error:null, base:'' };
function setVoiceStatus(message, kind = '') { const el = qs('#voiceStatus'); el.textContent = message; el.className = 'voice-status ' + kind; }
function currentPage() { return location.hash.slice(1) || 'dashboard'; }
function setVoiceUI() {
  qsa('.voice-button,.voice-form-button,.voice-fab').forEach(b => b.classList.toggle('listening', voice.listening));
  qs('#voiceMic').classList.toggle('listening', voice.listening);
  qs('#voiceMic').setAttribute('aria-label', voice.listening ? 'Остановить запись' : 'Начать запись');
}
function openVoice(mode = 'auto', { autoStart = true } = {}) {
  voice.mode = mode; voice.error = null;
  qsa('[data-voice-mode]').forEach(b => b.classList.toggle('active', b.dataset.voiceMode === mode));
  qs('#voiceText').value = '';
  updateVoicePreview(); openModal('voiceModal');
  if (!SpeechRec) { setVoiceStatus('Этот браузер не умеет слушать. Наберите фразу ниже — разберу её так же.', 'warn'); setTimeout(() => qs('#voiceText').focus(), 200); return; }
  if (!window.isSecureContext) setVoiceStatus('Микрофон работает только по https:// или на localhost. Пока можно набрать фразу вручную.', 'warn');
  else setVoiceStatus('Нажмите на микрофон и говорите', '');
  if (autoStart && window.isSecureContext) startListening();
}
function stopVoice() { cancelCountdown(); try { voice.rec?.abort(); } catch {} voice.rec = null; voice.listening = false; if (qs('#voiceMic')) setVoiceUI(); }
function closeVoice() { stopVoice(); const modal = qs('#voiceModal'); modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
const voiceErrors = {
  'not-allowed': 'Нет доступа к микрофону. Разрешите его в настройках сайта (значок замка рядом с адресом). Если файл открыт как file:// — запустите через локальный сервер или https.',
  'service-not-allowed': 'Браузер запретил распознавание речи. Проверьте разрешения для микрофона и сайта.',
  'no-speech': 'Ничего не услышал — нажмите на микрофон и повторите.',
  'audio-capture': 'Микрофон не найден или занят другим приложением.',
  'network': 'Нет связи с сервисом распознавания (Chrome отправляет звук на сервер). Проверьте интернет или наберите фразу вручную.',
  'language-not-supported': 'Русский язык распознавания недоступен в этом браузере.'
};
function startListening() {
  if (!SpeechRec) return;
  cancelCountdown(); try { voice.rec?.abort(); } catch {}
  const rec = new SpeechRec(); voice.rec = rec; voice.error = null; voice.base = qs('#voiceText').value.trim();
  rec.lang = 'ru-RU'; rec.interimResults = true; rec.continuous = false; rec.maxAlternatives = 1;
  rec.onstart = () => { voice.listening = true; setVoiceUI(); setVoiceStatus('Слушаю… говорите обычной фразой', 'listening'); };
  rec.onresult = event => {
    let finalText = '', interim = '';
    for (let i = 0; i < event.results.length; i++) { const r = event.results[i]; if (r.isFinal) finalText += r[0].transcript + ' '; else interim += r[0].transcript + ' '; }
    qs('#voiceText').value = [voice.base, finalText, interim].join(' ').replace(/\s+/g, ' ').trim();
    updateVoicePreview();
  };
  rec.onerror = event => {
    if (event.error === 'aborted') return;
    voice.error = event.error; setVoiceStatus(voiceErrors[event.error] || `Не удалось распознать речь (${event.error}). Попробуйте ещё раз или наберите фразу.`, 'warn');
  };
  rec.onend = () => {
    if (voice.rec !== rec) return;
    voice.listening = false; setUIAfterEnd();
  };
  const setUIAfterEnd = () => {
    setVoiceUI();
    const text = qs('#voiceText').value.trim();
    if (voice.error) return;
    if (!text) { setVoiceStatus('Ничего не услышал — нажмите на микрофон и повторите', 'warn'); return; }
    updateVoicePreview();
    if (voice.parsed?.complete) { setVoiceStatus('Готово. Сейчас добавлю — можно поправить текст или отменить', 'ok'); startCountdown(); }
    else setVoiceStatus('Поправьте текст или откройте форму, чтобы дополнить', 'warn');
  };
  try { rec.start(); } catch { setVoiceStatus('Не удалось запустить микрофон. Нажмите ещё раз.', 'warn'); }
}
function voiceConfirmLabel(p) {
  if (!p || p.intent === 'empty') return 'Добавить';
  if (p.intent === 'note') return 'Сохранить заметку';
  if (!p.complete) return 'Открыть форму и указать сумму';
  if (p.intent === 'plan') return 'Добавить в планы';
  return p.type === 'income' ? 'Добавить доход' : 'Добавить расход';
}
function updateVoicePreview() {
  const text = qs('#voiceText').value.trim();
  const page = currentPage();
  const p = text ? parseVoiceCommand(text, { mode:voice.mode, page }) : null;
  voice.parsed = p;
  const row = (label, value) => `<div class="vp-row"><span>${label}</span><b>${value}</b></div>`;
  let html = '<p class="voice-empty">Здесь появится, как я понял вашу фразу.</p>';
  if (p && p.intent !== 'empty') {
    const meta = iconFor(p.category); const cat = p.category ? `<i class="vp-dot" style="background:${meta.color}"></i>${p.category}` : '';
    const amount = p.amount ? fmt(p.amount) : '<em class="warn">не указана — скажите, например, «за 3500»</em>';
    const dateText = `${dateDisplay(p.date)}${p.dateFound ? '' : ' <em>дата не названа — поставил через неделю</em>'}`;
    if (p.intent === 'plan') html = row('Что', `План · ${p.kind === 'purchase' ? 'Покупка' : 'Платёж'}`) + row('Название', escapeHtml(p.title)) + row('Сумма', amount) + row('Когда', dateText) + row('Категория', cat);
    else if (p.intent === 'transaction') html = row('Что', p.type === 'income' ? 'Доход' : 'Расход') + row('Название', escapeHtml(p.title)) + row('Сумма', amount) + row('Дата', dateDisplay(p.date)) + row('Категория', cat);
    else html = row('Что', `Заметка · ${noteMoods[p.mood].label}`) + row('Текст', escapeHtml(p.text.length > 140 ? p.text.slice(0, 140) + '…' : p.text));
  }
  qs('#voicePreview').innerHTML = html;
  const confirm = qs('#voiceConfirm'); confirm.disabled = !p || p.intent === 'empty'; confirm.innerHTML = voiceConfirmLabel(p);
  qs('#voiceEditForm').hidden = !p || p.intent === 'empty' || p.intent === 'note';
}
function cancelCountdown() { clearTimeout(voice.timer); voice.timer = null; if (voice.counting) { voice.counting = false; if (qs('#voiceConfirm')) qs('#voiceConfirm').innerHTML = voiceConfirmLabel(voice.parsed); } }
function startCountdown() {
  cancelCountdown(); voice.counting = true; let left = 3;
  const tick = () => {
    if (!voice.counting) return;
    if (left <= 0) { voice.counting = false; confirmVoice(); return; }
    qs('#voiceConfirm').innerHTML = `${voiceConfirmLabel(voice.parsed)} · ${left}`;
    left--; voice.timer = setTimeout(tick, 1000);
  };
  tick();
}
function describePlan(p) { return `«${p.title}» · ${fmt(p.amount)} · ${dateDisplay(p.date)} · ${p.category}`; }
function confirmVoice() {
  cancelCountdown();
  const p = voice.parsed; if (!p || p.intent === 'empty') return;
  const planOpen = qs('#planModal').classList.contains('open'), noteOpen = qs('#noteModal').classList.contains('open'), txOpen = qs('#transactionModal').classList.contains('open');
  if (p.intent === 'plan') {
    if (planOpen) { closeVoice(); setPlanType(p.kind); const f = qs('#planForm').elements; f.title.value = p.title; if (p.amount) f.amount.value = p.amount; f.category.value = p.category; f.date.value = p.date; toast('Поля плана заполнены голосом'); return; }
    if (!p.complete) { closeModals(); openPlanForm(null, p); toast('Укажите сумму и сохраните план'); return; }
    closeModals();
    commit(`План добавлен: ${describePlan(p)}`, () => state.plans.unshift({ id:'p' + Date.now(), kind:p.kind, title:p.title, category:p.category, amount:p.amount, date:p.date, done:false }));
  } else if (p.intent === 'transaction') {
    if (txOpen) { closeVoice(); setTransactionType(p.type); const f = qs('#transactionForm').elements; f.title.value = p.title; if (p.amount) f.amount.value = p.amount; f.category.value = p.category; f.date.value = p.date; toast('Поля операции заполнены голосом'); return; }
    if (!p.complete) { closeModals(); openTransactionForm(null, p); toast('Укажите сумму и сохраните операцию'); return; }
    closeModals();
    commit(`${p.type === 'income' ? 'Доход' : 'Расход'} добавлен: «${p.title}» · ${fmt(p.amount)} · ${p.category}`, () => state.transactions.unshift({ id:'t' + Date.now(), type:p.type, title:p.title, category:p.category, amount:p.amount, date:p.date }));
  } else if (p.intent === 'note') {
    if (noteOpen) { closeVoice(); const field = qs('#noteText'); field.value = field.value ? `${field.value.trim()} ${p.text}` : p.text; qs('#noteForm').elements.mood.value = p.mood; toast('Текст добавлен в заметку'); return; }
    closeModals();
    const newId = 'n' + Date.now();
    commit('Заметка сохранена', () => state.notes.unshift({ id:newId, createdAt:Date.now(), text:p.text, mood:p.mood, date:p.date, time:timeNow(), pinned:false }));
    maybeAutoAI(newId);
  }
}
function editVoiceInForm() {
  const p = voice.parsed; if (!p) return; cancelCountdown(); closeModals();
  if (p.intent === 'plan') openPlanForm(null, p);
  else if (p.intent === 'transaction') openTransactionForm(null, p);
  else openNoteForm(null, p);
}
const timeNow = () => new Date().toLocaleTimeString('ru-RU', { hour:'2-digit', minute:'2-digit' });

/* ===== Старт ===== */
setIcons();
setTheme(state.theme, { persist:false });
populateCategories(); invalidate();
updateProfileUI(); wireV9(); wireAI(); updateInstallUI(); ensureAppleIcon();
if (document.documentElement.dataset.locked) { if (getProfile().pin) setTimeout(() => qs('#lockPin').focus(), 120); else delete document.documentElement.dataset.locked; }
const today = new Date();
qs('#todayLabel').textContent = new Intl.DateTimeFormat('ru-RU', { weekday:'long', day:'numeric', month:'long' }).format(today).replace(/^./, x => x.toUpperCase());
qs('#transactionDate').value = isoDate(today);
qs('#planDate').value = dateFromToday(-7);
qs('#shoppingDate').value = dateFromToday(-7);
qs('#noteDate').value = isoDate(today);
qs('#budgetPageTitle').textContent = `Бюджет на ${new Intl.DateTimeFormat('ru-RU', { month:'long' }).format(today)}`;
qsa('form').forEach(form => { form.noValidate = true; });
if (!SpeechRec) qsa('.voice-button,.voice-form-button,.voice-fab').forEach(b => b.classList.add('voice-unsupported'));

handleAuthHash();
window.addEventListener('hashchange', () => activatePage(location.hash.slice(1))); activatePage(location.hash.slice(1) || 'dashboard');
qsa('[data-navigate]').forEach(btn => btn.addEventListener('click', () => { location.hash = btn.dataset.navigate; }));
qs('#openTransactionModal').addEventListener('click', () => openTransactionForm()); qs('#mobileAdd').addEventListener('click', () => openTransactionForm()); qsa('[data-open-transaction]').forEach(btn => btn.addEventListener('click', () => openTransactionForm()));
qs('#openShoppingModal').addEventListener('click', () => openShoppingForm());
qs('#openPlanModal').addEventListener('click', () => openPlanForm()); qsa('[data-open-plan]').forEach(btn => btn.addEventListener('click', () => openPlanForm()));
qs('#openNoteModal').addEventListener('click', () => openNoteForm()); qsa('[data-open-note]').forEach(btn => btn.addEventListener('click', () => openNoteForm()));
qs('#voicePlan').addEventListener('click', () => openVoice('plan'));
qs('#voicePlanForm').addEventListener('click', () => openVoice('plan'));
qs('#voiceNote').addEventListener('click', () => openVoice('note'));
qs('#voiceNoteForm').addEventListener('click', () => openVoice('note'));
qs('#voiceFab').addEventListener('click', () => openVoice(currentPage() === 'notes' ? 'note' : 'auto'));
qs('#voiceMic').addEventListener('click', () => { if (voice.listening) { try { voice.rec?.stop(); } catch {} } else { cancelCountdown(); startListening(); if (!SpeechRec) qs('#voiceText').focus(); } });
qs('#voiceText').addEventListener('input', () => { cancelCountdown(); updateVoicePreview(); });
qs('#voiceText').addEventListener('keydown', e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); confirmVoice(); } });
qsa('[data-voice-mode]').forEach(btn => btn.addEventListener('click', () => { cancelCountdown(); voice.mode = btn.dataset.voiceMode; qsa('[data-voice-mode]').forEach(b => b.classList.toggle('active', b === btn)); updateVoicePreview(); }));
qs('#voiceConfirm').addEventListener('click', confirmVoice);
qs('#voiceEditForm').addEventListener('click', editVoiceInForm);
qs('#themeToggle').addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
qs('#editBudget').addEventListener('click', () => { qs('#budgetForm [name="budget"]').value = state.budget; openModal('budgetModal'); });
qsa('[data-close-modal]').forEach(btn => btn.addEventListener('click', closeModals));
qsa('.modal-backdrop').forEach(backdrop => backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModals(); }));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModals(); });
document.addEventListener('input', e => e.target.closest?.('.field')?.classList.remove('invalid'));
qsa('.type-option').forEach(btn => btn.addEventListener('click', () => setTransactionType(btn.dataset.type)));
qsa('.plan-type-option').forEach(btn => btn.addEventListener('click', () => setPlanType(btn.dataset.planType)));

qs('#transactionForm').addEventListener('submit', e => {
  e.preventDefault(); if (!validateForm(e.target)) return;
  const data = new FormData(e.target); const id = editingTransactionId;
  const values = { type:transactionType, title:data.get('title').trim(), category:data.get('category'), amount:Number(data.get('amount')), date:data.get('date') };
  closeModals();
  commit(id ? 'Операция обновлена' : (transactionType === 'income' ? 'Доход добавлен' : 'Расход добавлен'), () => {
    if (id) { const i = state.transactions.findIndex(t => t.id === id); if (i >= 0) state.transactions[i] = { ...state.transactions[i], ...values }; }
    else state.transactions.unshift({ id:'t' + Date.now(), ...values });
  });
  editingTransactionId = null;
});
qs('#shoppingForm').addEventListener('submit', e => {
  e.preventDefault(); if (!validateForm(e.target)) return;
  const data = new FormData(e.target); const id = editingShoppingId;
  const values = { title:data.get('title').trim(), amount:Number(data.get('amount')) || 0, category:data.get('category'), priority:data.get('priority'), date:data.get('date') };
  closeModals();
  commit(id ? 'Покупка обновлена' : 'Добавлено в список покупок', () => {
    if (id) { const i = state.shopping.findIndex(t => t.id === id); if (i >= 0) state.shopping[i] = { ...state.shopping[i], ...values }; }
    else state.shopping.unshift({ id:'s' + Date.now(), ...values, done:false });
  });
  editingShoppingId = null;
});
qs('#planForm').addEventListener('submit', e => {
  e.preventDefault(); if (!validateForm(e.target)) return;
  const data = new FormData(e.target); const id = editingPlanId;
  const values = { kind:planType, title:data.get('title').trim(), category:data.get('category'), amount:Number(data.get('amount')), date:data.get('date') };
  closeModals();
  commit(id ? 'План обновлён' : 'Добавлено в планы', () => {
    if (id) { const i = state.plans.findIndex(item => item.id === id); if (i >= 0) state.plans[i] = { ...state.plans[i], ...values }; }
    else state.plans.unshift({ id:'p' + Date.now(), ...values, done:false });
  });
  editingPlanId = null;
});
qs('#noteForm').addEventListener('submit', e => {
  e.preventDefault(); if (!validateForm(e.target)) return;
  const data = new FormData(e.target); const id = editingNoteId; const newId = id ? null : 'n' + Date.now();
  const values = { text:data.get('text').trim(), mood:data.get('mood'), date:data.get('date') };
  closeModals();
  commit(id ? 'Заметка обновлена' : 'Заметка сохранена', () => {
    if (id) { const i = state.notes.findIndex(item => item.id === id); if (i >= 0) state.notes[i] = { ...state.notes[i], ...values }; }
    else state.notes.unshift({ id:newId, createdAt:Date.now(), time:timeNow(), pinned:false, ...values });
  });
  if (newId) maybeAutoAI(newId);
  editingNoteId = null;
});
qs('#budgetForm').addEventListener('submit', e => {
  e.preventDefault(); if (!validateForm(e.target)) return;
  const value = Number(new FormData(e.target).get('budget')); closeModals();
  commit('Бюджет обновлён', () => { state.budget = value; });
});
qs('#toggleBalance').addEventListener('click', () => { showBalance = !showBalance; renderDashboard(); });
qsa('.filter-tab[data-filter]').forEach(btn => btn.addEventListener('click', () => { activeFilter = btn.dataset.filter; txLimit = TX_PAGE; qsa('.filter-tab[data-filter]').forEach(el => el.classList.toggle('active', el === btn)); renderTransactions(); }));
qs('#transactionSearch').addEventListener('input', e => { searchText = e.target.value.trim().toLowerCase(); txLimit = TX_PAGE; renderTransactions(); });
qsa('[data-note-mood]').forEach(btn => btn.addEventListener('click', () => { noteFilter.mood = btn.dataset.noteMood; qsa('[data-note-mood]').forEach(el => el.classList.toggle('active', el === btn)); renderNotes(); }));
qs('#noteSearch').addEventListener('input', e => { noteFilter.query = e.target.value; noteLimit = NOTE_PAGE; renderNotes(); });

document.addEventListener('click', e => {
  const target = selector => e.target.closest(selector);
  let el;
  if ((el = target('[data-delete-transaction]'))) { const id = el.dataset.deleteTransaction; commit('Операция удалена', () => { state.transactions = state.transactions.filter(i => i.id !== id); }); }
  if ((el = target('[data-edit-transaction]'))) { const item = state.transactions.find(i => i.id === el.dataset.editTransaction); if (item) openTransactionForm(item); }
  if ((el = target('[data-toggle-shopping]'))) { const id = el.dataset.toggleShopping; const item = state.shopping.find(i => i.id === id); if (item) commit(item.done ? 'Возвращено в список' : 'Отмечено как купленное', () => { item.done = !item.done; }); }
  if ((el = target('[data-edit-shopping]'))) { const item = state.shopping.find(i => i.id === el.dataset.editShopping); if (item) openShoppingForm(item); }
  if ((el = target('[data-delete-shopping]'))) { const id = el.dataset.deleteShopping; commit('Покупка удалена', () => { state.shopping = state.shopping.filter(i => i.id !== id); }); }
  if ((el = target('[data-pay-plan]'))) {
    const plan = state.plans.find(i => i.id === el.dataset.payPlan);
    if (plan) commit(plan.kind === 'purchase' ? 'Покупка перенесена в расходы' : 'Платёж перенесён в расходы', () => { plan.done = true; state.transactions.unshift({ id:'t' + Date.now(), type:'expense', title:plan.title, category:plan.category, amount:plan.amount, date:isoDate(new Date()) }); });
  }
  if ((el = target('[data-edit-plan]'))) { const plan = state.plans.find(item => item.id === el.dataset.editPlan); if (plan) openPlanForm(plan); }
  if ((el = target('[data-move-plan-up]'))) movePlan(el.dataset.movePlanUp, -1);
  if ((el = target('[data-move-plan-down]'))) movePlan(el.dataset.movePlanDown, 1);
  if ((el = target('[data-delete-plan]'))) { const id = el.dataset.deletePlan; commit('План удалён', () => { state.plans = state.plans.filter(i => i.id !== id); }); }
  if ((el = target('[data-edit-note]'))) { const note = state.notes.find(item => item.id === el.dataset.editNote); if (note) openNoteForm(note); }
  if ((el = target('[data-pin-note]'))) { const note = state.notes.find(item => item.id === el.dataset.pinNote); if (note) commit(note.pinned ? 'Заметка откреплена' : 'Заметка закреплена', () => { note.pinned = !note.pinned; }, { undo:false }); }
  if ((el = target('[data-delete-note]'))) { const id = el.dataset.deleteNote; commit('Заметка удалена', () => { state.notes = state.notes.filter(item => item.id !== id); }); }
  if ((el = target('[data-note-tag]'))) { noteFilter.query = '#' + el.dataset.noteTag; qs('#noteSearch').value = noteFilter.query; renderNotes(); }
  if ((el = target('[data-use-prompt]'))) openNoteForm(null, { text:el.dataset.usePrompt + '\n', mood:'calm' });
  if ((el = target('[data-open-data]'))) openSettings();
  if ((el = target('[data-more-tx]'))) { txLimit += TX_PAGE; renderTransactions(); }
  if ((el = target('[data-more-note]'))) { noteLimit += NOTE_PAGE; renderNotes(); }
});
qs('.notification').addEventListener('click', () => {
  const open = activePlans(); const overdue = open.filter(p => daysUntil(p.date) < 0).length; const soon = open.filter(p => { const d = daysUntil(p.date); return d >= 0 && d <= 3; }).length;
  toast(overdue || soon ? `Просрочено: ${overdue} · в ближайшие 3 дня: ${soon}` : 'Срочных платежей нет — всё спокойно');
  if (overdue || soon) location.hash = 'shopping';
});
qs('#toggleCompleted').addEventListener('click', () => { const list = qs('#completedList'); list.hidden = !list.hidden; qs('#toggleCompleted svg').style.transform = list.hidden ? '' : 'rotate(180deg)'; });
qs('#exportData').addEventListener('click', exportData);
qs('#importData').addEventListener('click', () => qs('#importFile').click());
qs('#importFile').addEventListener('change', e => { const file = e.target.files[0]; if (file) importData(file); e.target.value = ''; });
qs('#resetData').addEventListener('click', () => { closeModals(); commit('Данные очищены', () => { const keep = { userName:state.userName, userNameAt:state.userNameAt, theme:state.theme, themeAt:state.themeAt, avatar:state.avatar, avatarAt:state.avatarAt }; state = Object.assign(clone(initialState), keep); normalizeState(); }); });

if ('serviceWorker' in navigator) {
  const hadController = !!navigator.serviceWorker.controller; let reloaded = false;
  navigator.serviceWorker.register('./service-worker.js?v=11').catch(() => {});
  navigator.serviceWorker.addEventListener('controllerchange', () => { if (hadController && !reloaded) { reloaded = true; location.reload(); } });
}

/* ===== Запуск облака, восстановление, ярлыки ===== */
refreshClock();
setSyncStatus(cloud.configured() ? (cloud.session ? 'pending' : 'auth') : 'local');
if (cloud.configured() && cloud.session) scheduleSync(600);
recoverFromBackup();
document.addEventListener('keydown', e => { const t = e.target; if ((e.key === 'Enter' || e.key === ' ') && t.matches && t.matches('[data-navigate][role="button"]')) { e.preventDefault(); location.hash = t.dataset.navigate; } });
if (cloud.configured() && !cloud.session && !LS.get('schetchik-welcomed') && !document.documentElement.dataset.locked) setTimeout(() => { if (!qsa('.modal-backdrop.open').length) openAccount('code'); }, 900);
(function handleShortcuts() {
  const action = new URLSearchParams(location.search).get('action'); if (!action) return;
  history.replaceState(null, '', location.pathname + location.hash);
  setTimeout(() => { if (document.documentElement.dataset.locked) return; if (action === 'voice') openVoice('auto'); if (action === 'add') openTransactionForm(); }, 400);
})();
