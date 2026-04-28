import Link from "next/link";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ProductCard } from "./components/ProductCard";
import { Callout } from "./components/Callout";
import { SubscribeForm } from "./components/SubscribeForm";

export default function Home() {
  return (
    <>
      <Hero
        wordmarkSize="xl"
        title="Think through anything."
        tagline="Sparkworks teaches kids in grades 2–6 to think through hard problems — through games, not lectures."
      >
        <div style={{ marginTop: 28 }}>
          <p className="text-on-dark" style={{ fontFamily: "var(--sw-body)", fontSize: "0.9375rem", marginBottom: 14, maxWidth: 640 }}>
            Founding Sparks filled before we listed it. Season 2 starts the week of September 7.
          </p>
          <Link className="sw-btn sw-btn-primary" href="/program?source=home-hero#interest">
            Save my seat — $449 / 8 sessions
          </Link>
        </div>
      </Hero>

      <main className="sw-page sw-body">
        <section className="sw-section" aria-labelledby="proof-heading">
          <div className="ts-eyebrow" id="proof-heading">From pilot parents</div>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 14, maxWidth: 760 }}>
            <p className="ts-quote">
              &ldquo;I don&rsquo;t know what you&rsquo;re doing — but keep it up. The kids love it.&rdquo;
            </p>
            <p className="ts-body">
              One parent&rsquo;s son got mad at her for running late to class. Another student told a classmate at school it was his favorite Friday activity, right alongside football.
            </p>
            <p className="ts-quote">
              &ldquo;Feels like the kind of thing missing from school, sadly.&rdquo;
            </p>
            <p className="ts-body" style={{ marginTop: 4 }}>
              Founding Sparks filled before we listed it publicly. Season 2 is filling now —{" "}
              <Link href="/program?source=home-proof#interest" style={{ color: "var(--sw-ember)", fontWeight: 700 }}>
                save my seat →
              </Link>
            </p>
          </div>
        </section>

        <section className="sw-section">
          <div className="ts-eyebrow">What we make</div>
          <h2 className="ts-h1" style={{ marginTop: 8, marginBottom: 16, maxWidth: 720 }}>
            Three ways kids build the skill AI can&rsquo;t replace.
          </h2>
          <p className="ts-lead" style={{ maxWidth: 720, marginBottom: 32 }}>
            Critical thinking is the most important skill in the AI age. Sparkworks builds it three ways
            — an in-person program, games kids actually want to play, and materials they can work
            through on their own.
          </p>

          <div className="sw-grid-3">
            <ProductCard
              accent="purple"
              kicker="The Program"
              title="Sparkworks · 8-session class"
              body="The flagship. Two grade-calibrated tracks — Ember (grades 2–3) and Blaze (grades 4–6), 6 students each. Eight sessions, eight thinking skills, taught through real games and real-world case studies. Founding Sparks filled before we listed it. Season 2 is filling now."
              cta={{ label: "Save my seat — Season 2", href: "/program?source=home-program#interest", primary: true }}
              secondary={{ label: "See the curriculum", href: "/program" }}
            />
            <ProductCard
              accent="teal"
              kicker="The Games"
              title="The games we love"
              body="We believe the best way to teach a thinking skill is to put kids inside a game where they need it. The games here are the same ones we use in our program — a mix of games we build (like Find The Alien) and games we recommend from designers we trust. A small marketplace is coming."
              cta={{ label: "Play Find The Alien", href: "https://findthealien.sparkworks.kids", external: true }}
            />
            <ProductCard
              accent="blue"
              kicker="The Materials"
              title="Workbooks · Coming soon"
              body="Hands-on workbooks built around the thinking skills the program teaches — patterns, elimination, constraints, estimation, strategy. These are the same materials we use in our classes, usually for the Ignite phase. Designed for kids to work through with a parent on weekends, or solo. The first set is in development."
            />
          </div>
        </section>

        <section className="sw-section" id="launches">
          <div
            className="sw-card"
            style={{
              borderTop: "4px solid var(--sw-teal)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              maxWidth: 760,
            }}
          >
            <div className="ts-eyebrow" style={{ color: "var(--sw-teal)" }}>Stay in the loop</div>
            <h2 className="ts-h2">Hear about new launches.</h2>
            <p className="ts-body">
              We&rsquo;re shipping new games and workbooks throughout the year. Drop your email and
              we&rsquo;ll let you know when something new is ready to play or work through.
            </p>
            <div style={{ marginTop: 6 }}>
              <SubscribeForm
                interests={["Games", "Materials"]}
                source="home-launches"
                ctaLabel="Notify me"
                successMessage="On the list — we&rsquo;ll let you know when something new ships."
              />
            </div>
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
