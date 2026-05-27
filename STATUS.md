---
agent: Sparkworks Website
last_updated: 2026-05-27
cadence: weekly (daily during cohort enrollment pushes)
---

## Current focus
Launching the Games surface. Built /practice (the "games we use in class" landing page) with the first family card (Mastermind & Code Breaker) — same page parents can land on from email links. Design has the brief for hero + family-card visual treatment; integrating in a follow-up pass.

## KPIs
- Registrations to date (Founding Sparks + Season 2): _populate next refresh — needs Notion DB query_
- Subscribers to date (Games / Materials / Program interests): _populate next refresh — needs Notion DB query_
- Deploy status: green · main @ 355e05a deployed to www.sparkworks.kids on 2026-05-27

## Open items needing Mike (or Tina)
- See `[SW]` tasks on `Cairn – Sparkworks`

## Recently completed
- 2026-05-27 — Removed the "From pilot parents" quotes section from the homepage (`92784c1`)
- 2026-05-27 — Shipped `/practice` page with Mastermind & Code Breaker family card (verbatim PCr endorsement copy, two version pickers with affiliate links, site-level affiliate disclosure); wired homepage Games ProductCard to `/practice`; dropped "· Coming soon" suffix on the Games card title (`355e05a`)
- 2026-05-27 — Filed design brief on `Cairn – Products` (`[Des] Hero + family-card visual for sparkworks.kids/practice page`) — async hand-off, stubbed visuals on the page today
- 2026-05-27 — Filed content reconciliation task on `Cairn – Sparkworks` (`[PCr] Reconcile Mastermind session-number mapping (S6 vs S7)`) — endorsements doc says S6, program page shows S7 for the strategy session

## Blocked / waiting on
- Waiting on **Design** for hero + family-card visual treatment for `/practice` (brief filed 2026-05-27; stubs live in the meantime)
- Waiting on **PCr** to reconcile Mastermind session-number mapping (filed 2026-05-27; `/practice` uses session name without a number until then)

## Known issues
- Local `next build` and `next dev` cache writes fail intermittently with `EINVAL` / `ENOENT` on the Google Drive virtual filesystem (`G:\My Drive\…`). Dev server still serves; build still completes the compile step on Vercel. Not blocking — Vercel's Linux build env is the source of truth for production validation.
