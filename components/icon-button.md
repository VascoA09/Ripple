---
name: Icon Button
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [action]
---

# Icon Button

An Icon button is an interactive element that is used to trigger actions. Like the Button, it is used to communicate to users what actions they can take and how to interact with the page.

---

## Variants

* **Fill Button**
  * **Purpose**: Used for the primary or most important action in a section
  * **Visual Style**: Solid background with high-contrast text
  * **Usage**: Limit to one Fill button per section to maintain clear visual hierarchy

* **Outline Button**
  * **Purpose**: Used for secondary actions that support the primary action
  * **Visual Style**: Transparent background with a visible border
  * **Usage**: Can be used alongside a Fill button for less prominent actions

* **Ghost Button**
  * **Purpose**: Used for tertiary or low-emphasis actions
  * **Visual Style**: Minimal styling, no background and no border
  * **Usage**: Ideal for contextual actions or areas with limited visual emphasis

---

## Sizes

* **XSmall Button**
  * **Purpose**: Used in dense interfaces or constrained layouts
  * **Height**: 24px
  * **Usage**: Avoid using as the primary action on touch devices

* **Small Button**
  * **Purpose**: Used for secondary actions or compact layouts
  * **Height**: 32px
  * **Usage**: Not recommended as the main interaction on touch devices

* **Medium Button**
  * **Purpose**: Default Button size for most interfaces
  * **Height**: 40px
  * **Usage**: Recommended for standard desktop and mobile layouts

* **Large Button**
  * **Purpose**: Used for high-emphasis or touch-first interfaces
  * **Height**: 48px
  * **Usage**: Recommended for primary actions on touch devices


For accessibility reasons all Icon buttons must have at least a 44px touch target area on touch enabled devices.
**Tip:** It is advised not to use the Small Icon button on devices with touch as the primary method of interaction.

---

## Colors

* **Primary Button**
  * **Purpose**: Represents positive or non-destructive actions
  * **Usage**: Most commonly used Button color

* **Neutral Button**
  * **Purpose**: Represents secondary or supporting actions
  * **Usage**: Used when the action should not dominate the interface

* **Negative Button**
  * **Purpose**: Represents destructive actions
  * **Usage**: Use for actions such as delete, remove, or exit

---

## States

* **Default**
  * The resting, inactive state of the Icon Button

* **Hover**
  * Indicates pointer interaction and reinforces affordance

* **Focus**
  * Indicates keyboard focus and must be clearly visible

* **Active**
  * Communicates that the Icon Button is being pressed

* **Progress**
  * Indicates an ongoing or incomplete action

* **Disabled**
  * Indicates the Button is not interactive

---

## Accessibility

### Touch target areas
* For accessibility reasons all Icon buttons must have at least a 44px touch target area on touch enabled devices such as smartphones and tablets. 
* It is advised not to use the XSmall or Small Icon button on devices with touch as the primary method of interaction

---

## Tooltip

When using Icon buttons on their own, use a tooltip on hover. This gives the user added context to what the Icon button does and the action that needs to be taken
