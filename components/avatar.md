---
name: Avatar
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [display, identity]
---

# Avatar

A circular visual representation of a user — either a photo or generated initials. Exported as three components: `Avatar`, `AvatarGroup`, and `AvatarWithStatus`.

---

## Components

### Avatar

The core component. Renders a circle with either an image or initials.

```tsx
<Avatar name="Vasco Antunes" />
<Avatar name="Vasco Antunes" src="/avatars/vasco.jpg" size="xl" />
<Avatar name="Vasco Antunes" href="/profile" />
<Avatar name="Vasco Antunes" onClick={openProfile} />
```

### AvatarGroup

Renders a list of Avatars in an overlapping (default) or inline layout. Shows a "+N" counter when the visible count is capped with `max`.

```tsx
<AvatarGroup max={3} size="m">
  <Avatar name="Alice Chen" />
  <Avatar name="Ben Torres" />
  <Avatar name="Clara Ng" />
  <Avatar name="Dan Kim" />
  <Avatar name="Eve Wu" />
</AvatarGroup>
```

### AvatarWithStatus

Wraps a single Avatar with a status dot positioned at the bottom-right.

```tsx
<AvatarWithStatus status="active" size="l">
  <Avatar name="Vasco Antunes" />
</AvatarWithStatus>
```

---

## Props

### Avatar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | — | Full name. Used to derive initials and as the accessible label. |
| `src` | `string` | — | Image URL. Falls back to initials if omitted or the image fails to load. |
| `size` | `'s' \| 'm' \| 'l' \| 'xl' \| '2xl' \| '3xl'` | `'l'` | Avatar diameter. |
| `href` | `string` | — | Renders the avatar as an `<a>` element. Takes precedence over `onClick`. |
| `onClick` | `MouseEventHandler` | — | Renders the avatar as a `<button>` element. |
| `aria-label` | `string` | `name` | Overrides the default accessible label. |

### AvatarGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | One or more `Avatar` elements. |
| `max` | `number` | — | Caps visible avatars. Extras are shown as a "+N" counter. |
| `overlap` | `boolean` | `true` | `true` = overlapping layout; `false` = evenly spaced. |
| `size` | `AvatarSize` | `'l'` | Size of the "+N" overflow counter. Match to the Avatar `size` in the group. |

### AvatarWithStatus

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | A single `Avatar`. |
| `status` | `'active' \| 'away' \| 'busy' \| 'offline'` | — | User presence state. |
| `size` | `AvatarSize` | `'l'` | Must match the wrapped Avatar's `size` to scale the dot correctly. |

---

## Sizes

| Size | Diameter | Font |
|------|----------|------|
| `s`  | 24px (`--size-150`)  | 12px (`--font-size-60`) |
| `m`  | 32px (`--size-200`)  | 14px (`--font-size-80`) |
| `l`  | 40px (`--size-250`)  | 16px (`--font-size-100`) — **default** |
| `xl` | 48px (`--size-300`)  | 18px (`--font-size-120`) |
| `2xl`| 64px (`--size-400`)  | 20px (no token; raw value) |
| `3xl`| 84px (`--size-525`)  | 24px (`--font-size-180`) |

---

## Initials derivation

- Derived from the `name` prop automatically — no separate `initials` prop.
- Splits on whitespace: first char of first word + first char of last word, uppercased.
- Single name (one word): first character only.
- Size `s` always shows one character; all other sizes show up to two.

---

## Element rendering

Avatar renders different HTML elements based on props:

| Condition | Element |
|-----------|---------|
| `href` provided | `<a>` |
| `onClick` provided (no `href`) | `<button type="button">` |
| Neither | `<span>` |

Interactive avatars (`<a>` or `<button>`) receive `data-interactive` and show a subtle overlay on hover, plus a focus ring on `:focus-visible`.

---

## Image fallback

When `src` is provided but the image fails to load, the component automatically falls back to initials. No prop or manual handler required.

---

## AvatarGroup — overlap mechanics

In overlap mode (`overlap={true}`), each avatar overlaps the previous by `8px` via `margin-left: -8px`. Later avatars in the DOM sit on top (higher stacking order). On hover, the hovered avatar lifts with `translateY(-2px)` and a z-index bump.

All avatars in an overlapping group receive a `2px solid var(--bg-nav)` border to visually separate adjacent circles — this adapts correctly in dark mode.

---

## Status dot sizes

| Avatar size | Dot diameter |
|-------------|-------------|
| `s`  | 6px  |
| `m`  | 8px  |
| `l`  | 10px |
| `xl` | 12px |
| `2xl`| 14px |
| `3xl`| 16px |

The dot border (`2px solid var(--bg-nav)`) creates separation between the dot and the avatar edge, and adapts to dark mode automatically.

---

## Status colors

| Status | Color token |
|--------|-------------|
| `active` | `--bg-positive` |
| `away` | `--bg-notice` |
| `busy` | `--bg-negative` |
| `offline` | `--bg-neutral` |

---

## Accessibility

- The `name` prop doubles as the default `aria-label`. Override with `aria-label` if needed.
- The `<img>` inside the avatar uses `alt=""` (decorative) — the label is on the outer element.
- The status dot uses `role="img"` with an `aria-label` matching the status ("Active", "Away", "Busy", "Offline").
- Interactive avatars support keyboard navigation (Tab, Enter/Space) via native element semantics.
- All sizes exceed WCAG AA contrast for the default initials color: `--color-primary-loud` on `--bg-primary-softest`.

### Touch target note (WCAG 2.2 AA, 2.5.8)

| Size | Diameter | Interactive target (WCAG 2.2 AA min 24px) | Ripple internal standard (44×44px) |
|------|----------|--------------------------------------------|--------------------------------------|
| `s`  | 24px     | ✓ meets minimum                            | ✗ below internal standard            |
| `m`  | 32px     | ✓                                          | ✗ below internal standard            |
| `l`  | 40px     | ✓                                          | ✗ below internal standard            |
| `xl` | 48px     | ✓                                          | ✓                                    |
| `2xl`| 64px     | ✓                                          | ✓                                    |
| `3xl`| 84px     | ✓                                          | ✓                                    |

**Guidance:** Avoid using `size="s"` or `size="m"` for standalone interactive avatars (as links or buttons) without ensuring adequate surrounding spacing. These sizes are suited to display-only use or tightly composed contexts (e.g., `AvatarGroup`, comment threads, table cells) where they are not the sole interactive target. `size="l"` and above are acceptable as isolated interactive elements.
