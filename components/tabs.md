---
name: Tabs
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation]
---

# Tabs

Tabs are used to section large amounts of related information, allowing users to navigate different views without leaving the page. Tabs always contain at least two items, and only one tab is active at a time. Tabs can be used on full page layouts and can be included in other components such as panels.

---

## Usage

Tabs should be used to group large volumes of related information into different categories/sections.

Use tabs when:
* There is a large amount of content that can be broken down into logical sections
* The user does not need to refer to or switch between tabs to complete a task
* Content is related but can be viewed independently

Do not use tabs when:
* Using them as primary navigation
* Indicating progress or in a step-by-step process
* The user needs to compare information on different tabs simultaneously
* There is only one section of content

Tabs should be ordered logically based on user flows and content priority.

---

## Variants

* **Loud Variant (Default)**
  * **Purpose**: Used for top-level tabs on pages
  * **Visual Style**: Full-width divider that spans all tabs with a 2px bottom border on the selected tab
  * **Usage**: Best for primary navigation within a page or major content sections

* **Soft Variant**
  * **Purpose**: Used for sub-level tabs and within containers
  * **Visual Style**: No visible divider except for the 2px bottom border on the selected tab
  * **Usage**: Best for nested tabs within cards or panels to avoid visual clutter

---

## Sizes

* **Medium Size**
  * **Purpose**: Default tab size for most interfaces
  * **Height**: 40px
  * **Font size**: 16px
  * **Font weight**: Semibold
  * **Padding**: 0px 12px
  * **Usage**: Recommended for desktop and standard layouts

* **Mobile Size**
  * **Purpose**: Larger tabs optimized for touch-enabled devices
  * **Height**: 48px
  * **Font size**: 16px
  * **Font weight**: Semibold
  * **Padding**: 12px 16px
  * **Usage**: Recommended for mobile devices and touch-first interfaces

---

## Selected Tab

* Only one tab can be selected at a time
* The selected tab is indicated by:
  * Background color: `bg-primary-soft`
  * Text color: `text`
  * 2px bottom border in `color-primary`
* The selected tab indicator provides clear visual feedback on the current view

---

## Icons

* Tabs can include an icon before the label
* Icons help users identify content and build familiarity
* Gap between icon and label: 8px (`spacing-50`)
* Icon size: 16px

When using icons in tabs:
* Ensure icons are relevant and support the label meaning
* Use consistent icon styles across all tabs
* Do not use icons in some tabs and not others within the same tab list

---

## Counters

* Tabs can display a counter after the label
* Counters show the number of items or new content in that tab section
* Gap between label and counter: 8px (`spacing-50`)
* Counter size: Medium
* Counter variant: Outline
* Counter color: Neutral

When using counters in tabs:
* Keep counter values updated in real-time when possible
* Use counters consistently across tabs (if one has a counter, others should too, even if 0)
* Consider hiding counters when the value is 0, depending on context

---

## Closable Tabs

* Tabs can be set as closable to allow users to dismiss them
* Closable tabs display a close button (small ghost neutral icon button with X icon) at the end of the tab
* The close button appears on hover or when the tab is selected
* Only the selected tab's close button is keyboard focusable for accessibility
* Clicking the close button triggers the `onClose` callback

Use closable tabs when:
* Managing dynamic content like open documents or files
* Users need control over which tabs are visible
* The number of tabs can grow based on user actions

---

## Tab Menu

* A contextual menu can be added to tabs for additional actions
* The menu is accessed via a small ghost neutral icon button with an ellipsis vertical icon
* The menu button appears before the close button (if present)
* The menu button shows on hover or when the tab is selected
* Clicking the menu button triggers the `onMenuClick` callback

Use tab menus when:
* Additional actions are needed for the selected tab (rename, duplicate, etc.)
* Actions apply to the tab itself, not its content
* You need to provide contextual options without cluttering the interface

---

## States

* **Default**
  * Background: `transparent`
  * Color: `text-soft`
  * The resting state of an unselected tab

* **Hover**
  * Background: `bg-primary-softest`
  * Color: `text`
  * Indicates pointer interaction and reinforces affordance

* **Active (Selected)**
  * Background: `bg-primary-soft`
  * Color: `text`
  * Border bottom: 2px solid `color-primary`
  * Communicates that this tab is currently active

* **Focus**
  * Background: `transparent`
  * Color: `text`
  * Outline: 2px solid `border-focus` with 0px offset
  * Indicates keyboard focus for accessibility

* **Disabled**
  * Same as default state with 30% opacity
  * Cursor: not-allowed
  * Indicates the tab is not interactive

---

## Adaptive Layout

In cases where the parent container does not have enough space for all tabs:

* **Text Truncation**: The longest tab labels are shortened using ellipsis
* **Overflow Arrows**: Optional navigation arrows can scroll the tab list horizontally
* **Dropdown Menu**: A dropdown can provide access to tabs that don't fit
* **Tab List Menu**: A floating menu can show all tabs, positioned at start or end

These adaptive features ensure tabs work well in constrained spaces and responsive layouts.

---

## Accessibility

* All tabs are keyboard accessible (Tab key to navigate, Enter/Space to select)
* Focus state is clearly visible with a 2px border
* Only one tab can be active at a time
* Selected tab has appropriate ARIA attributes
* For closable tabs and tab menus:
  * Navigation behavior varies between Tab key and screen reader virtual cursor
  * Only the selected tab's interactive buttons (menu, close) are focusable via keyboard
* Ensure sufficient color contrast for all states
* Use clear, descriptive labels that work without visual context

---

## Spacing

* Gap between icon and label: 8px (`spacing-50`)
* Gap between label and counter: 8px (`spacing-50`)
* Gap between counter and menu button: 8px (`spacing-50`)
* Gap between menu button and close button: 8px (`spacing-50`)
* Border radius (top corners): 6px (`border-radius-150`)
* Tab content padding: 16px (`spacing-100`) top padding by default

---

## Content Guidelines

* Use sentence case (capitalize the first letter of the first word) unless referring to a name
* Keep tab labels short, concise, and descriptive using plain language
* Try to keep labels to one or two words
* If you need longer tab labels, this may indicate categories are too broad
* Avoid acronyms or abbreviated names unless they are widely understood
* If the tab label is a product name, use the full name
* Make labels action-oriented when appropriate (e.g., "Overview" not "Tab 1")

---

## Best Practices

* Use loud variant for top-level tabs and soft variant for nested tabs
* Order tabs logically based on importance or user workflow
* Limit the number of tabs to 3-7 for optimal usability
* Ensure only one tab is selected at a time
* Use icons consistently across all tabs in a list (or none at all)
* Update counter values in real-time when content changes
* For closable tabs, provide confirmation if closing will lose unsaved data
* Ensure tab labels clearly describe their content
* Test tabs on different screen sizes and implement adaptive behavior
* Don't mix different tab sizes within the same interface
* Use mobile size for touch-enabled devices
* Provide visual feedback for all interactive states
* Consider the entire user journey when ordering tabs
