# Yashni Creations — Setup (about 15 minutes)

A storefront plus an admin portal. Products are added from the admin portal and appear
on the website instantly. Backend is **Supabase** — free, no credit card required.

```
index.html      storefront (product grid, search, category filters)
product.html    product detail (size, quantity, order)
cart.html       bag + WhatsApp checkout
admin.html      admin portal (add / edit / delete products)
complaint.html  customer support form
config.js       ← the only file you edit
supabase-setup.sql
Untitled.jpg    logo
```

---

## Step 1 — Create a Supabase project

1. Go to [supabase.com](https://supabase.com) → **Start your project** → sign up
2. **New project** → Name: `yashni` → set a database password (note it down) →
   Region: **Mumbai** or **Singapore** → **Create**
3. Wait ~2 minutes for it to finish provisioning

## Step 2 — Create the database (one click)

1. Left menu → **SQL Editor** → **New query**
2. Open `supabase-setup.sql`, copy the whole file, paste it there
3. Press **Run**. You should see "Success".

This creates the `products` table, the photo storage bucket, and the security rules:
the public website can only **read**; only a logged-in admin can add, edit or delete.

## Step 3 — Create the admin login

1. Left menu → **Authentication** → **Users** → **Add user** → **Create new user**
2. Enter the shop owner's email and a password (e.g. `yashni@shop.com`)
3. Turn **Auto Confirm User** ON → **Create user**

That email and password is the admin login. No tokens, nothing to memorise.

## Step 4 — Add your keys

1. Left menu → **Project Settings** → **API**
2. Copy two values:
   - **Project URL** — e.g. `https://abcdxyz.supabase.co`
   - **anon public** key — the long one (this key is meant to be public, it is safe)
3. Paste both into `config.js`:

```js
SUPABASE_URL: "https://abcdxyz.supabase.co",
SUPABASE_ANON_KEY: "eyJhbGciOi...",
```

The WhatsApp number, email and categories are in the same file.

> Never put the **service_role** key in any of these files. That one is secret.

## Step 5 — Put the site online

Drag the whole folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or push
to GitHub and connect the repo in Netlify/Vercel (build command: none, publish directory: `.`).

> The admin portal will **not** work when opened as a `file://` page on your laptop.
> It has to be served from a host. Free hosting is fine.

---

## How the shop owner uses it

1. Open `yoursite.com/admin.html` (there is also an "Admin portal" link in the footer)
2. Log in with the email and password from Step 3
3. Fill in **Product name, Price (numbers only, e.g. 4500), Category, Description, Photo**
4. Press **Publish product** — it is live on the website immediately
5. Use **Edit** to change the price, details or photo, and **Delete** to remove it

When a customer places an order, the full order — items, sizes, quantities, name, phone
and address — arrives as a WhatsApp message on the shop's number.

---

## Free tier limits

- 500 MB database, 1 GB photo storage, 5 GB bandwidth per month
- Photos are compressed in the browser before upload (~150–250 KB each), so 1 GB holds
  thousands of products and the site stays fast

## Adding online payments

Orders currently go through WhatsApp, which suits a small shop — the customer talks to you
before paying. A payment gateway such as Razorpay can be added to the cart page later.
