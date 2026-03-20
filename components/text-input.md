---
name: Text Input
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [form, input]
---

# Text Input

Text input lets users enter and edit short, single-line text. It is one of the most fundamental form elements, used across a wide variety of contexts wherever a user needs to type a value — such as a name, email address, search term, or any other freeform text.

---

## Usage

Use the text input when you need to collect a short piece of freeform text from the user. It is appropriate for single-line entries such as names, email addresses, phone numbers, URLs, search queries, or any value that does not require multiple lines.

Text inputs work best when the expected input is relatively brief and predictable in length.

Use text inputs when:
* Collecting names, email addresses, phone numbers, or URLs
* Building search functionality
* Capturing usernames, passwords, or account information
* Requesting structured single-line data (zip codes, account numbers)
* Creating forms where users need to enter brief, freeform text

Do not use text inputs when:
* The expected response is longer than a single line (use Textarea instead)
* Users must choose from predefined options (use Select, Radio, or Autocomplete)
* Entering highly structured data like dates or times (use specialized pickers)
* Multi-value entry is required (use multi-select or tag input)
* The field requires complex formatting or calculations

---

## Anatomy

The text input component consists of the following structural elements:

* **Label** — A descriptive text label positioned above the input field that identifies what information is expected
* **Input field** — The interactive area where the user types their value with visible border and internal padding
* **Placeholder text (optional)** — Light hint text displayed inside the input field when empty
* **Helper text (optional)** — Supportive text below the input providing additional context or instructions
* **Prefix / Suffix (optional)** — Non-editable text or icons placed at the start or end of the input field
* **Validation message (optional)** — Error, notice, or success message displayed below the input when validation is triggered
* **Character counter (optional)** — Shows current/maximum character count when length limits apply

---

## Types

* **Standard text input**
  * **Purpose**: Default single-line input for general-purpose freeform text entry
  * **Usage**: Names, addresses, general text fields

* **Password input**
  * **Purpose**: Text input where entered characters are masked for security
  * **Visual Style**: Includes toggle icon to show or hide password
  * **Usage**: Password fields, secure credentials, PINs

* **Search input**
  * **Purpose**: Text input styled for search functionality
  * **Visual Style**: Includes search icon prefix and clear button when text is entered
  * **Usage**: Search bars, filter inputs, lookup fields

* **Email input**
  * **Purpose**: Text input optimized for email addresses
  * **Validation**: Enforces email format validation
  * **Usage**: Email fields in forms and authentication

* **URL input**
  * **Purpose**: Text input optimized for web addresses
  * **Validation**: Validates URL format
  * **Usage**: Website fields, link inputs

* **Telephone input**
  * **Purpose**: Text input optimized for phone numbers
  * **Keyboard**: Shows numeric keyboard on mobile devices
  * **Usage**: Phone number fields

* **Number input**
  * **Purpose**: Text input that restricts entry to numeric values
  * **Features**: May include increment/decrement controls
  * **Usage**: Quantities, ages, numeric data

---

## Sizes

* **Small Input**
  * **Height**: var(--size-200) (32px)
  * **Font Size**: var(--font-size-80) (14px)
  * **Padding**: 0 var(--spacing-100) (0 16px)
  * **Icon Size**: 14px
  * **Usage**: Dense or compact layouts, data tables, toolbars

* **Medium Input (Default)**
  * **Height**: var(--size-250) (40px)
  * **Font Size**: var(--font-size-100) (16px)
  * **Padding**: 0 var(--spacing-100) (0 16px)
  * **Icon Size**: 16px
  * **Usage**: Standard forms, default size for most contexts

* **Large Input**
  * **Height**: var(--size-300) (48px)
  * **Font Size**: var(--font-size-120) (18px)
  * **Padding**: 0 var(--spacing-125) (0 20px)
  * **Icon Size**: 18px
  * **Usage**: Prominent inputs, search bars, onboarding forms, touch interfaces

---

## States

* **Default**
  * Border: var(--border-default)
  * Background: var(--bg-surface)
  * The input is idle and ready for interaction

* **Hover**
  * Visual feedback when user hovers over the input
  * Signals interactivity

* **Focus**
  * Border: var(--border-focus)
  * Outline: 2px solid var(--border-focus) with 2px offset
  * The cursor appears inside the field
  * Triggered by clicking or tabbing into the field

* **Filled**
  * User has entered a value
  * Placeholder text is replaced by user's input

* **Disabled**
  * Background: var(--bg-neutral-soft)
  * Border: var(--border-default)
  * Opacity: Reduced for label and text
  * The input is non-interactive and excluded from tab order

* **Read-only**
  * Background: var(--bg-neutral-softest)
  * The input displays a value that cannot be edited
  * Remains focusable for content selection and copying

* **Error**
  * Border: var(--border-negative)
  * Text color: var(--text-negative)
  * Error icon (XCircle) and message displayed
  * Prefix/suffix background: var(--bg-negative-softest)
  * Prefix/suffix border: var(--border-negative)
  * Indicates failed validation with descriptive error message

* **Notice/Warning**
  * Border: var(--border-notice)
  * Text color: var(--text-notice)
  * Notice icon (AlertCircle) and message displayed
  * Prefix/suffix background: var(--bg-notice-softest)
  * Prefix/suffix border: var(--border-notice)
  * Indicates warnings or items requiring attention

* **Success**
  * Border: var(--border-positive)
  * Text color: var(--text-positive)
  * Success icon (CheckCircle) and message displayed
  * Prefix/suffix background: var(--bg-positive-softest)
  * Prefix/suffix border: var(--border-positive)
  * Indicates passed validation

---

## Behavior

### Input Entry
When the user clicks or tabs into the text input, it enters the focus state. The cursor appears inside the field, and the user can begin typing. Placeholder text disappears as soon as the user starts entering a value.

### Validation
Validation can occur:
* **On blur**: When the user leaves the field
* **On submit**: When the form is submitted
* **Real-time**: As the user types (use sparingly)

The chosen validation strategy should be consistent within a form.

When validation fails, the input enters the error state with a descriptive error message below the field. When validation succeeds, the input may optionally show a success state.

### Character Limit
An optional character counter can be displayed to indicate how many characters the user has entered relative to a maximum. When the limit is reached, further input is blocked and the counter changes to an error state.

### Clear Action
Search input variants include a clear button (X icon) that appears when the field contains a value. Clicking it removes the entered text and returns the field to its default state while maintaining focus.

### Password Visibility Toggle
Password inputs include an eye icon button that toggles between showing and hiding the password text. The icon changes between Eye and EyeOff to indicate the current state.

### Prefix and Suffix
Prefixes and suffixes are non-editable elements attached to the input field. They provide context about the expected value format:
* **Prefix examples**: $ for currency, @ for mentions, search icon, https://
* **Suffix examples**: .com for domains, units like kg or lbs
* **Styling**: Background and border colors adapt to validation state
* **Default state**: Light gray background (var(--bg-neutral-softest))
* **Validation states**: Background and borders match the validation color
* **Border separators**: Right border for prefix, left border for suffix

They do not affect the submitted value.

---

## Validation States with Prefix/Suffix

When using prefix or suffix with validation states, the affix elements adapt their appearance to match:

**Default State:**
* Prefix/Suffix background: var(--bg-neutral-softest)
* Prefix/Suffix border: var(--border-default)
* Prefix/Suffix text: var(--text-soft)

**Success State:**
* Prefix/Suffix background: var(--bg-positive-softest)
* Prefix/Suffix border: var(--border-positive)
* Prefix/Suffix text: var(--text-positive)

**Notice State:**
* Prefix/Suffix background: var(--bg-notice-softest)
* Prefix/Suffix border: var(--border-notice)
* Prefix/Suffix text: var(--text-notice)

**Error State:**
* Prefix/Suffix background: var(--bg-negative-softest)
* Prefix/Suffix border: var(--border-negative)
* Prefix/Suffix text: var(--text-negative)

---

## Sizing Guidelines

The width of the input should reflect the expected length of the content:
* **Narrow inputs**: Zip codes, age, quantity (80-120px)
* **Medium inputs**: Names, phone numbers (200-300px)
* **Wide inputs**: Email addresses, URLs, search (300-500px)
* **Full-width inputs**: Addresses, longer text (100%)

Avoid making all inputs the same width unless they are part of a uniform grid layout.

---

## Spacing

* Space between label and input: var(--spacing-25) (4px)
* Space between input and helper/error text: var(--spacing-25) (4px)
* Space between stacked form fields: var(--spacing-100) to var(--spacing-150) (16px-24px)
* Internal padding adjusts based on size (see Sizes section)
* Gap between icons and text in prefix/suffix: var(--spacing-50) (8px)
* Prefix/suffix padding: var(--spacing-75) (12px)
* Border radius: var(--border-radius-200) (8px)

---

## Label Placement

Labels should be placed above the input field by default. This provides the clearest association and scales well across different viewport sizes.

Left-aligned labels (beside the input) may be used in compact horizontal forms where vertical space is limited, but this approach requires careful alignment and is less accessible on smaller screens.

---

## Placeholder Text

Use placeholder text sparingly. It should serve as a brief hint or example (e.g., "e.g., john@example.com") — not as a replacement for the label. Placeholder text disappears when the user starts typing, so critical information should always be in the label or helper text.

**Good placeholder examples:**
* "e.g., john@example.com"
* "+1 (555) 123-4567"
* "https://example.com"

**Bad placeholder examples:**
* "Enter your email" (duplicates label)
* Critical formatting requirements (use helper text)
* Long explanatory text (use helper text)

---

## Required and Optional Fields

If most fields in a form are required, mark the optional ones with "(optional)" next to their label. If most fields are optional, mark the required ones with an asterisk (*) or "(required)" text.

Be consistent in your approach throughout the form.

Required fields use:
* Red asterisk (*) with color: var(--color-negative-loud)
* `aria-required="true"` attribute on the input element

---

## Helper Text

Helper text provides additional context, instructions, or guidance:
* Font size: var(--font-size-80) (14px)
* Color: var(--text-soft)
* Positioned below the input field
* Remains visible at all times
* Associated with input using `aria-describedby`

**When to use helper text:**
* Clarifying expected format or structure
* Providing examples of valid input
* Explaining how the data will be used
* Giving hints about character limits or constraints

---

## Validation Messages

Error, notice, and success messages replace helper text when validation is triggered:

**Error messages:**
* Color: var(--text-negative)
* Icon: XCircle (12px)
* Associated with input using `aria-describedby` and `aria-invalid="true"`
* Should be specific and actionable

**Notice messages:**
* Color: var(--text-notice)
* Icon: AlertCircle (12px)
* Indicates warnings or items requiring attention
* Use for non-critical issues

**Success messages:**
* Color: var(--text-positive)
* Icon: CheckCircle (12px)
* Confirms successful validation
* Optional - use when confirmation adds value

**Validation message best practices:**
* Be specific: "Email must include @" not "Invalid email"
* Be actionable: Guide users to fix the issue
* Use plain language: Avoid technical jargon
* Show one error at a time: Don't overwhelm users

---

## Accessibility

* Every text input must have a visible, associated label linked using `for`/`id` attributes
* Placeholder text is not a substitute for labels
* Error messages are associated using `aria-describedby` for screen reader announcement
* Full keyboard support: Tab to focus, type values, Tab away
* Disabled inputs are excluded from tab order
* Read-only inputs remain focusable for selection and copying
* Color is not the sole indicator of state (icons and text messages supplement)
* Password toggle button has accessible label that updates based on visibility state
* Character counters announced to assistive technologies through ARIA attributes
* Focus state has visible 2px outline with 2px offset
* Minimum color contrast ratios (WCAG AA):
  * Text: 4.5:1
  * UI elements (borders): 3:1
  * Placeholder text: 4.5:1

---

## Colors

**Default State:**
* Background: var(--bg-surface)
* Border: var(--border-default)
* Text: var(--text)
* Placeholder: var(--text-soft)

**Focus State:**
* Border: var(--border-focus)
* Outline: 2px solid var(--border-focus)

**Error State:**
* Border: var(--border-negative)
* Message text: var(--text-negative)
* Icon: var(--color-negative)
* Input text: var(--text-negative)

**Notice State:**
* Border: var(--border-notice)
* Message text: var(--text-notice)
* Icon: var(--color-notice)
* Input text: var(--text-notice)

**Success State:**
* Border: var(--border-positive)
* Message text: var(--text-positive)
* Icon: var(--color-positive)
* Input text: var(--text-positive)

**Disabled State:**
* Background: var(--bg-neutral-soft)
* Border: var(--border-default)
* Text: var(--text-soft) with reduced opacity

**Read-only State:**
* Background: var(--bg-neutral-softest)
* Border: var(--border-default)
* Text: var(--text)

---

## Content Guidelines

### Label Text
* Use clear, concise language (1-3 words when possible)
* Start with capital letter, use lowercase for the rest (sentence case)
* Describe what information to enter: "Email address" not "Email"
* Avoid including the word "enter" or "input"

### Error Messages
* Be specific about what's wrong: "Email must include @" not "Invalid"
* Guide users to fix issues: "Password must be at least 8 characters"
* Use plain, friendly language
* Keep to 1-2 sentences
* Examples:
  * Good: "Please enter a valid email address"
  * Good: "Username must be 3-20 characters"
  * Bad: "Error"
  * Bad: "Invalid input"

### Helper Text
* Provide examples: "e.g., john@example.com"
* Clarify format: "Use format: MM/DD/YYYY"
* Explain constraints: "Must be at least 8 characters"
* Keep brief: 1-2 sentences maximum

---

## Best Practices

* Always provide visible labels for all text inputs
* Size input width to match expected content length
* Use appropriate input types (email, tel, url) for better validation and mobile keyboards
* Provide helpful error messages that guide users to fix issues
* Use helper text to clarify format or requirements upfront
* Show password visibility toggle for password fields
* Include character counters when there are length limits
* Validate on blur or submit, not as users type (unless necessary)
* Don't use placeholder text as a replacement for labels
* Don't make all inputs the same width regardless of content
* Don't use text inputs for multi-line content
* Don't hide critical information only in placeholder text
* Don't validate before users have completed their entry
* Don't rely solely on color to indicate state
* Don't disable inputs when read-only would be more appropriate
* Maintain consistent validation timing across forms
* Test with keyboard navigation and screen readers
* Ensure touch targets meet minimum 44×44px on mobile devices
* Use prefix/suffix to provide context (currency symbols, domain suffixes)
* Ensure prefix/suffix backgrounds match validation state colors
