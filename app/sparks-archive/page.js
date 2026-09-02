// ARCHIVE — not part of the public site.
//
// The Sparks of History section used to live on /program. Mike pulled it 2026-08-31: each Spark is
// the Eureka moment of its session, and a parent who reads the story beforehand can spoil it for
// their kid. Parked here so it can go back to /program later without being rebuilt.
//
// THIS PAGE IS DELIBERATELY UNLINKED. Nothing on the site points at it. `robots: noindex, nofollow`
// below keeps it out of search results.
//
// It is NOT private. Anyone with the URL can open it, and the poster images and PDFs under
// /public/sparks/ are directly reachable by their own URLs whether or not this page exists. If it
// ever needs to be genuinely closed off, that's auth or moving the assets — not this file.
//
// TO RESTORE TO /program: import { SPARKS } from "../data/sparks" and drop the <section> below back
// into app/program/page.js, above the "Two tracks" section where it used to sit.

import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { SparkOfHistory } from "../components/SparkOfHistory";
import { SPARKS } from "../data/sparks";
import { LOOP } from "../data/loop";

export const metadata = {
  title: "Program content — archive",
  robots: { index: false, follow: false },
};

export default function SparksArchivePage() {
  return (
    <>
      <Hero
        tight
        homeLink
        wordmarkSize="xl"
        eyebrow="Internal archive · not linked from the site"
        eyebrowSize="1.1875rem"
        tagline="Sparks of History — parked here while the stories stay off the public program page, so they aren't spoiled before a session runs."
      />

      <main className="sw-page sw-body">
        <section className="sw-section" style={{ marginTop: 0 }}>
          <div className="ts-eyebrow">Sparks of History · stories of the great thinkers</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 12 }}>
            A real person who used the same thinking principle to change something that mattered.
          </h2>
          <p className="ts-body" style={{ maxWidth: 720, marginBottom: 24 }}>
            A few minutes in each session, tied to the skill kids are about to practice. We make a
            poster for each one — they hang in the classroom, and you can grab them below.
          </p>
          <div className="sw-grid-2">
            {SPARKS.map((s) => (
              <SparkOfHistory key={s.name} {...s} />
            ))}
          </div>
          <p className="ts-caption" style={{ marginTop: 18, fontStyle: "italic" }}>
            More on the way as we run more sessions.
          </p>
        </section>

        {/* PAUSE > THINK > ACT — archived from /program 2026-08-31. It sat directly beside the four
            session phases, and the two sequences read as one: a parent couldn't tell the thinking
            method from the lesson structure. Good content, wrong neighbour.
            TO RESTORE: import { LOOP } from "../data/loop" and drop this <section> back in.
            Add "sw-loop--chevron" to the .sw-loop className for the blue chevron treatment. */}
        <section className="sw-section">
          <div className="ts-eyebrow">How kids learn to think</div>
          <p className="ts-lead" style={{ marginTop: 8, marginBottom: 24 }}>
            Every skill we teach runs on the same loop — and it&rsquo;s the habit kids carry into any
            problem they&rsquo;ve never seen before.
          </p>
          <div className="sw-loop">
            {LOOP.map((l, i) => (
              <div key={l.step} className="sw-loop-step">
                <div className="sw-loop-track" aria-hidden="true">
                  <span className="sw-loop-node" />
                  {i < LOOP.length - 1 && <span className="sw-loop-line" />}
                </div>
                <div className="sw-loop-name">{l.step}</div>
                <p className="sw-loop-q">{l.question}</p>
                <p className="sw-loop-p">{l.phrase}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
