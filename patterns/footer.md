---
name: Footer
status: draft
version: 0.2.0
last_updated: 2026-03-31
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [layout, navigation]
---

# Footer — Ripple Design System

## Overview

The **Footer** is a persistent tab bar pattern that appears at the bottom of enterprise applications, allowing users to navigate between multiple open pages and organise them into meaningful groups. It serves as a container for all open tabs and tab groups, providing quick access to all active work contexts within the application.

Tab items use Ripple Tabs CSS classes (`.tab-item`, `.tab`) for visual consistency. Footer-specific overrides are scoped via the `.footer-tab` modifier class.

The Footer pattern is essential for complex enterprise workflows where users need to maintain multiple pages open simultaneously and switch between them efficiently without losing their work context.

---

## When to use

Use the Footer pattern when:

* Building multi-page enterprise applications where users work across multiple contexts simultaneously
* Users need to maintain multiple work contexts (e.g., different clients, projects, reports)
* Workflows require frequent switching between different pages or modules
* Complex data entry or review processes span multiple pages
* Users benefit from grouping related pages together for quick access
* The application supports multi-tasking across different functional areas

Do not use the Footer pattern when:

* Building simple single-page applications
* Creating mobile-first applications (limited screen space makes footer tabs impractical)
* Users rarely need to switch between pages
* The application has a shallow navigation hierarchy
* Browser tabs suffice for the use case
* Screen real estate is limited and better used for content

---

## Anatomy

The Footer is composed of several key elements that work together to provide tab management functionality:

```
┌──────────────────────────────────────────────────────────────┐
│ [≡] [<] [Tab 1] [Group][Tab 2][Tab 3] [Locked] [Pinned] [>] │
└──────────────────────────────────────────────────────────────┘
     │   │    │       │      │      │       │        │      │
     │   │    │       │      │      │       │        │      └─ Scroll right
     │   │    │       │      │      │       │        └──────── Pinned tab
     │   │    │       │      │      │       └───────────────── Locked tab
     │   │    │       │      │      └───────────────────────── Standard tab
     │   │    │       │      └──────────────────────────────── Tab in group
     │   │    │       └─────────────────────────────────────── Footer group
     │   │    └─────────────────────────────────────────────── Standard tab
     │   └──────────────────────────────────────────────────── Scroll left
     └──────────────────────────────────────────────────────── Contextual menu
```

### 1. Contextual Menu Button

* **Icon**: Three horizontal dots (MoreHorizontal)
* **Size**: 32 × 32 px button
* **Function**: Opens a flyout menu containing:
  * List of all open tabs for quick navigation
  * Bulk action: "Close all tabs"
* **Position**: Far left of the footer
* **Interaction**: Click to open menu, click item to navigate or perform action

### 2. Scroll Buttons

**Scroll Left Button:**
* **Icon**: ChevronLeft
* **Size**: 32 × 32 px button
* **State**: Disabled when scrolled to the leftmost position
* **Function**: Scrolls content container left by 200 px

**Scroll Right Button:**
* **Icon**: ChevronRight
* **Size**: 32 × 32 px button
* **State**: Disabled when scrolled to the rightmost position
* **Function**: Scrolls content container right by 200 px

### 3. Content Container

* **Behaviour**: Horizontally scrollable area containing tabs and groups
* **Overflow**: Hidden with smooth scrolling
* **Scrollbar**: Hidden (navigation via scroll buttons)
* **Gap**: `var(--spacing-50)` (8 px) between items

### 4. Footer Container

* **Height**: 52 px (box-sizing: border-box)
* **Background**: `var(--bg-surface)`
* **Border**: 1 px solid `var(--border-neutral)` on top edge only
* **Padding**: 0 `var(--spacing-100)` (0 16 px)
* **Position**: Fixed to bottom of viewport

---

## Footer Tabs

Footer tabs represent individual open pages. They use Ripple Tabs' visual language — a 2 px `var(--border-primary)` bottom indicator marks the active tab. Each tab allows users to navigate between pages and access tab-specific actions.

### Tab Anatomy

* **Icon** (optional): 14 × 14 px decorative icon for visual identification
* **Tab label**: Text label identifying the page
* **Type indicator**: Lock or pin icon inside the tab button (locked/pinned types only)
* **Close button**: Always visible X button (standard tabs only)
* **Contextual menu button**: Three dots — hidden by default, revealed on hover and when selected

### Tab Types

#### Standard Tab

The default tab type with full functionality.

**Characteristics:**
* Close button always visible
* Contextual menu button appears on hover / when selected
* Can be closed, locked, or pinned

**Contextual menu actions:**
* Lock tab
* Pin tab to left of screen
* Add tab to group
* Close this tab
* Close all other tabs
* Close all tabs

**Use when:**
* Page can be safely closed without special consideration
* User should have full control over tab lifecycle

#### Locked Tab

Prevents accidental closure of important pages.

**Characteristics:**
* Shows lock icon after the label (inside the tab button)
* No close button
* Must be unlocked via contextual menu before closing

**Contextual menu actions:**
* Unlock tab
* Pin tab to left of screen
* Add tab to group
* Close all other tabs

**Use when:**
* Page contains critical information that shouldn't be accidentally closed
* Page serves as a reference during the session

#### Pinned Tab

Keeps the page accessible with a pin indicator.

**Characteristics:**
* Shows pin icon after the label (inside the tab button)
* No close button
* Must be unpinned via contextual menu before closing

**Contextual menu actions:**
* Unpin tab
* Add tab to group
* Close all other tabs

**Use when:**
* User needs a persistent reference point
* Constant visibility of specific content is required

### Tab States

| State | Visual treatment | Trigger |
|-------|-----------------|---------|
| **Default** | Transparent background | No interaction |
| **Hover** | `var(--bg-primary-softest)` background + 4 px right padding | Pointer over tab |
| **Selected** | 2 px `var(--border-primary)` bottom indicator + 4 px right padding | Tab represents current page |
| **Focus** | Inset box-shadow focus ring | Keyboard focus |

The active tab indicator (2 px bottom bar) is rendered as a `::after` pseudo-element on `.tab-item`. It is positioned within the element's bounds and is safe under `overflow: hidden` ancestors.

### Tab Sizing

* **Height**: 40 px (`min-height` via Ripple Tabs)
* **Padding**: 0 `var(--spacing-50)` (0 8 px)
* **Padding right (hover / selected)**: `var(--spacing-25)` (4 px) — accounts for visible action buttons
* **Min width**: 120 px
* **Font size**: `var(--font-size-80)` (14 px)
* **Font weight**: Regular

### Action Button Visibility

| Button | Default | Hover | Selected |
|--------|---------|-------|----------|
| Close (×) | Always visible (standard tabs) | Always visible | Always visible |
| More (⋯) | Hidden (`display: none`) | Visible | Visible |

The more button uses `display: none` (not `opacity: 0`) so it contributes no width to the tab when hidden. The close button is a direct sibling of the tab button, outside the `tab__actions` container.

---

## Footer Groups

Footer groups organise related tabs together with a custom name and color. The group header is an **outlined badge button** (border + text in the group color, transparent fill) — not a filled Tag component.

### Group Anatomy

* **Label button**: Outlined badge button — border and text in group color, transparent background
* **Contextual menu button**: Appears when expanded
* **Group tabs**: Tabs within the group (when expanded)
* **Group indicator**: 2 px bottom border in group color

### Group Features

#### Expand and Collapse

**Expanded state:**
* Shows all tabs within the group
* Displays contextual menu button
* Allows interaction with individual tabs

**Collapsed state:**
* Shows only the group label button
* Hides tabs and contextual menu
* Saves horizontal space

**Interaction:** Click the group label button to toggle expansion

#### Group Colors

Groups can be assigned any of the 11 available color tokens. Colors are purely decorative — they carry no semantic meaning. The label always communicates the group's purpose.

| Color | Token |
|-------|-------|
| `gray` (default) | `--color-cool-gray-60` |
| `blue` | `--color-blue-60` |
| `green` | `--color-green-60` |
| `emerald` | `--color-emerald-60` |
| `aqua` | `--color-aqua-60` |
| `purple` | `--color-purple-60` |
| `violet` | `--color-violet-60` |
| `pink` | `--color-pink-60` |
| `red` | `--color-red-60` |
| `orange` | `--color-orange-60` |
| `ochre` | `--color-ochre-60` |

**Color application:**
* Group label button — border and text use `--_group-color`
* Group bottom border — 2 px solid `--_group-color`

**Guidance:**
* Pick colors that distinguish groups from each other, not to convey meaning
* Avoid using a color exclusively for "errors" or "urgency" — the label carries that meaning
* Limit active groups to 5–7 at a time to prevent visual noise

#### Selected tab indicator inside groups

Selected tabs inside a group use the standard `var(--border-primary)` indicator, the same as ungrouped tabs. The group color appears only on the border-bottom and label — not on the tab indicator.

#### Contextual Menu Actions

When a group is expanded, the contextual menu provides:

* **Edit group**: Modify group name, color, or tab membership
* **Ungroup**: Remove tabs from group (tabs remain open individually)
* **Close group**: Close all tabs within the group and remove it
* **Close all other tabs**: Close all tabs except those in this group

### Group Sizing

* **Height**: 40 px (box-sizing: border-box)
* **Padding**: 0 `var(--spacing-50)` (0 8 px)
* **Border**: 2 px solid (group color) — bottom edge only, no border-radius
* **Label button height**: 32 px
* **Label button font size**: `var(--font-size-60)` (12 px), semibold
* **Gap between label and menu button**: `var(--spacing-25)` (4 px)
* **Gap between tabs**: `var(--spacing-25)` (4 px)

---

## Scroll Behaviour

The Footer implements smart scrolling to handle overflow when tabs exceed the container width.

### Scroll Detection

* Automatically detects when content exceeds container width
* Enables appropriate scroll buttons based on scroll position
* Disables scroll buttons when reaching either end

### Scroll Buttons

**Left button enabled when:** content is scrolled past the leftmost position

**Right button enabled when:** content extends beyond the right edge

**Both disabled when:** all content fits within the container

### Scroll Amount

* Default scroll distance: 200 px per click
* Smooth scrolling behaviour
* Updates button states after scroll completes

---

## Interaction Patterns

### Opening Tabs

Tabs are typically opened through:
* Navigation actions within the application
* Links that open in the footer tab system
* Programmatic API calls from application code

**Best practice:** Implement a maximum tab limit (15–20 tabs) to prevent performance issues and maintain usability.

### Closing Tabs

**Standard tabs:**
* Click the always-visible X button on the tab
* Select "Close this tab" from contextual menu
* Use "Close all other tabs" to close everything except current
* Use "Close all tabs" from the footer contextual menu

**Locked tabs:**
* Must first unlock via contextual menu, then close as standard tab

**Pinned tabs:**
* Must first unpin via contextual menu, then close

**Grouped tabs:**
* Close individually (standard tab behaviour)
* Close entire group via group contextual menu
* Ungroup first to manage individually

### Switching Between Tabs

**Direct interaction:** Click on any visible tab to switch to that page

**Via contextual menu:** Open footer contextual menu and select tab from "Open tabs" list — useful when many tabs are open

**Scroll to find:** Use scroll buttons to reveal hidden tabs, then click

### Tab State Transitions

**Standard → Locked:** "Lock tab" from contextual menu — close button removed, lock icon added

**Locked → Standard:** "Unlock tab" from contextual menu — lock icon removed, close button restored

**Standard/Locked → Pinned:** "Pin tab to left of screen" — pin icon added, cannot close while pinned

**Pinned → Standard/Locked:** "Unpin tab" — returns to previous type

---

## Use Cases

### Financial Management Systems

**Scenario:** Accountant working on month-end close

* Multiple ledgers open simultaneously (grouped by department)
* Reconciliation reports locked to prevent accidental closure
* Quick switching between accounts using footer tabs

**Groups:** Revenue / Expenses / Reconciliation

### HR & Payroll Platforms

**Scenario:** HR manager processing employee records

* Employee profiles open for review
* Payroll calculation sheets, benefits enrollment forms
* Compliance checklists (locked)

**Groups:** New Hires / Payroll Review / Performance Reviews

### Project Management Tools

**Scenario:** Project manager overseeing multiple projects

* Project dashboards for 3–4 active projects
* Resource allocation sheet (pinned)
* Budget tracker (locked)

**Groups:** Q1 Projects / High Priority / Planning

### Customer Support Systems

**Scenario:** Support agent managing multiple tickets

* 5–8 open support tickets
* Customer information (pinned for reference)

**Groups:** Urgent / In Progress / Follow-up

---

## Visual Design

### Colors

| Element | Token |
|---------|-------|
| Footer background | `var(--bg-surface)` |
| Footer top border | `var(--border-neutral)` |
| Tab background (default) | transparent |
| Tab background (hover) | `var(--bg-primary-softest)` |
| Tab background (selected) | transparent (indicator only) |
| Tab selected indicator | `var(--border-primary)` |
| Tab text (default) | `var(--text-soft)` |
| Tab text (hover / selected) | `var(--text)` |
| Group bottom border | `--_group-color` (group color token) |
| Group label border + text | `--_group-color` |

### Typography

| Element | Font size | Font weight |
|---------|-----------|-------------|
| Tab label | `var(--font-size-80)` (14 px) | Regular |
| Group label | `var(--font-size-60)` (12 px) | Semibold |

### Spacing

| Element | Value |
|---------|-------|
| Footer height | 52 px |
| Footer padding inline | 16 px |
| Tab height | 40 px (min-height) |
| Tab padding inline | 8 px |
| Tab padding right (hover / selected) | 4 px |
| Tab min width | 120 px |
| Tab gap between elements | 8 px |
| Gap between tabs / groups | 8 px |
| Group height | 40 px |
| Group label height | 32 px |
| Group padding inline | 8 px |
| Group border width | 2 px (bottom only) |
| Tab selected indicator height | 2 px |

---

## Accessibility

### Keyboard Navigation

**Tab key:** Navigate between footer elements (menu button, scroll buttons, tabs) left to right

**Enter / Space:** Activate focused element, open contextual menus, switch to selected tab

**Arrow keys:** Navigate through menu items when contextual menu is open

**Escape:** Close open contextual menus, return focus to trigger button

### Screen Reader Support

**Tab announcements:**
* "Tab name, [type], [active/inactive]"
* Example: "Payroll Navigator, standard tab, active"
* Example: "Reports, locked tab, inactive"

**Button labels:**
* Footer menu: "Footer menu, open tabs and actions"
* Scroll left: "Scroll tabs left"
* Scroll right: "Scroll tabs right"
* Tab close: "Close [tab name]"
* Tab more: "More actions for [tab name]"

**Group announcements:**
* "Group name, expanded/collapsed, contains N tabs"
* Color is decorative and not announced

### Focus Management

**Focus indicators:** Inset box-shadow focus ring on tab button; 2 px outline on group label and action buttons

**Focus behaviour:**
* When a tab is closed, focus moves to the next tab (or previous if last)
* When a menu closes, focus returns to the trigger button

### Colour and Contrast

**Tab type independence:** Tab type communicated by icons (lock, pin), not colour alone

**Group colour independence:** Group name is always present; colour is supplementary, never its replacement. Accessible to colourblind users.

### ARIA Attributes

**Footer container:**
```html
<div role="navigation" aria-label="Open tabs">
```

**Tab item:**
```html
<button role="tab" aria-selected="true|false" aria-label="Tab name, type tab">
```

**Scroll buttons:**
```html
<button aria-label="Scroll tabs left" disabled>
```

**Groups:**
```html
<div role="group" aria-label="Group name, contains N tabs">
<button aria-expanded="true|false" aria-label="Group name group — collapse/expand">
```

---

## Best Practices

### Do

* Use clear, concise tab names that identify the page content at a glance
* Keep close buttons always visible on standard tabs — reduce friction for common actions
* Group related tabs together for better organisation and faster navigation
* Lock tabs that should remain open during the session
* Implement a maximum tab limit (15–20 recommended)
* Use distinct group colours to differentiate groups visually (limit 5–7 active groups)
* Persist tab state across sessions when appropriate for the workflow
* Provide confirmation before closing all tabs or groups

### Don't

* Allow unlimited tabs to open
* Use similar names for different tabs
* Use group colours to convey semantic meaning (error, urgency, status)
* Make critical actions available only through contextual menus
* Create groups automatically without user control
* Allow closing locked tabs without unlocking first

---

## Implementation Notes

### State Management

The Footer is **fully controlled** — the consuming application owns all state:

* `tabs`: ordered array of open tabs
* `activeTabId`: ID of the currently visible page
* `groups`: group definitions (id, label, color)

Tab membership to a group is set via `groupId` on each `FooterTab`. The component derives render order and group membership from the `tabs` array order.

### Performance

* Implement a maximum tab limit (15–20 recommended)
* Consider virtual scrolling for applications that may exceed this limit
* Use `ResizeObserver` to keep scroll button state accurate on layout changes (already implemented)

### Responsive Behaviour

**Large screens (> 1400 px):** Full footer, more tabs visible, scroll buttons rarely needed

**Medium screens (1024–1400 px):** Standard behaviour, scroll buttons more frequently needed

**Small screens (< 1024 px):** Consider alternative patterns — full-screen tab switcher or simplified navigation

---

## Related Components

* **[Tabs](/guidelines/components/tabs.md)** — Shared CSS classes (`.tab-item`, `.tab`); alternative pattern for fewer items
* **[FlyoutMenu](/guidelines/components/flyout-menu.md)** — Used for all contextual menus
* **[Main Navigation](/guidelines/patterns/main-navigation.md)** — Works alongside Footer for a complete navigation shell
* **[Button](/guidelines/components/button.md)** — Used for scroll, close, and menu action buttons
