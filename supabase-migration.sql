-- Run this in Supabase SQL editor

create table subscribers (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  source text default 'website',
  created_at timestamptz default now()
);

create table leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text,
  country text,
  visa_type text,
  message text,
  source text default 'website',
  status text default 'new',
  created_at timestamptz default now()
);

-- Enable RLS
alter table subscribers enable row level security;
alter table leads enable row level security;

-- Only service role can insert (API routes use service role key)
create policy "service role only" on subscribers
  for insert with check (false);

create policy "service role only" on leads
  for insert with check (false);
