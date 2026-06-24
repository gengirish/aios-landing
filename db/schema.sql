-- Neon PostgreSQL schema for waitlist

create table if not exists aios_waitlist (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  role       text not null check (role in ('founder', 'engineer', 'researcher', 'student', 'other')),
  use_case   text,
  created_at timestamptz not null default now(),
  unique (email)
);

create index if not exists aios_waitlist_created_at_idx on aios_waitlist (created_at desc);
