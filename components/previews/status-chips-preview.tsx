const chips = [
  { label: "Active", className: "border-positive/25 bg-positive/10 text-positive" },
  { label: "Review", className: "border-caution/25 bg-caution/10 text-caution" },
  { label: "Blocked", className: "border-danger/25 bg-danger/10 text-danger" },
  { label: "Draft", className: "border-border bg-surface text-muted" },
] as const;

export function StatusChipsPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <span
          key={chip.label}
          className={`rounded-full border px-3 py-1 text-[12px] tracking-wide ${chip.className}`}
        >
          {chip.label}
        </span>
      ))}
    </div>
  );
}
