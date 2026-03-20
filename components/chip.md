---
name: Chip
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [display, filter]
---

# Chip

Chips can be used to show, remove, select or unselect an option. They can also be used as a changeable or removable filter. While Buttons are expected to appear consistently and with familiar calls to action, Chips should appear dynamically as a group of multiple interactive elements.

---

## Usage

Chips should be used for dynamic, interactive filtering and selection within groups of options. They provide visual feedback and help users understand their current selections.

Use chips when:
* Showing and labeling data points that can be selected and unselected
* Showing and labeling data points that can be removed
* Creating selectable or removable filter options
* Displaying multiple interactive elements as a group
* Users need to see all available or selected options at once

Do not use chips when:
* Illustrating categorized information (use Tag instead)
* Adding status to a component or UI (use Badge instead)
* Creating a link to another page (use Button instead)
* Implementing primary navigation (use Tabs or Navigation components)
* The element doesn't need to be interactive (use Tag or Badge)

---

## Variants

Chips variants share many of the same properties but fundamentally their behavior differs. There are two main variants:

### Selectable Chips

* **Purpose**: Allow users to select and unselect options from a set
* **Behavior**: Toggle between selected and unselected states
* **Visibility**: Always remain visible in the Chip group
* **Visual indicator**: Show a checkmark when selected
* **Use cases**: Filters, multi-select options, preference selections

### Removable Chips

* **Purpose**: Allow users to remove items from a selection or view
* **Behavior**: Can only be removed, not toggled
* **Visibility**: Disappear from view when removed
* **Visual indicator**: Show a close (X) icon
* **Use cases**: Applied filters, selected tags, active selections that can be cleared

---

## Sizes

Chips have two sizes: **Small** and **Medium**. The size is determined by the height of the Chip as the width stretches to fit the content.

* **Small Chip**
  * **Height**: var(--size-200) (32px)
  * **Padding**: 0 var(--spacing-75) (0 12px)
  * **Gap between elements**: var(--spacing-25) (4px)
  * **Font size**: var(--font-size-80) (14px)
  * **Usage**: Desktop interfaces with mouse/trackpad interaction

* **Medium Chip (Default)**
  * **Height**: var(--size-250) (40px)
  * **Padding**: 0 var(--spacing-100) (0 16px)
  * **Gap between elements**: var(--spacing-50) (8px)
  * **Font size**: var(--font-size-100) (16px)
  * **Usage**: All interfaces, required for touch devices

---

## Accessibility

For accessibility reasons, all Chips must have at least a 48px touch target area on touch-enabled devices. It is advised not to use Small Chips on devices with touch as the primary method of interaction.

* **Touch Targets**: Ensure all Chips meet the minimum 48px touch target on touch-enabled devices
* **Color Contrast**: Maintain 3:1 color contrast ratio against backgrounds for Selectable Chips
* **Focus Indicators**: Provide clear focus indicators (2px border, 2px offset) for keyboard navigation
* **Labels**: Use descriptive labels that clearly communicate the Chip's purpose
* **Keyboard Support**: Support keyboard interactions (Space/Enter to select, Escape to deselect)
* **Screen Readers**: Provide meaningful context for screen reader users

---

## States

### Selectable Chip States

**Default (Unselected)**
* Background: var(--bg-neutral-softest)
* Color: var(--text)
* Border color: var(--color-cool-gray-80)

**Hover (Unselected)**
* Background: var(--bg-neutral-soft)
* Color: var(--text)
* Border color: var(--border-neutral-loud)

**Focus (Unselected)**
* Focus ring: 2px solid var(--border-focus) with 2px offset

**Default (Selected)**
* Background: var(--bg-primary-softest)
* Color: var(--color-primary-loud)
* Border color: var(--border-primary-loud)
* Shows checkmark icon

**Hover (Selected)**
* Background: var(--bg-primary-soft)
* Color: var(--color-primary-loud)
* Border color: var(--border-primary-loud)

---

## Anatomy

**Selectable Chip Elements:**
* **Checkmark** (Selected state only): Position before icon and label (12px small, 16px medium)
* **Icon** (Optional): After checkmark if selected, before label (12px small, 16px medium)
* **Chip label**: Required, describes the content or filter option
* **Counter** (Optional): After label, uses outline variant neutral color

**Removable Chip Elements:**
* **Icon** (Optional): Before label (12px small, 16px medium)
* **Chip label**: Required element
* **Counter** (Optional): After label
* **Close button**: Circular button (20x20px small, 24x24px medium) with X icon

---

## Best Practices

* Use clear, concise labels (1-3 words when possible)
* Use Medium chips on touch devices (meets 48px minimum touch target)
* Use icons for visual context when helpful
* Group related chips using ChipGroup component
* Don't use chips on dark backgrounds (Selectable chips require light backgrounds)
* Don't use chips for navigation (use Buttons or Links)
* Don't use Small chips on touch devices
* Maintain accessibility with proper contrast and keyboard support

---

## Spacing

* **Gap between chips in group**: var(--spacing-50) (8px) or var(--spacing-75) (12px)
* **Internal padding**: Small: 0 12px, Medium: 0 16px
* **Gap between elements**: Small: 4px, Medium: 8px
