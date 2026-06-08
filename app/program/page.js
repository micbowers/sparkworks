import Link from "next/link";
import { Hero } from "../components/Hero";
import { SiteHeader } from "../components/SiteHeader";
import { Footer } from "../components/Footer";
import { CurriculumSection } from "../components/CurriculumSection";
import { Callout } from "../components/Callout";
import { InterestForm } from "../components/InterestForm";
import { SparkOfHistory } from "../components/SparkOfHistory";
import { TrackedLink } from "../components/TrackedLink";

const SECTIONS = [
  {
    accent: "purple",
    kicker: "See What Others Miss",
    title: "Pattern Detection · Elimination",
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
    title: "Constraints · Hidden Rules",
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
    title: "Estimation",
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
    title: "Strategy · Game Theory",
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

const SPARKS = [
  {
    name: "Ignaz Semmelweis",
    sessionLabel: "Pattern Detection",
    skill: "Spotting the pattern others missed.",
    blurb:
      "In the 1840s, doctors believed disease came from “bad air.” In Vienna, Dr. Ignaz Semmelweis noticed five times more mothers died in the doctors’ ward than the midwives’ ward. The difference? Doctors did autopsies, then delivered babies without washing their hands. Semmelweis made them wash. Deaths dropped overnight. He was fired — and it took 20 years for the world to accept he was right.",
    image: "/sparks/semmelweis.jpg",
    accent: "purple",
  },
  {
    name: "Dr. John Snow",
    sessionLabel: "Elimination",
    skill: "Ruling out every alternative until one remained.",
    blurb:
      "London, 1854. A cholera outbreak killed hundreds in ten days, and everyone blamed “bad air.” Dr. John Snow didn’t. He mapped every death and ruled out bad air, contaminated food, and person-to-person contact. One thing was left: the water pump on Broad Street. He removed the handle and the outbreak ended. Snow didn’t find the answer — he eliminated everything that wasn’t.",
    image: "/sparks/snow.jpg",
    accent: "purple",
  },
  {
    name: "Apollo 13",
    sessionLabel: "Constraints",
    skill: "Finding the advantage inside the limits.",
    blurb:
      "Three astronauts. An exploded oxygen tank. Square CO₂ filters that wouldn’t fit round sockets. Engineers had to save the crew using only what was already on the spacecraft — duct tape, a sock, cardboard, and a hose. The constraint didn’t block the rescue. It pointed to it.",
    image: "/sparks/apollo13.jpg",
    accent: "teal",
  },
  {
    name: "Alexander Fleming",
    sessionLabel: "Hidden Rules",
    skill: "Refusing to dismiss a surprise.",
    blurb:
      "London, 1928. Antibiotics didn’t exist. Alexander Fleming came back from vacation to find his bacteria dishes contaminated with mold, and was about to throw them out — then noticed something strange on one dish. Instead of ignoring it, he stopped and asked why. That single moment of not dismissing a surprise became penicillin: the first antibiotic, and an estimated 200 million lives saved.",
    image: "/sparks/fleming.jpg",
    accent: "teal",
  },
  {
    name: "Enrico Fermi",
    sessionLabel: "Estimation",
    skill: "Making a smart estimate with almost no data.",
    blurb:
      "July 16, 1945. Fermi stood in a bunker ten miles from the world’s first atomic bomb. When the shockwave hit, he dropped scraps of paper from his hand, watched them blow sideways, paced off the distance, and wrote down a number: 10 kilotons. The precision instruments took three days to deliver their answer: 18 kilotons. Fermi was off by less than half — in seconds, with nothing but paper.",
    image: "/sparks/fermi.jpg",
    accent: "ember",
  },
  {
    name: "Amundsen vs. Scott",
    sessionLabel: "Strategy",
    skill: "Planning before the game even starts.",
    blurb:
      "Two expeditions raced to be first to the South Pole. Scott — a Royal Navy captain with fame, money, and experience — was the favorite. Amundsen was the Norwegian underdog. Amundsen reached the Pole on December 14, 1911, 34 days ahead, and all his men walked home healthy. Scott arrived to find Amundsen’s flag waiting, and died with his party on the return — eleven miles from a food depot. The race was decided a year earlier, by preparation.",
    image: "/sparks/amundsen.jpg",
    accent: "blue",
  },
  {
    name: "Winston Churchill",
    sessionLabel: "Game Theory",
    skill: "The smart move depends on how others react.",
    blurb:
      "June 1940. France has fallen, and its navy — the fourth largest in the world — could fall into Hitler’s hands. Churchill doesn’t trust the promise that it won’t. On July 3, the Royal Navy fires on its former ally’s fleet at Mers-el-Kébir. The world is horrified — but in Washington, Roosevelt updates his read: Britain will do whatever it takes to win. A year later, Lend-Lease begins.",
    image: "/sparks/churchill.jpg",
    accent: "blue",
  },
];

const PHASES = [
  { name: "Ignite", time: "8–10 min", body: "High-energy warm-up. Activates before concept." },
  { name: "Sharpen", time: "8–10 min", body: "One concept introduced. A Spark of History — a real person who used the same principle. The AHA moment." },
  { name: "Engage", time: "30–40 min", body: "The game. Kids work the problem. Instructor circulates and questions, doesn't solve." },
  { name: "Reinforce", time: "5–10 min", body: "Reflect, connect to the real world. Closes with the closing question." },
];

// The program-wide thinking loop. Verbatim from SPARKWORKS_PROGRAM_AND_MESSAGING.md §3
// and the S7 designer brief's PAUSE > THINK > ACT band.
const LOOP = [
  { step: "Pause", question: "What’s going on?", phrase: "Stop and take a breath." },
  { step: "Think", question: "Why? Am I sure? What are my options?", phrase: "What’s the bigger goal?" },
  { step: "Act", question: "What am I going to do about it?", phrase: "Make the move that gets you there." },
];

const OUTCOMES = [
  "Figuring things out without being told",
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
    a: "Solve logic grids, crack pattern sequences, find hidden rules in systems, estimate quantities using real engineering methods, catch AI mistakes, and present their reasoning in a capstone challenge.",
  },
  {
    q: "How is it different?",
    a: "We don't teach a subject. We teach a method — how to approach problems you've never seen before. That skill transfers everywhere.",
  },
  {
    q: "Is it tutoring?",
    a: "No — it's closer to training. We don't help with school subjects. We teach how to approach a problem you've never seen before. That skill transfers to everything.",
  },
  {
    q: "What does it cost?",
    a: "Season 2 — Fall 2026 is $449 for all 8 sessions (both tracks, same price), starting the week of September 7. No payment required to hold a seat — slots are offered in order of registration, and we'll be in touch with payment details once Season 2 is locked.",
  },
];

export default function ProgramPage() {
  return (
    <>
      <SiteHeader />
      {/* TM-2026: Hero title was "An 8-session program that teaches kids to think through hard problems — through games, not lectures." */}
      <Hero
        wordmarkSize="xl"
        eyebrow="The Program · Season 2"
        title="An 8-session program that teaches kids to think through hard problems — through hands-on problem solving, not lectures."
        tagline="Two grade-calibrated tracks: Ember (grades 2–3) and Blaze (grades 4–6). Each kept deliberately small, with a dedicated instructor and 60-minute sessions."
      />

      <main className="sw-page sw-body">
        <section className="sw-section" style={{ marginTop: 0 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 24px",
              background: "var(--sw-bone)",
              borderRadius: "var(--sw-radius-md)",
              borderLeft: "4px solid var(--sw-ember)",
            }}
          >
            <div>
              <div className="ts-label" style={{ color: "var(--sw-ember)", fontSize: "0.75rem", marginBottom: 4 }}>
                Season 2 · Fall 2026
              </div>
              <p className="ts-body" style={{ margin: 0 }}>
                <strong>Founding Sparks filled before we listed it. Season 2 is filling now.</strong>{" "}
                $449 for all 8 sessions · No payment required to hold a seat.
              </p>
            </div>
            <TrackedLink
              className="sw-btn sw-btn-primary"
              href="#interest"
              style={{ whiteSpace: "nowrap" }}
              event="cta_click"
              eventProps={{ source: "program-hero", destination: "#interest" }}
            >
              Save my seat
            </TrackedLink>
          </div>
        </section>

        <section className="sw-section">
          <div className="ts-eyebrow">What kids learn</div>
          <h2 className="ts-h1" style={{ marginTop: 8, marginBottom: 16, maxWidth: 760 }}>
            Each session teaches one real thinking skill — the kind that transfers everywhere.
          </h2>
          <p className="ts-lead" style={{ maxWidth: 760, marginBottom: 24 }}>
            Pattern detection, elimination, constraint navigation, estimation under uncertainty, and
            strategy — grouped into four ways of thinking. It all comes together in the Spark
            Challenge, the final session.
          </p>

          <div className="sw-grid-2" style={{ gap: 24 }}>
            {SECTIONS.map((s) => (
              <CurriculumSection key={s.kicker} {...s} />
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <p className="ts-body" style={{ maxWidth: 760, marginBottom: 12 }}>
              These skills are built through hands-on games and activities. Want to keep them going
              between sessions? We point families to the same games and materials we use &mdash;
              organized by the skill each one builds.
            </p>
            <TrackedLink
              className="sw-btn"
              href="/practice?source=program-games"
              event="games_cta_click"
              eventProps={{ source: "program-curriculum" }}
            >
              See the games we recommend &rarr;
            </TrackedLink>
          </div>
        </section>

        <section className="sw-section">
          <div className="ts-eyebrow">How kids learn to think</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 12 }}>
            Pause <span style={{ color: "var(--sw-spark)" }}>→</span> Think{" "}
            <span style={{ color: "var(--sw-spark)" }}>→</span> Act
          </h2>
          <p className="ts-lead" style={{ maxWidth: 760, marginBottom: 24 }}>
            Every skill we teach runs on the same loop. It&rsquo;s the through-line that turns the
            sessions into one program rather than a pile of unrelated lessons — and the habit kids
            carry into any problem they&rsquo;ve never seen before.
          </p>
          <div className="sw-grid-3">
            {LOOP.map((l) => (
              <div key={l.step} className="sw-card" style={{ borderTop: "4px solid var(--sw-spark)", display: "flex", flexDirection: "column", gap: 8 }}>
                <div className="ts-label" style={{ color: "var(--sw-spark)", fontSize: "1rem" }}>{l.step}</div>
                <p className="ts-body" style={{ marginBottom: 0, fontWeight: 700 }}>{l.question}</p>
                <p className="ts-caption" style={{ marginBottom: 0, color: "var(--sw-steel)" }}>{l.phrase}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sw-section">
          <div className="ts-eyebrow" style={{ color: "var(--sw-red)" }}>The finale · Spark Challenge</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 16, maxWidth: 760 }}>
            The last session pulls everything together.
          </h2>
          <p className="ts-lead" style={{ maxWidth: 760, marginBottom: 20 }}>
            There&rsquo;s no new lesson and no new game. Instead, kids run a seven-station Spark
            Trail — part scavenger hunt, part escape room. Each station calls back one skill from the
            program: spot a pattern, rule things out, work within a constraint, uncover a hidden rule,
            estimate, plan a strategy, and read an opponent.
          </p>
          <Callout accent="red" label="Seven sessions. One thinker.">
            <p className="ts-body" style={{ marginBottom: 0 }}>
              When it counts, every skill shows up at once — and the only way through is to use them
              together. The Spark Challenge is the first time kids see the loop named on the board:{" "}
              <strong>Pause → Think → Act</strong>.
            </p>
          </Callout>
        </section>

        <section className="sw-section">
          <div className="ts-eyebrow">What every session looks like</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 16 }}>
            Four phases. 60 minutes. Same every time.
          </h2>
          <div className="sw-grid-2">
            {PHASES.map((p) => (
              <div key={p.name} className="sw-card" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div className="ts-label" style={{ color: "var(--sw-steel)" }}>{p.name}</div>
                <div className="ts-caption">{p.time}</div>
                <p className="ts-body">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sw-section">
          <div className="ts-eyebrow">Sparks of History · stories of the great thinkers</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 12 }}>
            A real person who used the same thinking principle to change something that mattered.
          </h2>
          <p className="ts-body" style={{ maxWidth: 720, marginBottom: 24 }}>
            A Spark of History is a small but pivotal moment in each session — just a few minutes
            during the Sharpen phase. It&rsquo;s where the skill kids are about to practice gets tied
            to a real person who used it to change something that mattered. We don&rsquo;t just teach
            careful thinking — we show its real-world impact, made concrete. We make a poster for
            each Spark; they hang in the classroom, and you can grab them below.
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

        <section className="sw-section">
          <div className="ts-eyebrow">Two tracks</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 16 }}>
            Grade-calibrated, never undifferentiated.
          </h2>
          <div className="sw-grid-2">
            <div className="sw-card" style={{ borderTop: "4px solid var(--sw-blue)" }}>
              <div className="ts-eyebrow" style={{ color: "var(--sw-blue)" }}>Ember Track</div>
              <h3 className="ts-h2" style={{ marginTop: 6, marginBottom: 10 }}>Grades 2–3</h3>
              <p className="ts-body">Kept deliberately small · dedicated instructor · same 8-session arc, calibrated to younger reasoners.</p>
            </div>
            <div className="sw-card" style={{ borderTop: "4px solid var(--sw-blue)" }}>
              <div className="ts-eyebrow" style={{ color: "var(--sw-blue)" }}>Blaze Track</div>
              <h3 className="ts-h2" style={{ marginTop: 6, marginBottom: 10 }}>Grades 4–6</h3>
              <p className="ts-body">Kept deliberately small · dedicated instructor · same 8-session arc, calibrated to older reasoners.</p>
            </div>
          </div>
        </section>

        <section className="sw-section">
          <div className="ts-eyebrow">What your child walks away with</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 16 }}>
            After 8 sessions, your child will be better at:
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

        <section className="sw-section">
          <div className="ts-eyebrow">Questions parents ask</div>
          <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 16 }}>FAQ</h2>
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
          <InterestForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
