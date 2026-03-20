---
type: registry
scope: layouts
last_updated: 2026-03-20
---

# Layout Registry

Layout templates are full-page scaffolds that compose patterns into complete application shells.
They contain no behavioural logic — all state is owned by the patterns they arrange.

| Layout | Status | Version | Last Updated | Owner | Patterns Used |
|--------|--------|---------|--------------|-------|---------------|
| [Micro Navigation](micro-navigation.md) | draft | 0.1.0 | 2026-03-20 | Vasco Antunes | MainNavigation, Footer |

## Status Summary

| Status | Count |
|--------|-------|
| Draft | 1 |
| Review | 0 |
| Stable | 0 |
| Deprecated | 0 |

## Layouts vs Patterns

| | Patterns | Layouts |
|---|---|---|
| **Owns behaviour?** | Yes | No |
| **Has internal state?** | Often | Never |
| **Individually tested?** | Yes | No (covered by composed patterns) |
| **Versioned independently?** | Yes | Yes, but rarely breaking |
| **Examples** | Footer, MainNavigation | MicroNavigation |
