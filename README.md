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

YAML in this repo is **placeholder** packs keyed to each slot ID so the catalog shell and copy buttons work. **Maker owns the real PaYaml packs** and will replace the stubs when they are drafted.

## Out of scope

AI editor, authentication, PCF controls, and nesting under bookmark-lab.
