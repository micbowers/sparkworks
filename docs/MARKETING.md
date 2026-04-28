# SPARKWORKS MARKETING POSTURE
*Strategic working assumptions for how Sparkworks is positioned and sold.*
*Pair with [BRAND_REF.md](BRAND_REF.md) (palette/names), [DESIGN_PATTERNS.md](DESIGN_PATTERNS.md) (the four locked rules), [PROGRAM_AND_MESSAGING.md](PROGRAM_AND_MESSAGING.md) (verbatim copy).*
*Last updated: April 2026 — after the Season 1 (Founding Sparks) pilot oversubscribed.*

---

## SCOPE

This is the strategic-marketing companion to the brand and content docs. It captures **how** we position Sparkworks — what we lead with, what we leverage, what we never do — so future builds don't drift toward generic enrichment-program copy.

When in doubt:
- **Brand voice** lives in [BRAND_REF.md §BRAND VOICE](BRAND_REF.md) and [PROGRAM_AND_MESSAGING.md §13](PROGRAM_AND_MESSAGING.md). Those still apply.
- **Visual rules** live in [DESIGN_PATTERNS.md](DESIGN_PATTERNS.md). Those still apply.
- **What's specific to *strategy* — not voice and not visuals — lives here.**

---

## THE BIG ASSETS WE LEAD WITH

These are real, leverageable, unhyped facts. Use them.

1. **The pilot oversubscribed before being publicly listed.** Founding Sparks was Season 1. It filled. Multiple parents asked for spots after it filled. This is the strongest social proof we have — state it as a fact, not a brag.
2. **Real curriculum, not vapor.** Eight named sessions, eight named badges, eight real-world case studies, two named tracks, defined session structure. Most "critical thinking" programs are 80% buzzwords. We can name what kids do in Session 5.
3. **Two grade-calibrated tracks.** Ember (grades 2–3) and Blaze (grades 4–6). Six students max per track. Most enrichment programs are undifferentiated. State the cap, state it's filling.
4. **AI-age timing.** Parents already feel this. We don't manufacture the urgency — we offer a constructive answer: critical thinking is what AI can't replace.
5. **A free working game (Find The Alien).** A top-of-funnel asset most ed brands don't have.

---

## THE FOUR PRINCIPLES

### 1 — Confidence without hype

The pilot oversubscribed; the waitlist exists; Season 2 is filling. Those are facts. State them flatly.

- ✅ *"Founding Sparks filled before we listed it. Season 2 is filling now."*
- ❌ *"DON'T MISS OUT — limited seats remaining! ⚡⚡⚡"*

No exclamation marks in marketing copy. No countdown timers. No "ACT NOW." The brand voice rule "Direct, not breathless" applies to selling, not just to teaching.

### 2 — Specific over aspirational

Specific outcomes earn trust; abstract promises don't. The "Don't say / Say instead" table in [PROGRAM_AND_MESSAGING.md §11](PROGRAM_AND_MESSAGING.md) governs this for program copy. The same rule applies to marketing copy: lead with concrete moments.

- ✅ *"In Session 6, kids catch a mistake made by AI."*
- ❌ *"Build cognitive resilience for the AI age."*

### 3 — Honest about stage

Founding Sparks happened. Season 2 is the next paid cohort. We're growing, not yet scaled. **Never** reference scale projections, franchise plans, or "thousands of families served." Don't describe the program as "proven" — it's "carefully designed and structured" (this rule comes from [PROGRAM_AND_MESSAGING.md](PROGRAM_AND_MESSAGING.md) and is enforceable).

### 4 — The waitlist *is* the product when cohorts fill

When a cohort fills, the page shouldn't go quiet. It should pivot to capturing the next cohort's interest list. Capture every interested parent — they're the warm audience for the next launch. **A subscriber on a waitlist is worth more than a stranger who finds you cold.**

---

## THE THREE PRODUCT LINES — THREE DIFFERENT JOBS

**Don't conflate them.** Each has a distinct job:

| Line | Job | Conversion goal |
|---|---|---|
| **Program** | Convert interested parents into Season 2 enrollees | Save my seat (form on /program) |
| **Games** | Build brand awareness; capture email | Subscribe (Notion Subscribers DB, `Games` interest) |
| **Materials** | Build brand awareness; capture email | Subscribe (Notion Subscribers DB, `Materials` interest) |

Games and Materials are **top-of-funnel** assets. They're how parents discover Sparkworks before they're shopping for a program. Don't burden the Games or Materials cards with program-enrollment messaging — keep them educational + a low-friction email capture.

---

## NAMING THE COHORTS

- **Founding Sparks** = Season 1 pilot (completed, $149, ran spring 2026). Use this name when referring to the pilot specifically.
- **Season 2** = Fall 2026 cohort ($449, starts week of Sept 7). Use this name in CTAs and the form.
- **Don't call the upcoming cohort "Season 1."** The pilot already happened. Framing Sept as Season 1 erases the social proof.
- Future cohorts: Season 3, Season 4. The number reflects the actual count of paid cohorts plus the pilot.

---

## PRICING POSTURE

- Founding Sparks ran at **$149** for all 8 sessions. The price is gone (one-time founding rate).
- Season 2 is **$449** for all 8 sessions. Flat, not monthly. This supersedes any older "$349/month" framing in stale docs.
- **Anchor on $149 when it adds context** — *"Founding Sparks ran at $149; Season 2 is $449"* — because it positions $449 against a credible reference point. Don't lead with the $149 in isolation (would feel like bait-and-switch).
- **No payment required to hold a seat.** Slots are offered in order of registration. Details and payment come later. State this explicitly on the form.

---

## SOCIAL PROOF — RULES OF USE

We have a [Notion Parent Feedback database](https://www.notion.so/c2780e5d1167495b9d2405107077f1f7) with verbatim quotes and behavioral observations from the pilot. Some are gold (a kid getting mad at his mom for being late to class; a kid telling a classmate at school it's his favorite Friday activity, alongside football).

**Rules:**

1. **Names stay out.** Anonymized quotes only. Behavioral observations are paraphrased ("one parent's son…"). Until/unless explicit consent, no first names on the public site.
2. **Lead with the behavioral evidence.** "Got mad at me for being late to class" is more credible than "It's a great program!" because no enrichment program ever gets to claim it.
3. **Use specifics.** "He liked the matchstick puzzles best" beats "The kids really enjoyed it." The detail is what makes the quote feel earned.
4. **Reportage tone, no testimonial wall.** No five-star ratings, no "TESTIMONIALS" headers, no quote-card carousel. Weave the evidence into prose.

---

## SUBSCRIBERS LIST — STRUCTURE

One Notion DB ([Subscribers](https://www.notion.so/d1084ec54ab9470ba3a2d53743c42f8c)), multi-interest tags. Don't fragment the audience prematurely.

- **Schema:** Email (key) · Interests (multi-select: Games, Materials, Program) · Source · Subscribed (auto) · Status (Active/Unsubscribed)
- **Upsert by email.** A subscriber who signs up for Games and later for Materials should have one record with both tags, not two records.
- **`source` is precious.** Where they subscribed from (e.g. `home-games-card`) tells us which surface is converting. Always pass it.
- **Email-only signup.** No "name + email." Lowest possible friction for "tell me when X launches" subscribes.

---

## ATTRIBUTION

Every CTA that reaches the registration form passes a `?source=` query param so we can see which entry point converts. The InterestForm reads it and writes it to Notion as the `Source` field on the record.

Current sources in use:
- `home-hero` — primary CTA in the homepage hero
- `home-proof` — CTA from the social-proof strip
- `home-program` — CTA on the homepage Program card
- `direct` — default when no source param is present

When adding a new entry-point CTA, define a new `source` value with a clear, lowercase-kebab name.

---

## WHAT NOT TO DO

- **Don't manufacture urgency.** No countdown timers, no "X spots left!" without a real number to back it up.
- **Don't conflate the products.** Games/Materials cards do not pitch the program; they educate + capture email. The program card is where the conversion happens.
- **Don't paraphrase verbatim copy.** If [PROGRAM_AND_MESSAGING.md](PROGRAM_AND_MESSAGING.md) gives you the exact wording for an FAQ answer or pitch, use it as written.
- **Don't quote a third price.** Only $149 (Founding Sparks pilot, closed) and $449 (Season 2). No "$349/month," no monthly anything.
- **Don't add testimonial-y framing.** No five stars, no "RAVE REVIEWS," no quote-carousels. Pilot parent feedback is reportage, not advertising.
- **Don't pull focus from the seat-CTA.** Every change to the homepage should pass this test: *"Did this make the seat-CTA easier to find, or harder?"*

---

## OPEN STRATEGIC QUESTIONS (deferred — not blocking)

These are bigger marketing moves we've discussed but haven't built. Notes for future sessions:

- **Live "X of 12 reserved" counter** — high-trust scarcity if maintained accurately. Maintenance burden currently outweighs the benefit. Revisit when Season 3+.
- **Find The Alien → email funnel inside the game.** Currently the game is a brand asset with no capture. When the game has a natural pause/end-screen, plug a Sparkworks subscribe form there.
- **Referral mechanism for current pilot parents.** They're our warmest audience. A "tell a friend / get a discount on Season 3" loop could compound.
- **Founding Sparks recap content.** When Season 1 wraps, a "How it went" recap on `/program` adds further proof.
- **Marketplace UI inside the Games card.** Currently a mention. When we have 3+ recommended games to list (with affiliate links), build the actual marketplace.

---

*Pair with the brand and content docs above. If anything in this doc conflicts with [BRAND_REF.md](BRAND_REF.md) or [DESIGN_PATTERNS.md](DESIGN_PATTERNS.md) on visual decisions, the visual docs win. If anything conflicts with [PROGRAM_AND_MESSAGING.md](PROGRAM_AND_MESSAGING.md) on program copy, the messaging doc wins. This doc governs strategy.*
