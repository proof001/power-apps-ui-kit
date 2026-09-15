# Power Apps UI Kit

Obsidian-style catalog of copy-paste Power Apps canvas YAML components. No PCF. No auth. No AI editor.

Makers preview a React mock, then copy **Source Code** or **PaYaml** and paste it in Power Apps Studio via **Components → Import from code**.

## Local run

```bash
npm install
npm run dev
```

Bun works the same way:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000). Production build:

```bash
npm run build && npm start
# or
bun run build && bun start
```

Standard Next.js App Router — deploy on Vercel with defaults.

## Catalog slots

| ID | Status | Route |
| --- | --- | --- |
| `kpi-card` | Ready | [`/kpi-card`](/kpi-card), `/#kpi-card` |
| `status-chips` | Ready | [`/status-chips`](/status-chips), `/#status-chips` |
| `timeline-stepper` | Ready | [`/timeline-stepper`](/timeline-stepper), `/#timeline-stepper` |
| `data-table` | Soon | [`/data-table`](/data-table), `/#data-table` |
| `nav-rail` | Soon | [`/nav-rail`](/nav-rail), `/#nav-rail` |

## PaYaml ownership

Ready-slot YAML lives in [`packs/`](packs/README.md). **Maker owns** those Source Code PaYaml packs. The catalog copies each `.pa.yaml` verbatim into both the Source Code and PaYaml tabs (Studio **Code** / **Import from code**).

## Out of scope

AI editor, authentication, PCF controls, and nesting under bookmark-lab.
