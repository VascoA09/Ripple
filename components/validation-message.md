---
name: Validation Message
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [form, feedback]
---

# Validation Message

The Validation message provides users with feedback about whether the information they have entered into a field meets the required criteria. It helps prevent errors, guides users to correct mistakes, and confirms successful input. Validation messages appear directly below form controls and use color-coded icons to clearly indicate the type of feedback.

---

## Usage

Validation messages should be used to provide clear, actionable feedback about field input after validation has occurred. They guide users toward successful form completion.

Use validation messages when:
* To confirm that user input meets validation requirements
* To clearly explain what is wrong and how to fix errors
* To provide immediate feedback after validation occurs
* To guide users toward successful form completion
* To prevent form submission errors by validating in real-time

Do not use validation messages when:
* To provide general help text (use Hint component instead)
* To show static field descriptions (use Description in FieldLabel)
* Before the user has interacted with the field (wait for blur or submission)
* For information that is not related to validation
* When the field is optional and empty (only show for invalid input)

---

## Variants

The Validation message has three variants, each with a specific purpose and visual treatment:

### Positive

* **Purpose**: Used to communicate that the input is accepted and meets all requirements
* **Visual Style**: 
  * Color: var(--text-positive)
  * Icon: CheckCircle2 (green check mark)
* **Usage**: Provides reassurance and confirmation to users
* **Use cases**: Password meets requirements, promo code applied successfully, username available

### Notice

* **Purpose**: Used to inform the user about something relevant or helpful, but not critical to current task
* **Visual Style**:
  * Color: var(--text-notice)
  * Icon: AlertCircle (orange alert icon)
* **Usage**: Provides warnings or recommendations
* **Use cases**: Character limit warnings, weak password notices, username length suggestions

### Negative

* **Purpose**: Used to inform the user about critical information related to the input
* **Visual Style**:
  * Color: var(--text-negative)
  * Icon: XCircle (red X icon)
* **Usage**: Indicates errors that must be corrected before proceeding
* **Use cases**: Required field errors, invalid format, password mismatch, validation failures

---

## Styles

* **Font size**: typography-caption (14px / var(--font-size-80))
* **Font family**: var(--font-family) (Open Sans)
* **Font weight**: var(--font-weight-regular) (400)
* **Line height**: var(--line-height-body) (150%)
* **Icon size**: 16px
* **Gap between icon and text**: var(--spacing-50) (8px)
* **Spacing from control**: var(--spacing-50) (8px) margin-top
* **Display**: Flex with align-items flex-start

---

## Placement

* Position validation messages directly below the associated input control
* Maintain consistent spacing (8px) between the control and validation message
* Validation messages appear after user interaction (on blur, on change, or on submit)
* Place validation messages within the same container as the input they describe
* Stack multiple form elements with their validation messages vertically

---

## Content Guidelines

* **Be clear and specific**: Explain exactly what is wrong and how to fix it. Avoid vague messages like 'Invalid input' and instead say 'Enter a valid email address'
* **Use a helpful and reassuring tone**: Write in a tone that is supportive rather than critical. Avoid language that might make users feel blamed or confused
* **Keep it concise**: Use short, direct sentences. Focus on what the user needs to do next
* **Avoid technical jargon**: Use plain language that all users can understand. If technical terms are necessary, provide a brief explanation
* **Align with the field's rules**: Ensure the validation message reflects the actual logic or constraints applied to the field (e.g., character limits, required formats)
* **Support accessibility**: Make sure validation messages are programmatically linked to the field and announced by screen readers. Use clear visual indicators alongside text (color and icons)

---

## Common Validation Patterns

**Required Field Errors:**
* "Full name is required"
* "Email address is required"
* "Please select an option"

**Format Errors:**
* "Enter a valid email address"
* "Enter a complete phone number with country code"
* "Date must be in DD/MM/YYYY format"

**Length Validation:**
* "Username must be at least 3 characters"
* "Password must be at least 8 characters"
* "Bio cannot exceed 500 characters"

**Matching Validation:**
* "Passwords do not match"
* "Email addresses do not match"

**Success Confirmations:**
* "Password meets requirements"
* "Username is available"
* "Email address verified"

**Warnings:**
* "You're approaching the 100 character limit (95/100)"
* "Username is short - consider using at least 5 characters"
* "Password strength: weak"

---

## Accessibility

### ARIA Attributes

* Use `aria-describedby` for notice and positive messages
* Use `aria-errormessage` for negative error messages (with `aria-invalid="true"`)
* Include `role="alert"` for negative messages (assertive announcements)
* Include `role="status"` for positive and notice messages (polite announcements)
* Set `aria-live="assertive"` for errors and `aria-live="polite"` for other messages
* Always provide an `id` prop for the ValidationMessage component

### Visual and Text Indicators

* Use both color and icons to convey message type (don't rely on color alone)
* Maintain sufficient color contrast for all variant text colors
* Icons are marked with `aria-hidden="true"` to avoid redundant announcements
* Message text provides all necessary information without relying on visual cues alone

### Timing and Triggers

* Show validation messages after user interaction (on blur or on submit)
* For real-time validation, debounce changes to avoid overwhelming screen readers
* Keep messages visible until the issue is resolved
* Don't show validation errors before the user has attempted to input data

### Integration with Form Controls

* Link validation to inputs using `aria-describedby` or `aria-errormessage`
* Update input border colors to match validation state
* Set `aria-invalid` attribute on inputs with errors
* Ensure validation messages are announced when they appear

---

## Best Practices

* Link validation messages to inputs using aria-describedby or aria-errormessage
* Explain exactly what is wrong and how to fix it
* Use supportive, helpful language
* Show validation after user interaction (blur, submit)
* Update input border colors to match validation state
* Keep messages concise and actionable
* Use icons and color together for clarity
* Test validation messages with screen readers
* Don't show validation errors before the user has interacted with the field
* Don't use vague messages like "Invalid input" or "Error"
* Don't blame the user with language like "You entered this wrong"
* Don't rely solely on color to indicate validation state
* Don't show multiple conflicting validation messages for the same field
* Don't use technical error codes without explanation
* Don't hide validation messages on hover only
* Don't display validation without updating input border colors

---

## Integration with Other Components

Validation messages work alongside other form elements to create comprehensive field guidance:

* **Label**: Provides the field name and purpose
* **Description**: Offers additional context or instructions
* **Hint**: Shows format requirements or examples
* **Validation Message**: Displays error, warning, or success feedback after interaction

**Complete field example:**

```tsx
<FieldLabel 
  label="Email address"
  description="We'll use this to send you important updates"
  required
  htmlFor="email"
/>
<input
  id="email"
  type="email"
  aria-describedby="email-hint email-error"
  aria-invalid={hasError ? 'true' : 'false'}
  style={{
    border: hasError 
      ? 'var(--border-width-100) solid var(--border-negative)'
      : 'var(--border-width-100) solid var(--border-default)'
  }}
/>
<Hint 
  id="email-hint"
  text="e.g. name@example.com"
/>
{hasError && (
  <ValidationMessage
    variant="negative"
    message="Enter a valid email address"
    id="email-error"
  />
)}
```

---

## Visual States

When using validation messages, update the associated input's visual state:

**Error State (Negative):**
* Input border: `var(--border-negative)`
* Input border width: `var(--border-width-100)` (1px)
* Validation message: Negative variant with red text and X icon

**Warning State (Notice):**
* Input border: `var(--border-notice)`
* Input border width: `var(--border-width-100)` (1px)
* Validation message: Notice variant with orange text and alert icon

**Success State (Positive):**
* Input border: `var(--border-positive)`
* Input border width: `var(--border-width-100)` (1px)
* Validation message: Positive variant with green text and check icon

**Default State:**
* Input border: `var(--border-default)`
* Input border width: `var(--border-width-100)` (1px)
* No validation message displayed
