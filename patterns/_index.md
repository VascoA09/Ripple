---
type: registry
scope: patterns
last_updated: 2026-10-29
---

# Pattern Registry

| Pattern | Status | Version | Last Updated | Owner | Components Used | Tags |
|---------|--------|---------|--------------|-------|-----------------|------|
| [Footer](footer.md) | draft | 0.1.0 | 2026-03-20 | Vasco Antunes | Tag, FlyoutMenu, Button | layout, navigation |
| [Main Navigation](main-navigation.md) | deprecated | 0.2.1 | 2026-10-29 | Vasco Antunes | Navbar, Drawer | navigation, layout |
| [Navbar](navbar.md) | review | 0.3.0 | 2026-10-29 | Vasco Antunes | Button, Drawer, Badge, Counter, Avatar, FlyoutMenu, Tooltip | navigation, layout |
| [Mobile Stepper](mobile-stepper.md) | draft | 0.1.0 | 2026-03-31 | Vasco Antunes | Stepper, ProgressBar | navigation, form, mobile |
| [Stackable List](stackable-list.md) | stable | 1.0.0 | 2026-04-02 | Vasco Antunes | Avatar, Tag, FlyoutMenu, IconButton | data, list, display |

## Status Summary

| Status | Count |
|--------|-------|
| Draft | 2 |
| Review | 1 |
| Stable | 1 |
| Deprecated | 1 |

## Note on Micro Navigation

Micro Navigation was reclassified from a pattern to a layout template on 2026-03-20.
It has no behavioural logic of its own and is now maintained in `layouts/`.
See [layouts/_index.md](../layouts/_index.md). The stale `patterns/micro-navigation.md` file was deleted on 2026-10-29.

## Note on Navbar

Navbar moved from `components/` to `patterns/` on 2026-10-29 (0.3.0) and absorbs Main Navigation, which is deprecated and removed in Navbar 0.4.0.
