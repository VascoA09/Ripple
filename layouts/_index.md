---
type: registry
scope: layouts
last_updated: 2026-03-31
---

# Layout Registry

Layouts are full-page scaffolds that compose patterns into complete application shells.
They contain no behavioural logic — all state is owned by the patterns they arrange.

| Layout | Status | Version | Last Updated | Owner | Patterns Used | Product |
|--------|--------|---------|--------------|-------|---------------|---------|
| [Micro Navigation](micro-navigation.md) | draft | 0.1.0 | 2026-03-20 | Vasco Antunes | MainNavigation, Footer | Any |
| [Standard Navigation](standard-navigation.md) | draft | 0.1.0 | 2026-04-06 | Vasco Antunes | MainNavigation | Any |

## Status Summary

| Status | Count |
|--------|-------|
| Draft | 2 |
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
| **Examples** | Footer, MainNavigation | MicroNavigation, StandardNavigation |

## Layouts vs App Templates

Layouts are generic and product-agnostic. App Templates (see `templates/_index.md`) wrap a layout with product-specific configuration — the correct nav items, branding slots, and content zones pre-wired for a specific product.

| | Layouts | App Templates |
|---|---|---|
| **Product-specific?** | No | Yes |
| **Reusable across products?** | Yes | No |
| **Contains configuration?** | No | Yes |
| **Where it lives** | `layouts/` | `templates/` |
| **Examples** | MicroNavigation | ERPx MicroNavigation |
