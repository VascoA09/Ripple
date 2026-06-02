---
name: Drawer
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [overlay, navigation]
---

# Drawer

The Drawer is a sliding panel that reveals additional content or navigation options without disrupting the current view. Drawers are anchored to one edge of the viewport and can contain navigation menus, detail panels, search results, and notification feeds.

---

## When to use

- Reveal contextual detail or actions without navigating away from the current page
- Provide a navigation panel that appears alongside main content
- Display search results, filtered lists, or notification feeds
- Show multi-step forms or guided flows in a focused panel
- Offer secondary tools such as filters or settings without a full page transition

## When not to use

- For brief confirmations or alerts — use a Dialog instead
- When the content requires the user's full attention — use a full page
- For simple selection of one option — use a Dropdown or Flyout Menu
- When the panel would obscure critical content on small screens
- As a replacement for primary navigation that is always visible

---

## Where to use

### Global Navigation
- App-level menu triggered from a navbar icon button
- Module navigation showing hierarchical sections
- Favourites or recent items panel
- User profile and account settings

### Contextual Panels
- Record detail view alongside a data grid
- Comment threads or activity history
- Filter panel for complex search results
- Document preview with inline actions

### Communication & Notifications
- Notification feed with unread indicators
- In-app messaging inbox
- Approval or task queues with inline actions

---

## Anatomy

The Drawer is composed of three fixed regions and a scrollable content area:

```
┌────────────────────────────────────┐
│  Header (fixed)                     │  ← Title, description, actions, close
├────────────────────────────────────┤
│  Tools (fixed, optional)            │  ← Search, filters, chips, tabs
├────────────────────────────────────┤
│  Content (scrollable)               │  ← Sections, menu items, lists
│    └─ Section                       │
│         ├─ Section title + counter  │
│         └─ Content slot             │
└────────────────────────────────────┘
```

---

## Header

The header is always present and fixed. It contains:

- **Title** (required): Names the drawer's content clearly and concisely. Truncates to one line when an adornment is present.
- **Title adornment** (optional): An inline element placed immediately after the title. See below.
- **Description** (optional): A short subtitle below the title, truncated to one line.
- **Header actions** (optional): Up to two buttons beside the close button. Use `ghost` or `outline` variants to maintain hierarchy.
- **Close button** (always): An `IconButton` with `aria-label="Close drawer"`. Positioned at the far end of the header.

### Header title adornment (optional)

An inline element placed immediately after the header title, on the same baseline. Use only when the signal describes the subject of the drawer itself — not a content group inside it.

Accepts one of three types:

- **Counter** (`outline`, `neutral`) — use when the total count of items in the drawer is relevant to the user's decision before entering the content (e.g. "Pending approvals" with a count). Do not use if the count belongs to a specific section.
- **Badge** — use when the drawer subject has a transient status that needs immediate attention: approval state, task urgency, or a system-driven condition. Choose color to match severity (`neutral`, `info`, `warning`, `critical`).
- **Tag** — use when the drawer is scoped to a persistent category or classification context that the user needs to hold in mind while reviewing the content (e.g. a department, cost centre, or organisational unit). Do not use for status — use Badge instead.

Only one adornment is allowed per header. If the signal applies to a content group rather than the drawer subject, use a section title adornment instead.

### Header sizing

| Element            | Value                             |
|--------------------|-----------------------------------|
| Min-height         | 64 px                             |
| Padding            | `var(--spacing-100)` all sides    |
| Title font size    | `var(--font-size-120)` (18 px)    |
| Title font weight  | `var(--font-weight-semibold)`     |
| Description size   | `var(--font-size-80)` (14 px)     |
| Description color  | `var(--text-soft)`                |
| Border bottom      | `1px solid var(--border-neutral)` |

---

## Tools

The tools area is optional and fixed below the header. It remains visible while the content area scrolls. It can contain any combination of:

- **Search input**: A text field with a leading search icon and optional trailing clear button.
- **Filters button**: An `IconButton` beside the search input to open filter options.
- **Chips**: `Chip` (selectable variant) components to filter content by category.
- **Tabs**: `Tabs` component to switch between distinct content views.

Multiple tools elements stack vertically with `var(--spacing-75)` gap. The area has `var(--spacing-100)` horizontal padding and no top padding (continuation of the header).

---

## Sections

Sections group related content within the scrollable area. Each section can include:

### Section title area (optional)

| Element           | Style                                                      |
|-------------------|------------------------------------------------------------|
| Title             | Uppercase, `var(--font-size-80)`, `var(--text-soft)`       |
| Title adornment   | See below                                                  |
| Link              | Text link, `var(--text-accent)`, triggers a navigation     |
| Padding           | `var(--spacing-75)` top, `var(--spacing-100)` horizontal, `var(--spacing-50)` bottom |

#### Title adornment (optional)

An inline element placed immediately after the section title, on the same baseline. Accepts one of three types:

- **Counter** (`outline`, `neutral`) — use when the number of items is known and relevant to the user's decision (e.g. how many results are in a section). Not a status signal.
- **Badge** — use when the section carries a transient status that needs attention: new content, unseen items, or a system-driven state. Choose color to match severity (`neutral`, `info`, `warning`, `critical`).
- **Tag** — use when the section has a persistent categorical label that aids scanning but carries no urgency (e.g. "Beta", "Deprecated", "Required"). Tags are non-interactive in this context.

Only one adornment is allowed per section title. If unsure which to use: Counter if there's a number, Badge if there's a transient status, Tag if it's a fixed category.

Use `divider` on a section to render a `1px solid var(--border-neutral)` separator above it.

### Content slot

Accepts four predefined menu types or custom content.

---

## Content: Menu Types

### Regular Menu (`DrawerMenuItem`)

A flat single-level item. Elements:

| Element         | Description                                        |
|-----------------|----------------------------------------------------|
| Left icon       | Optional, 14 × 14 px, `var(--text-soft)` color    |
| Label           | Required, `var(--font-size-80)`, single-line truncated |
| Code            | Optional, `var(--font-size-60)`, right-aligned     |
| Context button  | Optional ⋯ button, visible on hover                |

**Active state**: `3px solid var(--color-primary-loud)` left border, primary text and icon color, semibold label.  
**Item height**: 40 px minimum, `var(--spacing-50)` vertical padding, `var(--spacing-100)` horizontal.

### Multi-level Menu (`DrawerMultiLevelItem`)

Extends the regular item with a chevron indicator. Nested items appear with `var(--spacing-100)` left indent and a `1px solid var(--border-neutral)` vertical guide. The chevron rotates 0° (expanded) / −90° (collapsed).

### List Menu (`DrawerListItem`)

List-style rows for messages, contacts, and search results:

| Element          | Description                                         |
|------------------|-----------------------------------------------------|
| Unread indicator | 8 × 8 px circle, `var(--color-primary)` background |
| Content before   | Avatar, icon, or any element                        |
| Header           | Single-line truncated, semibold when unread         |
| Secondary info   | Single-line truncated, `var(--text-soft)`           |
| Message          | 2-line clamped, `var(--text)`                       |
| Timestamp        | Right-aligned, `var(--font-size-60)`                |
| Content after    | Badge, counter, or any element                      |

**Row height**: 56 px minimum, `var(--spacing-75)` vertical padding.

### Notifications Menu (`DrawerNotificationItem`)

Adapted list rows for notification content:

| Element           | Description                                          |
|-------------------|------------------------------------------------------|
| Unread indicator  | 8 × 8 px circle, `var(--color-primary)`              |
| Avatar            | `Avatar` component, size `m` (32 px)                 |
| Title             | Single-line truncated, semibold                      |
| Timestamp         | Right-aligned, `var(--font-size-60)`                 |
| Message           | 2-line clamped                                       |
| Action button     | Optional `Button`, `outline` / `xsmall`              |
| Divider           | `1px solid var(--border-neutral)`, hidden on last    |

Unread items have `var(--bg-primary-softest)` background tint.

---

## States

Every interactive item follows the same state pattern:

| State    | Background                    | Notes                                     |
|----------|-------------------------------|-------------------------------------------|
| Default  | `transparent`                 | Resting state                             |
| Hover    | `var(--bg-neutral-softest)`   | Applied when cursor enters the item       |
| Active   | `var(--bg-primary-softest)` + `3px solid var(--color-primary-loud)` left border | Selected item |
| Focus    | `2px solid var(--border-focus)` outline, `−2px` offset | Keyboard focus ring |
| Pressed  | `var(--bg-neutral-soft)`      | Mouse-down on item                        |
| Disabled | 45 % opacity, `not-allowed` cursor, no pointer events | Non-interactive state |

---

## Side

| Value   | Description                              | Common use                              |
|---------|------------------------------------------|-----------------------------------------|
| `right` | Slides in from the right (default)       | Detail panels, notifications, filters   |
| `left`  | Slides in from the left                  | Primary navigation panels               |

---

## Size

| Value    | Width  | When to use                                             |
|----------|--------|---------------------------------------------------------|
| `small`  | 320 px | Compact navigation, quick-pick lists                    |
| `medium` | 480 px | Standard navigation and detail panels (default)         |
| `large`  | 640 px | Rich content, multi-column detail, notification threads |
| `full`   | 100 %  | Full-screen panels on mobile or immersive flows         |

---

## Persistent Drawers

A persistent drawer has no overlay, no focus trap, and no scroll lock. It remains visible alongside page content until explicitly dismissed. Use this mode for desktop split-pane layouts where the drawer is a structural part of the page rather than a temporary overlay.

### When to use persistent

- Primary navigation panels that stay open during a session
- Detail or inspector panels anchored beside a data grid or canvas
- Filter panels that need to coexist with interactive content
- Any layout where the drawer occupies a permanent column in the flex flow

### When not to use persistent

- On small screens where the drawer would obscure content
- For transient information (confirmations, alerts, notifications)
- When the drawer content demands full attention and background interaction must be blocked

### Behaviour differences

| Behaviour        | Modal (default) | Persistent          |
|------------------|-----------------|---------------------|
| Overlay          | Yes             | No                  |
| Focus trap       | Yes             | No                  |
| Scroll lock      | Yes             | No                  |
| Renders via      | `ReactDOM.createPortal` | Inline (normal document flow) |
| `aria-modal`     | `true`          | `false`             |
| Position         | `fixed`         | `relative` (participates in flex layout) |
| Escape key       | Closes drawer   | Closes drawer       |
| Overlay click    | Closes drawer   | N/A                 |

### Split-pane layout pattern

Wrap the drawer and main content in a `display: flex` container:

```tsx
<div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
  <Drawer open={open} onClose={() => setOpen(false)} side="left" size="small" persistent>
    {/* navigation content */}
  </Drawer>

  <main style={{ flex: 1, overflow: 'auto' }}>
    {/* page content */}
  </main>
</div>
```

The drawer occupies its natural width in the flex row. When `open` is false, it animates out and the main content expands to fill the space. No portal, no overlay — the drawer is just another flex child.

### Accessibility notes for persistent drawers

- `aria-modal` is `false`; the panel is part of the page, not a modal dialog.
- Focus is not trapped. Users can Tab freely between the drawer and main content.
- Screen readers announce the drawer as a `dialog` landmark, but background content remains accessible.
- Ensure the drawer close button or the toggle control in the top bar is keyboard-reachable from both regions.

---

## Animation

| Property  | Value                                              |
|-----------|----------------------------------------------------|
| Slide     | 250 ms, `cubic-bezier(0.22, 1, 0.36, 1)` ease-out |
| Overlay   | 200 ms, linear fade                                |

---

## Overlay

A semi-transparent backdrop (`rgba(0, 0, 0, 0.40)`) is rendered behind the drawer panel. By default, clicking the overlay closes the drawer. Set `closeOnOverlayClick={false}` to prevent this (use when the user must explicitly confirm or cancel).

Persistent drawers have no overlay. See [Persistent Drawers](#persistent-drawers) above.

---

## Accessibility

### ARIA roles and semantics

**Modal drawer**

| Attribute | Element | Value | Notes |
|---|---|---|---|
| `role` | Drawer panel | `"dialog"` | |
| `aria-modal` | Drawer panel | `"true"` | Must be supplemented with `inert` on all background DOM — `aria-modal` alone does not suppress background content in VoiceOver |
| `aria-labelledby` | Drawer panel | Header title `id` | Preferred over `aria-label`; falls back to `aria-label` prop when no title is rendered |
| `aria-hidden` | Overlay backdrop | `"true"` | Decorative — must not receive focus |

**Persistent drawer**

| Attribute | Element | Value | Notes |
|---|---|---|---|
| `role` | Drawer panel | `"dialog"` | |
| `aria-modal` | Drawer panel | `"false"` | Do not apply `inert` to background content — it remains accessible |

**Navigation drawers**: when the drawer's primary purpose is navigation (app-level menu, module nav), wrap the menu content in a `<nav>` element with `aria-label` matching the drawer title. The `role="navigation"` landmark coexists with the outer `role="dialog"`.

**Menu items**

The Drawer uses a list-based interaction model, not a true ARIA menu. Use `role="listitem"` within `role="list"` — not `role="menuitem"` within `role="menu"`. The ARIA `menu` pattern requires arrow key navigation, which conflicts with the Tab-based traversal documented here and is inappropriate for navigation drawers.

| Attribute | Element | Condition |
|---|---|---|
| `aria-current="page"` | Active navigation item | Applied to the link for the current page |
| `aria-disabled="true"` | Disabled item | Pair with `tabindex="-1"` to remove from tab order |
| `aria-expanded` | Multi-level item toggle | `"true"` when expanded, `"false"` when collapsed |
| `aria-haspopup="true"` | Multi-level item toggle | Signals nested content |
| `aria-label="Unread"` | Unread indicator dot | Text alternative for the visual dot; placed before item content in DOM order |
| `aria-label="Close drawer"` | Close button | Required — icon-only button has no visible label |

**Dynamic content**

Wrap regions that update without user action (notification feeds, live counts) in a live region:

```html
<div aria-live="polite" aria-atomic="false">
  <!-- notification items -->
</div>
```

Use `aria-atomic="false"` so additions are announced individually. Reserve `aria-live="assertive"` for urgent system alerts only — not notification feeds.

---

### Keyboard

| Key | Action |
|---|---|
| `Tab` | Move focus forward through interactive elements |
| `Shift + Tab` | Move focus backward through interactive elements |
| `Enter` / `Space` | Activate the focused item |
| `Enter` / `Space` | Expand or collapse a multi-level item |
| `Escape` | Close the drawer and return focus to the trigger element |

Focus is trapped inside modal drawers. Persistent drawers do not trap focus — `Tab` moves freely between the drawer and main content.

---

### Focus management

- **On open**: focus moves to the first focusable element inside the drawer. For navigational drawers with no pre-selected item, focus the close button or the first list item — not the header title (not interactive).
- **On close**: focus returns to the element that triggered the open. Consumers manage this via the `onClose` callback — the component does not handle it internally.
- **Focus not obscured (WCAG 2.4.11)**: the fixed header must not clip focused elements in the scrollable content area. Apply `scroll-margin-top` equal to the header height (plus tools area height when present) on all interactive elements in the scrollable region. Alternatively, call `scrollIntoView` with a scroll offset when focus enters the content area.
- **Focus ring**: `2px solid var(--border-focus)` outline with `−2px` offset on all interactive elements. Never suppress the focus ring, including on mouse interaction.

---

### Screen reader behaviour

- The drawer is announced as a dialog with its title as the accessible name when it opens.
- For modal drawers, apply `inert` programmatically to all DOM siblings outside the drawer portal on open; remove on close. Do not rely on `aria-modal` alone — VoiceOver does not honour it without `inert`.
- Unread indicators must appear before the item label in DOM order so they are announced first: "Unread, [item label]".
- Disabled items must retain their accessible name so screen readers can announce them as disabled — do not strip labels from disabled items.

---

### Touch targets

All interactive items must meet the Ripple internal standard of 44×44px minimum touch target. Menu item rows have a 40px minimum height, which falls short by 4px. Compensate with a transparent padding or a pseudo-element expanded hit area. If the visible height cannot be increased, document the deviation explicitly and enforce a spacing buffer between items.

---

### Motion

The 250ms slide animation must respect `prefers-reduced-motion`. Remove the transition entirely — do not substitute a faster animation:

```css
@media (prefers-reduced-motion: reduce) {
  .drawer {
    transition: none;
  }
}
```

The overlay fade is also subject to this rule.

---

### Contrast

- Body text and menu labels: `--text` on `--bg-surface` — WCAG AA minimum (4.5:1 for normal text).
- Section titles: rendered uppercase at `font-size-80` (14px). At this size, uppercase text does not qualify as "large text" under WCAG — 4.5:1 contrast is required, not 3:1. Verify that `--text-soft` passes 4.5:1 against the background surface token before using it here.
- Active state: the `3px solid var(--color-primary-loud)` left border provides a non-colour cue — satisfies WCAG 1.4.1 (use of colour).
- Focus ring: must meet 3:1 contrast against all adjacent colours (WCAG 1.4.11).
- Disabled items: exempt from contrast requirements per WCAG 1.4.3. Ensure they retain a complete accessible name so screen readers can announce them as disabled.

---

## Spacing

| Token                  | Value | Usage                              |
|------------------------|-------|------------------------------------|
| `var(--spacing-25)`    | 4 px  | Gap between title and description  |
| `var(--spacing-50)`    | 8 px  | Vertical padding in menu items     |
| `var(--spacing-75)`    | 12 px | Gap between tools elements; section title padding |
| `var(--spacing-100)`   | 16 px | Header and section horizontal padding |
| `var(--spacing-150)`   | 24 px | Sub-item indent in multi-level menu |

---

## Content Guidelines

- **Title**: Use sentence case. Keep to 2–4 words (e.g. "Navigation", "Find people", "Notifications").
- **Description**: Optional. One line maximum, providing brief context for the title.
- **Section titles**: Use uppercase, 2–3 words (e.g. "FINANCE", "RECENT", "QUICK LINKS").
- **Menu item labels**: Sentence case. Prefer nouns or noun phrases over verbs for navigation items.
- **Codes**: Append short identifier codes (2–5 characters) to help power users scan.
- **Notification messages**: 2-line maximum. Lead with what happened, not who did it.

---

## Best Practices

### Do
- Use a descriptive title that clearly names the drawer's content
- Limit header actions to two — a primary and a secondary at most
- Use sections and section titles to group related items
- Show unread indicators only for genuinely new or unseen content
- Close the drawer after a navigation action takes the user to a new page
- Ensure every interactive element is keyboard-reachable
- Use the overlay to block interaction with background content while the drawer is open

### Don't
- Don't use a modal drawer for navigation that stays open during normal work — use a persistent drawer instead
- Don't nest drawers — open a new page or dialog instead
- Don't put more than five elements in the tools area
- Don't use the drawer for brief confirmations — use a Dialog
- Don't rely on color alone to communicate the active or unread state
- Don't disable the overlay if the background must stay non-interactive
- Don't open a drawer without an explicit user action
- Don't use the `large` size for simple navigation lists with fewer than five items
