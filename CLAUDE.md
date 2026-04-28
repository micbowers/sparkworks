# Sparkworks Website — Working Notes

The marketing site for **Sparkworks**, an education brand teaching critical thinking to kids in grades 2–6. Three product lines: the in-person **Program**, **Games** (Find The Alien live; Block Works tabletop in production), and **Materials** (workbooks in development).

Live at [www.sparkworks.kids](https://www.sparkworks.kids). Hosted on Vercel, repo on GitHub, registration data lands in Notion.

## Read these first

Brand decisions live in `docs/`. They're authoritative — don't paraphrase, don't re-derive from older materials.

- [docs/BRAND_REF.md](docs/BRAND_REF.md) — palette (10 colors), typography, name hierarchy, badge system. Open this for any color/font/name question.
- [docs/DESIGN_PATTERNS.md](docs/DESIGN_PATTERNS.md) — the four locked rules, the 9 `.ts-*` type styles, the 5 layout patterns (hero / footer / step / callout / skill list), button hierarchy. Open this before building any new section.
- [docs/PROGRAM_AND_MESSAGING.md](docs/PROGRAM_AND_MESSAGING.md) — verbatim pitches, FAQ answers, language to retire. **Copy on the site is governed by this doc.** When changing user-facing text, pull from here rather than rewriting.
- [docs/MARKETING_GUIDELINES.md](docs/MARKETING_GUIDELINES.md) — production lessons + the 11-point brand audit checklist. Run the checklist before shipping a visual change.
- [docs/MARKETING.md](docs/MARKETING.md) — **strategic marketing posture.** How we frame the program, when to invoke social proof, what to capture from games/materials visitors. Read before changing CTA copy or restructuring product cards.
- [docs/TRADEMARK_GUIDANCE.md](docs/TRADEMARK_GUIDANCE.md) — **legal-positioning constraints for the pending USPTO TM application.** Term substitutions ("games" → "activities/challenges" when prominent, "workbook" → "class materials," etc.) and structural rules (no Shop section, no product framing) to keep us in Class 041 (educational services) and away from a game-selling SPARKWORKS that already exists. Wins over the other docs when the conflict is about legal positioning. Read before any copy change.
- [docs/starter_template.html](docs/starter_template.html) — reference HTML showing all patterns wired together. The CSS in `app/globals.css` was ported from this file's `<style>` block.

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
- [app/components/InterestForm.jsx](app/components/InterestForm.jsx) — Season 2 enrollment form. Posts to `/api/register` with `cohort: "Season 2 — Fall 2026"`. No payment required to hold a seat — slots offered in order of registration.
- [app/components/SubscribeForm.jsx](app/components/SubscribeForm.jsx) — inline email-only capture used on the homepage Games and Materials cards. Posts to `/api/subscribe`.
- [app/components/SiteHeader.jsx](app/components/SiteHeader.jsx) — wordmark-only top header used on inner pages (e.g. `/program`). Links the wordmark to home. Don't use on the homepage itself.
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
- The DB needs a `Cohort` select column with at least these values: `Founding Sparks`, `Season 2 — Fall 2026`. Form defaults to `Season 2 — Fall 2026`.
- Each child row writes `Child N Name`, `Child N Grade` (rich_text), and `Child N Track` (select: `Ember (grades 2-3)` or `Blaze (grades 4-6)`). If you change child fields here, update the Notion DB schema first.

## Notion Subscribers DB

Email subscribers for game and materials launches. Separate database from the Founding Sparks registration DB — keeps interest-list parents distinct from email-only subscribers.

- DB id: `d1084ec54ab9470ba3a2d53743c42f8c` (hardcoded in [app/api/subscribe/route.js](app/api/subscribe/route.js))
- Same `NOTION_API_KEY` integration as the registration DB
- Schema:
  - `Email` (title, used as upsert key)
  - `Interests` (multi-select: `Games`, `Materials`, `Program`)
  - `Source` (rich_text — e.g. `home-games-card`, `home-materials-card`)
  - `Subscribed` (created_time, auto)
  - `Status` (select: `Active`, `Unsubscribed`)
- API route is **upsert by email**: subscribing the same email twice with different interests merges the tags rather than creating duplicates.

## Cohort + pricing facts (April 2026)

- **Founding Sparks** (Season 1 pilot, completed): $149 for all 8 sessions. Oversubscribed before public listing — use as social proof.
- **Season 2 — Fall 2026**: starts week of **September 7, 2026**. **$449 for all 8 sessions** (flat, not monthly). This supersedes any older "$349/month" or "Season 1 — Fall 2026" framing in stale docs.
- Founding Sparks WAS Season 1 — call the upcoming cohort Season 2, never Season 1. The pilot already happened; framing this as "Season 1" undersells the social proof.

## Deployment

`git push origin main` → Vercel auto-deploys. The site auto-publishes to [www.sparkworks.kids](https://www.sparkworks.kids).

Before pushing:
1. `npm run build` — must succeed.
2. Walk both pages in `npm run dev` — homepage shows three product cards; `/program` shows curriculum + form.
3. Run the brand audit checklist from [docs/MARKETING_GUIDELINES.md](docs/MARKETING_GUIDELINES.md).
4. If you changed the form schema, verify the Notion DB has the matching properties.

## Don'ts (from the brand voice doc)

- Don't say "cognitive resilience", "future-ready", "unlocking potential", "holistic development", "AI fluency", or "enrichment program". The replacements are listed in [docs/PROGRAM_AND_MESSAGING.md §12](docs/PROGRAM_AND_MESSAGING.md).
- Don't describe the program as "proven" or "tested" — it's "carefully designed and structured."
- Don't use "Logix Forge" (retired name) or "Leonardo Di Vinci Badge" (it's "Da Vinci Badge").
- Don't quote a price other than $149 (Founding Sparks / Season 1 pilot, closed) or $449 for all 8 sessions (Season 2 — Fall 2026).
- Don't use Spark Yellow for buttons/headers — it's reserved for the Da Vinci Badge.
- Don't use Spark Red for general CTAs — it's for capstones, alerts, urgency only.
- **Don't lean on game/product framing in public copy.** "Games" can stay if framed as a *teaching method*, but prominent uses ("through games, not lectures") need rewording per [docs/TRADEMARK_GUIDANCE.md](docs/TRADEMARK_GUIDANCE.md) — there's an existing SPARKWORKS that sells games, and we're applying for the educational-services TM.

## Static pages also served from this repo

A few non-Next pages live in `public/` and are served at their own paths. They're standalone HTML — don't rebuild them unless asked.

- [public/blockcode.html](public/blockcode.html) — **Block Code**, a live online game ("Pattern Detection & Elimination"). Linked from the homepage Games card. Uses an older inline palette; preserve as-is unless the user asks for a refresh.
- [public/cairnpartners/](public/cairnpartners/) — Cairn Partners landing page at `/cairnpartners/`. Preserve as-is.
- **Find The Alien** is hosted at the `findthealien.sparkworks.kids` subdomain (separate deployment, not this repo). Linked from the homepage but not served here.

## What's not yet built

- `/games` and `/materials` dedicated pages — for v1 they're sections on the homepage with outbound links / "notify me" CTAs. Build dedicated pages when there's enough content to fill them.
- Sponsor/affiliate game recommendations — small, deferred until Mike picks the list.
- A "How Founding Sparks went" recap on `/program` — hold for after the cohort runs.
- Block Code + Workbooks email-capture is wired to a separate Subscribers DB via `/api/subscribe` — see "Subscribers DB" below.
