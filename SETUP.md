# Using Ripple in a React project

Step-by-step setup for a new React prototype using Ripple as the design system.

---

## 1. Scaffold a new React app

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

---

## 2. Install Ripple

```bash
npm install github:VascoA09/Ripple --legacy-peer-deps
```

This installs `@ripple/ui` including all dependencies (icons, fonts, Radix primitives).

> **Why `--legacy-peer-deps`?** Some Radix UI packages declare peer dependencies against older React versions. This flag bypasses that conflict at install time. Nothing breaks — the components work correctly with React 19.

---

## 3. Clear the Vite template CSS

Vite scaffolds `src/index.css` and `src/App.css` with default styles that conflict with Ripple tokens. Replace them:

**`src/index.css`** — replace entire contents with:
```css
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: var(--font-family-base); color: var(--text); background: var(--bg-canvas); -webkit-font-smoothing: antialiased; }
#root { min-height: 100svh; }
```

**`src/App.css`** — clear the file or delete it.

---

## 4. Import the Ripple stylesheet

In `src/main.tsx`, import the Ripple CSS before your app:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@ripple/ui/style.css'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div data-theme="light">
      <App />
    </div>
  </StrictMode>
)
```

The `data-theme="light"` attribute on the wrapper activates Ripple's light theme. All tokens and component styles are now available.

---

## 5. Use components

Every Ripple app should use a layout component as its shell. `StandardNavigation` is the default — it provides the 72px left Navbar and sets the correct content area background (`var(--bg-app)`) automatically.

```tsx
import { StandardNavigation, Unit4Logo, Button, Input, Tag, Badge, Card, CardHeader, CardTitle, CardContent } from '@ripple/ui'
import { LayoutDashboard } from 'lucide-react'

export default function App() {
  return (
    <StandardNavigation
      nav={{
        logo: <Unit4Logo />,
        productName: 'My App',
        globalNavItems: [
          { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />, onClick: () => {} },
        ],
      }}
    >
      <div style={{ padding: 'var(--spacing-200)' }}>
        <Card>
          <CardHeader>
            <CardTitle as="h1">Ripple app</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-150)' }}>
              <div style={{ display: 'flex', gap: 'var(--spacing-50)' }}>
                <Button variant="fill">Save</Button>
                <Button variant="outline">Cancel</Button>
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-50)', alignItems: 'center' }}>
                <Tag color="blue">Draft</Tag>
                <Badge color="negative">3</Badge>
              </div>
              <Input label="Full name" placeholder="Enter your name" />
            </div>
          </CardContent>
        </Card>
      </div>
    </StandardNavigation>
  )
}
```

All components are available as named exports from `@ripple/ui`. See `components/_index.md` for the full list.

---

## 6. Use tokens in custom styles

Always use Ripple tokens — never hardcoded values.

```css
.my-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-neutral);
  border-radius: var(--border-radius-200);
  padding: var(--spacing-150);
  color: var(--text);
}
```

Common tokens:

| Token | Value | Use for |
|-------|-------|---------|
| `--text` | — | Default body text |
| `--text-loud` | — | Headings, emphasis |
| `--text-soft` | — | Secondary / muted text |
| `--bg-canvas` | — | Page background |
| `--bg-surface` | — | Cards, panels |
| `--border-neutral` | — | Default borders |
| `--spacing-50` | 8px | Tight gaps |
| `--spacing-100` | 16px | Default padding |
| `--spacing-150` | 24px | Section padding |
| `--spacing-200` | 32px | Large spacing |
| `--font-size-100` | 16px | Body text |
| `--font-size-200` | — | Display heading |
| `--border-radius-200` | 8px | Cards, inputs |
| `--border-radius-full` | — | Pills, avatars |

Full token reference: `src/tokens/themes.css`

---

## 7. Apply Ripple typography to headings

HTML headings (`h1`–`h6`) are not automatically styled by Ripple. Use the semantic typography classes included in the stylesheet:

```tsx
<h1 className="typography-heading-xl">Page title</h1>
<h2 className="typography-heading-l">Section title</h2>
<h3 className="typography-heading-m">Card heading</h3>
<h4 className="typography-heading-s">Sub-section</h4>
```

| Class | Size | Use for |
|---|---|---|
| `typography-heading-xl` | 32px | Page titles, hero headings |
| `typography-heading-l` | 28px | Section titles |
| `typography-heading-m` | 24px | Card headings, dialogs |
| `typography-heading-s` | 18px | Sub-sections |
| `typography-body` | 16px | Default body text |
| `typography-caption` | 14px | Secondary, muted text |
| `typography-label` | 14px | Form labels, tags |
| `typography-detail` | 12px | Fine print, metadata |

Each class sets font-family, font-size, line-height, font-weight, and color in one go. No inline styles needed.

---

## Reference

| Need | Where to look |
|------|---------------|
| All components + status | `components/_index.md` |
| Component props and usage | `components/{name}.md` |
| Navigation shell (default) | `layouts/standard-navigation.md` |
| Multi-tab workspace shell | `layouts/micro-navigation.md` |
| Extension Kit shell | `templates/extension-kit-navigation.md` |
| All layouts | `layouts/_index.md` |
| All templates | `templates/_index.md` |
| Token system explained | `foundations/tokens-overview.md` |
| Color tokens | `foundations/color.md` |
| Typography tokens | `foundations/typography.md` |
| Spacing tokens | `foundations/spacing.md` |
| Tailwind integration | `TAILWIND.md` |
| AI tool instructions | `RIPPLE.md` |
