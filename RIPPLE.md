# RIPPLE — AI Reference

Ripple is Unit4's design system for product UI. This file is the entry point for AI tools (Claude Code, Figma Make, etc.) consuming Ripple as a source of truth.

**Stack**: React 18+, TypeScript, CSS custom properties
**Package**: `@ripple/ui`
**Install**: `npm install github:VascoA09/Ripple --legacy-peer-deps`
**Peer deps**: `npm install lucide-react --legacy-peer-deps` (required, not bundled)
**Typeface**: Open Sans (via `@fontsource-variable/open-sans`)
**Scope**: B2B enterprise software, people-centric service organisations

---

## Rules for AI-generated prototypes

These rules are non-negotiable. Apply them to every file you generate.

1. **Use tokens, not hardcoded values.** Every color, spacing, radius, shadow, font size, and line height must reference a CSS custom property from Ripple's token system. Never use raw hex values, pixel values, or named colors directly in CSS or inline styles.
2. **Import the stylesheet.** All prototypes must include `import '@ripple/ui/style.css'` at the root of the app. This loads all tokens, themes, and component styles.
3. **Use Ripple components.** When a UI need matches an existing Ripple component, use it. Do not build custom equivalents. Check `components/_index.md` before creating anything new.
4. **Follow Ripple patterns and layouts.** For navigation, footer, and page structure, use `patterns/` and `layouts/` as the reference. Do not invent structural patterns from scratch.
5. **Accessibility is the baseline.** WCAG 2.2 AA minimum. Semantic HTML, keyboard navigation, visible focus states, sufficient color contrast, screen reader labels. If it is not accessible, it is not done.
6. **New components must align with foundations.** If a prototype introduces a component not in Ripple, it must still use Ripple tokens for all visual values, follow Ripple's spacing scale, and meet the accessibility requirements above.
7. **Open Sans is the only UI typeface.** Do not introduce other fonts. Font tokens are defined in `src/tokens/typography.css`.
8. **Light theme is the default.** The `data-theme="light"` attribute on the root element activates the default theme. See `foundations/themes.md` for dark mode and theme switching.

---

## Content map

### Foundations
Core visual and interaction principles. Read these before generating any UI.

| Topic | File |
|-------|------|
| Token architecture overview | `foundations/tokens-overview.md` |
| Color system + all color tokens | `foundations/color.md` |
| Typography scale + tokens | `foundations/typography.md` |
| Spacing scale + tokens | `foundations/spacing.md` |
| Grid system | `foundations/grid.md` |
| Border tokens | `foundations/borders.md` |
| Size tokens | `foundations/size.md` |
| Themes (light/dark/modes) | `foundations/themes.md` |
| Accessibility requirements | `foundations/accessibility.md` |

### Token files (CSS source)
| File | Contains |
|------|----------|
| `src/tokens/primitives.css` | Tier 1 raw values — all color stops, raw spacing, etc. |
| `src/tokens/themes.css` | Tier 2 semantic tokens — purpose-driven aliases, theming layer |
| `src/tokens/typography.css` | Typography scale, font family, weight, line height tokens |
| `src/tokens/grid.css` | Grid and layout tokens |
| `src/tokens/index.css` | Imports all token files — single entry point |
| `dist/style.css` | Full compiled output — use this in prototypes |

### Components
All component specs are in `components/`. All implementations are in `src/components/`.

**Index and status**: `components/_index.md`

| Component | Spec | Implementation |
|-----------|------|----------------|
| Accordion | `components/accordion.md` | `src/components/Accordion/` |
| Avatar | `components/avatar.md` | `src/components/Avatar/` |
| Badge | `components/badge.md` | `src/components/Badge/` |
| BannerAlert | `components/banner-alert.md` | `src/components/BannerAlert/` |
| Breadcrumbs | `components/breadcrumbs.md` | `src/components/Breadcrumbs/` |
| Button | `components/button.md` | `src/components/Button/` |
| ButtonsToolbar | `components/buttons-toolbar.md` | `src/components/ButtonsToolbar/` |
| Card | `components/card.md` | `src/components/Card/` |
| Checkbox | `components/checkbox.md` | `src/components/Checkbox/` |
| Chip | `components/chip.md` | `src/components/Chip/` |
| Combobox | `components/combobox.md` | `src/components/Combobox/` |
| Counter | `components/counter.md` | `src/components/Counter/` |
| Dialog | `components/dialog.md` | `src/components/Dialog/` |
| Divider | `components/divider.md` | `src/components/Divider/` |
| Drawer | `components/drawer.md` | `src/components/Drawer/` |
| Dropdown | `components/dropdown.md` | `src/components/Dropdown/` |
| FieldLabel | `components/field-label.md` | `src/components/FieldLabel/` |
| FileUploader | `components/file-uploader.md` | `src/components/FileUploader/` |
| FileViewer | `components/file-viewer.md` | `src/components/FileViewer/` |
| FlyoutMenu | `components/flyout-menu.md` | `src/components/FlyoutMenu/` |
| Hint | `components/hint.md` | `src/components/Hint/` |
| IconBadge | `components/icon-badge.md` | `src/components/IconBadge/` |
| IconButton | `components/icon-button.md` | `src/components/IconButton/` |
| Link | `components/link.md` | `src/components/Link/` |
| List | `components/list.md` | `src/components/List/` |
| Navbar | `components/navbar.md` | `src/components/Navbar/` |
| PageHeader | `components/page-header.md` | `src/components/PageHeader/` |
| Panel | `components/panel.md` | `src/components/Panel/` |
| ProgressBar | `components/progress-bar.md` | `src/components/ProgressBar/` |
| ProgressCircle | `components/progress-circle.md` | `src/components/ProgressCircle/` |
| Radio | `components/radio.md` | `src/components/Radio/` |
| Range | `components/range.md` | `src/components/Range/` |
| Section | `components/section.md` | `src/components/Section/` |
| Spinner | `components/spinner.md` | `src/components/Spinner/` |
| SplitButton | `components/split-button.md` | `src/components/SplitButton/` |
| Stepper | `components/stepper.md` | `src/components/Stepper/` |
| Switch | `components/switch.md` | `src/components/Switch/` |
| Tabs | `components/tabs.md` | `src/components/Tabs/` |
| Tag | `components/tag.md` | `src/components/Tag/` |
| TextArea | `components/text-area.md` | `src/components/TextArea/` |
| TextInput | `components/text-input.md` | `src/components/TextInput/` |
| Toast | `components/toast.md` | `src/components/Toast/` |
| Tooltip | `components/tooltip.md` | `src/components/Tooltip/` |
| ValidationMessage | `components/validation-message.md` | `src/components/ValidationMessage/` |

### Patterns
Compositions of multiple components with defined behaviour.

| Pattern | Spec |
|---------|------|
| Index + status | `patterns/_index.md` |
| Footer | `patterns/footer.md` |
| Main Navigation | `patterns/main-navigation.md` |

### Layouts
Structural scaffolds with no behavioural logic of their own.

| Layout | Spec |
|--------|------|
| Index + status | `layouts/_index.md` |
| Micro Navigation | `layouts/micro-navigation.md` |

### Templates
Use these when creating new Ripple content.

| Template | File |
|----------|------|
| Component spec | `templates/component-spec.md` |
| Component review checklist | `templates/component-review-checklist.md` |
| Token definition | `templates/token-definition.md` |
| Changelog entry | `templates/changelog-entry.md` |

---

## How to use Ripple in a React prototype

### Install
```bash
npm install github:VascoA09/Ripple
```

### Setup
```tsx
// main.tsx or App.tsx
import '@ripple/ui/style.css'
```

Clear any template CSS (e.g. Vite's default `src/index.css` and `src/App.css`) — they define conflicting `:root` variables that override Ripple tokens. Replace with a minimal reset:
```css
/* src/index.css */
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: var(--font-family-base); color: var(--text); background: var(--bg-canvas); }
#root { min-height: 100svh; }
```

Set the theme on the root element:
```html
<div data-theme="light">
  <!-- your app -->
</div>
```

### Import components
```tsx
import { Button, TextInput, Tag, Badge, Card } from '@ripple/ui'
import { MainNavigation } from '@ripple/ui'
import { Footer } from '@ripple/ui'
```

### Use tokens in custom CSS
```css
.my-custom-element {
  color: var(--text);
  background: var(--bg-surface);
  padding: var(--spacing-150);
  border-radius: var(--border-radius-200);
  font-size: var(--font-size-100);
  border: 1px solid var(--border-neutral);
}
```

Never do this:
```css
/* Wrong — hardcoded values are not Ripple */
.my-custom-element {
  color: #1a1a2e;
  padding: 12px;
  border-radius: 6px;
}
```

Common semantic tokens:
| Token | Purpose |
|-------|---------|
| `--text` | Default body text |
| `--text-loud` | High-emphasis text, headings |
| `--text-soft` | Secondary / muted text |
| `--text-accent` | Primary brand color text |
| `--bg-canvas` | Page background |
| `--bg-surface` | Card / panel surface |
| `--bg-primary` | Primary action background |
| `--border-neutral` | Default border |
| `--border-primary` | Primary accent border |
| `--spacing-50` | 8px |
| `--spacing-100` | 16px |
| `--spacing-150` | 24px |
| `--spacing-200` | 32px |
| `--font-size-80` | Small text |
| `--font-size-100` | Body (16px) |
| `--font-size-200` | Large body |
| `--font-size-400` | Heading |
| `--font-size-500` | Display heading |
| `--border-radius-100` | 4px |
| `--border-radius-200` | 8px |
| `--border-radius-full` | Pill / circle |

Full token reference: `src/tokens/themes.css` (semantic), `src/tokens/primitives.css` (raw values).

---

## Token naming conventions

Ripple uses a three-tier token system:

- **Tier 1 — Primitives**: raw values, named by value. `--color-blue-90`, `--spacing-100`. Defined in `src/tokens/primitives.css`. Never use directly in components or custom UI.
- **Tier 2 — Semantic**: purpose-driven aliases. `--text`, `--bg-surface`, `--border-neutral`, `--bg-primary`. Defined in `src/tokens/themes.css`. Use these in all custom UI.
- **Tier 3 — Component**: scoped to a specific component, prefixed with `--_`. Defined in each component's CSS file. Do not reference these outside their component.

All token names use kebab-case with dot-notation expressed as hyphens. No abbreviations. No numbers in semantic or component token names.

---

## Component anatomy

Each component in `src/components/{Name}/` has four files:

- `{Name}.tsx` — React component, TypeScript props interface, exported named function
- `{Name}.css` — scoped styles using CSS custom properties, BEM-style class names
- `{Name}.stories.tsx` — Storybook stories for all variants and states
- `index.ts` — re-exports the component and its types

All components are exported from `src/index.ts` and available via `import { ComponentName } from '@ripple/ui'`.

---

## Accessibility requirements (non-negotiable)

- WCAG 2.2 AA minimum
- All interactive elements keyboard operable
- Visible focus indicator on all focusable elements
- Semantic HTML — use `<button>`, `<input>`, `<nav>`, `<main>`, `<aside>` correctly
- Color contrast: 4.5:1 for normal text, 3:1 for large text and UI components
- Touch targets: 44×44px minimum for interactive elements
- Screen reader labels on all interactive elements without visible text
- `prefers-reduced-motion` respected — no essential information conveyed only through animation

---

## Governance

- Contribution model: `governance/contribution-model.md`
- Component candidates under consideration: `CANDIDATES.md`
- Full system overview: `overview.md`
