import type { ReadySlotId } from "@/lib/catalog";
import { KpiCardPreview } from "@/components/previews/kpi-card-preview";
import { StatusChipsPreview } from "@/components/previews/status-chips-preview";
import { TimelineStepperPreview } from "@/components/previews/timeline-stepper-preview";

export function SlotPreview({ id }: { id: ReadySlotId }) {
  if (id === "kpi-card") return <KpiCardPreview />;
  if (id === "status-chips") return <StatusChipsPreview />;
  return <TimelineStepperPreview />;
}
