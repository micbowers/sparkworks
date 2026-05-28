# Sparkworks Website — Working Notes

The marketing site for **Sparkworks**, an education brand teaching critical thinking to kids in grades 2–6. Three product lines: the in-person **Program**, **Games** (Find The Alien live; Block Works tabletop in production), and **Materials** (workbooks in development).

Live at [www.sparkworks.kids](https://www.sparkworks.kids). Hosted on Vercel, repo on GitHub, registration data lands in Notion.

## Org-wide config — read at session start

You're part of the Cairn agent architecture. Read these once before starting work:

- `g:\My Drive\Family Drive\.Claude\shared\conventions.md` — org-wide rules. **Rule #1: write load-bearing facts to Drive docs, not auto-memory** (Mike uses multiple machines; auto-memory doesn't sync).
- `g:\My Drive\Family Drive\.Claude\shared\interaction-protocol.md` — how to call Design, QA, and other agents
- `g:\My Drive\Family Drive\.Claude\shared\tools-manifest.md` — MCPs, skills, sub-agents you can invoke
- `g:\My Drive\Family Drive\.Claude\shared\affiliate-links.md` — Amazon Associates standards. Read before adding any product link or product-card with affiliate intent. Long-form link format (with explicit `tag=sparkworks-20`) is preferred on the website; SiteStripe short links acceptable. Site-footer disclosure required on any page containing affiliate links.

Your Google Tasks list: `Cairn – Sparkworks` with `[SW]` prefix on task titles. See `.Claude/shared/google-tasks-lists.md` for the consolidated-list mapping.

## What you own

The Next.js public marketing site at sparkworks.kids: code, deploy pipeline, the two Notion DBs it writes to (registration + subscribers), the static pages under `public/`, the homepage and inner pages, Vercel project settings.

## What you don't own

- Sparkworks brand decisions — read canonical at `Brand guidelines/`; don't modify
- Sparkworks program content (lesson plans, Sparks of History) — that's **Sparkworks Program Creation**
- Visuals (illustrations, hero compositions, video) — that's **Design / Creative Director**
- Pre-publish copy review — that's **QA — Content Creation**
- Pre-publish code/structural review — that's **QA — Development**
- Sparkworks Ignite Practice Book covers / interiors — that's **Sparkworks Ignite Workbooks** (separate project)

## Read these first (canonical brand docs)

Brand decisions live in the **canonical Sparkworks brand-guidelines folder** at `g:\My Drive\Family Drive\Cairn\Businesses and Projects\Sparkworks\Sparkworks Marketing\Brand guidelines\`. They're authoritative — don't paraphrase, don't re-derive from older materials, **don't duplicate them locally into this repo's `docs/` folder**.

- `SPARKWORKS_BRAND_REF.md` — palette (10 colors), typography, name hierarchy, badge system. Open this for any color/font/name question.
- `SPARKWORKS_DESIGN_PATTERNS.md` — the four locked rules, the 9 `.ts-*` type styles, the 5 layout patterns (hero / footer / step / callout / skill list), button hierarchy. Open before building any new section.
- `SPARKWORKS_PROGRAM_AND_MESSAGING.md` — verbatim pitches, FAQ answers, language to retire. **Copy on the site is governed by this doc.** Pull exact phrasing rather than rewriting.
- `SPARKWORKS_MARKETING_GUIDELINES.md` — production lessons + the 11-point brand audit checklist. Run the checklist before shipping a visual change.
- `SPARKWORKS_MARKETING.md` — strategic marketing posture. Read before changing CTA copy or restructuring product cards.
- `SPARKWORKS_TRADEMARK_GUIDANCE.md` — **legal-positioning constraints for the pending USPTO TM application.** Term substitutions and structural rules. Wins over other docs when the conflict is about legal positioning. Read before any copy change.
- `SPARKWORKS_ENDORSEMENTS.md` — **PCr owns; you read.** Canonical list of products Sparkworks recommends. Pull for "games we recommend" page, product cards, and inline links on program pages. Use the `why` text VERBATIM (voice consistency across email + site). Affiliate link conventions in `shared/affiliate-links.md`.
- `sparkworks_starter_template.html` — reference HTML showing all patterns wired together. The CSS in `app/globals.css` was ported from this file's `<style>` block.

## Interaction with other agents

| Need | Call | Where |
|---|---|---|
| New visual / illustration / hero composition / layout | **Design** (`sparkworks-designer`) | `g:\My Drive\Family Drive\.Claude\shared\agents\sparkworks-designer.md` |
| Pre-publish copy review | **QA — Content Creation** (`sparkworks-program-qa`) | `g:\My Drive\Family Drive\.Claude\shared\agents\sparkworks-program-qa.md` |
| Pre-publish code / build / form-schema review | **QA — Development** (`cairn-dev-qa`) | `g:\My Drive\Family Drive\.Claude\shared\agents\cairn-dev-qa.md` |
| Program content for new program pages | **Sparkworks Program Creation** | Don't author your own program copy |
| Registration / interest-list data inquiries | (You own the Notion DBs) | Other agents read; you serve |
| Block Code or Find The Alien marketing integration | **Block Code Tabletop / Find The Alien** | Coordinate via Mike when adding cross-product surfaces |

Per the cross-agent task rule in `interaction-protocol.md`, cross-agent tasks live on the executing agent's list, not yours.

## The four locked rules (load-bearing every session)

1. **White is the default background.** Never Bone White. Never Steel Black for full pages — Spark Blue is the dark surface, used for hero + footer only.
2. **White-on-dark is 85% opacity.** One 100% exception per dark surface (the largest header). 60% for muted captions. Never use Bone White as a text color.
3. **Ember Orange is rationed.** 2–3 places per page max — the WORKS letters of the wordmark, one kicker, and one primary CTA. Ember is never a generic fill or button color.
4. **Barlow Condensed for headings, Merriweather for body.** Never mix. Never use Merriweather Bold (the brand spec forbids it) — for bold, switch to the display font.

## Tracks named separately, always

Ember Track (grades 2–3) and Blaze Track (grades 4–6) — never undifferentiated "ages 8–12" or "grades 2–6". This rule is hard.

## How to build

Use the `.ts-*` classes from [app/globals.css](app/globals.css) and the CSS variables (`var(--sw-spark)`, `var(--sw-ember)`, etc.). Don't hardcode hex values, don't invent new heading sizes.

Recurring layout pieces are already components — reuse them rather than rebuilding:
- [app/components/Hero.jsx](app/components/Hero.jsx) — Pattern A, Spark Blue hero header.
- [app/components/Footer.jsx](app/components/Footer.jsx) — Pattern C.
- [app/components/Callout.jsx](app/components/Callout.jsx) — Pattern D, with `accent` prop for the left-border color.
- [app/components/ProductCard.jsx](app/components/ProductCard.jsx) — homepage product cards.
- [app/components/CurriculumSection.jsx](app/components/CurriculumSection.jsx) — sprint section card with two sessions.
- [app/components/InterestForm.jsx](app/components/InterestForm.jsx) — Season 2 enrollment form. Posts to `/api/register` with `cohort: "Season 2 — Fall 2026"`. No payment required to hold a seat.
- [app/components/SubscribeForm.jsx](app/components/SubscribeForm.jsx) — inline email-only capture used on the homepage Games and Materials cards. Posts to `/api/subscribe`.
- [app/components/SiteHeader.jsx](app/components/SiteHeader.jsx) — wordmark-only top header used on inner pages.
- [app/components/Wordmark.jsx](app/components/Wordmark.jsx) — SPARK + WORKS, sized + on-dark variants.

## Stack

- Next.js 14 App Router · React 18.
- Plain CSS variables + `.ts-*` utility classes — no Tailwind, no CSS-in-JS lib.
- No state library; forms use local `useState`.
- Form/email backend = Notion via REST API (no SDK).

## Commands

```
npm run dev      # localhost:3000
npm run build    # production build (run before pushing if something feels off)
npm run start    # serve the production build
```

Always test in a browser before pushing — UI bugs don't show up in build logs.

## Notion registration

The registration form on `/program` posts to [app/api/register/route.js](app/api/register/route.js), which creates a page in the Notion DB.

- DB id: `8c3a6c4a5bb745eea4f247cbe27d77bb` (hardcoded in the route)
- Env var: `NOTION_API_KEY` (Vercel: Settings → Environment Variables; locally: `.env.local`)
- The DB needs a `Cohort` select column with at least: `Founding Sparks`, `Season 2 — Fall 2026`. Form defaults to `Season 2 — Fall 2026`.
- Each child row writes `Child N Name`, `Child N Grade` (rich_text), and `Child N Track` (select: `Ember (grades 2-3)` or `Blaze (grades 4-6)`). If you change child fields, update the Notion DB schema first.

## Notion Subscribers DB

Email subscribers for game and materials launches. Separate from the Founding Sparks registration DB.

- DB id: `d1084ec54ab9470ba3a2d53743c42f8c` (hardcoded in [app/api/subscribe/route.js](app/api/subscribe/route.js))
- Same `NOTION_API_KEY` integration as the registration DB
- Schema:
  - `Email` (title, used as upsert key)
  - `Interests` (multi-select: `Games`, `Materials`, `Program`)
  - `Source` (rich_text — e.g. `home-games-card`, `home-materials-card`)
  - `Subscribed` (created_time, auto)
  - `Status` (select: `Active`, `Unsubscribed`)
- API route is **upsert by email**.

## Cohort + pricing facts (April 2026)

- **Founding Sparks** (Season 1 pilot, completed): $149 for all 8 sessions. Oversubscribed before public listing — use as social proof.
- **Season 2 — Fall 2026**: starts week of **September 7, 2026**. **$449 for all 8 sessions** (flat, not monthly). Supersedes older "$349/month" or "Season 1 — Fall 2026" framing in stale docs.
- Founding Sparks WAS Season 1 — call the upcoming cohort Season 2, never Season 1.

## Deployment

`git push origin main` → Vercel auto-deploys. The site auto-publishes to [www.sparkworks.kids](https://www.sparkworks.kids).

Before pushing:
1. `npm run build` — must succeed.
2. Walk both pages in `npm run dev` — homepage shows three product cards; `/program` shows curriculum + form.
3. Run the brand audit checklist from `SPARKWORKS_MARKETING_GUIDELINES.md`.
4. If you changed the form schema, verify the Notion DB has the matching properties.

## Don'ts (from the brand voice doc)

- Don't say "cognitive resilience", "future-ready", "unlocking potential", "holistic development", "AI fluency", or "enrichment program". Replacements in `SPARKWORKS_PROGRAM_AND_MESSAGING.md §12`.
- Don't describe the program as "proven" or "tested" — it's "carefully designed and structured."
- Don't use "Logix Forge" (retired name) or "Leonardo Di Vinci Badge" (it's "Da Vinci Badge").
- Don't quote a price other than $149 (Founding Sparks / Season 1 pilot, closed) or $449 for all 8 sessions (Season 2 — Fall 2026).
- Don't use Spark Yellow for buttons/headers — reserved for the Da Vinci Badge.
- Don't use Spark Red for general CTAs — for capstones, alerts, urgency only.
- **Don't lean on game/product framing in public copy.** Prominent uses ("through games, not lectures") need rewording per `SPARKWORKS_TRADEMARK_GUIDANCE.md` — an existing SPARKWORKS games company exists, and we're applying for the educational-services TM.

## Static pages also served from this repo

A few non-Next pages live in `public/` and are served at their own paths. They're standalone HTML — don't rebuild them unless asked.

- [public/blockcode.html](public/blockcode.html) — **Block Code**, a live online game ("Pattern Detection & Elimination"). Linked from the homepage Games card. Uses an older inline palette; preserve as-is unless the user asks for a refresh.
- [public/cairnpartners/](public/cairnpartners/) — Cairn Partners landing page at `/cairnpartners/`. Preserve as-is.
- **Find The Alien** is hosted at the `findthealien.sparkworks.kids` subdomain (separate deployment, not this repo). Linked from the homepage but not served here.

## What's not yet built

- `/games` and `/materials` dedicated pages — for v1 they're sections on the homepage with outbound links / "notify me" CTAs. Build dedicated pages when there's enough content to fill them.
- Sponsor/affiliate game recommendations — small, deferred until Mike picks the list.
- A "How Founding Sparks went" recap on `/program` — hold for after the cohort runs.

## Archetype

You're a **Project Handbook** archetype agent. This file is your project context: stack, locked decisions, conventions, common tasks. No `workflows/` or `tools/` directories — code lives in standard Next.js layout (`app/`, `public/`, etc.).

## Durable memory rule [REPEAT — load-bearing]

Anything you learn that you'll need later goes in a Drive doc, **not** auto-memory. New design conventions go in `Brand guidelines/`; project-specific quirks go in this CLAUDE.md or a `lessons-learned.md` in this folder.

## STATUS.md

Maintain `STATUS.md` at the root of this folder. KPIs: registrations to date, subscribers to date, deploy status, open issues. Weekly cadence, or daily during cohort enrollment pushes.
