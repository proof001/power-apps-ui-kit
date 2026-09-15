# Power Apps UI Kit v1 — Source Code PaYaml packs

Paste-ready **Source Code** fragments for classic/modern canvas controls (no PCF).
Each `.pa.yaml` file is a single root `GroupContainer` ready for Studio **Code** view paste.

## Slot IDs

| Slot ID | File | Root control | Purpose |
|---------|------|--------------|---------|
| `kpi-card` | `kpi-card.pa.yaml` | `kpiCard` | Title, big metric, delta/trend chip, optional subtitle |
| `status-chips` | `status-chips.pa.yaml` | `statusChips` | Horizontal chip strip from a sample `Table(...)` |
| `timeline-stepper` | `timeline-stepper.pa.yaml` | `timelineStepper` | Vertical done / current / upcoming steps (5 sample stages) |

Root control names use camelCase (Power Apps does not allow hyphens in control names). Slot IDs remain the file names and documentation keys.

## Theme tokens and RGBA fallbacks

Packs prefer `gblAppColors` / `gblAppFonts` via `Coalesce(...)`.
If those globals are missing at runtime, **replace** the `Coalesce(gblAppColors.…, RGBA(…))` (or font) expressions with the RGBA / `Font.'Open Sans'` fallback alone, or define the tokens in `App.OnStart` (see msapp-review theme block).

Obsidian-dark defaults baked into fallbacks: dark slate fills (`RGBA(22, 27, 34, 1)`), blue accent (`RGBA(59, 130, 246, 1)`), muted borders (`RGBA(55, 65, 81, 1)`).

## Paste steps (Studio)

1. Open the target screen in Power Apps Studio.
2. Select the parent container (or screen) where the pack should land.
3. Open **… → Code (preview)** / YAML source for that selection or screen, or use **Insert** then paste into the screen YAML `Children` list as appropriate for your Studio build.
4. Copy the **entire** contents of one pack file (starts with `- kpiCard:` / `- statusChips:` / `- timelineStepper:`).
5. Paste as a sibling under the target `Children:` list. Keep list indentation consistent with neighboring controls.
6. Save. If Studio reports **PA1001**, see the rule below — re-run `payaml-preflight.py` before re-paste.
7. Wire data: replace sample `Text` / `Items` `Table(...)` with your collections or fields. No SharePoint dependency in the sample Items.

### Suggested post-paste

- **kpi-card** — bind `kpiCard_title.Text`, `kpiCard_metric.Text`, `kpiCard_deltaLabel.Text`, `kpiCard_subtitle.Text`.
- **status-chips** — replace `statusChips_gallery.Items` with your stage collection (`Label`, `Tone`, `Active`).
- **timeline-stepper** — replace `timelineStepper_gallery.Items` (`Order`, `Title`, `Detail`, `State` = `done` | `current` | `upcoming`). Extend to 7 Charter stages by appending rows and updating `Visible` on the connector (`Order < CountRows(...)`).

## PA1001 rule (hard)

Microsoft Power Fx YAML formula grammar:

> Characters **`:`** and **`#`** are **not** allowed in **single-line** formulas.

Any formula that contains `:` (e.g. record literals `{Name: "x"}`) or `#` (e.g. `ColorValue("#…")`) **must** use a multiline block scalar:

```yaml
Items: |-
  =Table(
      {Id: 1, Label: "Intake"}
  )
```

Prefer `|-` for all non-trivial formulas. Validate before paste:

```bash
python3 /workspace/msapp-review/scripts/payaml-preflight.py \
  /workspace/power-apps-ui-kit/packs/kpi-card.pa.yaml \
  /workspace/power-apps-ui-kit/packs/status-chips.pa.yaml \
  /workspace/power-apps-ui-kit/packs/timeline-stepper.pa.yaml
```

## Studio paste caveats

- Paste **one root** at a time; rename roots if the screen already has `kpiCard` / `statusChips` / `timelineStepper`.
- Horizontal chip gallery **scrolls**; it is not CSS flex-wrap. For a fixed wrap row, convert chips to static AutoLayout children with `LayoutWrap`.
- `Coalesce(gblAppColors.…, …)` errors if `gblAppColors` is an undeclared name in some tenants — define tokens in `OnStart` or strip to RGBA.
- Marker buttons use `DisplayMode.View` so they do not steal click focus; swap to Labels if your org blocks view-mode buttons.
- Control versions (`GroupContainer@1.5.0`, `Label@2.5.1`, `Gallery@2.15.0`, `Classic/Button@2.2.0`) match current CoE app packs; Studio may rewrite versions on paste.
