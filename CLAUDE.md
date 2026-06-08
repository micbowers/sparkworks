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
| Block Code or Sparkworks Web Games marketing integration | **Block Code Tabletop / Sparkworks Web Games** (umbrella for Find The Alien + Knights Tour) | Coordinate via Mike when adding cross-product surfaces |

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

**⚠️ Reality check (2026-06-08): `git push origin main` did NOT trigger a Vercel deploy** — a push landed cleanly on GitHub but no build fired, and production sat 3 commits stale. The GitHub→Vercel auto-deploy on the `sparkworks` project appears disconnected/paused (Mike to verify in Vercel dashboard → `sparkworks` → Settings → Git). Until that's fixed, **deploy via the Vercel CLI** (it's authed on this machine as `michaelbowers-4204`):

```
npx vercel --prod --yes      # builds working tree, deploys to production, aliases www.sparkworks.kids
```

**Two footguns the CLI deploy hit (both now documented so you don't repeat them):**
1. **Wrong project.** The real site is the Vercel project **`sparkworks`** (`prj_Ym2h1VGUAN7fjM4PzfpXMYO4RUJh`), which owns www.sparkworks.kids. A bare `vercel --prod --yes` in an unlinked dir defaults to a project named after the **folder** (`sparkworks-site`) and deploys to the wrong place (cf. the parallel `logixdojo` / `logixdojo-site` pair). **Before deploying, confirm `.vercel/repo.json` (or `project.json`) points to `sparkworks`**; if not: `npx vercel link --project sparkworks --yes`.
2. **Google Drive corrupts `.git`.** This repo lives on a Drive mount; Drive injects `desktop.ini` files *inside* `.git/refs/`, which makes `git fetch`/`git push` fail with `bad object refs/desktop.ini`. Fix: remove them — `Get-ChildItem .git -Recurse -Filter desktop.ini -Force | Remove-Item -Force` (236 found on 2026-06-08). This WILL recur until the working repo is moved off Drive. See `lessons-learned.md`.

After deploying, verify: `npx vercel inspect <deployment-url>` should list `www.sparkworks.kids` under Aliases, and `curl https://www.sparkworks.kids` should return 200.

Before deploying:
1. `npm run build` — must succeed. (On the Drive mount, `next build` itself throws `EINVAL` on the webpack cache; temporarily set `config.cache = false` in `next.config.js`, build, then revert — see `lessons-learned.md`.)
2. Walk both pages in `npm run dev` — homepage shows three product cards; `/program` shows curriculum + form.
3. Run the brand audit checklist from `SPARKWORKS_MARKETING_GUIDELINES.md`.
4. If you changed the form schema, verify the Notion DB has the matching properties.
5. **Stage only your own files** (`git add <files>`, not `git add -A`) — the working tree carries unrelated noise (desktop.ini, dev logs, a concurrent survey workstream, deleted `docs/` duplicates).

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

## Action items for Mike → Google Tasks, with details inline [REPEAT — load-bearing]

If a session surfaces anything Mike (or Tina) needs to **do** — a decision, an approval, a credential or value to supply, a call/email to send, a file to drop, a purchase, a setting to flip — it MUST become a Google Task **in that same session**, with the details to act written into the task itself, not just a pointer to a doc. Mike works from his task list: **if it's not a task, it won't get done.** Saying it in chat or burying it in a doc doesn't count. Title carries this agent's `[Prefix]` (per `conventions.md` Rule 4); notes lead with the actionable detail (what to do + any values / links / context needed), then a doc path for fuller context. See `conventions.md` Rule 11.

## Update STATUS.md at session end [REPEAT — load-bearing]

Before closing a session that produced meaningful work, update this agent's `STATUS.md` at the root of its own folder. At minimum: refresh **Current focus** if it changed, append a dated entry to **Recently completed**, update **Blocked / waiting on** if dependencies shifted, refresh KPI lines if numbers moved. Skip only if the session was a one-line answer or a trivial lookup — judgment call.

**Why this is load-bearing.** Master Control reads STATUS at brief time. Unupdated STATUS = invisible work at the next brief, unsurfaced blockers MC can't route around, and stale-cadence triggers that force MC to live-invoke you. **Do not duplicate Tasks into STATUS** (per Rule 7 / Rule 11) — the "Open items needing Mike" section references Tasks by `[Prefix]` query, never restates them. See `conventions.md` Rule 7.

## Durable memory rule [REPEAT — load-bearing]

Anything you learn that you'll need later goes in a Drive doc, **not** auto-memory. New design conventions go in `Brand guidelines/`; project-specific quirks go in this CLAUDE.md or a `lessons-learned.md` in this folder.

## Standing instruction: proactively assess for analytics opportunities

Mike directive 2026-05-27: *"please always be assessing for better analytics opportunities with the site."*

When making changes, surface analytics gaps without being asked. Examples:
- Any new outbound link (affiliate, sponsor, partner) → propose a `track()` call on the click
- Any new form or interactive element → propose a `track()` call on submit/interaction
- Any new page or major surface → confirm Vercel `<Analytics />` will cover it (it does globally via `app/layout.js`); flag if any custom segmentation needs adding (`source` property convention used elsewhere)
- Any new conversion funnel step (e.g., card expand, scroll past hero, /practice item visible) → propose if useful

Vercel Analytics stack already wired in `app/layout.js`: `@vercel/analytics` for events, `@vercel/speed-insights` for Web Vitals. Custom events fire via `import { track } from "@vercel/analytics"` (browser context only — requires `"use client"` on the component). Existing custom events:
- `register_submit` — `InterestForm.jsx` (properties: `cohort`, `source`, `child_count`)
- `subscribe_submit` — `SubscribeForm.jsx` (properties: `source`, `interests`)
- `amazon_click` — `AmazonButton.jsx` (properties: `product`, `manufacturer`, `price`, `rating`, `source`)
- `cta_click` — top-of-funnel nav CTAs via `TrackedLink`/`ProductCard` (properties: `source`, `destination`). Sources: `home-hero`, `home-program`, `home-program-details`, `home-practice`, `program-hero`.
- `game_play_click` — "Play free" outbound links to game subdomains, `practice/page.js` via `TrackedAnchor` (properties: `game`, `source`)
- `practice_card_expand` — `/practice` ExpandableCard open (properties: `slug`). Fires on open only, not collapse.
- `games_cta_click` — `/program` → `/practice` link via `TrackedLink` (properties: `source`)
- `spark_poster_expand` / `spark_poster_download` — `SparkOfHistory.jsx` (properties: `figure`, `source`)

Reusable click-tracking infra: `TrackedLink.jsx` (internal next/link) and `TrackedAnchor.jsx` (external/outbound `<a>`) — both take `event` + `eventProps` and fire `track()` on click. `ProductCard` cta/secondary action objects accept `event`/`eventProps` and route through these automatically. **Naming convention going forward: `surface_action` / `noun_verb`** (`games_cta_click` predates it; left as-is for data continuity).

Use the `source` property convention to attribute clicks/submits to a specific surface (e.g., `practice-product-block`, `practice-affiliate-book`, `home-launches`, `practice-book-ignite-1`).

When PA-API access opens up, revisit which events are still useful vs. duplicated by Amazon's reporting (the `[SW] Switch /practice from hardcoded Amazon snapshots to PA-API…` task tracks the migration trigger).

## STATUS.md

Maintain `STATUS.md` at the root of this folder. KPIs: registrations to date, subscribers to date, deploy status, open issues. Weekly cadence, or daily during cohort enrollment pushes.
