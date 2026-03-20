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
| `size.component.height.compact` | `size.100` | Compact component height | Dense UI: small buttons, badges, tags |
| `size.component.height.small` | `size.200` | Small component height | Compact inputs, small form elements |
| `size.component.height.default` | `size.250` | Default component height | Standard buttons, inputs, selects |
| `size.component.height.large` | `size.300` | Large component height | Large buttons, search bars |

### Icons

| Token | References | Description | Use when |
|-------|-----------|-------------|----------|
| `size.icon.small` | `size.100` | Small icon size (16px) | Inline icons, status indicators |
| `size.icon.default` | `size.150` | Default icon size (24px) | Standard UI icons alongside text |
| `size.icon.large` | `size.200` | Large icon size (32px) | Standalone icons, empty states |

> **Note**: These semantic tokens are proposals. Validate against actual component usage and refine.

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
- [ ] No duplicate semantic intent
- [ ] `size.525` usage validated (breaks naming pattern, needs justification)
- [ ] Touch target compliance validated for all interactive component heights
