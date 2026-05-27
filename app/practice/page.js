import { SiteHeader } from "../components/SiteHeader";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { SubscribeForm } from "../components/SubscribeForm";
import { ProTip } from "../components/ProTip";

export const metadata = {
  title: "Practice at home · Sparkworks",
  description:
    "Activities, games, and class materials the Sparkworks program uses to teach critical thinking — organized by the skills they build, and recommended for practice between sessions.",
};

// Skill-section structure. Matches the program page's 4-sprint structure.
// Mike's revision 2026-05-27: Game Theory folds into "Think Beyond What You Control"
// alongside Strategy (no separate "Think About How Others Will React" section on the website).
const SECTIONS = [
  {
    slug: "see-what-others-miss",
    label: "See What Others Miss",
    color: "purple",
    skills: "Pattern Detection · Elimination",
  },
  {
    slug: "understand-the-system",
    label: "Understand the System",
    color: "blue",
    skills: "Constraints · Hidden Rules",
  },
  {
    slug: "decide-without-all-the-facts",
    label: "Decide Without All the Facts",
    color: "ember",
    skills: "Estimation · Elimination (under uncertainty)",
  },
  {
    slug: "think-beyond-what-you-control",
    label: "Think Beyond What You Control",
    color: "teal",
    skills: "Strategy · Game Theory",
  },
];

const FAMILIES = [
  // -------- Sparkworks-built materials (multi-skill — sit outside the skill-section grouping) --------
  {
    type: "practice-book-pre-launch",
    sparkworksBuilt: true,
    slug: "sparkworks-ignite-practice-book-1",
    title: "Sparkworks Ignite Practice Book 1",
    // Per Sparkworks Ignite Workbooks Agent TRADEMARK_RULES.md: must use "Practice Book"
    // (never "Workbook" / "Activity Book"); cover language must reference the Sparkworks program;
    // position under Programs/Curriculum on the website, never Shop/Store. Surfaced here as a
    // program material, not as a retail product.
    skills: [
      { label: "Pattern Detection", color: "purple" },
      { label: "Hidden Rules", color: "blue" },
      { label: "Estimation", color: "ember" },
      { label: "Strategy", color: "teal" },
    ],
    badge: "Coming soon",
    body:
      "A four-section tour through the same thinking skills our class teaches: pattern detection, hidden rules, reasoning under uncertainty, and strategy. Designed for kids ages 8–12 to work through alongside the Sparkworks program — or on their own to keep the spark going between sessions.",
    subscribe: {
      interests: ["Materials"],
      source: "practice-book-ignite-1",
      ctaLabel: "Notify me when it ships",
      successMessage: "On the list — we’ll email when Practice Book 1 lands.",
    },
  },

  // -------- Third-party endorsements (grouped under their primary skill section) --------
  {
    type: "game-family",
    section: "think-beyond-what-you-control",
    slug: "mastermind-code-breaker",
    title: "Mastermind & Code Breaker",
    skills: [
      { label: "Pattern Detection", color: "purple" },
      { label: "Elimination", color: "purple" },
      { label: "Strategy", color: "teal" },
    ],
    sessionPill: "Used in our strategy session · Blaze track",
    whatItIs:
      "Two players. One sets a hidden code of colored pegs behind a shield. The other has a limited number of guesses to crack it. After every guess, the code-setter places small feedback pegs — one for each guess-peg that's the right color in the right spot, another for each that's the right color but in the wrong spot. Misses get no feedback peg at all. The cracker uses the feedback to design their next guess.",
    whyWeRecommend: (
      <>
        A natural fit for three of the thinking skills our Sparkworks program focuses on most: <strong>pattern detection</strong> (reading what each piece of feedback actually tells you), <strong>elimination</strong> (every &ldquo;miss&rdquo; permanently rules out a color), and <strong>strategy</strong> (the kid who pauses to design each guess to teach them something specific beats the kid who grabs at pegs). The whole game is one long pause-think-act loop: pause before guessing, think about what your next guess will teach you, act on what you already know.
      </>
    ),
    whereWeUseIt:
      "During the strategy session (week 6) of our 8-session Sparkworks program, with kids on our Blaze track (grades 4–6). The smaller version below plays just as well at home with younger kids on our Ember track (grades 2–3).",
    proTip: {
      title: "Three levels of difficulty",
      body: (
        <>
          <p style={{ margin: 0 }}>
            Mastermind-style games let you crank the difficulty without buying anything new. Three levels, same equipment:
          </p>
          <ol style={{ margin: "12px 0", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: 8 }}>
              <strong>Level 1 — No repeat colors.</strong> Every peg in the hidden code is a different color. The smallest puzzle space. Best on-ramp for new players.
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong>Level 2 — Repeat colors allowed.</strong> The same color can appear twice or more in the code. The puzzle space roughly triples.
            </li>
            <li>
              <strong>Level 3 — Repeat colors + empty slots.</strong> Same as Level 2, plus the code can include a blank in any position. The hardest mode.
            </li>
          </ol>
          <p style={{ margin: 0 }}>
            Most boxes default to Level 1. Step up when your kid is solving Level 1 in a handful of guesses — and step up again when Level 2 stops being a challenge. Same game, three lifetimes of replay.
          </p>
        </>
      ),
    },
    versions: [
      {
        // Endorsements doc pulled 2026-05-27 (PCr voice + accessibility pass; "3 difficulty levels" moved to family-level Pro Tip).
        name: "Mastermind",
        manufacturer: "Goliath Games",
        specs: "6 colors · 4-peg code · 10 guesses",
        fitHint: "Great for Ember; grows into Blaze",
        image: "/practice/mastermind-goliath.jpg",
        why:
          "The classic and simplest. Six colors and a 4-peg code keep the whole game inside what a younger kid can hold in their head — they can focus on the thinking, not on tracking pieces. The right on-ramp for kids in grades 2–3 (our Ember track) or any family new to Mastermind-style puzzles. Once a kid is solving it confidently in a handful of guesses, they’re ready to step up to Code Breaker.",
        href: "https://amzn.to/4fQkfO2",
      },
      {
        name: "Code Breaker",
        manufacturer: "KIDAMI",
        specs: "8 colors · 5-peg code · 10 guesses",
        fitHint: "Built for Blaze; keeps growing for years",
        image: "/practice/code-breaker-kidami.jpg",
        why:
          "Same game, sized up. Two more colors and a longer code push the puzzle past what a kid can hold in their head — they have to write things down, or organize their unused colors on the side of the board. That’s the strategy lesson made physical — the board does the remembering so the kid can do the thinking. This is the version we play with our Blaze-track kids (grades 4–6) during the Sparkworks strategy session.",
        href: "https://amzn.to/4dINIH5",
      },
    ],
  },
];

function SkillChip({ label, color }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--sw-display)",
        fontSize: "0.6875rem",
        fontWeight: 700,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        padding: "5px 10px",
        borderRadius: 999,
        border: `1.5px solid var(--sw-${color})`,
        color: `var(--sw-${color})`,
        background: "transparent",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function VersionPicker({ name, manufacturer, specs, fitHint, why, href, image }) {
  return (
    <div
      className="sw-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        background: "var(--sw-white)",
        padding: "20px 22px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 180,
          background: "var(--sw-white)",
          border: "1px solid var(--sw-bone)",
          borderRadius: "var(--sw-radius-sm)",
          padding: 8,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={`${manufacturer} ${name} board game`}
          loading="lazy"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      <div>
        <div className="ts-label" style={{ fontSize: "0.6875rem", color: "var(--sw-teal)" }}>
          {manufacturer}
        </div>
        <h4 className="ts-h2" style={{ marginTop: 2, fontSize: "1.25rem" }}>
          {name}
        </h4>
      </div>

      <div className="ts-caption" style={{ color: "var(--sw-steel)" }}>{specs}</div>
      <div className="ts-caption" style={{ fontStyle: "italic" }}>{fitHint}</div>
      <p className="ts-body" style={{ flex: 1, fontSize: "0.875rem" }}>{why}</p>

      <a
        className="sw-btn sw-btn-primary"
        href={href}
        target="_blank"
        rel="sponsored noopener noreferrer"
        style={{ alignSelf: "flex-start", marginTop: 4 }}
      >
        Get on Amazon
      </a>
    </div>
  );
}

// Pre-launch placeholder cover for a Sparkworks Ignite Practice Book.
// Uses the canonical SPARKWORKS + IGNITE split-color line mark per the Ignite TRADEMARK_RULES.md.
// Designer 2026-05-27: dashed-border preview tab in top-right corner signals "this is a placeholder,
// not the real cover" honestly — package-design convention for unprinted/proof state.
function PracticeBookPlaceholder() {
  return (
    <div
      role="img"
      aria-label="Sparkworks Ignite Practice Book 1 — placeholder cover (preview, real cover coming)"
      style={{
        height: 220,
        background: "var(--sw-bone)",
        border: "1.5px solid var(--sw-steel)",
        borderRadius: "var(--sw-radius-sm)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: 20,
        textAlign: "center",
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          fontFamily: "var(--sw-display)",
          fontSize: "0.625rem",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          padding: "3px 8px",
          border: "1px dashed var(--sw-steel)",
          borderRadius: 3,
          color: "var(--sw-steel)",
          background: "var(--sw-white)",
        }}
      >
        Preview · Coming soon
      </span>
      <div>
        <span style={{ fontFamily: "var(--sw-display)", fontWeight: 800, fontSize: "1.5rem", color: "var(--sw-steel)", letterSpacing: "2.5px" }}>
          SPARKWORKS
        </span>
      </div>
      <div style={{ fontFamily: "var(--sw-display)", fontWeight: 800, fontSize: "2.5rem", color: "var(--sw-ember)", letterSpacing: "4px", lineHeight: 1 }}>
        IGNITE
      </div>
      <div className="ts-caption" style={{ color: "var(--sw-steel)", marginTop: 4 }}>
        Practice Book 1 · Ages 8–12
      </div>
    </div>
  );
}

function PracticeBookCard({ family }) {
  return (
    <article
      id={family.slug}
      className="sw-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 18,
        scrollMarginTop: 24,
      }}
    >
      {/* Designer 2026-05-27: "Coming soon" badge moved from this chip row to the placeholder cover's top-right preview tab — drops one Ember surface AND keeps the launch state visible on the cover where parents look first. */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
        {family.skills.map((s) => (
          <SkillChip key={s.label} label={s.label} color={s.color} />
        ))}
      </div>

      <h3 className="ts-h1" style={{ fontSize: "1.5rem", margin: 0 }}>
        {family.title}
      </h3>

      <div className="sw-grid-2" style={{ alignItems: "start", gap: 24 }}>
        <PracticeBookPlaceholder />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p className="ts-body">{family.body}</p>
          {family.subscribe && (
            <div style={{ marginTop: 6 }}>
              <SubscribeForm
                interests={family.subscribe.interests}
                source={family.subscribe.source}
                ctaLabel={family.subscribe.ctaLabel}
                successMessage={family.subscribe.successMessage}
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function GameFamilyCard({ family }) {
  return (
    <article
      id={family.slug}
      className="sw-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        scrollMarginTop: 24,
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {family.skills.map((s) => (
          <SkillChip key={s.label} label={s.label} color={s.color} />
        ))}
      </div>

      <h3 className="ts-h1" style={{ fontSize: "1.5rem", margin: 0 }}>
        {family.title}
      </h3>

      <div>
        <div
          className="ts-eyebrow"
          style={{ color: "var(--sw-teal)", fontSize: "0.75rem", marginBottom: 12 }}
        >
          Pick your version
        </div>
        <div className="sw-grid-2">
          {family.versions.map((v) => (
            <VersionPicker key={v.name} {...v} />
          ))}
        </div>
      </div>

      {family.proTip && (
        <ProTip title={family.proTip.title}>{family.proTip.body}</ProTip>
      )}

      <div>
        <div className="ts-label" style={{ fontSize: "0.75rem", color: "var(--sw-steel)", marginBottom: 6 }}>
          Why we recommend it
        </div>
        <p className="ts-body">{family.whyWeRecommend}</p>
      </div>

      <div>
        <div className="ts-label" style={{ fontSize: "0.75rem", color: "var(--sw-steel)", marginBottom: 6 }}>
          What the game is
        </div>
        <p className="ts-body">{family.whatItIs}</p>
      </div>

      <div className="sw-callout sw-callout-teal" style={{ margin: 0 }}>
        <div className="ts-label" style={{ fontSize: "0.6875rem", color: "var(--sw-teal)", marginBottom: 4 }}>
          {family.sessionPill}
        </div>
        <p className="ts-body" style={{ margin: 0, fontSize: "0.875rem" }}>{family.whereWeUseIt}</p>
      </div>
    </article>
  );
}

function FamilyCard({ family }) {
  if (family.type === "practice-book-pre-launch") {
    return <PracticeBookCard family={family} />;
  }
  // Default: game-family (Type A). Future: practice-book-affiliate (Type B) once PCr authors entries.
  return <GameFamilyCard family={family} />;
}

export default function PracticePage() {
  const sparkworksBuilt = FAMILIES.filter((f) => f.sparkworksBuilt);
  const bySection = SECTIONS.map((s) => ({
    ...s,
    families: FAMILIES.filter((f) => f.section === s.slug && !f.sparkworksBuilt),
  })).filter((s) => s.families.length > 0);

  return (
    <>
      <SiteHeader />
      {/* TM-2026 entry 12: hero title re-scoped on the Games + Materials merge. Prior text was "Activities and games we use in class — and recommend for play at home." (entry 11); page now covers class materials too. */}
      <Hero
        showWordmark={false}
        eyebrow="Practice at home"
        title="Practice at home — the activities, games, and class materials we use to build each skill."
        tagline="Same picks we teach with in our program. Chosen because they hold up across grades — and play just as well with grown-ups."
      />

      <main className="sw-page sw-body">
        {sparkworksBuilt.length > 0 && (
          <section className="sw-section" id="sparkworks-built" style={{ marginTop: 0 }}>
            {/* Designer 2026-05-27: "Built by us" eyebrow uses Spark Blue (senior brand identity) rather than Steel to claim the in-house material without recruiting Ember. */}
            <div className="ts-eyebrow" style={{ color: "var(--sw-spark)" }}>
              Built by us
            </div>
            <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 18, fontSize: "2rem" }}>
              Sparkworks practice books
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {sparkworksBuilt.map((f) => (
                <FamilyCard key={f.slug} family={f} />
              ))}
            </div>
          </section>
        )}

        {bySection.map((s) => (
          <section key={s.slug} className="sw-section" id={s.slug}>
            {/* Designer 2026-05-27: dropped "By skill · " prefix from section eyebrow — was visually noisy. Skills list alone in section color is sufficient. */}
            <div
              className="ts-eyebrow"
              style={{ color: `var(--sw-${s.color})` }}
            >
              {s.skills}
            </div>
            <h2 className="ts-h2" style={{ marginTop: 8, marginBottom: 18, fontSize: "2rem" }}>
              {s.label}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {s.families.map((f) => (
                <FamilyCard key={f.slug} family={f} />
              ))}
            </div>
          </section>
        ))}

        <section className="sw-section" id="subscribe">
          <div
            className="sw-card"
            style={{
              borderTop: "4px solid var(--sw-teal)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              maxWidth: 760,
              scrollMarginTop: 24,
            }}
          >
            <div className="ts-eyebrow" style={{ color: "var(--sw-teal)" }}>
              More on the way
            </div>
            <h2 className="ts-h2">Hear about new picks.</h2>
            <p className="ts-body">
              We add to this page as we play, test, and approve new games and practice books. Drop your email and we&rsquo;ll let you know when something new lands here.
            </p>
            <div style={{ marginTop: 6 }}>
              <SubscribeForm
                interests={["Games", "Materials"]}
                source="practice-page"
                ctaLabel="Notify me"
                successMessage="On the list — we&rsquo;ll email when we add a new pick."
              />
            </div>
          </div>
        </section>

        <section className="sw-section">
          <p className="ts-caption" style={{ fontStyle: "italic" }}>
            Some links on this page are affiliate links. Sparkworks is an Amazon Associate; we earn from qualifying purchases at no extra cost to you.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
