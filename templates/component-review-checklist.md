# Component Review Checklist

Copy this checklist when reviewing a component for status promotion.

---

**Component**: [Name]
**Reviewer**: [Name]
**Date**: [YYYY-MM-DD]
**Spec location**: `components/[name].md`

---

## Specification Quality

- [ ] Purpose is clear and specific (not vague or circular)
- [ ] Anatomy lists all structural sub-elements
- [ ] All props documented with types, defaults, and descriptions
- [ ] All variants documented with "use when" guidance
- [ ] All interactive states documented (default, hover, focus, active, disabled)
- [ ] Error and loading states addressed (or explicitly marked N/A with rationale)

## Token Compliance

- [ ] Every visual property maps to a design token
- [ ] No hardcoded color, spacing, typography, or elevation values
- [ ] Tokens follow the three-tier naming convention
- [ ] No primitive tokens referenced directly by the component

## Accessibility

- [ ] Semantic HTML element specified (not div/span for interactive elements)
- [ ] Keyboard interaction model documented
- [ ] Focus management described
- [ ] Screen reader behaviour documented
- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 text, 3:1 UI)
- [ ] Touch target minimum 44x44px for interactive elements
- [ ] Motion respects prefers-reduced-motion

## Usage Guidance

- [ ] "When to use" scenarios provided
- [ ] "When not to use" scenarios provided with alternatives
- [ ] Content guidelines included (if component contains text)
- [ ] Related components listed with differentiation guidance

## Code Quality (if implementation exists)

- [ ] TypeScript strict typing (no `any`)
- [ ] Props interface exported
- [ ] Component is composable (not monolithic)
- [ ] Logic separated from presentation where applicable
- [ ] Follows existing component patterns in the codebase

## Documentation

- [ ] Frontmatter complete (name, status, version, date, owner, figma, tags)
- [ ] Changelog has at least one entry
- [ ] Registered in `components/_index.md`

---

## Review Outcome

- [ ] **Approved**: ready to move to next status
- [ ] **Approved with changes**: minor issues noted below
- [ ] **Revisions needed**: significant gaps noted below

### Notes

[Reviewer comments, required changes, open questions]
