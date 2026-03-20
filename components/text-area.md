---
name: Text Area
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [form, input]
---

# Text Area

The text area is a multi-line text input that lets users enter and edit longer, freeform content. It is used when the expected input spans more than a single line, such as comments, descriptions, messages, or notes.

---

## Usage

Use the text area when users need to enter multiple lines of text or when the content is expected to be longer than what a single-line text input can accommodate. It is appropriate for open-ended responses such as feedback, descriptions, messages, addresses, or any content where length and formatting freedom are important.

Text areas work best when the expected input is freeform, multi-line, and not highly structured.

Use text areas when:
* Collecting feedback, comments, or detailed explanations
* Building message composition interfaces (email, chat, notes)
* Capturing product reviews or testimonials
* Requesting addresses or multi-line contact information
* Creating forms with open-ended response fields
* Accepting descriptions, bios, or long-form content

Do not use text areas when:
* The expected response is short and fits on a single line (use Text Input instead)
* Users must choose from predefined options (use Select, Dropdown, or Combobox)
* Content requires rich formatting (bold, italic, links) — use a rich text editor
* Entering code with syntax highlighting needs — use a code editor component
* The field benefits from specialized formatting controls or structure

---

## Anatomy

The text area component consists of the following structural elements:

* **Label** — A descriptive text label positioned above the field that identifies what information is expected
* **Input field** — The multi-line editable area where the user types content, with visible border, internal padding, and resize handle (where supported)
* **Placeholder text (optional)** — Light hint text displayed inside the field when it is empty, providing an example or brief guidance
* **Character counter (optional)** — Displays the number of characters entered relative to the maximum allowed, positioned below the field
* **Helper text (optional)** — A short line of supportive text below the field providing additional context or instructions
* **Validation message (optional)** — An error, notice, or success message displayed below the field when validation is triggered
* **Resize handle (optional)** — A visual indicator in the bottom-right corner of the field that allows users to manually resize the text area

---

## Resize Behavior

The text area supports three resize modes to accommodate different use cases:

* **Vertical (Default)**
  * **Purpose**: Users can drag the resize handle to increase or decrease the height of the field
  * **Visual Style**: Resize handle visible in bottom-right corner
  * **Usage**: Most common mode; gives users control over field height
  * **When to use**: Default behavior for most text areas; allows users to adjust height based on their content needs

* **None**
  * **Purpose**: The field has a fixed height and cannot be resized by the user
  * **Visual Style**: No resize handle displayed
  * **Usage**: When layout requires strict height control
  * **When to use**: In tightly controlled layouts where dynamic resizing would break the design; use sparingly as it limits user flexibility

* **Auto**
  * **Purpose**: The field grows automatically in height as the user types, up to an optional maximum height
  * **Visual Style**: No resize handle; field expands dynamically
  * **Usage**: Seamless expansion for growing content
  * **Properties**: Configure `minHeight` and `maxHeight` to control bounds
  * **Behavior**: Once `maxHeight` is reached, content becomes scrollable within the field
  * **When to use**: For dynamic interfaces where content length is unpredictable; reduces scrolling within the field

---

## Default Height (Rows)

The `rows` property sets the initial visible height of the text area, expressed as the number of text lines:

* **Small (3 rows)**: Brief comments or short messages
* **Medium (5 rows)**: Standard descriptions or moderate feedback
* **Large (8+ rows)**: Detailed feedback, long-form content, or extensive notes

The height should reflect the expected length of content:
* Don't make it too small (causing excessive scrolling)
* Don't make it too large (implying more content than needed)

---

## States

* **Default**
  * Border: var(--border-default)
  * Background: var(--bg-surface)
  * The field is idle and ready for interaction
  * Displays the label and optional placeholder text

* **Hover**
  * Border: var(--border-primary)
  * The field border changes appearance when the user hovers over it
  * Signals interactivity

* **Focus**
  * Border: var(--border-focus)
  * Outline: 2px solid var(--border-focus) with 2px offset
  * The field receives keyboard focus
  * The cursor appears inside the field
  * User can begin typing

* **Filled**
  * The user has entered content
  * Placeholder text is replaced by the user's input

* **Disabled**
  * Opacity: 0.3 (reduced visual prominence)
  * Border: var(--border-default)
  * Background: var(--bg-surface)
  * The field is non-interactive
  * Does not respond to clicks or keyboard input
  * Excluded from tab order

* **Read-only**
  * Background: var(--bg-neutral-softest)
  * Border: var(--border-default)
  * The field displays content that cannot be edited
  * Remains focusable for content selection and copying
  * Content can be highlighted and copied but not modified

* **Error**
  * Border: var(--border-negative)
  * Text color: var(--text-negative)
  * Error icon (XCircle) and message displayed below the field
  * The field has failed validation
  * Shows descriptive error message

* **Notice/Warning**
  * Border: var(--border-notice)
  * Text color: var(--text-notice)
  * Notice icon (AlertCircle) and message displayed
  * Indicates warnings or items requiring attention
  * Use for non-critical issues

* **Success**
  * Border: var(--border-positive)
  * Text color: var(--text-positive)
  * Success icon (CheckCircle) and message displayed
  * Indicates passed validation
  * Optional - use when confirmation adds value

---

## Character Limit

An optional character counter can be displayed below the field to indicate how many characters the user has entered relative to a defined maximum. The counter updates in real time as the user types.

**When to use character counter:**
* Messaging interfaces with strict character limits (e.g., tweets, SMS)
* Fields where length constraints are meaningful to users
* When users need awareness of remaining space while typing
* Social media posts, reviews, or bio fields

**Behavior:**
* Display format: "245 / 500" (current / maximum)
* Color: var(--text-soft) when within limit
* Color: var(--text-negative) when limit exceeded
* When limit is reached, further input is blocked
* Counter text changes to error color when approaching limit

**Properties:**
* `maxLength`: Maximum number of characters allowed (number)
* `showCounter`: Boolean to display/hide the counter

**Do not use character counter when:**
* There is no defined maximum length
* The constraint is not relevant to the user's task
* Space is limited and counter adds clutter

---

## Sizing Guidelines

### Width
The text area width should align with surrounding form fields and reflect the expected content:
* Avoid making it narrower than the content users are likely to enter
* This creates unnecessary wrapping and makes content harder to read
* Match width with other form fields for visual consistency
* Use responsive widths that adapt to viewport size

### Height
The height should match the typical amount of content users will enter:
* Set a default height using the `rows` property (default: 3)
* **3 rows**: Brief comments, short messages
* **5 rows**: Moderate descriptions, feedback forms
* **8+ rows**: Long-form content, detailed explanations
* Avoid extremes: too small requires scrolling, too large implies excessive content

### Auto-Resize Configuration
For auto-resizing text areas:
* Define a sensible `minHeight` to prevent the field from becoming too small
* Set a `maxHeight` to prevent the field from growing too tall and breaking layouts
* Example: `minHeight={80}` and `maxHeight={200}` (in pixels)

---

## Spacing

* Space between label and field: var(--spacing-25) (4px)
* Space between field and helper/error text: var(--spacing-25) (4px)
* Space between stacked form fields: var(--spacing-100) to var(--spacing-150) (16px-24px)
* Internal padding: var(--spacing-75) (12px) on all sides
* Border radius: var(--border-radius-200) (8px)
* Gap between helper text and character counter: var(--spacing-100) (16px) when both are present

---

## Placeholder Text

Use placeholder text sparingly and only as a brief example or hint (e.g., "Describe the issue in detail..."). It disappears as soon as the user starts typing, so any critical instructions should be in the label or helper text instead.

**Good placeholder examples:**
* "Describe the issue in detail..."
* "Share your thoughts and feedback..."
* "Enter your message here..."

**Bad placeholder examples:**
* "Please provide detailed feedback about your experience" (too long)
* "Comments" (duplicates label)
* Critical formatting requirements (use helper text)

**Best practices:**
* Keep it short (3-6 words)
* Provide an example, not instructions
* Don't duplicate the label
* Don't include critical information
* Use sentence case

---

## Required and Optional Fields

Follow the same conventions as text inputs:
* If most fields are required, mark optional ones with "(optional)"
* If most fields are optional, mark required ones with an asterisk (*)
* Be consistent throughout the form

**Required fields:**
* Red asterisk (*) with color: var(--color-negative-loud)
* `aria-required="true"` attribute on the textarea element
* `required` attribute for native browser validation

**Visual indicator:**
* Asterisk appears immediately after the label text
* Font weight: var(--font-weight-semibold)
* Color: var(--color-negative-loud)

---

## Helper Text

Helper text provides additional context, instructions, or guidance:

* Font size: var(--font-size-80) (14px)
* Color: var(--text-soft)
* Positioned below the text area
* Remains visible at all times (replaced by validation message when triggered)
* Associated with textarea using `aria-describedby`

**When to use helper text:**
* Clarifying expected format or content structure
* Providing examples of valid input
* Explaining how the data will be used
* Giving hints about character limits or constraints
* Offering guidance on what to include

**Examples:**
* "Provide specific details to help us understand the issue"
* "Your feedback will be shared with our product team"
* "Include any relevant order numbers or dates"

---

## Validation Messages

Error, notice, and success messages replace helper text when validation is triggered:

**Error messages:**
* Color: var(--text-negative)
* Icon: XCircle (12px)
* Associated using `aria-describedby` and `aria-invalid="true"`
* Should be specific and actionable
* Examples:
  * "Feedback is required to submit this form"
  * "Message must be at least 10 characters"
  * "Please remove special characters from your comment"

**Notice messages:**
* Color: var(--text-notice)
* Icon: AlertCircle (12px)
* Indicates warnings or items requiring attention
* Use for non-critical issues
* Examples:
  * "This information will be publicly visible"
  * "Long messages may take longer to process"

**Success messages:**
* Color: var(--text-positive)
* Icon: CheckCircle (12px)
* Confirms successful validation
* Optional - use when confirmation adds value
* Examples:
  * "Thank you for your detailed feedback"
  * "Review submitted successfully"

---

## Label Placement

Labels are positioned above the text area by default. This provides the clearest association and scales well across different viewport sizes.

Inline labels (beside the text area) are not recommended for text areas due to the multi-line nature of the field, which makes vertical alignment challenging and less accessible.

---

## Behavior

### Input Entry
When the user clicks or tabs into the text area, it enters the focus state. The cursor appears inside the field, and the user can begin typing. Placeholder text disappears as soon as the user starts entering a value.

### Line Breaks
Users can press Enter/Return to create new lines within the text area. This is standard behavior for multi-line text input.

### Validation
Validation can occur:
* **On blur**: When the user leaves the field (recommended)
* **On submit**: When the form is submitted
* **Real-time**: As the user types (use sparingly for character count)

The chosen validation strategy should be consistent within a form.

### Character Limit Enforcement
When `maxLength` is set:
* Input is blocked when the limit is reached
* Character counter changes to error color (var(--text-negative))
* User cannot type additional characters
* Screen readers announce when limit is reached via ARIA live region

### Resize Handle Interaction
For `resize="vertical"`:
* Users can drag the bottom-right corner to adjust height
* Handle appears on hover in supporting browsers
* Field maintains minimum height based on `rows` property
* Width remains fixed (only height changes)

For `resize="auto"`:
* No manual resize handle
* Field grows automatically as content is added
* Expands up to `maxHeight` if specified
* Once maximum is reached, content becomes scrollable

---

## Accessibility

* Every text area must have a visible, associated label linked using `for`/`id` attributes
* Placeholder text is not a substitute for labels — screen readers may not reliably announce placeholder content as a label
* Error messages are associated with the field using `aria-describedby` so screen readers announce them when the field receives focus
* Helper text and character counters are also linked via `aria-describedby` to ensure they are announced to assistive technologies
* The field supports full keyboard interaction:
  * Tab to focus the text area
  * Type multi-line content (Enter creates new lines)
  * Tab away from the text area
* Disabled fields are excluded from the tab order
* Read-only fields remain focusable so their content can be selected and copied
* Color is not the sole indicator of state — error and character limit states use text messages and icons in addition to color changes
* When the character limit is reached, an appropriate `aria-live` region or status message informs screen reader users that no further input is permitted
* The resize handle does not interfere with keyboard navigation or screen reader interaction
* Focus state has visible 2px outline with 2px offset for keyboard users
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

**Hover State:**
* Border: var(--border-primary)

**Focus State:**
* Border: var(--border-focus)
* Outline: 2px solid var(--border-focus) with 2px offset

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
* Background: var(--bg-surface)
* Border: var(--border-default)
* Opacity: 0.3 (entire field)
* Text: var(--text-soft)

**Read-only State:**
* Background: var(--bg-neutral-softest)
* Border: var(--border-default)
* Text: var(--text)

---

## Content Guidelines

### Label Text
* Use clear, concise language (1-3 words when possible)
* Use sentence case: "Additional comments" not "ADDITIONAL COMMENTS"
* Describe what information to enter
* Avoid including "enter" or "type" in the label
* Examples:
  * "Feedback"
  * "Message"
  * "Description"
  * "Additional comments"
  * "Tell us more"

### Error Messages
* Be specific about what's wrong
* Guide users to fix issues
* Use plain, friendly language
* Keep to 1-2 sentences
* Examples:
  * Good: "Feedback is required to submit this form"
  * Good: "Message must be at least 10 characters"
  * Good: "Please remove special characters from your comment"
  * Bad: "Error"
  * Bad: "Invalid input"
  * Bad: "Field cannot be empty"

### Helper Text
* Provide context or examples
* Clarify format or constraints
* Explain how data will be used
* Keep brief: 1-2 sentences maximum
* Examples:
  * "Your feedback helps us improve our product"
  * "Include specific details about the issue"
  * "This will be shared with our support team"

---

## Best Practices

* Always provide visible labels for all text areas
* Size the field height to match expected content length using `rows` property
* Enable vertical resize by default (resize="vertical") to give users control
* Use auto-resize (resize="auto") for dynamic interfaces where content length varies
* Display character counters when maximum length is a meaningful constraint
* Provide helpful error messages that guide users to fix issues
* Use helper text to clarify expectations upfront
* Validate on blur or submit, not as users type (except for character count)
* Don't use placeholder text as a replacement for labels
* Don't make the field too small or too large for typical content
* Don't disable resize when users might benefit from adjusting height
* Don't use text areas for single-line input (use Text Input instead)
* Don't hide critical information only in placeholder text
* Don't rely solely on color to indicate state
* Don't disable fields when read-only would be more appropriate
* Maintain consistent validation timing across forms
* Test with keyboard navigation and screen readers
* Ensure sufficient padding for comfortable editing
* Use appropriate `minHeight` and `maxHeight` for auto-resize to prevent layout issues
* Consider mobile devices: ensure adequate touch target size and avoid fixed layouts that don't adapt
* Disable resize (resize="none") only when absolutely necessary for layout integrity
* Show character counter only when there's a defined maximum length
* Place text areas at appropriate width for expected content (not too narrow)

---

## When to Use Text Area vs Text Input

### Use Text Area when:
* Content is expected to span multiple lines
* Input is open-ended and freeform
* Users need to see more context while typing
* Content length is unpredictable
* Formatting freedom is important (paragraphs, line breaks)

### Use Text Input when:
* Content fits on a single line
* Input is brief and structured (names, emails, phone numbers)
* Space is limited
* Field benefits from specialized input type (email, tel, url)
* Character count is typically under 50 characters

---

## When to Use Text Area vs Rich Text Editor

### Use Text Area when:
* Plain text is sufficient
* No formatting controls are needed
* Simplicity is preferred
* Users don't need bold, italic, links, or other rich formatting
* Content is primarily notes, comments, or simple descriptions

### Use Rich Text Editor when:
* Content requires formatting (bold, italic, underline)
* Users need to add links, images, or lists
* Content will be published or displayed with formatting
* Creating articles, blog posts, or formatted documentation
* Users expect word processor-like functionality
