import Link from "next/link";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { CurriculumSection } from "../components/CurriculumSection";
import { InterestForm } from "../components/InterestForm";
import { SparkOfHistory } from "../components/SparkOfHistory";

const SECTIONS = [
  {
    accent: "purple",
    kicker: "Section 1 · See What Others Miss",
    title: "Pattern Detection · Elimination",
    badges: ["Archimedes Badge", "Euclid Badge"],
    sessions: [
      {
        num: 1,
        name: "Pattern Detection",
        game: "Knight's Tour (5×5 grid)",
        skill: "In Session 1, kids spot a pattern — then realize it's wrong. That moment, catching the mistake, is the real skill.",
      },
      {
        num: 2,
        name: "Elimination",
        game: "Logic Grid + Reverse Deduction",
        skill: "In Session 2, kids solve a puzzle by ruling things out — the fastest path to the answer.",
      },
    ],
  },
  {
    accent: "teal",
    kicker: "Section 2 · Understand the System",
    title: "Constraints · Hidden Rules",
    badges: ["Snow Badge", "Lovelace Badge"],
    sessions: [
      {
        num: 3,
        name: "Constraints",
        game: "River Crossing + Boat Formula",
        skill: "In Session 3, kids face rules that seem limiting — until they realize the rules actually guide the solution.",
      },
      {
        num: 4,
        name: "Hidden Rules",
        game: "Rule Hunter + Mastermind",
        skill: "Hidden rules are where the advantage lives. Kids learn to find them.",
      },
    ],
  },
  {
    accent: "ember",
    kicker: "Section 3 · Decide Without All the Facts",
    title: "Estimation · Order of Operations",
    badges: ["Fermi Badge", "Al-Khwarizmi Badge"],
    sessions: [
      {
        num: 5,
        name: "Estimation",
        game: "Fermi Estimation Stations",
        skill: "In Session 5, kids estimate something without counting — using logic instead of exact numbers.",
      },
      {
        num: 6,
        name: "Order of Operations",
        game: "Poker Card Formula + Spot the AI Mistake",
        skill: "In Session 6, kids catch a mistake made by AI — and understand why it looked right at first.",
      },
    ],
  },
  {
    accent: "blue",
    kicker: "Section 4 · Think Beyond What You Control",
    title: "Strategy · Game Theory",
    badges: ["Sun Tzu Badge", "Turing Badge"],
    sessions: [
      {
        num: 7,
        name: "Strategy",
        game: "Connect Four Tournament",
        skill: "In Sessions 7 and 8, kids play strategy games where the best move depends on what someone else might do next.",
      },
      {
        num: 8,
        name: "Game Theory · The Spark Challenge",
        game: "Connect Four + Game Theory Problems",
        skill: "Strong reasoning means thinking several moves ahead — and understanding the best move depends on your opponent.",
      },
    ],
  },
];

const SPARKS = [
  {
    name: "Ignaz Semmelweis",
    sessionLabel: "Session 1 · Pattern Detection",
    skill: "Spotting the pattern others missed.",
    blurb:
      "Vienna, 1840s. By comparing two maternity clinics, Semmelweis spotted the pattern that explained why so many mothers were dying — and invented handwashing. The medical establishment ignored him for decades.",
    image: "/sparks/semmelweis.png",
    pdf: "/sparks/semmelweis.pdf",
    accent: "purple",
  },
  {
    name: "Dr. John Snow",
    sessionLabel: "Session 2 · Elimination",
    skill: "Ruling out every alternative until one remained.",
    blurb:
      "London, 1854. Snow mapped every cholera death and eliminated every other water source until one pump on Broad Street remained. Removing its handle ended the outbreak — and founded modern epidemiology.",
    image: "/sparks/snow.png",
    pdf: "/sparks/snow.pdf",
    accent: "purple",
  },
];

const PHASES = [
  { name: "Ignite", time: "8–10 min", body: "High-energy warm-up. Activates before concept." },
  { name: "Sharpen", time: "8–10 min", body: "One concept introduced. A Spark of History — a real person who used the same principle. The AHA moment." },
  { name: "Engage", time: "30–40 min", body: "The game. Kids work the problem. Instructor circulates and questions, doesn't solve." },
  { name: "Reinforce", time: "5–10 min", body: "Reflect, connect to the real world. Closes with the closing question." },
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
      {/* TM-2026: Hero title was "An 8-session program that teaches kids to think through hard problems — through games, not lectures." */}
      <Hero
        wordmarkSize="xl"
        eyebrow="The Program · Season 2"
        title="An 8-session program that teaches kids to think through hard problems — through hands-on problem solving, not lectures."
        tagline="Two grade-calibrated tracks: Ember (grades 2–3) and Blaze (grades 4–6). Six students per track, dedicated instructor, 60-minute sessions."
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
            <Link className="sw-btn sw-btn-primary" href="#interest" style={{ whiteSpace: "nowrap" }}>
              Save my seat
            </Link>
          </div>
        </section>

        <section className="sw-section">
          <div className="ts-eyebrow">What kids learn</div>
          <h2 className="ts-h1" style={{ marginTop: 8, marginBottom: 16, maxWidth: 760 }}>
            Each session teaches one real thinking skill — the kind that transfers everywhere.
          </h2>
          <p className="ts-lead" style={{ maxWidth: 760, marginBottom: 24 }}>
            Pattern detection, elimination, constraint navigation, estimation under uncertainty, and
            strategy. The program ends with the Spark Challenge — a team scenario where the winning team
            isn&rsquo;t the one with the right answer, it&rsquo;s the one with the clearest reasoning.
          </p>

          <div className="sw-grid-2" style={{ gap: 24 }}>
            {SECTIONS.map((s) => (
              <CurriculumSection key={s.kicker} {...s} />
            ))}
          </div>
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
            Every session features a Spark of History — the story of someone who used the same
            skill we&rsquo;re teaching to change something that mattered. We don&rsquo;t just teach
            critical thinking; we show its impact through history. We make a poster for each Spark —
            they hang in the classroom, and you can grab the full print masters below.
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
              <p className="ts-body">Max 6 students · dedicated instructor · same 8-session arc, calibrated to younger reasoners.</p>
            </div>
            <div className="sw-card" style={{ borderTop: "4px solid var(--sw-blue)" }}>
              <div className="ts-eyebrow" style={{ color: "var(--sw-blue)" }}>Blaze Track</div>
              <h3 className="ts-h2" style={{ marginTop: 6, marginBottom: 10 }}>Grades 4–6</h3>
              <p className="ts-body">Max 6 students · dedicated instructor · same 8-session arc, calibrated to older reasoners.</p>
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
