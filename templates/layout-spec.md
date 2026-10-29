# Layout Specification Template

Copy this template when creating a new layout spec.
Save as `layouts/{layout-name}.md`. A layout is a stateless structural scaffold that arranges patterns.
It owns no behaviour; all state belongs to the patterns it places.

---

```yaml
---
name: [Layout Name]
status: draft
version: 0.1.0
last_updated: [YYYY-MM-DD]
owner: [Name]
figma: [Figma frame URL or TBD]
patterns: [Pattern, Pattern]
product: Any
tags: [layout]
---
```

## [Layout Name]

### Purpose

[One to two sentences. What kind of screen does this scaffold serve?]

### When to use / when not to use

- Use: [Scenario]
- Do not use: [Scenario. Name the alternative layout.]

### Regions

| Region | Contains (pattern / slot) | Size rule | Scroll | Required |
|--------|---------------------------|-----------|--------|----------|
| | | | own / page / none | |

[ASCII diagram of the regions.]

### Breakpoints

| Breakpoint | Region changes |
|------------|----------------|
| | |

### Spacing and tokens

| Element | Property | Token |
|---------|----------|-------|
| | | |

### Component API

| Prop / slot | Type | Default | Required | Description |
|-------------|------|---------|----------|-------------|
| | | | | |

[Props are pass-through to the patterns the layout places (for example `nav` to Navbar, `footer` to Footer) plus content slots (`header`, `children`). A layout adds no state of its own. Name the pattern each prop is forwarded to.]

### Accessibility

- **Landmarks**: [header, nav, main, aside, footer mapping]
- **Reading and focus order**:
- **Skip links**:
- **Zoom / reflow**: [400% zoom and 320px reflow behaviour]

### App templates using this layout

- [templates/... and product]

### Open questions

1. [Question, and who can answer it]

### Changelog

| Version | Date | Change |
|---------|------|--------|
| 0.1.0 | [Date] | Initial draft |
