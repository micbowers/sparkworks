import { SiteHeader } from "../components/SiteHeader";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { SubscribeForm } from "../components/SubscribeForm";
import { ProTip } from "../components/ProTip";
import { ExpandableCard } from "../components/ExpandableCard";

export const metadata = {
  title: "Practice at home · Sparkworks",
  description:
    "Activities, games, and class materials the Sparkworks program uses to teach critical thinking — organized by the skills they build, and recommended for practice between sessions.",
};

// Skills are TAGS — they appear as chips on each card so parents can see at a glance
// what each pick builds, but they do NOT determine where the card sits on the page.
// (Mike's clarification 2026-05-27: most games and books cover multiple skill areas, so
// trying to bucket them by skill creates arbitrary placement decisions and misses the
// cross-cutting nature.) The page now organizes by SOURCE — Sparkworks-built vs.
// third-party endorsements — and lets the skill chips do the discovery work within.

const FAMILIES = [
  // -------- Sparkworks-built materials (multi-skill — sit outside the skill-section grouping) --------
  {
    type: "practice-book-pre-launch",
    sparkworksBuilt: true,
    slug: "sparkworks-ignite-practice-book-1",
    title: "Sparkworks Ignite Practice Book 1",
    subtitle: "Ages 8–12 · Coming soon",
    highlight: "Four sections, four thinking skills.",
    expandLabel: "What's inside",
    // Designer 2026-05-27: four palette-color chips read as a brand-color demo on the compact
    // card. Single Steel chip in the compact view; the four skills are surfaced in the expanded
    // detail body.
    skills: [
      { label: "Four thinking skills", color: "steel" },
    ],
    body:
      "A four-section tour through the same thinking skills our class teaches: pattern detection, hidden rules, reasoning under uncertainty, and strategy. Designed for kids ages 8–12 to work through alongside the Sparkworks program — or on their own to keep the spark going between sessions.",
    subscribe: {
      interests: ["Materials"],
      source: "practice-book-ignite-1",
      ctaLabel: "Notify me when it ships",
      successMessage: "On the list — we’ll email when Practice Book 1 lands.",
    },
  },

  // -------- Game family: Mastermind & Code Breaker --------
  {
    type: "game-family",
    slug: "mastermind-code-breaker",
    title: "Mastermind & Code Breaker",
    subtitle: "Goliath Games · KIDAMI",
    headlineImage: "/practice/mastermind-goliath.jpg",
    highlight: "The classic 2-player code-breaking pegs game.",
    expandLabel: "See both versions",
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
    proTips: [
      {
        title: "Three strategies we teach in class",
        body: (
          <>
            <p style={{ margin: 0 }}>
              Halfway through the Session 6 Mastermind tournament, we pause and teach kids three deliberate moves. Same moves we use ourselves when we play.
            </p>
            <ol style={{ margin: "12px 0", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: 12 }}>
                <strong>Sort your colors.</strong> Place all six colors on the side of your board where you can see them. As you learn a color is out, push it to one side; as you learn it&rsquo;s in, push it to the other. The board tracks what you know — you don&rsquo;t have to hold it in your head.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Test two at a time.</strong> Each guess, focus on testing two specific colors. Fill the other slots however — repeats, fillers, doesn&rsquo;t matter. Two colors per guess is easier to read than four. You learn less per guess, but you never get confused about what the feedback means.
              </li>
              <li>
                <strong>Use dead colors as noise.</strong> Once you know a color is not in the code, use it deliberately in your next guess. That slot becomes a &ldquo;free&rdquo; slot whose feedback you can ignore — which means the other slots are easier to read. Dead colors are tools, not waste.
              </li>
            </ol>
          </>
        ),
      },
      {
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
    ],
    versions: [
      {
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

  // -------- Game family: Morris games --------
  {
    type: "game-family",
    slug: "morris-games",
    title: "Morris games",
    subtitle: "WE Games",
    headlineImage: "/practice/nine-mens-morris-wegames.jpg",
    highlight: "An ancient two-player strategy game.",
    skills: [
      { label: "Game Theory", color: "teal" },
    ],
    sessionPill: "Used in our game theory session · both tracks",
    whatItIs:
      "A family of ancient strategy games — Three Men's Morris (3 pieces, 3×3 grid), Six Men's Morris, Nine Men's Morris (the most popular), Twelve Men's Morris — all played on nested squares connected by lines, all built around the same goal: place your pieces, then slide them along the lines to form a row of three (“a mill”), which captures one of your opponent's pieces. The Romans scratched Morris boards into the floor of the Forum. Viking sailors carved them into ship decks. People have been playing for over 3,000 years for the same reason chess has lasted: simple rules, deep strategy.",
    whyWeRecommend:
      "Morris is a two-player game with no hidden information — both players see everything. That structure forces a specific kind of thinking: every move you consider, you also have to think about your opponent's response to it, and the response to their response. That's the same reasoning at the heart of game theory, one of the thinking skills our Sparkworks program teaches directly.",
    whereWeUseIt:
      "During the game theory session (week 7) of our 8-session Sparkworks program — Nine Men's Morris with our Blaze-track kids (grades 4–6), Three Men's Morris (also called Tapatan) with our Ember-track kids (grades 2–3). Same lesson, different scale.",
    proTips: [
      {
        title: "Play the person, not the board",
        body: (
          <p style={{ margin: 0 }}>
            Most kids&rsquo; first instinct in Morris is to stare at their own pieces — where to build their next mill. The kids who win consistently do something different: they look at their opponent&rsquo;s pieces first, every single turn. Before they make a move, they ask &ldquo;what is my opponent about to do, and do I need to block it or work around it?&rdquo; That habit — playing the OTHER person, not just your own board — is the single biggest skill jump in this kind of game. It&rsquo;s the same prompt our instructors use in class: <em>&ldquo;What&rsquo;s the bigger goal?&rdquo;</em>
          </p>
        ),
      },
    ],
    versions: [
      {
        name: "Nine Men's Morris",
        manufacturer: "WE Games",
        specs: "Wooden board · 9 pieces per player · 24 board positions",
        fitHint: "Built for Blaze; also great for Ember once kids outgrow Three Men's Morris",
        image: "/practice/nine-mens-morris-wegames.jpg",
        why:
          "The classic nine-piece, three-squares-nested board is where the strategy gets real — kids have to manage their own developing mills AND track the threat of their opponent's near-mills, sometimes both in the same turn. WE Games' wooden edition is the kind of board that lives on a shelf for years and gets pulled out for rainy Saturdays. This is the version we play with our Blaze-track kids (grades 4–6) during the game theory session of the Sparkworks program.",
        href: "https://amzn.to/4x11gH1",
      },
    ],
  },

  // -------- Third-party workbook (Type B — practice-book-affiliate) --------
  {
    type: "practice-book-affiliate",
    slug: "perfectly-logical",
    title: "Perfectly Logical!",
    subtitle: "Jenn Larson · Rockridge Press",
    headlineImage: "/practice/perfectly-logical-rockridge.jpg",
    highlight: "100 logic puzzles for grades 3–6.",
    skills: [
      { label: "Elimination", color: "purple" },
      { label: "Hidden Rules", color: "blue" },
      { label: "Constraints", color: "blue" },
    ],
    specs: "100 puzzles · 10 chapters · paperback",
    fitHint: "Best for grades 3–6 (full Blaze track + older Ember)",
    image: "/practice/perfectly-logical-rockridge.jpg",
    body:
      "100 puzzles across 10 chapters of increasing difficulty — logic grids, cryptograms, secret codes, and Sudoku — from elementary teacher Jenn Larson (20+ years in the classroom). Three of the thinking skills our Sparkworks program teaches show up directly: elimination (the logic grids drill the same reasoning as our second session), hidden-rule hunting (the cryptograms map to our fourth session), and constraint navigation (Sudoku is the same skill as our third). A good solo-practice companion for kids who love the games we play in class — workable between sessions, or after a kid has wrapped the program.",
    href: "https://amzn.to/4e5VEnc",
  },
];

// ============================================================
// Shared atoms
// ============================================================

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
        padding: "4px 9px",
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

// Pre-launch placeholder cover for a Sparkworks Ignite Practice Book.
function PracticeBookPlaceholder({ size = "compact" }) {
  const isCompact = size === "compact";
  return (
    <div
      role="img"
      aria-label="Sparkworks Ignite Practice Book 1 — placeholder cover (preview, real cover coming)"
      style={{
        height: isCompact ? 200 : 220,
        background: "var(--sw-bone)",
        borderRadius: "var(--sw-radius-sm)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: isCompact ? 8 : 10,
        padding: isCompact ? 20 : 24,
        textAlign: "center",
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          fontFamily: "var(--sw-display)",
          fontSize: "0.5625rem",
          fontWeight: 700,
          letterSpacing: "1.2px",
          textTransform: "uppercase",
          padding: "2px 6px",
          border: "1px dashed var(--sw-steel)",
          borderRadius: 3,
          color: "var(--sw-steel)",
          background: "var(--sw-white)",
        }}
      >
        Preview
      </span>
      <div>
        <span style={{ fontFamily: "var(--sw-display)", fontWeight: 800, fontSize: isCompact ? "1.125rem" : "1.5rem", color: "var(--sw-steel)", letterSpacing: "2px" }}>
          SPARKWORKS
        </span>
      </div>
      <div style={{ fontFamily: "var(--sw-display)", fontWeight: 800, fontSize: isCompact ? "1.875rem" : "2.5rem", color: "var(--sw-ember)", letterSpacing: "3px", lineHeight: 1 }}>
        IGNITE
      </div>
      <div className="ts-caption" style={{ color: "var(--sw-steel)", marginTop: 2, fontSize: "0.6875rem" }}>
        Practice Book 1
      </div>
    </div>
  );
}

// Compact image well — image-on-top layout. Full card width × moderate fixed height. Bone-bg
// makes whitespace around varied-aspect covers read as deliberate framing.
function CompactCover({ image, alt }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 200,
        background: "var(--sw-bone)",
        borderRadius: "var(--sw-radius-sm)",
        padding: 14,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        loading="lazy"
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  );
}

// ============================================================
// COMPACT SUMMARY — what's always visible in the grid
// ============================================================

function CompactSummary({ family }) {
  const isPreLaunch = family.type === "practice-book-pre-launch";
  const isSingleProduct =
    family.type === "practice-book-affiliate" ||
    (family.type === "game-family" && family.versions && family.versions.length === 1);
  const headlineHref = isSingleProduct
    ? family.href || (family.versions && family.versions[0] && family.versions[0].href)
    : null;

  // Image-on-top layout (Mike feedback 2026-05-27): on desktop, image-left + narrow content-right
  // was wrapping text into more lines than mobile's full-width single column — making the cards
  // read as "too texty." Stacking image-on-top gives the content row the full card width and
  // shortens the textual stack. The image carries more visual weight too.
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {isPreLaunch ? (
        <PracticeBookPlaceholder size="compact" />
      ) : (
        <CompactCover image={family.headlineImage || family.image} alt={`${family.title} cover`} />
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {family.skills.map((s) => (
          <SkillChip key={s.label} label={s.label} color={s.color} />
        ))}
      </div>

      <div>
        <h3 className="ts-h2" style={{ margin: 0, fontSize: "1.25rem" }}>
          {family.title}
        </h3>
        {family.subtitle && (
          <div className="ts-caption" style={{ marginTop: 2 }}>
            {family.subtitle}
          </div>
        )}
      </div>

      {family.highlight && (
        <p
          className="ts-body"
          style={{
            margin: 0,
            fontSize: "0.9375rem",
          }}
        >
          {family.highlight}
        </p>
      )}

      {/* Compact-view primary action — outlined for clean look; Ember-primary lives inside expanded detail.
          Multi-version families have no direct Amazon CTA in compact (which version?) — the expand button
          label "See both versions" carries that affordance. */}
      {isPreLaunch && family.subscribe ? (
        <div>
          <SubscribeForm
            interests={family.subscribe.interests}
            source={family.subscribe.source}
            ctaLabel={family.subscribe.ctaLabel}
            successMessage={family.subscribe.successMessage}
          />
        </div>
      ) : headlineHref ? (
        <a
          className="sw-btn"
          href={headlineHref}
          target="_blank"
          rel="sponsored noopener noreferrer"
          style={{ alignSelf: "flex-start" }}
        >
          Get on Amazon
        </a>
      ) : null}
    </div>
  );
}

// ============================================================
// DETAIL — what appears when the card is expanded
// ============================================================

function VersionPicker({ name, manufacturer, specs, fitHint, why, href, image }) {
  return (
    <div
      className="sw-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        background: "var(--sw-white)",
        padding: "16px 18px",
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
        {/* Designer 2026-05-27: manufacturer label switched from Teal to Steel — Teal carries
            sectional meaning ("Understand the System") and using it as a generic small-text label
            dilutes that sectional cue. */}
        <div className="ts-label" style={{ fontSize: "0.6875rem", color: "var(--sw-steel)" }}>
          {manufacturer}
        </div>
        <h4 className="ts-h2" style={{ marginTop: 2, fontSize: "1.125rem" }}>
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
        style={{ alignSelf: "flex-start", marginTop: 2 }}
      >
        Get on Amazon
      </a>
    </div>
  );
}

function GameFamilyDetail({ family }) {
  return (
    <>
      {family.versions && family.versions.length > 0 && (
        <div>
          {family.versions.length > 1 && (
            <div
              className="ts-eyebrow"
              style={{ color: "var(--sw-teal)", fontSize: "0.75rem", marginBottom: 12 }}
            >
              Pick your version
            </div>
          )}
          {family.versions.length > 1 ? (
            <div className="sw-grid-2">
              {family.versions.map((v) => (
                <VersionPicker key={v.name} {...v} />
              ))}
            </div>
          ) : (
            <div style={{ maxWidth: 520 }}>
              <VersionPicker {...family.versions[0]} />
            </div>
          )}
        </div>
      )}

      {family.proTips && family.proTips.map((tip, i) => (
        <ProTip key={i} title={tip.title}>{tip.body}</ProTip>
      ))}

      {family.whyWeRecommend && (
        <div>
          <div className="ts-label" style={{ fontSize: "0.75rem", color: "var(--sw-steel)", marginBottom: 6 }}>
            Why we recommend it
          </div>
          <p className="ts-body">{family.whyWeRecommend}</p>
        </div>
      )}

      {family.whatItIs && (
        <div>
          <div className="ts-label" style={{ fontSize: "0.75rem", color: "var(--sw-steel)", marginBottom: 6 }}>
            What the game is
          </div>
          <p className="ts-body">{family.whatItIs}</p>
        </div>
      )}

      {family.sessionPill && family.whereWeUseIt && (
        <div className="sw-callout sw-callout-teal" style={{ margin: 0 }}>
          <div className="ts-label" style={{ fontSize: "0.6875rem", color: "var(--sw-teal)", marginBottom: 4 }}>
            {family.sessionPill}
          </div>
          <p className="ts-body" style={{ margin: 0, fontSize: "0.875rem" }}>{family.whereWeUseIt}</p>
        </div>
      )}
    </>
  );
}

function PracticeBookDetail({ family }) {
  const isAffiliate = family.type === "practice-book-affiliate";
  return (
    <>
      {family.specs && (
        <div className="ts-caption" style={{ color: "var(--sw-steel)" }}>{family.specs}</div>
      )}
      {family.fitHint && (
        <div className="ts-caption" style={{ fontStyle: "italic" }}>{family.fitHint}</div>
      )}
      <p className="ts-body">{family.body}</p>
      {isAffiliate && family.href && (
        <a
          className="sw-btn sw-btn-primary"
          href={family.href}
          target="_blank"
          rel="sponsored noopener noreferrer"
          style={{ alignSelf: "flex-start" }}
        >
          Get on Amazon
        </a>
      )}
    </>
  );
}

function FamilyDetail({ family }) {
  if (family.type === "practice-book-pre-launch" || family.type === "practice-book-affiliate") {
    return <PracticeBookDetail family={family} />;
  }
  return <GameFamilyDetail family={family} />;
}

// ============================================================
// PAGE
// ============================================================

export default function PracticePage() {
  const sparkworksBuilt = FAMILIES.filter((f) => f.sparkworksBuilt);
  const recommended = FAMILIES.filter((f) => !f.sparkworksBuilt);

  return (
    <>
      <SiteHeader />
      {/* TM-2026 entry 12c (revised 2026-05-27): hero title shortened per Designer pre-publish
          critique — the prior 22-word title was paragraph-in-display-type, fighting the clean
          shopping intent of the page below. Explanatory clause moved to tagline. */}
      <Hero
        showWordmark={false}
        eyebrow="Practice at home"
        title="Practice at home."
        tagline="Activities, games, and class materials we use in class — recommended for play at home, across grades, and with grown-ups too."
      />

      <main className="sw-page sw-body">
        {sparkworksBuilt.length > 0 && (
          <section className="sw-section" id="sparkworks-built" style={{ marginTop: 0 }}>
            <h2 className="ts-h2" style={{ marginTop: 0, marginBottom: 18, fontSize: "2rem" }}>
              Built by us
            </h2>
            <div className={sparkworksBuilt.length > 1 ? "sw-grid-2" : undefined}>
              {sparkworksBuilt.map((f) => (
                <ExpandableCard
                  key={f.slug}
                  slug={f.slug}
                  expandLabel={f.expandLabel}
                  summary={<CompactSummary family={f} />}
                  detail={<FamilyDetail family={f} />}
                />
              ))}
            </div>
          </section>
        )}

        {recommended.length > 0 && (
          <section className="sw-section" id="we-recommend">
            <h2 className="ts-h2" style={{ marginTop: 0, marginBottom: 18, fontSize: "2rem" }}>
              We recommend
            </h2>
            <div className={recommended.length > 1 ? "sw-grid-2" : undefined}>
              {recommended.map((f) => (
                <ExpandableCard
                  key={f.slug}
                  slug={f.slug}
                  expandLabel={f.expandLabel}
                  summary={<CompactSummary family={f} />}
                  detail={<FamilyDetail family={f} />}
                />
              ))}
            </div>
          </section>
        )}

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
              {/* Designer 2026-05-27: this subscribe form sits in a Teal-accented section (border + eyebrow);
                  matching the submit button to Teal-success keeps the Ember-rationing budget within bounds
                  AND reads as visually coherent inside the callout. The Ember-primary CTA register is reserved
                  for the buy-decision moment inside expanded VersionPicker cards. */}
              <SubscribeForm
                interests={["Games", "Materials"]}
                source="practice-page"
                ctaLabel="Notify me"
                accent="success"
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
