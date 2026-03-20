# Changelog Entry Template

Use this format for entries in the component-level changelog table
and for system-wide release notes.

---

## Component Changelog Entry

Add to the changelog table in the component spec file:

| Version | Date | Change |
|---------|------|--------|
| [SemVer] | [YYYY-MM-DD] | [Concise description of what changed and why] |

### Version numbering

- **Major** (2.0.0): Breaking API change. Props removed or renamed. Behaviour changed in ways that require consumer updates.
- **Minor** (1.1.0): New variant, new prop, new feature. Backward-compatible additions.
- **Patch** (1.0.1): Bug fix, accessibility fix, token update. No API surface change.

### Writing good changelog entries

**Do:**
- State what changed and why in one sentence
- Reference the impacted prop, variant, or token by name
- Note if the change is breaking

**Avoid:**
- Vague entries like "Updated styles" or "Minor fixes"
- Implementation details that do not affect consumers
- Entries without a version bump

---

## System Release Note Format

For broader Ripple releases that bundle multiple component changes:

```markdown
## Ripple [version] - [YYYY-MM-DD]

### Added
- [Component/feature]: [What was added and why]

### Changed
- [Component/feature]: [What changed and why]

### Fixed
- [Component/feature]: [What was fixed]

### Deprecated
- [Component/feature]: [What is deprecated, migration path, removal date]

### Removed
- [Component/feature]: [What was removed, link to migration guide]
```
