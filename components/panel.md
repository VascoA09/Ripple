---
name: Panel
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [layout]
---

# Panel

Versatile container for organising content into structured sections with optional collapsibility.

---

## Anatomy

| Sub-component | Element | Purpose |
|---|---|---|
| `Panel` | `<div>` | Root container — provides context, manages collapse state |
| `PanelHeader` | `<div>` | Title row with optional subtitle, actions, or collapse button |
| `PanelBody` | `<div>` | Main content area |
| `PanelFooter` | `<div>` | Bottom actions or metadata |
| `PanelTabs` | `<div role="tablist">` | Tab navigation bar |
| `PanelTab` | `<button role="tab">` | Individual tab button |
| `PanelTabsContent` | `<div role="tabpanel">` | Tab content — only the active panel renders |

---

## Variants / Behaviours

| Behaviour | Prop | Notes |
|---|---|---|
| Static (default) | `collapsible={false}` | Body always visible. Actions render in header. |
| Collapsible | `collapsible={true}` | Collapse button (chevron) in header. Actions hidden. Body + footer animate in/out. |

---

## State

| State | Attribute on `.panel` | Description |
|---|---|---|
| Expanded | `data-expanded="true"` | Set only when `collapsible={true}` |
| Collapsed | `data-expanded="false"` | Set only when `collapsible={true}` |

---

## Spacing tokens

| Region | Token | Value |
|---|---|---|
| Header padding | `--spacing-150` | 24px |
| Header gap (title ↔ end) | `--spacing-100` | 16px |
| Title ↔ subtitle gap | `--spacing-25` | 4px |
| Body padding (default) | `--spacing-150` | 24px |
| Footer padding (default) | `--spacing-150` | 24px |
| Footer gap between items | `--spacing-100` | 16px |
| Collapse button size | `--spacing-200` | 32 × 32px |
| Tab item padding | `--spacing-75` `--spacing-100` | 12px 16px |

---

## Color tokens

| Element | Token |
|---|---|
| Panel background | `--bg-surface` |
| Panel border | `--border-neutral` |
| Title | `--text-loud` |
| Subtitle | `--text` |
| Collapse icon | `--text` |
| Collapse hover bg | `--bg-neutral-soft` |
| Collapse active bg | `--bg-neutral` |
| Collapse focus outline | `--border-focus` |
| Active tab indicator | `--border-primary` |
| Active tab label | `--text-loud` |
| Inactive tab label | `--text-soft` |

---

## Collapse animation

Uses `grid-template-rows: 0fr / 1fr` on `.panel__collapsible` so height transitions smoothly without a known max-height. `overflow: hidden` on `.panel__collapsible-inner` collapses it to zero.

- Duration: 250ms, `ease`
- Chevron rotates 180° over 200ms, `ease`
- Both respect `prefers-reduced-motion: reduce`

---

## Tab state architecture

`Panel` holds `activeTab` state internally. `PanelTabs` syncs its `value` prop into Panel context via `useLayoutEffect` (before paint — no flash). `PanelTab` reads `activeTab` from Panel context to determine `aria-selected`. `PanelTabsContent` reads `activeTab` and returns `null` when its `value` doesn't match.

This allows `PanelTabs` and `PanelTabsContent` to be siblings in the component tree while sharing state.

---

## Accessibility

| Feature | Implementation |
|---|---|
| Collapse toggle | `<button>` with `aria-expanded` |
| Collapse label | `aria-label="Collapse panel"` / `"Expand panel"` |
| Tab role | `role="tab"` + `aria-selected` |
| Tab list | `role="tablist"` on container |
| Tab panel | `role="tabpanel"` on content |
| Focus ring | 2px solid `--border-focus`, offset 4px (button), 2px (tabs) |
| Reduced motion | `transition: none` via `@media (prefers-reduced-motion: reduce)` |

---

## Properties

### Panel

| Prop | Type | Default | Description |
|---|---|---|---|
| `collapsible` | `boolean` | `false` | Enables collapse behaviour |
| `defaultExpanded` | `boolean` | `true` | Initial expansion state |
| `onExpandedChange` | `(expanded: boolean) => void` | — | Notification callback — Panel manages its own state |
| `children` | `ReactNode` | required | Sub-components |

### PanelHeader

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | required | Title text |
| `subtitle` | `ReactNode` | — | Supporting text below title |
| `actions` | `ReactNode` | — | Buttons/controls. Hidden when `collapsible={true}`. |

### PanelBody / PanelFooter

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | required | Content |
| `padding` | `string` | `var(--spacing-150)` | Override via inline style |

### PanelTabs

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | required | Active tab value (consumer-controlled) |
| `onValueChange` | `(value: string) => void` | required | Called when a tab is clicked |
| `children` | `ReactNode` | required | `PanelTab` items |

### PanelTab

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | required | Unique identifier, matched against `PanelTabs.value` |
| `children` | `ReactNode` | required | Label |

### PanelTabsContent

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | required | Renders only when this matches the active tab |
| `children` | `ReactNode` | required | Content |

---

## Related components

- **Card** — richer interactive content blocks
- **Accordion** — multiple collapsible sections in a list
- **Divider** — section separation within a panel body
- **BannerAlert** — notifications placed inside panel bodies
