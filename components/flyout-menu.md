---
name: Flyout Menu
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [overlay, navigation]
---

# FlyoutMenu Component

## Overview

A contextual floating menu that appears when a trigger element is activated. Supports single items, grouped sections, checkboxes, radio groups, submenus, keyboard shortcuts, and separators.

Built on `@radix-ui/react-dropdown-menu`. Radix handles portal rendering, viewport collision detection, focus trapping, keyboard navigation, and ARIA — this component layer applies Ripple tokens and naming conventions.

---

## Anatomy

```
[Trigger]
    ↓ (activates)
┌─────────────────────────────┐
│ Section label               │  ← FlyoutMenuLabel
│─────────────────────────────│  ← FlyoutMenuSeparator
│ 🗎 Item label        ⌘N    │  ← FlyoutMenuItem + FlyoutMenuShortcut
│ 🗎 Item label               │
│ ✓  Checkbox item            │  ← FlyoutMenuCheckboxItem
│ ●  Radio item               │  ← FlyoutMenuRadioItem
│ 🗎 Submenu trigger    ›     │  ← FlyoutMenuSubTrigger
└─────────────────────────────┘
```

---

## Component Tree

| Component | Description |
|-----------|-------------|
| `FlyoutMenu` | Root. Controls open/close state. |
| `FlyoutMenuTrigger` | The element that opens the menu. Use `asChild` to adopt the child element. |
| `FlyoutMenuContent` | Floating panel. Renders into a portal. |
| `FlyoutMenuGroup` | Logical grouping of items (no visual output). |
| `FlyoutMenuLabel` | Non-interactive section header. |
| `FlyoutMenuItem` | Standard clickable item. |
| `FlyoutMenuCheckboxItem` | Toggleable item. Renders a checkmark when checked. |
| `FlyoutMenuRadioGroup` | Container for mutually exclusive radio items. |
| `FlyoutMenuRadioItem` | Single-select item within a radio group. |
| `FlyoutMenuSeparator` | Horizontal rule between sections. |
| `FlyoutMenuSub` | Root for a nested submenu. |
| `FlyoutMenuSubTrigger` | Item that opens a submenu. Chevron auto-appended. |
| `FlyoutMenuSubContent` | Floating panel for submenu items. |
| `FlyoutMenuShortcut` | Keyboard shortcut label, right-aligned within an item. |

---

## Props

### FlyoutMenu
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | — | Controlled open state. |
| `onOpenChange` | `(open: boolean) => void` | — | Called when open state changes. |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial open state. |
| `modal` | `boolean` | `true` | When true, interaction outside the menu is blocked. |

### FlyoutMenuContent / FlyoutMenuSubContent
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` | Preferred side of the trigger. |
| `align` | `'start' \| 'center' \| 'end'` | `'start'` | Alignment along the trigger axis. |
| `sideOffset` | `number` | `4` | Gap in px between trigger and content. |

### FlyoutMenuItem / FlyoutMenuCheckboxItem / FlyoutMenuRadioItem
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Disables the item. |
| `onSelect` | `(event: Event) => void` | — | Called when the item is selected. |

### FlyoutMenuCheckboxItem
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Controlled checked state. |
| `onCheckedChange` | `(checked: boolean) => void` | — | Called when checked state changes. |

### FlyoutMenuRadioGroup
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled selected value. |
| `onValueChange` | `(value: string) => void` | — | Called when selection changes. |

### FlyoutMenuRadioItem
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | required | The value this item represents. |

---

## Usage

### Context menu (most common)

```tsx
<FlyoutMenu>
  <FlyoutMenuTrigger asChild>
    <Button variant="ghost" color="neutral" aria-label="More options">
      <MoreHorizontal size={16} />
    </Button>
  </FlyoutMenuTrigger>
  <FlyoutMenuContent align="end">
    <FlyoutMenuItem>
      <Edit size={16} aria-hidden />
      Edit
    </FlyoutMenuItem>
    <FlyoutMenuItem>
      <Copy size={16} aria-hidden />
      Duplicate
    </FlyoutMenuItem>
    <FlyoutMenuSeparator />
    <FlyoutMenuItem>
      <Trash2 size={16} aria-hidden />
      Delete
    </FlyoutMenuItem>
  </FlyoutMenuContent>
</FlyoutMenu>
```

### Grouped sections with labels

```tsx
<FlyoutMenuContent>
  <FlyoutMenuGroup>
    <FlyoutMenuLabel>Create</FlyoutMenuLabel>
    <FlyoutMenuItem>New file</FlyoutMenuItem>
    <FlyoutMenuItem>Import</FlyoutMenuItem>
  </FlyoutMenuGroup>
  <FlyoutMenuSeparator />
  <FlyoutMenuGroup>
    <FlyoutMenuLabel>Export</FlyoutMenuLabel>
    <FlyoutMenuItem>Download</FlyoutMenuItem>
    <FlyoutMenuItem>Send by email</FlyoutMenuItem>
  </FlyoutMenuGroup>
</FlyoutMenuContent>
```

### Submenu

```tsx
<FlyoutMenuSub>
  <FlyoutMenuSubTrigger>
    <Share2 size={16} aria-hidden />
    Share
  </FlyoutMenuSubTrigger>
  <FlyoutMenuSubContent>
    <FlyoutMenuItem>Email</FlyoutMenuItem>
    <FlyoutMenuItem>Copy link</FlyoutMenuItem>
  </FlyoutMenuSubContent>
</FlyoutMenuSub>
```

### Checkboxes

```tsx
<FlyoutMenuCheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
  Show bookmarks
</FlyoutMenuCheckboxItem>
```

### Radio group

```tsx
<FlyoutMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
  <FlyoutMenuRadioItem value="name">Name</FlyoutMenuRadioItem>
  <FlyoutMenuRadioItem value="date">Date modified</FlyoutMenuRadioItem>
</FlyoutMenuRadioGroup>
```

### Keyboard shortcuts

```tsx
<FlyoutMenuItem>
  <FileText size={16} aria-hidden />
  New file
  <FlyoutMenuShortcut>⌘N</FlyoutMenuShortcut>
</FlyoutMenuItem>
```

---

## Item Layout

Items are `display: flex; align-items: center; gap: 8px`. Content is composed via children:

```
[icon?]  [label text]  [shortcut / flex spacer]  [chevron — SubTrigger only]
```

- Icons: pass as the first child, always `aria-hidden`
- `FlyoutMenuShortcut` uses `margin-left: auto` to push right
- `FlyoutMenuSubTrigger` appends `<ChevronRight>` automatically — do not add one manually
- `FlyoutMenuCheckboxItem` and `FlyoutMenuRadioItem` reserve a 16px left slot for the check indicator

---

## Positioning

Use `align="end"` when the trigger is right-aligned (table row actions, nav corners):

```tsx
<FlyoutMenuContent align="end">...</FlyoutMenuContent>
```

The menu repositions automatically if it would overflow the viewport. No manual adjustment needed.

---

## States

| State | Visual |
|-------|--------|
| Default | Transparent background |
| Highlighted (hover/focus) | `--bg-primary-softest` background |
| Active/pressed | `--bg-primary-soft` background |
| Disabled | 50% opacity, `not-allowed` cursor, skipped by keyboard |
| Checked (checkbox/radio) | Checkmark icon visible in indicator slot |

---

## Animations

| Direction | Duration | Effect |
|-----------|----------|--------|
| Open | 200ms ease | Fade in + scale 95% → 100% |
| Close | 150ms ease | Fade out + scale 100% → 95% |

`prefers-reduced-motion: reduce` disables all animations.

---

## Token Reference

| Property | Token | Value |
|----------|-------|-------|
| Panel background | `--bg-surface` | `#FFF` / dark-adapted |
| Panel border | `--border-default` | `#737373` / dark-adapted |
| Panel shadow | `--elevation-dropdown` | `var(--box-shadow-300)` |
| Panel radius | `--border-radius-overlay-default` | 12px |
| Item radius | `--border-radius-component-default` | 4px |
| Item hover bg | `--bg-primary-softest` | — |
| Item active bg | `--bg-primary-soft` | — |
| Item min-height | `--size-component-height-default` | 40px |
| Item text | `--text` | — |
| Label / shortcut text | `--text-soft` | — |
| Content padding | `--spacing-50` | 8px |
| Item padding-inline | `--spacing-75` | 12px |
| Icon/text gap | `--spacing-50` | 8px |
| Item font size | `--font-size-80` | 14px |
| Label font size | `--font-size-60` | 12px |
| Separator margin | `--spacing-25` | 4px |

---

## Accessibility

Radix provides the full accessibility foundation:

- `role="menu"` on content panels
- `role="menuitem"`, `role="menuitemcheckbox"`, `role="menuitemradio"` on items
- `aria-checked` on checkbox and radio items
- `aria-disabled` on disabled items
- `aria-haspopup="menu"` and `aria-expanded` on sub-triggers
- Focus trapped within the menu during keyboard navigation
- Focus returns to trigger on close

**Consumer responsibility:**

- Provide `aria-label` on icon-only triggers (e.g. `aria-label="More options"` or `aria-label="More options for [item name]"`)
- `FlyoutMenuShortcut` is `aria-hidden` — wire shortcuts as actual keyboard handlers in the app
- Icons inside items should be `aria-hidden`

---

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Open menu from trigger; select focused item |
| `Arrow Down` | Focus next item |
| `Arrow Up` | Focus previous item |
| `Arrow Right` | Open submenu |
| `Arrow Left` | Close submenu, return to parent |
| `Escape` | Close menu, return focus to trigger |
| `Home` / `End` | Focus first / last item |
| Type character | Jump to next item starting with that character |

---

## Do / Don't

**Do:**
- Use `asChild` on `FlyoutMenuTrigger` to avoid extra DOM nodes
- Group related items with `FlyoutMenuLabel` + `FlyoutMenuSeparator`
- Use `align="end"` for right-aligned triggers
- Keep menus to 2 levels of nesting maximum
- Label icon-only triggers with `aria-label`

**Don't:**
- Use for primary navigation — use Tabs or Navigation Menu instead
- Put critical single actions in a flyout — use a visible Button
- Rely on color or icons alone to distinguish items — label text is required
- Add a manual chevron to `FlyoutMenuSubTrigger` — it's injected automatically
- Wire shortcuts in `FlyoutMenuShortcut` — it's a visual label only

---

## Audit Checklist

- [ ] Icon-only trigger has a meaningful `aria-label`
- [ ] All icons inside items are `aria-hidden`
- [ ] Keyboard shortcuts are wired as actual handlers (not only displayed)
- [ ] Disabled items remain visible (not hidden)
- [ ] Menu nesting is 2 levels maximum
- [ ] `align="end"` used for right-aligned triggers
- [ ] Checkbox/radio state is controlled externally (not local to the menu)

---

## Related Components

- **Button** — common trigger element
- **Dialog** — use when an action requires user input before confirming
- **Tabs** — use for primary view switching, not contextual actions
- **FlyoutMenu** vs **Select**: FlyoutMenu is for actions and toggles; Select is for single-value form inputs
