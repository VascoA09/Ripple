# Ripple

Unit4's design system for product UI. Foundations, tokens, components, and patterns for building consistent, accessible enterprise interfaces.

**AI tools**: see [RIPPLE.md](./RIPPLE.md) for the full content map and usage rules.

---

## Install

```bash
npm install github:VascoA09/Ripple --legacy-peer-deps
npm install lucide-react --legacy-peer-deps
```

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
import { MainNavigation, Footer } from '@ripple/ui'
```

---

## What's in this repo

| Directory | Contents |
|-----------|----------|
| `foundations/` | Color, typography, spacing, grid, themes, accessibility |
| `components/` | Specs for all 44 components |
| `patterns/` | Composed UI patterns (Footer, Main Navigation) |
| `layouts/` | Structural layout scaffolds (Micro Navigation) |
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
