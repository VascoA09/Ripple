---
name: Button Group
status: review
version: 0.1.0
last_updated: 2026-11-17
owner: Vasco Antunes
figma: https://www.figma.com/design/t3ssULnSKXkCRP38TLMxiL/Unit4-design-kit?node-id=17087-787
storybook: Components/Button Group (Ripple repo Storybook)
tags: [action, selection, layout]
---

# Button Group

## Purpose

Button Group groups 2 to 5 related, equal-weight buttons into one control. It owns layout (gap, padding, orientation) and, when used for selection, which [Toggle Buttons](toggle-button.md) belong together and what is selected. It defines no button styles: every visual state belongs to the buttons inside it.

> Source: Button group exploration, `brief.md` and `decisions.md` (2026-11-17). Replaces the Research draft 0.2.0, which predated the Toggle Button decisions (native inputs, group owns selection).

---

## When to use

- Switch between views or modes where exactly one is active (List / Grid / Calendar). `selection="single"`.
- Filter content by several independent values (Draft, Approved). `selection="multiple"`.
- Show 2 to 5 related actions of equal weight side by side (Zoom out / Zoom in, Previous / Next). `selection="action"`.
- Replace a one-off segmented control. A single-selection Button Group is Ripple's segmented control.

## When not to use

| Situation | Use instead | Why |
|---|---|---|
| Actions have a hierarchy (one primary, others secondary) | [Buttons Toolbar](buttons-toolbar.md) | Button Group gives every button the same weight, so a primary action would lose its emphasis |
| Dialog footer with confirm and cancel | [Dialog](dialog.md) footer actions | Same reason: footers carry hierarchy |
| One main action with alternatives | [Split Button](split-button.md) | Alternatives belong behind the main action |
| Switching between content panels | [Tabs](tabs.md) | Tabs navigate between panels; Button Group changes the current content |
| More than 5 options, or long labels | [Dropdown](dropdown.md) or [Combobox](combobox.md) | Button Group never wraps; more options become hard to scan |
| Selecting values in a form with validation | [Radio](radio.md) or [Checkbox](checkbox.md) | Form fields need field labels, hints and validation messages |
| A single on/off setting that applies immediately | [Switch](switch.md) | One binary setting is not a group |

### Where it is used

| Location | Typical use | Mode, variant |
|---|---|---|
| Page and section headers | View switchers | `single`, unpadded inside headers, padded when standalone |
| Filter bars | Status or category filters | `multiple` |
| Toolbars | Equal-weight action pairs | `action`, unpadded (the toolbar manages spacing) |
| Side panels | Mode switching where width is limited | `single`, vertical |

Known product use (Loop page, not verified in code): Timesheets view switcher (`single`), TopGen Maverick action toolbars (`action`).

---

## Anatomy

```
<fieldset>  ┌──────────────────────────────────────┐   padded: surface + border + 4px padding
            │ <legend> (visually hidden)           │
            │ [ child ] 4px [ child ] 4px [ child ]│   children: Toggle Button or Button
            └──────────────────────────────────────┘
```

- **Container**: a `<fieldset>` in every mode. It gives the group a native name (through the legend) and native group disabling (`<fieldset disabled>` disables every child). In the padded variant it carries background, border and padding.
- **Legend**: the group's accessible name. Required. Visually hidden by default; shown with `legendVisible`.
- **Children**: 2 to 5 [Toggle Buttons](toggle-button.md) (`single`, `multiple`) or ghost / outline neutral [Buttons](button.md) (`action`). One style, one size and one content type (all label, all icon, or all icon + label) per group.

**Why a fieldset in every mode, including action:** it is the native element for a named group of controls, and its `disabled` attribute disables every button inside without scripting. The previous draft used `role="group"` / `role="radiogroup"` with `aria-label`; with native inputs in Toggle Button, those roles would duplicate what the fieldset and inputs already expose.

---

## Props

| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `selection` | `'action' \| 'single' \| 'multiple'` | `'action'` | No | What the group does. Decides the children and their input type. |
| `legend` | `string` | none | Yes | Accessible name of the group, rendered as `<legend>`. |
| `legendVisible` | `boolean` | `false` | No | Shows the legend above the group. Use when nothing else on screen labels it. |
| `value` | `string` (single) or `string[]` (multiple) | none | No | Controlled selection. Ignored in `action`. |
| `defaultValue` | `string` (single) or `string[]` (multiple) | none | No | Uncontrolled initial selection. Ignored in `action`. |
| `onChange` | `(value: string \| string[]) => void` | none | No | Fires with the new selection. Single passes a `string`, multiple a `string[]`. |
| `name` | `string` | generated | No | Shared input name for the children. Set it when the group submits in a form. |
| `size` | `'xsmall' \| 'small' \| 'medium' \| 'large'` | `'medium'` | No | Size for every child. Overrides child `size`. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | No | Layout direction. |
| `padded` | `boolean` | `false` | No | Padded variant: surface background, border, 4px padding. |
| `disabled` | `boolean` | `false` | No | Disables every child through `<fieldset disabled>`. |
| `children` | `ReactNode` | none | Yes | 2 to 5 Toggle Buttons (`single`, `multiple`) or Buttons (`action`). |

Other `<fieldset>` attributes (`className`, `style`, `id`, `data-*`) are forwarded.

**Why children plus a group-level value, not an `items[]` array:** the group owns selection, so it owns the value too, and single selection lives in one place. Children stay composable: icons, tooltips and plain Buttons work without a second API. An array was considered and rejected (`decisions.md`).

### Group context

Button Group provides `ToggleButtonGroupContext` (exported from Toggle Button) to its children:

| Field | Type | Purpose |
|---|---|---|
| `selection` | `'single' \| 'multiple'` | Child renders a radio (`single`) or a checkbox (`multiple`) |
| `name` | `string` | Shared input name |
| `size` | size | Overrides the child's size |
| `value` | `string \| string[] \| undefined` | Current selection; the child is checked when its `value` matches |
| `onToggle` | `(childValue: string, checked: boolean) => void` | Child reports a change; the group computes the new value and calls `onChange` |

In `action` mode the group provides no selection context, so a Toggle Button placed there behaves as a standalone toggle. Toggle Button's own props do not change.

**Inside a selection group, set the selection on the group only.** Child `selected` and `defaultSelected` are ignored and each child needs a `value`. **Why:** two sources of truth for one selection is exactly what moving selection to the group removes.

---

## Variants

| Variant | Description | Use when |
|---|---|---|
| Unpadded (default) | No background, border or padding. Children sit flush with the container edge | The group sits inside something that already manages spacing and context: a toolbar, header, card or filter row |
| Padded | `--background-surface`, 1px `--border-neutral`, 4px padding, container radius | The group stands alone and must read as one control on any surface |

**Why the padded variant has a border:** the Figma UI Kit draws it white with no border on a tinted canvas. Most ERPx content areas are white, where a white container disappears. The previous draft avoided this with a surface-dependent grey, which needs consumers to pick the right token. A border works on every surface with one rule (`decisions.md`).

### Orientation

| Orientation | Layout | Use when |
|---|---|---|
| `horizontal` | Row, 4px gap, never wraps | Default |
| `vertical` | Column, 4px gap, children stretch to equal width | Width is constrained (side panels) |

### Sizes

Button Group has no sizes of its own; `size` is passed to every child. Heights follow [Button](button.md): `xsmall` 24px, `small` 32px, `medium` 40px, `large` 48px. The padded variant adds 4px padding and 1px border on each side.

---

## States

Button Group owns no visual states. Hover, pressed, focus, selected and disabled belong to the children ([Toggle Button](toggle-button.md), [Button](button.md)).

| State | Group behaviour | Notes |
|---|---|---|
| Default | Renders children with the current selection | |
| Hover / Focus / Pressed | None at group level | Owned by each child |
| Selected | Group computes which child is checked from `value` | Visual owned by Toggle Button |
| Disabled (group) | `<fieldset disabled>`; every child disabled, current selection stays visible | Native, no script |
| Disabled (one child) | That child only | Set `disabled` on the child |
| Loading | N/A | Selection is local and instant; async results show their own loading state |
| Error | N/A | A group cannot be invalid. Use Radio or Checkbox in a form when validation is needed |

### Selection rules

| Mode | Rule | Why |
|---|---|---|
| `single` | Exactly one child checked. The user cannot clear it. No auto-select: without `value` or `defaultValue`, nothing is checked and a development warning is logged | Auto-selecting the first child would hide a missing default and could set state the product did not intend |
| `multiple` | Any number checked, including none | Filters can be cleared |
| `action` | No selection. Each Button fires `onClick` and returns to rest | Equal-weight actions |

---

## Design Tokens

Button Group adds only container tokens. All button tokens belong to [Toggle Button](toggle-button.md) and [Button](button.md).

| Element | Property | Component token | Semantic token |
|---|---|---|---|
| Container | Gap | `button-group.gap` | `--spacing-25` |
| Container (padded) | Padding | `button-group.padding` | `--spacing-25` |
| Container (padded) | Background | `button-group.color.background` | `--background-surface` |
| Container (padded) | Border colour | `button-group.border.color` | `--border-neutral` |
| Container (padded) | Border width | `button-group.border.width` | `--border-width-100` |
| Container (padded) | Radius | `button-group.border.radius` | `--border-radius-container-default` |
| Legend (visible) | Text | `button-group.legend.color` | `--text` |
| Legend (visible) | Gap to buttons | `button-group.legend.gap` | `--spacing-50` |

**Contrast:** the padded border is 1.26:1 against white. It is a decorative frame, not the visual that identifies the controls: each child's label does that, so WCAG 1.4.11 does not depend on the border. Selected-state contrast is owned by Toggle Button (9.47:1 light, 9.23:1 dark).

---

## Accessibility

- **Element**: `<fieldset>` with a `<legend>` in every mode. No `role="group"`, `role="radiogroup"`, `role="radio"`, `aria-checked` or `aria-pressed`. **Why:** native fieldset and inputs already expose the group, its name and each child's state; extra roles would duplicate state and can drift.
- **Name**: `legend` is required. A selection group without a name fails WCAG 1.3.1 (Info and Relationships). The legend is visually hidden by default because the surrounding UI usually labels the group visibly; use `legendVisible` when it does not.
- **Screen reader output** (expected; to be verified, see Open questions):
  - Single: "Timesheet view, group. List, radio button, checked, 1 of 3".
  - Multiple: "Expense status, group. Draft, checkbox, checked".
  - Action: "Document zoom, group. Zoom out, button".
- **Disabled**: group disabling uses native `<fieldset disabled>`; disabled children leave the Tab order. Toggle Button and Button keep native `disabled`.
- **Focus**: owned by the children. The group adds no focus ring of its own.
- **Touch targets**: inherited from the children. Only `large` (48px) meets the internal 44px standard; all sizes meet WCAG 2.5.8 (24px). The 4px gap is the minimum spacing inside the group; keep `--spacing-50` (8px) between the group and other controls. Use `large` on touch-first surfaces.
- **Motion**: none at group level.
- **Dragging (2.5.7)**: no drag interaction. Not applicable.

### Keyboard

Keyboard behaviour is native in every mode. No custom key handling.

| Key | `single` | `multiple` | `action` |
|---|---|---|---|
| Tab / Shift+Tab | One Tab stop for the group, on the checked option (or the first option when none is checked) | Each toggle | Each button |
| Arrow keys | Move focus and selection, wrapping | No action | No action |
| Space | Selects the focused option | Toggles | Activates |
| Enter | No action | No action | Activates |

**Why no arrow-key navigation in `multiple` and `action`:** native checkboxes and buttons each take a Tab stop, and a group is at most 5 controls. Arrow navigation across controls belongs to a toolbar container. When a Button Group sits inside a toolbar, the toolbar owns that model, so the group staying native avoids two scripts competing for the same keys (`decisions.md`).

---

## Usage guidelines

- **Match the mode to the data.** One active view is `single`; a set of active filters is `multiple`; one-off actions are `action`.
- **Always set a default in `single`.** A view switcher with nothing selected has no meaning.
- **2 to 5 children.** Two is the minimum for a group; more than five is hard to scan.
- **One style, one size, one content type per group.** Mixing breaks the rhythm and suggests a hierarchy the group does not have.
- **Padded when standalone, unpadded when embedded.** If users must find the group without prior knowledge, use padded or a visible legend.
- **Separate groups with a [Divider](divider.md)**, with `--spacing-50` (8px) on each side, when several groups share a row.

## Content guidelines

- The legend names what the group controls: "Timesheet view", "Expense status". Not "Options" or "Buttons".
- Child labels: short nouns or adjectives, parallel form ("Day / Week / Month"), sentence case, similar length.
- Icon-only children need an accessible name and tooltip each (see [Toggle Button](toggle-button.md)).

---

## Implementation notes

```tsx
<ButtonGroup selection="single" legend="Timesheet view" value={view} onChange={setView} size="small" padded>
  <ToggleButton value="list">List</ToggleButton>
  <ToggleButton value="grid">Grid</ToggleButton>
  <ToggleButton value="calendar">Calendar</ToggleButton>
</ButtonGroup>

<ButtonGroup selection="action" legend="Document zoom" size="small">
  <Button variant="ghost" color="neutral" aria-label="Zoom out" iconStart={<ZoomOut size={16} />} />
  <Button variant="ghost" color="neutral" aria-label="Zoom in" iconStart={<ZoomIn size={16} />} />
</ButtonGroup>
```

Rendered markup (single):

```html
<fieldset class="button-group" data-selection="single" data-orientation="horizontal" data-padded>
  <legend class="button-group__legend">Timesheet view</legend>
  <label class="button toggle-button" data-variant="ghost" data-color="neutral" data-size="small">
    <input class="toggle-button__input" type="radio" name="…" value="list" checked> List
  </label>
  …
</fieldset>
```

In `action` mode the group does not set `size` on Buttons automatically (Buttons are not context-aware); set it on each Button. See Open questions.

## Migration from the Research draft 0.2.0

No consumers exist in code, so there is nothing to migrate. For readers of the old draft:

| Draft 0.2.0 | This spec |
|---|---|
| `mode` | `selection` |
| `items[]` | Children |
| `aria-label` (required) | `legend` (required) |
| `variant="padding" \| "no-padding"` | `padded` boolean |
| `onAction(id)` | Each Button's own `onClick` |
| `role="radiogroup"`, `role="radio"`, `aria-checked`, `aria-pressed` | Native fieldset, radios and checkboxes |
| Arrow keys in every mode | Native keyboard |
| `aria-disabled` + `tabIndex={-1}` | Native `disabled` |

---

## Related components

- [Toggle Button](toggle-button.md): the child in `single` and `multiple`. Owns every visual state.
- [Button](button.md): the child in `action` (ghost or outline, neutral).
- [Buttons Toolbar](buttons-toolbar.md): hierarchical page actions with overflow.
- [Split Button](split-button.md): one main action with alternatives.
- [Tabs](tabs.md): switching content panels.
- [Radio](radio.md) / [Checkbox](checkbox.md): selection inside forms with validation.
- [Dropdown](dropdown.md) / [Combobox](combobox.md): more than 5 options.
- [Divider](divider.md): separating groups in one row.

---

## Open questions

1. **Tab-through in dense toolbars.** Is tabbing through each child in `multiple` and `action` acceptable? Test with keyboard and screen reader users on a filter bar and a toolbar with two groups. Below N=5, provisional. Owner: accessibility specialist.
2. **Toolbar keyboard model.** Does TopGen Maverick's action toolbar need arrow navigation across groups? If so, it belongs to a toolbar pattern (token / pattern gap). Owner: TopGen design lead.
3. **Current product implementations.** What do Timesheets and TopGen Maverick render today, and what changes on migration? Owner: engineering leads of both products.
4. **Clearable single selection.** Should `single` allow no selection for clearable filters? Not supported now. Owner: DS team, if a product asks.
5. **Vertical orientation.** Figma has vertical variants but no product use is named. Confirm a use case. Owner: Vasco Antunes.
6. **Action-mode size.** Buttons do not read group context, so `size` must be set on each Button in `action` mode. Make Button context-aware, or accept the duplication? Owner: Ripple engineering lead.
7. **Visually-hidden utility.** Ripple has no shared visually-hidden class; the legend needs one. Proposed utility `.visually-hidden` in foundations. Owner: DS team.
8. **Figma.** Add the padded border, Toggle Button children, sizes and a selected example to the ButtonGroup set (node 17087:787). Confirm the container radius. Owner: Vasco Antunes.
9. **Screen reader output** above is expected, not tested. Owner: accessibility specialist.

---

## Changelog

| Version | Date | Change |
|---|---|---|
| 0.1.0 | 2026-11-17 | React implementation added (`src/components/ButtonGroup/`); status moved to review. |
| 0.1.0 | 2026-11-17 | Initial draft in the Ripple repo, from the Button group exploration (`brief.md`, `decisions.md`). Replaces Research draft 0.2.0: fieldset and legend, composable children, group-level value, native keyboard, bordered padded variant. |
