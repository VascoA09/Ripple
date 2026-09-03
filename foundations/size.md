---
foundation: size
last_updated: 2026-02-19
owner: Vasco Antunes
---

# Size Tokens

## Overview

Size tokens control the physical dimensions of UI elements: widths and heights. They define how tall a button is, how large an avatar is, and the min/max dimensions of containers.

These tokens are scoped to `WIDTH_HEIGHT` and `GAP` in Figma. For layout spacing (padding, margin, and general gaps), see `foundations/spacing.md`.

## Primitive Tokens

| Token | Value | Description |
|-------|-------|-------------|
| `size.100` | `16px` | Base. Small component height (compact badges, tags). |
| `size.125` | `20px` | Small-medium. Icon containers, small input heights. |
| `size.150` | `24px` | Medium-small. Default icon size, small avatar. |
| `size.200` | `32px` | Medium. Compact input height, small card dimension. |
| `size.250` | `40px` | Default. Standard input/button height. Minimum touch target. |
| `size.300` | `48px` | Large. Large button height, toolbar height. |
| `size.350` | `56px` | Extra-large. Header bar height, large input. |
| `size.400` | `64px` | Hero. Large avatar, feature card min-height. |
| `size.450` | `72px` | Extra-hero. Large tile height. |
| `size.500` | `80px` | Jumbo. Section element, large tile. |
| `size.525` | `84px` | Jumbo+. Specific component height (review if needed). |
| `size.550` | `88px` | Maximum. Largest standard component height. |

## Scale Analysis

```
100(16) -> 125(20) -> 150(24) -> 200(32) -> 250(40) -> 300(48) -> 350(56) -> 400(64) -> 450(72) -> 500(80) -> 525(84) -> 550(88)
```

| Range | Increment | Notes |
|-------|-----------|-------|
| 100-150 | 4px | Fine-grained control at small sizes |
| 150-500 | 8px | Core 8px grid |
| 500-550 | 4px | Fine-grained at upper end. `525` breaks naming pattern. |

**Observation**: `size.525` (84px) is the only token that doesn't follow the `x00`/`x50` naming convention. Validate which component requires exactly 84px. If 80px or 88px works, consider removing `525`.

## Semantic Tokens

### Component Heights

| Token | References | Description | Use when |
|-------|-----------|-------------|----------|
| `size.component.height.small` | `size.200` | Small component height | Compact inputs, small form elements |
| `size.component.height.default` | `size.250` | Default component height | Standard buttons, inputs, selects |
| `size.component.height.large` | `size.300` | Large component height | Large buttons, search bars |

### Icons

| Token | References | Description | Use when |
|-------|-----------|-------------|----------|
| `size.icon.small` | `size.100` | Small icon size (16px) | Inline icons, status indicators |

> These semantic tokens are confirmed and included in `foundations/figma-variables.md`. Refine values as component usage grows.
>
> **Removed 2026-09-03**: `size.component.height.compact`, `size.icon.default`, `size.icon.large` — audited with zero component usage. `compact`'s own "dense UI: small buttons, badges, tags" description didn't match any real component either: Badge runs 24–32px and Tag runs 20–32px, never 16px. `icon.default`/`icon.large` were unused because Button and Dropdown — the components that most need icon sizing — hardcode raw pixel icon sizes instead of using any size token. See the flag below.
>
> **Flag: Button and Dropdown icon sizing bypasses tokens entirely.** `Button.css` (`--_icon-size: 12px` / `14px` / `16px` / `18px` across size variants) and `Dropdown.css` (`16px` / `14px` / `18px`) hardcode icon dimensions rather than referencing any size token — a direct violation of the "tokens, not magic numbers" rule. Two of those values (`14px`, `18px`) don't exist on the primitive size scale at all (nearest neighbors are `size.100`=16px and `size.125`=20px), and the smallest (`12px`) is below `size.100`, the smallest primitive defined. Fixing this requires a real decision — extend the scale, or conform the components — that has been deliberately deferred, not resolved. Do not treat this note as closing the gap.

## Component Token Mappings

This section grows as components are built.

| Component | Property | Semantic Token |
|-----------|----------|---------------|
| | | |

## Usage Rules

- Use size tokens for all element dimensions. No hardcoded pixel values.
- Prefer semantic tokens over primitives. Use `size.component.height.default` rather than `size.250`.
- `min-height` is preferred over fixed `height` for components, to allow content to grow.
- Touch targets must meet 44px minimum. `size.250` (40px) is the closest token. For strict WCAG compliance, ensure clickable area reaches 44px including padding.
- `size.200` (32px) is below the touch target threshold. Do not use as the sole interactive area on touch devices.

## Audit Checklist

- [x] All primitives have a description
- [x] Naming follows dot notation convention
- [x] Semantic size tier audited 2026-09-03: `component.height.{small,default,large}` and `icon.small` are real and adopted; `component.height.compact`, `icon.default`, `icon.large` removed for zero usage
- [ ] Button/Dropdown hardcoded icon-size values (12/14/16/18px) flagged — not resolved, needs a scale-vs-component decision
- [ ] `size.525` usage validated (breaks naming pattern, needs justification)
- [ ] Touch target compliance validated for all interactive component heights
