import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL)

await sql`
  create table if not exists aios_waitlist (
    id         uuid primary key default gen_random_uuid(),
    name       text not null,
    email      text not null,
    role       text not null check (role in ('founder', 'engineer', 'researcher', 'student', 'other')),
    use_case   text,
    created_at timestamptz not null default now(),
    unique (email)
  )
`

await sql`
  create index if not exists aios_waitlist_created_at_idx on aios_waitlist (created_at desc)
`

await sql`
  alter table aios_waitlist add column if not exists phone text
`

console.log('aios_waitlist table ready (phone column included)')
