---
name: Radio
status: stable
version: 1.1.0
last_updated: 2026-04-01
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
* **Legend** — Rendered via Ripple's `FieldLabel` component inside the `<legend>` element. Supports:
  * **Label** (optional) — Describes the group of options
  * **Description** (optional) — Sub-label below the label text
  * **Required indicator** (*) — Shown when `required` is true
  * **Optional indicator** ("optional") — Shown when `optional` is true; mutually exclusive with required
  * **Help tooltip** — Icon button with tooltip when `helpText` is provided
* **Hint** (optional) — Rendered via Ripple's `Hint` component, positioned between the legend and the radio items
* **Radio Items** — Individual radio button options
* **Validation Message** (optional) — Error, warning, or success feedback with contextual icon

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
* **Border width**: 1px
* **Label font size**: var(--font-size-80) (14px)
* **Focus ring**: 2px border with 2px offset
* **Touch target**: Minimum 48×48px for standalone use. Inside a `RadioGroup`, `min-height` is set to `100%` so items size to their content rather than enforcing the fixed 48px floor.

---

## States

### Unselected States

* **Default (Unselected)**
  * Outer circle: 1px border, var(--border-default)
  * Background: var(--bg-surface)
  * Inner dot: Not visible
  * Label: var(--text)

* **Hover (Unselected)**
  * Outer circle: 1px border, var(--border-primary)
  * Background: var(--bg-primary-soft)
  * Inner dot: Not visible
  * Label: var(--text)
  * Cursor: pointer

* **Focus (Unselected)**
  * Outer circle: 1px border, var(--border-primary)
  * Background: var(--bg-surface)
  * Focus ring: 2px solid var(--border-focus) with 2px offset
  * Inner dot: Not visible
  * Label: var(--text)

### Selected States

* **Default (Selected)**
  * Outer circle: 1px border, var(--border-primary)
  * Background: var(--bg-primary)
  * Inner dot: 8×8px, visible, var(--bg-surface)
  * Label: var(--text)

* **Hover (Selected)**
  * Outer circle: 1px border, var(--border-primary)
  * Background: var(--bg-primary-loud)
  * Inner dot: 8×8px, visible, var(--bg-surface)
  * Label: var(--text)
  * Cursor: pointer

* **Focus (Selected)**
  * Outer circle: 1px border, var(--border-primary)
  * Background: var(--bg-primary)
  * Focus ring: 2px solid var(--border-focus) with 2px offset
  * Inner dot: 8×8px, visible, var(--bg-surface)
  * Label: var(--text)

### Disabled States

* **Disabled (Unselected)**
  * Outer circle: 1px border, var(--border-default)
  * Background: var(--bg-surface)
  * Inner dot: Not visible
  * Label: var(--text-soft)
  * Opacity: 0.3
  * Cursor: not-allowed

* **Disabled (Selected)**
  * Outer circle: 1px border, var(--border-primary)
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
| `value` | `string` | required | Currently selected radio value |
| `onValueChange` | `(value: string) => void` | required | Callback when selection changes |
| `name` | `string` | auto-generated | Name attribute for the radio group |
| `label` | `string` | — | Group label, rendered via FieldLabel inside `<legend>` |
| `description` | `string` | — | Sub-label below the legend. Forwarded to FieldLabel |
| `required` | `boolean` | `false` | Appends a required asterisk to the legend |
| `optional` | `boolean` | `false` | Appends "(optional)" to the legend. Mutually exclusive with `required` |
| `helpText` | `string` | — | Tooltip on the legend help icon. Forwarded to FieldLabel |
| `hint` | `string` | — | Helper text rendered via Hint, between legend and items |
| `validation` | `'positive' \| 'notice' \| 'negative'` | — | Validation state |
| `validationMessage` | `string` | — | Validation feedback message with contextual icon |
| `disabled` | `boolean` | `false` | Disables all radios in the group |
| `layout` | `'stacked' \| 'inline'` | `'stacked'` | Layout direction |
| `className` | `string` | — | Applied to the root fieldset element |
| `style` | `CSSProperties` | — | Inline styles on the root element |

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
  * Standalone `Radio` enforces `min-height: 48px` for touch compliance
  * Inside `RadioGroup`, `min-height` is `100%` so items size to content; the group's internal spacing provides the interaction buffer
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
* Outer circle border: 1px var(--border-default) or var(--border-primary) (if selected)
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

* **Group label**: var(--font-size-80) (14px), var(--font-weight-semibold) — rendered by FieldLabel
* **Group description**: var(--font-size-80) (14px), var(--font-weight-regular) — rendered by FieldLabel
* **Radio label**: var(--font-size-80) (14px), var(--font-weight-regular)
* **Hint text**: var(--font-size-80) (14px), var(--font-weight-regular) — rendered by Hint component
* **Validation message**: var(--font-size-80) (14px), var(--font-weight-regular)
* **Required indicator (*)**: var(--font-size-80) (14px) — rendered by FieldLabel
* **Font family**: var(--font-family-base) (Open Sans)
* **Line height**: var(--font-line-height-body) (~150%)

---

## Technical Notes

* Built with native HTML `<input type="radio">` for accessibility
* Uses React Context to share group state with child `Radio` items
* Controlled component pattern — requires `value` and `onValueChange`
* Auto-generates a unique `name` attribute when none is provided
* `RadioGroup` legend rendered via Ripple's `FieldLabel` (inside `<legend>`) for consistent typography, `description`, `optional`, and `helpText` tooltip support
* `hint` rendered via Ripple's `Hint` component, positioned between the legend and the items
* Validation message includes a contextual icon (CheckCircle / AlertCircle / XCircle) with `margin-top: 3px` for optical alignment with text cap height
* `min-height: 48px` on standalone `Radio`; overridden to `100%` inside `RadioGroup`
* Compatible with form libraries (React Hook Form, Formik, etc.)
