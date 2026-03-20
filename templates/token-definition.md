# Token Definition Template

Copy this template when documenting a new foundation (color, typography, spacing, etc.).
Save as `foundations/{foundation-name}.md`.

---

```yaml
---
foundation: [color | typography | spacing | elevation | motion | borders | iconography]
last_updated: [YYYY-MM-DD]
owner: [Name]
---
```

## [Foundation Name] Tokens

### Overview

[Brief description of this foundation's role in the system.
What decisions does it encode? What consistency does it provide?]

### Primitive Tokens

| Token | Value | Description |
|-------|-------|-------------|
| | | |

### Semantic Tokens

| Token | References | Description | Use when |
|-------|-----------|-------------|----------|
| | | | |

### Component Token Mappings

[List which components consume these semantic tokens and how.
This section grows as components are built.]

| Component | Property | Semantic Token |
|-----------|----------|---------------|
| | | |

### Usage Rules

- [Specific rules for this foundation. E.g., for color: "Never use primitive
  color tokens directly in component styles."]
- [Anti-patterns to avoid.]

### Audit Checklist

- [ ] All primitives have a description
- [ ] All semantic tokens reference a primitive (no orphans)
- [ ] Naming follows dot notation convention
- [ ] No duplicate semantic intent (two tokens meaning the same thing)
- [ ] Accessibility requirements met (contrast ratios for color tokens)
