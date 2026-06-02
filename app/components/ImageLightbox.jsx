"use client";

import { useEffect } from "react";

/**
 * Full-screen enlarge modal for a single image.
 *
 * Controlled by the parent (`open` / `onClose`). Renders nothing when closed.
 * Closes on Esc, on backdrop click, and via the explicit close button.
 * Locks body scroll while open. No UI library — plain inline styles + a fade.
 *
 * Reusable: any surface that wants a click-to-enlarge poster/figure can mount
 * one of these and drive it with local state.
 */
export function ImageLightbox({ open, onClose, src, alt }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(30, 37, 48, 0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4vh 4vw",
        animation: "sw-lightbox-fade 0.15s ease-out",
        cursor: "zoom-out",
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: 16,
          right: 20,
          background: "none",
          border: "none",
          color: "#FFFFFF",
          fontSize: "2rem",
          lineHeight: 1,
          cursor: "pointer",
          fontFamily: "var(--sw-display)",
        }}
      >
        ×
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "100%",
          maxHeight: "92vh",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          boxShadow: "0 12px 48px rgba(0,0,0,0.45)",
          borderRadius: "var(--sw-radius-sm)",
          cursor: "default",
        }}
      />
    </div>
  );
}
