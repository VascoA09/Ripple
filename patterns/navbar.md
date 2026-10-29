---
name: Navbar
status: review
version: 0.3.0
last_updated: 2026-10-29
owner: Vasco Antunes
figma: TBD
storybook: TBD
components: [Button, Drawer, Badge, Counter, Avatar, FlyoutMenu, Tooltip]
tags: [navigation, layout]
---

# Navbar — Ripple Design System

## Purpose

The Navbar is the persistent 72 px vertical navigation column of a Ripple application. It identifies the product and environment, gives access to global and contextual destinations, and exposes the user menu. Navbar buttons either navigate to a page or open a drawer; the pattern owns the drawer wiring so consumers do not rebuild it.

**Why a pattern, not a component.** Up to 0.2.0, Ripple split this shell into a Navbar component and a Main Navigation pattern. Drawer wiring and single selection are stateful, so they belong in the pattern tier, and one name removes the "Navbar or Main Navigation?" choice. The gain is a simpler model and fewer specs, not less code. Source: `Research/Navigation/brief.md` (Verdict) and `decisions.md` (2026-10-28, 2026-10-29).

---

## When to use

- The application has distinct top-level areas users switch between often
- Product identity and environment must be visible on every page
- Global utilities (search, notifications, hub, client switch) must be reachable from anywhere
- Contextual destinations change with the active module

Always place the Navbar through a layout: [Micro Navigation](../layouts/micro-navigation.md) when users keep several pages open in a Footer, [Standard Navigation](../layouts/standard-navigation.md) when they work one page at a time.

## When not to use

- In-page section switching: use [Tabs](../components/tabs.md)
- Temporary overlays unrelated to app navigation: use [Drawer](../components/drawer.md) or [Flyout Menu](../components/flyout-menu.md)
- Mobile (below 768 px): the 72 px column does not fit; a mobile navigation pattern is not yet defined in Ripple
- Extension Kit: its labelled collapsible sidebar is product-specific and lives in the [Extension Kit Navigation](../templates/extension-kit-navigation.md) App Template

---

## Composition

| Part | Ripple component | Role in the pattern | Required |
|------|------------------|---------------------|----------|
| Nav button | Button (`ghost`, `neutral`, `large`, icon-only) | Navigates or opens a drawer | Yes |
| Drawer | [Drawer](../components/drawer.md) (`side="left"`) | Overlay or persistent panel opened by a nav button | No |
| Tenant badge | [Badge](../components/badge.md) (`outline`, `small`) | Environment indicator | No |
| Counter | [Counter](../components/counter.md) (`fill`, `small`, `negative`) | Actionable count on a nav button | No |
| User menu | [Avatar](../components/avatar.md) + [Flyout Menu](../components/flyout-menu.md) | Profile, help, log out | Yes |
| Overflow menu | Flyout Menu | Contextual items beyond 5 | When > 5 contextual items |
| Tooltip | [Tooltip](../components/tooltip.md) | Label and count of each nav button | Yes |

Drawer is a dependency, not a hard requirement: a Navbar with no `drawers` renders the plain column. Drawer is not in production yet (`ripple-production-alignment-plan.md`), so production keeps today's Navbar until Drawer ships (see Release sequencing).

---

## Anatomy

```
Navbar output: siblings inside the layout's flex row (.main-navigation)
┌──────────────┬──────────────────────┐
│  Logo        │                      │
│  Product name│  Persistent drawer   │
│  Tenant badge│  (only when open,    │
├──────────────┤   pushes content)    │
│  Global nav  │                      │
│  (max 5)     │                      │
├──────────────┤                      │
│  Contextual  │                      │
│  (5 + more)  │                      │
├──────────────┤                      │
│   (spacer)   │                      │
├──────────────┤                      │
│  User menu   │                      │
└──────────────┴──────────────────────┘
   72 px          320 / 480 / 640 px

Overlay drawers render in a portal, flush with the Navbar's right edge (left: 72 px).
```

### 1. Logo and product name

- The Unit4 symbol for every product, in `.navbar__logo-icon`, with the product name below it in `--font-size-80`, `--font-weight-semibold`, `--text-loud`. Products are told apart by the name, not by the symbol. Why: one brand mark keeps every Unit4 product recognisable as the same suite. The logo is not configurable
- Non-interactive (`<div>`). It is identity, not navigation; a click target here would compete with Home
- See Content rules for the product name limit and the accessible full name

### 2. Tenant badge

- Badge `outline`, `small`, default color `notice`. Optional; omit in production environments
- Truncated labels show in full in a Tooltip on hover and keyboard focus

### 3. Global navigation

- Up to **5** buttons, 4 px gap (`--spacing-25`)
- Beyond 5: extra items are not rendered and a development warning is logged (see Behaviour). Why: silent truncation hid configuration errors in 0.2.0

### 4. Contextual navigation

- Module destinations, separated by a 1 px divider (`--border-neutral`), toggled by `showContextualDivider`
- Up to 5 visible; with more, the 5th slot becomes the overflow button (`MoreHorizontal`) opening a Flyout Menu

### 5. User menu

- Avatar (`l`) trigger at the bottom, opens a Flyout Menu to the right (`side="right"`, `align="end"`)
- Header shows name, role and product area; must contain at least **Log out**

### 6. Drawers

- One drawer open at a time. Overlay drawers (default) sit over the content with a backdrop that never covers the Navbar. Persistent drawers render in-flow inside the Navbar root and push the content area
- Sizes come from Drawer: `small` 320 px, `medium` 480 px (default), `large` 640 px. The 280 / 320 / 400 px values in Main Navigation 0.2.0 were wrong and are retired

---

## Variants

| Variant | Description | Use when |
|---------|-------------|----------|
| Plain | No `drawers`; every button navigates | The product has no global utilities that need a panel |
| With overlay drawers | Some buttons open overlay drawers | Global utilities: search, notifications, hub, client switch |
| With a persistent drawer | One drawer is `persistent` and pushes content | A navigation tree must stay visible while working. Standard Navigation only; Micro Navigation does not allow it |

---

## State model

| State | Owned by | Changes when | Visible as |
|-------|----------|--------------|------------|
| Open drawer (`openDrawerId`) | Pattern (uncontrolled) or consumer (controlled) | A drawer button, close button, backdrop or Escape is used | Drawer button dark selected fill, `aria-pressed="true"` |
| Current page | Consumer (`current` on a nav item) | The consumer's router changes page | Edge indicator on the button, `aria-current="page"` |
| Counter values | Consumer | Data changes | Counter on the button; count in `aria-label` |
| Overflow order | Consumer | Consumer may promote a chosen overflow item | Item order |
| User menu open | Pattern | Avatar trigger, Escape, outside click | Flyout Menu |

**Drawer open and current page are separate states (new in 0.3.0).** In 0.2.0 both used `selected`, and Main Navigation hid the current page whenever a drawer opened, so the Navbar stopped showing where the user was. The current page now stays marked while a drawer is open. Source: `Research/Navigation/navigation-exploration.html`, section 03; `decisions.md` 2026-10-29.

Page actions, routing and drawer contents belong to the consumer.

---

## Nav button states

| State | Background | Icon color | Extra | Notes |
|-------|-----------|-----------|-------|-------|
| Default | transparent | `--text` | | |
| Hover | `--background-neutral-softest` | `--text` | | |
| Pressed (mouse down) | `--background-neutral-soft` | `--text` | | |
| Focus | transparent | `--text` | 2 px `--border-focus` ring, 2 px offset | |
| Drawer open | `--background-neutral` | `--text-loud-inverse` | `aria-pressed="true"` | Drawer buttons only |
| Current page | transparent | `--text` | 3 px edge indicator, `--border-primary`, on the Navbar's left edge, inset by `--spacing-75` top and bottom | Page buttons only. Combines with hover and focus |
| Disabled | transparent | `--text-disabled` | opacity 0.4, `disabled` attribute | Out of tab order |

**Why an edge indicator for the current page.** A soft background reuses `--background-neutral-soft`, the pressed colour, and reads as a pressed or hovered button. The edge indicator collides with no existing state and stays visible next to an open drawer's dark fill. Source: `navigation-exploration.html`, section 03 (Today, Soft background, Edge indicator).

---

## Behaviour

| Aspect | Rule |
|--------|------|
| Single selection | Opening a drawer closes any other. Clicking the open drawer's button closes it. Clicking a page button closes any open drawer. Why: two open panels would stack over the content |
| Keyboard | Tab moves through global buttons, contextual buttons, overflow and avatar (the logo is not a stop). Enter / Space activates. Escape closes the open drawer or menu |
| Focus management | Drawer open: focus moves to the first focusable element in the drawer (close button or search input). Drawer close: focus returns to the button that opened it. Overlay drawers trap focus; persistent drawers do not |
| Overflow warning | More than 5 global items: in development builds, log a console warning naming the dropped items; extras are not rendered. No warning in production builds |
| Motion | Drawer enter and exit use Drawer motion (250 ms). With `prefers-reduced-motion: reduce`, drawers appear without transition |
| Responsive | Desktop and tablet only. Below 1024 px, prefer overlay drawers over persistent ones so content keeps its width |
| Persistence | `openDrawerId` is not persisted by the pattern. Consumers that want a persistent drawer to stay open across sessions control it via `openDrawerId` + `onDrawerChange` |

---

## Content rules

**Product name.** `productName` is the label under the logo (for example "ERPx", "Coda", "CM"). Its maximum width is 100% of the column's content width (72 px minus 2 × `--spacing-50`); anything longer truncates with an ellipsis. There is no character limit. Prefer a name or abbreviation that fits without truncating. Why: the logo area is not interactive, so sighted users cannot reveal a truncated name; `productFullName` only helps screen reader users.

**Accessible full name.** When `productName` is abbreviated or truncates, pass `productFullName` (for example "Unit4 Configuration Manager"). It is rendered as visually hidden text after the visible label, and the visible label is `aria-hidden`. Why: screen readers would otherwise announce "C M". Source: `navigation-exploration.html`, section 05.

**Nav labels.** Every item has a `label`: it is the Tooltip text and the `aria-label`. One or two words, sentence case. Counts are appended by the pattern ("Notifications (4)").

**Counters.** Only for actionable items (unread, awaiting decision). Always `negative`; capped at 99+ by Counter.

**Ordering.** Global items in a fixed order per product (an App Template may fix it, for example ERPx: Search, Global Hub, Notifications, Client). Contextual items in module order; the consumer may promote a chosen overflow item into view.

---

## Design Tokens

| Element | Property | Token |
|---------|----------|-------|
| Navbar | width | `navbar.width` (proposed) → `--size-450` (72 px) |
| Navbar | background | `--background-surface` |
| Navbar | right border | `--border-neutral` |
| Navbar | padding | `--spacing-100` top, `--spacing-50` sides and bottom |
| Nav list | gap | `--spacing-25` |
| Divider | color | `--border-neutral` |
| Logo icon | fill | Unit4 brand mark colours, fixed. Not tokenised: a brand asset is never recoloured or themed |
| Product name | font | `--font-size-80`, `--font-weight-semibold`, `--text-loud` |
| Nav button | hover / pressed / drawer-open background | `--background-neutral-softest` / `--background-neutral-soft` / `--background-neutral` |
| Nav button | drawer-open icon | `--text-loud-inverse` |
| Nav button | radius | `--border-radius-150` |
| Current page indicator | color | `--border-primary` |
| Current page indicator | width | `navbar.indicator.width` (proposed, 3 px; no token today) |
| Current page indicator | inset | `--spacing-75` |
| Focus ring | color | `--border-focus` |
| Overlay drawer and backdrop | left offset | `navbar.width` |

Z-index: Navbar 500, drawer panel 401, backdrop 400. Z-index tokens do not exist yet (open question).

---

## Accessibility

- **Landmarks and roles**: root `<nav aria-label="Application navigation">`. Global and contextual lists are `<ul role="list">` with `aria-label` "Global navigation" and "Contextual navigation". Overlay drawers `role="dialog"` with `aria-modal="true"`; persistent drawers `role="complementary"`. Both labelled by the drawer title
- **Keyboard**: see Behaviour. All buttons reachable; Escape closes the open drawer or menu and returns focus
- **Screen reader**:
  - Drawer buttons: `aria-pressed` true or false, count in `aria-label` ("Notifications (4)")
  - Page buttons: `<button>` with `aria-current="page"` on the current one, no `aria-pressed`. Why: 0.2.0 announced the current page as a pressed toggle. Page items stay buttons, not links, so every nav item shares one element and focus style
  - Product: visible label `aria-hidden`, `productFullName` read instead
  - Counters `aria-hidden`; the count lives in the label
  - Overflow and avatar triggers: `aria-haspopup="menu"`, `aria-expanded`
- **Focus**: 2 px `--border-focus` ring, 2 px offset. Overlay drawers start at 72 px, so the Navbar and its focused button are never covered (2.4.11)
- **Targets**: nav buttons 48 × 48 px, avatar 40 px inside a 48 px row; both meet the 44 px internal standard except the avatar visual, whose button area must be at least 44 × 44 px
- **Contrast**: current page indicator `--border-primary` must reach 3:1 against `--background-surface` in light and dark themes (to verify)
- **Dragging**: none

---

## API (proposal)

```ts
interface NavItem {
  id: string
  icon: ReactNode
  label: string             // Tooltip + aria-label
  count?: number            // > 0 shows Counter, appended to aria-label
  drawerId?: string         // Opens the matching drawer; pressed state managed by the pattern
  current?: boolean         // Current page marker; page items only (ignored when drawerId is set)
  /** @deprecated 0.3.0 Use `current` for page items. Drawer state is managed. */
  selected?: boolean
  onClick?: () => void
  disabled?: boolean
}

interface NavbarDrawer {
  id: string                // Matches NavItem.drawerId
  content: ReactNode        // DrawerHeader, DrawerContent, DrawerSection...
  size?: 'small' | 'medium' | 'large'   // Default 'medium'
  persistent?: boolean      // In-flow panel; Standard Navigation only
}
```

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `productName` | `string` | | Yes | Short label under the logo |
| `productFullName` | `string` | | When `productName` is abbreviated or truncates | Visually hidden full product name |
| `tenantLabel` | `string` | | No | Environment badge label |
| `tenantColor` | `BadgeColor` | `'notice'` | No | Badge color |
| `globalNavItems` | `NavItem[]` | `[]` | No | Max 5; dev warning beyond |
| `contextualNavItems` | `NavItem[]` | `[]` | No | 5 visible + overflow |
| `showContextualDivider` | `boolean` | `true` | No | Divider between groups |
| `drawers` | `NavbarDrawer[]` | `[]` | No | Drawer definitions; omit for the plain variant |
| `openDrawerId` | `string \| null` | | No | Controlled open drawer |
| `onDrawerChange` | `(id: string \| null) => void` | | No | Called on open and close |
| `userName` | `string` | `'User'` | Yes | Avatar initials and menu header |
| `userRole` | `string` | | No | Menu header |
| `userProductArea` | `string` | | No | Menu header |
| `userAvatarSrc` | `string` | | No | Avatar image |
| `userMenuItems` | `UserMenuItem[]` | `[]` | Yes | Must include Log out |
| `className` | `string` | | No | Root class |

**What changed from Main Navigation.** `children` and `belowScroll` are gone: the Navbar root renders the column, the persistent drawer and the portalled overlay drawers, and the layout places it next to the content area. Why: keeps layouts as the only owners of page structure and stops the Navbar acting as a page shell. This split is a spec decision taken while writing; it needs confirmation in code review.

```tsx
<Navbar
  productName="CM"
  productFullName="Unit4 Configuration Manager"
  globalNavItems={[
    { id: 'search', label: 'Search', icon: <Search size={20} />, drawerId: 'search' },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />, drawerId: 'notifications', count: 3 },
  ]}
  contextualNavItems={[
    { id: 'environments', label: 'Environments', icon: <Server size={20} />, current: page === 'environments', onClick: () => go('environments') },
    { id: 'packages', label: 'Packages', icon: <Package size={20} />, current: page === 'packages', onClick: () => go('packages') },
  ]}
  drawers={[
    { id: 'search', size: 'small', content: <SearchDrawer /> },
    { id: 'notifications', size: 'small', content: <NotificationsDrawer /> },
  ]}
  userName="Sam Rivera"
  userMenuItems={userMenuItems}
/>
```

---

## Migration from Main Navigation and Navbar 0.2.0

**Breaking.** `MainNavigation` is deprecated and kept for one release as an alias that composes `Navbar` with the old content area (`children`, `belowScroll`). It is removed in Navbar 0.4.0.

| Before (0.2.0) | After (0.3.0) |
|----------------|---------------|
| `import { MainNavigation } from '@ripple/ui'` | `import { Navbar } from '@ripple/ui'`, placed by a layout |
| `MainNavItem` with `drawerId` | `NavItem` with `drawerId` |
| `MainNavDrawerDef` | `NavbarDrawer` |
| `selected` on a page item | `current` on a page item |
| `logo` prop | Removed; Unit4 symbol for every product |
| `<MainNavigation>{page}</MainNavigation>` | `<StandardNavigation nav={…}>{page}</StandardNavigation>` |
| `belowScroll={<Footer …/>}` | `<MicroNavigation nav={…} footer={…}>` |
| `components/navbar.md`, `patterns/main-navigation.md` | `patterns/navbar.md` |

Steps:

1. Replace direct `MainNavigation` use with Micro Navigation or Standard Navigation.
2. Rename types (`MainNavItem` → `NavItem`, `MainNavDrawerDef` → `NavbarDrawer`).
3. Move `selected` on page items to `current`; remove `selected` from drawer items.
4. If `productName` is abbreviated, add `productFullName`. Remove `logo`: the Unit4 symbol is fixed.
5. Check the console for the overflow warning and trim global items to 5.

---

## Release sequencing

- **Now (MVP)**: this spec, Micro Navigation 0.2.0 and Standard Navigation 0.2.0 in the Ripple repo
- **Gate 1, Drawer rail released** (Header pane work): retire SideNav; rebuild Extension Kit Navigation on a persistent Drawer with rail
- **Gate 2, Drawer in production**: release the Navbar pattern to production. Until then production keeps today's Navbar component (`resources/production-storybook.md`)
- **Storybook placement**: production Storybook keeps Navbar under Components, even though the repo classifies it as a pattern. Why: moving it would break existing doc links for consumers; the tier difference is noted here instead
- **Refinement**: load Drawer only when `drawers` is passed

---

## Related

- [Micro Navigation](../layouts/micro-navigation.md): Navbar + required Footer; global buttons open drawers
- [Standard Navigation](../layouts/standard-navigation.md): Navbar without Footer; overlay and persistent drawers
- [ERPx MicroNavigation](../templates/erp-micro-navigation.md): fixed ERPx global items
- [Drawer](../components/drawer.md): panel opened by nav buttons
- [Main Navigation](main-navigation.md): deprecated, replaced by this pattern
- [Tabs](../components/tabs.md): in-page section switching, not app navigation

---

## Open questions

1. Token gaps: `navbar.width` (→ `--size-450`), `navbar.indicator.width` (3 px, no primitive identified), `drawer.rail.width` (→ `--size-350`, for the final concept), and z-index tokens. (Ripple tokens owner)
2. Does `--border-primary` reach 3:1 against `--background-surface` in dark theme for the indicator? (Accessibility review)
3. Is splitting the content area out of the Navbar (no `children` / `belowScroll`) acceptable for the alias period? (Ripple engineering)

Resolved on 2026-10-29 (Vasco): product name max width is 100% of the column, no character limit; the logo is the Unit4 symbol for every product; page items stay buttons with `aria-current="page"`; production Storybook keeps Navbar under Components; Micro Navigation is the default layout.

Evidence note: all decisions come from expert review in `Research/Navigation/brief.md`; there is no user evidence. Validate with 2 or 3 product teams wiring a drawer from the spec (provisional, below N=5).

---

## Changelog

| Version | Date | Change |
|---------|------|--------|
| 0.3.0 | 2026-10-29 | Implemented in `src/patterns/Navbar/`; status moved to review. |
| 0.3.0 | 2026-10-29 | **Breaking.** Navbar moves from component to pattern and absorbs Main Navigation (`drawers`, `drawerId`, `openDrawerId`, `onDrawerChange`); adds `current` (edge indicator, `aria-current="page"`) separate from drawer open, `productFullName` and a dev warning above 5 global items; removes `logo` (Unit4 symbol for every product); deprecates `selected`; drawer sizes aligned to Drawer (320 / 480 / 640). Source: `Research/Navigation` exploration. |
| 0.2.0 | 2026-03-31 | Component spec (`components/navbar.md`): non-interactive logo, tenant badge, contextual overflow, user menu. |
| 0.1.0 | 2026-03-19 | Initial draft. |
