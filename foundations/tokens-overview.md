---
foundation: tokens
last_updated: 2026-02-19
owner: Vasco Antunes
---

# Token Architecture

## What Are Design Tokens

Design tokens are the atomic, named values that encode visual decisions. They replace hardcoded values (hex colors, pixel sizes, font stacks) with meaningful, reusable references. Tokens are the contract between design and code.

Every visual property in Ripple must reference a token. No exceptions.

## Three-Tier Taxonomy

Ripple organises tokens into three tiers. Each tier serves a different purpose and has different consumers.

### Tier 1: Primitive Tokens

Raw values. Named by what they literally are. These define the palette of available values.

**Format**: `{category}.{modifier}.{scale}`

Examples:
- `color.blue.500` = `#0066CC`
- `color.neutral.100` = `#F5F5F5`
- `spacing.4` = `4px`
- `spacing.16` = `16px`
- `font.size.14` = `14px`
- `elevation.shadow.1` = `0 1px 2px rgba(0,0,0,0.1)`

**Rules:**
- Primitives are the only tier that contains raw values
- Primitives are never referenced directly by components
- Primitives are maintained by the DS team only

### Tier 2: Semantic Tokens

Purpose-driven aliases. Named by what they mean, not what they look like. These are the primary tokens that components consume.

**Format**: `{category}.{context}.{variant}`

Examples:
- `color.text.primary` -> `color.neutral.900`
- `color.text.secondary` -> `color.neutral.600`
- `color.surface.default` -> `color.neutral.0`
- `color.surface.error` -> `color.red.50`
- `color.action.primary` -> `color.blue.600`
- `color.border.default` -> `color.neutral.200`
- `spacing.component.gap` -> `spacing.8`
- `spacing.component.padding` -> `spacing.16`
- `font.body.default` -> `font.size.14`

**Rules:**
- Semantic tokens always reference a primitive. Never a raw value.
- The name must be meaningful without seeing the underlying value. `color.text.primary` is correct. `color.blue.dark` is not semantic.
- If you cannot name it semantically, the decision it encodes may not be well enough understood yet.

### Tier 3: Component Tokens

Scoped to a specific component. Named by component, element, property, and variant. These allow per-component overrides while maintaining system consistency.

**Format**: `{component}.{element}.{property}.{variant}`

Examples:
- `button.background.color.primary` -> `color.action.primary`
- `button.background.color.secondary` -> `color.surface.default`
- `button.text.color.primary` -> `color.text.inverse`
- `button.padding.horizontal` -> `spacing.component.padding`
- `input.border.color.default` -> `color.border.default`
- `input.border.color.error` -> `color.border.error`

**Rules:**
- Component tokens reference semantic tokens. Never primitives.
- Component tokens are optional. Use them when a component needs values that differ from the semantic defaults.
- Not every component needs component tokens. If the semantic tokens are sufficient, do not create unnecessary indirection.

## Naming Conventions

- Dot notation: `color.text.primary`
- Lowercase only
- No abbreviations (`color` not `clr`, `background` not `bg`)
- No numbers in semantic or component token names (numbers belong in primitives only)
- Every token must have a description field explaining its intended use

## Token Lifecycle

| Status | Meaning |
|--------|---------|
| `active` | In use. Safe to reference. |
| `deprecated` | Scheduled for removal. Replacement documented. |
| `removed` | No longer available. Breaking change. |

When deprecating a token:
1. Add a `deprecated` status and a `replacement` field
2. Document the migration path in the relevant foundation file
3. Allow at least one major version cycle before removal

## Theming

Semantic tokens are the theming layer. To support multiple themes (e.g., light/dark mode), primitive values change but semantic token names stay the same.

- `color.surface.default` = `#FFFFFF` (light) / `#1A1A1A` (dark)
- Component code references `color.surface.default` and gets the correct value for the active theme

This means: components never need to know which theme is active. They reference semantic tokens and the theme resolves the value.

## Foundation Files

Each foundation area has its own documentation file following the token definition template:

| Foundation | File | Covers |
|-----------|------|--------|
| Color | `foundations/color.md` | Color primitives, semantics, contrast rules |
| Typography | `foundations/typography.md` | Type scale, font stacks, line heights |
| Spacing | `foundations/spacing.md` | Whitespace: padding, margin, gaps (ALL_SCOPES) |
| Size | `foundations/size.md` | Element dimensions: widths, heights (WIDTH_HEIGHT, GAP) |
| Elevation | `foundations/elevation.md` | Shadow and depth system |
| Motion | `foundations/motion.md` | Animation timing, easing, principles |
| Iconography | `foundations/iconography.md` | Icon sizing, naming, usage |
| Borders | `foundations/borders.md` | Border radius, widths, styles |
| Theming | `foundations/themes.md` | Light/dark mode, semantic color mappings, theme architecture |

Create each file when you have real content for it. Do not create empty placeholders.
