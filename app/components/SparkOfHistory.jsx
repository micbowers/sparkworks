"use client";

import { useState } from "react";
import Image from "next/image";
import { track } from "@vercel/analytics";
import { ImageLightbox } from "./ImageLightbox";

/**
 * One Spark of History card.
 * Shows a SMALL poster thumbnail, the topic it's tied to, the figure's name,
 * and a short blurb. Clicking the thumbnail enlarges the poster in a lightbox
 * (ImageLightbox). When a print-master PDF is bundled, an explicit download
 * button renders below the text for parents who want the full poster.
 *
 * `sessionLabel` is the topic TITLE only (e.g. "Pattern Detection") — never a
 * session number; the program no longer surfaces ordering.
 */
export function SparkOfHistory({ name, sessionLabel, skill, blurb, image, pdf, accent = "purple" }) {
  const accentVar = `var(--sw-${accent})`;
  const [open, setOpen] = useState(false);

  const enlarge = () => {
    setOpen(true);
    track("spark_poster_expand", { figure: name, source: "program-spark-of-history" });
  };

  return (
    <article
      className="sw-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        borderTop: `4px solid ${accentVar}`,
      }}
    >
      <div className="ts-eyebrow" style={{ color: accentVar }}>{sessionLabel}</div>

      <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
        <button
          type="button"
          onClick={enlarge}
          aria-label={`Enlarge the ${name} poster`}
          style={{
            flex: "0 0 auto",
            width: 132,
            padding: 0,
            border: "1px solid var(--sw-bone)",
            borderRadius: "var(--sw-radius-sm)",
            background: "var(--sw-bone)",
            cursor: "zoom-in",
            lineHeight: 0,
            overflow: "hidden",
          }}
        >
          <Image
            src={image}
            alt={`${name} — Sparks of History poster`}
            width={264}
            height={396}
            sizes="132px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </button>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <h3 className="ts-h2" style={{ marginBottom: 0 }}>{name}</h3>
          <p className="ts-caption" style={{ color: "var(--sw-steel)" }}>
            <strong>{skill}</strong>
          </p>
          <button
            type="button"
            onClick={enlarge}
            className="ts-label"
            style={{
              alignSelf: "flex-start",
              background: "none",
              border: "none",
              padding: 0,
              color: accentVar,
              cursor: "pointer",
              fontSize: "0.6875rem",
            }}
          >
            Click to enlarge ↗
          </button>
        </div>
      </div>

      <p className="ts-body">{blurb}</p>

      <a
        href={image}
        target="_blank"
        rel="noopener noreferrer"
        download
        onClick={() => track("spark_poster_download", { figure: name, source: "program-spark-of-history" })}
        className="sw-btn sw-btn-subtle"
        style={{ alignSelf: "flex-start", marginTop: 2 }}
      >
        Download poster →
      </a>

      <ImageLightbox
        open={open}
        onClose={() => setOpen(false)}
        src={image}
        alt={`${name} — Sparks of History poster`}
      />
    </article>
  );
}
