---
name: Hint
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [form, feedback]
---

# Hint

A Hint provides guidance to help users understand what kind of input is expected in a field. It appears directly below the control and is especially useful for clarifying format, examples, or constraints without requiring users to access additional help. Hints improve form completion by reducing ambiguity and preventing errors, particularly in fields with specific formatting requirements or less familiar inputs.

---

## Usage

Hints should be used to provide contextual guidance that helps users enter valid data without errors. They appear below input controls and remain visible at all times.

Use hints when:
* The field requires a specific input format or structure
* An example would help clarify what is expected
* You want to reduce the likelihood of user errors without adding a full description
* The field has specific constraints or validation rules
* Users may be unfamiliar with the expected input format

Do not use hints when:
* The label and description already provide sufficient guidance
* The hint would duplicate existing information
* The field is simple and self-explanatory
* You're using placeholder text that already shows the format
* The information is critical and should be in the label or description instead

---

## Styles

* **Font size**: typography-caption (14px / var(--font-size-80))
* **Font family**: var(--font-family) (Open Sans)
* **Font weight**: var(--font-weight-regular) (400)
* **Line height**: var(--line-height-body) (150%)
* **Color**: var(--text-soft)
* **Spacing from control**: var(--spacing-50) (8px)

---

## Placement

* Position hints directly below the associated input control
* Maintain consistent spacing (8px) between the control and hint
* Hints are always visible, not shown only on hover or focus
* Place hints within the same container as the input they describe

---

## Content Guidelines

* **Be brief and direct**: Use short phrases or examples that clearly illustrate what the user should enter. Avoid full sentences unless absolutely necessary
* **Focus on format or examples**: Hints are ideal for showing expected input formats (e.g. "DD/MM/YYYY") or examples (e.g. "e.g. +44 7123 456789")
* **Avoid repeating the label or description**: Hints should complement, not duplicate, other field elements. If the information is already covered in the label or description, a hint may not be needed
* **Use plain and familiar language**: Write in a tone that is friendly and easy to understand. Avoid technical terms unless they are essential and well understood by the audience
* **Keep it unobtrusive**: Hints should support the user without drawing too much attention. They should not compete visually with the label or control
* **Support accessibility**: Ensure hints are accessible to screen readers and are programmatically associated with the field using aria-describedby. Avoid relying solely on placeholder text, which may disappear when users start typing

---

## Common Hint Patterns

* **Password requirements**: "Must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number"
* **Date format**: "DD/MM/YYYY"
* **Phone number example**: "e.g. +44 7123 456789"
* **Character limits**: "3-20 characters, letters and numbers only"
* **Postal code format**: "UK format: AB12 3CD"
* **File size limits**: "Maximum file size: 10MB"
* **Username rules**: "No spaces or special characters"

---

## Accessibility

* Always provide an `id` prop for the Hint component
* Link the hint to the input using `aria-describedby` on the input element
* Screen readers will announce the hint text when the field receives focus
* Multiple hints can be associated using space-separated IDs in aria-describedby
* Ensure hint text uses sufficient color contrast (WCAG AA compliant)
* Hints remain visible at all times for easy reference
* Use clear, concise language that is meaningful when read out of context

---

## Best Practices

* Always associate hints with inputs using aria-describedby
* Use hints to show format requirements or examples
* Keep hint text brief and focused on one key piece of information
* Place hints consistently below input controls
* Use familiar language that matches your audience
* Show concrete examples when possible
* Test hints with screen readers to ensure they provide value
* Update hints to reflect validation requirements
* Don't use hints to repeat information already in the label or description
* Don't write long paragraphs - keep hints concise and scannable
* Don't rely on placeholder text alone - it disappears when users type
* Don't use hints for critical information that belongs in the label
* Don't place hints in unexpected locations away from the input

---

## Integration with Other Components

Hints work alongside other form elements:

* **Label**: Provides the field name and purpose
* **Description**: Offers additional context or instructions
* **Hint**: Shows format requirements or examples
* **Validation Message**: Displays error or success feedback after interaction

Use these components together to create comprehensive form field guidance:

```tsx
<FieldLabel 
  label="Phone number"
  description="Include country code for international numbers"
  required
  htmlFor="phone"
/>
<input
  id="phone"
  type="tel"
  aria-describedby="phone-hint"
/>
<Hint 
  id="phone-hint"
  text="e.g. +44 7123 456789"
/>
```
