import { allSlots, readySlots } from "@/lib/catalog";
import { ComponentSection } from "@/components/component-section";
import { SlotCard } from "@/components/slot-card";

export default function Home() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-[11px] uppercase tracking-[0.2em] text-accent">
            Canvas components
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Copy the YAML.
            <br />
            Import in Studio.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-7 text-muted">
            A dark, editorial catalog of Power Apps canvas components. Preview
            the mock, copy Source Code or PaYaml, paste via Import from code.
            No PCF. No auth. No AI editor.
          </p>
        </div>
      </section>

      <section id="catalog" className="scroll-mt-20 border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-serif text-3xl tracking-tight">Catalog</h2>
            <p className="text-[13px] text-muted">Three ready slots. Two coming soon.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {allSlots.map((slot) => (
              <SlotCard key={slot.id} slot={slot} />
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-5 py-16">
        {readySlots.map((slot) => (
          <ComponentSection key={`${slot.id}-section`} slot={slot} />
        ))}
      </div>
    </main>
  );
}
