-- ============================================================
-- YASHNI CREATIONS — Supabase setup
-- Supabase → SQL Editor → New query → yeh poora paste karo → Run
-- Ek hi baar chalana hai.
-- ============================================================

-- 1) Products table
create table if not exists public.products (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  title       text not null,
  price       integer not null,          -- rupees, sirf number: 4500
  description text,
  category    text,
  image_url   text,
  image_path  text
);

alter table public.products enable row level security;

-- Website (bina login) sirf padh sakti hai
drop policy if exists "anyone can read products" on public.products;
create policy "anyone can read products"
  on public.products for select
  using (true);

-- Sirf logged-in admin add / edit / delete kar sakta hai
drop policy if exists "admin can add products" on public.products;
create policy "admin can add products"
  on public.products for insert to authenticated
  with check (true);

drop policy if exists "admin can edit products" on public.products;
create policy "admin can edit products"
  on public.products for update to authenticated
  using (true) with check (true);

drop policy if exists "admin can delete products" on public.products;
create policy "admin can delete products"
  on public.products for delete to authenticated
  using (true);


-- 2) Photos ke liye storage bucket (public = website pe dikhengi)
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do update set public = true;

drop policy if exists "anyone can view product images" on storage.objects;
create policy "anyone can view product images"
  on storage.objects for select
  using (bucket_id = 'product-images');

drop policy if exists "admin can upload product images" on storage.objects;
create policy "admin can upload product images"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'product-images');

drop policy if exists "admin can delete product images" on storage.objects;
create policy "admin can delete product images"
  on storage.objects for delete to authenticated
  using (bucket_id = 'product-images');
