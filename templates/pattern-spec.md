# Pattern Specification Template

Copy this template when creating a new pattern spec.
Save as `patterns/{pattern-name}.md`. A pattern is a stateful composition of Ripple components.

---

```yaml
---
name: [Pattern Name]
status: draft
version: 0.1.0
last_updated: [YYYY-MM-DD]
owner: [Name]
figma: [Figma frame URL or TBD]
storybook: [Storybook URL or TBD]
components: [Component, Component]
tags: []
---
```

## [Pattern Name]

### Purpose

[One to two sentences. What recurring problem does this pattern solve, and for whom?]

### When to use

- [Scenario]

### When not to use

- [Scenario. Name the alternative component or pattern.]

### Composition

| Part | Ripple component | Role in the pattern | Required |
|------|------------------|---------------------|----------|
| | | | |

[Why these components, and which existing component capabilities this pattern relies on.
List any component change the pattern needs as a dependency, with the component's target version.]

### Anatomy

[Named regions and their order. Include a simple ASCII diagram if it helps.]

### Variants

| Variant | Description | Use when |
|---------|-------------|----------|
| | | |

### State model

| State | Owned by | Changes when | Visible as |
|-------|----------|--------------|------------|
| | pattern / consumer | | |

[What the pattern owns internally versus what the consuming screen controls. Actions on selections
or records belong to the consumer unless stated otherwise.]

### Behaviour

| Aspect | Rule |
|--------|------|
| Keyboard | |
| Focus management | |
| Motion | (respect prefers-reduced-motion) |
| Responsive | |
| Persistence | |

### Content rules

[What content each slot accepts, limits, truncation, ordering of status or exceptions.]

### Design Tokens

| Element | Property | Token |
|---------|----------|-------|
| | | |

### Accessibility

- **Landmarks and roles**:
- **Keyboard**:
- **Screen reader**: [names, live announcements]
- **Focus**: [visible, not obscured (2.4.11)]
- **Targets**: [44 x 44px, or documented exception and buffer]
- **Dragging**: [single-pointer alternative (2.5.7), if any drag]

### API (proposal)

| Prop / slot | Type | Default | Required | Description |
|-------------|------|---------|----------|-------------|
| | | | | |

### Related

- [Pattern or component, and when to use which]

### Open questions

1. [Question, and who can answer it]

### Changelog

| Version | Date | Change |
|---------|------|--------|
| 0.1.0 | [Date] | Initial draft |
