---
name: Page Header
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [layout]
---

# Page Header — Ripple Design System

## Overview

The **Page Header** is a structural component that sits at the top of a page or view. It provides users with a clear understanding of where they are within the application and surfaces the primary actions and navigation controls relevant to that context. It composes the page title, optional supporting elements (description, breadcrumb, date, badges, last-update info), the Discuss + AVA secondary toolbar, and an adaptive main actions toolbar.

---

## When to use

Use the page header on every page or major view within an application to establish consistent orientation and provide a predictable location for page-level actions. It is essential for any layout that needs:

* A clearly labelled entry point
* Contextual navigation aids (breadcrumbs)
* Actions tied to the current view (create, edit, export)
* Status indicators or metadata about the page subject
* Temporal context through date display

---

## When not to use

* **Inside modals, side panels, or other overlay components** — These have their own header conventions suited to their context
* **As a global application navigation bar** — The page header is scoped to the current page, not the overall application shell
* **When duplicating page-level actions** — Avoid placing the same actions in both the page header and the page body
* **In extremely space-constrained contexts** — Consider the compact variant or alternative layout patterns

---

## Anatomy

The page header component consists of the following structural elements rendered in DOM order:

### 1. Breadcrumb (optional)
A navigation trail shown above the page title that communicates the current page's position within the application hierarchy.

* Use when the page is nested within a multi-level structure (3+ levels)
* Keep breadcrumb trails to a maximum of 3–4 levels
* Labels should match the page titles of parent views
* On mobile: collapses to a single ← back link pointing to the direct parent

### 2. Date (optional)
A date label displayed above the page title to provide temporal context.

* Format: Day, Month DD (e.g., "Monday, March 02")
* Font size: `var(--font-size-120)` — typography-heading-s
* Font weight: `var(--font-weight-semibold)`
* Color: `var(--text-soft)`
* Use for time-sensitive content like daily reports, meeting notes, or event pages

### 3. Page Title (required)
The primary heading that identifies the current page or view. Always rendered as an `<h1>` element.

* Should be concise and descriptive
* Use noun-based titles for entity pages ("Invoices", "Project settings")
* Use task-based titles where appropriate ("Create invoice")
* Default: `var(--font-size-160)`, `var(--font-weight-bold)`, `var(--text-loud)`
* Compact variant: `var(--font-size-140)`, same weight

### 4. Description (optional)
Short supporting text displayed below the title.

* Font size: `var(--font-size-80)` — typography-caption
* Font weight: `var(--font-weight-regular)`
* Color: `var(--text)`
* Keep to one or two short sentences
* Omit if the title is already self-explanatory

### 5. Tags / Badges (optional)
Status indicators displayed inline alongside the title using the Ripple Badge component.

* Rendered in a flex row directly next to the title heading
* Use for status (Active, Draft, Archived), priority (High, Medium, Low), or categorisation
* Tags flow horizontally with `var(--spacing-50)` (8 px) gap between them

### 6. Main Actions Toolbar (optional)
The adaptive toolbar containing primary, secondary, and tertiary page-level actions. Managed via the `mainActions` prop as an array of `ToolbarAction` objects. See **Adaptive Main Actions Toolbar** below for the full specification.

### 7. Secondary Toolbar (optional)
The dedicated Discuss + AVA toolbar, passed via the `secondaryToolbar` prop.

* Contains a **Discuss** button (outline, primary, medium, no icon) and an **AVA** icon button
* Always visible on desktop — never shrinks or collapses
* Positioned to the left of the main actions, separated by a 1 px vertical divider
* On mobile: both controls collapse into the ⋯ overflow menu
* This is the only secondary toolbar pattern supported

### 8. Last Update Info (optional)
Informational text showing when content was last modified.

* Font size: `var(--font-size-60)` — typography-detail
* Font weight: `var(--font-weight-regular)`
* Color: `var(--text-soft)`
* Positioned right-aligned on the same row as the date (or on its own row if no date)
* Common formats: "Last updated X hours ago" / "Last update: X minutes ago"

---

## Adaptive Main Actions Toolbar

Passing actions via `mainActions` unlocks automatic variant switching. A **ResizeObserver** watches the outer flex row and selects the best variant based on available width and action count. All ordering and overflow is handled automatically.

### How available width is computed

The component avoids measuring the button container directly (which would create a circular reference). Instead it:

1. Measures the width of the full main row (`mainRowRef`)
2. Subtracts the **natural content width** of the title row using `scrollWidth` (`titleRowRef`) — `scrollWidth` returns the true content width even when the element is flex-squished
3. Subtracts the row gap (`var(--spacing-150)` = 24 px)
4. Subtracts the secondary toolbar width + divider overhead (secondary + 17 px: 8 px gap + 1 px divider + 8 px gap) when a secondary toolbar is present

This approach is free of circular references and always converges to the correct variant on the first layout pass.

For the **split layout** (`truncateTitle = true`) the actions column is fixed at 50 % by CSS, so `actionsContainerRef` is measured directly instead of `mainRowRef`.

### Variant thresholds

| Variant | Condition | Visible buttons |
|---------|-----------|-----------------|
| `full` | Available width ≥ `min(count, 5) × 120 px + gaps` | All actions with labels (extras overflow) |
| `compact` | Available width ≥ `min(count, 3) × 105 px + gaps` | Max 3 actions with labels (others overflow) |
| `minimal` | Available width < compact threshold | Primary action only — all others overflow |

* Single-action toolbars always render as `full` regardless of width
* The initial state is always `minimal` — `useLayoutEffect` fires synchronously before the first paint and corrects the variant with zero flicker

### Action ordering

`ButtonsToolbar` renders actions left-to-right in the order: tertiary (ghost) → secondary (outline) → primary (fill). Consumers provide actions in any order via the `mainActions` array; the toolbar sorts automatically.

### Overflow (> 5 visible actions)

When `count > 5` in `full` variant, the earliest tertiary actions move into a ⋮ overflow dropdown (Ripple `FlyoutMenu`, portal-rendered so it is never clipped by ancestor `overflow: hidden`).

---

## CSS Layout Architecture

### Flex layout — main row

```
.rpl-page-header__main-row   { display: flex; gap: var(--spacing-150); }
  .rpl-page-header__title-area { flex: 1 1 auto; min-width: 0; }
  .rpl-page-header__actions    { flex-shrink: 0; flex-grow: 0; }
    .rpl-page-header__secondary-toolbar { flex-shrink: 0; }
    .rpl-page-header__toolbar-divider   { flex-shrink: 0; }
    .rpl-page-header__main-actions      { flex-shrink: 0; flex-grow: 0; }
```

**Key decisions:**

* `.rpl-page-header__actions` uses `flex-shrink: 0; flex-grow: 0` — the actions zone always renders at its natural content size. It never compresses. The ResizeObserver handles width reduction by switching to a smaller variant.
* `.rpl-page-header__title-area` uses `flex: 1 1 auto` — flex-basis `auto` means it starts at its natural content width, then grows to fill remaining space. This prevents flex-basis `0` from starving the title of space.
* `.rpl-page-header__main-row` has **no** `overflow: hidden` — keeping it visible ensures `scrollWidth` on the title row is accurate and that `FlyoutMenu` portals are never clipped.
* `.rpl-page-header__main-actions` has **no** `overflow: hidden` — previously used to clip buttons before ResizeObserver fired, but this masked the circular reference bug. With the correct measurement strategy it is no longer needed.

### Split layout (`truncateTitle = true`)

```
.rpl-page-header__main-row--split .rpl-page-header__title-area {
  flex: 0 0 calc(50% - var(--spacing-75));
}
.rpl-page-header__main-row--split .rpl-page-header__actions {
  flex: 0 0 calc(50% - var(--spacing-75));
  justify-content: flex-end;
}
```

Both halves are hard 50 % CSS columns (less the row gap). The h1 inside `title-area` renders with `white-space: nowrap; overflow: hidden; text-overflow: ellipsis` and is wrapped in a Ripple `Tooltip` that shows the full title on hover.

---

## Responsive Architecture

The component uses **CSS Container Queries** (`container-type: inline-size`) so it responds to its own rendered width — not the viewport. This means placing the component inside a 375 px frame (as in the documentation) correctly triggers mobile layout without any viewport change.

### Breakpoints

| Container width | Layout | Notes |
|----------------|--------|-------|
| > 1023 px | Desktop — horizontal flex | Title + actions side by side |
| 768 – 1023 px (tablet) | Desktop layout | Split (`truncateTitle`) stacks vertically; padding reduces to `var(--spacing-150)` |
| ≤ 767 px | Mobile — stacked | Dual-render DOM; desktop layout hidden, mobile layout shown |

### Dual-render DOM architecture

The component renders two separate DOM trees simultaneously:

```
<header>
  <div class="rpl-page-header__desktop-layout"> ← always in DOM; hidden at ≤767 px </div>
  <div class="rpl-page-header__mobile-layout">  ← always in DOM; hidden at  >767 px </div>
</header>
```

CSS container queries toggle `display: none / flex` between them. This avoids JavaScript-driven layout switching and guarantees instant, paint-free transitions at the container breakpoint.

### Mobile layout — stacked order

On containers ≤ 767 px, content stacks vertically in this fixed order:

1. **Breadcrumb back link** — collapses to a single ← arrow + parent label
2. **Date** — if present
3. **Title** — always wraps; never truncates on mobile
4. **Description** — if present
5. **Tags / Badges** — flex-wrapped row
6. **Last update info** — if present
7. **Action buttons** — primary fills full width; all other actions + Discuss/AVA collapse into ⋯ overflow menu

### Mobile actions bar

```
[⋯ FlyoutMenu trigger]  [Primary action — flex: 1]
```

* The ⋯ overflow button is omitted when only one (primary) action exists — the primary button fills the full width
* The ⋯ menu contains all non-primary actions followed by a divider and the secondary toolbar controls
* FlyoutMenu is portal-rendered so it is never clipped by the `overflow: hidden` on the mobile frame wrapper

---

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `var(--spacing-200)` | 32 px | Horizontal padding (desktop) |
| `var(--spacing-150)` | 24 px | Vertical padding (all variants) · Row gap between title-area and actions |
| `var(--spacing-100)` | 16 px | Gap between elements in the title column |
| `var(--spacing-50)` | 8 px | Gap between actions · Gap between chips/badges |
| `var(--spacing-25)` | 4 px | Internal element gaps |

Tablet padding: `var(--spacing-150)` horizontal. Mobile padding: `var(--spacing-100)` horizontal.

---

## Divider

The 1 px vertical divider between the secondary toolbar and the main actions:

* Height: `var(--size-250)` (40 px)
* Color: `var(--border-neutral)`
* Rendered only when both `secondaryToolbar` and at least one main action are present
* The `gap: var(--spacing-50)` on the actions flex container provides 8 px of clear space on each side automatically — no extra margin markup

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Page title rendered as `<h1>`. **Required.** |
| `description` | `string` | — | Supporting text below the title |
| `date` | `string` | — | Date above the title (format: Day, Month DD) |
| `showBreadcrumb` | `boolean` | `false` | Enables the breadcrumb trail |
| `breadcrumbItems` | `BreadcrumbItem[]` | `[]` | Breadcrumb links (`label`, `href`, `current`) |
| `tags` | `ReactNode[]` | `[]` | Badge/chip nodes rendered inline with the title |
| `mainActions` | `ToolbarAction[]` | — | Structured toolbar actions — enables adaptive variant switching |
| `secondaryToolbar` | `ReactNode` | — | Discuss + AVA toolbar; never shrinks; separated by divider |
| `lastUpdateInfo` | `string` | — | Last-update text shown right-aligned above the main row |
| `sticky` | `boolean` | `false` | Fixes the header at the top of the viewport on scroll |
| `compact` | `boolean` | `false` | Reduces title font size from `var(--font-size-160)` to `var(--font-size-140)` |
| `truncateTitle` | `boolean` | `false` | Activates 50/50 split layout; title truncates with ellipsis + tooltip |
| `mobileOverflowAction` | `ReactNode` | — | Custom element to replace the auto-generated ⋯ overflow button on mobile |
| `className` | `string` | — | Additional CSS class on the `<header>` element |
| `style` | `CSSProperties` | — | Additional inline styles on the `<header>` element |
| `onBreadcrumbNavigate` | `(href: string) => void` | — | Callback for programmatic breadcrumb navigation |

### ToolbarAction shape

```ts
interface ToolbarAction {
  id: string;                         // Unique key
  label: string;                      // Button label text
  type: 'primary' | 'secondary' | 'tertiary'; // Maps to fill / outline / ghost variant
  icon?: ReactNode;                   // Optional leading icon
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  tooltip?: string;                   // Shown when button renders icon-only (compact/minimal)
  size?: 'small' | 'medium' | 'large'; // Defaults to 'medium'
}
```

---

## Usage Examples

### Basic

```tsx
<PageHeader
  title="Projects"
  mainActions={[
    { id: 'create', label: 'Create project', type: 'primary', icon: <Plus size={16} />, onClick: handleCreate },
  ]}
/>
```

### With breadcrumb, date, tags, and last update

```tsx
<PageHeader
  showBreadcrumb
  breadcrumbItems={[
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Website Redesign', current: true },
  ]}
  date="Monday, March 02"
  title="Website Redesign"
  description="Design and development project for the new company website"
  tags={[
    <Badge variant="fill" color="positive" size="medium">Active</Badge>,
    <Badge variant="outline" color="notice" size="medium">High Priority</Badge>,
  ]}
  lastUpdateInfo="Last update: 2 hours ago"
  mainActions={[
    { id: 'share', label: 'Share', type: 'secondary', icon: <Share2 size={16} />, onClick: handleShare },
    { id: 'edit', label: 'Edit project', type: 'primary', icon: <Pencil size={16} />, onClick: handleEdit },
  ]}
  onBreadcrumbNavigate={(href) => navigate(href)}
/>
```

### With secondary toolbar (Discuss + AVA) and adaptive main actions

```tsx
<PageHeader
  title="Product Design Specification"
  tags={[
    <Badge variant="outline" color="primary" size="medium">v3.2.1</Badge>,
    <Badge variant="fill" color="positive" size="medium">Published</Badge>,
  ]}
  secondaryToolbar={
    <div style={{ display: 'flex', gap: 'var(--spacing-50)', alignItems: 'center' }}>
      <Button variant="outline" color="primary" size="medium" onClick={handleDiscuss}>
        Discuss
      </Button>
      <AvaButton size="medium" aria-label="Open AVA" onClick={handleAva} />
    </div>
  }
  mainActions={[
    { id: 'action',   label: 'Action',        type: 'tertiary',  onClick: handleAction },
    { id: 'download', label: 'Download',       type: 'secondary', icon: <Download size={16} />, onClick: handleDownload },
    { id: 'edit',     label: 'Edit document',  type: 'primary',   icon: <Pencil size={16} />,   onClick: handleEdit },
  ]}
/>
```

### With title truncation (50/50 split)

```tsx
<PageHeader
  title="Enterprise Digital Transformation Initiative for Global Operations Q4 2025-2026"
  description="A comprehensive multi-year program to modernize technology infrastructure"
  truncateTitle
  lastUpdateInfo="Last update: 2 minutes ago"
  tags={[
    <Badge variant="fill" color="notice" size="medium">In Progress</Badge>,
    <Badge variant="outline" color="primary" size="medium">Phase 2</Badge>,
  ]}
  secondaryToolbar={<DiscussAvaToolbar />}
  mainActions={[
    { id: 'export', label: 'Export',       type: 'tertiary',  icon: <Download size={16} />, onClick: handleExport },
    { id: 'share',  label: 'Share',        type: 'secondary', icon: <Share2 size={16} />,   onClick: handleShare },
    { id: 'edit',   label: 'Edit project', type: 'primary',   icon: <Pencil size={16} />,   onClick: handleEdit },
  ]}
/>
```

### Compact variant

```tsx
<PageHeader
  title="Settings"
  description="Configure your account preferences"
  compact
  mainActions={[
    { id: 'save', label: 'Save changes', type: 'primary', size: 'small', onClick: handleSave },
  ]}
/>
```

---

## Accessibility

* **Semantic heading structure** — Title rendered as `<h1>` for correct screen reader hierarchy
* **Breadcrumb navigation** — Uses `<nav aria-label="Breadcrumb">` with an ordered list; current page marked `aria-current="page"`
* **Mobile back link** — Rendered as a real `<a>` element for keyboard and screen reader access
* **Action button labels** — All buttons have descriptive labels; provide `tooltip` on `ToolbarAction` for actions that may render icon-only in compact / minimal variants
* **Overflow menus** — Trigger buttons use `aria-haspopup="menu"` and `aria-expanded`; FlyoutMenu is keyboard navigable
* **Focus management** — When sticky, apply `scroll-margin-top` to page sections so focused elements are not obscured by the fixed header
* **Keyboard navigation** — All interactive elements are reachable by Tab and respond to Enter / Space

---

## Best Practices

### Do
* Use `mainActions` with `ToolbarAction` objects for all interactive headers — never mix `mainActions` with the legacy `primaryAction` / `secondaryActions` props on the same instance
* Let the adaptive toolbar handle overflow automatically — never add a manual ⋮ button alongside `mainActions`
* Use the **Discuss** button without an icon (text label only)
* Use clear, descriptive titles that immediately identify page purpose
* Use breadcrumbs for hierarchical navigation (3+ levels)
* Keep descriptions to one or two short sentences
* Maintain consistent page header structure across all pages in the application
* Use sticky positioning to keep actions accessible on long pages

### Don't
* Add icons to the Discuss button — it is a text-only outline button
* Place more than one primary action in the header
* Duplicate page-level actions in both the header and the page body
* Use page header inside modals, drawers, or overlay components
* Use `overflow: hidden` on the main row or main-actions container — this breaks `scrollWidth` measurement and clips FlyoutMenu portals
* Nest the page header inside a container that would prevent its ResizeObserver from firing correctly

---

## Design Tokens

### Typography
| Element | Size token | Weight token |
|---------|-----------|--------------|
| Title (default) | `var(--font-size-160)` | `var(--font-weight-bold)` |
| Title (compact) | `var(--font-size-140)` | `var(--font-weight-bold)` |
| Date | `var(--font-size-120)` | `var(--font-weight-semibold)` |
| Description | `var(--font-size-80)` | `var(--font-weight-regular)` |
| Last update | `var(--font-size-60)` | `var(--font-weight-regular)` |

### Colors
| Element | Token |
|---------|-------|
| Title | `var(--text-loud)` |
| Date | `var(--text-soft)` |
| Description | `var(--text)` |
| Last update | `var(--text-soft)` |
| Background | `var(--bg)` |
| Divider | `var(--border-neutral)` |

---

## Related Patterns

* **ButtonsToolbar** — Underlying component that renders the adaptive action toolbar
* **Breadcrumbs** — Hierarchical navigation trails
* **Badge** — Status indicators and metadata tags
* **FlyoutMenu** — Portal-rendered dropdown used for action overflow
* **Tooltip** — Used for truncated title on hover in the split layout
* **AvaButton** — AVA icon button in the secondary toolbar
