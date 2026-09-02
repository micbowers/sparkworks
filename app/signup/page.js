// No SiteHeader here on purpose. This is a focused conversion page — the hero wordmark carries the
// brand, and the nav bar plus its hairline rule was chrome competing with the form.
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { SignupForm } from "../components/SignupForm";

export const metadata = {
  title: "Sign up for Season 2 — Sparkworks after-school critical thinking classes",
  description:
    "Season 2 runs eight weekly 75-minute sessions from the week of September 21, 2026, in South Pasadena. Tell us which times could work for your family.",
};

export default function SignupPage() {
  return (
    <>
      <Hero
        tight
        homeLink
        wordmarkSize="xl"
        eyebrow="Season 2 · Fall 2026"
        eyebrowSize="1.1875rem"
        tagline="Eight weekly sessions of 75 minutes, starting the week of September 21, 2026. Two grade-calibrated tracks — Ember (grades 2–3) and Blaze (grades 4–7) — each kept deliberately small."
      />

      <main className="sw-page sw-body">
        <section className="sw-section sw-measure" style={{ marginTop: 0 }}>
          {/* This is the page's <h1>. The Hero is deliberately title-less here (eyebrow + tagline
              only), so without this the page shipped with an empty document outline. Styled as
              .ts-lead on purpose — it stays the same size Mike set, it is only the tag that changed. */}
          <h1
            className="ts-lead"
            style={{ fontWeight: 700, color: "var(--sw-ember)", marginTop: 0, marginBottom: 10 }}
          >
            Tell us when your child can come.
          </h1>
          <p className="ts-lead" style={{ marginBottom: 18 }}>
            We&rsquo;re setting the schedule around the families who sign up, so the most useful thing
            you can do is check <em>every</em> slot that could work for you.
          </p>

          <div className="sw-card" style={{ marginBottom: 22, padding: "20px 24px" }}>
            <dl className="sw-facts">
              <dt className="ts-label">Tuition</dt>
              <dd className="ts-body">
                <strong>$319</strong> per child, all 8 sessions. No registration fee — tuition is all-in.
              </dd>
              <dt className="ts-label">Early bird</dt>
              <dd className="ts-body">
                <strong>$25 off</strong> when your sign-up is in by Sunday, September 13, 2026.
                Payment comes later, once your day and time are confirmed.
              </dd>
              <dt className="ts-label">Siblings</dt>
              <dd className="ts-body">15% off each additional child</dd>
              <dt className="ts-label">Where</dt>
              <dd className="ts-body">Our home studio in South Pasadena</dd>
              <dt className="ts-label">Starts</dt>
              <dd className="ts-body">Week of September 21, 2026</dd>
            </dl>
          </div>

          <SignupForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
