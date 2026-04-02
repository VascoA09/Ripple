---
name: ERPx MicroNavigation
type: app-template
status: draft
version: 0.1.0
last_updated: 2026-03-31
owner: Vasco Antunes
layout: micro-navigation
product: ERPx
figma: TBD
storybook: Templates/ERPx MicroNavigation
tags: [navigation, erpx, template]
---

# ERPx MicroNavigation

## Classification

**Type: App Template** — not a layout, not a pattern.

This template pre-configures the [Micro Navigation layout](../layouts/micro-navigation.md) with the standard ERPx global navigation items. The layout itself is generic; this template encodes ERPx product knowledge: which slots are populated, with what, and in what order.

---

## Description

ERPx applications using the multi-tab workspace shell start from this template. It provides the Micro Navigation layout with the four global Navbar actions pre-configured to ERPx conventions: Search, Global Hub, Notifications, and Client switcher.

Teams building ERPx screens should use this template as their starting point, then add product-specific Drawer sections and content.

---

## What This Template Pre-Configures

| Slot | Pre-configured value | Customisable? |
|------|----------------------|---------------|
| Navbar: Search | Global search action | No — required in ERPx |
| Navbar: Global Hub | ERPx main menu access | No — required in ERPx |
| Navbar: Notifications | Notification bell | No — required in ERPx |
| Navbar: Client | Client environment switcher | No — required in ERPx |
| Navbar: product name | Populated by consuming app | Yes |
| Drawer sections | Empty — populated by consuming app | Yes |
| Footer tabs | Empty — managed by consuming app | Yes |
| Page Header | Empty — populated per page | Yes |
| Body content | Empty — populated per page | Yes |

---

## Navbar Global Actions — ERPx Conventions

### Search
- Icon: `Search` (Lucide)
- Behaviour: opens global search (application-managed)
- `aria-label`: "Search"

### Global Hub
- Icon: `Grid3X3` or equivalent grid/hub icon
- Behaviour: opens the ERPx Global Hub drawer (application-managed)
- `aria-label`: "Global Hub"

### Notifications
- Icon: `Bell` (Lucide)
- Behaviour: opens notifications panel (application-managed)
- `aria-label`: "Notifications"
- May include a badge for unread count — application-managed

### Client
- Icon: `Building2` or equivalent (Lucide)
- Behaviour: opens client/environment switcher (application-managed)
- `aria-label`: "Switch client"
- Displays currently active client name where space permits

---

## Layout Structure

Identical to Micro Navigation. See [micro-navigation.md](../layouts/micro-navigation.md) for the full structure diagram.

```
┌─────────────────────────────────────────────────────┐
│  Navbar: [Product] [Search] [Hub] [Bell] [Client]   │
├──────────────┬──────────────────────────────────────┤
│              │  Page Header (sticky)                │
│  Drawer      ├──────────────────────────────────────┤
│  (app-       │                                      │
│  defined     │  Body (scrollable, app-defined)      │
│  sections)   │                                      │
├──────────────┴──────────────────────────────────────┤
│  Footer (tab bar, app-managed)                      │
└─────────────────────────────────────────────────────┘
```

---

## Usage

```tsx
import { MicroNavigation } from '@ripple/ui'
import { Navbar } from '@ripple/ui'
import { Search, Grid3X3, Bell, Building2 } from 'lucide-react'
import { IconButton } from '@ripple/ui'

// ERPx MicroNavigation starting point
function ERPxShell({ children }) {
  return (
    <MicroNavigation
      mainNav={
        <>
          <Navbar
            productName="Unit4 ERPx"
            actions={[
              <IconButton
                key="search"
                variant="ghost"
                color="neutral"
                icon={<Search size={20} />}
                aria-label="Search"
                onClick={openSearch}
              />,
              <IconButton
                key="hub"
                variant="ghost"
                color="neutral"
                icon={<Grid3X3 size={20} />}
                aria-label="Global Hub"
                onClick={openHub}
              />,
              <IconButton
                key="notifications"
                variant="ghost"
                color="neutral"
                icon={<Bell size={20} />}
                aria-label="Notifications"
                onClick={openNotifications}
              />,
              <IconButton
                key="client"
                variant="ghost"
                color="neutral"
                icon={<Building2 size={20} />}
                aria-label="Switch client"
                onClick={openClientSwitcher}
              />,
            ]}
          />
          {/* Add Drawer with product-specific DrawerSection / DrawerMenuItem */}
        </>
      }
      footer={/* Footer with app-managed tabs */}
    >
      {children}
    </MicroNavigation>
  )
}
```

---

## What to Add as the Consuming Application

After adopting this template, the consuming application is responsible for:

1. **Drawer navigation** — define `DrawerSection` and `DrawerMenuItem` items for the module
2. **Footer tab management** — implement tab open/close/group logic using the `Footer` pattern
3. **Page Header** — provide title, breadcrumbs, and actions per page
4. **Body content** — implement page-level layouts using the Ripple Grid
5. **Action handlers** — wire up Search, Hub, Notifications, and Client switcher behaviours
6. **Client badge** — optionally show the active client name next to the Client button

---

## Related

- [Micro Navigation layout](../layouts/micro-navigation.md) — the generic scaffold this template configures
- [Standard Navigation layout](../layouts/standard-navigation.md) — ERPx layout without the footer tab bar
- [Main Navigation pattern](../patterns/main-navigation.md) — the Navbar + Drawer pattern
- [Footer pattern](../patterns/footer.md) — the tab bar pattern
