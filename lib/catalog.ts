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

const PLACEHOLDER_BANNER = [
  "# PLACEHOLDER — Maker owns the real pack.",
  "# This YAML is keyed to the catalog slot so Import-from-code can be wired later.",
  "# Power Apps Studio → Components → Import from code",
].join("\n");

function sourceCodeYaml(id: ReadySlotId, controlName: string, extraChildren: string): string {
  return `${PLACEHOLDER_BANNER}
# Format: Source Code (Studio code view / paste)

- ${controlName}:
    Control: GroupContainer@1.5.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Fill: =RGBA(18, 18, 20, 1)
      Height: =180
      LayoutDirection: =LayoutDirection.Vertical
      LayoutGap: =12
      PaddingBottom: =20
      PaddingLeft: =20
      PaddingRight: =20
      PaddingTop: =20
      RadiusBottomLeft: =12
      RadiusBottomRight: =12
      RadiusTopLeft: =12
      RadiusTopRight: =12
      Width: =Parent.Width
    Children:
      - lblSlotId:
          Control: Label@2.5.1
          Properties:
            Color: =RGBA(156, 152, 144, 1)
            Size: =11
            Text: ="${id}"
${extraChildren}
`;
}

function paYaml(id: ReadySlotId, componentName: string, description: string, extras: string): string {
  return `# yaml-language-server: $schema=https://raw.githubusercontent.com/microsoft/PowerApps-Tooling/master/src/schemas/pa-yaml/v3.0/pa.schema.yaml
${PLACEHOLDER_BANNER}
# Format: PaYaml (source control *.pa.yaml)
# Slot: ${id}

ComponentDefinitions:
  ${componentName}:
    DefinitionType: CanvasComponent
    Description: ${description}
    CustomProperties:
      SlotId:
        PropertyKind: Input
        DisplayName: SlotId
        DataType: Text
        Default: ="${id}"
${extras}
    Properties:
      Width: =Parent.Width
      Height: =180
    Children:
      - root:
          Control: GroupContainer@1.5.0
          Variant: AutoLayout
          Properties:
            Fill: =RGBA(18, 18, 20, 1)
            Height: =Parent.Height
            LayoutDirection: =LayoutDirection.Vertical
            LayoutGap: =12
            PaddingBottom: =20
            PaddingLeft: =20
            PaddingRight: =20
            PaddingTop: =20
            Width: =Parent.Width
          Children:
            - lblSlotId:
                Control: Label@2.5.1
                Properties:
                  Text: =${componentName}.SlotId
`;
}

export const readySlots: ReadySlot[] = [
  {
    id: "kpi-card",
    name: "KPI card",
    status: "ready",
    kicker: "Metrics",
    summary: "Label, value, delta, and a quiet sparkline for dashboard tiles.",
    description:
      "A single metric tile: muted label, large value, signed delta, and a decorative sparkline. Paste the YAML into a canvas component and bind Title / Value / Delta.",
    sourceCode: sourceCodeYaml(
      "kpi-card",
      "kpiCard",
      `      - lblTitle:
          Control: Label@2.5.1
          Properties:
            Color: =RGBA(156, 152, 144, 1)
            Size: =12
            Text: ="Revenue"
      - lblValue:
          Control: Label@2.5.1
          Properties:
            Color: =RGBA(244, 241, 234, 1)
            FontWeight: =FontWeight.Semibold
            Size: =28
            Text: ="$128.4k"
      - lblDelta:
          Control: Label@2.5.1
          Properties:
            Color: =RGBA(125, 206, 160, 1)
            Size: =12
            Text: ="+4.2% vs last period"`,
    ),
    paYaml: paYaml(
      "kpi-card",
      "kpiCard",
      "Placeholder pack for catalog slot kpi-card.",
      `      Title:
        PropertyKind: Input
        DisplayName: Title
        DataType: Text
        Default: ="Revenue"
      Value:
        PropertyKind: Input
        DisplayName: Value
        DataType: Text
        Default: ="$128.4k"
      Delta:
        PropertyKind: Input
        DisplayName: Delta
        DataType: Text
        Default: ="+4.2%"`,
    ),
  },
  {
    id: "status-chips",
    name: "Status chips",
    status: "ready",
    kicker: "Filters",
    summary: "Compact status pills for Active, Review, Blocked, and Draft.",
    description:
      "A horizontal chip row for record state. Each chip is a rounded label with a status token. Bind Items as a table of { Label, Tone }.",
    sourceCode: sourceCodeYaml(
      "status-chips",
      "statusChips",
      `      - galChips:
          Control: Gallery@2.15.0
          Variant: BrowseLayout_Horizontal_NonSequential_Vertical_OneTextOneImageVariant_ver5.0
          Properties:
            Height: =40
            Items: |-
              =Table(
                  { Label: "Active", Tone: "positive" },
                  { Label: "Review", Tone: "caution" },
                  { Label: "Blocked", Tone: "danger" },
                  { Label: "Draft", Tone: "muted" }
              )
            TemplateSize: =88
            Width: =Parent.Width
          Children:
            - lblChip:
                Control: Label@2.5.1
                Properties:
                  Align: =Align.Center
                  BorderRadius: =999
                  Height: =32
                  Text: =ThisItem.Label
                  Width: =80`,
    ),
    paYaml: paYaml(
      "status-chips",
      "statusChips",
      "Placeholder pack for catalog slot status-chips.",
      `      Items:
        PropertyKind: Input
        DisplayName: Items
        DataType: Table
        Default: |-
          =Table(
              { Label: "Active", Tone: "positive" },
              { Label: "Review", Tone: "caution" },
              { Label: "Blocked", Tone: "danger" },
              { Label: "Draft", Tone: "muted" }
          )`,
    ),
  },
  {
    id: "timeline-stepper",
    name: "Timeline stepper",
    status: "ready",
    kicker: "Progress",
    summary: "Horizontal steps with a connecting rail for request-to-ship flows.",
    description:
      "A linear stepper: completed, current, and upcoming nodes on a hairline rail. Bind Steps and CurrentIndex. Replace this placeholder with the Maker pack.",
    sourceCode: sourceCodeYaml(
      "timeline-stepper",
      "timelineStepper",
      `      - galSteps:
          Control: Gallery@2.15.0
          Variant: BrowseLayout_Horizontal_TwoTextOneImageVariant_ver5.0
          Properties:
            Height: =96
            Items: |-
              =Table(
                  { Title: "Request", Position: 1 },
                  { Title: "Review", Position: 2 },
                  { Title: "Build", Position: 3 },
                  { Title: "Ship", Position: 4 }
              )
            TemplateSize: =Parent.Width / 4
            Width: =Parent.Width
          Children:
            - lblStep:
                Control: Label@2.5.1
                Properties:
                  Align: =Align.Center
                  Text: =ThisItem.Title`,
    ),
    paYaml: paYaml(
      "timeline-stepper",
      "timelineStepper",
      "Placeholder pack for catalog slot timeline-stepper.",
      `      CurrentIndex:
        PropertyKind: Input
        DisplayName: CurrentIndex
        DataType: Number
        Default: =2
      Steps:
        PropertyKind: Input
        DisplayName: Steps
        DataType: Table
        Default: |-
          =Table(
              { Title: "Request", Position: 1 },
              { Title: "Review", Position: 2 },
              { Title: "Build", Position: 3 },
              { Title: "Ship", Position: 4 }
          )`,
    ),
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
