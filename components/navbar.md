---
name: Navbar
status: deprecated
version: 0.2.0
last_updated: 2026-10-29
owner: Vasco Antunes
moved_to: patterns/navbar.md
tags: [navigation, layout]
---

# Navbar — Moved

This spec moved to the pattern tier on 2026-10-29.

**New location:** [`../patterns/navbar.md`](../patterns/navbar.md) (version 0.3.0)

**Reason:** the Navbar now owns drawer wiring and single selection, which are stateful, so it is a pattern. It absorbs the Main Navigation pattern, which is deprecated. One name replaces the "Navbar or Main Navigation?" choice. Source: `Research/Navigation/brief.md` and `decisions.md`.

**Production:** the production Storybook still ships Navbar as a component (`@u4/ripple-components`). It stays unchanged until Drawer reaches production; see Release sequencing in the pattern spec.
