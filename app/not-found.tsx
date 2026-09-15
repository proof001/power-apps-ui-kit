import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-24">
      <p className="text-[11px] uppercase tracking-[0.18em] text-faint">404</p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight">No such slot</h1>
      <p className="mt-4 max-w-md text-muted">
        That ID is not in the catalog. Ready slots are kpi-card, status-chips, and
        timeline-stepper.
      </p>
      <Link href="/" className="mt-8 inline-block text-accent hover:text-foreground">
        ← Back to catalog
      </Link>
    </main>
  );
}
