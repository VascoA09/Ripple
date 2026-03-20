---
foundation: color
last_updated: 2026-02-19
owner: Vasco Antunes
---

# Color Tokens

## Overview

Color tokens encode every color decision in Ripple. They control surfaces, text, borders, icons, and interactive states across all Unit4 products. Consistent use of color tokens ensures visual coherence, accessibility compliance, and theme support (light/dark mode).

Ripple's color system uses 12 hue scales plus black and white. Each scale runs from 100 (darkest) to 10 (lightest), providing a full range for text, surfaces, and interactive elements.

## Primitive Tokens

### Black and White

| Token | Value | Description |
|-------|-------|-------------|
| `color.black` | `#000000` | Pure black. Use sparingly. Prefer gray.100 for most dark text. |
| `color.white` | `#FFFFFF` | Pure white. Primary surface color in light theme. |

### Gray

Neutral scale. No color bias. Use for text, borders, disabled states, and neutral surfaces.

| Token | Value | Description |
|-------|-------|-------------|
| `color.gray.100` | `#252828` | Darkest gray. Primary text on light backgrounds. |
| `color.gray.90` | `#373939` | Secondary dark text. |
| `color.gray.80` | `#424747` | Tertiary text, strong icons. |
| `color.gray.70` | `#737373` | Placeholder text, subtle icons. |
| `color.gray.60` | `#8D9090` | Disabled text. |
| `color.gray.50` | `#989A9A` | Muted text, secondary labels. |
| `color.gray.40` | `#B7B9B9` | Subtle borders, dividers. |
| `color.gray.30` | `#D8D9D9` | Default borders, card outlines. |
| `color.gray.20` | `#EAEAEA` | Subtle backgrounds, hover surfaces. |
| `color.gray.10` | `#F9F9F9` | Lightest gray. Subtle surface tint. |

### Cool Gray

Blue-tinted neutral scale. Use for UI chrome, sidebars, and backgrounds that need subtle depth.

| Token | Value | Description |
|-------|-------|-------------|
| `color.cool.gray.100` | `#2F3B42` | Darkest cool gray. |
| `color.cool.gray.90` | `#394850` | Dark cool gray. |
| `color.cool.gray.80` | `#4A5A64` | Medium-dark cool gray. |
| `color.cool.gray.70` | `#7C8D98` | Mid-tone cool gray. |
| `color.cool.gray.60` | `#909FA7` | Light-mid cool gray. |
| `color.cool.gray.50` | `#A6B2B9` | Light cool gray. |
| `color.cool.gray.40` | `#BBC6CE` | Subtle cool gray. |
| `color.cool.gray.30` | `#DFE6EC` | Background cool gray. |
| `color.cool.gray.20` | `#EBF0F4` | Light background cool gray. |
| `color.cool.gray.10` | `#F5F8FA` | Lightest cool gray. |

### Blue

Primary brand and action color. Use for interactive elements, links, focus states, and primary actions.

| Token | Value | Description |
|-------|-------|-------------|
| `color.blue.100` | `#004C6F` | Darkest blue. |
| `color.blue.90` | `#005E8A` | Dark blue. |
| `color.blue.80` | `#0076AD` | Strong blue. Primary action on light backgrounds. |
| `color.blue.70` | `#0CA2E9` | Vivid blue. |
| `color.blue.60` | `#3DBAF5` | Bright blue. |
| `color.blue.50` | `#64C8F7` | Medium blue. |
| `color.blue.40` | `#9DDDFB` | Light blue. |
| `color.blue.30` | `#C5EAFC` | Subtle blue. |
| `color.blue.20` | `#E1F3FC` | Background blue. |
| `color.blue.10` | `#F1FAFF` | Lightest blue. Info surface tint. |

### Green

Success and positive outcomes. Use for success states, confirmations, and positive indicators.

| Token | Value | Description |
|-------|-------|-------------|
| `color.green.100` | `#2D6100` | Darkest green. |
| `color.green.90` | `#3C8000` | Dark green. |
| `color.green.80` | `#64A329` | Strong green. Success text on light backgrounds. |
| `color.green.70` | `#7EB843` | Vivid green. |
| `color.green.60` | `#96C76B` | Bright green. |
| `color.green.50` | `#ABD388` | Medium green. |
| `color.green.40` | `#C0DEA5` | Light green. |
| `color.green.30` | `#D0E6BC` | Subtle green. |
| `color.green.20` | `#DFEFD2` | Background green. |
| `color.green.10` | `#EFF7E9` | Lightest green. Success surface tint. |

### Emerald

Secondary green. Use for data visualisation, categories, and decorative accents where green is already taken by success states.

| Token | Value | Description |
|-------|-------|-------------|
| `color.emerald.100` | `#195C42` | Darkest emerald. |
| `color.emerald.90` | `#217354` | Dark emerald. |
| `color.emerald.80` | `#247F5C` | Strong emerald. |
| `color.emerald.70` | `#39A078` | Vivid emerald. |
| `color.emerald.60` | `#55AD8B` | Bright emerald. |
| `color.emerald.50` | `#7FC2A8` | Medium emerald. |
| `color.emerald.40` | `#95CCB7` | Light emerald. |
| `color.emerald.30` | `#B2DACB` | Subtle emerald. |
| `color.emerald.20` | `#D4EBE2` | Background emerald. |
| `color.emerald.10` | `#EAF5F1` | Lightest emerald. |

### Aqua

Teal/cyan family. Use for data visualisation, categories, and informational accents distinct from blue.

| Token | Value | Description |
|-------|-------|-------------|
| `color.aqua.100` | `#01545B` | Darkest aqua. |
| `color.aqua.90` | `#1A6166` | Dark aqua. |
| `color.aqua.80` | `#1F767C` | Strong aqua. |
| `color.aqua.70` | `#13A4B0` | Vivid aqua. |
| `color.aqua.60` | `#4DBAC4` | Bright aqua. |
| `color.aqua.50` | `#67C4CC` | Medium aqua. |
| `color.aqua.40` | `#80CED5` | Light aqua. |
| `color.aqua.30` | `#ADE0E4` | Subtle aqua. |
| `color.aqua.20` | `#CCEBEE` | Background aqua. |
| `color.aqua.10` | `#E5F6F8` | Lightest aqua. |

### Purple

Use for data visualisation, categories, and decorative accents. Also suitable for AI/smart features if a distinct color family is needed.

| Token | Value | Description |
|-------|-------|-------------|
| `color.purple.100` | `#47428D` | Darkest purple. |
| `color.purple.90` | `#5B55B5` | Dark purple. |
| `color.purple.80` | `#6A64C5` | Strong purple. |
| `color.purple.70` | `#8983EE` | Vivid purple. |
| `color.purple.60` | `#9891FC` | Bright purple. |
| `color.purple.50` | `#AEA9FC` | Medium purple. |
| `color.purple.40` | `#BFBBFD` | Light purple. |
| `color.purple.30` | `#D8D6FE` | Subtle purple. |
| `color.purple.20` | `#E5E4FE` | Background purple. |
| `color.purple.10` | `#F2F1FF` | Lightest purple. |

### Violet

Use for data visualisation and categorical distinction alongside purple.

| Token | Value | Description |
|-------|-------|-------------|
| `color.violet.100` | `#654578` | Darkest violet. |
| `color.violet.90` | `#82599A` | Dark violet. |
| `color.violet.80` | `#885DA2` | Strong violet. |
| `color.violet.70` | `#C18DDE` | Vivid violet. |
| `color.violet.60` | `#C99DE2` | Bright violet. |
| `color.violet.50` | `#D7B5E9` | Medium violet. |
| `color.violet.40` | `#DEC2ED` | Light violet. |
| `color.violet.30` | `#EBDAF4` | Subtle violet. |
| `color.violet.20` | `#F2E6F8` | Background violet. |
| `color.violet.10` | `#F8F3FB` | Lightest violet. |

### Pink

Use for data visualisation and categorical distinction.

| Token | Value | Description |
|-------|-------|-------------|
| `color.pink.100` | `#622D40` | Darkest pink. |
| `color.pink.90` | `#7E3A52` | Dark pink. |
| `color.pink.80` | `#8C405B` | Strong pink. |
| `color.pink.70` | `#E2769B` | Vivid pink. |
| `color.pink.60` | `#E891AF` | Bright pink. |
| `color.pink.50` | `#EEADC3` | Medium pink. |
| `color.pink.40` | `#F1BBCD` | Light pink. |
| `color.pink.30` | `#F6D6E1` | Subtle pink. |
| `color.pink.20` | `#F9E4EB` | Background pink. |
| `color.pink.10` | `#FCF1F5` | Lightest pink. |

### Red

Error and destructive states. Use for error messages, destructive actions, and critical alerts.

| Token | Value | Description |
|-------|-------|-------------|
| `color.red.100` | `#990606` | Darkest red. |
| `color.red.90` | `#B70606` | Dark red. Error text on light backgrounds. |
| `color.red.80` | `#D00B0B` | Strong red. Primary error indicator. |
| `color.red.70` | `#E5524D` | Vivid red. |
| `color.red.60` | `#F16A65` | Bright red. |
| `color.red.50` | `#F48985` | Medium red. |
| `color.red.40` | `#F6A09D` | Light red. |
| `color.red.30` | `#F8B7B4` | Subtle red. |
| `color.red.20` | `#FBD2D0` | Background red. Error surface. |
| `color.red.10` | `#FDE8E6` | Lightest red. Error surface tint. |

### Orange

Warning states. Use for warning messages and caution indicators.

| Token | Value | Description |
|-------|-------|-------------|
| `color.orange.100` | `#993D00` | Darkest orange. |
| `color.orange.90` | `#B84C05` | Dark orange. Warning text on light backgrounds. |
| `color.orange.80` | `#D25B0B` | Strong orange. Primary warning indicator. |
| `color.orange.70` | `#F08842` | Vivid orange. |
| `color.orange.60` | `#F29D64` | Bright orange. |
| `color.orange.50` | `#F5B185` | Medium orange. |
| `color.orange.40` | `#FAC099` | Light orange. |
| `color.orange.30` | `#FFCEAD` | Subtle orange. |
| `color.orange.20` | `#FFE0CC` | Background orange. Warning surface. |
| `color.orange.10` | `#FFEDE0` | Lightest orange. Warning surface tint. |

### Ochre

Warm neutral accent. Use for data visualisation and categorical distinction.

| Token | Value | Description |
|-------|-------|-------------|
| `color.ochre.100` | `#5A4F22` | Darkest ochre. |
| `color.ochre.90` | `#74662C` | Dark ochre. |
| `color.ochre.80` | `#816F28` | Strong ochre. |
| `color.ochre.70` | `#D1BC69` | Vivid ochre. |
| `color.ochre.60` | `#D9C782` | Bright ochre. |
| `color.ochre.50` | `#DECF94` | Medium ochre. |
| `color.ochre.40` | `#E4D7A6` | Light ochre. |
| `color.ochre.30` | `#EFE7C9` | Subtle ochre. |
| `color.ochre.20` | `#F4EFDB` | Background ochre. |
| `color.ochre.10` | `#FAF7ED` | Lightest ochre. |

## Semantic Tokens

Ripple's semantic color tokens live in the Theme collection, documented in `foundations/themes.md`. The Theme collection defines how primitives map to purpose-driven names across Light and Dark modes using a `loud/soft/softest` intensity convention.

This file documents the **primitive palette** only. For semantic usage (text, background, border, status colors), see `foundations/themes.md`.

## Component Token Mappings

This section grows as components are built.

| Component | Property | Semantic Token |
|-----------|----------|---------------|
| | | |

## Usage Rules

- Never use primitive color tokens directly in component styles. Always go through semantic tokens.
- Never hardcode hex values. If a hex value appears in code, it must be replaced with a token.
- The semantic role of a color determines the token, not the visual appearance. If you need a blue surface, use the appropriate semantic surface token. Do not pick `color.blue.10` directly.
- Red is reserved for errors and destructive actions in UI. Do not use red primitives for decorative or brand purposes in product UI.
- Orange is reserved for warnings. Do not use for general accent color.
- Green is reserved for success states. Use emerald for non-semantic green needs (data viz, categories).
- For data visualisation, use the extended palette: emerald, aqua, purple, violet, pink, ochre. These are not tied to semantic meaning in UI.

## Accessibility

- **Text on surfaces**: all text/surface combinations must meet WCAG 2.1 AA contrast ratios (4.5:1 normal text, 3:1 large text).
- **UI components**: interactive elements must meet 3:1 contrast against adjacent colors.
- **Do not rely on color alone** to convey meaning. Always pair color with an icon, label, or pattern.
- The 100-80 range of each scale is suitable for text on light backgrounds. The 10-20 range is suitable for tinted surfaces. Mid-range values (40-60) need contrast validation before use with text.

## Naming Anomaly

The Figma export contains `color-cool-grey-10` (with "grey" spelling) for the lightest cool gray value. The Ripple documentation normalises this to `color.cool.gray.10` for consistency. Update the Figma variable name when convenient.

## Audit Checklist

- [x] All primitives have a description
- [x] All semantic tokens reference a primitive (no orphans)
- [x] Naming follows dot notation convention
- [ ] No duplicate semantic intent (two tokens meaning the same thing)
- [ ] Accessibility contrast ratios validated for all semantic text/surface pairings
- [x] Dark theme semantic mappings defined (see `foundations/themes.md`)
