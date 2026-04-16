import { useState, useEffect, useRef } from "react";

// Brand colors
const C = {
  steel: "#1E2530",
  ember: "#D4501A",
  teal: "#0E9E8A",
  yellow: "#F5C400",
  blue: "#3B7DD8",
  bone: "#F2EFE8",
  dark: "#232A35",
  muted: "#B0ADA6",
  purple: "#8B4FD8",
  cipherTeal: "#1A8C6E",
  amber: "#C07D10",
  deepBlue: "#2462B8",
};

// ═══ REGISTRATION TOGGLE ═══
// Set to false to show "registration full" waitlist mode
const REGISTRATION_OPEN = false;

const Section = ({ children, bg = C.steel, style = {} }) => (
  <div style={{ background: bg, padding: "60px 24px", ...style }}>{children}</div>
);

const Container = ({ children, style = {} }) => (
  <div style={{ maxWidth: 720, margin: "0 auto", ...style }}>{children}</div>
);

const Kicker = ({ children }) => (
  <div
    style={{
      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: 3,
      textTransform: "uppercase",
      color: C.ember,
      marginBottom: 20,
      textAlign: "center",
    }}
  >
    {children}
  </div>
);

const Divider = ({ width = 80 }) => (
  <div
    style={{
      width,
      height: 4,
      background: C.ember,
      margin: "0 auto",
      borderRadius: 2,
    }}
  />
);

const DotTextDot = ({ text, color = C.teal, style = {} }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      marginBottom: 14,
      ...style,
    }}
  >
    <span
      style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: color,
        flexShrink: 0,
      }}
    />
    <span
      style={{
        fontFamily: "'Instrument Serif', Georgia, serif",
        fontSize: 18,
        color: C.bone,
        textAlign: "center",
      }}
    >
      {text}
    </span>
    <span
      style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: color,
        flexShrink: 0,
      }}
    />
  </div>
);

const SessionDetail = ({ name, skill, spark, sparkDesc, color }) => (
  <div
    style={{
      display: "flex",
      gap: 14,
      padding: "12px 0",
      borderBottom: `1px solid rgba(242,239,232,0.06)`,
    }}
  >
    <div
      style={{
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: color,
        marginTop: 7,
        flexShrink: 0,
      }}
    />
    <div style={{ flex: 1 }}>
      <div
        style={{
          fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
          fontWeight: 700,
          fontSize: 16,
          color: C.bone,
          marginBottom: 2,
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: 14,
          color: C.muted,
          fontStyle: "italic",
          marginBottom: 8,
        }}
      >
        {skill}
      </div>
      <div
        style={{
          background: `${color}15`,
          borderRadius: 8,
          padding: "10px 14px",
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <span style={{ fontSize: 18, flexShrink: 0 }}>⚡</span>
        <div>
          <div
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color,
              marginBottom: 2,
            }}
          >
            {spark}
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 13,
              color: C.muted,
              lineHeight: 1.4,
            }}
          >
            {sparkDesc}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CurriculumCard = ({ title, desc, color, delay, sessionData }) => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        background: C.dark,
        borderLeft: `5px solid ${color}`,
        borderRadius: 10,
        padding: "18px 22px",
        marginBottom: 16,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-30px)",
        transition: `opacity 0.5s ${delay}s, transform 0.5s ${delay}s`,
        cursor: "pointer",
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              color: C.bone,
              marginBottom: 4,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontSize: 13,
              color,
              letterSpacing: 0.5,
              marginBottom: 6,
            }}
          >
            {sessionData.map((s) => s.name).join(" · ")}
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 16,
              color: C.muted,
              fontStyle: "italic",
              lineHeight: 1.4,
            }}
          >
            {desc}
          </div>
        </div>
        <div
          style={{
            color: C.muted,
            fontSize: 20,
            marginLeft: 12,
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
            flexShrink: 0,
            marginTop: 2,
          }}
        >
          ▾
        </div>
      </div>
      <div
        style={{
          maxHeight: expanded ? 600 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s ease-in-out",
        }}
      >
        <div style={{ paddingTop: 14 }}>
          {sessionData.map((s, i) => (
            <SessionDetail key={i} {...s} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PhaseRow = ({ name, desc }) => (
  <div style={{ marginBottom: 12, display: "flex", alignItems: "baseline", gap: 12 }}>
    <span
      style={{
        fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
        fontWeight: 700,
        fontSize: 18,
        color: C.bone,
        minWidth: 120,
      }}
    >
      {name}
    </span>
    <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 16, color: C.muted }}>
      {desc}
    </span>
  </div>
);

const FormField = ({ label, required, children }) => (
  <div style={{ marginBottom: 20 }}>
    <label
      style={{
        display: "block",
        fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
        fontWeight: 600,
        fontSize: 14,
        letterSpacing: 1,
        textTransform: "uppercase",
        color: C.ember,
        marginBottom: 6,
      }}
    >
      {label}
      {required && <span style={{ color: C.ember }}> *</span>}
    </label>
    {children}
  </div>
);

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  background: C.dark,
  border: `1px solid rgba(242,239,232,0.15)`,
  borderRadius: 8,
  color: C.bone,
  fontFamily: "'Instrument Serif', Georgia, serif",
  fontSize: 16,
  outline: "none",
  boxSizing: "border-box",
};

const DAY_COLORS = { Mon: C.teal, Tue: C.blue, Wed: C.amber, Thu: C.purple, Fri: C.deepBlue, Sat: C.ember, Sun: C.yellow };
const WEEKDAY_SLOTS = ["3:00", "3:15", "3:30", "3:45", "4:00", "4:15", "4:30", "4:45", "5:00", "5:15", "5:30", "5:45", "6:00", "6:15", "6:30", "6:45"];
const WEEKEND_SLOTS = ["9:00", "9:15", "9:30", "9:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45"];
const WEEKDAY_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const WEEKEND_DAY_LIST = ["Sat", "Sun"];

const SubGrid = ({ days, slots, colCount, selected, onToggle, dragging, setDragging, dragMode, setDragMode }) => {
  const key = (day, slot) => `${day} ${slot}`;
  const isSelected = (day, slot) => selected.includes(key(day, slot));

  const handleStart = (day, slot) => {
    const mode = isSelected(day, slot) ? "remove" : "add";
    setDragging(true);
    setDragMode(mode);
    onToggle(key(day, slot), mode);
  };

  const handleEnter = (day, slot) => {
    if (!dragging) return;
    onToggle(key(day, slot), dragMode);
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: "grid", gridTemplateColumns: `54px repeat(${colCount}, 1fr)`, gap: 2, marginBottom: 2 }}>
        <div />
        {days.map((d) => (
          <div
            key={d}
            style={{
              textAlign: "center",
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: DAY_COLORS[d],
              padding: "6px 0",
            }}
          >
            {d}
          </div>
        ))}
      </div>
      {/* Time rows */}
      {slots.map((slot) => (
        <div
          key={slot}
          style={{ display: "grid", gridTemplateColumns: `54px repeat(${colCount}, 1fr)`, gap: 2, marginBottom: 2 }}
        >
          <div
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontSize: 13,
              color: C.muted,
              textAlign: "right",
              paddingRight: 6,
              paddingTop: 4,
              lineHeight: 1.2,
            }}
          >
            {slot}
          </div>
          {days.map((day) => {
            const sel = isSelected(day, slot);
            const col = DAY_COLORS[day];
            return (
              <div
                key={day}
                onMouseDown={(e) => { e.preventDefault(); handleStart(day, slot); }}
                onMouseEnter={() => handleEnter(day, slot)}
                onTouchStart={(e) => { e.preventDefault(); handleStart(day, slot); }}
                onTouchMove={(e) => {
                  const touch = e.touches[0];
                  const el = document.elementFromPoint(touch.clientX, touch.clientY);
                  if (el && el.dataset.day && el.dataset.slot) {
                    handleEnter(el.dataset.day, el.dataset.slot);
                  }
                }}
                data-day={day}
                data-slot={slot}
                style={{
                  height: 26,
                  borderRadius: 4,
                  border: sel ? `2px solid ${col}` : `1px solid rgba(242,239,232,0.1)`,
                  background: sel ? `${col}30` : "transparent",
                  cursor: "pointer",
                  transition: "all 0.1s",
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

const TimeGrid = ({ selected, onToggle }) => {
  const [dragging, setDragging] = useState(false);
  const [dragMode, setDragMode] = useState(null);

  const handleEnd = () => {
    setDragging(false);
    setDragMode(null);
  };

  const sharedProps = { selected, onToggle, dragging, setDragging, dragMode, setDragMode };

  return (
    <div
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchEnd={handleEnd}
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      <div style={{
        fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
        fontSize: 12,
        fontWeight: 600,
        color: C.muted,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 6,
      }}>
        Weekdays — 3:00–7:00 PM
      </div>
      <SubGrid days={WEEKDAY_DAYS} slots={WEEKDAY_SLOTS} colCount={5} {...sharedProps} />
      <div style={{
        fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
        fontSize: 12,
        fontWeight: 600,
        color: C.muted,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginTop: 16,
        marginBottom: 6,
      }}>
        Weekends — 9:00 AM–1:00 PM
      </div>
      <SubGrid days={WEEKEND_DAY_LIST} slots={WEEKEND_SLOTS} colCount={2} {...sharedProps} />
    </div>
  );
};

export default function SparkworksLanding() {
  const [form, setForm] = useState({
    parent1Name: "",
    parent1Email: "",
    parent1Phone: "",
    parent2Name: "",
    parent2Email: "",
    parent2Phone: "",
    children: [{ name: "", age: "" }],
    schedule: [],
    interest: "",
    heard: "",
    questions: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [waitlistSubmitting, setWaitlistSubmitting] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  const handleScheduleToggle = (key, mode) => {
    setForm((f) => {
      const has = f.schedule.includes(key);
      if (mode === "add" && !has) return { ...f, schedule: [...f.schedule, key] };
      if (mode === "remove" && has) return { ...f, schedule: f.schedule.filter((s) => s !== key) };
      return f;
    });
  };

  const updateChild = (idx, field, value) => {
    setForm((f) => {
      const children = [...f.children];
      children[idx] = { ...children[idx], [field]: value };
      return { ...f, children };
    });
  };

  const addChild = () => {
    if (form.children.length < 3) {
      setForm((f) => ({ ...f, children: [...f.children, { name: "", age: "" }] }));
    }
  };

  const removeChild = (idx) => {
    if (form.children.length > 1) {
      setForm((f) => ({ ...f, children: f.children.filter((_, i) => i !== idx) }));
    }
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    // Validate based on interest level
    if (!form.interest) {
      alert("Please select your interest level.");
      return;
    }
    if (form.interest === "interested-schedule") {
      if (!form.parent1Name || !form.parent1Email || !form.children[0].name || !form.children[0].age) {
        alert("Please fill in required fields: Parent 1 Name, Email, and at least one child's Name and Age.");
        return;
      }
    }
    if (form.interest === "interested-timing") {
      if (!form.parent1Name || !form.parent1Email) {
        alert("Please fill in your name and email so we can reach out next time.");
        return;
      }
    }
    // "not-interested" requires nothing else

    setSubmitting(true);
    try {
      // For "not interested" responses, use placeholder name so the entry is searchable in Notion
      const payload = form.interest.startsWith("not-interested")
        ? { ...form, parent1Name: "Anonymous Response" }
        : form;
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or reach out directly.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again or reach out directly.");
    }
    setSubmitting(false);
  };

  const handleWaitlistSubmit = async () => {
    if (!waitlistEmail || !waitlistEmail.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    setWaitlistSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parent1Name: "Waitlist",
          parent1Email: waitlistEmail,
          interest: "interested-timing",
          questions: "Waitlist signup — founding cohort was full.",
        }),
      });
      if (res.ok) {
        setWaitlistSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or reach out directly.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again or reach out directly.");
    }
    setWaitlistSubmitting(false);
  };

  return (
    <div style={{ background: C.steel, minHeight: "100vh", color: C.bone }}>
      {/* Top accent */}
      <div style={{ height: 5, background: C.ember }} />

      {/* Hero */}
      <Section style={{ padding: "70px 24px 50px", textAlign: "center" }}>
        <Container>
          <div
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 10vw, 80px)",
              letterSpacing: 6,
              textTransform: "uppercase",
              color: C.bone,
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out",
            }}
          >
            SPARKWORKS
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(18px, 3vw, 24px)",
              color: C.muted,
              marginTop: 8,
              opacity: heroVisible ? 1 : 0,
              transition: "opacity 0.8s 0.3s",
            }}
          >
            Think through anything.
          </div>
          <div style={{ margin: "40px auto" }}>
            <Divider />
          </div>
          <div
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 5vw, 44px)",
              lineHeight: 1.2,
              color: C.bone,
              opacity: heroVisible ? 1 : 0,
              transition: "opacity 0.8s 0.5s",
            }}
          >
            An 8-session program
            <br />
            teaching kids
            <br />
            critical thinking —
          </div>
          <div
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 5vw, 44px)",
              lineHeight: 1.2,
              color: C.ember,
              marginTop: 4,
              opacity: heroVisible ? 1 : 0,
              transition: "opacity 0.8s 0.7s",
            }}
          >
            through games, not lectures.
          </div>
        </Container>
      </Section>

      {/* Skills */}
      <Section bg={C.dark} style={{ padding: "44px 24px" }}>
        <Container>
          <Kicker>What Kids Learn</Kicker>
          <DotTextDot text="Spotting patterns — and catching mistakes" color={C.purple} />
          <DotTextDot text="Ruling things out to find answers faster" color={C.cipherTeal} />
          <DotTextDot text="Estimating without all the information" color={C.amber} />
          <DotTextDot text="Thinking ahead instead of just reacting" color={C.deepBlue} />
        </Container>
      </Section>

      {/* Curriculum */}
      <Section style={{ padding: "50px 24px" }}>
        <Container>
          <Kicker>The 8-Session Curriculum</Kicker>
          <CurriculumCard
            title="See What Others Miss"
            desc="Kids spot patterns, then learn the harder skill: knowing when to stop trusting them."
            color={C.purple}
            delay={0}
            sessionData={[
              { name: "Pattern Detection", skill: "The most valuable skill is knowing when your pattern is wrong.", spark: "The Archimedes Badge", sparkDesc: "Stepped into a bath and recognized water displacement instantly — a pattern hiding in plain sight. Eureka." },
              { name: "Elimination", skill: "Elimination is not giving up — it's the fastest path to the answer.", spark: "The Euclid Badge", sparkDesc: "Built all of geometry from just 5 axioms by eliminating every assumption that could not be proven." },
            ]}
          />
          <CurriculumCard
            title="Find the Hidden Rules"
            desc="Every system runs on rules most people never notice. Finding them first is the advantage."
            color={C.cipherTeal}
            delay={0.1}
            sessionData={[
              { name: "Constraints", skill: "Constraints don't block the solution. They point toward it.", spark: "The Snow Badge", sparkDesc: "Dr. John Snow stopped the 1854 cholera epidemic by mapping every constraint until one answer remained: the water pump." },
              { name: "Hidden Rules", skill: "The rules everyone sees are the rules everyone plays by. Find the hidden ones.", spark: "The Lovelace Badge", sparkDesc: "Ada Lovelace recognized the hidden rule in Babbage's engine: it could follow any logical rule, not just arithmetic." },
            ]}
          />
          <CurriculumCard
            title="Decide Without All the Facts"
            desc="Kids estimate with logic, reason under uncertainty, and catch AI mistakes."
            color={C.amber}
            delay={0.2}
            sessionData={[
              { name: "Estimation", skill: "You don't need the exact answer. You need one close enough to decide.", spark: "The Fermi Badge", sparkDesc: "Enrico Fermi estimated a nuclear explosion's yield using only scraps of paper dropped from his hand. Accurate to within a factor of 2." },
              { name: "Order of Operations", skill: "Understanding rules more deeply than your opponent is a structural advantage.", spark: "The Al-Khwarizmi Badge", sparkDesc: "Invented algebra and the algorithm. The word 'algorithm' comes from his name. Every rule-based system traces to his work." },
            ]}
          />
          <CurriculumCard
            title="Think Beyond What You Control"
            desc="Every skill deployed under pressure. Thinking several moves ahead."
            color={C.deepBlue}
            delay={0.3}
            sessionData={[
              { name: "Strategy", skill: "Strategy is every skill integrated, applied under pressure.", spark: "The Sun Tzu Badge", sparkDesc: "Wrote The Art of War — the oldest framework for strategic thinking under uncertainty. Still taught at West Point and Harvard Business School." },
              { name: "Game Theory", skill: "Think several moves ahead — the best move depends on what they'll do.", spark: "The Turing Badge", sparkDesc: "Alan Turing cracked the Nazi Enigma code by treating it as a game with rules that could be systematically broken. Shortened WWII by two years." },
            ]}
          />
        </Container>
      </Section>

      {/* Outcomes */}
      <Section bg={C.dark} style={{ padding: "44px 24px" }}>
        <Container>
          <Kicker>What Your Child Gains</Kicker>
          {[
            "Figuring things out without being told",
            "Working through problems step-by-step",
            "Noticing when something doesn\u2019t make sense",
            "Explaining how they got an answer",
            "Staying calm when they don\u2019t know yet",
            "Thinking ahead instead of reacting",
          ].map((item, i) => (
            <DotTextDot key={i} text={item} color={C.teal} />
          ))}
        </Container>
      </Section>

      {/* Every Session */}
      <Section style={{ padding: "44px 24px" }}>
        <Container>
          <Kicker>Every Session</Kicker>
          <div
            style={{
              background: C.dark,
              borderRadius: 12,
              padding: "28px 28px 16px",
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            <PhaseRow name="IGNITE" desc="High-energy warm-up" />
            <PhaseRow name="SHARPEN" desc="One concept, one real story" />
            <PhaseRow name="ENGAGE" desc="The game — real thinking here" />
            <PhaseRow name="REINFORCE" desc="Apply, reflect, connect" />
          </div>
        </Container>
      </Section>

      {/* AI Quote Callout */}
      <div style={{ padding: "0 24px" }}>
        <Container>
          <div
            style={{
              background: C.ember,
              borderRadius: 12,
              padding: "28px 32px",
              textAlign: "center",
              margin: "0 auto",
              maxWidth: 520,
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                fontWeight: 700,
                fontSize: 22,
                color: "#fff",
                lineHeight: 1.4,
              }}
            >
              In this AI age, critical thinking
              <br />
              has become a crucial skill for kids.
            </div>
          </div>
        </Container>
      </div>

      {/* Tracks */}
      <Section style={{ padding: "50px 24px", textAlign: "center" }}>
        <Container>
          <Divider />
          <div style={{ marginTop: 36 }}>
            <div
              style={{
                fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                fontWeight: 700,
                fontSize: 32,
                color: C.blue,
              }}
            >
              EMBER TRACK
            </div>
            <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 18, color: C.muted, marginTop: 4 }}>
              Ages 8–9 · Max 6 students
            </div>
          </div>
          <div style={{ marginTop: 28 }}>
            <div
              style={{
                fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                fontWeight: 700,
                fontSize: 32,
                color: C.blue,
              }}
            >
              BLAZE TRACK
            </div>
            <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 18, color: C.muted, marginTop: 4 }}>
              Ages 10–12 · Max 6 students
            </div>
          </div>
        </Container>
      </Section>

      {/* Details */}
      <Section bg={C.dark} style={{ padding: "40px 24px" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
              textAlign: "center",
            }}
          >
            {[
              { label: "WHEN", value: "Starting week of April 13" },
              { label: "WHERE", value: "South Pasadena, CA" },
              { label: "FORMAT", value: "8 sessions · 60 min each" },
              { label: "SIZE", value: "Max 6 students per track" },
            ].map(({ label, value }, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: 2,
                    color: C.ember,
                    marginBottom: 6,
                  }}
                >
                  {label}
                </div>
                <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 18, color: C.bone }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Founding Sparks */}
      <Section style={{ padding: "40px 24px", textAlign: "center" }}>
        <Container>
          <div
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 700,
              fontSize: 28,
              color: C.yellow,
              letterSpacing: 1,
            }}
          >
            FOUNDING SPARKS {REGISTRATION_OPEN ? "· ONLY 12 SPOTS" : "· REGISTRATION FULL"}
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: 26,
              color: C.bone,
              marginTop: 8,
            }}
          >
            $149 for all 8 sessions
          </div>
          <div
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
              fontSize: 16,
              color: C.muted,
              marginTop: 6,
            }}
          >
            Founding rate — won't run like this again.
          </div>
        </Container>
      </Section>

      {/* Registration Form */}
      <Section bg={C.dark} style={{ padding: "50px 24px" }}>
        <Container>
          {!REGISTRATION_OPEN ? (
            // ═══ WAITLIST MODE ═══
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              {!waitlistSubmitted ? (
                <>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>⚡</div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 32,
                      color: C.yellow,
                      marginBottom: 12,
                    }}
                  >
                    The Founding Sparks cohort is full.
                  </div>
                  <div
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: 20,
                      color: C.bone,
                      lineHeight: 1.6,
                      maxWidth: 480,
                      margin: "0 auto 32px",
                    }}
                  >
                    We're so happy this is resonating.
                    <br />
                    Drop your email and we'll let you know
                    <br />
                    when the next cohort opens for registration.
                  </div>
                  <div style={{ maxWidth: 400, margin: "0 auto", display: "flex", gap: 10 }}>
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleWaitlistSubmit()}
                      style={{
                        flex: 1,
                        padding: "12px 16px",
                        borderRadius: 8,
                        border: `1px solid ${C.muted}40`,
                        background: C.steel,
                        color: C.bone,
                        fontFamily: "'Instrument Serif', Georgia, serif",
                        fontSize: 16,
                        outline: "none",
                      }}
                    />
                    <button
                      onClick={handleWaitlistSubmit}
                      disabled={waitlistSubmitting}
                      style={{
                        padding: "12px 24px",
                        borderRadius: 8,
                        border: "none",
                        background: C.teal,
                        color: C.steel,
                        fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                        fontWeight: 700,
                        fontSize: 16,
                        cursor: waitlistSubmitting ? "wait" : "pointer",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {waitlistSubmitting ? "..." : "Notify Me"}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>⚡</div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 32,
                      color: C.yellow,
                      marginBottom: 12,
                    }}
                  >
                    You're on the list!
                  </div>
                  <div
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: 20,
                      color: C.bone,
                      lineHeight: 1.5,
                    }}
                  >
                    We'll reach out as soon as the
                    <br />
                    next cohort opens.
                  </div>
                </>
              )}
            </div>
          ) : !submitted ? (
            <>
              <Kicker>Register Interest</Kicker>

              {/* INTEREST LEVEL — the fork in the road */}
              <div style={{
                textAlign: "center",
                marginBottom: 32,
              }}>
                <div style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: 18,
                  color: C.bone,
                  marginBottom: 20,
                }}>
                  Are you interested in Sparkworks for your child?
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 520, margin: "0 auto" }}>
                  {[
                    { value: "interested-schedule", label: "Interested — show me schedule availability", color: C.teal },
                    { value: "interested-timing", label: "Interested — but the timing isn't right", color: C.yellow },
                    { value: "not-interested-schedule", label: "Not Interested — our schedule is full", color: C.muted },
                    { value: "not-interested-topic", label: "Not Interested — this topic isn't for us", color: C.muted },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setForm({ ...form, interest: opt.value })}
                      style={{
                        padding: "14px 20px",
                        borderRadius: 10,
                        border: form.interest === opt.value
                          ? `2px solid ${opt.color}`
                          : "2px solid rgba(242,239,232,0.12)",
                        background: form.interest === opt.value
                          ? `${opt.color}18`
                          : "transparent",
                        color: form.interest === opt.value ? opt.color : C.muted,
                        fontFamily: "'Instrument Serif', Georgia, serif",
                        fontSize: 16,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        textAlign: "left",
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* NOT INTERESTED (either variant) — quick submit, no fields required */}
              {(form.interest === "not-interested-schedule" || form.interest === "not-interested-topic") && (
                <div style={{ textAlign: "center", marginTop: 16 }}>
                  <FormField label="Anything you'd like to share? (optional)">
                    <textarea
                      style={{ ...inputStyle, minHeight: 60, resize: "vertical" }}
                      value={form.questions}
                      onChange={(e) => setForm({ ...form, questions: e.target.value })}
                      placeholder="We appreciate any feedback..."
                    />
                  </FormField>
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    style={{
                      padding: "14px 40px",
                      background: submitting ? C.muted : C.steel,
                      border: `2px solid ${C.muted}`,
                      borderRadius: 10,
                      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 20,
                      color: C.bone,
                      cursor: submitting ? "wait" : "pointer",
                      marginTop: 8,
                    }}
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              )}

              {/* INTERESTED BUT TIMING NOT RIGHT — name + email only */}
              {form.interest === "interested-timing" && (
                <div style={{ marginTop: 16 }}>
                  <div style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: 15,
                    color: C.muted,
                    fontStyle: "italic",
                    textAlign: "center",
                    marginBottom: 20,
                  }}>
                    Leave your info and we'll reach out when we run this again.
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <FormField label="Name" required>
                      <input
                        style={inputStyle}
                        value={form.parent1Name}
                        onChange={(e) => setForm({ ...form, parent1Name: e.target.value })}
                        placeholder="Your name"
                      />
                    </FormField>
                    <FormField label="Email" required>
                      <input
                        style={inputStyle}
                        type="email"
                        value={form.parent1Email}
                        onChange={(e) => setForm({ ...form, parent1Email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </FormField>
                  </div>
                  <FormField label="Anything you'd like to share? (optional)">
                    <textarea
                      style={{ ...inputStyle, minHeight: 60, resize: "vertical" }}
                      value={form.questions}
                      onChange={(e) => setForm({ ...form, questions: e.target.value })}
                      placeholder="What would make this work for your family?"
                    />
                  </FormField>
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    style={{
                      width: "100%",
                      padding: "18px",
                      background: submitting ? C.muted : C.teal,
                      border: "none",
                      borderRadius: 10,
                      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 22,
                      color: C.steel,
                      cursor: submitting ? "wait" : "pointer",
                      marginTop: 8,
                      opacity: submitting ? 0.7 : 1,
                    }}
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              )}

              {/* FULLY INTERESTED — complete form */}
              {form.interest === "interested-schedule" && (
                <div style={{ marginTop: 16 }}>
                  {/* Parent 1 — required */}
                  <div style={{
                    background: `${C.steel}`,
                    borderRadius: 10,
                    padding: "20px 20px 8px",
                    marginBottom: 16,
                    border: `1px solid rgba(242,239,232,0.08)`,
                  }}>
                    <div style={{
                      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      color: C.bone,
                      marginBottom: 14,
                      letterSpacing: 1,
                    }}>
                      PARENT / GUARDIAN 1 <span style={{ color: C.ember, fontSize: 13 }}>(required)</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <FormField label="Name" required>
                        <input
                          style={inputStyle}
                          value={form.parent1Name}
                          onChange={(e) => setForm({ ...form, parent1Name: e.target.value })}
                          placeholder="Full name"
                        />
                      </FormField>
                      <FormField label="Email" required>
                        <input
                          style={inputStyle}
                          type="email"
                          value={form.parent1Email}
                          onChange={(e) => setForm({ ...form, parent1Email: e.target.value })}
                          placeholder="your@email.com"
                        />
                      </FormField>
                    </div>
                    <FormField label="Phone">
                      <input
                        style={inputStyle}
                        value={form.parent1Phone}
                        onChange={(e) => setForm({ ...form, parent1Phone: e.target.value })}
                        placeholder="(optional)"
                      />
                    </FormField>
                  </div>

                  {/* Parent 2 — optional */}
                  <div style={{
                    background: `${C.steel}`,
                    borderRadius: 10,
                    padding: "20px 20px 8px",
                    marginBottom: 20,
                    border: `1px solid rgba(242,239,232,0.05)`,
                  }}>
                    <div style={{
                      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      color: C.muted,
                      marginBottom: 14,
                      letterSpacing: 1,
                    }}>
                      PARENT / GUARDIAN 2 <span style={{ fontSize: 13, fontWeight: 400 }}>(optional)</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <FormField label="Name">
                        <input
                          style={inputStyle}
                          value={form.parent2Name}
                          onChange={(e) => setForm({ ...form, parent2Name: e.target.value })}
                          placeholder="Full name"
                        />
                      </FormField>
                      <FormField label="Email">
                        <input
                          style={inputStyle}
                          type="email"
                          value={form.parent2Email}
                          onChange={(e) => setForm({ ...form, parent2Email: e.target.value })}
                          placeholder="email@example.com"
                        />
                      </FormField>
                    </div>
                    <FormField label="Phone">
                      <input
                        style={inputStyle}
                        value={form.parent2Phone}
                        onChange={(e) => setForm({ ...form, parent2Phone: e.target.value })}
                        placeholder="(optional)"
                      />
                    </FormField>
                  </div>

                  {/* Children — up to 3 */}
                  <div style={{
                    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: C.bone,
                    marginBottom: 14,
                    letterSpacing: 1,
                  }}>
                    CHILDREN
                  </div>

                  {form.children.map((child, idx) => (
                    <div key={idx} style={{
                      background: `${C.steel}`,
                      borderRadius: 10,
                      padding: "16px 20px 4px",
                      marginBottom: 12,
                      border: `1px solid rgba(242,239,232,0.08)`,
                      position: "relative",
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <span style={{
                          fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                          fontWeight: 600,
                          fontSize: 14,
                          color: C.muted,
                        }}>
                          Child {idx + 1} {idx === 0 && <span style={{ color: C.ember }}>(required)</span>}
                        </span>
                        {idx > 0 && (
                          <button
                            onClick={() => removeChild(idx)}
                            style={{
                              background: "none",
                              border: "none",
                              color: C.muted,
                              cursor: "pointer",
                              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                              fontSize: 13,
                              padding: "2px 8px",
                            }}
                          >
                            ✕ Remove
                          </button>
                        )}
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        <FormField label="Name" required={idx === 0}>
                          <input
                            style={inputStyle}
                            value={child.name}
                            onChange={(e) => updateChild(idx, "name", e.target.value)}
                            placeholder="Child's first name"
                          />
                        </FormField>
                        <FormField label="Age" required={idx === 0}>
                          <select
                            style={{ ...inputStyle, cursor: "pointer" }}
                            value={child.age}
                            onChange={(e) => updateChild(idx, "age", e.target.value)}
                          >
                            <option value="">Select age</option>
                            {[8, 9, 10, 11, 12].map((a) => (
                              <option key={a} value={a}>
                                {a} — {a <= 9 ? "Ember Track" : "Blaze Track"}
                              </option>
                            ))}
                          </select>
                        </FormField>
                      </div>
                    </div>
                  ))}

                  {form.children.length < 3 && (
                    <button
                      onClick={addChild}
                      style={{
                        background: "none",
                        border: `1px dashed rgba(242,239,232,0.2)`,
                        borderRadius: 8,
                        padding: "10px 20px",
                        color: C.teal,
                        fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                        fontWeight: 600,
                        fontSize: 15,
                        cursor: "pointer",
                        width: "100%",
                        marginBottom: 20,
                        transition: "border-color 0.2s",
                      }}
                      onMouseOver={(e) => e.target.style.borderColor = C.teal}
                      onMouseOut={(e) => e.target.style.borderColor = "rgba(242,239,232,0.2)"}
                    >
                      + Add another child
                    </button>
                  )}

                  <FormField label="Schedule">
                    <div
                      style={{
                        fontFamily: "'Instrument Serif', Georgia, serif",
                        fontSize: 15,
                        color: C.bone,
                        marginBottom: 6,
                        lineHeight: 1.5,
                      }}
                    >
                      Classes start the week of April 13 and meet on the same day and time each week for 8 weeks.
                    </div>
                    <div
                      style={{
                        fontFamily: "'Instrument Serif', Georgia, serif",
                        fontSize: 14,
                        color: C.muted,
                        marginBottom: 14,
                        fontStyle: "italic",
                      }}
                    >
                      Tap or drag to mark every slot that would work for your family.
                    </div>
                    <TimeGrid selected={form.schedule} onToggle={handleScheduleToggle} />
                  </FormField>

                  <FormField label="How did you hear about us?">
                    <input
                      style={inputStyle}
                      value={form.heard}
                      onChange={(e) => setForm({ ...form, heard: e.target.value })}
                      placeholder="(optional)"
                    />
                  </FormField>

                  <FormField label="Questions or Comments">
                    <textarea
                      style={{ ...inputStyle, minHeight: 80, resize: "vertical" }}
                      value={form.questions}
                      onChange={(e) => setForm({ ...form, questions: e.target.value })}
                      placeholder="Anything you'd like to ask? (optional)"
                    />
                  </FormField>

                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    style={{
                      width: "100%",
                      padding: "18px",
                      background: submitting ? C.muted : C.teal,
                      border: "none",
                      borderRadius: 10,
                      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 22,
                      color: C.steel,
                      cursor: submitting ? "wait" : "pointer",
                      marginTop: 8,
                      transition: "transform 0.15s, box-shadow 0.15s, background 0.2s",
                      opacity: submitting ? 0.7 : 1,
                    }}
                    onMouseOver={(e) => {
                      if (!submitting) {
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow = `0 6px 24px ${C.teal}44`;
                      }
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    {submitting ? "Submitting..." : "Register Interest"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              {form.interest === "interested-schedule" ? (
                <>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>⚡</div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 32,
                      color: C.yellow,
                      marginBottom: 12,
                    }}
                  >
                    You're registered!
                  </div>
                  <div
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: 20,
                      color: C.bone,
                      lineHeight: 1.5,
                    }}
                  >
                    We'll be in touch shortly with the final
                    <br />
                    schedule and next steps.
                  </div>
                </>
              ) : form.interest === "interested-timing" ? (
                <>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>⚡</div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 28,
                      color: C.yellow,
                      marginBottom: 12,
                    }}
                  >
                    Got it — we'll keep you in the loop.
                  </div>
                  <div
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: 20,
                      color: C.bone,
                      lineHeight: 1.5,
                    }}
                  >
                    When we run the next cohort,
                    <br />
                    you'll be the first to know.
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                      fontWeight: 700,
                      fontSize: 28,
                      color: C.bone,
                      marginBottom: 12,
                    }}
                  >
                    Thanks for letting us know.
                  </div>
                  <div
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: 18,
                      color: C.muted,
                      lineHeight: 1.5,
                    }}
                  >
                    We appreciate the feedback.
                  </div>
                </>
              )}
            </div>
          )}
        </Container>
      </Section>

      {/* Footer */}
      <Section style={{ padding: "50px 24px", textAlign: "center" }}>
        <Container>
          <span
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
              fontSize: 22,
              color: C.muted,
            }}
          >
            School teaches content.
          </span>
          {"  "}
          <span
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 700,
              fontSize: 22,
              color: C.bone,
            }}
          >
            We train how to think.
          </span>
        </Container>
      </Section>

      {/* Bottom accent */}
      <div style={{ height: 5, background: C.ember }} />

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;900&family=Instrument+Serif:ital@0;1&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
