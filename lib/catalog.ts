import { kpiCardYaml, statusChipsYaml, timelineStepperYaml } from "./maker-packs";

export const READY_SLOT_IDS = [
  "kpi-card",
  "status-chips",
  "timeline-stepper",
] as const;

export const SOON_SLOT_IDS = ["data-table", "nav-rail"] as const;

export type ReadySlotId = (typeof READY_SLOT_IDS)[number];
export type SoonSlotId = (typeof SOON_SLOT_IDS)[number];
export type SlotId = ReadySlotId | SoonSlotId;

export type SlotStatus = "ready" | "soon";

type SlotBase = {
  name: string;
  kicker: string;
  summary: string;
};

export type ReadySlot = SlotBase & {
  id: ReadySlotId;
  status: "ready";
  description: string;
  sourceCode: string;
  paYaml: string;
};

export type SoonSlot = SlotBase & {
  id: SoonSlotId;
  status: "soon";
};

export type CatalogSlot = ReadySlot | SoonSlot;

export const readySlots: ReadySlot[] = [
  {
    id: "kpi-card",
    name: "KPI card",
    status: "ready",
    kicker: "Metrics",
    summary: "Label, value, delta, and a quiet sparkline for dashboard tiles.",
    description:
      "A single metric tile: muted label, large value, signed delta, and a decorative sparkline. Paste the YAML into a canvas component and bind Title / Value / Delta.",
    sourceCode: kpiCardYaml,
    paYaml: kpiCardYaml,
  },
  {
    id: "status-chips",
    name: "Status chips",
    status: "ready",
    kicker: "Filters",
    summary: "Compact status pills for Active, Review, Blocked, and Draft.",
    description:
      "A horizontal chip row for record state. Each chip is a rounded label with a status token. Bind Items as a table of { Label, Tone }.",
    sourceCode: statusChipsYaml,
    paYaml: statusChipsYaml,
  },
  {
    id: "timeline-stepper",
    name: "Timeline stepper",
    status: "ready",
    kicker: "Progress",
    summary: "Horizontal steps with a connecting rail for request-to-ship flows.",
    description:
      "A linear stepper: completed, current, and upcoming nodes on a hairline rail. Bind Steps and CurrentIndex. Replace this placeholder with the Maker pack.",
    sourceCode: timelineStepperYaml,
    paYaml: timelineStepperYaml,
  },
];

export const soonSlots: SoonSlot[] = [
  {
    id: "data-table",
    name: "Data table",
    status: "soon",
    kicker: "Lists",
    summary: "Dense rows, column headers, and quiet hover states — pack incoming.",
  },
  {
    id: "nav-rail",
    name: "Nav rail",
    status: "soon",
    kicker: "Chrome",
    summary: "Collapsed / expanded app rail with section marks — pack incoming.",
  },
];

export const allSlots: CatalogSlot[] = [...readySlots, ...soonSlots];

export function isSlotId(value: string): value is SlotId {
  return (READY_SLOT_IDS as readonly string[]).includes(value)
    || (SOON_SLOT_IDS as readonly string[]).includes(value);
}

export function getReadySlot(id: string): ReadySlot | undefined {
  return readySlots.find((slot) => slot.id === id);
}

export function getSlot(id: string): CatalogSlot | undefined {
  return allSlots.find((slot) => slot.id === id);
}
