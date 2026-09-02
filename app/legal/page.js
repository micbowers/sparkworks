import { SiteHeader } from "../components/SiteHeader";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Terms & Privacy — Sparkworks",
  description:
    "Terms of Use, refund and cancellation policies, intellectual-property and trademark notices, and the Privacy Policy for www.sparkworks.kids, operated by Cairn Partners, LLC.",
};

const mail = { color: "var(--sw-spark)", textDecoration: "underline", textUnderlineOffset: 3 };
const sectionStyle = { scrollMarginTop: 24 };
const stack = { display: "flex", flexDirection: "column", gap: 14, maxWidth: 760 };

function Email() {
  return (
    <a href="mailto:privacy@sparkworks.kids" style={mail}>
      privacy@sparkworks.kids
    </a>
  );
}

export default function LegalPage() {
  return (
    <>
      <SiteHeader />
      <main className="sw-page sw-body">
        <section className="sw-section" style={{ marginTop: 0 }}>
          <h1 className="ts-h1" style={{ marginBottom: 8 }}>Terms &amp; Privacy</h1>
          <div className="ts-caption" style={{ color: "var(--sw-steel)", marginBottom: 16 }}>
            Last updated: September 1, 2026
          </div>
          <p className="ts-lead" style={{ maxWidth: 760 }}>
            Sparkworks is operated by Cairn Partners, LLC. We&rsquo;ve written these policies in plain
            language so they&rsquo;re easy to understand. This page covers how you may use our website,
            our refund and cancellation policies, who owns the content and brand, and how we handle the
            limited personal information we collect. If you have any questions, email us at <Email />.
          </p>
        </section>

        <section className="sw-section" id="terms" style={sectionStyle}>
          <h2 className="ts-h2" style={{ marginBottom: 14 }}>Terms of Use</h2>
          <div style={stack}>
            <p className="ts-body">
              Welcome to www.sparkworks.kids (the &ldquo;Site&rdquo;), operated by Cairn Partners, LLC
              (&ldquo;Cairn Partners,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              By accessing or using the Site, you agree to these Terms of Use. If you do not agree,
              please do not use the Site.
            </p>
            <p className="ts-body">
              <strong>The Site is informational, with one exception.</strong> This Site exists to
              share information about Sparkworks, our after-school critical-thinking classes for
              students in grades 2&ndash;6. Nothing on the Site is a contract for services. You can
              sign up for a season here, but a sign-up is a request, not an enrollment and not a
              charge: it does not reserve a place, it does not obligate you to pay, and it does not
              obligate us to offer a place. Enrollment is confirmed separately, and any enrollment
              is governed by the terms presented to you at that time &mdash; not by this page.
            </p>
            <p className="ts-body">
              <strong>Acceptable use.</strong> You agree to use the Site only for lawful purposes. You
              agree not to: interfere with or disrupt the Site or its servers; attempt to gain
              unauthorized access to any part of the Site or related systems; use any automated means
              to scrape, harvest, or collect information from the Site without our written permission;
              copy, reproduce, or republish content from the Site except as permitted under the
              Intellectual Property section below; or use the Site in any way that violates applicable
              law or infringes the rights of others.
            </p>
            <p className="ts-body">
              <strong>No warranties.</strong> The Site and all of its content are provided &ldquo;as
              is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind, whether express
              or implied. To the fullest extent permitted by law, we disclaim all warranties, including
              any implied warranties of merchantability, fitness for a particular purpose, and
              non-infringement. We do not warrant that the Site will be uninterrupted, error-free,
              secure, or free of harmful components, or that any information on the Site is complete,
              accurate, or current.
            </p>
            <p className="ts-body">
              <strong>Limitation of liability.</strong> To the fullest extent permitted by law, Cairn
              Partners, LLC and its members, managers, employees, and agents will not be liable for any
              indirect, incidental, special, consequential, or punitive damages, or any loss of data,
              use, goodwill, or profits, arising out of or relating to your use of (or inability to
              use) the Site, whether based in contract, tort, or any other legal theory, even if we
              have been advised of the possibility of such damages.
            </p>
            <p className="ts-body">
              <strong>Links to other sites.</strong> The Site may contain links to third-party
              websites, including affiliate links to Amazon. We do not control and are not responsible
              for the content, policies, or practices of any third-party site. When you follow such a
              link, you leave our Site and are subject to the other site&rsquo;s own terms and privacy
              policies.
            </p>
            <p className="ts-body">
              <strong>Changes to these terms.</strong> We may update these Terms of Use from time to
              time. Changes are effective when we post the revised version with an updated &ldquo;Last
              updated&rdquo; date. Your continued use of the Site after changes are posted means you
              accept the revised terms.
            </p>
            <p className="ts-body">
              <strong>Governing law.</strong> These Terms of Use are governed by the laws of the State
              of California, without regard to its conflict-of-laws principles.
            </p>
            <p className="ts-body">
              <strong>Contact.</strong> Questions about these Terms of Use can be sent to <Email />.
            </p>
          </div>
        </section>

        <section className="sw-section" id="refunds" style={sectionStyle}>
          <h2 className="ts-h2" style={{ marginBottom: 14 }}>Refunds &amp; Cancellations</h2>
          <div style={stack}>
            <p className="ts-body">
              Program and session fees are collected by Cairn Partners, LLC, which operates Sparkworks.
            </p>
            <p className="ts-body">
              <strong>Signing up costs nothing.</strong> We do not collect payment when you sign up.
              Once we have confirmed your child&rsquo;s day and time, we send an invoice for tuition.
              Any discount described on the sign-up page &mdash; such as an early-bird or sibling
              discount &mdash; is applied to that invoice based on the date we received your sign-up,
              not the date you pay.
            </p>
            <p className="ts-body">
              <strong>If a class does not run.</strong> Each class needs a minimum number of children
              to run. If we cannot place your child, or we cancel a class or a session we are unable
              to reschedule, you owe nothing &mdash; and if you have already paid, we refund that
              amount in full.
            </p>
            <p className="ts-body">
              <strong>Refunds and disputes.</strong> If you are unsatisfied with a service or believe a
              charge was made in error, please contact us within 30 days of payment. We will review your
              request and issue a full or partial refund at our discretion. Disputes should be directed
              to <Email /> before initiating a chargeback with your financial institution.
            </p>
            <p className="ts-body">
              <strong>Cancellations.</strong> Cancellations for program sessions or services must be
              submitted in writing at least 7 days prior to the scheduled start date for a full refund.
              Cancellations made within 7 days of the start date may be eligible for a partial refund or
              credit toward a future session, at our discretion. Except as described above &mdash; if
              we cannot place your child, or we cancel a class or a session we are unable to
              reschedule &mdash; no refunds will be issued after a program has begun.
            </p>
          </div>
        </section>

        <section className="sw-section" id="ip" style={sectionStyle}>
          <h2 className="ts-h2" style={{ marginBottom: 14 }}>Intellectual Property</h2>
          <div style={stack}>
            <p className="ts-body">
              All Sparkworks program content &mdash; including our curriculum, program materials,
              illustrations, and Spark of History images &mdash; is the proprietary work of Cairn
              Partners, LLC. All rights reserved.
            </p>
            <p className="ts-body">
              Unless we have given you written permission, you may not copy, reproduce, distribute,
              publish, modify, create derivative works from, publicly display, or otherwise use any
              Sparkworks content, in whole or in part. This applies to the text, design, graphics,
              illustrations, and other materials on this Site and in our programs.
            </p>
            <p className="ts-body">
              Viewing the Site and printing or saving pages for your own personal, non-commercial
              reference is fine. Anything beyond that requires our written permission.
            </p>
            <p className="ts-body">
              To request permission to use any Sparkworks content, email <Email /> with a description
              of what you&rsquo;d like to use and how.
            </p>
          </div>
        </section>

        <section className="sw-section" id="trademark" style={sectionStyle}>
          <h2 className="ts-h2" style={{ marginBottom: 14 }}>Trademark</h2>
          <div style={stack}>
            <p className="ts-body">
              Sparkworks&trade; is a trademark of Cairn Partners, LLC, used in connection with our
              educational services. A trademark application for Sparkworks is pending with the United
              States Patent and Trademark Office. The Sparkworks name, wordmark, and associated
              branding may not be used without our prior written permission.
            </p>
          </div>
        </section>

        <section className="sw-section" id="privacy" style={sectionStyle}>
          <h2 className="ts-h2" style={{ marginBottom: 14 }}>Privacy Policy</h2>
          <div style={stack}>
            <p className="ts-body">
              This Privacy Policy explains what personal information Cairn Partners, LLC collects
              through www.sparkworks.kids, how we use it, and who we share it with. We collect only the
              information we need to respond to families interested in Sparkworks and to place children
              in classes.
            </p>
            {/* Copy in this section is owned by Cairn Legal (RBG) and was rewritten by them on
                2026-09-01 for the launch of /signup. It describes what the Site collects TODAY and
                separately preserves the disclosure for what the retired /api/register form collected,
                so Season 1 families keep a stated deletion path. If the sign-up form's fields change,
                this section changes with it — go back to RBG, don't patch it here. */}
            <p className="ts-body">
              <strong>Information we collect.</strong> We collect personal information only when you
              choose to give it to us, through one of two kinds of form on the Site &mdash; our
              email sign-up forms and our season sign-up form. Both are completed by a parent or
              another adult; children do not interact with either one.
            </p>
            <p className="ts-body">
              <em>Email sign-up (always completed by an adult).</em> When you sign up to hear from us
              &mdash; including to register interest in the program &mdash; we collect your email
              address, the interest categories you select (Games, Materials, or Program), and which
              page on our Site the sign-up came from. No child interacts with these forms.
            </p>
            <p className="ts-body">
              <em>Season sign-up (always completed by a parent or guardian).</em> When you sign a
              child up for a season, we collect your name and email address, and &mdash; if you
              choose to give them &mdash; your mobile number, a second parent&rsquo;s or
              guardian&rsquo;s name, how you heard about Sparkworks, the name of any family who
              referred you, and anything you write in the notes field. For each child you sign up
              (up to three), we collect the child&rsquo;s <strong>first name only</strong>, the
              child&rsquo;s grade, the weekly time slots the child could attend, and a preferred
              slot if you pick one. From the grade we note the track that goes with it &mdash;
              Ember for grades 2&ndash;3, Blaze for grades 4&ndash;6 &mdash; along with the season
              being signed up for. We use all of this to build the schedule and place your child.
              The form does not ask for a child&rsquo;s last name, and it does not ask for payment
              information: nothing is charged at sign-up, and we invoice separately once your
              child&rsquo;s day and time are confirmed.
            </p>
            <p className="ts-body">
              <em>Information collected earlier.</em> A previous version of our registration form
              collected the parent&rsquo;s or guardian&rsquo;s name and, for each child, the
              child&rsquo;s first name, grade, track, and the program cohort of interest.
              Information collected through it is retained and handled as described in this policy;
              to request its deletion, email <Email />.
            </p>
            <p className="ts-body">
              We do not collect passwords, we do not create user accounts, we do not collect payment
              information, and we do not knowingly collect any information directly from children.
            </p>
            <p className="ts-body">
              <strong>How we use your information.</strong> We use the information you provide to:
              respond to your inquiry and follow up about Sparkworks programs; contact you about
              scheduling and program updates; and send you the launch and program updates you signed up
              to receive. We use sign-up information to build the class schedule, place each child in
              the appropriate class and track, and reach you about your child&rsquo;s confirmed day and
              time. We do not sell your personal information.
            </p>
            <p className="ts-body">
              <strong>Who we share it with.</strong> We do not sell or rent your personal information.
              We share it only with the service providers that help us operate the Site and run our
              programs, and only as needed for those purposes:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: 22, display: "flex", flexDirection: "column", gap: 8 }}>
              <li className="ts-body"><strong>Notion</strong> &mdash; stores the submissions from our forms.</li>
              <li className="ts-body"><strong>Vercel</strong> &mdash; hosts our Site and provides cookieless web analytics and performance measurement (described below).</li>
              <li className="ts-body"><strong>Google Fonts</strong> &mdash; serves the fonts used on our Site; fonts are delivered by Google.</li>
              <li className="ts-body">
                <strong>Amazon</strong> &mdash; on our practice-resources page we include Amazon
                affiliate links to products we recommend. When you click one of these links, you leave
                our Site and go to Amazon, where Amazon&rsquo;s own terms and privacy policy apply. We
                are an Amazon Associate and earn from qualifying purchases at no extra cost to you; this
                is disclosed in our site footer.
              </li>
            </ul>
            <p className="ts-body">
              We may also disclose information if required by law or to protect our legal rights.
            </p>
            <p className="ts-body">
              <strong>Analytics and cookies.</strong> We use Vercel&rsquo;s cookieless web analytics and
              speed insights to understand how the Site is used and how it performs. This includes
              information such as page views, click and form-submission events, referral and campaign
              (UTM) parameters, and performance measurements. These analytics do not use advertising
              cookies or cross-site tracking, and we do not use the Site to build advertising profiles
              about you.
            </p>
            <p className="ts-body">
              <strong>How long we keep your information.</strong> We retain personal information only as
              long as necessary to fulfill the purposes described in this policy, comply with our legal
              obligations, resolve disputes, and enforce our agreements. When information is no longer
              needed, we delete it or de-identify it.
            </p>
            <p className="ts-body">
              <strong>Children&rsquo;s information.</strong> Sparkworks serves children in grades
              2&ndash;6, but our Site and forms are designed for parents and guardians, not for
              children. Children do not interact with our Site or submit information themselves. The
              only information we hold about a child is what a parent or guardian gives us on our
              sign-up form &mdash; the child&rsquo;s first name, grade, the weekly time slots the
              child could attend, any preferred slot, and the track that goes with the grade &mdash;
              and we use it solely to build the schedule, to place the child in the right class, and
              to communicate with the parent or guardian. We do not collect a child&rsquo;s last name, contact information,
              photo, or any other detail beyond what is described here, and we do not collect
              information directly from children. If you are a parent or guardian and would like to
              review or delete the information we hold about your child, email <Email />.
            </p>
            <p className="ts-body">
              <strong>Accessing or deleting your information.</strong> You may ask us to access,
              correct, or delete the personal information we hold about you or your child at any time.
              Email your request to <Email /> and we will respond within a reasonable time.
            </p>
            <p className="ts-body">
              <strong>Changes to this policy.</strong> We may update this Privacy Policy from time to
              time. When we do, we will revise the &ldquo;Last updated&rdquo; date at the top of this
              page. We encourage you to review this page periodically.
            </p>
            <p className="ts-body">
              <strong>Contact us.</strong> For any privacy question, or to make a data-access or
              data-deletion request, email <Email />.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
