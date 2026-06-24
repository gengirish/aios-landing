-- Run once on existing Neon databases after deploying phone field support
alter table aios_waitlist add column if not exists phone text;
