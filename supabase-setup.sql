-- =====================================================================
--  Счётчик · настройка Supabase (выполнить один раз в SQL Editor)
-- =====================================================================

-- 1) Данные пользователей (одна строка на аккаунт) --------------------
create table if not exists public.schetchik_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.schetchik_state enable row level security;
drop policy if exists "own row" on public.schetchik_state;
create policy "own row" on public.schetchik_state
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 2) Доступ к ИИ-помощнику по промокоду --------------------------------
-- Таблицы закрыты RLS без политик: читать и писать их может только
-- серверная функция gemini-proxy (она использует секретный ключ).
create table if not exists public.promo_codes (
  code text primary key,                 -- хранить в ВЕРХНЕМ регистре
  max_uses integer,                      -- null = без ограничения
  uses integer not null default 0,
  active boolean not null default true
);
create table if not exists public.ai_access (
  user_id uuid primary key references auth.users(id) on delete cascade,
  code text,
  created_at timestamptz not null default now()
);
create table if not exists public.ai_usage (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null,
  n integer not null default 0,
  primary key (user_id, day)
);
alter table public.promo_codes enable row level security;
alter table public.ai_access enable row level security;
alter table public.ai_usage enable row level security;

-- Ваш промокод (можно добавить сколько угодно; max_uses = лимит активаций)
insert into public.promo_codes (code, max_uses) values ('DIMAS', null)
on conflict (code) do nothing;
