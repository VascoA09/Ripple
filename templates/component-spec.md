# Component Specification Template

Copy this template when creating a new component spec.
Save as `components/{component-name}.md`.

---

```yaml
---
name: [Component Name]
status: draft
version: 0.1.0
last_updated: [YYYY-MM-DD]
owner: [Name]
figma: [Figma frame URL]
storybook: [Storybook URL or N/A]
tags: []
---
```

## [Component Name]

### Purpose

[One to two sentences. What problem does this component solve? Why does it exist?]

### Anatomy

[Describe the structural parts of the component. List each named sub-element.
E.g., for a Button: container, label, leading icon (optional), trailing icon (optional).]

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| | | | | |

### Variants

| Variant | Description | Use when |
|---------|-------------|----------|
| | | |

### States

| State | Visual behaviour | Notes |
|-------|-----------------|-------|
| Default | | |
| Hover | | |
| Focus | | |
| Active/Pressed | | |
| Disabled | | |
| Loading | | (if applicable) |
| Error | | (if applicable) |

### Design Tokens

| Element | Property | Token |
|---------|----------|-------|
| | | |

### Accessibility

- **Role**: [ARIA role or semantic element]
- **Keyboard**: [Tab, Enter, Space, Escape behaviour]
- **Screen reader**: [Announced as, live region behaviour]
- **Focus**: [Focus indicator, focus trap if modal]
- **Contrast**: [Specific contrast requirements beyond baseline]

### Usage Guidelines

#### When to use
- [Scenario]

#### When not to use
- [Scenario. Suggest alternative.]

### Content Guidelines

[Guidance on labels, placeholder text, error messages, character limits.
Remove this section if the component has no text content.]

### Related Components

- [Link to related component and explanation of when to use which]

### Changelog

| Version | Date | Change |
|---------|------|--------|
| 0.1.0 | [Date] | Initial draft |
