# Ripple

Unit4's design system for product UI. Foundations, tokens, components, and patterns for building consistent, accessible enterprise interfaces.

**AI tools**: see [RIPPLE.md](./RIPPLE.md) for the full content map and usage rules.

---

## Install

```bash
npm install github:VascoA09/Ripple --legacy-peer-deps
```

Icons ship bundled with Ripple (Font Awesome Pro, Regular style, self-hosted as SVG components) — no separate icon package to install.

## Setup

```tsx
// main.tsx or App.tsx
import '@ripple/ui/style.css'
```

Activate the theme on your root element:

```html
<div data-theme="light">
  <!-- your app -->
</div>
```

## Use

```tsx
import { Button, TextInput, Tag, Card } from '@ripple/ui'
```

Build application shells with a layout, never by wiring the Navbar yourself:

```tsx
import { MicroNavigation } from '@ripple/ui'      // default: Navbar + Footer tab bar
import { StandardNavigation } from '@ripple/ui'   // Navbar only, no Footer

<MicroNavigation
  nav={{
    productName: 'ERPx',
    productFullName: 'Unit4 ERPx',
    globalNavItems: [{ id: 'search', label: 'Search', icon: <Search size={20} />, drawerId: 'search' }],
    drawers: [{ id: 'search', size: 'small', content: <SearchDrawer /> }],
    userName: 'Sam Rivera',
    userMenuItems,
  }}
  footer={footerProps}
>
  {page}
</MicroNavigation>
```

---

## What's in this repo

| Directory | Contents |
|-----------|----------|
| `foundations/` | Color, typography, spacing, grid, themes, accessibility |
| `components/` | Specs for all 44 components |
| `patterns/` | Composed UI patterns (Navbar, Footer). Main Navigation is deprecated: use Navbar |
| `layouts/` | Structural layout scaffolds (Micro Navigation, the default; Standard Navigation) |
| `templates/` | Authoring templates for new specs |
| `governance/` | Contribution model |
| `src/` | React/TypeScript implementation |
| `dist/` | Compiled output — JS, CJS, and CSS |

---

## Versioning

Pin to a tag for stability:

```bash
npm install github:VascoA09/Ripple#v0.1.0
```

Use `main` for the latest:

```bash
npm install github:VascoA09/Ripple
```

---

## License

Private. Unit4 internal use only.
