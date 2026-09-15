export function SiteFooter() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Maker-owned Source Code packs in packs/. Paste via Studio Code or Import from code.</p>
        <p className="text-faint">
          Dark editorial look inspired by Obsidian-style UI — not affiliated, no copied assets.
        </p>
      </div>
    </footer>
  );
}
