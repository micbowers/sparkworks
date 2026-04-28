import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ProductCard } from "./components/ProductCard";
import { Callout } from "./components/Callout";

export default function Home() {
  return (
    <>
      <Hero
        wordmarkSize="xl"
        title="Think through anything."
        tagline="Sparkworks teaches kids in grades 2–6 to think through hard problems — through games, not lectures."
      />

      <main className="sw-page sw-body">
        <section className="sw-section">
          <div className="ts-eyebrow">What we make</div>
          <h2 className="ts-h1" style={{ marginTop: 8, marginBottom: 16, maxWidth: 720 }}>
            Three ways kids build the skill AI can&rsquo;t replace.
          </h2>
          <p className="ts-lead" style={{ maxWidth: 720, marginBottom: 32 }}>
            Critical thinking is the most important skill in the AI age. Sparkworks builds it three ways
            — an in-person program, games kids actually want to play, and materials they can work through
            on their own.
          </p>

          <div className="sw-grid-3">
            <ProductCard
              accent="purple"
              kicker="The Program"
              title="Sparkworks · 8-session class"
              body="A small-group, in-person program. Two grade-calibrated tracks: Ember (grades 2–3) and Blaze (grades 4–6). Each session teaches one thinking skill through one game — pattern detection, elimination, constraint navigation, estimation, strategy."
              cta={{ label: "See the program", href: "/program", primary: true }}
            />
            <ProductCard
              accent="teal"
              kicker="The Games"
              title="Find The Alien — and more on the way"
              body="Find The Alien is live — a deduction game that teaches elimination reasoning, free to play. We're building more games and curating the ones we love. New launches go to subscribers first."
              cta={{ label: "Play Find The Alien", href: "https://findthealien.sparkworks.kids", external: true }}
              secondary={{ label: "Notify me about new games", href: "/program?source=games#interest" }}
            />
            <ProductCard
              accent="blue"
              kicker="The Materials"
              title="Workbooks · Coming soon"
              body="Hands-on workbooks built around the same thinking skills the program teaches. Designed for kids to work through with a parent on weekends, or solo. In development now — leave your email and we&rsquo;ll let you know when the first one ships."
              cta={{ label: "Notify me", href: "/program#interest" }}
            />
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
