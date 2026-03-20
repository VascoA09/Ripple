---
name: Field Label
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [form]
---

# Field Label

## Overview

The Field Label is an optional but highly recommended element for form fields that helps users understand the context of an input. It consists of a label text, optional description, optional/mandatory indicators, and an optional help icon.

---

### Usage

Field Labels should be used to identify the purpose of form fields and guide users on what information to enter. They should be clear, concise, and positioned consistently to support accessibility and usability.

Use Field Labels when:
* Creating forms with input fields that require user input
* Building settings interfaces where users configure options
* Implementing data entry flows where clarity is essential
* Any interface where users need guidance on what to input

Do not use Field Labels when:
* The purpose of the field is completely obvious without any label (rare cases only)
* Using them would create unnecessary visual clutter
* Placeholder text alone is sufficient (not recommended for accessibility)

---

### Anatomy

The Field Label component consists of the following elements:

* **Label Text** (required)
  * Identifies the purpose of the field
  * Font size: `var(--font-size-80)` (typography-caption: 14px)
  * Font weight: `var(--font-weight-semibold)` (600)
  * Color: `var(--text-loud)`
  * Positioned before or after indicators

* **Description** (optional)
  * Provides additional context or instructions
  * Font size: `var(--font-size-80)` (typography-caption: 14px)
  * Font weight: `var(--font-weight-regular)` (400)
  * Color: `var(--text)`
  * Appears below the label text

* **Optional/Mandatory Indicator** (optional)
  * **Required**: Red asterisk (*) after the label
    * Color: `var(--color-negative-loud)`
    * Font weight: `var(--font-weight-semibold)`
  * **Optional**: "(optional)" text after the label
    * Color: `var(--text-soft)`
    * Font weight: `var(--font-weight-regular)`

* **Help Icon** (optional)
  * `HelpCircle` icon (14px) from lucide-react
  * Appears after the label and indicators
  * Shows tooltip with help text on hover/focus
  * Color: `var(--text-soft)` (hover: `var(--color-primary)`)

---

### Label Positioning

Field Labels can be positioned in two ways:

* **Stacked (Default)**
  * Label appears above the form control
  * Suitable for most forms
  * Better for mobile and narrow viewports
  * Allows longer label text
  * Full-width label container

* **Inline**
  * Label appears to the left of the form control
  * Suitable for compact forms
  * Better for desktop forms with short labels
  * Label has fixed width (150-200px)
  * Requires parent wrapper with flex display

**Inline Usage Pattern:**
To use inline labels, wrap both the FieldLabel and the form control in a flex container:

```tsx
<div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-100)' }}>
  <FieldLabel
    label="Country"
    description="Select your residence"
    required
    position="inline"
    htmlFor="country"
  />
  <select id="country" style={{ flex: 1 }}>
    {/* options */}
  </select>
</div>
```

The inline variant sets the label to a fixed width (150-200px) and doesn't expand to full width, allowing the control to appear beside it.

---

### Optional or Mandatory Indicators

When a field has a label, it can be marked as either optional or mandatory:

* **Optional Fields**
  * Display "(optional)" text after the label
  * Use `optional={true}` prop
  * Color: `var(--text-soft)`
  * Only show when it helps users understand the form

* **Mandatory Fields**
  * Display red asterisk (*) after the label
  * Use `required={true}` prop
  * Color: `var(--color-negative-loud)`
  * Always combine with `aria-required="true"` on the input

**Best Practice:** If most fields are required, only mark optional fields. If most fields are optional, only mark required fields.

---

### Help Icon

The Help Icon offers contextual help or clarification about the field's purpose, expected input, or constraints.

**When to use the help icon:**
* Use only when the field requires a non-obvious explanation or has complex rules
* For fields with specific format requirements (e.g., password complexity)
* When providing privacy or security information
* To explain how the data will be used

**When NOT to use the help icon:**
* Information that should be in the label or description
* For every field (causes visual clutter)
* For straightforward fields that don't need explanation
* When a description would be more appropriate

**Content Guidelines for Help Text:**
* Keep help text concise and actionable
* Explain the "why" not just the "what"
* Provide examples when helpful
* Use plain language without jargon
* Typical length: 1-2 sentences

---

### Label Truncation

To avoid long field labels, the Label will truncate when it reaches its maximum width:

* Truncated text shows ellipsis (...)
* Full text appears in tooltip on hover
* Tooltip uses native `title` attribute
* Only truncates when necessary

**Best Practice:** Keep labels short enough to avoid truncation:
* ❌ **Avoid**: "Submit additional comments or questions in here"
* ✅ **Better**: "Additional comments"
* ❌ **Avoid**: "Please enter your full legal name as it appears on official documents"
* ✅ **Better**: "Legal name"

---

### Description

The Description provides supplementary information that helps users understand the context, intent, or requirements of a field.

**When to use:**
* The field requires additional context beyond the label
* There are specific rules, constraints, or formatting instructions
* The purpose might not be immediately clear to all users
* You want to reassure users about privacy or data usage
* The field is complex or uncommon

**When NOT to use:**
* The label alone is sufficient and clear
* Information would be better in a hint or help icon
* It duplicates content already in the label or hint
* It would clutter the interface without adding value

**Content Guidelines:**
* **Clarify, don't repeat**: Expand on the label, don't restate it
* **Be concise**: Keep to 1-2 sentences maximum
* **Use plain language**: Friendly and professional tone
* **Focus on user needs**: Address potential confusion directly
* **Maintain consistency**: Use consistent phrasing across all descriptions

**Examples:**

Good descriptions:
* "We'll never share your email with anyone else"
* "Include country code for international numbers"
* "Choose a password with at least 8 characters"
* "Your responses will remain anonymous"

Bad descriptions:
* "Enter your email" (duplicates label)
* "This field is for your email address where we will send communications and you can update it later in settings" (too long)
* "Input data" (too vague)

---

### Usage in Field Groups

When using Field Labels in a group of inline fields:

* **Do**: Use descriptions consistently across all fields in the group
* **Don't**: Mix fields with and without descriptions (inconsistent visual hierarchy)
* **Alternative**: If only one field needs explanation, use a help icon instead

**Example - Avoid:**
```
First name
[_________]

Last name (Include any middle names here)
[_________]
```

**Example - Better:**
```
First name
[_________]

Last name [?]  ← Help icon with "Include any middle names"
[_________]
```

---

### Content Guidelines

Labels should be clear, concise, and accessible. Follow these principles:

#### Be Clear and Specific
* Use familiar, everyday language
* Avoid jargon, abbreviations, or technical terms
* Make the label describe exactly what to input
* Example: "Email address" not "Email"

#### Keep it Concise
* Use as few words as possible while maintaining clarity
* Aim for one line of text
* Avoid long or complex phrases
* Example: "First name" not "Please enter your first name"

#### Use Sentence Case
* Start with a capital letter, use lowercase for the rest
* Avoid all caps (harder to read, appears as shouting)
* Example: "First name" not "FIRST NAME" or "first name"

#### Avoid Redundancy
* Don't repeat information in the description or hint
* Don't include the word "enter" or "input" in the label
* Example: "Phone number" not "Enter your phone number"

#### Indicate Format Only When Necessary
* If a specific format is required, include it in the description or hint
* Don't clutter the label with format instructions
* Example: Label: "Date of birth" | Description: "MM/DD/YYYY"

#### Support Accessibility
* Associate labels with controls using `htmlFor` attribute
* Never use placeholder text as a substitute for labels
* Provide `aria-label` for fields without visible labels (rare)

#### Use Consistent Terminology
* Use the same terms across the product
* Example: Always "ZIP code" not alternating with "Postal code"
* Maintain a style guide for common field names

---

### Accessibility

Creating accessible Field Labels is crucial for ensuring all users can interact with forms effectively.

#### Labeling and Instructions

* **Label controls**: Use `htmlFor` prop to associate label with input
* **Always provide labels**: Highly recommended for all form fields
* **Clear instructions**: Offer guidance in descriptions when needed
* **Programmatic association**: Ensure labels are linked to controls

#### Required and Optional Fields

* **Mark required fields**: Use red asterisk (*) and set `required` prop
* **Add ARIA attributes**: Use `aria-required="true"` on the input element
* **Don't rely on color alone**: Asterisk provides visual and semantic indication
* **Screen reader support**: Required status is announced automatically

#### Help Icons and Tooltips

* **Keyboard accessible**: Help icons are focusable with Tab key
* **Hover and focus**: Tooltips appear on both mouse hover and keyboard focus
* **ARIA label**: Help buttons include `aria-label="Help information"`
* **Concise content**: Keep help text actionable and clear

#### Visual Clarity

* **Semibold labels**: Better readability and hierarchy
* **Color contrast**: Meets WCAG AA standards (4.5:1 for text)
* **Truncation tooltips**: Full text shown on hover for truncated labels
* **Clear hierarchy**: Visual distinction between label, description, and control

#### Best Practices for Accessibility

* Use `<label>` element with `for` attribute (via `htmlFor` prop)
* Provide clear, descriptive label text
* Use `aria-required="true"` for required fields on the input
* Ensure help icons are keyboard accessible
* Don't rely solely on color to convey information
* Test with screen readers (NVDA, JAWS, VoiceOver)
* Maintain logical tab order in forms

---

### Spacing

The Field Label component uses the following spacing:

* **Gap between label and description**: 0px (no gap - description sits directly below label)
* **Gap between elements in header**: `var(--spacing-25)` (4px)
* **Inline label minimum width**: 120px
* **Inline gap between label and control**: `var(--spacing-100)` (16px)
* **Help tooltip offset**: `var(--spacing-50)` (8px below icon)
* **Help tooltip padding**: `var(--spacing-75) var(--spacing-100)` (12px 16px)

---

### Typography

All text in the Field Label uses Ripple typography tokens:

* **Label Text**:
  * Font family: `var(--font-family)` (Open Sans)
  * Font size: `var(--font-size-80)` (14px - typography-caption)
  * Font weight: `var(--font-weight-semibold)` (600)
  * Line height: `var(--line-height-body)` (150%)
  * Color: `var(--text-loud)`

* **Description**:
  * Font family: `var(--font-family)` (Open Sans)
  * Font size: `var(--font-size-80)` (14px - typography-caption)
  * Font weight: `var(--font-weight-regular)` (400)
  * Line height: `var(--line-height-body)` (150%)
  * Color: `var(--text)`

* **Required Indicator**:
  * Font size: `var(--font-size-80)` (14px)
  * Font weight: `var(--font-weight-semibold)` (600)
  * Color: `var(--color-negative-loud)`

* **Optional Indicator**:
  * Font size: `var(--font-size-80)` (14px)
  * Font weight: `var(--font-weight-regular)` (400)
  * Color: `var(--text-soft)`

* **Help Tooltip**:
  * Font size: `var(--font-size-80)` (14px)
  * Font weight: `var(--font-weight-regular)` (400)
  * Line height: `var(--line-height-body)` (150%)
  * Color: `var(--text-loud-inverse)`

---

### States

The Field Label has minimal interactive states:

* **Default**: Resting state with standard styling
* **Help Icon Hover**: Icon color changes to `var(--color-primary)`
* **Help Icon Focus**: 2px focus outline with 4px offset
* **Help Tooltip Visible**: Appears on hover/focus of help icon
* **Label Truncated**: Shows full text in tooltip on hover

---

### Best Practices

#### Do

* Always provide labels for form fields (highly recommended)
* Use clear, concise language that describes what to enter
* Mark required fields with asterisks and optional fields with "(optional)"
* Use descriptions for additional context when the label alone is insufficient
* Add help icons for complex fields with non-obvious requirements
* Use sentence case for all label text
* Maintain consistent terminology across all forms
* Associate labels with controls using `htmlFor` attribute
* Keep labels short to avoid truncation
* Test with keyboard navigation and screen readers

#### Don't

* Use placeholder text as a substitute for labels
* Duplicate information across label, description, and help text
* Use technical jargon or abbreviations without explanation
* Create unnecessarily long labels that require truncation
* Add descriptions that don't provide meaningful value
* Hide important instructions only in help icons
* Use all caps for label text
* Rely solely on color to indicate required or optional status
* Mix labeled and unlabeled fields in the same form
* Use overly technical or vague language

---

### Examples

#### Basic Label with Required Field

```tsx
<FieldLabel
  label="Email address"
  required
  htmlFor="email"
/>
<input id="email" type="email" required />
```

#### Label with Description and Help

```tsx
<FieldLabel
  label="Password"
  description="Must be at least 8 characters"
  required
  helpText="Use a mix of letters, numbers, and symbols for a strong password"
  htmlFor="password"
/>
<input id="password" type="password" required />
```

#### Optional Field with Inline Positioning

```tsx
<FieldLabel
  label="Phone number"
  description="Include country code"
  optional
  position="inline"
  htmlFor="phone"
/>
<input id="phone" type="tel" />
```

---

### Integration with Other Components

The Field Label is designed to work seamlessly with all form input components:

* **Text inputs**: Standard text, email, password, number, etc.
* **Textareas**: Multi-line text inputs
* **Select dropdowns**: Selection controls
* **Checkboxes**: Use for checkbox groups (individual checkboxes have built-in labels)
* **Radio buttons**: Use for radio groups (individual radios have built-in labels)
* **Switches**: Switches typically have their own integrated labels
* **File uploaders**: Works with custom file upload components
* **Date pickers**: Calendar and date selection inputs

---

### Related Components

* **Checkbox**: Has built-in label functionality for individual checkboxes
* **Radio**: Has built-in label functionality for individual radio buttons  
* **Switch**: Has integrated label positioning
* **Hint**: Provides inline guidance or validation messages below inputs
* **Validation Message**: Shows error, warning, or success messages

---

## Summary

The Field Label component is a fundamental building block for creating accessible, user-friendly forms in the Ripple Design System. By providing clear labels, helpful descriptions, appropriate indicators, and contextual help, you ensure users can successfully complete forms with confidence.

**Key Takeaways:**

1. **Always use labels** - They're essential for accessibility and usability
2. **Keep it simple** - Clear, concise text in sentence case
3. **Be consistent** - Use the same terminology across your application
4. **Support all users** - Follow accessibility best practices
5. **Provide context** - Use descriptions and help text when needed
6. **Mark requirements** - Clearly indicate required vs optional fields
7. **Test thoroughly** - Verify with screen readers and keyboard navigation

---
