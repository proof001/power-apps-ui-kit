import Link from "next/link";
import type { CatalogSlot } from "@/lib/catalog";
import { SlotPreview } from "@/components/slot-preview";

export function SlotCard({ slot }: { slot: CatalogSlot }) {
  const ready = slot.status === "ready";

  return (
    <article
      id={slot.status === "soon" ? slot.id : undefined}
      className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-surface"
    >
      <div className="preview-grid flex min-h-[200px] items-center justify-center px-6 py-8">
        {slot.status === "ready" ? (
          <SlotPreview id={slot.id} />
        ) : (
          <p className="font-serif text-2xl text-faint">Soon</p>
        )}
      </div>
      <div className="border-t border-border px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] uppercase tracking-[0.16em] text-faint">{slot.kicker}</p>
          <span
            className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] ${
              ready
                ? "border-accent/25 text-accent"
                : "border-border text-faint"
            }`}
          >
            {ready ? "Ready" : "Soon"}
          </span>
        </div>
        <h2 className="mt-2 font-serif text-[1.65rem] leading-tight tracking-tight">
          {ready ? (
            <Link href={`/${slot.id}`} className="hover:text-accent">
              {slot.name}
            </Link>
          ) : (
            slot.name
          )}
        </h2>
        <p className="mt-1 font-mono text-[11px] text-muted">{slot.id}</p>
        <p className="mt-3 text-[14px] leading-6 text-muted">{slot.summary}</p>
        {ready ? (
          <Link
            href={`/${slot.id}`}
            className="mt-4 inline-flex text-[13px] text-accent transition-colors hover:text-foreground"
          >
            Preview & YAML →
          </Link>
        ) : (
          <p className="mt-4 text-[13px] text-faint">Maker pack not drafted yet.</p>
        )}
      </div>
    </article>
  );
}
