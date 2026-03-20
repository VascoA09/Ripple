# Ripple Design System - AI Context

This file provides AI instructions scoped to Ripple, Unit4's design system.
It inherits personal style and interaction rules from the parent CLAUDE.md
at `/Users/vascoantunes/Documents/VA/_Jarvis/CLAUDE.md`. Do not duplicate
those rules here. This file covers DS-specific context only.

---

## What Is Ripple

Ripple is Unit4's design system for product UI. It provides the shared
language of components, tokens, patterns, and guidelines that Unit4 product
teams use to build consistent, accessible, and scalable user interfaces.

- **Stack**: React, TypeScript, CSS
- **UI typeface**: Open Sans (per Unit4 brand guidelines for software UI)
- **Target users**: UX designers, frontend engineers, product managers at Unit4
- **Scope**: B2B enterprise software for people-centric service organisations

Ripple serves two audiences:
1. **Consumers**: product teams who use components and tokens to build features
2. **Contributors**: designers and engineers who propose or build new components

---

## Design System Principles

These extend the UX principles defined in
`/Users/vascoantunes/Documents/VA/_Jarvis/ux-principles.md`.
When in conflict, the UX principles take precedence.

1. **Tokens, not magic numbers.** Every visual value (color, spacing,
   typography, elevation, motion) must reference a token. No hardcoded values.
2. **Accessibility is the baseline.** WCAG 2.2 AA minimum. Keyboard
   navigation, visible focus states, semantic HTML, sufficient contrast,
   screen reader support. If it is not accessible, it is not done.
3. **Compose, don't monolith.** Small, flexible primitives that combine
   into complex patterns. Avoid rigid mega-components.
4. **One pattern, one source.** Avoid pattern fragmentation. Extend
   existing patterns before creating new ones. Reuse before you build.
5. **Document the why.** Specs must include rationale, not just props.
   Future contributors need to understand intent, not just output.
6. **Status is explicit.** Every component and token has a declared
   maturity status. No ambiguity about what is safe to use in production.

---

## Reference Files

| Need | File | Status |
|------|------|--------|
| Ripple overview and purpose | `overview.md` | Exists |
| Token architecture | `foundations/tokens-overview.md` | Exists |
| Theme tokens and modes | `foundations/themes.md` | Exists |
| Specific foundation (color, type, spacing, etc.) | `foundations/{topic}.md` | Create per foundation |
| Component spec | `components/{component-name}.md` | Create per component |
| Component registry (all statuses) | `components/_index.md` | Exists |
| Pattern spec | `patterns/{pattern-name}.md` | Create per pattern |
| Pattern registry | `patterns/_index.md` | Exists |
| Contribution process | `governance/contribution-model.md` | Exists |
| Versioning rules | `governance/versioning.md` | Planned |
| Deprecation process | `governance/deprecation.md` | Planned |
| Adoption tracking | `governance/adoption.md` | Planned |
| Templates | `templates/` | Exists |
| UX principles (inherited) | `/Users/vascoantunes/Documents/VA/_Jarvis/ux-principles.md` | Exists |
| Technical standards (inherited) | `/Users/vascoantunes/Documents/VA/_Jarvis/technical.md` | Exists |
| Unit4 brand guidelines | `/Users/vascoantunes/Documents/VA/_Jarvis/Unit4/Unit4 About/Unit4-Brand-Guidelines-2025.md` | Exists |

---

## Token Architecture Rules

Ripple uses a three-tier token taxonomy:

### Tier 1: Primitive tokens
Raw values. Named by their literal value.
- `color.blue.500` = `#0066CC`
- `spacing.16` = `16px`

### Tier 2: Semantic tokens
Purpose-driven aliases that reference primitives.
- `color.text.primary` -> `color.neutral.900`
- `color.surface.error` -> `color.red.50`
- `spacing.component.gap` -> `spacing.8`

### Tier 3: Component tokens
Scoped to a specific component. Reference semantic tokens.
- `button.color.background.primary` -> `color.action.primary`
- `input.spacing.padding.horizontal` -> `spacing.component.padding`

**Rules:**
- Components must only reference semantic or component tokens. Never primitives directly.
- Semantic tokens must be meaningful without seeing the value. `color.text.primary` is good. `color.blue.dark` is not semantic.
- Token names use dot notation, lowercase, no abbreviations.
- No numbers in semantic or component token names. Numbers belong in primitives only.
- Every token must have a description explaining its intended use.
- Semantic tokens are the theming layer (e.g., light/dark mode). See `foundations/tokens-overview.md` for the full theming model.

---

## Component Standards

### What makes a component "done"

A component is considered complete when it has:

- [ ] A specification in `components/{name}.md` following the component spec template
- [ ] All variants and states documented
- [ ] Accessibility requirements defined (keyboard, screen reader, contrast)
- [ ] Design tokens mapped (no hardcoded values)
- [ ] Usage guidelines (when to use, when not to use)
- [ ] Content guidelines (if the component contains text)
- [ ] A coded implementation in React/TypeScript
- [ ] Reviewed against `templates/component-review-checklist.md`
- [ ] Status set in `components/_index.md`

### Component status lifecycle

| Status | Meaning | Safe for production? |
|--------|---------|---------------------|
| `draft` | In development. Spec may be incomplete. | No |
| `review` | Spec complete. Under review by DS team/stakeholders. | No |
| `stable` | Approved. Fully documented and tested. | Yes |
| `deprecated` | Scheduled for removal. Migration path documented. | Use with caution |

### Frontmatter format

Every component spec must begin with YAML frontmatter:

```yaml
---
name: Button
status: stable
version: 1.2.0
last_updated: 2026-02-19
owner: Vasco Antunes
figma: [link to Figma frame]
storybook: [link to Storybook, if applicable]
tags: [action, form, navigation]
---
```

This frontmatter is machine-readable for the AI Copilot RAG system.

---

## Accessibility Requirements

These are non-negotiable for every component:

- WCAG 2.2 AA compliance minimum
- Keyboard operable: all interactive elements reachable and usable via keyboard
- Focus management: visible focus indicator, logical tab order
- Semantic HTML: correct elements (`button`, not `div` with `onClick`)
- ARIA: use only when semantic HTML is insufficient. Prefer native semantics.
- Color contrast: 4.5:1 for normal text, 3:1 for large text, 3:1 for UI components
- Screen reader: meaningful labels, live regions for dynamic content, proper heading hierarchy
- Motion: respect `prefers-reduced-motion`. No essential information conveyed only through animation.
- Touch targets: 44×44px target for interactive elements (internal standard, exceeds WCAG 2.2 AA 2.5.8 minimum of 24×24px). Components that cannot reach 44×44px must document this explicitly and enforce a spacing buffer to compensate.
- Focus not obscured (2.4.11): focused elements must not be entirely hidden by sticky headers, portals, or other author-created content. Portal-rendered overlays (Dialog, FlyoutMenu) must not trap focus behind obscuring layers.
- Dragging movements (2.5.7): any drag interaction must have a single-pointer alternative. Document this requirement for any future drag-and-drop component.

---

## Quick Modes (DS-specific)

In addition to the parent CLAUDE.md quick modes:

- **"New component: [name]"** - Generate a component spec from the template. Ask questions to fill gaps.
- **"Token audit: [foundation]"** - Review a foundation file for consistency, gaps, naming violations.
- **"Review: [component]"** - Run the component review checklist against a spec. Flag what is missing.
- **"Deprecate: [component]"** - Generate a deprecation plan with migration path.
- **"Status update"** - Summarise the current state of the component registry.

---

## When Working on Ripple Content

1. Always check `components/_index.md` or `patterns/_index.md` before creating new content to avoid duplication.
2. Follow the relevant template in `templates/` for the content type.
3. Use the frontmatter format specified above. It enables RAG ingestion.
4. Cross-reference related components and patterns using relative links.
5. When defining tokens, follow the three-tier architecture strictly.
6. Flag any accessibility concern immediately. Do not defer it.
7. When a component spec is incomplete, list what is missing explicitly rather than leaving gaps silently.
