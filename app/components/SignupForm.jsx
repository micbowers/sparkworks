"use client";

// Season 2 sign-up form. Collects per-child availability across the six real time slots so the
// schedule can be built from the responses.
//
// Posts to /api/signup, which writes a page into the Notion Registration DB. The slot VALUES below
// must stay exactly in sync with that route's SLOTS array and with the Notion select options:
//     "Tue 3:15", "Tue 4:45", "Wed 3:15", "Wed 4:45", "Thu 3:15", "Fri 3:15"
// (there is NO Thu or Fri 4:45). Any value the route doesn't recognise is dropped silently.
//
// Which TRACK runs in which SLOT is decided after sign-ups are tallied — this form must never name a
// track against a time.

import { useState } from "react";

const DAYS = ["Tue", "Wed", "Thu", "Fri"];
const ROWS = [
  { time: "3:15 – 4:30 p.m.", key: "3:15", days: ["Tue", "Wed", "Thu", "Fri"] },
  { time: "4:45 – 6:00 p.m.", key: "4:45", days: ["Tue", "Wed"] },
];
// `value` must match the Notion select options exactly (same six as Availability); `label` is what
// the parent reads. Storing the long label would fail every Preferred Slot write.
const SLOT_OPTIONS = [
  { value: "Tue 3:15", label: "Tuesday 3:15 – 4:30" },
  { value: "Tue 4:45", label: "Tuesday 4:45 – 6:00" },
  { value: "Wed 3:15", label: "Wednesday 3:15 – 4:30" },
  { value: "Wed 4:45", label: "Wednesday 4:45 – 6:00" },
  { value: "Thu 3:15", label: "Thursday 3:15 – 4:30" },
  { value: "Fri 3:15", label: "Friday 3:15 – 4:30" },
];
// 7th added 2026-09-02 — Blaze now runs grades 4-7. Keep this in sync with trackFromGrade() in
// app/api/signup/route.js: a grade listed here that the route doesn't recognise lands in the DB
// with no Track, which then needs manual triage before the schedule can be built.
const GRADES = ["2nd", "3rd", "4th", "5th", "6th", "7th", "Other"];
const HEARD = [
  "A Sparkworks family told us",
  "A friend or neighbor",
  "School or PTA",
  "Found the website",
  "Social media",
  "Other",
];

// Each child becomes its own row in the Enrollments DB, so there is no schema reason to cap this.
// Four is a practical limit for one household signing up at once. (It used to be 3, because the old
// flat table only had Child 1-3 identity columns — that constraint is gone.)
const MAX_CHILDREN = 4;

// FIRST NAME ONLY — deliberately. Collecting children's surnames is a materially heavier privacy
// posture for a form filled in by parents about minors, and it buys us nothing: the parent's own
// name and email already identify the family. Don't add a last-name field back.
let childSeq = 0;
const emptyChild = () => ({
  id: `c${++childSeq}`,
  firstName: "",
  grade: "",
  slots: [],
  preferred: "",
});

export function SignupForm() {
  const [children, setChildren] = useState([emptyChild()]);
  const [parent, setParent] = useState({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    parent2Name: "",
    howHeard: "",
    referredBy: "",
    notes: "",
    website: "", // honeypot — see the hidden field near the submit button
  });
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [errorMsg, setErrorMsg] = useState("");
  const done = status === "done";

  const setParentField = (field, value) => setParent((p) => ({ ...p, [field]: value }));

  const submit = async (e) => {
    e.preventDefault();
    if (children.some((c) => c.slots.length === 0)) {
      setErrorMsg("Please check at least one time for each child.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parent,
          children: children.map(({ firstName, grade, slots, preferred }) => ({
            firstName,
            grade,
            slots,
            preferred,
          })),
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Something went wrong.");
      setStatus("done");
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const toggleSlot = (id, slot) => {
    setChildren((prev) =>
      prev.map((c) =>
        c.id !== id
          ? c
          : {
              ...c,
              slots: c.slots.includes(slot)
                ? c.slots.filter((s) => s !== slot)
                : [...c.slots, slot],
            }
      )
    );
  };

  const setField = (id, field, value) =>
    setChildren((prev) => prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)));

  // The new child is built ONCE per click, outside the updater, and the updater refuses to add an id
  // it already holds. React 18 StrictMode double-invokes state updaters in dev; without this guard a
  // single click appended two cards.
  const addChild = () => {
    const next = emptyChild();
    setChildren((prev) =>
      prev.length >= MAX_CHILDREN || prev.some((c) => c.id === next.id) ? prev : [...prev, next]
    );
  };

  const removeChild = (id) =>
    setChildren((prev) => (prev.length <= 1 ? prev : prev.filter((c) => c.id !== id)));

  if (done) {
    return (
      <div className="sw-card" style={{ borderTop: "4px solid var(--sw-ember)" }}>
        <h2 className="ts-h2" style={{ marginTop: 0 }}>Thank you — we have it.</h2>
        <p className="ts-body" style={{ marginBottom: 0 }}>
          We&rsquo;ll confirm your child&rsquo;s day and time once we&rsquo;ve seen everyone&rsquo;s
          availability, and follow up with payment details then. Nothing is owed today.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit}>
      <p className="ts-body" style={{ marginBottom: 24 }}>
        <span style={{ color: "var(--sw-ember)" }}>*</span> Required
      </p>

      <fieldset style={{ border: "none", padding: 0, margin: "0 0 20px" }}>
        <legend className="ts-eyebrow" style={{ padding: 0, marginBottom: 12 }}>Parent</legend>
        <div className="sw-grid-2" style={{ gap: 16 }}>
          <label className="ts-body">
            Your name <span style={{ color: "var(--sw-ember)" }}>*</span>
            <input
              type="text"
              required
              autoComplete="name"
              value={parent.parentName}
              onChange={(e) => setParentField("parentName", e.target.value)}
              style={inputStyle}
            />
          </label>
          <label className="ts-body">
            Email <span style={{ color: "var(--sw-ember)" }}>*</span>
            <input
              type="email"
              required
              autoComplete="email"
              value={parent.parentEmail}
              onChange={(e) => setParentField("parentEmail", e.target.value)}
              style={inputStyle}
            />
          </label>
          <label className="ts-body">
            Mobile
            <input
              type="tel"
              autoComplete="tel"
              value={parent.parentPhone}
              onChange={(e) => setParentField("parentPhone", e.target.value)}
              style={inputStyle}
            />
          </label>
          <label className="ts-body">
            Second parent (optional)
            <input
              type="text"
              value={parent.parent2Name}
              onChange={(e) => setParentField("parent2Name", e.target.value)}
              style={inputStyle}
            />
          </label>
        </div>
      </fieldset>

      <fieldset style={{ border: "none", padding: 0, margin: "0 0 20px" }}>
        <legend className="ts-eyebrow" style={{ padding: 0, marginBottom: 12 }}>Your child</legend>

        {children.map((child, i) => (
          <div
            key={child.id}
            className="sw-card"
            style={{ borderLeft: "3px solid var(--sw-ember)", marginBottom: 14 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 12,
                marginBottom: 12,
              }}
            >
              <div className="ts-label" style={{ color: "var(--sw-ember)" }}>
                Child {i + 1}
              </div>
              {children.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeChild(child.id)}
                  className="ts-body"
                  style={{
                    background: "none",
                    border: "none",
                    padding: "2px 4px",
                    color: "var(--sw-muted)",
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                  }}
                >
                  Remove
                </button>
              )}
            </div>

            <div className="sw-grid-2" style={{ gap: 16, marginBottom: 14 }}>
              <label className="ts-body">
                First name <span style={{ color: "var(--sw-ember)" }}>*</span>
                <input
                  type="text"
                  required
                  value={child.firstName}
                  onChange={(e) => setField(child.id, "firstName", e.target.value)}
                  style={inputStyle}
                />
              </label>
              <label className="ts-body">
                Grade level <span style={{ color: "var(--sw-ember)" }}>*</span>
                <select
                  required
                  value={child.grade}
                  onChange={(e) => setField(child.id, "grade", e.target.value)}
                  style={inputStyle}
                >
                  <option value="">Select…</option>
                  {GRADES.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </label>
            </div>

            <div role="group" aria-labelledby={`slots-${child.id}`}>
              <div className="ts-label" id={`slots-${child.id}`} style={{ marginBottom: 4 }}>
                Which times could this child make?{" "}
                <span style={{ color: "var(--sw-ember)" }}>*</span>
              </div>
              <p className="ts-body" style={{ marginBottom: 12 }}>
                Check everything that works — more boxes means a better chance we can place your child.
              </p>

              <div style={{ overflowX: "auto" }}>
                <table style={{ borderCollapse: "separate", borderSpacing: 4, minWidth: 420 }}>
                  <caption className="sw-visually-hidden">
                    Weekly time slots — check every one your child could attend
                  </caption>
                  <thead>
                    <tr>
                      <td />
                      {DAYS.map((d) => (
                        <th key={d} scope="col" className="ts-label" style={{ textAlign: "center", padding: 4 }}>
                          {d}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((row) => (
                      <tr key={row.key}>
                        <th
                          scope="row"
                          className="ts-body"
                          style={{ textAlign: "right", whiteSpace: "nowrap", paddingRight: 8 }}
                        >
                          {row.time}
                        </th>
                        {DAYS.map((d) => {
                          const offered = row.days.includes(d);
                          const slot = `${d} ${row.key}`;
                          if (!offered) {
                            return (
                              <td key={d}>
                                <span className="sw-visually-hidden">{d} {row.key} — not offered</span>
                                <div style={{ ...cellStyle, borderStyle: "dashed", color: "var(--sw-muted)", cursor: "default" }} aria-hidden="true">
                                  —
                                </div>
                              </td>
                            );
                          }
                          return (
                            <td key={d}>
                              <label style={cellStyle}>
                                <input
                                  type="checkbox"
                                  aria-label={`${d} ${row.time}`}
                                  checked={child.slots.includes(slot)}
                                  onChange={() => toggleSlot(child.id, slot)}
                                  style={{ width: 17, height: 17, margin: 0, cursor: "pointer" }}
                                />
                              </label>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <label className="ts-body" style={{ display: "block", marginTop: 16 }}>
              First choice, if several work
              <select
                value={child.preferred}
                onChange={(e) => setField(child.id, "preferred", e.target.value)}
                style={inputStyle}
              >
                <option value="">No preference</option>
                {SLOT_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </label>
          </div>
        ))}

        {children.length < MAX_CHILDREN && (
          <button
            type="button"
            className="sw-btn"
            onClick={addChild}
          >
            + Add another child
          </button>
        )}
      </fieldset>

      <div className="sw-card" style={{ borderLeft: "3px solid var(--sw-teal)", marginBottom: 20, padding: "18px 22px" }}>
        <div className="ts-label" style={{ marginBottom: 6 }}>How the schedule gets set</div>
        <p className="ts-body" style={{ margin: 0 }}>
          Each time slot runs a single track with one instructor, so your child&rsquo;s exact day and
          time depends on how the grades shake out across everyone who signs up. We&rsquo;ll confirm
          your child&rsquo;s day and time once we&rsquo;ve seen all the responses — that&rsquo;s why
          checking every workable box helps so much. A class needs at least four children to run; if a
          track doesn&rsquo;t reach four, we&rsquo;ll tell you before anything is owed.
        </p>
      </div>

      <fieldset style={{ border: "none", padding: 0, margin: "0 0 20px" }}>
        <legend className="ts-eyebrow" style={{ padding: 0, marginBottom: 12 }}>How you found us</legend>
        <div className="sw-grid-2" style={{ gap: 16 }}>
          <label className="ts-body">
            How did you hear about Sparkworks?
            <select
              value={parent.howHeard}
              onChange={(e) => setParentField("howHeard", e.target.value)}
              style={inputStyle}
            >
              <option value="">Select…</option>
              {HEARD.map((h) => (
                <option key={h}>{h}</option>
              ))}
            </select>
          </label>
          <label className="ts-body">
            If a family referred you, who?
            <input
              type="text"
              placeholder="Their name"
              value={parent.referredBy}
              onChange={(e) => setParentField("referredBy", e.target.value)}
              style={inputStyle}
            />
          </label>
        </div>
      </fieldset>

      <fieldset style={{ border: "none", padding: 0, margin: "0 0 20px" }}>
        <legend className="ts-eyebrow" style={{ padding: 0, marginBottom: 12 }}>Anything else</legend>
        <label className="ts-body">
          Scheduling constraints, questions, anything we should know
          <textarea
            rows={4}
            value={parent.notes}
            onChange={(e) => setParentField("notes", e.target.value)}
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </label>
      </fieldset>

      {/* Honeypot — hidden from people, tempting to bots. /api/signup discards anything that fills
          it. aria-hidden + tabIndex keep it out of the screen-reader and keyboard paths. */}
      <div className="sw-visually-hidden" aria-hidden="true">
        <label>
          Leave this field blank
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={parent.website}
            onChange={(e) => setParentField("website", e.target.value)}
          />
        </label>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="ts-body"
          style={{
            color: "var(--sw-ember)",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          {errorMsg}
        </p>
      )}

      {/* Reviewed by Cairn Legal 2026-09-01: this wording and the /legal privacy section were
          rewritten together for launch. COPPA cleared on the first-name-only posture — do NOT add a
          last name, date of birth, child photo, child email, or any child-facing login without
          going back to RBG first. */}
      <button
        type="submit"
        className="sw-btn sw-btn-primary"
        disabled={status === "sending"}
        style={{
          width: "100%",
          marginTop: 8,
          opacity: status === "sending" ? 0.6 : 1,
          cursor: status === "sending" ? "wait" : "pointer",
        }}
      >
        {status === "sending" ? "Sending…" : "Sign up for Season 2"}
      </button>
      {/* Not muted: --sw-muted is reserved for legal/administrative footnotes, and this is the
          reassurance a parent needs to read before pressing submit. */}
      <p className="ts-body" style={{ textAlign: "center", marginTop: 12 }}>
        No payment today. We&rsquo;ll be in touch with your child&rsquo;s confirmed day and time.
      </p>
      <p
        className="ts-body"
        style={{ color: "var(--sw-muted)", textAlign: "center", marginTop: 8 }}
      >
        We use what you share here only to place your child and to reach you about Sparkworks. We
        don&rsquo;t sell it or share it with anyone else.
      </p>
    </form>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  marginTop: 6,
  padding: "9px 11px",
  font: "inherit",
  color: "inherit",
  background: "var(--sw-white, #fff)",
  border: "1px solid var(--sw-rule, #DFD9CE)",
  borderRadius: 3,
};

const cellStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 48,
  padding: "14px 6px",
  border: "1px solid var(--sw-rule, #DFD9CE)",
  borderRadius: 3,
  cursor: "pointer",
};
