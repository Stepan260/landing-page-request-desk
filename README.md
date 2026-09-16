# Request Desk — Marketing Site

Public marketing site for Request Desk, built with Next.js (App Router, SSG)
per the internal Shopify Connect playbook: separate from the app SPA
(`request-desk-fe`), fully public/indexable, no auth.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- `next/og` for generated OG images and the favicon

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — product, features, how it works, FAQ |
| `/pricing` | Plans (mirror the Products/Prices created in Stripe) |
| `/shopify` | Shopify integration — scopes, install flow, SEO target |
| `/legal/terms` | Terms of Service (draft — needs legal review) |
| `/legal/privacy` | Privacy Policy (draft — needs legal review) |
| `/legal/refund` | Refund Policy (draft — needs legal review) |

`app/sitemap.ts` and `app/robots.ts` are generated automatically.

## Commands

```bash
npm run dev      # dev server → http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Before going live

All product/pricing copy and config lives in `src/lib/site.ts` — update it
first:

- `SITE.domain` / `SITE.url` / `SITE.appUrl` — swap for the real domains once
  DNS is live (`requestdeskhq.com` → this site, `app.requestdeskhq.com` →
  the existing SPA, per the playbook's domain split).
- `PLANS` — placeholder pricing; replace with whatever Products/Prices
  actually exist in the Stripe dashboard.
- `SITE.supportEmail` / `SITE.twitter` — real contact handles.

The three `/legal/*` pages contain bracketed placeholders (`[Legal company
name]`, `[Governing jurisdiction]`, etc.) — a lawyer needs to fill these in
before the pages are used for real signups; Stripe live-mode activation and
Shopify App Store review both require finished versions of these three
pages.

## Deploy

Deploy target is Vercel (per the playbook) — connect this repo and point
`requestdeskhq.com` at it. `app.requestdeskhq.com` keeps pointing at the
existing Vite SPA and is unaffected.
