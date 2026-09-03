## Group headers

Group headers divide a list into labelled sections. They are navigational scaffolding, not selectable options.

### Behaviour

- **Non-interactive.** Group headers are not focusable, not selectable, and not counted in keyboard navigation (arrow keys skip over them).
- **Truncation.** Headers truncate with an ellipsis (`…`) when they exceed the available width (panel width minus horizontal padding). No wrapping. Layout stays stable regardless of label length.
- **Tooltip.** A tooltip showing the full label appears on hover and on `focus-visible` of any child option within the group. It does not appear on the header itself, since the header is not focusable.

### Content guidelines

- **30-character soft limit.** Above 30 characters, treat it as a content problem: shorten the label rather than accommodating it in the component.
- **Sentence case.** Not title case. "Financial planning" not "Financial Planning."
- **Noun phrase only.** No verbs, no punctuation. Headers describe a category, not an action.

| Do | Don't |
|----|-------|
| Financials | Financial Planning and Budgeting Modules |
| Recent | Recently used items |
| People & HR | People, HR and Workforce Management |

### When to use groups

Use groups when:
- You have 2 or more meaningful categories with 2 or more options each.
- The categories meaningfully reduce scanning time.

Do not use groups when:
- Any group would contain only 1 option.
- You have fewer than 6 options total — a flat list is cleaner.
- The categories are arbitrary or content-team-defined without user-facing meaning.

### Accessibility

```html
<ul role="listbox">
  <li role="group" aria-labelledby="group-financials">
    <span id="group-financials" aria-hidden="true">Financials</span>
    <ul>
      <li role="option" aria-selected="false">Budget</li>
      <li role="option" aria-selected="false">Forecast</li>
    </ul>
  </li>
</ul>
```

- Use `role="group"` with `aria-labelledby` pointing to the header `<span>`.
- Set `aria-hidden="true"` on the header `<span>` so screen readers announce the group via `aria-labelledby`, not a redundant read of the visible text.
- The header element must not receive `tabindex`.
- When a truncated header tooltip is needed, it must be announced via `aria-describedby` on the group — not on the header span itself.

### Tokens

| Property | Token |
|----------|-------|
| Label color | `color.text.subtle` |
| Label size | `typography.label.small` |
| Label weight | `typography.weight.medium` |
| Padding top | `spacing.25` |
| Padding bottom | `spacing.25` |
| Padding horizontal | Matches option horizontal padding |
