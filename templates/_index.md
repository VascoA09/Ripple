---
type: registry
scope: templates
last_updated: 2026-03-31
---

# Templates

This directory contains two distinct types of content. Read this page before adding anything here.

---

## Type 1 — Contribution Templates (authoring aids)

Markdown templates for documenting Ripple content. These are authoring aids, not shipped artefacts. They encode the correct structure for specs, token definitions, and review checklists so contributors produce consistent documentation.

| File | Purpose |
|------|---------|
| `component-spec.md` | Template for writing a new component specification |
| `token-definition.md` | Template for defining a new token |
| `component-review-checklist.md` | Checklist for reviewing a component before status promotion |
| `changelog-entry.md` | Template for writing a changelog entry |

---

## Type 2 — App Templates (product-specific starting points)

App Templates are pre-configured instances of a layout with patterns and slots populated for a specific Unit4 product context. They answer the question: "what does a new screen look like out of the box for this product?"

**Definition:**
> An App Template wraps a Ripple layout with product-specific configuration — the correct navigation items, branding slots, and content zones already wired. It is a starting point, not a reusable abstraction. App Templates are product-specific and are not versioned like components.

**Rules:**
- An App Template must reference exactly one layout
- It must document which slots are pre-configured and which are left to the consumer
- It is not the right place for behavioural logic — all state stays in the underlying patterns
- App Templates do not replace layouts. The layout remains the reusable, generic scaffold

| Template | Status | Layout Used | Product |
|----------|--------|-------------|---------|
| [ERPx MicroNavigation](erp-micro-navigation.md) | draft | Micro Navigation | ERPx |
| [Extension Kit Navigation](extension-kit-navigation.md) | draft | None (self-contained) | Extension Kit |

---

## Status Summary

| Status | Count |
|--------|-------|
| Draft | 2 |
| Review | 0 |
| Stable | 0 |

---

## When to Add an App Template

Add an App Template (Type 2) when:
- A product has a fixed, well-known configuration of a layout that should be the default starting point
- That configuration would otherwise be copy-pasted across every new screen
- The configuration is stable enough to be documented without changing frequently

Do not add an App Template for:
- Generic layouts (those belong in `layouts/`)
- Component or pattern specs (those belong in `components/` or `patterns/`)
- One-off page implementations
