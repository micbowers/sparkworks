import Link from "next/link";
import { Wordmark } from "./Wordmark";

const YEAR = new Date().getFullYear();

/** Pattern C — Spark Blue footer mark with tagline + legal line. */
export function Footer() {
  return (
    <footer className="sw-foot" style={{ flexDirection: "column", alignItems: "stretch", gap: 12, paddingTop: 18, paddingBottom: 14 }}>
      <div
        className="sw-page"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          width: "100%",
        }}
      >
        <Wordmark size="sm" onDark />
        <div className="sw-foot-tag">Think through anything.</div>
      </div>
      <div
        className="sw-page"
        style={{
          fontFamily: "var(--sw-body)",
          fontSize: 11,
          color: "var(--sw-text-on-dark-muted)",
          width: "100%",
          textAlign: "center",
        }}
      >
        © {YEAR} Cairn Partners, LLC · Sparkworks™ is a trademark of Cairn Partners, LLC.
      </div>
      {/* Proprietary-rights notice — RBG-approved 2026-06-03; not TM-driven, no ™/® revert. */}
      <div
        className="sw-page"
        style={{
          fontFamily: "var(--sw-body)",
          fontSize: 11,
          color: "var(--sw-text-on-dark-muted)",
          width: "100%",
          textAlign: "center",
        }}
      >
        Sparkworks program content — including curriculum, program materials, illustrations, and Spark of History images — is the proprietary work of Cairn Partners, LLC. All rights reserved. No part may be copied, reproduced, distributed, modified, or used to create derivative works without prior written permission.
      </div>
      <div
        className="sw-page"
        style={{
          fontFamily: "var(--sw-body)",
          fontSize: 11,
          fontStyle: "italic",
          color: "var(--sw-text-on-dark-muted)",
          width: "100%",
          textAlign: "center",
        }}
      >
        Some links on this site are affiliate links. Sparkworks is an Amazon Associate; we earn from qualifying purchases at no extra cost to you.
      </div>
      <div
        className="sw-page"
        style={{
          fontFamily: "var(--sw-body)",
          fontSize: 11,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Link href="/legal" style={{ color: "var(--sw-text-on-dark-muted)", textDecoration: "underline", textUnderlineOffset: 3 }}>
          Terms &amp; Privacy
        </Link>
      </div>
    </footer>
  );
}
