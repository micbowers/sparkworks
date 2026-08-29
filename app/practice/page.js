import { SiteHeader } from "../components/SiteHeader";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { SubscribeForm } from "../components/SubscribeForm";
import { ProTip } from "../components/ProTip";
import { ExpandableCard } from "../components/ExpandableCard";
import { AmazonButton } from "../components/AmazonButton";
import { TrackedAnchor } from "../components/TrackedAnchor";

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
        // Amazon snapshot 2026-08-16 (was $39.05 / 4.5 / 489 on 2026-06-01).
        // Price rose 25.5% — Amazon is the seller of record, listing In Stock. Flagged to Mike.
        price: "$48.99",
        priceUpdated: "2026-08-16",
        rating: 4.6,
        reviewCount: 592,
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
        // Amazon snapshot 2026-08-16 (price held; rating 4.6 → 4.4, count 164 → 165).
        price: "$15.99",
        priceUpdated: "2026-08-16",
        rating: 4.4,
        reviewCount: 165,
        why:
          "Same game, sized up. Two more colors and a longer code push the puzzle past what a kid can hold in their head — they have to write things down, or organize their unused colors on the side of the board. That’s the strategy lesson made physical — the board does the remembering so the kid can do the thinking. This is the version we play with kids in grades 4–6 during the Sparkworks strategy session.",
        href: "https://amzn.to/4dINIH5",
      },
    ],
  },

  // -------- Game family: Shisima & Nine Men's Morris --------
  {
    type: "game-family",
    slug: "morris-shisima",
    title: "Shisima & Nine Men's Morris",
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
      "During the game theory session (week 7) of our 8-session Sparkworks program. We played Nine Men's Morris with both age groups and it worked well across the board. Shisima is a simpler, faster cousin — fewer pieces, shorter games — and some younger kids may take to it more readily. Same underlying lesson, different pace.",
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
        // Amazon snapshot 2026-08-16. The "2 reviews" read is CONFIRMED REAL, not a parser error —
        // two independent fetches both returned acrCustomerReviewText "(2)" on a genuinely small
        // listing, so the count is now surfaced. Rating corrected 4.7 → 4.5 (authoritative
        // acrPopover value; the old 4.7 came from a mis-matched module on the page).
        price: "$16.95",
        priceUpdated: "2026-08-16",
        rating: 4.5,
        reviewCount: 2,
        why:
          "A Kenyan strategy game from the Tiriki tradition, played on an octagonal star with a central point called “shisima” — meaning “body of water.” Three pieces per player, simple movement along the lines, but the same game-theoretic challenge as its bigger Morris cousins: every move sets up or blocks a three-in-a-row, and the smart move depends on what your opponent is about to do. The small board and fast games make this the right pick for kids in grades 2–3 — or any family that wants an accessible introduction to this kind of game before stepping up to Nine Men's Morris.",
        href: "https://amzn.to/49rnF6d",
      },
      {
        name: "Nine Men's Morris",
        manufacturer: "WE Games",
        specs: "Wooden board · 9 pieces per player · 24 board positions",
        fitHint: "Grades 2 and up · fun for adults too",
        image: "/practice/nine-mens-morris-wegames.jpg",
        // Amazon snapshot 2026-08-16. The earlier "1 review" WAS a parser error, as suspected —
        // the authoritative acrCustomerReviewText reads 78. Count now surfaced; rating holds at 4.7.
        price: "$15.99",
        priceUpdated: "2026-08-16",
        rating: 4.7,
        reviewCount: 78,
        why:
          "The classic nine-piece, three-squares-nested board is where the strategy gets real — kids have to manage their own developing mills AND track the threat of their opponent's near-mills, sometimes both in the same turn. WE Games' wooden edition is the kind of board that lives on a shelf for years and gets pulled out for rainy Saturdays. This is the version we play with kids in grades 4–6 during the game theory session of the Sparkworks program.",
        href: "https://amzn.to/4x11gH1",
      },
    ],
  },

  // -------- Game family: Rummikub --------
  // Added 2026-08-28 (Mike supplied both affiliate links). Not used in a class session, so no
  // sessionPill / whereWeUseIt — the grade guidance lives in each version's fitHint and `why`.
  // Canonical copy: SPARKWORKS_ENDORSEMENTS.md → "Rummikub — the classic rummy tile game".
  {
    type: "game-family",
    slug: "rummikub",
    title: "Rummikub",
    subtitle: "Pressman · classic & six-player",
    headlineImage: "/practice/rummikub-original-pressman.jpg",
    highlight: "The tile game where the whole table is yours to rearrange.",
    skills: [
      { label: "Pattern Detection", color: "purple" },
      { label: "Constraints", color: "blue" },
      { label: "Strategy", color: "teal" },
    ],
    whatItIs:
      "Each player starts with a rack of numbered tiles in four colors. Your first play of the round has to total at least 30 points, using only tiles from your own rack. After that you lay down runs (three or more consecutive numbers in a single color) and groups (the same number in three or four different colors) — and here is the twist that makes it a thinking game: once tiles are on the table they belong to everybody. On your turn you may split, borrow from, and rebuild anything already played, as long as every set on the table is legal again when you take your hands away. First player to empty their rack wins the round.",
    whyWeRecommend: (
      <>
        Rummikub is one of the few family games where the puzzle gets <em>harder</em> as the game goes on, and where the best move is almost never the first one you see. Three of the thinking skills our Sparkworks program teaches show up on every single turn: <strong>pattern detection</strong> (finding the run or group hiding inside a rack of loose tiles), <strong>constraints</strong> (you may move anything on the table, provided every set is legal again when you&rsquo;re done — the rule doesn&rsquo;t block the play, it points to it), and <strong>strategy</strong> (holding a tile you <em>could</em> play because it&rsquo;s worth more to you two turns from now). It also produces one of the best pause-think-act moments in tabletop games: the turn where a kid stops staring at their own rack, looks at the whole table instead, and finds the rearrangement that lets them unload six tiles at once. Grade 3 and up can hold a rack of their own at a family table; younger kids do well playing a shared rack with a grown-up for the first few rounds.
      </>
    ),
    proTips: [
      {
        title: "Play the table, not your rack",
        body: (
          <>
            <p style={{ margin: 0 }}>
              New players treat their rack as the whole puzzle. It isn&rsquo;t — the tiles already on the table are just as much yours to use. Three habits that follow from that:
            </p>
            <ol style={{ margin: "12px 0", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: 12 }}>
                <strong>Read the table before you read your rack.</strong> Every turn — once you&rsquo;ve made your opening play — look at what&rsquo;s already down <em>first</em>. Those tiles are yours to rearrange — a run of five can be split, a group of three can take a fourth color. Most turns that look like &ldquo;I have no play&rdquo; have one hiding on the table.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Hunt for the missing color.</strong> A group on the table with three colors will accept the fourth. It&rsquo;s the cheapest play in the game, and new players walk straight past it every time.
              </li>
              <li>
                <strong>Don&rsquo;t play a tile just because you can.</strong> The tile that fits somewhere right now may be the one tile that unlocks four tiles later. Ask &ldquo;what does this cost me?&rdquo; before you let it go. Late in a round, one held tile is often worth more than three played ones.
              </li>
            </ol>
          </>
        ),
      },
    ],
    versions: [
      {
        name: "Rummikub",
        manufacturer: "Pressman",
        specs: "106 tiles · 4 racks · 2–4 players",
        fitHint: "Grades 3 and up · fun for adults too",
        image: "/practice/rummikub-original-pressman.jpg",
        // ⚠️ Amazon check 2026-08-28 — NO NEW COPIES CURRENTLY OFFERED. The buybox is a
        // USED - Very Good offer ($19.90, "Only 1 left in stock", sold by Amazon Resale); the
        // condition tab reads "Used (18)" and the page renders no new-offer row at all.
        // Same failure mode as Perfectly Logical! (2026-08-16), so the same treatment:
        // → price set to null so no price renders. A used price must never sit beside a
        //   "Buy on Amazon" CTA. Rating + review count are accurate and still render, and
        //   priceUpdated stays set so the "Amazon data updated" caption still stamps them.
        // → The `why` copy also stops saying "buy this one" while stock is used-only (QA HIGH-2).
        // This is an in-print mass-market game, so new stock will likely return — re-check at
        // the next quarterly refresh (due 2026-11-14). [Web] SPK task filed.
        price: null,
        priceUpdated: "2026-08-28",
        rating: 4.8,
        reviewCount: 35011,
        why:
          "The default edition, and the one most families mean when they say Rummikub — 106 tiles, four racks, two to four players. If your table is four or fewer, this is the one to look for: same rules and the same tiles as the bigger set, just fewer of them, and the smaller tile pool keeps rounds moving. Worth counting your regular players first, though — it caps at four, and Rummikub is at its best with a full table. New copies come and go on Amazon; if the listing is showing used only, the six-player edition here plays the identical game.",
        href: "https://amzn.to/3UK2Huy",
      },
      {
        name: "Rummikub Six Player Edition",
        manufacturer: "Pressman",
        specs: "160 tiles · 6 racks · 2–6 players",
        fitHint: "Grades 3 and up · fun for adults too",
        image: "/practice/rummikub-six-player-pressman.jpg",
        // Amazon snapshot 2026-08-28. New-condition buybox, In Stock, ships from and sold by
        // Amazon.com — clean listing.
        price: "$32.99",
        priceUpdated: "2026-08-28",
        rating: 4.8,
        reviewCount: 7134,
        why:
          "The same game with room for two more chairs — 160 tiles and six racks instead of 106 and four. Buy this one if a fifth player turns up with any regularity: a cousin, a grandparent, a friend after school. It still plays anywhere from two to six, so it isn’t a specialty set you break out twice a year — it’s the classic game with the ceiling raised. More tiles on the table also means more of the rearranging that makes Rummikub a thinking exercise rather than a card game with tiles.",
        href: "https://amzn.to/4zOvY7G",
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
    // ⚠️ Amazon check 2026-08-16 — NO NEW COPIES CURRENTLY OFFERED. The buybox is a USED - Good
    // offer ($6.16, "Only 1 left in stock", ships from third-party reseller Gulf Coast Books LLC);
    // the page renders only a `usedAccordionRow` with no `newAccordionRow` at all. The old $12.99
    // new-copy price is therefore both stale AND unpurchasable, and $6.16 is a used price we must
    // not present as the product price next to a "Buy on Amazon" affiliate CTA.
    // → price set to null so no price renders (RatingLine no-ops on a null price).
    //   Rating + review count still render and are accurate.
    // → priceUpdated RESTORED 2026-08-28 (QA HIGH-1): it was nulled alongside price on 2026-08-16,
    //   which left a ★4.6 (4,419) on the card with no capture date while the page footer claimed
    //   ratings carry one. The caption now reads "Amazon data updated" and covers the rating too.
    // → Whether to keep recommending a book with no new supply is Mike's editorial call; [SW] task filed.
    price: null,
    priceUpdated: "2026-08-16",
    // reviewCount was 5849 — that WAS a parser error (STATUS 2026-06-09 flagged it as suspect).
    // Authoritative acrCustomerReviewText = 4,419; acrPopover rating = 4.6 (was showing 4.7).
    rating: 4.6,
    reviewCount: 4419,
    body:
      "100 puzzles across 10 chapters of increasing difficulty — logic grids, cryptograms, secret codes, and Sudoku — from elementary teacher Jenn Larson (20+ years in the classroom). Three of the thinking skills our Sparkworks program teaches show up directly: elimination (the logic grids drill the same reasoning as our second session), hidden-rule hunting (the cryptograms map to our fourth session), and constraint navigation (Sudoku is the same skill as our third). A good solo-practice companion for kids who love the games we play in class — workable between sessions, or after a kid has wrapped the program.",
    href: "https://amzn.to/4e5VEnc",
  },

  // -------- Free Sparkworks game: Find The Alien --------
  {
    type: "game-free-play",
    slug: "find-the-alien",
    title: "Find The Alien",
    subtitle: "Free · Play in your browser",
    highlight: "Ask good questions. Eliminate the impossible.",
    skills: [
      { label: "Elimination", color: "purple" },
      { label: "Pattern Detection", color: "purple" },
    ],
    image: "/practice/find-the-alien-cover.png",
    imageAlt: "Find The Alien — Dax the alien (the game's social-share mascot)",
    href: "https://findthealien.sparkworks.kids/",
    sessionPill: "Used in our elimination session",
    whatItIs:
      "Two modes: Team Match (teams take turns asking yes/no questions; whoever eliminates the most aliens wins the Detective trophy) and Solo Score-Attack (find the alien on your own — score is the number of questions you needed, beat your personal best). 24 alien characters with distinct features kids learn to look at and ask about.",
    whyWeRecommend:
      "The kids who win Find The Alien consistently aren't the ones who guess fastest — they're the ones who design each question to eliminate as many possibilities as possible. That's the same elimination skill that solves Mastermind, logic grids, and any puzzle where you narrow down options under uncertainty. We use Find The Alien with kids in grades 2–3 during our elimination session; it plays just as well at home with kids and grown-ups taking turns being the question-asker.",
  },

  // -------- Free Sparkworks game: Knight's Tour --------
  {
    type: "game-free-play",
    slug: "knights-tour",
    title: "Knight's Tour",
    subtitle: "Free · Play in your browser",
    highlight: "A 1,200-year-old chess puzzle. Visit every square exactly once.",
    skills: [
      { label: "Strategy", color: "teal" },
      { label: "Pattern Detection", color: "purple" },
    ],
    image: "/practice/knights-tour-cover.png",
    href: "https://knightstour.sparkworks.kids/",
    sessionPill: "Used as a warm-up in our game theory session",
    whatItIs:
      "A knight on a chess board has to visit every square exactly once — using only the knight's L-shaped move. The puzzle is over a thousand years old: first written down in 9th-century India, formalized by Euler in 1759. Easy to understand, surprisingly hard to solve. Board sizes from 5×5 up; hints and tip-cards available if you get stuck.",
    whyWeRecommend:
      "The kids who solve Knight's Tour first don't try to plot the whole path up front — they look at each move and ask “which square has the fewest exits left?” Move there first, before it gets cornered. That heuristic (mathematicians call it Warnsdorff's rule) is the same forward-thinking we teach in our game theory session: pick moves that protect your future options, not just your current best play.",
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

function ProductBlock({ name, manufacturer, specs, fitHint, href, image, price, priceUpdated, rating, reviewCount, source }) {
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
      {priceUpdated && <PriceUpdatedLine date={priceUpdated} />}
      <AmazonButton
        href={href}
        product={name}
        manufacturer={manufacturer}
        price={price}
        rating={rating}
        source="practice-product-block"
      />
    </div>
  );
}

// Per-entry "Amazon data updated: YYYY-MM-DD" caption. The Amazon Associates Operating Agreement
// requires disclosing when displayed data was captured, since live-API pricing isn't wired up yet —
// and it covers RATINGS AND REVIEW COUNTS, not just price. Renamed from "Price updated" 2026-08-28
// (QA — Content Creation, HIGH-1): two products (Perfectly Logical!, Rummikub Classic) have their
// price suppressed because Amazon shows no new copies, but still display a ★ rating. Under the old
// price-only label those cards rendered a rating with no date at all, which contradicted the
// page-footer disclosure ("Prices AND RATINGS shown were captured on the dates noted under each
// product"). The date is now about the Amazon snapshot as a whole, so it renders whenever there is
// any Amazon data on the card. Set `priceUpdated` on every product, price or no price.
// Small, italic, muted — sits between the rating/price line and the Buy button.
function PriceUpdatedLine({ date }) {
  return (
    <div className="ts-caption" style={{ color: "var(--sw-steel)", fontStyle: "italic", fontSize: "0.6875rem", opacity: 0.75 }}>
      Amazon data updated: {date}
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
  const isFreePlay = family.type === "game-free-play";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {/* Free Sparkworks-built browser game — cover + Play-free CTA. No price/rating, no Amazon
          button. Teal-success button visually differentiates from the Amazon black/gold button. */}
      {isFreePlay && (
        <>
          <CompactCover image={family.image} alt={family.imageAlt || `${family.title} cover`} />
          <TrackedAnchor
            className="sw-btn sw-btn-success"
            href={family.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ alignSelf: "flex-start" }}
            event="game_play_click"
            eventProps={{ game: family.slug, source: "practice-play-free" }}
          >
            Play free →
          </TrackedAnchor>
        </>
      )}

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
          {family.priceUpdated && <PriceUpdatedLine date={family.priceUpdated} />}
          <AmazonButton
            href={family.href}
            product={family.title}
            manufacturer={family.subtitle}
            price={family.price}
            rating={family.rating}
            source="practice-affiliate-book"
          />
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
          <section className="sw-section" id="we-recommend" style={{ marginTop: 0 }}>
            {/* Section header dropped 2026-05-27 (Mike): with the Sparkworks-built section hidden,
                there's nothing to distinguish "We recommend" from — the hero already frames the page.
                Re-add the h2 when the Built-by-us section comes back. */}
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
            Some links on this page are affiliate links. Sparkworks is an Amazon Associate; we earn from qualifying purchases at no extra cost to you. Prices and ratings shown were captured on the dates noted under each product and may have changed — check Amazon for the latest.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
