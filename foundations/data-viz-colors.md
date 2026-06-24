---
foundation: data-viz-colors
last_updated: 2026-06-23
owner: Vasco Antunes
status: draft
---

# Data Visualisation Colors — Figma Variables Plan

## What this adds

A new `data-viz/` semantic group in the **Semantics** collection of the Ripple UI Kit local variables. It gives chart and dashboard designers a clean, named palette to bind to fills — without touching primitive tokens directly or accidentally reusing status colors.

This document covers: design decisions, the full variable table, scoping rules, dark mode mapping, and what is explicitly out of scope.

---

## Design decisions

### 1. Series-based naming, not hue-based

Variables are named `data-viz/series/1` through `data-viz/series/6`, not `data-viz/emerald`, `data-viz/aqua` etc.

**Why:** Series naming decouples the chart component from the color. If the palette order changes — or a hue is swapped — component bindings don't break. A donut chart bound to `series/1` stays stable regardless of whether series/1 resolves to emerald or aqua.

### 2. Six series, drawn from the stated data viz palette

The Ripple data viz palette is: **emerald, aqua, purple, violet, pink, ochre**. This maps directly to six series variables.

Blue is excluded. It is reserved for primary interactive elements and would create ambiguity in charts that coexist with UI controls. Orange and red are excluded — they carry status meaning (warning, error) and must not be repurposed as neutral chart series.

Proposed sequence (ordered by perceptual distinctiveness):

| Series | Hue |
|--------|-----|
| series/1 | emerald |
| series/2 | aqua |
| series/3 | purple |
| series/4 | violet |
| series/5 | pink |
| series/6 | ochre |

### 3. Two sub-groups: series (solid) and area (tint)

Charts use two fill types:
- **Series fill** — solid color for bars, lines, dots, pie segments, and axis labels. Uses the 70 stop in light mode (vivid range, sufficient contrast for fills against light surfaces).
- **Area fill** — light tint for area charts and chart backgrounds. Uses the 20 stop in light mode.

This prevents designers from choosing arbitrary stops from the full 10-step primitive scale.

### 4. Stop selection and dark mode

| Sub-group | Light mode stop | Dark mode stop | Rationale |
|-----------|----------------|----------------|-----------|
| `series/` | 70 (vivid) | 50 (medium) | 70 on light surface meets 3:1 for most hues; 50 on dark surface has adequate luminance contrast. See accessibility note below. |
| `area/` | 20 (very light tint) | 30 (slightly deeper tint) | 20 stop risks disappearing against dark surfaces; 30 provides a visible tint without overpowering. |

### 5. No status-aliasing layer needed

Unlike `background/*` and `border/*` tokens, data viz colors don't benefit from a `status/` intermediate. They don't need to be globally swappable by status role. Alias Primitives directly.

---

## Variable table — Semantics collection, `data-viz/` group

**Scope: `ALL_FILLS`**
**Modes: Light / Dark**

> Never apply Primitives directly to chart components. Always bind to the `data-viz/` semantic variables below.

### Sub-group: data-viz/series/

Solid series fills. Apply to: bar fills, line strokes, dot fills, pie/donut segments, legend swatches.

| Variable name | Light aliases | Dark aliases |
|---------------|--------------|-------------|
| `data-viz/series/1` | `color/emerald/70` | `color/emerald/50` |
| `data-viz/series/2` | `color/aqua/70` | `color/aqua/50` |
| `data-viz/series/3` | `color/purple/70` | `color/purple/50` |
| `data-viz/series/4` | `color/violet/70` | `color/violet/50` |
| `data-viz/series/5` | `color/pink/70` | `color/pink/50` |
| `data-viz/series/6` | `color/ochre/70` | `color/ochre/50` |

### Sub-group: data-viz/area/

Light tint fills. Apply to: area chart fills, chart panel backgrounds, range highlights.

| Variable name | Light aliases | Dark aliases |
|---------------|--------------|-------------|
| `data-viz/area/1` | `color/emerald/20` | `color/emerald/30` |
| `data-viz/area/2` | `color/aqua/20` | `color/aqua/30` |
| `data-viz/area/3` | `color/purple/20` | `color/purple/30` |
| `data-viz/area/4` | `color/violet/20` | `color/violet/30` |
| `data-viz/area/5` | `color/pink/20` | `color/pink/30` |
| `data-viz/area/6` | `color/ochre/20` | `color/ochre/30` |

**Total: 12 new variables** in the Semantics collection.

---

## Figma setup — step by step

1. Open the Ripple UI Kit file → right panel → **Local variables**.
2. Open the **Semantics** collection.
3. Add a new group: `data-viz`.
4. Inside `data-viz`, create two sub-groups: `series` and `area`.
5. Create all 12 variables (Color type, 6 per sub-group).
6. Set **Scope** to `ALL_FILLS` on each variable immediately after creation.
7. For each variable, set the **Light** mode alias to the primitive listed above, then switch to **Dark** mode and set the dark alias.
8. Do not set raw hex values — alias the Primitive collection variables only.

> Apply the mode on the top-level frame or section frame, not on individual chart layers. This is consistent with the existing Ripple mode application rule.

---

## Scoping rules

| Scope | Reason |
|-------|--------|
| `ALL_FILLS` | Data viz colors appear as frame fills, shape fills, stroke fills, and on icons/swatches. Broad scope is correct here. |
| Not `TEXT_FILL` | Do not restrict to TEXT_FILL only — bars and shapes also use these colors. Conversely, do not create separate text-scoped data viz tokens at this stage. If axis labels need to be colored with series colors, that use case can be documented separately. |

---

## Accessibility requirements

- **3:1 minimum contrast** against the chart background surface for all series fills (WCAG 1.4.11, Non-text contrast). This applies to bars, dots, and area fills.
- **4.5:1 minimum** if series colors are applied to chart axis labels or legend text at body/caption size.
- **Do not rely on color alone.** Every series must have a supplementary differentiator: pattern fill, shape marker, direct label, or tooltip. This is non-negotiable for accessibility compliance and applies at the chart component level.
- **Contrast validation per hue:** The 70 stop works for emerald and aqua in light mode. Violet, pink, and ochre at the 70 stop are lighter in luminance and need validation. Bump to the 80 stop if 3:1 is not met. This validation is out of scope for this variable plan but must be completed before chart components reach `stable` status.

---

## What is out of scope

| Topic | Decision |
|-------|----------|
| Sequential (single-hue) scales | Not in this plan. A sequential palette (e.g., a 5-step heat map from `color/blue/20` to `color/blue/80`) would live under `data-viz/scale/` if needed. Document as a separate candidate. |
| Diverging scales | Diverging maps (negative–neutral–positive) could reuse `status/` tokens contextually. No new variables needed until a specific component requires them. |
| Data viz on status colors (red/orange/green) | These must never be used as chart series. Status colors in charts should only appear as annotations (e.g., a threshold line in error color). Handled by the existing `status/` group. |
| Tints beyond two steps (series + area) | If a chart needs 3-step tints (e.g., selected, default, muted), extend with a `data-viz/muted/` sub-group at that point. Do not pre-create empty variables. |

---

## Where this fits in the setup checklist

Add to `governance/figma-variables-setup.md` summary table:

| Collection | Group | Variables | Status |
|---|---|---|---|
| Semantics | data-viz/series/ | 6 | New — this plan |
| Semantics | data-viz/area/ | 6 | New — this plan |

**Prerequisites:** All 6 Primitive hue groups (emerald, aqua, purple, violet, pink, ochre) must already exist in the Primitives collection. Per the setup checklist, they are already planned. Confirm they are live in Figma before creating these semantic variables.

---

## Open questions before execution

1. **Stop validation:** Do violet/70, pink/70, and ochre/70 meet 3:1 contrast against `background/surface` (#FFFFFF) and `background/app` (#F9F9F9)? If not, should the plan specify per-hue overrides (e.g., violet → 80 in light mode), or adopt 80 uniformly for consistency?
2. **Blue in charts:** Is there a case for `data-viz/series/0` aliasing blue (e.g., for single-series charts where blue is unambiguous)? Carry this as an open candidate — do not add until a confirmed chart component needs it.
3. **Stroke use:** Are series colors applied as strokes on line charts, or only as fills? Scoping to `ALL_FILLS` covers both in Figma. Confirm this is the intended behavior for the first chart components.
