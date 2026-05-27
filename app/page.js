import Link from "next/link";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ProductCard } from "./components/ProductCard";
import { Callout } from "./components/Callout";
import { SubscribeForm } from "./components/SubscribeForm";

export default function Home() {
  return (
    <>
      {/* TM-2026: tagline was "Sparkworks teaches kids in grades 2–6 to think through hard problems — through games, not lectures." */}
      <Hero
        wordmarkSize="xl"
        title="Think through anything."
        tagline="Sparkworks teaches kids in grades 2–6 to think through hard problems — through hands-on problem solving, not lectures."
      />

      <div
        style={{
          background: "var(--sw-bone)",
          borderBottom: "1px solid #e3dfd5",
        }}
      >
        <div
          className="sw-page"
          style={{
            padding: "20px 40px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
          }}
        >
          <div>
            <div className="ts-label" style={{ color: "var(--sw-ember)", fontSize: "0.75rem", marginBottom: 4 }}>
              Season 2 · Fall 2026
            </div>
            <p className="ts-body" style={{ margin: 0 }}>
              <strong>Founding Sparks filled before we listed it. Season 2 is filling now.</strong>{" "}
              Sessions start the week of September 7 · No payment required to hold a seat.
            </p>
          </div>
          {/* Ember demotion 2026-05-27: ribbon CTA was sw-btn-primary; the Program card primary CTA below carries the same href, and Designer flagged 3-Ember-CTAs in the upper fold as over the rationing budget. Ribbon now serves as supporting context (kicker + body + outlined button), Program card carries the filled-Ember enrollment action. */}
          <Link className="sw-btn" href="/program?source=home-hero#interest" style={{ whiteSpace: "nowrap" }}>
            Save my seat
          </Link>
        </div>
      </div>

      <main className="sw-page sw-body">
        <section className="sw-section">
          {/* TM-2026: eyebrow was "What we make" */}
          <div className="ts-eyebrow">What we offer</div>
          {/* TM-2026 entry 12: H2 was "Three ways kids build the skill AI can't replace." — reframed because Games and Materials merged into one category. */}
          <h2 className="ts-h1" style={{ marginTop: 8, marginBottom: 16, maxWidth: 720 }}>
            How kids build the skill AI can&rsquo;t replace.
          </h2>
          {/* TM-2026: lead paragraph reframed. Originals (in sequence):
              v1 (pre-TM): "Critical thinking is the most important skill in the AI age. Sparkworks builds it three ways — an in-person program, games kids actually want to play, and materials they can work through on their own."
              v2 (entry 2b TM swap): "Critical thinking is the most important skill in the AI age. Sparkworks builds it three ways: an in-person class for grades 2–6, hands-on activities and games for practice between sessions, and class materials that reinforce what kids learn."
              v3 (entry 12 merge): activity+materials consolidated into a single category. */}
          <p className="ts-lead" style={{ maxWidth: 720, marginBottom: 32 }}>
            Critical thinking is the most important skill in the AI age. Sparkworks builds it through
            our in-person class for grades 2–6 — plus the same activities, games, and class
            materials we use, organized by skill so families can practice between sessions.
          </p>

          <div className="sw-grid-3">
            {/* TM-2026: Program card body reframed. Original: "The flagship. Two grade-calibrated tracks — Ember (grades 2–3) and Blaze (grades 4–6), 6 students each. Eight sessions, eight thinking skills, taught through real games and Sparks of History — historical figures who used the same principles to change something that mattered. Founding Sparks filled before we listed it. Season 2 is filling now." */}
            <ProductCard
              accent="purple"
              kicker="The Program"
              title="Sparkworks · 8-session class"
              body="The flagship. Two grade-calibrated tracks — Ember (grades 2–3) and Blaze (grades 4–6), 6 students each. Eight sessions, eight thinking skills, taught through hands-on activities and real-world examples of how great critical thinkers used these same skills to solve some of history's most important challenges. Founding Sparks filled before we listed it. Season 2 is filling now."
              cta={{ label: "Save my seat — Season 2", href: "/program?source=home-program#interest", primary: true }}
              secondary={{ label: "See the curriculum", href: "/program" }}
            />
            {/* TM-2026 entry 12: Games + Materials cards consolidated into this single merged Practice card.
                 - Prior Games card kicker (entry 4a): "The Games"
                 - Prior Games card body (entry 4b): "Critical thinking grows with practice. We point parents toward the same activities and games we use in class — chosen because they hold up across grades and across generations."
                 - Prior Materials card title (entry 8): "Class materials · Coming soon"
                 - Prior Materials card body (entry 9): "Class materials built around the thinking skills our program teaches — patterns, elimination, constraints, estimation, strategy. These are the same guided-practice materials we use in our classes, usually during the Ignite phase. We're making them available so families can keep building the skills at home."
                 The Materials card's `home-materials-card` SubscribeForm moves into the per-Practice-Book inline form on /practice. */}
            <ProductCard
              accent="teal"
              kicker="Practice at home"
              title="The way kids build the skills"
              body="Critical thinking grows with practice. We point parents toward the same activities, games, and class materials we use in class — organized by the skills they build."
              cta={{ href: "/practice", label: "See our picks", primary: true }}
              secondary={{ label: "Why these picks", href: "/practice" }}
            />
            {/* TM-2026 entry 12: previously standalone "Stay in the loop" section at #launches; promoted into card-grid slot 3 to balance the row and bring email capture above the fold. Slot 3 uses Section Blue accent (not Teal) to differentiate from the adjacent merged Practice card per Designer flag #7. */}
            <ProductCard
              accent="blue"
              kicker="Stay in touch"
              title="Hear about new picks."
              body="We add to /practice as we test new games and approve new practice books. Drop your email and we&rsquo;ll let you know when something new lands."
            >
              <SubscribeForm
                interests={["Games", "Materials"]}
                source="home-launches"
                ctaLabel="Notify me"
                successMessage="On the list — we&rsquo;ll let you know when something new ships."
              />
            </ProductCard>
          </div>
        </section>

        <section className="sw-section">
          <Callout accent="ember" label="Why this, why now">
            <p className="ts-quote">
              In the age of AI, it&rsquo;s become crucial to build a strong foundation of critical
              thinking. We don&rsquo;t teach AI fluency — we teach how to discern, verify, and push
              back. We teach kids what they&rsquo;ll need to use these powerful tools, not be replaced
              by them.
            </p>
          </Callout>
        </section>

        <section className="sw-section">
          <div className="ts-eyebrow">For parents who notice</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 12 }}>
            If you know a kid who loves puzzles, asks &ldquo;but why?&rdquo;, or gets bored when problems are too easy —
            Sparkworks is for them.
          </h2>
          <p className="ts-body" style={{ maxWidth: 720 }}>
            We don&rsquo;t teach a subject. We teach a method — how to approach a problem you&rsquo;ve never
            seen before. That skill transfers to school, work, and every domain.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
