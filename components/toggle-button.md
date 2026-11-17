---
name: Toggle Button
status: review
version: 0.1.0
last_updated: 2026-11-17
owner: Vasco Antunes
figma: https://www.figma.com/design/t3ssULnSKXkCRP38TLMxiL/Unit4-design-kit?node-id=16933-2327
storybook: https://ripplestorybook-release.azureedge.net/?path=/docs/components-toggle-button--documentation
tags: [action, selection, filter]
---

# Toggle Button

## Purpose

Toggle Button is a two-state control that stays visually set until the user turns it off. It exists for options, modes and filters with a lasting effect that users need to see, review or undo later, where a standard [Button](button.md) would return to rest immediately after the press.

Toggle Button is a [Button](button.md) with persistent state: it reuses the Button `ghost` + `neutral` appearance and adds a selected state. It does not carry its own palette.

> Source: Toggle button exploration, `brief.md` and `decisions.md` (2026-11-17). Markup follows the production Storybook component; styles follow `src/components/Button/Button.css`.

---

## When to use

- Filter content by turning a category on or off (Draft, Submitted, Archived).
- Switch between views or modes inside a [Button Group](#toggle-group) in single selection (List, Grid, Gallery).
- Persist an option visually in a toolbar or action bar (Show filters, Show hidden columns).

## When not to use

| Situation | Use instead | Why |
|---|---|---|
| A system or app setting that applies immediately (notifications, dark mode) | [Switch](switch.md) | Switch communicates "setting", Toggle Button communicates "view or filter state" |
| Navigating between pages or content panels | [Tabs](tabs.md) | Tabs navigate; Toggle Buttons act on the current content |
| More than 5 options, or space is limited | [Dropdown](dropdown.md) or [Combobox](combobox.md) | A row of more than 5 toggles is hard to scan and wraps unpredictably |
| A one-off action (Save, Download, Delete) | [Button](button.md) | No persistent state to show |
| Selecting values in a form | [Checkbox](checkbox.md) or [Radio](radio.md) | Form fields need visible field labels and validation |
| Destructive or irreversible actions | [Button](button.md) with a confirmation [Dialog](dialog.md) | A toggle implies the action can be undone by toggling back |

### Where it is used

| Location | Typical use | Notes |
|---|---|---|
| Filter bars | Multi-select status or category filters above tables, lists, grids | Button Group, `multiple` selection |
| Page and section headers | View switchers (List / Grid) | Button Group, `single` selection |
| Toolbars | Display options, formatting | Icon-only is common here; tooltip mandatory |

---

## Anatomy

```
<label>  ┌───────────────────────────────┐
         │ [native input]  [icon?] Label │   container = Button ghost neutral
         └───────────────────────────────┘
```

- **Container**: a `<label>` styled as Button `ghost` + `neutral`. It is the visible hit target and carries hover, pressed, selected, focus and disabled styling.
- **Native input**: `<input type="checkbox">` (standalone or multiple selection) or `<input type="radio">` (single selection, set by Button Group). Visually hidden but stretched over the container (`inset: 0`, `appearance: none`) so it receives pointer and keyboard input. It owns the state; there is no ARIA state attribute on top.
- **Icon** (optional): leading or standalone Ripple icon (Font Awesome Pro Regular), sized by the Button size.
- **Label text** (optional when icon-only): the visible label. It never changes between selected and unselected.

Content combinations: label only, icon + label, icon only (requires accessible name and [Tooltip](tooltip.md)).

**Why a label and native input, not `<button aria-pressed>`:** this is the markup production already ships, so consumers do not migrate. Native inputs give checked state, keyboard behaviour, radio grouping and form submission without custom scripting. The cost is accepted and tracked in Open questions: screen readers announce "checkbox" rather than "toggle button".

---

## Props

| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `children` | `ReactNode` | none | Yes, unless icon-only | Visible label. Must stay the same in both states. |
| `icon` | `ReactNode` | none | No | Leading icon, or the only content when `children` is omitted. |
| `aria-label` | `string` | none | Yes when icon-only | Accessible name for icon-only toggles. Applied to the input. |
| `tooltip` | `string` | `aria-label` | Yes when icon-only | Tooltip text. Defaults to `aria-label` so the visible and accessible names match. |
| `selected` | `boolean` | none | No | Controlled selected state. Maps to the input's `checked`. |
| `defaultSelected` | `boolean` | `false` | No | Uncontrolled initial state. |
| `onChange` | `(event: ChangeEvent<HTMLInputElement>) => void` | none | No | Fires when the user toggles. Same signature as production. |
| `size` | `'xsmall' \| 'small' \| 'medium' \| 'large'` | `'medium'` | No | Button size. All toggles in a group share one size. |
| `disabled` | `boolean` | `false` | No | Keeps the current state visible but blocks interaction. |
| `value` | `string` | none | No | Submitted value; also identifies the toggle inside a Button Group. |
| `name` | `string` | none | No | Form field name. Set by Button Group when grouped; set manually only for a standalone toggle in a form. |
| `groupName` | `string` | none | No | **Deprecated.** Puts the toggle in a single-selection set. Use Button Group `selection="single"` instead. Logs a console warning. Removed at the next major. |

All other `<input>` attributes are forwarded to the input. The input `type` is not a public prop: it is `checkbox` by default and `radio` when a Button Group in `single` selection renders the toggle.

**Why `groupName` is deprecated, not removed:** adoption is not tracked, so removing it now would break unknown consumers. Button Group is the selection coordinator ("one pattern, one source"). The deprecation ships in the same release as Button Group `selection`, so the warning always points to a working replacement.

---

## Variants

| Variant | Description | Use when |
|---|---|---|
| Ghost neutral (only) | Transparent at rest, Button ghost neutral interaction states, dark neutral fill when selected | Always |

There is no fill, outline, primary or negative variant. **Why:** Toggle Buttons usually sit in groups, toolbars and filter rows, where low resting presence keeps the row calm and the single dark selected fill gives one strong signal. A brand-coloured selected state was considered and rejected (`decisions.md`, 2026-11-17).

## Sizes

Toggle Button uses the [Button](button.md) sizes unchanged.

| Size | Height | Use |
|---|---|---|
| `xsmall` | 24px | Dense desktop interfaces only (see touch targets) |
| `small` | 32px | Compact layouts, toolbars |
| `medium` | 40px | Default |
| `large` | 48px | Touch-first surfaces |

Never mix sizes in one group. **Why:** mixed heights create uneven hit targets and break the group's alignment.

---

## States

Selection and interaction are independent. Hover, pressed and focus layer on top of the current selected or unselected appearance and never change selection on their own.

| State | Unselected | Selected | Notes |
|---|---|---|---|
| Default | Transparent background, `--text` | `--background-neutral`, `--text-loud-inverse` | Selected reuses the Button ghost neutral pressed values |
| Hover | `--background-neutral-soft` | `--background-neutral-loud` | Selected hover borrows the Button fill neutral hover so a hovered selected toggle still reads as selected |
| Pressed | `--background-neutral`, `--text-loud-inverse`, 1px downward shift | Same, 1px shift | Button behaviour. The selected state itself has no shift, so selected toggles stay aligned with their neighbours |
| Focus | Focus ring | Focus ring | Applied to the container when the input matches `:focus-visible` |
| Disabled | `--opacity-30`, not interactive | `--opacity-30`, not interactive | The current state stays visible so users know what is locked |
| Loading | N/A | N/A | Toggling is instant and local. Async consequences show their own loading state in the affected content |
| Error | N/A | N/A | A toggle cannot be invalid. Validation belongs to the form, not the control |

**Known minor issue:** pressing an unselected toggle shows the selected look until the pointer is released, because pressed and selected share a value. Button behaves the same way. It only matters if a user presses, drags off and expects nothing to have happened. Accepted, tracked in Open questions.

---

## Toggle group

A Toggle group is a set of Toggle Buttons inside a [Button Group](button-group.md). The group owns selection and the selected value; individual toggles never coordinate with each other. Button Group passes `selection`, `name`, `size`, `value` and `onToggle` through `ToggleButtonGroupContext`; a toggle inside a group is checked when its `value` matches the group value. Inside a group, set selection on the group (`value` / `defaultValue`); the child's `selected` and `defaultSelected` are ignored.

| Group `selection` | Input rendered | Behaviour | Use when |
|---|---|---|---|
| `single` | `type="radio"`, shared `name` | Exactly one selected. Selecting another deselects the current one. Cannot deselect all | Mutually exclusive views or modes |
| `multiple` | `type="checkbox"` | Each toggle independent | Independent filters or options |

The group renders a `<fieldset>` with a `<legend>` (visible or visually hidden) so screen readers announce the group name before the options.

**Why the group owns selection:** a selection rule spans several toggles, so it belongs to the component that contains them. Keeping it on each toggle (production `groupName`) duplicates the rule and lets toggles in one visual group disagree about their name.

Keep groups to 2 to 5 toggles. Never mix icon-only and label-only toggles in one group.

---

## Design Tokens

Component tokens alias the Button ghost neutral values so the two components cannot drift. Toggle Button adds no new semantic tokens.

| Element | Property | Component token | Semantic token |
|---|---|---|---|
| Container | Background (unselected) | `toggle-button.color.background` | transparent |
| Container | Background (hover) | `toggle-button.color.background.hover` | `--background-neutral-soft` |
| Container | Background (pressed, selected) | `toggle-button.color.background.selected` | `--background-neutral` |
| Container | Background (selected hover) | `toggle-button.color.background.selected.hover` | `--background-neutral-loud` |
| Label, icon | Color (unselected) | `toggle-button.color.text` | `--text` |
| Label, icon | Color (pressed, selected) | `toggle-button.color.text.selected` | `--text-loud-inverse` |
| Container | Opacity (disabled) | `toggle-button.opacity.disabled` | `--opacity-30` (same as Button.css) |
| Focus ring | Color | `toggle-button.border.focus` | `--border-focus` |
| Focus ring | Width | `toggle-button.border.width.focus` | `--border-width-focus` |
| Container | Height, padding, gap, radius, font | inherited from Button size | Button size tokens |

Contrast, computed from resolved Ripple 0.1.1 values:

| Pair | Light | Dark | Requirement |
|---|---|---|---|
| Selected fill vs surface | 9.47:1 | 9.23:1 | 3:1 (1.4.11) |
| Selected text on selected fill | 9.47:1 | 16.67:1 | 4.5:1 (1.4.3) |
| Selected hover text on selected hover fill | 11.51:1 | 19.69:1 | 4.5:1 (1.4.3) |
| Selected fill vs hover fill | 7.52:1 | not measured | 3:1 (1.4.11) |

---

## Accessibility

- **Element**: `<label>` containing a native `<input type="checkbox">` or `<input type="radio">`. Never a `div` or `span` with a click handler. **Why:** the native input provides role, state, keyboard and form behaviour.
- **State**: exposed by the input's native `checked`. Do not add `aria-checked` or `aria-pressed`. **Why:** a second state attribute duplicates the native one and can drift from it (production does this today; it is removed in this version).
- **Accessible name**: the visible label, via the wrapping `<label>`. Icon-only toggles put `aria-label` on the input. The name never changes between states.
- **Group**: Button Group renders `<fieldset>` + `<legend>`; the legend names the set.
- **Screen reader output** (expected; to be verified, see Open questions):
  - Standalone or multiple: "Archived, checkbox, checked" / "not checked".
  - Single selection: "List, radio button, checked, 1 of 3", preceded by the legend on entry.
- **Focus**: 2px ring in `--border-focus` on the container when the input has `:focus-visible`, using the Button outline offset. Visible independently of hover. Selected and unselected toggles show the same ring.
- **Contrast**: see Design Tokens. All pairs pass WCAG 2.2 AA in both themes.
- **Touch targets**: only `large` (48px) meets the internal 44 × 44px standard. `medium` (40px), `small` (32px) and `xsmall` (24px) all meet the WCAG 2.2 2.5.8 minimum of 24 × 24px. Exception and buffer: on touch-first surfaces use `large`. Elsewhere keep at least `--spacing-25` (4px) between toggles inside a Button Group and `--spacing-50` (8px) to other interactive elements, as Button requires. `xsmall` is for dense desktop layouts only.
- **Tooltip** (icon-only): shows on hover and keyboard focus, stays while hovered, dismisses with Escape (WCAG 1.4.13). The tooltip repeats the accessible name, so it is hidden from assistive technology to avoid a double announcement.
- **Motion**: background and colour transitions (150ms, inherited from Button) are disabled under `prefers-reduced-motion: reduce`. No information is conveyed through motion.
- **Dragging (2.5.7)**: no drag interaction. Not applicable.

### Keyboard

| Key | Standalone / multiple | Single selection (radio) |
|---|---|---|
| Tab / Shift+Tab | Moves to the next / previous toggle | Moves into or out of the group; the group is one Tab stop landing on the selected toggle |
| Space | Toggles on or off | Selects the focused toggle |
| Enter | No action (native checkbox behaviour) | No action (native radio behaviour) |
| Arrow keys | No action | Moves focus and selection to the next / previous toggle, wrapping |

**Why Enter does nothing:** native checkboxes and radios do not respond to Enter, and overriding that would make Toggle Button behave differently from every other Ripple input. This differs from the old draft spec and from Button, and is flagged in Open questions for the screen reader test.

### Mouse

| Action | Result |
|---|---|
| Click | Toggles (multiple) or selects (single) |
| Hover | Shows hover background; shows tooltip on icon-only toggles |

---

## Usage guidelines

- **Match the selection mode to the data.** Mutually exclusive state (one view at a time) is `single`; a set of independent flags (several filters) is `multiple`.
- **One option always stays selected in `single` selection.** Why: a view switcher with nothing selected has no meaning.
- **Icon-only toggles always have a tooltip.** Why: without one, sighted users who do not recognise the icon have no label at all.
- **Do not mix icon-only and label-only toggles in a group.** Why: mixed content breaks rhythm and suggests different behaviours.
- **Low resting presence is intentional.** If users must discover the control without prior knowledge, give the group a visible container (Button Group with padding) or a visible legend.

## Content guidelines

- Use short nouns or adjectives: "List", "Grid", "Archived". Not "Switch to list view".
- Keep labels parallel: "Day / Week / Month", not "Day / Weekly / Monthly".
- Sentence case.
- Keep labels in a group similar in length so widths stay even.
- The label describes the option, never the action. It must not change between states (not "Show filters" / "Hide filters").

---

## Implementation notes

```html
<!-- Standalone -->
<label class="button toggle-button" data-variant="ghost" data-color="neutral" data-size="medium">
  <input class="toggle-button__input" type="checkbox" value="archived">
  Archived
</label>

<!-- Single selection, rendered by Button Group -->
<fieldset class="button-group" data-selection="single">
  <legend>Project view</legend>
  <label class="button toggle-button" data-variant="ghost" data-color="neutral" data-size="small">
    <input class="toggle-button__input" type="radio" name="project-view" value="list" checked>
    List
  </label>
  <label class="button toggle-button" data-variant="ghost" data-color="neutral" data-size="small">
    <input class="toggle-button__input" type="radio" name="project-view" value="grid">
    Grid
  </label>
</fieldset>
```

Class names are proposals for the build; the selected state is driven by `:has(.toggle-button__input:checked)` on the container, so no state class is needed.

## Migration from production

| Production today | This spec | Step |
|---|---|---|
| `groupName="view"` on each toggle | Button Group `selection="single"` | Wrap the toggles in Button Group and remove `groupName` before the next major |
| `size="xs" \| "s" \| "m" \| "l"` | `size="xsmall" \| "small" \| "medium" \| "large"` | Rename values (see Open questions on aliases) |
| `ri-toggle-button--selected` class | `:has(:checked)` | None for React consumers; HTML consumers drop the class |
| `aria-checked` on the input | Removed | None |
| Private `--toggle-button-*` variables from `--color-*` | `toggle-button.*` component tokens aliasing Button | Move any overrides to the component tokens |
| White resting background, hard-coded disabled opacity 0.3 | Transparent, `--opacity-30` token | None (visual only) |

---

## Related components

- [Button](button.md): the parent. Use Button for one-off actions with no persistent state.
- [Button Group](button-group.md): wraps Toggle Buttons and owns single or multiple selection and the selected value.
- [Switch](switch.md): a single setting that applies immediately.
- [Checkbox](checkbox.md) / [Radio](radio.md): selections inside forms with field labels and validation.
- [Tabs](tabs.md): switching between content panels. Tabs navigate; Toggle Buttons act.
- [Tooltip](tooltip.md): required companion for icon-only toggles.
- [Dropdown](dropdown.md) / [Combobox](combobox.md): more than 5 options or limited space.

---

## Open questions

1. **Checkbox semantics in toolbars.** Formatting toggles (Bold, Italic) will be announced as "checkbox". Test with screen reader users on NVDA + Chrome and VoiceOver + Safari, on a toolbar and a filter bar. Below N=5, treat results as provisional. Owner: accessibility specialist.
2. **Enter key.** Native inputs ignore Enter; the previous draft promised Enter toggles. Confirm in the same test whether users expect it. Owner: accessibility specialist.
3. **Who uses `groupName` today?** Search product repos before the deprecation release. Owner: Ripple engineering lead.
4. **Next major date**, so `groupName` removal has a target. Owner: Ripple owner.
5. **Size value aliases.** Accept production `xs/s/m/l` as deprecated aliases for one minor, or rename in one step? Owner: Ripple engineering lead.
6. **Press looks selected.** Acceptable long term for Button and Toggle Button? Revisit if testing shows mis-selection. Owner: DS team.
7. **Dark mode selected vs hover contrast** not yet measured. Owner: DS team, theming pass.
8. **Button spec conflict.** `components/button.md` (ghost neutral row) lists `--background-hover` / `--background-pressed`; `Button.css` uses `--background-neutral-soft` / `--background-neutral`. This spec follows the code. The Button spec needs a patch. Owner: DS team.
9. **Button Group** must ship `selection` with fieldset/legend and radio name management in the same release. It is not yet in the Ripple repo. Owner: Vasco Antunes.
10. **Formatting icons** (Bold, Italic, Underline, List) are missing from the Ripple icon set; toolbar examples cannot be built faithfully. Owner: DS team.
11. **Figma alignment.** The UI Kit has no tooltip on `Type=Icon` variants and no Button Group selection examples. Owner: Vasco Antunes.

---

## Changelog

| Version | Date | Change |
|---|---|---|
| 0.1.0 | 2026-11-17 | Toggle group now points to the Button Group spec; `ToggleButtonGroupContext` gains `value` and `onToggle` so the group owns the selected value. No change to Toggle Button props. |
| 0.1.0 | 2026-11-17 | Disabled opacity aligned to Button.css: `--opacity-30` (was `--opacity-40`, copied from an outdated Button spec row). |
| 0.1.0 | 2026-11-17 | React implementation added (`src/components/ToggleButton/`); status moved to review. Button Group not yet built; stories use a context stand-in. |
| 0.1.0 | 2026-11-17 | Initial draft in the Ripple repo, from the Toggle button exploration (`brief.md`, `decisions.md`). Supersedes the Research draft 0.1.0: markup follows production (label + native input), styles inherit Button ghost neutral, selection moves to Button Group, `groupName` deprecated. |
