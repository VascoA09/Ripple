---
name: Split Button
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [action, form]
---

# Split Button

A split button combines a primary action button with a secondary dropdown trigger, allowing users to either execute the default action directly or expand a menu of related alternative actions. The two parts are visually joined but function independently.

---

## When to use

Use a split button when there is a clear primary action that users will take most of the time, but a set of closely related secondary actions should also be readily accessible without cluttering the interface with multiple separate buttons.

Common use cases include form submissions with alternative save options (e.g., "Save" vs. "Save and close" vs. "Save as draft"), export controls with format options, or send actions with scheduling alternatives.

## When not to use

Do not use a split button when all actions are equally important — use a button group or separate buttons instead.

Avoid the split button when there is only one action to perform. A standard button is simpler and more appropriate.

Do not use a split button when the secondary actions are unrelated to the primary action. The dropdown should contain variations or alternatives of the same action, not a general-purpose menu.

Avoid using multiple split buttons in close proximity, as this can create visual noise and make the interface harder to scan.

---

## Anatomy

The split button consists of the following structural elements:

1. **Primary action button** — The main clickable area that executes the default action. It displays the action label and functions like a standard button.
2. **Divider** — A vertical separator that visually distinguishes the primary action area from the dropdown trigger.
3. **Dropdown trigger** — A smaller button section containing a chevron icon that opens the secondary actions menu when clicked. It does not repeat the primary action label.
4. **Dropdown menu** — The overlay panel that appears when the trigger is activated, listing the available secondary actions as menu items.

---

## Variants

Split buttons follow the same visual variants as standard buttons:

- **Fill (Primary)** — Used for the most important action on a page or within a section. High visual emphasis.
- **Outline (Secondary)** — Used for supporting actions that are less prominent than the primary. Medium visual emphasis.
- **Ghost (Tertiary)** — A low-emphasis variant with a transparent background, used for tertiary or contextual actions.

---

## Sizes

Split buttons are available in three sizes to match standard button sizing:

- **Small (32px)** — For compact layouts, toolbars, or dense interfaces.
- **Medium (40px - default)** — The standard size suitable for most contexts.
- **Large (48px)** — For prominent or standalone action areas where extra visual weight is appropriate.

---

## Colors

Split buttons support three color variants:

- **Primary** — Used for positive or primary actions (blue). Most common color.
- **Neutral** — Used for secondary or supporting actions (gray).
- **Negative** — Used for destructive actions (red). Use sparingly.

---

## States

### Primary action button states

| State | Description |
|---|---|
| **Default** | The button is idle and ready for interaction. |
| **Hover** | The primary action area is highlighted when the user hovers over it. |
| **Active / Pressed** | The button is being clicked or pressed. |
| **Focus** | The primary action area has keyboard focus, indicated by a visible focus ring. |
| **Disabled** | The entire split button (both primary and trigger) is non-interactive and visually muted. |
| **Loading** | The primary action is processing. A loading indicator replaces or accompanies the label. |

### Dropdown trigger states

| State | Description |
|---|---|
| **Default** | The trigger is idle and ready for interaction. |
| **Hover** | The trigger area is highlighted independently of the primary button on hover. |
| **Active / Pressed** | The trigger is being clicked, opening the dropdown menu. |
| **Focus** | The trigger has keyboard focus, indicated by a visible focus ring. |
| **Open** | The dropdown menu is visible. The chevron rotates to indicate the open state. |

---

## Behaviour

### Primary action

Clicking the primary action button executes the default action immediately. It does not open the dropdown menu.

### Dropdown trigger

Clicking the dropdown trigger opens the secondary actions menu below (or above, if space requires) the split button. It does not execute the primary action.

### Menu dismissal

The dropdown menu closes when the user:
- Selects an action from the menu
- Clicks outside the menu
- Presses Escape

Focus returns to the dropdown trigger on dismissal without selection.

### Disabled state

When the split button is disabled, both the primary action button and the dropdown trigger are non-interactive simultaneously. Individual sections cannot be disabled independently.

### Loading state

When the primary action is in a loading state, the button displays a loading indicator. The dropdown trigger may remain active (allowing the user to select a different action) or be disabled during processing, depending on the use case.

---

## Keyboard interaction

| Key | Behaviour |
|---|---|
| **Tab** | Moves focus between the primary action button and the dropdown trigger as separate focusable elements. |
| **Enter / Space** | Activates the focused element — executes the primary action when the button is focused, or opens the menu when the trigger is focused. |
| **Arrow Down** | When the dropdown menu is open, moves focus to the next menu item. |
| **Arrow Up** | When the dropdown menu is open, moves focus to the previous menu item. |
| **Escape** | Closes the dropdown menu and returns focus to the dropdown trigger. |

---

## Design guidelines

### Primary action label

The primary action label should clearly describe the default action in a concise, active verb form (e.g., "Save", "Export", "Send"). Keep the label short to ensure the split button remains compact and scannable.

### Secondary actions

The actions in the dropdown menu should be directly related to the primary action — variations or alternatives, not unrelated commands. The menu items should follow the same label conventions as the primary action: concise, verb-led descriptions.

Limit the number of secondary actions to avoid overwhelming users. If there are many alternatives, consider a different pattern.

### Sizing consistency

Use the same size for the split button throughout a given context. Do not mix sizes within the same toolbar or form action area.

### Placement

Split buttons are typically placed in form footers, toolbars, or action bars where the primary action needs to be prominent while keeping alternatives accessible. Align them consistently with other action controls in the same area.

### Emphasis

Use the fill variant for the most important action on a view. Use outline or ghost variants for supporting actions or when the context already provides sufficient visual hierarchy.

---

## Accessibility

- The primary action button and the dropdown trigger are implemented as two separate focusable elements, allowing keyboard users to navigate to each independently.
- The primary action button has an accessible label matching its visible text.
- The dropdown trigger has an `aria-label` (e.g., "More actions" or "Show more options") since it contains only an icon.
- The dropdown trigger uses `aria-haspopup="menu"` and `aria-expanded` to communicate the menu state to assistive technologies.
- The dropdown menu uses `role="menu"` and each menu item uses `role="menuitem"`.
- When the menu opens, focus moves to the first menu item.
- Pressing Escape closes the menu and returns focus to the dropdown trigger.
- The disabled state is communicated via the `disabled` attribute or `aria-disabled="true"`, ensuring screen readers announce the non-interactive state.
- The loading state is communicated via an `aria-label` update or a live region announcement so screen reader users are informed that the action is in progress.

---

## Spacing

- Border radius: `var(--border-radius-150)` (6px)
- Divider width: 1px
- Divider opacity: 0.3
- Menu padding: `var(--spacing-25)` (4px)
- Menu item padding: `var(--spacing-50) var(--spacing-75)` (8px 12px)
- Menu item gap: `var(--spacing-50)` (8px)
- Side offset: 4px

---

## Colors

### Light Mode
- Menu background: `var(--bg-surface)` (white)
- Menu border: `var(--border-default)`
- Menu item text: `var(--text)`
- Menu item hover: `var(--bg-app-accent)`
- Divider: Semi-transparent white (fill), currentColor (outline/ghost)

### Dark Mode
- Menu background: `var(--bg-surface)`
- Menu border: `var(--border-default)`
- Enhanced shadow for visibility

---

## Typography

- Font family: `var(--font-family)` (Open Sans)
- Menu item font size: `var(--font-size-80)` (14px)
- Font weight: `var(--font-weight-regular)` (400)
- Line height: `var(--line-height-body)` (150%)

---

## Best Practices

### Content Guidelines

- Use clear, concise action labels (1-2 words when possible)
- Start labels with action verbs (Save, Export, Send)
- Ensure secondary actions are related to the primary action
- Limit menu to 3-7 items for optimal scanability
- Use consistent naming patterns across similar actions

### Usage Guidelines

- Use split buttons when there's a clear primary action
- Place in form footers, toolbars, or action bars
- Match size with other buttons in the same context
- Don't use multiple split buttons in close proximity
- Don't include unrelated actions in the dropdown
- Don't use when all actions are equally important
- Don't disable only one part of the split button

### Visual Guidelines

- Use fill variant for the most important action
- Use outline variant for secondary importance
- Use ghost variant for low-emphasis contexts
- Add icons to provide visual context when helpful
- Maintain consistent spacing with adjacent controls
- Ensure adequate contrast in all states

### Accessibility Guidelines

- Ensure both parts are keyboard accessible
- Provide descriptive aria-label for dropdown trigger
- Test with screen readers to verify announcements
- Ensure focus indicators are clearly visible
- Support full keyboard navigation
- Announce loading states to screen reader users

---

## Common Use Cases

### Form Submissions

Save actions with alternatives:
- Primary: "Save"
- Menu: "Save and close", "Save as draft", "Save as template"

### Export Operations

Download with format selection:
- Primary: "Export"
- Menu: "Export as PDF", "Export as CSV", "Export as Excel"

### Communication Actions

Send with scheduling:
- Primary: "Send"
- Menu: "Send now", "Schedule send", "Send as draft"

### Data Operations

Batch actions with scope:
- Primary: "Apply"
- Menu: "Apply to all", "Apply to selected", "Apply to visible"

---

## Related Components

- **Button** — Use for single actions without alternatives
- **Button Group** — Use when all actions are equally important
- **Dropdown Menu** — Use for general-purpose menus
- **Combobox** — Use for selection from options, not actions
