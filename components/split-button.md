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

1. **SplitButtonAction** — The main clickable area that executes the default action. Displays the action label and functions like a standard button.
2. **SplitButtonTrigger** — A smaller button section containing a chevron icon. Opens the FlyoutMenu when clicked. Does not repeat the primary action label.
3. **FlyoutMenu** — The overlay menu that appears when SplitButtonTrigger is activated. Implemented using Ripple's `FlyoutMenu` component. `SplitButtonTrigger` is passed as `FlyoutMenuTrigger asChild`.

---

## Variants

Split buttons follow the same visual variants as standard buttons, with the exception of Ghost — see below.

- **Fill (Primary)** — Used for the most important action on a page or within a section. High visual emphasis.
- **Outline (Secondary)** — Used for supporting actions that are less prominent than the primary. Medium visual emphasis.

The Ghost variant is not supported for Split Button. A ghost-style split button does not provide sufficient visual affordance to communicate that it contains two independently clickable zones. Use Outline for low-emphasis contexts instead.

---

## Sizes

Split buttons are available in four sizes to match standard button sizing:

- **XSmall (24px)** — For highly compact or read-only toolbar contexts where space is severely constrained. **Does not meet Ripple's 44×44px touch target standard.** Must enforce a minimum 10px spacing buffer around the hit area to compensate, and must be documented explicitly at the usage site. Do not use in forms or primary action areas.
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

Clicking SplitButtonTrigger opens the FlyoutMenu. It does not execute the primary action. The trigger is wired as `FlyoutMenuTrigger asChild`, so the FlyoutMenu root controls open/close state.

### Menu dismissal

FlyoutMenu handles dismissal automatically. The menu closes when the user:
- Selects an item
- Clicks outside the menu
- Presses Escape

On Escape or outside-click, focus returns to SplitButtonTrigger. On item selection, the `onSelect` handler fires and the menu closes.

### Menu positioning

FlyoutMenu positions the panel automatically using viewport collision detection. Use `align="start"` by default. Use `align="end"` if the split button is right-aligned (e.g., in a toolbar or table row). No manual offset adjustment is needed.

### Usage

SplitButtonTrigger is passed as `FlyoutMenuTrigger asChild`. FlyoutMenu owns open/close state and all menu accessibility.

```tsx
<FlyoutMenu>
  <div role="group" aria-label="Save">
    <SplitButtonAction onClick={handleSave}>Save</SplitButtonAction>
    <FlyoutMenuTrigger asChild>
      <SplitButtonTrigger aria-label="More save options" />
    </FlyoutMenuTrigger>
  </div>
  <FlyoutMenuContent align="start">
    <FlyoutMenuItem onSelect={handleSaveAndClose}>Save and close</FlyoutMenuItem>
    <FlyoutMenuItem onSelect={handleSaveAsDraft}>Save as draft</FlyoutMenuItem>
    <FlyoutMenuSeparator />
    <FlyoutMenuItem onSelect={handleSaveAsTemplate}>Save as template</FlyoutMenuItem>
  </FlyoutMenuContent>
</FlyoutMenu>
```

---

### Disabled state

When the split button is disabled, both the primary action button and the dropdown trigger are non-interactive simultaneously. Individual sections cannot be disabled independently.

### Loading state

When the primary action is in a loading state, the button displays a loading indicator. The dropdown trigger may remain active (allowing the user to select a different action) or be disabled during processing, depending on the use case.

---

## Keyboard interaction

| Key | Focused element | Behaviour |
|---|---|---|
| **Tab** | — | Moves focus: Action → Trigger → next focusable element. Action and Trigger are two independent focusable elements; Tab is the correct way to move between them. |
| **Enter / Space** | Action | Executes the primary action. |
| **Enter / Space** | Trigger | Opens the dropdown menu. |
| **Arrow Down / Up** | Open menu | Moves focus between menu items. |
| **Home / End** | Open menu | Moves focus to the first or last menu item. |
| **Escape** | Open menu | Closes the menu and returns focus to the Trigger. |
| **Enter / Space** | Menu item | Selects the item, closes the menu, and returns focus to the Trigger. |

### Why not Left / Right arrow keys between Action and Trigger?

Left and Right arrow key navigation applies to composite widgets — `role="toolbar"`, `role="radiogroup"`, `role="tablist"` — where Tab enters and exits the group as a whole and arrows move within it. Split Button is not a composite widget: Action and Trigger are two independent, focusable buttons. Using arrow keys to move between them would contradict the ARIA Authoring Practices Guide keyboard model and break expectations for keyboard users.

**Toolbar exception:** if a Split Button is placed inside a `role="toolbar"`, Left and Right arrow keys *should* navigate between Action and Trigger as part of the toolbar's roving `tabIndex` pattern. This is the toolbar's behaviour, not the Split Button's own. The Split Button itself requires no additional implementation to support this — the toolbar manages focus.

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

Use the fill variant for the most important action on a view. Use the outline variant for supporting actions or when the context already provides sufficient visual hierarchy. Ghost is not supported — see Variants.

---

## Accessibility

The menu's accessibility foundation is provided by FlyoutMenu, which is built on `@radix-ui/react-dropdown-menu`. Radix handles `role="menu"`, `role="menuitem"`, `aria-haspopup`, `aria-expanded`, focus trapping, keyboard navigation, and focus return on close. Do not re-implement these manually.

**SplitButtonAction:**
- Has an accessible label matching its visible text. No extra ARIA needed.
- In a disabled state, use `aria-disabled="true"` rather than the HTML `disabled` attribute to keep both buttons discoverable by screen readers.

**SplitButtonTrigger:**
- Icon-only. Must have `aria-label="More [action name] options"` (e.g., `"More save options"`).
- Passed as `FlyoutMenuTrigger asChild` — Radix automatically applies `aria-haspopup="menu"` and `aria-expanded` to it.

**Container:**
- Wrap both buttons in `<div role="group" aria-label="[action name]">` so screen readers announce the group before reading each part.

**Disabled state:**
- Use `aria-disabled="true"` on both buttons, not the HTML `disabled` attribute. This keeps both elements reachable and announced by screen readers.

**Loading state:**
- When SplitButtonAction triggers an async operation, use `aria-busy="true"` on the button. Suppress SplitButtonTrigger (disable it) until the operation resolves — opening the menu while the primary action is in-flight is undefined behaviour.

**Focus obscured (WCAG 2.4.11):**
- If Split Button appears in a sticky toolbar or near a portal overlay, verify that the focused SplitButtonTrigger is never fully hidden behind author-created content.

See [FlyoutMenu — Accessibility](./flyout-menu.md#accessibility) for full detail on menu-level requirements and consumer responsibilities.

---

## Spacing

- Border radius: `var(--border-radius-150)` (6px)
- Gap between Action and Trigger: `2px` (no token; use raw value)
- Side offset: 4px

Menu spacing is inherited from FlyoutMenu — see [FlyoutMenu token reference](./flyout-menu.md#token-reference).

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
- Use outline variant for secondary or low-emphasis contexts
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
- **FlyoutMenu** — The menu component used inside Split Button. Use standalone for general-purpose contextual menus not tied to a primary action button
- **Combobox** — Use for selection from options, not actions
