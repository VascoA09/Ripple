# Tailwind + Ripple Integration

How to use Tailwind CSS alongside Ripple in a React app, while keeping Ripple tokens as the single source of visual truth.

---

## When to use Tailwind vs. Ripple

Before writing any Tailwind class, check whether Ripple already covers the need.

| Need | Use |
|------|-----|
| Buttons, inputs, badges, dialogs, etc. | Ripple component (`@ripple/ui`) |
| Layout: flex, grid, position, overflow | Tailwind utilities |
| Custom containers, wrappers, one-off surfaces | Tailwind utilities — with Ripple token values |
| Typography styles | Ripple `.typography-*` classes or Tailwind (mapped to Ripple tokens) |
| Spacing, gap, padding on layout elements | Tailwind spacing scale (mapped to Ripple tokens) |

**Never use Tailwind to recreate a component that exists in Ripple.** Check `components/_index.md` first.

---

## Setup

### 1. Install Tailwind v4

```bash
npm install tailwindcss @tailwindcss/vite --legacy-peer-deps
```

In `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### 2. Create the Tailwind CSS entry point

Create `src/tailwind.css`:

```css
@import "tailwindcss";
@import "./ripple-theme.css";
```

### 3. Create the Ripple theme mapping

Create `src/ripple-theme.css`. This file maps Ripple's CSS custom properties to Tailwind's theme namespace. **This is the only place where Ripple tokens and Tailwind connect.** Do not put token references anywhere else.

```css
/* src/ripple-theme.css
   Maps Ripple semantic tokens → Tailwind utilities.
   Never reference Ripple primitives (--color-blue-*, --color-gray-*) here.
   Always reference semantic tokens (--bg-*, --text-*, --border-*).
*/

@theme {

  /* -------------------------------------------------------------------------
     FONT
     bg-surface → font-sans
     ------------------------------------------------------------------------- */
  --font-sans: var(--font-family-base);

  /* -------------------------------------------------------------------------
     FONT SIZE
     Tailwind: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl
     ------------------------------------------------------------------------- */
  --text-xs:   var(--font-size-60);   /* 12px — detail    */
  --text-sm:   var(--font-size-80);   /* 14px — caption   */
  --text-base: var(--font-size-100);  /* 16px — body      */
  --text-lg:   var(--font-size-120);  /* 18px — heading-s */
  --text-xl:   var(--font-size-180);  /* 24px — heading-m */
  --text-2xl:  var(--font-size-200);  /* 28px — heading-l */
  --text-3xl:  var(--font-size-220);  /* 32px — heading-xl */

  /* -------------------------------------------------------------------------
     COLORS
     Ripple splits colors by purpose: bg / border / text / icon.
     Tailwind uses a single --color-* namespace → bg-*, text-*, border-* utilities.
     We use descriptive names that indicate purpose.
     ------------------------------------------------------------------------- */

  /* Layout surfaces
     Usage: bg-app, bg-surface, bg-nav, bg-hover, bg-pressed, bg-disabled */
  --color-app:         var(--bg-app);
  --color-app-accent:  var(--bg-app-accent);
  --color-surface:     var(--bg-surface);
  --color-nav:         var(--bg-nav);
  --color-hover:       var(--bg-hover);
  --color-pressed:     var(--bg-pressed);
  --color-disabled:    var(--bg-disabled);
  --color-overlay:     var(--bg-overlay);

  /* Primary brand
     Usage: bg-primary, bg-primary-soft, bg-primary-softest, bg-primary-loud */
  --color-primary-loud:    var(--bg-primary-loud);
  --color-primary:         var(--bg-primary);
  --color-primary-soft:    var(--bg-primary-soft);
  --color-primary-softest: var(--bg-primary-softest);

  /* Status: Negative (error)
     Usage: bg-negative-softest, text-negative, border-negative */
  --color-negative-loud:    var(--bg-negative-loud);
  --color-negative:         var(--bg-negative);
  --color-negative-soft:    var(--bg-negative-soft);
  --color-negative-softest: var(--bg-negative-softest);

  /* Status: Notice (warning) */
  --color-notice-loud:    var(--bg-notice-loud);
  --color-notice:         var(--bg-notice);
  --color-notice-soft:    var(--bg-notice-soft);
  --color-notice-softest: var(--bg-notice-softest);

  /* Status: Positive (success) */
  --color-positive-loud:    var(--bg-positive-loud);
  --color-positive:         var(--bg-positive);
  --color-positive-soft:    var(--bg-positive-soft);
  --color-positive-softest: var(--bg-positive-softest);

  /* Status: Neutral (informational) */
  --color-neutral-loud:    var(--bg-neutral-loud);
  --color-neutral:         var(--bg-neutral);
  --color-neutral-soft:    var(--bg-neutral-soft);
  --color-neutral-softest: var(--bg-neutral-softest);

  /* Text colors
     Usage: text-text-loud, text-text, text-text-soft, text-text-accent, etc. */
  --color-text-loud:         var(--text-loud);
  --color-text:              var(--text);
  --color-text-soft:         var(--text-soft);
  --color-text-disabled:     var(--text-disabled);
  --color-text-accent:       var(--text-accent);
  --color-text-negative:     var(--text-negative);
  --color-text-notice:       var(--text-notice);
  --color-text-positive:     var(--text-positive);
  --color-text-inverse:      var(--text-inverse);
  --color-text-loud-inverse: var(--text-loud-inverse);

  /* Border colors
     Usage: border-border, border-border-primary, border-border-negative, etc. */
  --color-border:              var(--border-default);
  --color-border-primary:      var(--border-primary);
  --color-border-primary-loud: var(--border-primary-loud);
  --color-border-focus:        var(--border-focus);
  --color-border-negative:     var(--border-negative);
  --color-border-notice:       var(--border-notice);
  --color-border-positive:     var(--border-positive);
  --color-border-neutral:      var(--border-neutral);
  --color-border-neutral-loud: var(--border-neutral-loud);
  --color-border-disabled:     var(--border-disabled);
  --color-border-light:        var(--border-light);

  /* Icon colors
     Usage: text-icon, text-icon-soft, text-icon-accent, etc. */
  --color-icon:              var(--icon-default);
  --color-icon-soft:         var(--icon-soft);
  --color-icon-disabled:     var(--icon-disabled);
  --color-icon-inverse:      var(--icon-inverse);
  --color-icon-accent:       var(--icon-accent);
  --color-icon-negative:     var(--icon-negative);
  --color-icon-notice:       var(--icon-notice);
  --color-icon-positive:     var(--icon-positive);
  --color-icon-neutral:      var(--icon-neutral);

  /* -------------------------------------------------------------------------
     SPACING
     Ripple scale → Tailwind numeric shortcuts.
     Tailwind's default (1=4px) matches Ripple's base unit — numeric mapping holds.
     Usage: p-1, m-2, gap-4, etc.
     ------------------------------------------------------------------------- */
  --spacing-0:  var(--spacing-none);  /* 0    */
  --spacing-1:  var(--spacing-25);    /* 4px  */
  --spacing-2:  var(--spacing-50);    /* 8px  */
  --spacing-3:  var(--spacing-75);    /* 12px */
  --spacing-4:  var(--spacing-100);   /* 16px */
  --spacing-5:  var(--spacing-125);   /* 20px */
  --spacing-6:  var(--spacing-150);   /* 24px */
  --spacing-8:  var(--spacing-200);   /* 32px */
  --spacing-10: var(--spacing-250);   /* 40px */
  --spacing-16: var(--spacing-400);   /* 64px */
  --spacing-24: var(--spacing-600);   /* 96px */
  --spacing-32: var(--spacing-800);   /* 128px */

  /* -------------------------------------------------------------------------
     BORDER RADIUS
     Usage: rounded-none, rounded-sm, rounded-md, rounded-lg, rounded-xl, rounded-full
     ------------------------------------------------------------------------- */
  --radius-none: var(--border-radius-none);  /* 0    */
  --radius-sm:   var(--border-radius-100);   /* 4px  */
  --radius:      var(--border-radius-150);   /* 6px  */
  --radius-md:   var(--border-radius-200);   /* 8px  */
  --radius-lg:   var(--border-radius-300);   /* 12px */
  --radius-xl:   var(--border-radius-400);   /* 16px */
  --radius-full: var(--border-radius-pill);  /* 999px */

  /* -------------------------------------------------------------------------
     SHADOWS (elevation)
     Usage: shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl
     ------------------------------------------------------------------------- */
  --shadow-sm: var(--elevation-card);
  --shadow:    var(--elevation-raised);
  --shadow-md: var(--elevation-dropdown);
  --shadow-lg: var(--elevation-modal);
  --shadow-xl: var(--elevation-overlay);

}
```

### 4. Import both stylesheets in main.tsx

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@ripple/ui/style.css'   // Ripple tokens + component styles
import './tailwind.css'          // Tailwind + Ripple theme mapping
import './index.css'             // App reset
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div data-theme="light">
      <App />
    </div>
  </StrictMode>
)
```

> **Import order matters.** Ripple's stylesheet must come first. It defines the CSS custom properties that `ripple-theme.css` references via `var()`.

---

## Usage

### Layout with Tailwind, content with Ripple

```tsx
import { Button, TextInput, Card } from '@ripple/ui'

// Tailwind handles layout. Ripple handles components.
export default function FormPage() {
  return (
    <div className="bg-app min-h-screen p-8">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-text-loud">
          Create account
        </h1>
        <TextInput label="Full name" placeholder="Enter your name" />
        <TextInput label="Email" type="email" />
        <div className="flex gap-2">
          <Button variant="fill">Submit</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>
    </div>
  )
}
```

### Custom surface (no Ripple component exists)

```tsx
// Use Tailwind utilities — all values resolve to Ripple tokens
<div className="bg-surface border border-border rounded-md p-4 shadow-sm">
  <p className="text-base text-text">Default body text</p>
  <p className="text-sm text-text-soft">Secondary text</p>
</div>
```

### Status banner (custom, no Ripple component yet)

```tsx
<div className="bg-negative-softest border border-border-negative rounded-md p-4 flex gap-2">
  <AlertCircle className="text-icon-negative shrink-0 mt-0.5" size={16} />
  <p className="text-sm text-text-negative">Something went wrong.</p>
</div>
```

### Common utility combinations

| Purpose | Tailwind classes |
|---------|-----------------|
| Page shell | `bg-app min-h-screen` |
| Card surface | `bg-surface border border-border rounded-md shadow-sm` |
| Section padding | `p-6` or `p-8` |
| Body text | `text-base text-text` |
| Heading | `text-2xl font-bold text-text-loud` |
| Muted text | `text-sm text-text-soft` |
| Error state | `bg-negative-softest border-border-negative text-text-negative` |
| Primary action bg | `bg-primary text-text-loud-inverse` |

---

## Rules

1. **No raw color values in Tailwind classes.** `text-blue-500`, `bg-gray-100`, `border-red-300` are banned. Every color must resolve to a Ripple semantic token.
2. **No arbitrary values for colors.** `bg-[#F9F9F9]` is banned. If the color you need exists in Ripple's token system, map it. If it does not, question whether the color decision is valid.
3. **Arbitrary values for layout are acceptable.** `max-w-[720px]`, `w-[calc(100%-32px)]` are fine — these are structural constraints, not visual design tokens.
4. **Spacing arbitrary values are a smell.** If you need `p-[13px]`, you are off the Ripple scale. Review the design.
5. **Do not add Ripple primitive tokens to `ripple-theme.css`.** Only semantic tokens (`--bg-*`, `--text-*`, `--border-*`, etc.). Never `--color-blue-80` or `--color-gray-30`.

---

## Tailwind v3 (alternative config)

If the project uses Tailwind v3, configure via `tailwind.config.ts` instead:

```ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-family-base)'],
      },
      fontSize: {
        xs:   'var(--font-size-60)',
        sm:   'var(--font-size-80)',
        base: 'var(--font-size-100)',
        lg:   'var(--font-size-120)',
        xl:   'var(--font-size-180)',
        '2xl': 'var(--font-size-200)',
        '3xl': 'var(--font-size-220)',
      },
      colors: {
        // Surfaces
        app:          'var(--bg-app)',
        'app-accent': 'var(--bg-app-accent)',
        surface:      'var(--bg-surface)',
        nav:          'var(--bg-nav)',
        hover:        'var(--bg-hover)',
        pressed:      'var(--bg-pressed)',
        disabled:     'var(--bg-disabled)',
        // Primary
        'primary-loud':    'var(--bg-primary-loud)',
        primary:           'var(--bg-primary)',
        'primary-soft':    'var(--bg-primary-soft)',
        'primary-softest': 'var(--bg-primary-softest)',
        // Status (softest for backgrounds, loud for text)
        'negative-softest': 'var(--bg-negative-softest)',
        'negative-soft':    'var(--bg-negative-soft)',
        negative:           'var(--bg-negative)',
        'notice-softest':   'var(--bg-notice-softest)',
        'positive-softest': 'var(--bg-positive-softest)',
        'neutral-softest':  'var(--bg-neutral-softest)',
        // Text
        'text-loud':         'var(--text-loud)',
        'text':              'var(--text)',
        'text-soft':         'var(--text-soft)',
        'text-disabled':     'var(--text-disabled)',
        'text-accent':       'var(--text-accent)',
        'text-negative':     'var(--text-negative)',
        'text-notice':       'var(--text-notice)',
        'text-positive':     'var(--text-positive)',
        'text-inverse':      'var(--text-inverse)',
        'text-loud-inverse': 'var(--text-loud-inverse)',
        // Borders
        border:              'var(--border-default)',
        'border-primary':    'var(--border-primary)',
        'border-focus':      'var(--border-focus)',
        'border-negative':   'var(--border-negative)',
        'border-notice':     'var(--border-notice)',
        'border-positive':   'var(--border-positive)',
        'border-neutral':    'var(--border-neutral)',
        'border-disabled':   'var(--border-disabled)',
        // Icons
        icon:             'var(--icon-default)',
        'icon-soft':      'var(--icon-soft)',
        'icon-accent':    'var(--icon-accent)',
        'icon-negative':  'var(--icon-negative)',
        'icon-notice':    'var(--icon-notice)',
        'icon-positive':  'var(--icon-positive)',
        'icon-inverse':   'var(--icon-inverse)',
      },
      spacing: {
        '0':  'var(--spacing-none)',
        '1':  'var(--spacing-25)',
        '2':  'var(--spacing-50)',
        '3':  'var(--spacing-75)',
        '4':  'var(--spacing-100)',
        '5':  'var(--spacing-125)',
        '6':  'var(--spacing-150)',
        '8':  'var(--spacing-200)',
        '10': 'var(--spacing-250)',
        '16': 'var(--spacing-400)',
        '24': 'var(--spacing-600)',
        '32': 'var(--spacing-800)',
      },
      borderRadius: {
        none: 'var(--border-radius-none)',
        sm:   'var(--border-radius-100)',
        DEFAULT: 'var(--border-radius-150)',
        md:   'var(--border-radius-200)',
        lg:   'var(--border-radius-300)',
        xl:   'var(--border-radius-400)',
        full: 'var(--border-radius-pill)',
      },
      boxShadow: {
        sm:  'var(--elevation-card)',
        DEFAULT: 'var(--elevation-raised)',
        md:  'var(--elevation-dropdown)',
        lg:  'var(--elevation-modal)',
        xl:  'var(--elevation-overlay)',
      },
    },
  },
} satisfies Config
```

---

## Dark mode

Ripple's dark theme is activated via `[data-theme="dark"]` on a DOM element. Tailwind's default dark mode uses a `prefers-color-scheme` media query, which bypasses Ripple's token system. The two must be aligned.

### Tailwind v4

Add a `@variant` override in `ripple-theme.css`:

```css
/* src/ripple-theme.css */

@import "tailwindcss";

/* Tell Tailwind: dark: means [data-theme="dark"] is an ancestor, not prefers-color-scheme */
@variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

@theme {
  /* ... rest of theme mapping ... */
}
```

With this in place, `dark:` variants work correctly against Ripple's theming:

```tsx
<div className="bg-surface dark:bg-surface text-text dark:text-text">
  {/* bg-surface and text-text already resolve correctly for each theme
      via Ripple tokens — dark: variants are rarely needed for color.
      Use them for structural differences only (e.g. dark:shadow-lg). */}
</div>
```

**Important:** because all Tailwind color utilities already resolve through Ripple's semantic tokens — which update automatically when `data-theme` changes — you almost never need `dark:` for color. The token does the work. Reserve `dark:` for structural differences: adjusted shadows, border visibility tweaks, or opacity changes that aren't encoded in a token.

### Tailwind v3

In `tailwind.config.ts`, set `darkMode` to use the attribute selector:

```ts
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  // ...
} satisfies Config
```

This tells Tailwind's `dark:` variant to activate when `[data-theme="dark"]` is present on any ancestor, matching Ripple's mechanism.

### Theme switching in React

To let users switch themes, manage the `data-theme` attribute on the root wrapper:

```tsx
import { useState } from 'react'

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <div data-theme={theme}>
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        Toggle theme
      </button>
      {/* rest of app */}
    </div>
  )
}
```

All Ripple components and all Tailwind utilities mapped to Ripple tokens update instantly — no additional logic needed.

---

## What this does NOT replace

- Ripple component styles. Do not use Tailwind to style inside Ripple components.
- Ripple typography classes. `.typography-heading-xl` etc. are still available and preferred for semantic HTML elements (`h1`–`h6`).
