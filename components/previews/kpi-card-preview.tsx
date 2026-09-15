export function KpiCardPreview() {
  return (
    <div className="w-full max-w-[280px] rounded-xl border border-border bg-surface-2 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="flex items-start justify-between">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Revenue
        </p>
        <span className="text-positive" aria-hidden>
          ↗
        </span>
      </div>
      <p className="mt-3 font-serif text-[2.15rem] leading-none tracking-tight">$128.4k</p>
      <p className="mt-2 text-[13px] text-positive">+4.2% vs last period</p>
      <svg
        className="mt-5 h-10 w-full text-accent/80"
        viewBox="0 0 200 40"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 28 C20 26, 28 22, 40 24 C56 27, 68 12, 88 14 C108 16, 120 30, 140 22 C156 16, 168 8, 188 10 L200 12"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
