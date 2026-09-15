import type { ReadySlot } from "@/lib/catalog";
import { SlotPreview } from "@/components/slot-preview";
import { YamlPanel } from "@/components/yaml-panel";

export function ComponentSection({ slot }: { slot: ReadySlot }) {
  return (
    <section id={slot.id} className="scroll-mt-20">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-faint">
            {slot.kicker} · {slot.id}
          </p>
          <h1 className="mt-2 font-serif text-4xl tracking-tight text-foreground md:text-[2.75rem]">
            {slot.name}
          </h1>
        </div>
        <p className="max-w-md text-[14px] leading-6 text-muted">{slot.description}</p>
      </div>

      <div className="preview-grid mb-4 flex min-h-[240px] items-center justify-center rounded-xl border border-border bg-surface px-6 py-10">
        <SlotPreview id={slot.id} />
      </div>

      <p className="mb-4 text-[13px] leading-6 text-muted">
        Copy the Maker Source Code pack, then in Power Apps Studio paste via{" "}
        <span className="text-foreground">Code</span> view or{" "}
        <span className="text-foreground">Components → Import from code</span>.
        Both tabs below are the same pack (roots: kpiCard / statusChips /
        timelineStepper).
      </p>

      <YamlPanel sourceCode={slot.sourceCode} paYaml={slot.paYaml} />
    </section>
  );
}
