---
name: Radio
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [form, input]
---

# Radio

The Radio component allows users to select a single option from a set of mutually exclusive choices. Radio buttons are grouped together in a Radio Group, where selecting one option automatically deselects the previously selected option.

---

## Usage

Radio buttons should be used when users need to select exactly one option from a list of mutually exclusive choices. They make all available options visible at once, making them ideal for short lists where users benefit from seeing all alternatives.

Use Radio buttons when:
* Users must select exactly one option from a set
* All options should be visible simultaneously
* There are 2-6 options to choose from
* The options are mutually exclusive
* You want to encourage users to review all options before choosing
* Changing the selection should be easy and immediate

Do not use Radio buttons when:
* Multiple selections are allowed (use Checkbox instead)
* There are more than 6-8 options (use Dropdown instead)
* Only one option exists (use Checkbox for on/off toggle)
* The selection triggers an immediate action (use Button instead)
* The options are not mutually exclusive

---

## Anatomy

The Radio component consists of the following elements:

### Radio Group
* **Label** (optional) — Describes the group of options
* **Description** (optional) — Additional context about the selection
* **Radio Items** — Individual radio button options
* **Hint** (optional) — Helper text below the radio group
* **Validation Message** (optional) — Error, warning, or success feedback
* **Required Indicator** (*) — Shows when selection is required

### Radio Item
* **Radio Circle** — Circular selection indicator
  * Outer circle (border)
  * Inner dot (appears when selected)
* **Label** — Text describing the option
* **Focus Ring** — Keyboard focus indicator

---

## Layouts

Radio Groups support two layout options:

* **Stacked (Default)**
  * **Purpose**: Vertical layout with each option on its own row
  * **Usage**: Default layout for most use cases
  * **Spacing**: var(--spacing-50) (8px) between items
  * **Benefits**: Easier to scan, better for longer labels

* **Inline**
  * **Purpose**: Horizontal layout with options side-by-side
  * **Usage**: Short labels, limited options (2-4), or constrained vertical space
  * **Spacing**: var(--spacing-100) (16px) between items
  * **Benefits**: Saves vertical space, good for compact forms

---

## Sizes

The Radio component has a single fixed size:

* **Radio circle**: 16×16px
* **Inner dot** (selected): 8×8px (centered within outer circle)
* **Border width**: 2px
* **Label font size**: var(--font-size-100) (16px)
* **Focus ring**: 2px border with 2px offset
* **Touch target**: Minimum 48×48px (includes label and surrounding space)

---

## States

### Unselected States

* **Default (Unselected)**
  * Outer circle: 2px border, var(--border-default)
  * Background: var(--bg-surface)
  * Inner dot: Not visible
  * Label: var(--text)

* **Hover (Unselected)**
  * Outer circle: 2px border, var(--border-primary)
  * Background: var(--bg-primary-soft)
  * Inner dot: Not visible
  * Label: var(--text)
  * Cursor: pointer

* **Focus (Unselected)**
  * Outer circle: 2px border, var(--border-primary)
  * Background: var(--bg-surface)
  * Focus ring: 2px solid var(--border-focus) with 2px offset
  * Inner dot: Not visible
  * Label: var(--text)

### Selected States

* **Default (Selected)**
  * Outer circle: 2px border, var(--border-primary)
  * Background: var(--bg-primary)
  * Inner dot: 8×8px, visible, var(--bg-surface)
  * Label: var(--text)

* **Hover (Selected)**
  * Outer circle: 2px border, var(--border-primary)
  * Background: var(--bg-primary-loud)
  * Inner dot: 8×8px, visible, var(--bg-surface)
  * Label: var(--text)
  * Cursor: pointer

* **Focus (Selected)**
  * Outer circle: 2px border, var(--border-primary)
  * Background: var(--bg-primary)
  * Focus ring: 2px solid var(--border-focus) with 2px offset
  * Inner dot: 8×8px, visible, var(--bg-surface)
  * Label: var(--text)

### Disabled States

* **Disabled (Unselected)**
  * Outer circle: 2px border, var(--border-default)
  * Background: var(--bg-surface)
  * Inner dot: Not visible
  * Label: var(--text-soft)
  * Opacity: 0.3
  * Cursor: not-allowed

* **Disabled (Selected)**
  * Outer circle: 2px border, var(--border-primary)
  * Background: var(--bg-primary)
  * Inner dot: 8×8px, visible, var(--bg-surface)
  * Label: var(--text-soft)
  * Opacity: 0.3
  * Cursor: not-allowed

---

## Validation States

Radio Groups support validation feedback:

* **None (Default)**
  * No validation styling
  * Shows hint text if provided

* **Positive**
  * Validation message color: var(--text-positive)
  * Icon: CheckCircle (green)
  * Indicates successful or valid selection

* **Notice**
  * Validation message color: var(--text-notice)
  * Icon: AlertCircle (yellow/orange)
  * Indicates warning or attention needed

* **Negative**
  * Validation message color: var(--text-negative)
  * Icon: XCircle (red)
  * Indicates error or invalid selection

---

## Behavior

### Selection

* **Mutually Exclusive**: Only one radio button can be selected at a time
* **Click to Select**: Click radio circle or label to select
* **Automatic Deselection**: Selecting a new option automatically deselects the previous
* **Cannot Deselect**: Once an option is selected, user cannot return to "none selected" state (use Checkbox if this is needed)
* **Immediate Feedback**: Selection changes immediately upon interaction

### Keyboard Navigation

* **Tab**: Move focus between radio buttons in the group
* **Arrow Keys**: 
  * Arrow Down/Right: Move to next radio button and select it
  * Arrow Up/Left: Move to previous radio button and select it
* **Space**: Select focused radio button
* **Enter**: Select focused radio button (optional, Space is preferred)

### Mouse Interaction

* Click radio circle to select
* Click label text to select
* Hover provides visual feedback
* Entire label area is clickable

---

## Properties

### RadioGroup Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | string | required | Currently selected radio value |
| `onValueChange` | function | required | Callback when selection changes |
| `name` | string | auto-generated | Name attribute for radio group |
| `label` | string | — | Label for the radio group |
| `description` | string | — | Description text for context |
| `hint` | string | — | Helper text below radio buttons |
| `validation` | 'none' \| 'positive' \| 'notice' \| 'negative' | 'none' | Validation state |
| `validationMessage` | string | — | Validation feedback message |
| `required` | boolean | false | Whether selection is required |
| `disabled` | boolean | false | Disable entire group |
| `layout` | 'stacked' \| 'inline' | 'stacked' | Layout direction |
| `className` | string | — | Optional CSS class |
| `style` | CSSProperties | — | Optional inline styles |

### Radio Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | string | required | Value of this radio option |
| `label` | string | — | Label text for the option |
| `disabled` | boolean | false | Disable this specific option |
| `className` | string | — | Optional CSS class |
| `style` | CSSProperties | — | Optional inline styles |

---

## Spacing

Use Ripple spacing tokens for all spacing:

* **Stacked layout**:
  * Gap between radio items: var(--spacing-50) (8px)
  * Gap between label area and radio items: var(--spacing-50) (8px)

* **Inline layout**:
  * Gap between radio items: var(--spacing-100) (16px)
  * Gap between label area and radio items: var(--spacing-50) (8px)

* **Radio item internal**:
  * Gap between circle and label: var(--spacing-50) (8px)
  * Radio circle size: 16×16px
  * Inner dot size: 8×8px
  * Focus ring offset: 2px

* **Group spacing**:
  * Gap between label and description: var(--spacing-25) (4px)
  * Gap between radio items and hint: var(--spacing-50) (8px)
  * Gap between radio items and validation: var(--spacing-50) (8px)

---

## Accessibility

* **ARIA Roles**: 
  * Radio group uses `role="radiogroup"`
  * Individual radios use native `<input type="radio">`

* **ARIA Attributes**:
  * `aria-labelledby` links group to label
  * `aria-describedby` links to hint/validation messages
  * `aria-required="true"` when required
  * `aria-disabled="true"` for disabled items
  * `aria-checked` state managed automatically

* **Keyboard Support**:
  * Full keyboard navigation with Tab and arrow keys
  * Arrow keys select and move focus
  * Space/Enter to select focused radio
  * Cannot deselect with keyboard (by design)

* **Focus Management**:
  * Clear visible focus indicators (2px ring, 2px offset)
  * Focus moves through radio buttons in logical order
  * First radio receives focus when tabbing to group
  * Focus persists on selected item when returning to group

* **Labels**:
  * All radio buttons must have associated labels
  * Labels are clickable to select radio
  * Group label describes the set of options
  * Required indicator (*) for mandatory selections

* **Touch Targets**:
  * Radio circle + label creates 48×48px minimum touch target
  * Adequate spacing between radios for accurate selection
  * Entire label area is tappable

* **Screen Readers**:
  * Radio group label announced first
  * Each radio option announced with label
  * Selection state announced (selected/not selected)
  * Position in group announced (1 of 3, etc.)
  * Required state announced
  * Validation messages announced

* **Color Contrast**:
  * Text meets 4.5:1 contrast ratio
  * Radio indicators meet 3:1 contrast ratio
  * Focus indicators clearly visible
  * Don't rely on color alone for validation states

---

## Colors

**Unselected Default:**
* Outer circle border: var(--border-default)
* Background: var(--bg-surface)
* Label: var(--text)

**Unselected Hover:**
* Outer circle border: var(--border-primary)
* Background: var(--bg-primary-soft)
* Label: var(--text)

**Unselected Focus:**
* Outer circle border: var(--border-primary)
* Background: var(--bg-surface)
* Focus ring: var(--border-focus)
* Label: var(--text)

**Selected Default:**
* Outer circle border: var(--border-primary)
* Background: var(--bg-primary)
* Inner dot: var(--bg-surface)
* Label: var(--text)

**Selected Hover:**
* Outer circle border: var(--border-primary)
* Background: var(--bg-primary-loud)
* Inner dot: var(--bg-surface)
* Label: var(--text)

**Selected Focus:**
* Outer circle border: var(--border-primary)
* Background: var(--bg-primary)
* Focus ring: var(--border-focus)
* Inner dot: var(--bg-surface)
* Label: var(--text)

**Disabled:**
* Outer circle border: var(--border-default) or var(--border-primary) (if selected)
* Background: var(--bg-surface) or var(--bg-primary) (if selected)
* Inner dot: var(--bg-surface) (if selected)
* Label: var(--text-soft)
* Opacity: 0.3

**Validation:**
* Positive: var(--text-positive)
* Notice: var(--text-notice)
* Negative: var(--text-negative)

---

## Content Guidelines

### Group Label

* Use clear, concise language: "Shipping method", "Payment option"
* Ask a question: "How would you like to be contacted?"
* Use sentence case
* Keep brief (2-5 words)
* Make it descriptive of the choice being made

### Group Description

* Provide additional context when needed
* Explain the impact of the choice
* Keep it brief (1-2 sentences)
* Use plain language

### Radio Labels

* Be specific and clear
* Keep concise (1-5 words)
* Use parallel structure across options
* Use sentence case
* Don't end with punctuation
* Make each option distinct

**Good examples:**
* "Standard shipping (5-7 days)"
* "Express shipping (2-3 days)"
* "Overnight shipping (1 day)"

### Hint Text

* Provide helpful context or instructions
* Explain what the selection affects
* Keep brief and actionable
* Use plain language

### Validation Messages

* Be specific about the error: "Please select a shipping method"
* Be helpful: "Choose one payment option to continue"
* Use positive language when possible
* Keep concise (1 sentence)

---

## Best Practices

### Do

* Use radio buttons for mutually exclusive choices
* Show all available options at once
* Provide clear, distinct labels for each option
* Use stacked layout for easier scanning
* Group related options together
* Provide a default selection when appropriate
* Use descriptive group labels
* Include helper text when choices need explanation
* Ensure adequate spacing between options
* Make entire label clickable

### Don't

* Don't use radio buttons for non-exclusive choices (use Checkbox)
* Don't use for more than 6-8 options (use Dropdown)
* Don't hide options or require scrolling to see all choices
* Don't use radio buttons for actions (use Button)
* Don't allow deselection to "none selected" state
* Don't use vague labels ("Option 1", "Choice A")
* Don't mix disabled and enabled radios without clear indication
* Don't use inline layout for long labels
* Don't rely on color alone to show selection
* Don't forget keyboard navigation

---

## Common Patterns

### Basic Radio Group (Controlled)
```typescript
const [value, setValue] = useState('option1');

<RadioGroup value={value} onValueChange={setValue}>
  <Radio value="option1" label="Option 1" />
  <Radio value="option2" label="Option 2" />
  <Radio value="option3" label="Option 3" />
</RadioGroup>
```

### With Group Label and Description
```typescript
<RadioGroup
  value={shipping}
  onValueChange={setShipping}
  label="Shipping method"
  description="Choose how you'd like to receive your order"
>
  <Radio value="standard" label="Standard shipping (5-7 days)" />
  <Radio value="express" label="Express shipping (2-3 days)" />
  <Radio value="overnight" label="Overnight shipping (1 day)" />
</RadioGroup>
```

### With Validation
```typescript
<RadioGroup
  value={payment}
  onValueChange={setPayment}
  label="Payment method"
  required={true}
  validation="negative"
  validationMessage="Please select a payment method"
>
  <Radio value="credit" label="Credit card" />
  <Radio value="paypal" label="PayPal" />
  <Radio value="bank" label="Bank transfer" />
</RadioGroup>
```

### Inline Layout
```typescript
<RadioGroup
  value={answer}
  onValueChange={setAnswer}
  label="Are you sure?"
  layout="inline"
>
  <Radio value="yes" label="Yes" />
  <Radio value="no" label="No" />
</RadioGroup>
```

### With Disabled Option
```typescript
<RadioGroup value={plan} onValueChange={setPlan} label="Select plan">
  <Radio value="free" label="Free" />
  <Radio value="pro" label="Pro" />
  <Radio value="enterprise" label="Enterprise" disabled={true} />
</RadioGroup>
```

### With Hint Text
```typescript
<RadioGroup
  value={frequency}
  onValueChange={setFrequency}
  label="Email frequency"
  hint="You can change this preference anytime in settings"
>
  <Radio value="daily" label="Daily digest" />
  <Radio value="weekly" label="Weekly summary" />
  <Radio value="never" label="Never" />
</RadioGroup>
```

---

## Related Components

* **Checkbox**: Use for multiple selections or single on/off toggles
* **Switch**: Use for immediate on/off actions
* **Dropdown**: Use for more than 6-8 options
* **Tabs**: Use for switching between views or content areas
* **Button**: Use for actions rather than selections
* **Field Label**: Used for labeling form fields
* **Validation Message**: Displays validation feedback

---

## Common Use Cases

* **Form selections**: Shipping methods, payment options, account types
* **Settings**: Notification preferences, privacy settings
* **Surveys**: Multiple choice questions with single answers
* **Filters**: Sort order, view mode (list/grid)
* **Wizards**: Step-by-step form selections
* **Preferences**: Language selection, theme choice
* **Yes/No questions**: Binary choices with clear options

---

## Typography

All text uses Ripple typography tokens:

* **Group label**: var(--font-size-80) (14px), var(--font-weight-semibold)
* **Group description**: var(--font-size-80) (14px), var(--font-weight-regular)
* **Radio label**: var(--font-size-100) (16px), var(--font-weight-regular)
* **Hint text**: var(--font-size-80) (14px), var(--font-weight-regular)
* **Validation message**: var(--font-size-80) (14px), var(--font-weight-regular)
* **Required indicator (*)**: var(--font-size-80) (14px)
* **Font family**: var(--font-family) (Open Sans)
* **Line height**: var(--line-height-body) (150%)

---

## Technical Notes

* Built with native HTML `<input type="radio">` for accessibility
* Uses React Context to manage group state
* Controlled component pattern (requires `value` and `onValueChange`)
* Auto-generates unique `name` attribute if not provided
* Supports custom styling via className and style props
* Keyboard navigation follows standard radio button behavior
* Focus management handled automatically
* Compatible with form libraries (React Hook Form, Formik, etc.)
