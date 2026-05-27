import { SiteHeader } from "../components/SiteHeader";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { SubscribeForm } from "../components/SubscribeForm";
import { ProTip } from "../components/ProTip";
import { ExpandableCard } from "../components/ExpandableCard";
import { AmazonButton } from "../components/AmazonButton";

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
  // -------- Sparkworks-built entries temporarily hidden (Mike 2026-05-27): Block Code + Ignite
  // Practice Book 1 are not surfaced on /practice for now. Code retained in /* … */ block below
  // so it's easy to restore — just uncomment the two entries and the imports/components are
  // already in place (game-pre-launch type + practice-book-pre-launch type, PracticeBookPlaceholder,
  // multi-image grid render in CompactFooter).

  /* TEMPORARILY HIDDEN — Sparkworks-built items
  {
    type: "game-pre-launch",
    sparkworksBuilt: true,
    slug: "block-code",
    title: "Block Code",
    subtitle: "Ages 8+ · 2–6 players · Coming soon",
    highlight: "A hands-on thinking game. Eliminate to discover.",
    skills: [
      { label: "Pattern Detection", color: "purple" },
      { label: "Elimination", color: "purple" },
    ],
    // Two product images shown side-by-side (Mike 2026-05-27: use box front + back). Rendered from
    // BCT's print-ready PDF outputs (cover.pdf + back.pdf); back has the dev-annotation banner
    // cropped off the top.
    images: [
      { src: "/practice/block-code-box-front.png", alt: "Block Code box front", label: "Box front" },
      { src: "/practice/block-code-box-back.png", alt: "Block Code box back", label: "Box back" },
    ],
    subscribe: {
      interests: ["Games"],
      source: "block-code-tabletop",
      ctaLabel: "Notify me when it ships",
      successMessage: "On the list — we’ll email when Block Code ships.",
    },
    // Editorial detail (shown on "Why we love it" expand)
    whyWeRecommend:
      "Block Code is the capstone activity in our pattern-detection session: a block-pattern game where the instructor has a secret rule and players have to test arrangements to figure it out. The best players aren't the ones guessing the fastest — they're the ones testing their ideas most carefully.",
    whatItIs:
      "One player is the Code Keeper and knows a secret rule about which block structures are “valid.” The other players are Code Breakers — they take turns building structures and either Test them (safe — get a free YES / NO) or Showdown them (risky — everyone votes first; correct voters earn Code Tokens). Spend a Code Token to make an official guess at the rule. The first player to correctly state the secret rule wins the game.",
    whereWeUseIt:
      "During the pattern-detection session (week 1) of our 8-session Sparkworks program, with kids in grades 4–6. The first activity of the program — kids practice forming, testing, and refining ideas under a hidden rule.",
    sessionPill: "Used in our pattern-detection session",
  },

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
  */

  // -------- Game family: Mastermind & Code Breaker --------
  {
    type: "game-family",
    slug: "mastermind-code-breaker",
    title: "Mastermind & Code Breaker",
    subtitle: "Goliath Games · KIDAMI",
    headlineImage: "/practice/mastermind-goliath.jpg",
    highlight: "The classic 2-player code-breaking pegs game.",
    skills: [
      { label: "Pattern Detection", color: "purple" },
      { label: "Elimination", color: "purple" },
      { label: "Strategy", color: "teal" },
    ],
    sessionPill: "Used in our strategy session",
    whatItIs:
      "Two players. One sets a hidden code of colored pegs behind a shield. The other has a limited number of guesses to crack it. After every guess, the code-setter places small feedback pegs — one for each guess-peg that's the right color in the right spot, another for each that's the right color but in the wrong spot. Misses get no feedback peg at all. The cracker uses the feedback to design their next guess.",
    whyWeRecommend: (
      <>
        A natural fit for three of the thinking skills our Sparkworks program focuses on most: <strong>pattern detection</strong> (reading what each piece of feedback actually tells you), <strong>elimination</strong> (every &ldquo;miss&rdquo; permanently rules out a color), and <strong>strategy</strong> (the kid who pauses to design each guess to teach them something specific beats the kid who grabs at pegs). The whole game is one long pause-think-act loop: pause before guessing, think about what your next guess will teach you, act on what you already know.
      </>
    ),
    // Public-website voice (Mike 2026-05-27): drop "Ember track" / "Blaze track" insider terms — most
    // visitors aren't Sparkworks-program members and won't know what those mean. Plain grade ranges
    // travel better. Canonical PCr text in SPARKWORKS_ENDORSEMENTS.md retains the original phrasing;
    // a [PCr] task is open to author plain-language versions for non-instructor surfaces.
    whereWeUseIt:
      "During the strategy session (week 6) of our 8-session Sparkworks program, with kids in grades 4–6. The smaller version below plays just as well at home with younger kids in grades 2–3.",
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
        fitHint: "Grades 2–3 and up · fun for adults too",
        image: "/practice/mastermind-goliath.jpg",
        // Amazon snapshot 2026-05-27 — refresh task filed for periodic update.
        price: "$39.05",
        rating: 4.5,
        reviewCount: 489,
        why:
          "The classic and simplest. Six colors and a 4-peg code keep the whole game inside what a younger kid can hold in their head — they can focus on the thinking, not on tracking pieces. The right on-ramp for kids in grades 2–3 or any family new to Mastermind-style puzzles. Once a kid is solving it confidently in a handful of guesses, they’re ready to step up to Code Breaker.",
        href: "https://amzn.to/4fQkfO2",
      },
      {
        name: "Code Breaker",
        manufacturer: "KIDAMI",
        specs: "8 colors · 5-peg code · 10 guesses",
        fitHint: "Grades 4–6 and up · fun for adults too",
        image: "/practice/code-breaker-kidami.jpg",
        price: "$15.99",
        rating: 4.6,
        reviewCount: 164,
        why:
          "Same game, sized up. Two more colors and a longer code push the puzzle past what a kid can hold in their head — they have to write things down, or organize their unused colors on the side of the board. That’s the strategy lesson made physical — the board does the remembering so the kid can do the thinking. This is the version we play with kids in grades 4–6 during the Sparkworks strategy session.",
        href: "https://amzn.to/4dINIH5",
      },
    ],
  },

  // -------- Game family: Morris & Shisima --------
  {
    type: "game-family",
    slug: "morris-shisima",
    title: "Morris & Shisima",
    subtitle: "Three-in-a-row classics",
    headlineImage: "/practice/nine-mens-morris-wegames.jpg",
    highlight: "Ancient two-player strategy games — simple boards, deep play.",
    skills: [
      { label: "Strategy", color: "teal" },
      { label: "Game Theory", color: "teal" },
    ],
    sessionPill: "Used in our game theory session",
    whatItIs:
      "A family of ancient strategy games — small board, a few pieces each, one shared goal: line up three of your pieces in a row. The European branch is called Morris (Three Men's, Six Men's, Nine Men's, Twelve Men's — all played on boards with nested squares connected by lines). The East African branch includes Shisima from Kenya — played on an octagonal star with a central point called “shisima,” meaning “body of water.” The Romans scratched Morris boards into the floor of the Forum. Viking sailors carved them into ship decks. Kids in Kenyan villages still play Shisima with stones on a hand-drawn board. These games are thousands of years old and have outlived empires for the same reason chess has: simple rules, deep strategy.",
    whyWeRecommend:
      "These are two-player games with no hidden information — both players see everything. That structure forces a specific kind of thinking: every move you consider, you also have to think about your opponent's response to it, and the response to their response. That's the same reasoning at the heart of game theory, one of the thinking skills our Sparkworks program teaches directly.",
    whereWeUseIt:
      "During the game theory session (week 7) of our 8-session Sparkworks program. With kids in grades 4–6 we play Nine Men's Morris. With kids in grades 2–3 we play a smaller three-piece version — Three Men's Morris in class, but Shisima (below) is the version we'd recommend for home play because it's actually purchasable as a standalone product. Same lesson, different scale.",
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
        name: "Shisima",
        manufacturer: "FROEBEL",
        specs: "Octagonal board · 8 outer points + 1 center · 3 pieces per player · ages 6 and up",
        fitHint: "Grades 2–3 and up · fun for adults too",
        image: "/practice/shisima-froebel.jpg",
        // Amazon snapshot 2026-05-27. Parser returned 2 ratings — likely correct given the small
        // listing; reviewCount hidden until verified higher-confidence.
        price: "$16.95",
        rating: 4.7,
        reviewCount: null,
        why:
          "A Kenyan strategy game from the Tiriki tradition, played on an octagonal star with a central point called “shisima” — meaning “body of water.” Three pieces per player, simple movement along the lines, but the same game-theoretic challenge as its bigger Morris cousins: every move sets up or blocks a three-in-a-row, and the smart move depends on what your opponent is about to do. The small board and fast games make this the right pick for kids in grades 2–3 — or any family that wants an accessible introduction to this kind of game before stepping up to Nine Men's Morris.",
        href: "https://amzn.to/49rnF6d",
      },
      {
        name: "Nine Men's Morris",
        manufacturer: "WE Games",
        specs: "Wooden board · 9 pieces per player · 24 board positions",
        fitHint: "Grades 4–6 and up · fun for adults too · also great for younger kids once they outgrow Shisima",
        image: "/practice/nine-mens-morris-wegames.jpg",
        // Amazon snapshot 2026-05-27 — review-count parser returned 1, may have caught a different
        // counter; worth manual verification in next refresh cycle.
        price: "$15.99",
        rating: 4.7,
        reviewCount: null, // hidden until verified
        why:
          "The classic nine-piece, three-squares-nested board is where the strategy gets real — kids have to manage their own developing mills AND track the threat of their opponent's near-mills, sometimes both in the same turn. WE Games' wooden edition is the kind of board that lives on a shelf for years and gets pulled out for rainy Saturdays. This is the version we play with kids in grades 4–6 during the game theory session of the Sparkworks program.",
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
    highlight: "100 logic puzzles for grades 3 and up.",
    skills: [
      { label: "Elimination", color: "purple" },
      { label: "Hidden Rules", color: "blue" },
      { label: "Constraints", color: "blue" },
    ],
    specs: "100 puzzles · 10 chapters · paperback",
    fitHint: "Grades 3 and up · fun for adults too",
    image: "/practice/perfectly-logical-rockridge.jpg",
    // Amazon snapshot 2026-05-27
    price: "$12.99",
    rating: 4.7,
    reviewCount: 5849,
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
      aria-label="Sparkworks Ignite Practice Book 1 — placeholder cover (real cover coming)"
      style={{
        height: isCompact ? 200 : 220,
        background: "var(--sw-white)",
        border: "1px solid var(--sw-bone)",
        borderRadius: "var(--sw-radius-sm)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: isCompact ? 8 : 10,
        padding: isCompact ? "20px 24px" : "24px 28px",
        textAlign: "left",
        position: "relative",
      }}
    >
      <div>
        <span style={{ fontFamily: "var(--sw-display)", fontWeight: 800, fontSize: isCompact ? "1.125rem" : "1.5rem", color: "var(--sw-steel)", letterSpacing: "2px" }}>
          SPARKWORKS
        </span>
      </div>
      <div style={{ fontFamily: "var(--sw-display)", fontWeight: 800, fontSize: isCompact ? "1.875rem" : "2.5rem", color: "var(--sw-ember)", letterSpacing: "3px", lineHeight: 1 }}>
        IGNITE
      </div>
      <div className="ts-caption" style={{ color: "var(--sw-steel)", marginTop: 2, fontSize: "0.6875rem" }}>
        Practice Book 1 · Cover coming soon
      </div>
    </div>
  );
}

// Compact image well — full card width × fixed height. White bg matches product covers that
// already have white backgrounds (Mike 2026-05-27: stop putting white images on a gray well).
// Image left-justified instead of centered so the cover hugs the same left edge as the text below,
// closing the gap between image and copy.
function CompactCover({ image, alt }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        height: 200,
        background: "var(--sw-white)",
        borderRadius: "var(--sw-radius-sm)",
        padding: 0,
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
          objectPosition: "left center",
          display: "block",
        }}
      />
    </div>
  );
}

// ============================================================
// COMPACT SUMMARY — what's always visible in the grid
// ============================================================

// Product block — used in the always-visible state of each entry. Cover + manufacturer + name +
// specs + fitHint + Amazon CTA. Per-version `why` text (and other editorial content) lives in the
// expanded "Why we love it" section. No nested card border (Mike: "too many lines"); just a content
// block stacked vertically.
// Single-line star + numeric rating + (review count). Amazon-orange star color (#FFA41C)
// matches the shopping convention parents already recognize; doesn't conflict with brand-reserved
// Spark Yellow (Da Vinci Badge use only).
function RatingLine({ rating, reviewCount, price }) {
  if (rating == null && price == null) return null;
  return (
    <div className="ts-caption" style={{ color: "var(--sw-steel)", display: "flex", flexWrap: "wrap", gap: 8, alignItems: "baseline" }}>
      {rating != null && (
        <span style={{ display: "inline-flex", alignItems: "baseline", gap: 4 }}>
          <span style={{ color: "#FFA41C", fontSize: "0.875rem" }}>★</span>
          <span><strong>{rating.toFixed(1)}</strong>{reviewCount ? ` (${reviewCount.toLocaleString()})` : ""}</span>
        </span>
      )}
      {rating != null && price != null && <span aria-hidden="true">·</span>}
      {price != null && <span><strong>{price}</strong></span>}
    </div>
  );
}

function ProductBlock({ name, manufacturer, specs, fitHint, href, image, price, rating, reviewCount }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div
        style={{
          height: 200,
          background: "var(--sw-white)",
          borderRadius: "var(--sw-radius-sm)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={`${manufacturer} ${name}`}
          loading="lazy"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
            objectPosition: "left center",
            display: "block",
          }}
        />
      </div>
      <div>
        <div className="ts-label" style={{ fontSize: "0.6875rem", color: "var(--sw-steel)" }}>
          {manufacturer}
        </div>
        <h4 className="ts-h2" style={{ marginTop: 2, fontSize: "1.125rem" }}>
          {name}
        </h4>
      </div>
      {specs && <div className="ts-caption" style={{ color: "var(--sw-steel)" }}>{specs}</div>}
      {fitHint && <div className="ts-caption" style={{ fontStyle: "italic" }}>{fitHint}</div>}
      <RatingLine rating={rating} reviewCount={reviewCount} price={price} />
      <AmazonButton href={href} />
    </div>
  );
}

// Header — sits above the expand button at the top of the entry. Tags + title + highlight.
// Always visible. (Mike 2026-05-27: expand button is the editorial differentiator and belongs
// at the top, right after the title, before products.)
function CompactHeader({ family }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {family.skills.map((s) => (
          <SkillChip key={s.label} label={s.label} color={s.color} />
        ))}
      </div>
      <div>
        <h3 className="ts-h2" style={{ margin: 0, fontSize: "1.5rem" }}>
          {family.title}
        </h3>
        {family.subtitle && (
          <div className="ts-caption" style={{ marginTop: 2 }}>
            {family.subtitle}
          </div>
        )}
      </div>
      {family.highlight && (
        <p className="ts-body" style={{ margin: 0, fontSize: "0.9375rem" }}>
          {family.highlight}
        </p>
      )}
    </div>
  );
}

// Footer — sits below the expand button + detail at the bottom of the entry. Products + CTAs.
// Always visible. For multi-version game families, two product blocks side-by-side. For affiliate
// books and pre-launch books, an inline cover block.
function CompactFooter({ family }) {
  const isPreLaunch = family.type === "practice-book-pre-launch";
  const isGameFamily = family.type === "game-family";
  const isAffiliateBook = family.type === "practice-book-affiliate";
  const isGamePreLaunch = family.type === "game-pre-launch";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {/* Sparkworks-built game in pre-launch — supports either a single `image` or an `images`
          array (e.g., box front + back rendered side-by-side). + subscribe form. */}
      {isGamePreLaunch && (
        <>
          {family.images && family.images.length > 1 ? (
            <div className="sw-grid-2" style={{ gap: 16 }}>
              {family.images.map((img) => (
                <div key={img.src} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div
                    style={{
                      height: 240,
                      background: "var(--sw-white)",
                      borderRadius: "var(--sw-radius-sm)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: 0,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                        objectPosition: "left center",
                        display: "block",
                      }}
                    />
                  </div>
                  {img.label && (
                    <div className="ts-caption" style={{ color: "var(--sw-steel)" }}>{img.label}</div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <CompactCover image={family.image || (family.images && family.images[0]?.src)} alt={`${family.title} cover`} />
          )}
          {family.body && (
            <p className="ts-body" style={{ margin: 0 }}>{family.body}</p>
          )}
          {family.subscribe && (
            <div>
              <SubscribeForm
                interests={family.subscribe.interests}
                source={family.subscribe.source}
                ctaLabel={family.subscribe.ctaLabel}
                successMessage={family.subscribe.successMessage}
              />
            </div>
          )}
        </>
      )}

      {/* Game family — one or more product blocks, side-by-side when multiple */}
      {isGameFamily && family.versions && family.versions.length > 0 && (
        family.versions.length > 1 ? (
          <div className="sw-grid-2" style={{ gap: 28 }}>
            {family.versions.map((v) => (
              <ProductBlock key={v.name} {...v} />
            ))}
          </div>
        ) : (
          <ProductBlock {...family.versions[0]} />
        )
      )}

      {/* Affiliate book — the entry header already carries the product name + author/manufacturer,
          so the product block here is just cover + specs + fitHint + CTA. No duplicated name. */}
      {isAffiliateBook && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              height: 220,
              background: "var(--sw-white)",
              borderRadius: "var(--sw-radius-sm)",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={family.image}
              alt={`${family.title} cover`}
              loading="lazy"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
                objectPosition: "left center",
                display: "block",
              }}
            />
          </div>
          {family.specs && <div className="ts-caption" style={{ color: "var(--sw-steel)" }}>{family.specs}</div>}
          {family.fitHint && <div className="ts-caption" style={{ fontStyle: "italic" }}>{family.fitHint}</div>}
          <RatingLine rating={family.rating} reviewCount={family.reviewCount} price={family.price} />
          <AmazonButton href={family.href} />
        </div>
      )}

      {isPreLaunch && (
        <>
          <PracticeBookPlaceholder size="compact" />
          {family.body && (
            <p className="ts-body" style={{ margin: 0 }}>{family.body}</p>
          )}
          {family.subscribe && (
            <div>
              <SubscribeForm
                interests={family.subscribe.interests}
                source={family.subscribe.source}
                ctaLabel={family.subscribe.ctaLabel}
                successMessage={family.subscribe.successMessage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ============================================================
// DETAIL — what appears when the card is expanded
// ============================================================

function GameFamilyDetail({ family }) {
  return (
    <>
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

      {/* Per-version notes — the picker copy that helps a parent choose between editions. Shown in
          detail (not compact) so the always-visible product blocks stay clean: cover + specs + CTA.
          Renders for every entry that has versions, including single-version families where the per-
          version `why` is product-specific reasoning distinct from the family-level whyWeRecommend. */}
      {family.versions && family.versions.length > 0 && (
        <div>
          <div className="ts-label" style={{ fontSize: "0.75rem", color: "var(--sw-steel)", marginBottom: 10 }}>
            {family.versions.length > 1 ? "More about each version" : "More about this version"}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {family.versions.map((v) => (
              <div key={v.name}>
                <div className="ts-label" style={{ fontSize: "0.75rem", color: "var(--sw-steel)" }}>
                  {v.manufacturer} · {v.name}
                </div>
                <p className="ts-body" style={{ marginTop: 4, fontSize: "0.9375rem" }}>{v.why}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {family.proTips && family.proTips.map((tip, i) => (
        <ProTip key={i} title={tip.title}>{tip.body}</ProTip>
      ))}

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
  // Affiliate book detail = the long-form body (the verbatim PCr `why` text).
  // Cover, specs, fitHint, price/rating, and Amazon CTA all live in the compact view now.
  return (
    <>
      {family.body && <p className="ts-body">{family.body}</p>}
    </>
  );
}

// Game-family detail also gets a per-version `why` block — already in GameFamilyDetail above.
// No changes needed there since price/rating live in the compact ProductBlock, not in detail.

function FamilyDetail({ family }) {
  // Pre-launch books surface the full body inline in the compact view, so the expand has
  // nothing to add. Returning null tells ExpandableCard to skip the expand button.
  if (family.type === "practice-book-pre-launch") {
    return null;
  }
  if (family.type === "practice-book-affiliate") {
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
            {/* Entries stack vertically (Mike 2026-05-27: "one at a time like on mobile"). */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {sparkworksBuilt.map((f) => (
                <ExpandableCard
                  key={f.slug}
                  slug={f.slug}
                  expandLabel={
                    f.expandLabel ||
                    (f.versions && f.versions.length > 1 ? "Why we love them" : "Why we love it")
                  }
                  summary={<CompactHeader family={f} />}
                  detail={<FamilyDetail family={f} />}
                  footer={<CompactFooter family={f} />}
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
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {recommended.map((f) => (
                <ExpandableCard
                  key={f.slug}
                  slug={f.slug}
                  expandLabel={
                    f.expandLabel ||
                    (f.versions && f.versions.length > 1 ? "Why we love them" : "Why we love it")
                  }
                  summary={<CompactHeader family={f} />}
                  detail={<FamilyDetail family={f} />}
                  footer={<CompactFooter family={f} />}
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
            Some links on this page are affiliate links. Sparkworks is an Amazon Associate; we earn from qualifying purchases at no extra cost to you. Price and rating data shown is as of 2026-05-27 and may have changed — check Amazon for the latest.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
