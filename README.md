# Sparkworks Website

Marketing site for [Sparkworks](https://www.sparkworks.kids) — critical thinking program, games, and materials for kids in grades 2–6.

## Stack

- **Next.js 14** (App Router) · React 18
- **CSS:** plain CSS variables + utility classes in [app/globals.css](app/globals.css). No Tailwind, no CSS-in-JS.
- **Forms:** Notion REST API ([app/api/register/route.js](app/api/register/route.js))
- **Hosting:** Vercel (auto-deploy from `main`)

## Project layout

```
sparkworks-site/
├── CLAUDE.md                  # working notes — read first if Claude is helping
├── README.md                  # this file
├── docs/                      # brand + messaging source of truth
│   ├── BRAND_REF.md
│   ├── DESIGN_PATTERNS.md
│   ├── MARKETING_GUIDELINES.md
│   ├── PROGRAM_AND_MESSAGING.md
│   └── starter_template.html  # reference HTML wiring all patterns
├── public/                    # static assets served at /
│   ├── logo-stacked-white.png
│   ├── logo-trans-spark.png
│   └── logo-white.png
└── app/
    ├── globals.css            # design tokens + .ts-* type system
    ├── layout.js              # html shell, fonts, metadata
    ├── page.js                # homepage (brand + 3 product lines)
    ├── program/page.js        # full program page
    ├── components/            # Hero, Footer, ProductCard, InterestForm, etc.
    └── api/register/route.js  # POSTs registrations to Notion
```

## Local development

```bash
npm install
cp .env.example .env.local
# edit .env.local → paste your Notion integration secret
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Only one secret is needed:

```
NOTION_API_KEY=ntn_...
```

Set it in `.env.local` for local dev and in Vercel → Settings → Environment Variables for production. The Notion DB ID is hardcoded in [app/api/register/route.js](app/api/register/route.js); not sensitive on its own.

## Notion DB schema

The registration form posts to a Notion DB with these properties:

- `Parent 1 Name` (title), `Parent 1 Email`, `Parent 1 Phone`
- `Parent 2 Name`, `Parent 2 Email`, `Parent 2 Phone`
- `Child 1 Name`, `Child 1 Grade` (rich_text), `Child 1 Track` (select: `Ember (grades 2-3)` / `Blaze (grades 4-6)`)
- (`Child 2…` and `Child 3…` mirror the above)
- `Cohort` (select: `Founding Sparks`, `Season 2 — Fall 2026`)
- `Status` (select: defaults to `New`)
- `How did you hear about us?`, `Questions or Comments` (rich_text)

The integration must be added to the database in Notion (••• → Connections).

## Deployment

```bash
git push origin main
```

Vercel deploys automatically. Smoke-test the live URL after each push.

Run [docs/MARKETING_GUIDELINES.md](docs/MARKETING_GUIDELINES.md) "Brand audit checklist" before any visual change.

## Adding a custom domain

Vercel → Settings → Domains → add `sparkworks.kids` (or whichever).
