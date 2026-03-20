# Contribution Model

## How Components Enter Ripple

Not every UI element needs to be a design system component. This process ensures Ripple grows intentionally, not reactively.

## When to Add a Component

A component should enter Ripple when it meets at least two of these criteria:

1. **Used by 2+ products or teams** (or will be within the next quarter)
2. **Solves a recurring pattern** that teams are currently building independently
3. **Has stable requirements** that are unlikely to change significantly
4. **Has accessibility requirements** that benefit from centralised implementation

If a component is only needed by one team and is unlikely to be reused, it should stay in that team's codebase. Ripple is not a dumping ground for every UI element.

## Contribution Workflow

### 1. Propose

**Who**: any designer or engineer
**How**: open a discussion with the DS team

Provide:
- What the component does (purpose, not visual description)
- Where it is needed (which products, which use cases)
- Whether a similar pattern already exists in Ripple
- Figma explorations (if available)

The DS team will assess against the criteria above and respond within one week.

### 2. Spec

**Who**: contributor (with DS team guidance)
**How**: create a component spec using `templates/component-spec.md`

The spec must cover:
- Purpose and anatomy
- Props, variants, and states
- Design tokens (no hardcoded values)
- Accessibility requirements
- Usage guidelines (when to use, when not to use)

Status: **draft**. Registered in `components/_index.md`.

### 3. Review

**Who**: DS team
**How**: run `templates/component-review-checklist.md` against the spec

The review checks:
- Spec completeness
- Token compliance
- Accessibility coverage
- Usage guidance quality
- Code quality (if implementation exists)

Outcome: approved, approved with changes, or revisions needed.

Status moves to **review** during this phase.

### 4. Build

**Who**: contributor or DS team (depending on capacity and complexity)
**How**: implement in React/TypeScript following the spec

Requirements:
- Strict TypeScript typing
- Token-only values (no hardcoded CSS)
- Keyboard and screen reader support
- Props interface exported
- Composable architecture

### 5. Publish

**Who**: DS team
**How**: final review, version assignment, registry update

Before publishing:
- [ ] Spec complete and reviewed
- [ ] Implementation matches spec
- [ ] Accessibility tested
- [ ] Changelog entry added
- [ ] `components/_index.md` updated

Status: **stable**.

## Roles

| Role | Responsibility |
|------|---------------|
| **DS Lead** | Final approval on all components. Owns architecture and governance decisions. |
| **Contributor** | Proposes, specs, and (optionally) builds components. |
| **Reviewer** | Runs the review checklist. Provides feedback on spec and code quality. |

## Timelines

These are guidelines, not hard deadlines. Quality takes precedence over speed.

| Phase | Typical duration |
|-------|-----------------|
| Propose | 1 week (DS team response) |
| Spec | 1-2 weeks |
| Review | 1 week |
| Build | 1-3 weeks (depends on complexity) |
| Publish | 1-2 days |

## Updating Existing Components

Changes to stable components follow the same review process but skip the proposal phase. The contributor:

1. Updates the spec in `components/{name}.md`
2. Adds a changelog entry with the correct version bump
3. Requests review from the DS team
4. Implements the change
5. DS team publishes the update

Version bumps follow SemVer rules defined in `templates/changelog-entry.md`.
