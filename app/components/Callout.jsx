/** Pattern D — bone-white card with section-colored left border. */
export function Callout({ accent = "teal", label, children }) {
  return (
    <div className={`sw-callout sw-callout-${accent}`}>
      {label && <div className="ts-label" style={{ marginBottom: 6 }}>{label}</div>}
      {children}
    </div>
  );
}
