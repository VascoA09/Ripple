---
foundation: themes
last_updated: 2026-02-19
owner: Vasco Antunes
---

# Theming

## Overview

Ripple supports Light and Dark themes via a shared set of semantic token names. Components reference these theme tokens and the active mode resolves the correct primitive value. Components never need to know which theme is active.

Themes are implemented as Figma variable modes on a single "Theme" collection. Each mode maps the same token names to different primitives from the Colors collection (`foundations/color.md`).

### Naming Convention: Loud / Soft / Softest

Ripple uses an intensity scale instead of light/dark modifiers:

| Modifier | Meaning | Light mode maps to | Dark mode maps to |
|----------|---------|--------------------|-------------------|
| `loud` | Highest visual prominence | Dark primitives (hue.100) | Light primitives (hue.10) |
| *(default)* | Standard prominence | Dark-mid primitives (hue.90) | Light-mid primitives (hue.20-30) |
| `soft` | Reduced prominence | Light-mid primitives (hue.20-30) | Dark-mid primitives (hue.90) |
| `softest` | Lowest prominence | Light primitives (hue.10) | Dark primitives (hue.100) |

The scale fully inverts between themes. This is the mechanism that makes theming work: the same token name produces visually appropriate results in both modes.

### Architecture

```
Primitives (color.md)
  └── Intermediate semantics (Primary colors, Status)
        └── Scoped theme tokens (Background, Border, Text)
```

The theme uses **two-level aliasing**:
- **Primary colors** and **Status** groups define intermediate semantic mappings from primitives
- **Background**, **Border**, and **Text** groups reference those intermediates (not primitives directly)
- Some tokens (bg.app, bg.surface, border.default, text.loud, etc.) reference primitives directly when no intermediate grouping applies

---

## Intermediate Groups

These tokens are not used directly by components. They exist as a shared reference layer for the Background, Border, and Text groups.

### Primary Colors

4 tokens. Figma scope: `ALL_SCOPES`.

| Token | Light | Dark |
|-------|-------|------|
| `color.primary.loud` | `color.blue.100` (#004C6F) | `color.blue.10` (#F1FAFF) |
| `color.primary` | `color.blue.90` (#005E8A) | `color.blue.20` (#E1F3FC) |
| `color.primary.soft` | `color.blue.20` (#E1F3FC) | `color.blue.90` (#005E8A) |
| `color.primary.softest` | `color.blue.10` (#F1FAFF) | `color.blue.100` (#004C6F) |

### Status

16 tokens. 4 statuses x 4 intensities. Figma scope: `ALL_FILLS`.

#### Negative (Error)

| Token | Light | Dark |
|-------|-------|------|
| `color.negative.loud` | `color.red.100` (#990606) | `color.red.10` (#FDE8E6) |
| `color.negative` | `color.red.90` (#B70606) | `color.red.30` (#F8B7B4) |
| `color.negative.soft` | `color.red.30` (#F8B7B4) | `color.red.90` (#B70606) |
| `color.negative.softest` | `color.red.10` (#FDE8E6) | `color.red.100` (#990606) |

#### Notice (Warning)

| Token | Light | Dark |
|-------|-------|------|
| `color.notice.loud` | `color.orange.100` (#993D00) | `color.orange.10` (#FFEDE0) |
| `color.notice` | `color.orange.90` (#B84C05) | `color.orange.30` (#FFCEAD) |
| `color.notice.soft` | `color.orange.30` (#FFCEAD) | `color.orange.90` (#B84C05) |
| `color.notice.softest` | `color.orange.10` (#FFEDE0) | `color.orange.100` (#993D00) |

#### Positive (Success)

| Token | Light | Dark |
|-------|-------|------|
| `color.positive.loud` | `color.green.100` (#2D6100) | `color.green.10` (#EFF7E9) |
| `color.positive` | `color.green.90` (#3C8000) | `color.green.30` (#D0E6BC) |
| `color.positive.soft` | `color.green.30` (#D0E6BC) | `color.green.90` (#3C8000) |
| `color.positive.softest` | `color.green.10` (#EFF7E9) | `color.green.100` (#2D6100) |

#### Neutral (Informational)

| Token | Light | Dark |
|-------|-------|------|
| `color.neutral.loud` | `color.cool.gray.100` (#2F3B42) | `color.cool.gray.10` (#F5F8FA) |
| `color.neutral` | `color.cool.gray.90` (#394850) | `color.cool.gray.30` (#DFE6EC) |
| `color.neutral.soft` | `color.cool.gray.30` (#DFE6EC) | `color.cool.gray.90` (#394850) |
| `color.neutral.softest` | `color.cool.gray.10` (#F5F8FA) | `color.cool.gray.100` (#2F3B42) |

---

## Theme Tokens

These are the tokens components consume directly.

### Background

20 tokens. Figma scope: `FRAME_FILL`, `SHAPE_FILL`.

#### Layout Surfaces

| Token | Light | Dark | Use when |
|-------|-------|------|----------|
| `bg.app` | `color.gray.10` (#F9F9F9) | `color.gray.100` (#252828) | Application shell background |
| `bg.app.accent` | `color.cool.gray.20` (#EBF0F4) | `color.cool.gray.100` (#2F3B42) | Sidebar, accent areas, secondary shell |
| `bg.surface` | `color.white` (#FFFFFF) | `color.gray.90` (#373939) | Cards, panels, modals, dialogs |
| `bg.nav` | `color.white` (#FFFFFF) | `color.gray.90` (#373939) | Navigation bar, top bar |
| `bg.disabled` | `color.gray.10` (#F9F9F9) | `color.gray.90` (#373939) | Disabled inputs, buttons, cards. **New: not yet in Figma.** |
| `bg.overlay` | `color.black` at 50% alpha | `color.black` at 60% alpha | Modal/drawer scrim. Requires color variable with alpha. **New: not yet in Figma.** |
| `bg.hover` | `color.gray.20` (#EAEAEA) | `color.gray.80` (#424747) | Generic hover surface for list items, rows, cards. **New: not yet in Figma.** |
| `bg.pressed` | `color.gray.30` (#D8D9D9) | `color.gray.70` (#737373) | Generic active/pressed surface. **New: not yet in Figma.** |

#### Primary Backgrounds

| Token | Light | Dark | Use when |
|-------|-------|------|----------|
| `bg.primary.loud` | via `color.primary.loud` | via `color.primary.loud` | Strongest brand surface (filled buttons, badges) |
| `bg.primary` | via `color.primary` | via `color.primary` | Default brand surface |
| `bg.primary.soft` | via `color.primary.soft` | via `color.primary.soft` | Subtle brand surface (selected states, highlights) |
| `bg.primary.softest` | via `color.primary.softest` | via `color.primary.softest` | Faintest brand tint (hover hints, banners) |

#### Negative (Error) Backgrounds

| Token | Light | Dark | Use when |
|-------|-------|------|----------|
| `bg.negative.loud` | via `color.negative.loud` | via `color.negative.loud` | Strong error surface (filled error badges) |
| `bg.negative` | via `color.negative` | via `color.negative` | Default error surface |
| `bg.negative.soft` | via `color.negative.soft` | via `color.negative.soft` | Subtle error surface (inline validation bg) |
| `bg.negative.softest` | via `color.negative.softest` | via `color.negative.softest` | Faint error tint (error banners, field bg) |

#### Notice (Warning) Backgrounds

| Token | Light | Dark | Use when |
|-------|-------|------|----------|
| `bg.notice.loud` | via `color.notice.loud` | via `color.notice.loud` | Strong warning surface |
| `bg.notice` | via `color.notice` | via `color.notice` | Default warning surface |
| `bg.notice.soft` | via `color.notice.soft` | via `color.notice.soft` | Subtle warning surface |
| `bg.notice.softest` | via `color.notice.softest` | via `color.notice.softest` | Faint warning tint (warning banners) |

#### Positive (Success) Backgrounds

| Token | Light | Dark | Use when |
|-------|-------|------|----------|
| `bg.positive.loud` | via `color.positive.loud` | via `color.positive.loud` | Strong success surface |
| `bg.positive` | via `color.positive` | via `color.positive` | Default success surface |
| `bg.positive.soft` | via `color.positive.soft` | via `color.positive.soft` | Subtle success surface |
| `bg.positive.softest` | via `color.positive.softest` | via `color.positive.softest` | Faint success tint (success banners) |

#### Neutral (Informational) Backgrounds

| Token | Light | Dark | Use when |
|-------|-------|------|----------|
| `bg.neutral.loud` | via `color.neutral.loud` | via `color.neutral.loud` | Strong neutral surface |
| `bg.neutral` | via `color.neutral` | via `color.neutral` | Default neutral surface |
| `bg.neutral.soft` | via `color.neutral.soft` | via `color.neutral.soft` | Subtle neutral surface |
| `bg.neutral.softest` | via `color.neutral.softest` | via `color.neutral.softest` | Faint neutral tint (info banners) |

### Border

16 tokens. Figma scope: `FRAME_FILL`, `STROKE`.

**Border token roles:**

| Token | Role |
|-------|------|
| `border.default` | Passive borders on non-interactive containers: cards, panels, table rows, dividers |
| `border.interactive` | Borders on interactive elements at rest: inputs, selects, textareas, dropdowns |
| `border.interactive.soft` | Lighter interactive borders: secondary controls, subtle affordances |
| `border.focus` | Keyboard focus ring. Always primary blue. Applied by the focus management layer — do not apply manually. |
| `border.disabled` | Borders on disabled interactive elements |
| `border.light` | Inner borders or dividers matching the lightest available surface. The name is not theme-specific: in dark mode it resolves to a dark value. |

| Token | Light | Dark | Use when |
|-------|-------|------|----------|
| `border.primary.loud` | via `color.primary.loud` | via `color.primary.loud` | Strong brand border (active tabs, selected items) |
| `border.primary` | via `color.primary` | via `color.primary` | Default brand border |
| `border.default` | `color.cool.gray.70` (#7C8D98) | `color.cool.gray.70` (#7C8D98) | Passive borders on non-interactive containers. Same value both modes. |
| `border.interactive` | `color.cool.gray.80` (#4A5A64) | `color.cool.gray.30` (#DFE6EC) | Rest-state border for inputs, selects, textareas, dropdowns |
| `border.interactive.soft` | `color.cool.gray.50` (#A6B2B9) | `color.cool.gray.60` (#909FA7) | Lighter rest-state border for secondary controls |
| `border.focus` | via `color.primary` | via `color.primary` | Keyboard focus ring |
| `border.negative.loud` | via `color.negative.loud` | via `color.negative.loud` | Strong error border |
| `border.negative` | via `color.negative` | via `color.negative` | Default error border (invalid inputs) |
| `border.notice.loud` | via `color.notice.loud` | via `color.notice.loud` | Strong warning border |
| `border.notice` | via `color.notice` | via `color.notice` | Default warning border |
| `border.positive.loud` | via `color.positive.loud` | via `color.positive.loud` | Strong success border |
| `border.positive` | via `color.positive` | via `color.positive` | Default success border |
| `border.neutral.loud` | `color.cool.gray.100` (#2F3B42) | `color.cool.gray.10` (#F5F8FA) | Strong neutral border |
| `border.neutral` | `color.cool.gray.30` (#DFE6EC) | `color.cool.gray.70` (#7C8D98) | Default neutral border (dividers, subtle separators) |
| `border.disabled` | `color.gray.30` (#D8D9D9) | `color.gray.70` (#737373) | Disabled border for inputs and cards. **New: not yet in Figma.** |
| `border.light` | `color.white` (#FFFFFF) | `color.gray.100` (#252828) | Border matching the lightest surface (inner card borders) |

**Why `border.default` uses the same value in both modes:** cool-gray-70 (#7C8D98) sits at a mid-point that reads as a visible separator in both themes without shifting. This is the only theme token with an identical light/dark value — it is intentional, not an oversight.

### Text

13 tokens. Figma scope: `TEXT_FILL`.

| Token | Light | Dark | Use when |
|-------|-------|------|----------|
| `text.loud` | `color.black` (#000000) | `color.white` (#FFFFFF) | Highest emphasis text (headings, key labels) |
| `text` | `color.gray.80` (#424747) | `color.gray.10` (#F9F9F9) | Default body text |
| `text.soft` | `color.gray.70` (#737373) | `color.gray.30` (#D8D9D9) | Secondary text (descriptions, help text, captions) |
| `text.disabled` | `color.gray.60` (#8D9090) | `color.gray.60` (#8D9090) | Disabled labels, placeholder text. Same value both themes. **New: not yet in Figma.** |
| `text.accent` | via `color.primary` | via `color.primary` | Primary-colored text (links, interactive labels) |
| `text.negative` | via `color.negative.loud` | via `color.negative.loud` | Error text (validation messages, error descriptions) |
| `text.notice` | via `color.notice.loud` | via `color.notice.loud` | Warning text |
| `text.positive` | via `color.positive.loud` | via `color.positive.loud` | Success text (confirmation messages) |
| `text.loud.inverse` | `color.white` (#FFFFFF) | `color.black` (#000000) | Text on dark/brand surfaces in light mode; text on light surfaces in dark mode |
| `text.inverse` | `color.gray.20` (#EAEAEA) | `color.gray.80` (#424747) | Secondary text on inverted surfaces |
| `text.soft.inverse` | `color.gray.30` (#D8D9D9) | `color.gray.70` (#737373) | Tertiary text on inverted surfaces |
| `text.link` | via `color.primary` | via `color.primary` | Hyperlink text |
| `text.link.active` | via `color.primary.loud` | via `color.primary.loud` | Active/pressed link |
| `text.link.visited` | `color.purple.90` (#5B55B5) | `color.purple.30` (#D8D6FE) | Visited link |

### Icon

11 tokens. Figma scope: `ALL_FILLS`. **New group: not yet in Figma.**

| Token | Light | Dark | Use when |
|-------|-------|------|----------|
| `icon.default` | `color.gray.80` (#424747) | `color.gray.10` (#F9F9F9) | Standard UI icons |
| `icon.soft` | `color.gray.60` (#8D9090) | `color.gray.30` (#D8D9D9) | Secondary, decorative icons |
| `icon.disabled` | `color.gray.40` (#B7B9B9) | `color.gray.70` (#737373) | Disabled state icons |
| `icon.inverse` | `color.white` (#FFFFFF) | `color.black` (#000000) | Icons on dark/brand surfaces |
| `icon.accent` | via `color.primary` | via `color.primary` | Primary-colored icons |
| `icon.negative` | via `color.negative.loud` | via `color.negative.loud` | Error icons |
| `icon.notice` | via `color.notice.loud` | via `color.notice.loud` | Warning icons |
| `icon.positive` | via `color.positive.loud` | via `color.positive.loud` | Success icons |
| `icon.neutral` | via `color.neutral.loud` | via `color.neutral.loud` | Informational icons |
| `icon.loud.inverse` | `color.black` (#000000) | `color.white` (#FFFFFF) | High-emphasis icons on inverted surfaces |
| `icon.soft.inverse` | `color.gray.30` (#D8D9D9) | `color.gray.70` (#737373) | Secondary icons on inverted surfaces |

---

## Figma Scopes Summary

| Token group | Figma scopes |
|-------------|-------------|
| Primary colors | `ALL_SCOPES` |
| Status | `ALL_FILLS` |
| Background | `FRAME_FILL`, `SHAPE_FILL` |
| Border | `FRAME_FILL`, `STROKE` |
| Text | `TEXT_FILL` |
| Icon | `ALL_FILLS` |
| `border.light` (exception) | `ALL_SCOPES` |

---

## Dark Theme Review

### What Works Well

- **Primary inversion is correct.** `loud` shifts from blue.100 (dark navy) to blue.10 (light tint). The full 4-step scale mirrors cleanly.
- **Status inversion is consistent.** All four statuses (negative, notice, positive, neutral) follow the same inversion pattern. No one-offs or exceptions.
- **Layout surfaces use appropriate grays.** bg.app = gray.100 (#252828), bg.surface = gray.90 (#373939). The app shell is darker than cards, creating the right depth hierarchy.
- **Text hierarchy inverts cleanly.** loud = white, default = gray.10, soft = gray.30. Descending contrast matches the light mode pattern.
- **Inverse tokens swap correctly.** text.loud.inverse becomes black in dark mode (for use on light surfaces within dark UI). This is coherent.
- **Link visited shifts appropriately.** purple.90 to purple.30 maintains distinct visited state recognition.
- **border.default inverts sensibly.** gray.70 (light) to gray.30 (dark). Borders become lighter on dark surfaces.

### Contrast Validation

Calculated using the WCAG relative luminance formula (linearised sRGB). All ratios are against `bg.surface` (#373939, L=0.040), the most common component background in dark mode.

| Token | Dark value | Ratio | AA (4.5:1) | AAA (7:1) |
|-------|-----------|-------|-----------|-----------|
| `text.loud` | #FFFFFF | 11.62:1 | Pass | Pass |
| `text` | #F9F9F9 | 11.13:1 | Pass | Pass |
| `text.soft` | #D8D9D9 | 8.24:1 | Pass | Pass |
| `text.accent` | #E1F3FC (blue.20) | 10.28:1 | Pass | Pass |
| `text.negative` | #FDE8E6 (red.10) | 9.92:1 | Pass | Pass |
| `text.notice` | #FFEDE0 (orange.10) | 10.27:1 | Pass | Pass |
| `text.positive` | #EFF7E9 (green.10) | 10.66:1 | Pass | Pass |
| `text.link` | #E1F3FC (blue.20) | 10.28:1 | Pass | Pass |
| `text.link.active` | #F1FAFF (blue.10) | 11.03:1 | Pass | Pass |
| `text.link.visited` | #D8D6FE (purple.30) | 8.35:1 | Pass | Pass |
| `border.default` | #D8D9D9 (gray.30) | 8.24:1 | n/a | 3:1 UI component: Pass |

On `bg.app` (#252828, L=0.021) all ratios are higher. The lowest is `text.soft` at 10.47:1.

**Result**: all current dark theme tokens pass WCAG AAA on both surfaces.

**Note on color differentiation**: status text tokens (red.10, orange.10, green.10) are so light they appear near-white, making them hard to distinguish from default `text` (#F9F9F9) at a glance. This is not a compliance issue. Color differentiation for status messages comes from the accompanying icon and status background tint, not from text alone. Revisit during component development if this proves visually insufficient. If needed, bumping to hue.20 maintains AAA compliance (red.20 = 8.51:1, orange.20 = 9.35:1, green.20 = 9.70:1 on bg.surface).

### Tokens Awaiting Figma Creation

The following tokens are documented in the tables above (marked **New: not yet in Figma**) but do not yet exist as Figma variables. Create them using the Figma setup guide below.

| Token | Group | Priority |
|-------|-------|----------|
| `text.disabled` | Text | P1 |
| `bg.disabled` | Background | P1 |
| `bg.overlay` | Background | P1 |
| `icon.default` | Icon | P1 |
| `icon.soft` | Icon | P1 |
| `bg.hover` | Background | P2 |
| `bg.pressed` | Background | P2 |
| `border.disabled` | Border | P2 |
| `icon.disabled` | Icon | P3 |
| `icon.inverse` | Icon | P3 |
| `icon.accent` | Icon | P3 |
| `icon.negative` | Icon | P3 |
| `icon.notice` | Icon | P3 |
| `icon.positive` | Icon | P3 |
| `icon.neutral` | Icon | P3 |
| `icon.loud.inverse` | Icon | P3 |
| `icon.soft.inverse` | Icon | P3 |

### Figma Variable Setup Guide

Follow these steps to create the missing tokens in Figma.

#### Prerequisites

- The Theme variable collection already exists with two modes: Light and Dark
- The Colors variable collection (primitives) already exists and is referenced by the Theme collection

#### Step 1: Create the Icon group

1. Open the Theme variable collection
2. Create a new group called **Icon** (alongside Background, Border, Primary colors, Status, Text)
3. Add each icon variable as type **Color**
4. Set the scoping for all icon variables to **ALL_FILLS** (not TEXT_FILL, since icons are shape fills)

#### Step 2: Create individual variables

For each token in the "Tokens Awaiting Figma Creation" list:

**Variables that reference primitives directly:**

| Variable name | Type | Light value | Dark value | Scoping |
|--------------|------|------------|-----------|---------|
| `text-disabled` | Color | `Gray/color-gray-60` | `Gray/color-gray-60` | TEXT_FILL |
| `bg-disabled` | Color | `Gray/color-gray-10` | `Gray/color-gray-90` | FRAME_FILL, SHAPE_FILL |
| `bg-hover` | Color | `Gray/color-gray-20` | `Gray/color-gray-80` | FRAME_FILL, SHAPE_FILL |
| `bg-pressed` | Color | `Gray/color-gray-30` | `Gray/color-gray-70` | FRAME_FILL, SHAPE_FILL |
| `border-disabled` | Color | `Gray/color-gray-30` | `Gray/color-gray-70` | FRAME_FILL, STROKE |
| `icon-default` | Color | `Gray/color-gray-80` | `Gray/color-gray-10` | ALL_FILLS |
| `icon-soft` | Color | `Gray/color-gray-60` | `Gray/color-gray-30` | ALL_FILLS |
| `icon-disabled` | Color | `Gray/color-gray-40` | `Gray/color-gray-70` | ALL_FILLS |
| `icon-inverse` | Color | `Black and white/color-white` | `Black and white/color-black` | ALL_FILLS |
| `icon-loud-inverse` | Color | `Black and white/color-black` | `Black and white/color-white` | ALL_FILLS |
| `icon-soft-inverse` | Color | `Gray/color-gray-30` | `Gray/color-gray-70` | ALL_FILLS |

**Variables that reference intermediates (alias within Theme collection):**

| Variable name | Type | Light value | Dark value | Scoping |
|--------------|------|------------|-----------|---------|
| `icon-accent` | Color | `Primary colors/color-primary` | `Primary colors/color-primary` | ALL_FILLS |
| `icon-negative` | Color | `Status/color-negative-loud` | `Status/color-negative-loud` | ALL_FILLS |
| `icon-notice` | Color | `Status/color-notice-loud` | `Status/color-notice-loud` | ALL_FILLS |
| `icon-positive` | Color | `Status/color-positive-loud` | `Status/color-positive-loud` | ALL_FILLS |
| `icon-neutral` | Color | `Status/color-neutral-loud` | `Status/color-neutral-loud` | ALL_FILLS |

#### Step 3: Create bg-overlay (special case)

`bg-overlay` requires alpha transparency, which standard Figma color variables support:

1. Create a new Color variable called `bg-overlay` in the Background group
2. Light mode: set to `#000000` with **50% opacity** (alpha = 0.5)
3. Dark mode: set to `#000000` with **60% opacity** (alpha = 0.6)
4. Set scoping to `FRAME_FILL` only (overlays are full-frame fills, not shape fills)
5. Note: this variable cannot alias a primitive from the Colors collection because it needs a custom alpha value. Set the raw color value directly.

#### Step 4: Verify scoping

After creation, check that each variable's scoping restricts it to the correct Figma property suggestions:

| Scope | Shows in Figma when applying to |
|-------|--------------------------------|
| `FRAME_FILL`, `SHAPE_FILL` | Frame/shape fill color picker |
| `FRAME_FILL`, `STROKE` | Frame fill or stroke color picker |
| `TEXT_FILL` | Text color picker |
| `ALL_FILLS` | Any fill color picker (frame, shape, text) |
| `ALL_SCOPES` | Any color picker |

#### Step 5: Test in both modes

1. Create a test frame in Figma
2. Apply each new variable to the appropriate property (fill, stroke, text)
3. Switch between Light and Dark modes to verify values resolve correctly
4. Pay special attention to `bg-overlay`: confirm the alpha transparency is visible when placed over content

---

## Usage Rules

- Always use theme tokens in component styles. Never reference the intermediate Primary colors or Status groups directly. Those exist only as a shared reference layer.
- Use `bg.*` tokens for surface fills. Use `text.*` tokens for text color. Use `border.*` tokens for strokes.
- The `inverse` text tokens are for text on dark or brand-colored surfaces within light mode (and vice versa in dark mode). They do not mean "dark mode text."
- When pairing text on a status background (e.g., text on `bg.negative.softest`), validate contrast in both themes.
- `border.light` is for inner borders or dividers that match the lightest available surface. Its name is not theme-specific; in dark mode it resolves to a dark value.

## Component Token Mappings

This section grows as components are built.

| Component | Property | Theme Token |
|-----------|----------|-------------|
| | | |

## Audit Checklist

- [x] All theme tokens documented with Light and Dark mappings
- [x] Naming convention (loud/soft/softest) explained
- [x] Architecture (two-level aliasing) documented
- [x] Dark theme contrast validated (all tokens pass AAA on both surfaces)
- [x] Missing token gaps catalogued with priority and Figma setup guide
- [x] Status text color differentiation assessed (keep hue.10, revisit during component builds)
- [ ] P1 tokens created in Figma (text.disabled, bg.disabled, bg.overlay, icon.default, icon.soft)
- [ ] P2 tokens created in Figma (bg.hover, bg.pressed, border.disabled)
- [ ] P3 tokens created in Figma (remaining icon variants)
- [ ] All new tokens tested in both modes in Figma
