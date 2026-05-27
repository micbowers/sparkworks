import { SiteHeader } from "../components/SiteHeader";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { SubscribeForm } from "../components/SubscribeForm";

export const metadata = {
  title: "Practice at home · Sparkworks",
  description:
    "Activities and games the Sparkworks program uses to teach critical thinking — recommended for practice between sessions, and for play at any age.",
};

const FAMILIES = [
  {
    slug: "mastermind-code-breaker",
    title: "Mastermind & Code Breaker",
    skills: [
      { label: "Pattern Detection", color: "purple" },
      { label: "Elimination", color: "purple" },
      { label: "Strategy", color: "blue" },
    ],
    sessionPill: "Used in our strategy session · Blaze track",
    whatItIs:
      "Two players. One sets a hidden code of colored pegs behind a shield. The other has a limited number of guesses to crack it. After every guess, the code-setter places small feedback pegs — one for each guess-peg that's the right color in the right spot, another for each that's the right color but in the wrong spot. Misses get no feedback peg at all. The cracker uses the feedback to design their next guess.",
    whyWeRecommend:
      "A natural fit for three of the thinking skills our Sparkworks program focuses on most: pattern detection (reading what each piece of feedback actually tells you), elimination (every “miss” permanently rules out a color), and strategy (the kid who pauses to design each guess to teach them something specific beats the kid who grabs at pegs). The whole game is one long pause-think-act loop: pause before guessing, think about what your next guess will teach you, act on what you already know.",
    whereWeUseIt:
      "During the strategy session of our 8-session Sparkworks program, with kids on our Blaze track (grades 4–6). The smaller version below plays just as well at home with younger kids on our Ember track (grades 2–3).",
    versions: [
      {
        name: "Mastermind",
        manufacturer: "Goliath Games",
        specs: "6 colors · 4-peg code · ~10 guesses",
        fitHint: "Great for Ember; grows into Blaze",
        image: "/practice/mastermind-goliath.jpg",
        why:
          "The classic. Six colors and a 4-peg code keep the whole game inside what a younger kid can hold in their head — they can focus on the thinking, not on tracking pieces. That makes this the right on-ramp for kids in grades 2–3 (our Ember track) or any family new to Mastermind-style puzzles. Once a kid is solving it confidently in a handful of guesses, they’re ready to step up to Code Breaker.",
        href: "https://amzn.to/4fQkfO2",
      },
      {
        name: "Code Breaker",
        manufacturer: "KIDAMI",
        specs: "8 colors · 5-peg code · 3 difficulty levels",
        fitHint: "Built for Blaze; keeps growing for years",
        image: "/practice/code-breaker-kidami.jpg",
        why:
          "Same game, leveled up. Two more colors and a longer code push the puzzle past what a kid can hold in their head — they have to write things down, or organize their unused colors on the side of the board. That’s the strategy lesson made physical — the board does the remembering so the kid can do the thinking. Three difficulty levels mean it keeps growing with your kid over months, not just weeks. This is the version we play with our Blaze-track kids (grades 4–6) during the Sparkworks strategy session.",
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
        borderTop: "3px solid var(--sw-teal)",
        padding: "20px 22px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 180,
          background: "var(--sw-bone)",
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

function FamilyCard({ family }) {
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

      <h3 className="ts-h1" style={{ fontSize: "1.875rem", margin: 0 }}>
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

      <div className="sw-callout sw-callout-blue" style={{ margin: 0 }}>
        <div className="ts-label" style={{ fontSize: "0.6875rem", color: "var(--sw-blue)", marginBottom: 4 }}>
          {family.sessionPill}
        </div>
        <p className="ts-body" style={{ margin: 0, fontSize: "0.875rem" }}>{family.whereWeUseIt}</p>
      </div>
    </article>
  );
}

export default function PracticePage() {
  return (
    <>
      <SiteHeader />
      <Hero
        showWordmark={false}
        eyebrow="Practice at home"
        title="Games we use in class — and recommend for play at home."
        tagline="Same picks we teach with in our program. Chosen because they hold up across grades — and play just as well with grown-ups."
      />

      <main className="sw-page sw-body">
        <section className="sw-section" style={{ marginTop: 0 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {FAMILIES.map((f) => (
              <FamilyCard key={f.slug} family={f} />
            ))}
          </div>
        </section>

        <section className="sw-section">
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
            <div className="ts-eyebrow" style={{ color: "var(--sw-teal)" }}>
              More on the way
            </div>
            <h2 className="ts-h2">Hear about new picks.</h2>
            <p className="ts-body">
              We add to this page as we play and approve new games. Drop your email and we&rsquo;ll let you know when something new lands here.
            </p>
            <div style={{ marginTop: 6 }}>
              <SubscribeForm
                interests={["Games"]}
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
