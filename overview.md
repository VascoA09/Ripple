# Ripple Design System

## What Is Ripple

Ripple is Unit4's design system. It provides the components, tokens,
patterns, and guidelines that product teams use to build consistent,
accessible, and scalable user interfaces across Unit4's product suite.

Ripple exists to solve three problems:
1. **Consistency**: products built by different teams should feel like one product
2. **Efficiency**: teams should not rebuild the same UI patterns from scratch
3. **Quality**: every interface must meet accessibility and usability standards by default

## Guiding Principles

1. Clarity over decoration
2. Accessibility is the baseline
3. Systems over screens
4. Composability over complexity
5. Tokens, not magic numbers
6. Document the why

See `/Users/vascoantunes/Documents/VA/_Jarvis/ux-principles.md` for the
full UX decision-making framework that Ripple inherits.

## What Ripple Includes

- **Foundations**: color, typography, spacing, elevation, motion, iconography, borders. The design tokens that encode visual decisions.
- **Components**: reusable UI elements with documented specs and coded implementations in React/TypeScript.
- **Patterns**: composed layouts and interaction patterns built from multiple components.
- **Governance**: contribution model, versioning, deprecation policy, adoption tracking.

## How This Knowledge Base Is Organised

| Folder | Contains |
|--------|----------|
| `foundations/` | Token definitions and visual foundation documentation |
| `components/` | Individual component specifications. `_index.md` is the registry. |
| `patterns/` | Composed patterns. `_index.md` is the registry. |
| `governance/` | Processes: contribution, versioning, deprecation, adoption |
| `templates/` | Reusable templates for creating specs, reviews, and changelogs |

## Relationship to Other Systems

- **Figma**: source of truth for visual design. Component specs link to Figma frames.
- **Codebase**: React/TypeScript implementation. Specs here document the intended behaviour; the code repository contains the implementation.
- **Unit4 Brand**: Ripple aligns with Unit4 brand guidelines (see `Unit4/Unit4 About/Unit4-Brand-Guidelines-2025.md`). The UI typeface is Open Sans. Brand tone is caring, real, human, professional.
- **AI Copilot** (future): this structured content is designed to be ingested by the Design System AI Copilot RAG system described in `/Users/vascoantunes/Documents/VA/_Jarvis/Projects/DS-AI-POC/design-system-ai-copilot-project-charter.md`.
