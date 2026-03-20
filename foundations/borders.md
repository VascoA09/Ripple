---
foundation: borders
last_updated: 2026-02-19
owner: Vasco Antunes
---

# Border Tokens

## Overview

Border tokens control the shape and edge treatment of UI elements across Ripple. They encode two decisions: how rounded an element is (radius) and how thick its border stroke is (width). Consistent use of these tokens prevents visual fragmentation across components and products.

## Primitive Tokens

### Radius

| Token | Value | Description |
|-------|-------|-------------|
| `border.radius.none` | `0` | No rounding. Sharp corners. Use for containers that need hard edges. |
| `border.radius.100` | `4px` | Subtle rounding. Default for small elements like inputs and badges. |
| `border.radius.150` | `6px` | Slight rounding. Intermediate option between subtle and moderate. |
| `border.radius.200` | `8px` | Moderate rounding. Default for cards and medium containers. |
| `border.radius.300` | `12px` | Pronounced rounding. Use for prominent surfaces like modals and popovers. |
| `border.radius.400` | `16px` | Heavy rounding. Use for large feature cards or hero containers. |
| `border.radius.pill` | `999px` | Full pill shape. Use for pill buttons, tags, and badges. |
| `border.radius.circle` | `999px` | Circular shape. References `border.radius.pill`. Use for avatars and icon containers. |

### Width

| Token | Value | Description |
|-------|-------|-------------|
| `border.width.none` | `0` | No border. |
| `border.width.100` | `1px` | Default border. Use for most bordered elements (inputs, cards, dividers). |
| `border.width.200` | `2px` | Emphasised border. Use for focus indicators and selected states. |
| `border.width.400` | `4px` | Heavy border. Use sparingly for strong visual emphasis or active indicators. |

## Semantic Tokens

These will be defined as components are built. Semantic border tokens map intent to primitives.

| Token | References | Description | Use when |
|-------|-----------|-------------|----------|
| `border.radius.component.default` | `border.radius.100` | Default component rounding | Standard interactive elements (buttons, inputs, selects) |
| `border.radius.container.default` | `border.radius.200` | Default container rounding | Cards, panels, content areas |
| `border.radius.overlay.default` | `border.radius.300` | Default overlay rounding | Modals, popovers, dropdowns |
| `border.width.default` | `border.width.100` | Standard border | Default bordered elements |
| `border.width.focus` | `border.width.200` | Focus indicator border | Keyboard focus states |

> **Note**: These semantic tokens are initial proposals based on common patterns. Refine as components are specced and reviewed.

## Component Token Mappings

This section grows as components are built.

| Component | Property | Semantic Token |
|-----------|----------|---------------|
| | | |

## Usage Rules

- Always use a border token. Never hardcode pixel values for radius or width.
- `border.radius.circle` and `border.radius.pill` produce the same visual result (`999px`). Use `circle` for elements that are square (1:1 aspect ratio, e.g., avatars). Use `pill` for elements that are wider than tall (e.g., tags, pill buttons).
- `border.width.400` is reserved for strong emphasis. If you're reaching for it, question whether the visual weight is justified.
- Focus indicators must use `border.width.200` minimum to meet WCAG 2.1 AA visibility requirements.
- Do not combine multiple radius values on a single element (e.g., different radius per corner) unless explicitly specced and justified.

## Scale Rationale

The radius scale follows a progressive curve:

```
none(0) -> 100(4) -> 150(6) -> 200(8) -> 300(12) -> 400(16) -> pill(999)
```

The width scale is deliberately sparse. Most UI needs only two states: bordered (`100`) and emphasised (`200`). The `400` value exists for rare, high-emphasis cases.

## Audit Checklist

- [x] All primitives have a description
- [x] All semantic tokens reference a primitive (no orphans)
- [x] Naming follows dot notation convention
- [ ] No duplicate semantic intent (two tokens meaning the same thing)
- [x] Accessibility requirements met (focus indicator width meets WCAG)
