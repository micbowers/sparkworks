"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

/**
 * Email-capture form. Posts to /api/subscribe with { email, interests, source }.
 * Email is the only field — lowest friction for "tell me when X launches" subscribes.
 * `interests` is an array — pass multiple tags to subscribe to several categories at once.
 * `accent` controls the submit button: "primary" (default, Ember filled), "success" (Teal filled),
 * or "outlined" (Steel border, no fill). Use non-primary when the surrounding section already carries
 * its own accent color (Teal section eyebrows etc.) or when Ember rationing budget is tight.
 */
const BUTTON_CLASS_BY_ACCENT = {
  primary: "sw-btn sw-btn-primary",
  success: "sw-btn sw-btn-success",
  outlined: "sw-btn",
};

export function SubscribeForm({ interests = [], source, ctaLabel = "Notify me", successMessage, accent = "primary" }) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !email.includes("@")) {
      setError("Add a valid email.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, interests, source }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Couldn't subscribe — please try again.");
      }
      track("subscribe_submit", {
        source: source || "unknown",
        interests: (interests || []).join(","),
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Couldn't subscribe — please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <p className="ts-caption" style={{ color: "var(--sw-teal)", fontStyle: "italic" }}>
        {successMessage || "Thanks — you're on the list."}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input
          type="email"
          aria-label="Email address"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="sw-input"
          style={{ flex: "1 1 200px", minWidth: 0 }}
          required
        />
        <button
          type="submit"
          className={BUTTON_CLASS_BY_ACCENT[accent] || BUTTON_CLASS_BY_ACCENT.primary}
          disabled={submitting}
          style={{ whiteSpace: "nowrap" }}
        >
          {submitting ? "Sending…" : ctaLabel}
        </button>
      </div>
      {error && (
        <p className="ts-caption" style={{ color: "var(--sw-red)" }} role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
