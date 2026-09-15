import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-baseline gap-2.5 tracking-tight">
          <span className="font-serif text-lg text-foreground">Power Apps UI Kit</span>
          <span className="hidden text-[11px] uppercase tracking-[0.18em] text-faint sm:inline">
            Catalog
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-[13px] text-muted">
          <Link href="/#catalog" className="transition-colors hover:text-foreground">
            Components
          </Link>
          <span className="text-faint">Canvas YAML · no PCF</span>
        </nav>
      </div>
    </header>
  );
}
