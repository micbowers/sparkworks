"use client";

import { useState } from "react";

/**
 * Email-capture form. Posts to /api/subscribe with { email, interests, source }.
 * Email is the only field — lowest friction for "tell me when X launches" subscribes.
 * `interests` is an array — pass multiple tags to subscribe to several categories at once.
 */
export function SubscribeForm({ interests = [], source, ctaLabel = "Notify me", successMessage }) {
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
        <button type="submit" className="sw-btn sw-btn-primary" disabled={submitting} style={{ whiteSpace: "nowrap" }}>
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
