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
    "Games, books, and class materials the Sparkworks program plays and recommends — tagged by the thinking skills they build, for practice between sessions.",
};

// ============================================================
// AMAZON DATA DISPLAY — OFF. Do not flip without reading this.
// ============================================================
// Every product below carries a real price / rating / reviewCount captured 2026-09-01 and verified
// independently. The data is accurate. It is NOT DISPLAYED, and that is deliberate.
//
// Amazon Associates Operating Agreement §5 requires displayed price, availability, rating and review
// count to be refreshed at least every 24 hours, or served live from PA-API. `affiliate-links.md`
// rule 1 states the default plainly: "Don't display price or availability unless you have a daily
// refresh mechanism in place... If PA-API isn't wired up and there's no scheduled refresh, the
// default is don't show the price." Rule 4 adds that a manual daily commitment counts only if it is
// actually kept, and treats a missed day as a ship-blocking incident.
//
// We have no such mechanism yet. The refresh job ([Web] SPK, trigger.dev) is unbuilt and PA-API is
// gated on qualifying sales. Publishing accurate-today data with nothing keeping it accurate
// tomorrow converts "16 days stale" into "stale by morning" — better, but still a violation, and
// Section 5 is the most common cause of Associates account termination. Losing the account costs the
// entire affiliate revenue stream; showing no price costs a little conversion.
//
// The captured values are kept in the file rather than deleted so that flipping this flag is the
// whole job once a refresh mechanism exists.
//
// FLIP TO true ONLY WHEN: PA-API is wired, OR a scheduled job refreshes these values daily. Not when
// someone intends to run tools/amazon_refresh.ps1 by hand.
const SHOW_AMAZON_DATA = false;

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
        // Amazon snapshot 2026-09-01. In Stock, ships from Amazon. New-condition buybox.
        // Price history: $39.05 (06-01) → $48.99 (08-16) → $47.99 now. Still ~23% above June.
        price: "$47.99",
        priceUpdated: "2026-09-01",
        rating: 4.6,
        reviewCount: 603,
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
        // Amazon snapshot 2026-09-01. In Stock, ships from Amazon. New-condition buybox.
        // Unchanged since 08-16 on every field.
        price: "$15.99",
        priceUpdated: "2026-09-01",
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
        // Amazon snapshot 2026-09-01. New-condition buybox, price and rating unchanged — but stock is
        // thin and the seller has changed: "Only 1 left in stock", ships from and sold by Red Hen Books
        // & Toys, a third-party seller, not Amazon. Not a compliance problem (the offer is new), but
        // this is the listing most likely to go unavailable next. Watch it.
        price: "$16.95",
        priceUpdated: "2026-09-01",
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
        // Amazon snapshot 2026-09-01. In Stock, ships from Amazon. New-condition buybox.
        // Price and rating held; review count 78 → 77.
        price: "$15.99",
        priceUpdated: "2026-09-01",
        rating: 4.7,
        reviewCount: 77,
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
        // the next refresh. NOTE: the old "quarterly (due 2026-11-14)" cadence is superseded — a
        // quarterly cadence cannot satisfy the 24-hour rule, which is why Amazon data is currently
        // not displayed at all (see SHOW_AMAZON_DATA at the top). Re-check when the daily refresh
        // job lands. [Web] SPK task filed.
        // Re-checked 2026-09-01. DECISION UNCHANGED — price stays null — but the earlier reasoning
        // here was wrong and is corrected (QA pass 2):
        // ✗ This listing is NOT structurally absent. It returns availability "In Stock" and ships
        //   from Amazon.com, so it looks clean and would PASS the no-buybox test in
        //   tools/amazon_refresh.ps1. It is not the Perfectly Logical! / Logic Land signature.
        // ✗ "Currently unavailable" appearing in the page source is NOT evidence — that string also
        //   matches on the Clue mirror edition, which has a perfectly good new buybox.
        // ✓ The actual evidence is the price itself: $19.90 is the exact Used - Very Good Amazon
        //   Resale figure recorded on 2026-08-28. Amazon Resale fulfils from Amazon.com and shows
        //   In Stock, which is precisely why a used buybox reads as clean here.
        // Lesson: an Amazon-fulfilled USED buybox defeats the structural test. Condition has to be
        // read directly. Rating and review count are live and refresh normally.
        price: null,
        priceUpdated: "2026-09-01",
        rating: 4.8,
        reviewCount: 35015,
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
        // Amazon snapshot 2026-09-01. New-condition buybox, In Stock, ships from and sold by
        // Amazon.com — clean listing. Price held; review count 7,134 → 7,132.
        price: "$32.99",
        priceUpdated: "2026-09-01",
        rating: 4.8,
        reviewCount: 7132,
        why:
          "The same game with room for two more chairs — 160 tiles and six racks instead of 106 and four. Buy this one if a fifth player turns up with any regularity: a cousin, a grandparent, a friend after school. It still plays anywhere from two to six, so it isn’t a specialty set you break out twice a year — it’s the classic game with the ceiling raised. More tiles on the table also means more of the rearranging that makes Rummikub a thinking exercise rather than a card game with tiles.",
        href: "https://amzn.to/4zOvY7G",
      },
    ],
  },

  // -------- Game family: SKYJO --------
  // Added 2026-09-01 (Mike supplied the affiliate link; verified to resolve to B06XZ9K244 carrying
  // tag=sparkworks-20). Not used in a class session, so no sessionPill / whereWeUseIt — the grade
  // guidance lives in whyWeRecommend and the version fitHint, same treatment as Rummikub.
  // Canonical copy: SPARKWORKS_ENDORSEMENTS.md → "SKYJO — the lowest-score card game".
  //
  // Product image saved 2026-09-01 (Amazon listing image for this ASIN, same treatment as the
  // other product shots in /public/practice). Box art confirms 8+ / 2-8 players / 30 min.
  //
  // ℹ️ FIRST USE OF AN EMBER SKILL CHIP. The six skills tagged so far map purple (S1/S2), blue
  //    (S3/S4), teal (S6/S7); Estimation (S5) had no color because no endorsement carried the tag
  //    until now. Ember is the semantically correct pick — globals.css assigns it to Section 3,
  //    "Decide Without All the Facts," which is Estimation. But Ember is a rationed brand color and
  //    this chip sits in the always-visible compact header, unlike the Pro Tip callouts which are
  //    behind an expand. Flagged to Design for a ruling; swap to blue if the ration budget says no.
  {
    type: "game-family",
    slug: "skyjo",
    title: "SKYJO",
    subtitle: "magilano",
    headlineImage: "/practice/skyjo-magilano.jpg",
    highlight: "Half your hand is face down — and that's the whole game.",
    skills: [
      { label: "Estimation", color: "ember" },
      { label: "Strategy", color: "teal" },
      { label: "Game Theory", color: "teal" },
    ],
    whatItIs:
      "Each player gets twelve cards laid face down in a grid — three rows of four — and turns two of them face up to start. The cards run from -2 to 12, and the goal is the reverse of most card games: you want the lowest total. On your turn you either take the face-up card off the discard pile and swap it into your grid, or draw a fresh card from the deck — and if you draw, you can either swap it in or throw it away and flip one of your own face-down cards instead. Any column where all three cards match is pulled out of the game and scores nothing at all. The round ends the moment one player has their whole grid face up; everyone else takes one last turn, then all cards are turned over and totalled. But the player who ended the round has to finish with the lowest score of anyone at the table — miss, and their points for that round are doubled. Play continues round after round until somebody crosses 100 points, and the player with the fewest points wins.",
    whyWeRecommend: (
      <>
        Most family card games ask a kid to play the cards they can see. SKYJO asks them to reason about the ones they can&rsquo;t. Half the grid is face down at any moment, and nearly every turn is a bet on what&rsquo;s underneath — which makes it the clearest example we&rsquo;ve found of <strong>estimation</strong>, the calibrated-reasoning-under-uncertainty skill our fifth session teaches. Two more skills sit alongside it. <strong>Strategy</strong>: a matched column vanishes from your score entirely, so strong players aren&rsquo;t shaving one point off one card at a time — they&rsquo;re building toward something three turns out and passing up small gains to get there. And <strong>game theory</strong>: because closing the round backfires if you aren&rsquo;t actually ahead, deciding when to end it is never a read on your own grid alone. It&rsquo;s a read on the player across the table. Kids in grades 3 and up hold their own at a family table. Grade 2 works well playing alongside a grown-up — the thinking lands early, but the scoring is real arithmetic across twelve cards including negatives, and that part takes a while to come.
      </>
    ),
    proTips: [
      {
        title: "A face-down card is worth about 5",
        body: (
          <>
            <p style={{ margin: 0 }}>
              Add up every card in the SKYJO deck and divide by 150 and you land just a hair over 5. That single number turns most of the game&rsquo;s decisions from guesswork into arithmetic — because you always <em>see</em> the card coming in, so the only real question is what you give up for it.
            </p>
            <ol style={{ margin: "12px 0", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: 12 }}>
                <strong>Five is the break-even line.</strong> Drew a 2? Put it over a face-down card. You&rsquo;re trading something that averages 5 for a known 2, and you come out about three points ahead. Drew a 9 from the deck? Don&rsquo;t put it over a face-down card — either drop it on a high card you already have showing, or discard it and flip instead. The instinct runs the other way, and it costs points every time.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Count what&rsquo;s already gone.</strong> The discard pile is face up and anyone may read it. Once the -2s and -1s have been played, &ldquo;about 5&rdquo; drifts closer to 6, and the break-even line moves with it. Adjusting your estimate as the evidence comes in is the whole skill — the starting number is only where you begin.
              </li>
              <li>
                <strong>Ending the round is a bet, not a victory lap.</strong> Flipping your last card ends the round for everyone — but finish without the lowest score and your points for that round double. Before you close, look at what everybody else is showing. Closing while you&rsquo;re sitting on a 12 because you&rsquo;re impatient is how a won round turns into a lost one.
              </li>
            </ol>
          </>
        ),
      },
    ],
    versions: [
      {
        name: "SKYJO",
        manufacturer: "magilano",
        specs: "150 cards · values -2 to 12 · 2–8 players",
        fitHint: "Grades 3 and up · fun for adults too",
        image: "/practice/skyjo-magilano.jpg",
        // Amazon snapshot 2026-09-01. In Stock, ships from Amazon, sold by magilano. New-condition
        // buybox — no used-offer row on the page.
        price: "$19.95",
        priceUpdated: "2026-09-01",
        rating: 4.8,
        reviewCount: 75893,
        why:
          "The original, and the one to start with. It’s a deck of cards and a scorepad in a small box, which makes it the rare thinking game that travels — a restaurant table, a car trip, a cabin with no wifi. It also scales further than most: two players works, and so does eight, which is unusual for a game with this much decision-making in it. magilano also publishes a companion game, SKYJO Action, which adds action cards to the same core; we’d point families at the plain version first. The estimation work is cleanest without them, and the extra chaos makes it harder for a kid to tell that a good round came from good judgment rather than good luck.",
        href: "https://amzn.to/4xRd7HL",
      },
    ],
  },

  // -------- Game family: SET --------
  // Added 2026-09-01. Link verified → B00000IV34 with tag=sparkworks-20.
  // Canonical copy: SPARKWORKS_ENDORSEMENTS.md → "SET — the visual pattern game".
  // Product image saved 2026-09-01. The box art resolves two open questions: it reads "6-99" and
  // "20 MINS", so 6+ is the manufacturer's own rating and the duration is 20 minutes, not the ~15
  // our 2026-04-30 Block Code audit had. Copy corrected to 20.
  // ✅ Age SETTLED by Mike 2026-09-01: use 6+, do not change it to match the listing. The box reads
  //    6-99 and PlayMonster/Wikipedia agree; this Amazon listing's title says "For Ages 8+". A parent
  //    clicking through sees 8+ — that mismatch is known and accepted. The box is the product.
  // ⚠️ Mike: SET is the "price-floor anchor" in Block Code's competitive audit. Endorsing a
  //    same-category game at a fifth of Block Code's price is defensible and arguably builds trust,
  //    but it's a commercial call that belongs to you. See the note in SPARKWORKS_ENDORSEMENTS.md.
  {
    type: "game-family",
    slug: "set",
    title: "SET",
    subtitle: "SET Enterprises",
    headlineImage: "/practice/set-setenterprises.jpg",
    highlight: "Eighty-one cards, no two alike. Everyone plays at once.",
    skills: [
      { label: "Pattern Detection", color: "purple" },
      { label: "Constraints", color: "blue" },
    ],
    whatItIs:
      "Eighty-one cards, no two alike. Every card shows one, two, or three shapes; the shapes are diamonds, squiggles, or ovals; each is solid, striped, or open; and each is red, green, or purple. Four features, three options apiece — which is exactly 81 combinations, one card each. Twelve cards go face up and everyone plays at once, hunting for a “set”: three cards where each of the four features is either the same across all three or different across all three. All three red, or one of each color — never two-and-one. Spot one, say so, take the cards, and three more fill the gap. If nobody can find a set among the twelve, three more come down. When the deck runs out, whoever collected the most sets wins. There are no turns and no waiting — everyone is looking at the same twelve cards the entire game. The game came out of genetics research: Marsha Jean Falco was studying whether epilepsy was inherited in German Shepherds, and rather than rewriting her data she drew symbols on file cards to represent each dog's combination of genes. Explaining the patterns to the veterinarians, she noticed people kept wanting to hunt for combinations for the fun of it. That was 1974; the deck reached shelves in 1991.",
    whyWeRecommend: (
      <>
        SET trains the half of <strong>pattern detection</strong> that is hardest to practice — the letting go. Its signature failure is the near-miss: three cards that agree on number, on shape, and on shading, and then the colors come out two-and-one. A kid locks on, is certain, calls it, and is wrong. Learning to check the fourth feature before committing, and to drop a pattern you were sure about, is exactly what our first session teaches — and SET produces that moment every few minutes instead of once a game. The second skill is <strong>constraints</strong>. The all-same-or-all-different rule reads like a restriction and is actually the fastest search tool in the game: take any two cards and there is exactly one card in the whole deck that completes a set with them, and you can work out what it looks like feature by feature. A kid who discovers that stops scanning at random and starts asking a question that has one specific answer. It is also among the most accessible things we recommend — no turns, so nobody waits their way out of the game; rated 6 and up, and only Clue Junior at 5+ goes younger; and a full game runs about twenty minutes. For younger kids, deal from the solid-shading cards only: that is 27 cards varying in just number, shape, and color, and every rule still works exactly as written.
      </>
    ),
    proTips: [
      {
        title: "Every pair has exactly one partner",
        body: (
          <>
            <p style={{ margin: 0 }}>
              Eighty-one cards, and one fact about them that changes how you look at the table. The obvious way to hunt is in threes — pick up three cards, check them, put them back — but there are 220 ways to choose three out of twelve, so that search takes a while. There is a much faster question to ask, and it is the whole reason strong players look at the table differently.
            </p>
            <ol style={{ margin: "12px 0", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: 12 }}>
                <strong>Any two cards have exactly one card that completes them.</strong> Take two, go feature by feature. Same number on both? The third has that number too. Two different shapes? The third has the shape neither of them has. Same for shading, same for color. Four small questions and you know precisely what you&rsquo;re looking for — now you&rsquo;re scanning for one specific card instead of testing combinations.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>&ldquo;I don&rsquo;t see one&rdquo; almost never means there isn&rsquo;t one.</strong> At the start of a game, the odds that twelve cards hold no set at all are about one in thirty. So when the table goes quiet, the honest read is that everyone is looking wrong, not that the deal is dead. Keep going a little past the point where it feels reasonable.
              </li>
              <li>
                <strong>Name all four features out loud before anyone touches the cards.</strong> Number, shape, shading, color. Nearly every wrong call in SET is three cards that match on three features and break on the fourth — and the fourth is the one nobody checks. Two seconds of saying it aloud saves the argument.
              </li>
            </ol>
          </>
        ),
      },
    ],
    versions: [
      {
        name: "SET",
        manufacturer: "SET Enterprises",
        specs: "81 cards · 4 features × 3 values · 1+ players · about 20 min",
        fitHint: "Ages 6 and up · fun for adults too",
        image: "/practice/set-setenterprises.jpg",
        // Amazon snapshot 2026-09-01. In Stock, ships from and sold by Amazon.com. New-condition buybox.
        price: "$12.99",
        priceUpdated: "2026-09-01",
        rating: 4.8,
        reviewCount: 7041,
        why:
          "The standard 81-card deck in the small box — the one to get, and the edition schools and libraries tend to stock. It’s cards only: no board, no timer, no batteries, which is why it works on a tray table at 30,000 feet and why a classroom can run six copies at once. A collector’s tin edition circulates at a higher price with the identical deck inside; the difference is the container, not the game. If a kid can sort by color and count to three, this is where to start.",
        href: "https://amzn.to/3UvO8Ld",
      },
    ],
  },

  // -------- Game family: Clue & Clue Junior --------
  // Added 2026-09-01. Both links verified → B07RTZBP93 / B07BMJPPXV, each with tag=sparkworks-20.
  // Canonical copy: SPARKWORKS_ENDORSEMENTS.md → "Clue & Clue Junior — the deduction classic".
  // Product images saved 2026-09-01. The Clue box art confirms the copy's two specific claims:
  // "NOW WITH CARD-REVEALING MIRROR!" and "x3 1.5V AAA ALKALINE BATTERIES REQUIRED" (demo batteries
  // included). Note the listing title now reads "(Amazon Exclusive)" and doesn't mention the mirror,
  // but the product image and 30+ mirror references on the page confirm this ASIN is that edition.
  {
    type: "game-family",
    slug: "clue",
    title: "Clue & Clue Junior",
    subtitle: "Hasbro Gaming",
    headlineImage: "/practice/clue-hasbro.jpg",
    highlight: "The answer is whatever nobody is holding.",
    skills: [
      { label: "Elimination", color: "purple" },
      { label: "Strategy", color: "teal" },
    ],
    whatItIs:
      "Three cards — a person, a weapon, a room — are set aside at the start and nobody sees them. Every other suspect, weapon and room card is dealt out around the table. That is the whole trick: the answer is defined entirely by what is missing from everyone's hands. On your turn you move to a room and make a suggestion — Professor Plum, in the library, with the candlestick — and the players check their hands. The first one who can disprove any part of it shows you a single card, privately, so you learn one thing and the rest of the table only learns that something was shown. Cross it off and move on. Rule out enough and one combination is left standing; then you accuse. The game came out of the Birmingham blackouts: Anthony Pratt, an English musician, spent the WWII air raids at home thinking about the murder-mystery parlour games he'd watched at the private parties he played, and about the detective novels everyone was reading. He and his wife Elva designed it between them. He filed the patent in 1944 and was granted it in 1947, but post-war shortages held the launch until Waddingtons published it in 1949 — as Cluedo, “clue” plus ludo, Latin for “I play.”",
    whyWeRecommend: (
      <>
        Clue is the purest <strong>elimination</strong> game a family can buy, and the one where the skill is most visible. The detective notepad works the way our second session teaches kids to think — you win by ruling things out, and there is no other way to win. No clever gambit and no lucky draw rescues you; you narrow the field until a single answer is left standing. What separates a strong player from a kid crossing off boxes at random is <strong>strategy</strong> in the suggestions: a good suggestion is built to eliminate as much as possible, and the best ones sometimes include a card you are holding yourself — because then whatever you&rsquo;re shown has to be one of the other two. Deliberately asking a question you already partly know the answer to, in order to sharpen what the answer tells you, is the most transferable idea in the game. Clue also does something almost no other family game does: it makes the questions other people ask into free information. When someone makes a suggestion and three players pass before anyone can disprove it, that is a fact about three hands, handed to the whole table at no cost. Half the information in a game of Clue is generated on somebody else&rsquo;s turn, and it is there for anyone willing to write it down.
      </>
    ),
    proTips: [
      {
        title: "Ask about a card you're already holding",
        body: (
          <>
            <p style={{ margin: 0 }}>
              These are for the full game — Clue Junior works differently, since nobody there is answering your questions. Three moves, and the first is the one almost nobody works out unaided.
            </p>
            <ol style={{ margin: "12px 0", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: 12 }}>
                <strong>Put one of your own cards in the suggestion.</strong> If you hold the candlestick, suggest the candlestick. You already know that card, so whatever you get shown has to be the person or the room — you&rsquo;ve doubled what the answer tells you and it cost nothing. It&rsquo;s the least obvious move in the game, which is exactly why it&rsquo;s worth handing a kid outright rather than waiting for them to find it.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Write down everyone&rsquo;s suggestions, not just your own.</strong> Most players record only what they were personally shown and throw away the rest of the table&rsquo;s turns. But a player who suggests the same room three times is telling you they&rsquo;re stuck on it, and every pass around the table is a card somebody does <em>not</em> have.
              </li>
              <li>
                <strong>Make the test &ldquo;what&rsquo;s left?&rdquo;, not &ldquo;what do I think?&rdquo;</strong> An incorrect accusation ends your chance of winning — you stay at the table and keep showing cards, you just can&rsquo;t win. So the only question worth asking beforehand is whether any combination survives that you haven&rsquo;t ruled out. If that question can&rsquo;t be answered off the notepad, the notepad isn&rsquo;t finished, however sure it feels.
              </li>
            </ol>
          </>
        ),
      },
    ],
    versions: [
      {
        name: "Clue Junior",
        manufacturer: "Hasbro Gaming",
        specs: "2–6 players · The Case of the Broken Toy",
        fitHint: "Ages 5 and up · works before a kid reads",
        image: "/practice/clue-junior-hasbro.jpg",
        // Amazon snapshot 2026-09-01. In Stock, ships from and sold by Amazon.com. New-condition buybox.
        price: "$17.99",
        priceUpdated: "2026-09-01",
        rating: 4.7,
        reviewCount: 6115,
        why:
          "A different game from its parent, not a smaller one, and the difference is worth knowing before you buy. Kids hunt for clues by looking under the furniture and under the character pawns rather than by questioning each other, so the mystery is three-part — which toy was broken, who broke it, when — and the whole thing is pictures, which means a kid can play it a year or two before they can read a card. What it teaches is real elimination: cross off what you’ve seen, and the answer is whatever survives. What it doesn’t teach is the read-the-other-players half of Clue, because nobody is answering your questions. Buy it for a 5- or 6-year-old who wants in on what an older sibling is playing, and expect to move up around grade 3.",
        href: "https://amzn.to/4ygj94k",
      },
      {
        name: "Clue (Card-Revealing Mirror edition)",
        manufacturer: "Hasbro Gaming",
        // 30 cards total = 21 deduction cards (6 suspects + 6 weapons + 9 rooms) + 9 clue cards.
        // The old spec line said "30 cards · 6 suspects · 6 weapons · 9 rooms", which reads as a
        // breakdown of 30 and only sums to 21 (QA M2). Listing the three deduction categories
        // without a total is accurate and doesn't invite the arithmetic.
        specs: "2–6 players · ages 8+ · 6 suspects · 6 weapons · 9 rooms · needs 3 AAA batteries",
        fitHint: "Grades 3 and up · fun for adults too",
        image: "/practice/clue-hasbro.jpg",
        // Amazon snapshot 2026-09-01. In Stock, ships from and sold by Amazon.com. New-condition buybox.
        price: "$24.99",
        priceUpdated: "2026-09-01",
        rating: 4.8,
        reviewCount: 4441,
        why:
          "The full game, and the edition currently on shelves. One thing to know going in: this printing replaces the classic sealed envelope with a battery-powered mirror that reveals the three answer cards at the push of a button — it needs three AAA batteries, and it’s a moving part where an envelope was not. The deduction underneath is completely unchanged, so if you find a plain envelope edition secondhand it plays identically and will outlive this one. We’re recommending this version because it’s the one reliably in stock, not because the mirror improves anything. Grade 3 and up can run their own notepad; below that, a kid does better sharing a sheet with a grown-up for a game or two until the grid makes sense.",
        href: "https://amzn.to/4zRTT5S",
      },
    ],
  },

  // -------- Game family: Logic Land — DECLINED BY MIKE, NOT PUBLISHED (2026-09-01) --------
  // Mike was shown the availability finding and said "no logic land" on 2026-09-01. This is now a
  // DECISION, not just a stock hold: do NOT restore this entry automatically if stock returns.
  // Re-adding it needs Mike's explicit OK, not merely a clean buybox.
  //
  // The finding behind that decision: the product cannot currently be bought.
  //
  // Gamewright (the publisher) lists Logic Land as "out of print and no longer available", and the
  // Amazon listing for B07C4KWJHB confirms it from the other side: the page carries "Currently
  // unavailable" and "Temporarily out of stock", and renders NO buybox seller, NO merchant info and
  // NO tabular buybox block at all. The $12.99 that appears on the page is a list price with no
  // purchasable offer behind it. Pointing a "Buy on Amazon" affiliate CTA at that is a dead end for
  // parents and Section 5 exposure for the Associates account, and the rotation policy in
  // SPARKWORKS_ENDORSEMENTS.md says leave it out rather than publish and pull.
  //
  // Everything else is done: copy written, link verified (tag=sparkworks-20), product image saved at
  // /public/practice/logic-land-brainwright.jpg. Re-check stock at the next refresh (due 2026-11-14).
  //
  // ⚠️ TO RESTORE, four things must happen — not just deleting the /* and */:
  //   0. MIKE HAS TO SAY YES. He declined it on 2026-09-01. Returning stock is not sufficient.
  //   1. Confirm a real new-condition buybox exists, then fill the Amazon snapshot fields.
  //   2. Apply the QA fixes already made to the canonical copy in SPARKWORKS_ENDORSEMENTS.md but NOT
  //      mirrored here, since this block is inert: the "one character to a room" clause in whatItIs
  //      (Pro Tip item 2's deduction is invalid without it — VERIFY against the puzzle book first),
  //      the softened character roster, the "kids test far more freely" observed-behaviour claim, and
  //      "will hold a grown-up for a few minutes".
  //   3. Restore `ages 8+` to specs — the page block drops the box rating the doc discloses, which
  //      would show us recommending a year below the box with no acknowledgement (QA M8).
  // Canonical copy: SPARKWORKS_ENDORSEMENTS.md → "Logic Land — solo deduction puzzles in a tin".
  /*
  {
    type: "game-family",
    slug: "logic-land",
    title: "Logic Land",
    subtitle: "Brainwright · The Enchanted Castle",
    headlineImage: "/practice/logic-land-brainwright.jpg",
    highlight: "Forty deduction puzzles, seven magnets, one tin.",
    skills: [
      { label: "Elimination", color: "purple" },
      { label: "Constraints", color: "blue" },
    ],
    whatItIs:
      "A one-player deduction puzzle that lives in a travel tin. Seven magnetic characters — a king, a queen, a prince, a wizard, a dragon among them — and a self-standing book of 40 puzzles that get harder as they go. Each puzzle gives a set of picture clues about where the characters are inside a seven-room castle: this one is in the library, that one is not in the tower, this one is next to that one, this one is directly above another. You work out the single arrangement that satisfies every clue at once, and place the magnets in the rooms.",
    whyWeRecommend: (
      <>
        This is the cleanest <strong>elimination</strong> practice we&rsquo;ve found in a physical toy. Half the clues are negative — the wizard is <em>not</em> in the tower — and a negative clue is worthless to a kid until they learn to read &ldquo;not here&rdquo; as real information rather than a dead end. That reframing is the point of our second session, and Logic Land makes it concrete: the magnet has to go somewhere, so ruling out a room genuinely narrows the answer in a way a kid can see on the board. The other half of the clues are <strong>constraints</strong> on position — next to, above, diagonal from — and they have to be held together rather than solved one at a time. The good moment is the one where two loose clues suddenly pin each other down. Two things make it unusually good for a kid who bounces off worksheets. It&rsquo;s magnetic and physical, so a wrong guess costs nothing to undo — kids test far more freely when being wrong means sliding a magnet rather than erasing ink. And it&rsquo;s genuinely solo: no opponent, no timer, nobody to lose to, which suits the kid who wants to think quietly for twenty minutes without being watched. It pairs naturally with Perfectly Logical! below — the same reasoning in a different delivery, this one physical and self-contained, the workbook pencil-and-paper and broader in format.
      </>
    ),
    proTips: [
      {
        title: "Start with what can't be true",
        body: (
          <>
            <p style={{ margin: 0 }}>
              The instinct on a deduction puzzle is to hunt for the clue that hands you an answer — &ldquo;the prince is in the library&rdquo; — and place that character first. It feels like progress, and it&rsquo;s the slower road.
            </p>
            <ol style={{ margin: "12px 0", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: 12 }}>
                <strong>Read every clue before you move anything.</strong> The clues are a single system, not a to-do list, and the order they&rsquo;re printed in isn&rsquo;t the order they&rsquo;re useful in. A kid who places a character off clue one often has to undo it at clue five.
              </li>
              <li style={{ marginBottom: 12 }}>
                <strong>Work the negative clues first.</strong> &ldquo;Not in the tower&rdquo; feels like it tells you nothing, and it&rsquo;s often the most valuable line on the card — because seven characters and seven rooms means every room you rule out for one character hands you information about all the others. Ruling out isn&rsquo;t a delay before the real solving. It <em>is</em> the solving.
              </li>
              <li>
                <strong>Stuck means you have a clue you only used once.</strong> Almost every wall in these puzzles comes from treating a clue as spent after it places one character. Go back through them and ask what each one still forbids now that the board has changed. The clue that was vague at the start is usually specific by the middle.
              </li>
            </ol>
          </>
        ),
      },
    ],
    versions: [
      {
        name: "Logic Land — The Enchanted Castle",
        manufacturer: "Brainwright",
        specs: "40 puzzles · 7 magnetic characters · 7-room castle · 1 player · tin case",
        fitHint: "Grades 2 and up · fun for adults too",
        image: "/practice/logic-land-brainwright.jpg",
        price: null,
        priceUpdated: null,
        rating: null,
        reviewCount: null,
        why:
          "A tin, a magnetic board, and 40 puzzles that climb steadily in difficulty — the format is the reason to pick it. Everything is captive: the characters are magnets, the book stands up on its own, and the whole thing closes and goes in a bag, so it survives a car seat and an airport gate in a way a puzzle book with a pencil does not. It’s also the rare logic product a kid can do alone, entirely, without an adult checking the answer for them. Best for a kid who likes the reasoning but resists anything that looks like a worksheet.",
        href: "https://amzn.to/4qQ9dfq",
      },
    ],
  },
  */

  // -------- Game family: Sequence --------
  // Added 2026-09-01. Link verified → B00000IVAK with tag=sparkworks-20.
  // Canonical copy: SPARKWORKS_ENDORSEMENTS.md → "Sequence — five in a row, played from a hand of cards".
  // Product image saved 2026-09-01.
  // ⚠️ WEAKEST FIT IN THIS BATCH — flagged for PCr and Mike. Real strategic and game-theoretic
  //    decisions, but a materially higher luck floor than anything else on the page. The copy says so
  //    plainly rather than overselling. If the endorsement bar goes up, this is the one to cut.
  {
    type: "game-family",
    slug: "sequence",
    title: "Sequence",
    subtitle: "Jax",
    headlineImage: "/practice/sequence-jax.jpg",
    highlight: "Five in a row — and up to twelve people at the table.",
    skills: [
      { label: "Strategy", color: "teal" },
      { label: "Game Theory", color: "teal" },
    ],
    whatItIs:
      "The board is a 10×10 grid printed with every card from two standard decks except the jacks, so each card appears in two different places, plus four free corner spaces that count for everyone. You hold a hand of cards. On your turn you play one, put a chip on a space showing that card, and draw a replacement. Five chips in a row — across, down, or diagonally — is a sequence. Two players or two teams race to build two of them; with three teams, one is enough to win. The jacks are the wrinkle: a two-eyed jack lets you place a chip anywhere on the board, and a one-eyed jack lets you remove one of your opponent's.",
    whyWeRecommend: (
      <>
        We&rsquo;ll be straight about this one: Sequence is the most luck-dependent game on this page, and if you&rsquo;re choosing a single game to sharpen a kid&rsquo;s thinking, one of the others is a better buy. You play the cards you&rsquo;re dealt, and sometimes the cards decide it. What earns it a place here is the decision it puts in front of a kid on <em>every single turn</em>. You hold a handful of cards — more at a small table, fewer at a big one — and most of them are playable somewhere, so the question is never &ldquo;can I move?&rdquo; It&rsquo;s &ldquo;which of these is worth spending now?&rdquo; And the honest answer usually depends on the other side of the table: do you extend your own line, or block the one your opponent is three chips into? That&rsquo;s <strong>game theory</strong> in its most concrete available form. The entire state of the game is face up, so unlike most games where you have to imagine what your opponent is planning, here a kid can point at it — and still has to judge whether it matters more than their own plan. The <strong>strategy</strong> half is about tempo and saving things for later: the four corners are free for everybody, so lines running through them need fewer chips, and a one-eyed jack is worth far more held for the turn your opponent is one chip from a sequence than spent the moment you draw it. The temptation is always to spend a jack the instant it arrives; the discipline is sitting on it, and the board teaches that lesson without anyone having to say it.
      </>
    ),
    versions: [
      {
        name: "SEQUENCE",
        manufacturer: "Jax",
        specs: "Folding board · 104 cards · 135 chips · 2–12 players",
        fitHint: "Ages 7 and up · plays up to 12 in teams",
        image: "/practice/sequence-jax.jpg",
        // Amazon snapshot 2026-09-01. In Stock, ships from and sold by Amazon.com. New-condition buybox.
        price: "$19.97",
        priceUpdated: "2026-09-01",
        rating: 4.8,
        reviewCount: 45632,
        why:
          "The original Jax edition with the full-size folding board — the one to get. The whole appeal is the ceiling on players: two to twelve, in up to three teams, which makes it the rare thinking game that works at a full holiday table instead of splitting the room into a game and an audience. Teams are also the reason it suits a mixed-age table — a grade-2 kid partnered with an adult is participating and thinking out loud, not losing politely.",
        href: "https://amzn.to/4xy7luj",
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
    // Re-checked 2026-09-01: STILL NO CLEAN NEW BUYBOX. The page shows $6.99 but renders no
    // availability line, no ships-from and no sold-by block — the same structural signature as
    // Logic Land, which is confirmed unbuyable. Price therefore stays null; a price with no
    // purchasable new offer behind it must never sit beside a "Buy on Amazon" CTA.
    // Rating and review count ARE live and refresh normally: 4,419 → 4,425.
    price: null,
    priceUpdated: "2026-09-01",
    rating: 4.6,
    reviewCount: 4425,
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
  // Section 5 gate — see the SHOW_AMAZON_DATA block at the top of this file.
  if (!SHOW_AMAZON_DATA) return null;
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
  // Section 5 gate — nothing to date-stamp while no Amazon data renders. See SHOW_AMAZON_DATA above.
  if (!SHOW_AMAZON_DATA) return null;
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
        tagline="Games, books, and class materials we play and recommend — for practice at home, across grades, and with grown-ups too."
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
            {/* FTC boilerplate is verbatim from affiliate-links.md and must not be reworded. The
                trailing sentence tracks SHOW_AMAZON_DATA — with no prices or ratings on the page,
                the old "captured on the dates noted under each product" claim would be vacuous. */}
            Some links on this page are affiliate links. Sparkworks is an Amazon Associate; we earn from qualifying purchases at no extra cost to you.
            {SHOW_AMAZON_DATA
              ? " Prices and ratings shown were captured on the dates noted under each product and may have changed — check Amazon for the latest."
              : " Prices and availability live on Amazon and change often — follow any link for the current price."}
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
