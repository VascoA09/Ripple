---
name: Checkbox
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [form, input]
---

# Checkbox

## Overview

The Checkbox component is a form input that enables users to select from predefined options. When used on its own, it represents a binary choice, allowing the user to toggle between a checked and unchecked state. In a group, checkboxes allow users to select multiple values from a list of options, offering flexibility in cases where more than one option is permitted.

---

### Usage

Checkboxes should be used to group large volumes of related information into different categories/sections where users can make independent selections.

Use checkboxes when:
* There are multiple options that can be selected independently of one another
* More than one answer may be correct or applicable, such as selecting interests, preferences or filters
* All options should be visible to the user at once, allowing for easy scanning and comparison
* No hierarchy or priority exists between the options
* Appropriate for settings or preferences where users may toggle individual features on or off

Do not use checkboxes when:
* Users must select only one option from a list (use Radio buttons instead)
* Indicating progress or in a step-by-step process
* The user needs mutually exclusive choices (use Radio buttons instead)
* Immediate action is required upon selection (use Switch instead)

---

### Anatomy

**Single Checkbox:**
* **Checkbox input**: The interactive control used to select/unselect the option (16px × 16px)
* **Checkbox label**: Text that provides information about the option

**Checkbox Group:**
* **Checkbox group**: A collection of two or more checkboxes
* **Label area**: Optional but recommended field label to give context about the options
* **Supporting text area**: Optional area for hint and/or validation messages

---

### States

The Checkbox component supports the following states across four values:

| Value | Default | Hover | Active | Focus | Disabled |
|-------|---------|-------|--------|-------|----------|
| Unselected | ☐ | ☐ | ☐ | ☐ | ☐ (dimmed) |
| Selected | ☑ | ☑ | ☑ | ☑ | ☑ (dimmed) |
| Indeterminate | ▣ | ▣ | ▣ | ▣ | ▣ (dimmed) |
| Validation | ☐ | ☐ | ☐ | ☐ | ☐ (dimmed) |

* **Default**: The idle state of the checkbox
* **Hover**: When the user moves the mouse over the checkbox
* **Active**: When the checkbox is being clicked/pressed
* **Focus**: When the user tabs onto the checkbox using the keyboard (2px outline with 2px offset)
* **Disabled**: When the checkbox is not clickable (30% opacity)

---

### Values

* **Unselected**: Empty checkbox (default state)
* **Selected**: Checkbox with checkmark indicating selection
* **Indeterminate**: Checkbox with minus/dash icon, used for parent checkboxes when some but not all children are selected
* **Validation**: Checkbox with colored border indicating validation state

---

### Validation

Use validation to give feedback to the user about the status of the data entered. Validation typically appears after the user has submitted their input.

**Single Checkbox validation:**
* Used to confirm a binary choice (e.g., accepting terms)
* Validation ensures the checkbox is checked when required
* Typically triggered on submission
* Error message example: "You must agree to continue"

**Checkbox group validation:**
* Used when multiple options are presented
* Validation ensures a minimum or maximum number of selections
* Can check for required specific options
* Error message example: "Select at least one option"

**Validation types:**
* **None**: Default state with no validation applied
* **Positive**: Green border/background to communicate input is accepted
* **Notice**: Orange/yellow border/background to inform users about relevant information
* **Negative**: Red border/background to inform users about critical information or errors

---

### Checkbox Label

The Checkbox should always have a clear and concise label. The label appears to the right of the checkbox input and should provide information about the option.

**Standalone checkboxes** (without labels) are only used when:
* Their connection to other components is clear
* They provide sufficient context (e.g., in tables, cards, or panels)

---

### Grouping

When grouping checkboxes:
* Each checkbox group should have a corresponding group label
* The group label provides context for all options in the group
* Use the required indicator (*) when at least one selection is mandatory
* Include optional description text for additional context
* Add hint text for guidance or validation messages

---

### Size

* **Checkbox input**: 16px × 16px
* **Border**: 2px (var(--border-width-200))
* **Border radius**: 4px (var(--border-radius-100))
* **Icon size**: 12px (checkmark or minus)
* **Gap between checkbox and label**: 8px (var(--spacing-50))
* **Label font size**: var(--font-size-80) (typography-caption)

---

### Accessibility

* The individual Checkbox component size, colors, and font size/weights comply with WCAG 2.2 Level AA standards
* Disabled checkboxes are excluded from contrast requirements
* Users can trigger a checkbox by clicking the checkbox input directly or by clicking the label text

---

### Spacing

* Gap between checkbox and label: 8px (var(--spacing-50))
* Gap between checkboxes in a group: 12px (var(--spacing-75))
* Gap between group sections: 16px (var(--spacing-100))
* Label area spacing: 4px (var(--spacing-25)) between label and description

---

### Content Guidelines

* Use clear and concise labels (keep to one line when possible)
* Use sentence case for checkbox labels
* Make labels descriptive and specific
* Avoid negative phrasing (e.g., use "Send notifications" instead of "Don't send notifications")
* For "Other" options, provide a text field for custom input
* Ensure validation messages are helpful and actionable

---

### Colors

**Unselected (Default):**
* Background: var(--bg-surface)
* Border: var(--border-default)
* Label color: var(--text)

**Selected (Default):**
* Background: var(--bg-primary)
* Border: var(--border-primary)
* Icon color: var(--text-loud-inverse)

**Indeterminate (Default):**
* Background: var(--bg-primary)
* Border: var(--border-primary)
* Icon color: var(--text-loud-inverse)

**Validation - Positive:**
* Border: var(--border-positive)
* Background (when checked): var(--bg-positive)

**Validation - Notice:**
* Border: var(--border-notice)
* Background (when checked): var(--bg-notice)

**Validation - Negative:**
* Border: var(--border-negative)
* Background (when checked): var(--bg-negative)

**Hover State:**
* Unselected border: var(--border-primary)
* Selected background: var(--bg-primary-loud)
* Selected border: var(--border-primary-loud)

**Focus State:**
* Outline: 2px solid var(--border-focus)
* Outline offset: 2px

**Disabled State:**
* Opacity: 0.3 (both checkbox and label)

---

### Best Practices

* Always provide clear, descriptive labels for checkboxes
* Use checkbox groups when presenting multiple related options
* Include a group label for checkbox groups to provide context
* Mark required fields with an asterisk (*)
* Use validation messages to help users correct errors
* Avoid using checkboxes for mutually exclusive options (use Radio buttons instead)
* Consider using a Switch component for settings that take immediate effect
* Test checkbox interactions on both mouse and keyboard
* Ensure adequate spacing between checkboxes for easy selection
* Use the indeterminate state for parent checkboxes when appropriate
* Limit the number of options in a group for better usability (typically 2-7 options)
* Order options logically (alphabetically, by frequency, or by importance)
* Provide clear validation feedback when selections are required
* Use consistent checkbox styling across the application