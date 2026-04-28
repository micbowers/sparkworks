"use client";

import { useState } from "react";

const EMPTY_CHILD = { name: "", grade: "" };
const GRADES = ["2", "3", "4", "5", "6"];

export function InterestForm() {
  const [parent1Name, setParent1Name] = useState("");
  const [parent1Email, setParent1Email] = useState("");
  const [parent1Phone, setParent1Phone] = useState("");
  const [parent2Name, setParent2Name] = useState("");
  const [parent2Email, setParent2Email] = useState("");
  const [children, setChildren] = useState([{ ...EMPTY_CHILD }]);
  const [heard, setHeard] = useState("");
  const [questions, setQuestions] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  function updateChild(index, field, value) {
    setChildren((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  }

  function addChild() {
    if (children.length >= 3) return;
    setChildren((prev) => [...prev, { ...EMPTY_CHILD }]);
  }

  function removeChild(index) {
    setChildren((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    if (!parent1Name.trim() || !parent1Email.trim()) {
      setError("Your name and email are required.");
      return;
    }
    const validChildren = children.filter((c) => c.name.trim());
    if (validChildren.length === 0) {
      setError("Add at least one child's name.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cohort: "Season 1 — Fall 2026",
          parent1Name,
          parent1Email,
          parent1Phone,
          parent2Name,
          parent2Email,
          children: validChildren,
          heard,
          questions,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="sw-card" style={{ borderTop: "4px solid var(--sw-teal)" }}>
        <div className="ts-eyebrow" style={{ color: "var(--sw-teal)" }}>You&rsquo;re on the list</div>
        <h3 className="ts-h2" style={{ marginTop: 8, marginBottom: 12 }}>
          Thanks — we&rsquo;ll be in touch as Season 1 details firm up.
        </h3>
        <p className="ts-body">
          Season 1 starts the week of September 7, 2026. We&rsquo;ll email you with schedule options,
          enrollment instructions, and any early-access perks for parents on this list before public
          enrollment opens.
        </p>
      </div>
    );
  }

  return (
    <form className="sw-card" onSubmit={handleSubmit} style={{ borderTop: "4px solid var(--sw-ember)" }}>
      <div className="ts-eyebrow" style={{ color: "var(--sw-ember)" }}>Season 1 · Fall 2026</div>
      <h3 className="ts-h2" style={{ marginTop: 8, marginBottom: 8 }}>
        Save your seat — $449 for all 8 sessions.
      </h3>
      <p className="ts-body" style={{ marginBottom: 24 }}>
        Season 1 starts the week of September 7. Two tracks: Ember (grades 2–3) and Blaze (grades 4–6),
        capped at 6 students each. Add your details and we&rsquo;ll be in touch with schedule options.
      </p>

      <div className="ts-label" style={{ marginBottom: 12, color: "var(--sw-steel)" }}>Parent 1 (required)</div>
      <div className="sw-grid-2">
        <div className="sw-field">
          <label htmlFor="p1name">Name</label>
          <input
            id="p1name"
            className="sw-input"
            type="text"
            value={parent1Name}
            onChange={(e) => setParent1Name(e.target.value)}
            required
          />
        </div>
        <div className="sw-field">
          <label htmlFor="p1email">Email</label>
          <input
            id="p1email"
            className="sw-input"
            type="email"
            value={parent1Email}
            onChange={(e) => setParent1Email(e.target.value)}
            required
          />
        </div>
        <div className="sw-field">
          <label htmlFor="p1phone">Phone (optional)</label>
          <input
            id="p1phone"
            className="sw-input"
            type="tel"
            value={parent1Phone}
            onChange={(e) => setParent1Phone(e.target.value)}
          />
        </div>
      </div>

      <div className="ts-label" style={{ marginTop: 16, marginBottom: 12, color: "var(--sw-steel)" }}>
        Parent 2 (optional)
      </div>
      <div className="sw-grid-2">
        <div className="sw-field">
          <label htmlFor="p2name">Name</label>
          <input
            id="p2name"
            className="sw-input"
            type="text"
            value={parent2Name}
            onChange={(e) => setParent2Name(e.target.value)}
          />
        </div>
        <div className="sw-field">
          <label htmlFor="p2email">Email</label>
          <input
            id="p2email"
            className="sw-input"
            type="email"
            value={parent2Email}
            onChange={(e) => setParent2Email(e.target.value)}
          />
        </div>
      </div>

      <div className="ts-label" style={{ marginTop: 16, marginBottom: 12, color: "var(--sw-steel)" }}>Your kids</div>
      {children.map((child, i) => (
        <div key={i} className="sw-grid-2" style={{ alignItems: "end", marginBottom: 4 }}>
          <div className="sw-field">
            <label htmlFor={`child-${i}-name`}>Child {i + 1} name</label>
            <input
              id={`child-${i}-name`}
              className="sw-input"
              type="text"
              value={child.name}
              onChange={(e) => updateChild(i, "name", e.target.value)}
            />
          </div>
          <div className="sw-field" style={{ display: "flex", flexDirection: "row", gap: 12, alignItems: "end" }}>
            <div style={{ flex: 1 }}>
              <label htmlFor={`child-${i}-grade`}>Grade (this fall)</label>
              <select
                id={`child-${i}-grade`}
                className="sw-select"
                value={child.grade}
                onChange={(e) => updateChild(i, "grade", e.target.value)}
              >
                <option value="">Select…</option>
                {GRADES.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            {children.length > 1 && (
              <button
                type="button"
                className="sw-btn sw-btn-subtle"
                onClick={() => removeChild(i)}
                style={{ marginBottom: 4 }}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}
      {children.length < 3 && (
        <button type="button" className="sw-btn sw-btn-subtle" onClick={addChild} style={{ marginBottom: 12 }}>
          + Add another child
        </button>
      )}

      <div className="sw-field" style={{ marginTop: 16 }}>
        <label htmlFor="heard">How did you hear about us?</label>
        <input
          id="heard"
          className="sw-input"
          type="text"
          value={heard}
          onChange={(e) => setHeard(e.target.value)}
        />
      </div>

      <div className="sw-field">
        <label htmlFor="questions">Questions or comments</label>
        <textarea
          id="questions"
          className="sw-textarea"
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          rows={3}
        />
      </div>

      {error && (
        <p className="ts-body" style={{ color: "var(--sw-red)", marginBottom: 12 }} role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="sw-btn sw-btn-primary" disabled={submitting}>
        {submitting ? "Sending…" : "Save my seat"}
      </button>
    </form>
  );
}
