import Link from "next/link";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { CurriculumSection } from "../components/CurriculumSection";
// InterestForm import removed 2026-08-16 while enrollment is paused — see the #interest section
// below for the restore path. The component itself is intentionally kept in the tree.
import { TrackedLink } from "../components/TrackedLink";
import { QuoteCarousel } from "../components/QuoteCarousel";

// ⚠ TWO DIFFERENT PEOPLE ARE NAMED TINA. Do not conflate them.
//   • Tina Ling — survey respondent, ordinary paying customer (two kids, surname Galante). Her
//     quote is the one beside the sign-up ribbon. Fine to publish.
//   • The program instructor, also Tina — NOT a survey respondent and NOT in this file. Verified
//     2026-09-01 against the survey DB: none of the ten respondents is the instructor.
// Why this matters: publishing the instructor's own words as a parent testimonial would violate
// 16 CFR §465.5(b)(1) (insider consumer testimonials) — a penalty-bearing FTC RULE, not the
// non-binding Guides, up to $53,088 per violation. §465.5(b)(1) is NOT limited to third-party
// platforms; it reaches our own site. Note the definitions split: §465.1(d) "consumer review"
// requires a review-hosting surface (so the review sections don't reach /program), but §465.1(f)
// "consumer testimonial" covers any promotional message (so the testimonial sections DO).
// Checking only the review sections gives the wrong answer.
// If any future quote comes from anyone connected to the business, it needs a clear and
// conspicuous disclosure of the relationship — or it doesn't run.
//
// Drawn from the Founding Sparks exit survey — lightly edited, not verbatim; each edit is noted
// inline below and the on-page disclosure must keep matching them. Pronoun substitutions are
// UNBRACKETED throughout — pick one convention and keep it; the page-level disclosure covers them.
// Permission per family via G3 —
// see the #reviews section comment before changing anything here.
// ONE QUOTE PER FAMILY. Never run two under the same "Founding Sparks parent" attribution — it reads
// as two independent families and inflates apparent breadth.
// Never stitch two survey answers into one quote.
const REVIEWS = [
  // Tina Ling, E8 — "conflicts with other things they" → comma added. This is the SAME quote that
  // runs beside the sign-up ribbon at the top of the page. It appears twice ON PURPOSE (Mike,
  // 2026-09-01) and must stay first in this array. An earlier comment here said not to duplicate
  // it — that instruction is void. If the ribbon quote is ever changed, change this one with it.
  // Her G3 is "Yes with my name"; she runs anonymous only because Mike asked for anonymous
  // throughout. See the open task about naming her and Chris Mangandi.
  "The kids were so excited to go every week. When we had conflicts with other things, they hands-down wanted to do Sparkworks.",
  // Wallace Huang, E9 — verbatim
  "Sparkworks focuses on skills that are often overlooked in school, but I feel are essential. In particular: solving problems that don't always have a clear right answer.",
  // Adriana Mejia, E9 — "Thus"→"This" typo fixed, "your kid"→"kids", "ideas/solutions" spelled out.
  // Voice kept in her original third person.
  "This class encouraged kids to use critical thinking rather than memorization or facts. They go to a class to learn and feel uncomfortable for a while in order to come up with ideas and solutions. It challenges them.",
  // Emily Brandon, F2 — child's name → pronoun, closing exclamation → period, second sentence
  // trimmed. REPLACES her E8 quote ("He left each class enthusiastic to share what he learned") —
  // one quote per family, and this one is concrete evidence of transfer rather than enthusiasm.
  "I did notice him playing with his toy soldiers a bit more recently, and wonder if setting up his pretend battle strategy was at all inspired by this.",
  // Lisa Avalos, G1 — opening "I think for us," trimmed
  "The program offered a new skill — a skill that is not necessarily learned in school.",
  // Xiaonan Zhu, E9 — child's name → pronoun, run-on split
  "Very well designed curriculum, great communication. He had lots of fun resolving problems with friends.",
  // Jennifer Ing, E8 — verbatim apart from a leading "The"
  "The kids enjoyed the classes and were excited to share what they had learned.",
  // Chris Mangandi, G1 — consent is "yes WITH MY NAME"; anonymised only because Mike asked for
  // anonymous throughout. Trimmed 2026-09-01 (pre-launch QA, Critical #2): the original closed
  // "...and didn't mind the hour after school on a Friday." That was true of the 60-minute Season 1
  // pilot, but Season 2 runs 75 minutes, so on this page it read as a statement of class length.
  // The clause also combined [she] + Friday, which narrowed to one identifiable pilot child.
  "Despite it being at the end of a very busy weekly schedule, she seemed to have fun at every session.",
  // Emily Brandon, E8 — child's name → pronoun. This is a SECOND quote from the same family as the
  // toy-soldiers line above. Pulled at the 2026-09-01 pre-launch QA, then RESTORED the same day at
  // Mike's explicit direction after he was told why it had been pulled.
  //
  // Why it was pulled: it runs under the same "Founding Sparks parent" attribution as her other
  // quote, so eight cards read as eight independent families when they are seven — beside a heading
  // that says "All founding families answered." That is an FTC endorsement-guides consideration
  // (independence/number of endorsers), not just a style preference. Mike's call, made knowingly.
  //
  // If this ever needs to be made clean without dropping the quote, the fix is the attribution, not
  // the text — differentiate the two cards so they don't both read as "a parent." Don't merge them
  // into one card; stitching two survey answers together is its own problem.
  "He left each class enthusiastic to share what he learned, and we greatly value building this kind of skill in our kids.",
];

const SECTIONS = [
  {
    accent: "purple",
    kicker: "See What Others Miss",
    sessions: [
      {
        name: "Pattern Detection",
        skill: "Kids spot a pattern — then realize it's wrong. That moment, catching the mistake, is the real skill.",
        eureka: "What's hardest is letting go of patterns you believe in — when the data no longer supports them.",
      },
      {
        name: "Elimination",
        skill: "Kids solve a puzzle by ruling things out — the fastest path to the answer.",
        eureka: "When finding the answer is hard, ruling out what isn't correct is often faster.",
      },
    ],
  },
  {
    accent: "teal",
    kicker: "Understand the System",
    sessions: [
      {
        name: "Constraints",
        skill: "Kids face rules that seem limiting — until they realize the rules actually guide the solution.",
        eureka: "Constraints don't block the answer. They point to it.",
      },
      {
        name: "Hidden Rules",
        skill: "Hidden rules are where the advantage lives. Kids learn to find them.",
        eureka: "When something surprises you — you just learned something.",
      },
    ],
  },
  {
    accent: "ember",
    kicker: "Decide Without All the Facts",
    sessions: [
      {
        name: "Estimation",
        skill: "Kids estimate something without counting — using logic instead of exact numbers.",
        eureka: "You don't need the exact answer. You need one close enough to make a good decision.",
      },
    ],
  },
  {
    accent: "blue",
    kicker: "Think Beyond What You Control",
    sessions: [
      {
        name: "Strategy",
        skill: "Kids play strategy games where the best move depends on what someone else might do next.",
        eureka: "Reaction is fast and often wrong. Strategy is slow and usually wins.",
      },
      {
        name: "Game Theory",
        skill: "Strong reasoning means thinking several moves ahead — the best move depends on your opponent.",
        eureka: "The smart move connects your decision to your goal — through how others react.",
      },
    ],
  },
];


// Per-phase timings are INTERNAL instructor guidance and are never published (Mike, 2026-08-31).
// Public copy says "75-minute sessions" and may describe the phases qualitatively, but must not
// state how long any phase takes — a published breakdown removes the flexibility the format depends
// on and invites a parent to hold us to a clock. See SPARKWORKS_BRAND_REF.md.
const PHASES = [
  { name: "Ignite", body: "Warm-up. Wakes up the thinking." },
  { name: "Sharpen", body: "One concept, one real story, one moment it clicks." },
  { name: "Engage", body: "The game. Instructor circulates, asks, never solves." },
  { name: "Reinforce", body: "Reflect, connect, close." },
];

const OUTCOMES = [
  "Figuring things out without being told",
  "Breaking a big problem into smaller ones they can actually start on",
  "Working through problems step-by-step",
  "Noticing when something doesn't make sense",
  "Explaining how they got an answer",
  "Staying calm when they don't immediately know what to do",
  "Thinking a few steps ahead instead of reacting",
];

const FAQS = [
  {
    q: "What is it?",
    // TM-2026: original answer ended with "through games, not lectures."
    a: "An 8-session program that teaches kids to think through hard problems — through hands-on problem solving, not lectures.",
  },
  {
    q: "Who is it for?",
    a: "Kids in grades 2–6 across two tracks: Ember (grades 2–3) and Blaze (grades 4–6). Kids who like puzzles, ask 'why?', and get bored when problems are too easy.",
  },
  {
    q: "What will my kid actually do?",
    a: "Solve logic grids, crack pattern sequences, find hidden rules in systems, estimate quantities using real engineering methods, and present their reasoning in a capstone challenge.",
  },
  {
    q: "How is it different?",
    a: "We don't teach a subject. We teach a method — how to approach problems you've never seen before. That skill transfers everywhere.",
  },
  {
    q: "Is it tutoring?",
    a: "No — it's closer to training. We don't help with school subjects. We teach how to approach a problem you've never seen before. That skill transfers to everything.",
  },
  // PRICING SUPERSEDED 2026-08-28: $449 was announced for Season 2 but never charged. After the
  // Founding Sparks exit survey (E5 re-enrollment grid) and a competitive scan, Mike set Season 2 at
  // $319 + $25 early bird + 15% sibling. $449 is dead everywhere except the TRADEMARK_GUIDANCE A2
  // change log, which is history and stays. Do not reintroduce it here.
  {
    q: "What does it cost?",
    a: "Season 2 tuition is $319 per child for all 8 sessions — both tracks, same price. There's a $25 early-bird discount when your sign-up is in by September 13, and 15% off each additional child. No registration fee; tuition is all-in.",
  },
  {
    q: "When does the next season run?",
    a: "Season 2 starts the week of September 21, 2026 — eight weekly sessions of 75 minutes each, at our home studio in South Pasadena. Sign up below and tell us which times could work for your family; we set the schedule around the families who join.",
  },
];

// /program is the destination of every visit to the root (app/page.js redirects here), so it needs
// its own metadata rather than inheriting the site-wide defaults from layout.js.
export const metadata = {
  title: "Sparkworks — after-school critical thinking classes for grades 2–6",
  description:
    "An 8-session after-school program teaching kids in grades 2–6 to think through hard problems. Eight weekly 75-minute sessions in South Pasadena. Season 2 starts the week of September 21, 2026.",
};

export default function ProgramPage() {
  return (
    <>
      {/* SiteHeader dropped 2026-08-31 — the bar and its hairline rule were chrome competing with the
          page. The hero wordmark carries the brand and links home in its place. */}
      {/* TM-2026 (supersedes swap-log entry 5, whose "original" string is now stale):
          Mike rewrote this H1 on 2026-08-31 to "An 8-session program teaching kids critical thinking
          — through games, not lectures.", reintroducing the exact phrase entry 5 had already removed.
          He did not have the constraint in hand. RBG re-ruled 2026-09-01: the phrase may not ship in
          an H1 at all, per TRADEMARK_GUIDANCE §1 (a SPARKWORKS games company exists and we are
          applying for the educational-services mark). Swapped to the canonical §1 replacement.
          Pre-swap text, for the revert-on-grant path:
            "An 8-session program teaching kids critical thinking — through games, not lectures."

          2026-09-01, same day: Mike wanted the word "games" kept. RBG cleared this line under §2's
          context-allowed usage. FOUR properties do that work — preserve every one if it's reworded:
            · "class" is the head noun, so the sentence's own subject is a service, not a product;
            · "by playing games" makes games an activity kids DO in the class rather than a category
              of thing being sold — the verb is what "through" wasn't doing;
            · the parallel "not by sitting through lectures" frames the whole line as two modes of
              instruction, which is the class-provider framing the guidance asks for;
            · games is NEVER the only named method. A binary with games as the sole method reads as a
              game brand however it's phrased, and it would also contradict PHASES below, where the
              game is the Engage phase — one of four. The second method is load-bearing, not padding.
          §1 flags "phrases LIKE 'through games, not lectures'" — it is illustrative, not a blocklist.
          Don't clear a future rewrite by arguing it isn't the literal flagged string. */}
      <Hero
        tight
        homeLink
        wordmarkSize="xl"
        title="An 8-session class where kids build critical thinking by playing games and solving problems, not by sitting through lectures."
        tagline="Two grade-calibrated tracks: Ember (grades 2–3) and Blaze (grades 4–6). Each kept deliberately small, in 75-minute sessions."
      />

      <main className="sw-page sw-body">
        {/* Ribbon and the standout quote sit side by side. The quote is Tina Ling's — it used to be
            the featured first slide of the carousel and has been pulled out of REVIEWS so it isn't
            on the page twice. */}
        <section className="sw-section" style={{ marginTop: 0 }}>
          <div className="sw-grid-2-1">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 20,
                alignItems: "center",
                padding: "22px 24px",
                background: "var(--sw-bone)",
                borderRadius: "var(--sw-radius-md)",
                borderLeft: "4px solid var(--sw-ember)",
              }}
            >
              <TrackedLink
                className="sw-btn sw-btn-primary"
                href="/signup"
                style={{ whiteSpace: "nowrap" }}
                event="cta_click"
                eventProps={{ source: "program-hero", destination: "/signup" }}
              >
                Sign up for Season 2
              </TrackedLink>
              <div style={{ flex: "1 1 240px", minWidth: 0 }}>
                <div className="ts-label" style={{ color: "var(--sw-ember)", marginBottom: 4 }}>
                  Season 2 · Fall 2026
                </div>
                {/* "Founding Sparks filled before we listed it." was pulled at the 2026-09-01
                    pre-launch QA as an unsubstantiated scarcity claim beside the primary CTA, then
                    RESTORED the same day: Mike confirmed it is literally true — the pilot filled by
                    word of mouth before any public listing went up. Don't pull it again. */}
                <p className="ts-body" style={{ margin: 0 }}>
                  <strong>Founding Sparks filled before we listed it.</strong>{" "}
                  Season 2 starts the week of September 21 — eight weekly sessions of 75 minutes.
                  Tell us which times could work and we&rsquo;ll build the schedule around it.
                </p>
              </div>
            </div>

            <figure className="sw-quote sw-quote-lg">
              <blockquote className="sw-quote-text">
                The kids were so excited to go every week. When we had conflicts with other things,
                they hands-down wanted to do Sparkworks.
              </blockquote>
              <figcaption className="sw-quote-who">Founding Sparks parent</figcaption>
            </figure>
          </div>
        </section>

        {/* Lifted from the old homepage 2026-09-01 when /program became the main page. Full previous
            homepage is preserved at /home-archive.
            TM-2026 (analogous to swap-log entry 2b): closing clause was "— through games, not
            lectures." Swapped 2026-09-01 per RBG's re-ruling; see the Hero comment above.
            Deliberately kept GAMES-FREE now that the H1 carries the word: the guidance tests a page
            in aggregate, and an H1 and a lead paragraph both leaning games tips it. This close also
            avoids echoing the H1's "solving problems" three sentences apart. */}
        <section className="sw-section">
          <div className="ts-eyebrow">What we offer</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 16 }}>
            How kids build the skill AI can&rsquo;t replace.
          </h2>
          <p className="ts-lead">
            Critical thinking is the most important skill in the AI age. One skill per session: we
            introduce it, show someone who used it when it counted, then hand kids a problem that
            makes them use it too. We never just explain it.
          </p>
        </section>

        <section className="sw-section">
          <div className="ts-eyebrow">What kids learn</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 24 }}>
            Each session teaches one critical thinking skill — the kind that transfers everywhere.
          </h2>
          {/* Closes the 7-vs-8 gap: seven skills are shown below, and the eighth session is the
              capstone. Without this clause a parent who counts the grid finds one session missing. */}
          <p className="ts-lead" style={{ marginTop: -8, marginBottom: 24 }}>
            Seven skills across the first seven sessions. The eighth brings them together in a final
            challenge.
          </p>

          <div className="sw-grid-2" style={{ gap: 24 }}>
            {SECTIONS.map((s) => (
              <CurriculumSection key={s.kicker} {...s} />
            ))}
          </div>

        </section>

        {/* PAUSE > THINK > ACT archived 2026-08-31 (Mike) — it sat beside the four session phases
            and the two sequences read as one. Moved intact to /sparks-archive; data in
            app/data/loop.js. */}

        {/* Spark Challenge section removed 2026-08-31 (Mike). The capstone is now referenced only in
            the FAQ — the "What kids learn" lead no longer mentions it, so the grid shows 7 skills
            against a page that says 8 sessions. The lead below closes that gap in one clause; don't
            remove it without restoring the reference somewhere else. */}

        <section className="sw-section">
          <div className="ts-eyebrow">What every session looks like</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 24 }}>
            Four phases. Same order. Every week.
          </h2>
          {/* Card layout mirrors the "Two tracks" section below — same grid, same card, same blue
              top rule — so the page has one card language instead of a separate treatment per
              section. Ember triangles replace the ordinals; the heading still carries "same order". */}
          <div className="sw-grid-4">
            {PHASES.map((p) => (
              <div
                key={p.name}
                className="sw-card"
                style={{ borderTop: "4px solid var(--sw-blue)", padding: "22px 22px 24px" }}
              >
                <h3
                  className="ts-h2"
                  style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}
                >
                  <span className="sw-tri" aria-hidden="true" />
                  {p.name}
                </h3>
                <p className="ts-body" style={{ marginBottom: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sparks of History section archived 2026-08-31 (Mike) — each Spark is the Eureka moment of
            its session, and a parent reading the story beforehand can spoil it. Moved intact to
            /sparks-archive (noindex, unlinked). Data lives in app/data/sparks.js. */}

        <section className="sw-section">
          {/* Heading was "Grade-calibrated, never undifferentiated" — an internal brand rule, not
              something a parent needs. The two cards were the same sentence with one word changed;
              the shared half now sits above them. */}
          <div className="ts-eyebrow">Two tracks</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 24 }}>
            Two tracks, calibrated by grade.
          </h2>
          <div className="sw-grid-2">
            <div className="sw-card" style={{ borderTop: "4px solid var(--sw-blue)" }}>
              {/* Matches the curriculum cards exactly (see CurriculumSection): accent-coloured
                  ts-h2 for the name, ts-label beneath, ts-body last. The name was previously a
                  ts-eyebrow, which rendered it larger than every heading on the page. */}
              <h3 className="ts-h2" style={{ color: "var(--sw-blue)" }}>Ember Track</h3>
              <div className="ts-label" style={{ color: "var(--sw-blue)", marginTop: 6, marginBottom: 6 }}>Grades 2–3</div>
              <p className="ts-body">Calibrated to younger reasoners.</p>
            </div>
            <div className="sw-card" style={{ borderTop: "4px solid var(--sw-blue)" }}>
              <h3 className="ts-h2" style={{ color: "var(--sw-blue)" }}>Blaze Track</h3>
              <div className="ts-label" style={{ color: "var(--sw-blue)", marginTop: 6, marginBottom: 6 }}>Grades 4–6</div>
              <p className="ts-body">Calibrated to older reasoners.</p>
            </div>
          </div>
        </section>

        <section className="sw-section">
          {/* Eyebrow and heading said the same thing. The heading now carries the timeframe the
              eyebrow can't. */}
          <div className="ts-eyebrow">What your child walks away with</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 16 }}>
            After eight sessions, they&rsquo;ll be better at:
          </h2>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {OUTCOMES.map((o) => (
              <li key={o} className="ts-body" style={{ paddingLeft: 20, position: "relative" }}>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: 12,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--sw-teal)",
                }} />
                {o}
              </li>
            ))}
          </ul>
        </section>

        {/* Reviews — drawn from the Founding Sparks exit survey (10 of 10 families responded).
            NOT verbatim: see the per-quote notes on the REVIEWS array. Edits go beyond length and
            child names (a typo fix, a second-person→plural change, a run-on split, trimmed closers),
            which is why the on-page disclosure below says "for length and clarity."
            CONSENT IS PER FAMILY, from survey question G3. Christina Paraiso answered "No" and is
            NOT quoted. Two families gave permission to use their names (Chris Mangandi, Tina Ling);
            Mike asked for anonymous, so all are attributed "Founding Sparks parent."
            Child names removed and replaced with he/she — no child is identifiable.
            DO NOT add, swap or edit a quote without re-checking G3 in the survey DB. */}
        <section className="sw-section" id="reviews">
          <div className="ts-eyebrow">What families said</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 16 }}>
            {/* Two constraints on this line, both load-bearing:
                1. "some of" (RBG, 2026-09-01) — without it, "here's what they said" reads back to
                   "every founding family" and promises a census. Only 8 of the 10 are represented,
                   and the missing family with an on-record view is the lowest scorer, who declined
                   quote permission. Excluding her is correct; promising completeness is not.
                2. The 100% response rate is the strongest true fact in this section and is worth
                   more than generic warmth ("Hear what parents are saying" was the alternative
                   Mike floated) — a full-cohort response is unusual and signals nothing was
                   cherry-picked. Naming the exit survey also stops the third repetition of "said"
                   after the eyebrow above. */}
            Every founding family answered our exit survey. Here&rsquo;s some of what they told us.
          </h2>
          <p className="ts-lead" style={{ marginBottom: 24 }}>
            We asked our first cohort what actually landed — and what didn&rsquo;t. These are their
            words, lightly edited for length and clarity, and to remove children&rsquo;s names.
          </p>

          <QuoteCarousel quotes={REVIEWS} />
        </section>

        {/* Moved out of the curriculum section 2026-09-01 — it reads better as a step on the way out
            than as a footnote to the eight topics. */}
        <section className="sw-section">
          <p className="ts-body" style={{ marginBottom: 12 }}>
            Want to keep it going between sessions? We point families to the same materials we
            use, organized by the skill each one builds.
          </p>
          <TrackedLink
            className="sw-btn"
            href="/practice?source=program-games"
            event="games_cta_click"
            eventProps={{ source: "program-curriculum" }}
          >
            See the activities and games we recommend &rarr;
          </TrackedLink>
        </section>

        {/* Moved below the reviews 2026-08-31 — social proof reads better before objection-handling. */}
        <section className="sw-section">
          {/* One line, not two. This was the eyebrow "Questions parents ask" above an h2 "FAQs" —
              the same thing said twice, with the small label rendering larger than the heading it
              labelled. "FAQs" now IS the eyebrow, and carries the section's <h2> for the outline. */}
          <h2 className="ts-eyebrow" style={{ marginBottom: 16 }}>FAQs</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {FAQS.map((f) => (
              <div key={f.q}>
                <h3 className="ts-h2" style={{ fontSize: "1.125rem", marginBottom: 6 }}>{f.q}</h3>
                <p className="ts-body">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sw-section" id="interest">
          <div className="sw-card" style={{ borderTop: "4px solid var(--sw-ember)" }}>
            <div className="ts-eyebrow" style={{ color: "var(--sw-ember)" }}>Season 2 · Fall 2026</div>
            <h3 className="ts-h2" style={{ marginTop: 8, marginBottom: 8 }}>
              Sign up for Season 2
            </h3>
            <p className="ts-body" style={{ marginBottom: 16 }}>
              Eight weekly sessions of 75 minutes, starting the week of September 21, at our home
              studio in South Pasadena. $319 per child, with $25 off if your sign-up is in by
              September 13, and 15% off each additional child. Tell us which times could work for your family and
              we&rsquo;ll build the schedule around it. No payment today.
            </p>
            <TrackedLink
              className="sw-btn sw-btn-primary"
              href="/signup"
              event="cta_click"
              eventProps={{ source: "program-interest", destination: "/signup" }}
            >
              Sign up for Season 2
            </TrackedLink>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
