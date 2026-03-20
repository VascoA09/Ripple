---
foundation: spacing
last_updated: 2026-02-19
owner: Vasco Antunes
---

# Spacing Tokens

## Overview

Spacing tokens control the whitespace in and around UI elements: padding, margin, and gaps. They create consistent rhythm and density across all Ripple layouts and components.

These tokens are scoped to `ALL_SCOPES` in Figma, meaning they can apply to any spatial property. For element dimensions (widths, heights), see `foundations/size.md`.

## Primitive Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `spacing.none` | `0` | No spacing. Use when elements need to be flush. |
| `spacing.25` | `4px` | Tightest. Micro-spacing within compact components (icon-to-text in small badges). |
| `spacing.50` | `8px` | Tight. Default inline spacing within components (icon-to-label, gap between related items). |
| `spacing.75` | `12px` | Compact. Slightly more room than tight. Internal component padding in compact variants. |
| `spacing.100` | `16px` | Base. Default component padding. Standard gap between form fields. |
| `spacing.125` | `20px` | Comfortable. Slightly more generous padding for medium containers. |
| `spacing.150` | `24px` | Relaxed. Card padding, gap between card grid items. |
| `spacing.200` | `32px` | Spacious. Section padding, generous card padding. |
| `spacing.250` | `40px` | Wide. Large section gaps, dialog padding. |
| `spacing.400` | `64px` | Extra-wide. Page section separators, major layout gaps. |
| `spacing.600` | `96px` | Layout. Large layout spacing, page margins on wide viewports. |
| `spacing.800` | `128px` | Maximum. Largest layout spacing, hero section vertical padding. |

## Scale Analysis

```
none(0) -> 25(4) -> 50(8) -> 75(12) -> 100(16) -> 125(20) -> 150(24) -> 200(32) -> 250(40) -> 400(64) -> 600(96) -> 800(128)
```

| Range | Increment | Purpose |
|-------|-----------|---------|
| none-75 | 4px | Fine-grained control for internal component spacing |
| 75-250 | 4-8px | Component and element-level spacing |
| 250-800 | 24-32px | Layout-level spacing (jumps are intentionally large) |

**Note**: The scale has a deliberate gap between `250` (40px) and `400` (64px). There is no `spacing.300` (48px) or `spacing.350` (56px). This is a conscious design choice: at this range, you are spacing layout sections, not components, and fewer options reduce decision fatigue. If you find yourself needing 48px spacing frequently, consider adding `spacing.300`.

## Semantic Tokens

### Component Padding

| Token | References | Description | Use when |
|-------|-----------|-------------|----------|
| `spacing.component.padding.tight` | `spacing.50` | Tight internal padding | Compact buttons, badges, tags |
| `spacing.component.padding.default` | `spacing.100` | Default internal padding | Standard buttons, inputs, cards |
| `spacing.component.padding.relaxed` | `spacing.150` | Relaxed internal padding | Generous cards, dialogs |

### Component Gaps

| Token | References | Description | Use when |
|-------|-----------|-------------|----------|
| `spacing.component.gap.inline` | `spacing.25` | Inline element gap | Icon-to-label, inline badges, chips |
| `spacing.component.gap.tight` | `spacing.50` | Tight gap between siblings | Related items within a component (button group, input + help text) |
| `spacing.component.gap.default` | `spacing.100` | Default gap between siblings | Form fields, list items, card content sections |
| `spacing.component.gap.relaxed` | `spacing.150` | Relaxed gap | Card grid, wider form layouts |

### Layout Spacing

| Token | References | Description | Use when |
|-------|-----------|-------------|----------|
| `spacing.layout.section.small` | `spacing.200` | Small section gap | Between related content blocks |
| `spacing.layout.section.default` | `spacing.250` | Default section gap | Between page sections |
| `spacing.layout.section.large` | `spacing.400` | Large section gap | Between major page regions |
| `spacing.layout.page.padding` | `spacing.150` | Page content padding | Default page-level horizontal padding |
| `spacing.layout.page.margin` | `spacing.600` | Wide viewport margin | Page margins on large screens |

> **Note**: These semantic tokens are proposals. Validate against actual component and layout usage and refine.

## Component Token Mappings

This section grows as components are built.

| Component | Property | Semantic Token |
|-----------|----------|---------------|
| | | |

## Relationship to Size Tokens

Ripple separates spacing and size into two collections:

| Collection | Purpose | Figma scope | Foundation file |
|-----------|---------|-------------|-----------------|
| **Spacing** | Whitespace: padding, margin, gaps | `ALL_SCOPES` | This file |
| **Size** | Dimensions: widths, heights | `WIDTH_HEIGHT`, `GAP` | `foundations/size.md` |

Both share the same base unit (4px) and are compatible. A `spacing.100` (16px) and a `size.100` (16px) produce the same value, but they carry different intent. Use the correct collection for the property type.

## Usage Rules

- Use spacing tokens for all whitespace properties (padding, margin, gap). No hardcoded pixel values.
- Prefer semantic tokens over primitives. Use `spacing.component.padding.default` rather than `spacing.100`.
- The 4px base unit is the foundation. If you need a value not on the scale, question the design decision.
- Use the lower end of the scale (25-150) for component internals. Use the upper end (200-800) for layout.
- `spacing.none` is explicit "no space." Prefer it over omitting the property entirely, so the intention is clear.
- When a component has multiple density variants (compact, default, comfortable), map each variant to a different semantic spacing token.

## Audit Checklist

- [x] All primitives have a description
- [x] Naming follows dot notation convention
- [ ] No duplicate semantic intent
- [ ] Responsive spacing adjustments documented (smaller spacing on mobile?)
- [ ] Missing `spacing.300` (48px) validated as intentional
