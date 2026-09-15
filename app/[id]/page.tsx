import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ComponentSection } from "@/components/component-section";
import {
  READY_SLOT_IDS,
  SOON_SLOT_IDS,
  getReadySlot,
  getSlot,
  isSlotId,
} from "@/lib/catalog";

type Params = { id: string };

export function generateStaticParams() {
  return [...READY_SLOT_IDS, ...SOON_SLOT_IDS].map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const slot = getSlot(id);
  if (!slot) return { title: "Not found" };
  return {
    title: slot.name,
    description: slot.summary,
  };
}

export default async function SlotPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  if (!isSlotId(id)) notFound();

  const ready = getReadySlot(id);
  if (ready) {
    return (
      <main className="mx-auto max-w-6xl px-5 py-12">
        <Link
          href="/#catalog"
          className="text-[13px] text-muted transition-colors hover:text-foreground"
        >
          ← Catalog
        </Link>
        <div className="mt-8">
          <ComponentSection slot={ready} />
        </div>
      </main>
    );
  }

  const slot = getSlot(id);
  if (!slot) notFound();

  return (
    <main id={slot.id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
      <Link
        href="/#catalog"
        className="text-[13px] text-muted transition-colors hover:text-foreground"
      >
        ← Catalog
      </Link>
      <p className="mt-10 text-[11px] uppercase tracking-[0.18em] text-faint">
        {slot.kicker} · {slot.id}
      </p>
      <h1 className="mt-3 font-serif text-5xl tracking-tight">{slot.name}</h1>
      <p className="mt-4 max-w-lg text-[16px] leading-7 text-muted">{slot.summary}</p>
      <div className="preview-grid mt-10 flex min-h-[220px] items-center justify-center rounded-xl border border-border bg-surface">
        <p className="font-serif text-3xl text-faint">Soon</p>
      </div>
    </main>
  );
}
