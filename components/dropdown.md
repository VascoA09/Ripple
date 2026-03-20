---
name: Dropdown
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [form, input]
---

# Dropdown

A dropdown lets users select a single option from a small, collapsible list. It provides a compact way to present a limited set of choices without taking up permanent space in the interface. Dropdowns are best suited for small to medium-sized lists (5-15 items) and are triggered by clicking a control element, which opens a floating panel containing the available options.

---

## Usage

Dropdowns should be used when users need to select a single option from a small list of predefined choices. For larger lists with search functionality, or multi-selection, use the Combobox component instead.

Use dropdowns when:
* Selecting from a small to medium list of predefined options (5-15 items)
* A single choice is required from the list
* Space is limited and showing all options would clutter the interface
* The list is simple and doesn't require search/filtering
* Users are familiar with the available options

Do not use dropdowns when:
* There are only 2-3 options (use radio buttons or segmented control instead)
* The list is very long (15+ items) and would benefit from search (use Combobox instead)
* Multiple selections are needed (use Combobox with multi-select instead)
* For navigation or triggering actions (use menu component instead)
* Users need to enter freeform text (use text input instead)

---

## Types

### Single Select

The dropdown allows users to select one option from the list. When an option is selected, the panel closes automatically and the selected value is displayed in the trigger.

**Use for:**
* Form fields requiring a single choice
* Status selection
* Category assignment
* Simple configuration settings
* Sort options in toolbars

### Grouped Options

Options can be organized under non-interactive group headers within the dropdown panel. This helps users navigate lists by providing categorical structure.

**Best practices:**
* Use sentence case for group headers
* Apply muted color to distinguish headers from options
* Keep headers non-selectable
* Limit to 2-3 levels of grouping
* Use dividers between groups

**Use for:**
* Geographic locations (e.g., states grouped by region)
* Items organized by category
* Options with natural hierarchies

---

## Anatomy

The dropdown component consists of the following structural elements:

### Label (Optional but Recommended)

A descriptive text label positioned above the trigger that identifies what the user is selecting.

* Font size: `var(--font-size-80)` (14px)
* Font weight: `var(--font-weight-semibold)` (600)
* Color: `var(--text-loud)`
* Spacing to trigger: `var(--spacing-25)` (4px)
* Required indicator: Red asterisk (*) for required fields

### Trigger

The interactive control element that opens the dropdown panel. It displays the currently selected value or placeholder text.

**Components:**
* Selected value or placeholder text
* Chevron icon (down when closed, up when open)
* Border and background styling

**States:**
* Default: `var(--border-default)` border
* Hover: `var(--border-primary)` border
* Focus: `var(--border-focus)` border with 2px outline, 2px offset
* Open: `var(--border-focus)` border with outline
* Disabled: 30% opacity
* Error: `var(--border-negative)` border
* Notice: `var(--border-notice)` border
* Success: `var(--border-positive)` border

### Dropdown Panel

The floating container that appears when the trigger is activated. It holds the list of selectable options.

* Background: `var(--bg-surface)`
* Border: None
* Border radius: `var(--border-radius-200)` (8px)
* Box shadow: `var(--box-shadow-400)`
* Padding: `var(--spacing-50)` (8px)
* Max height: 300px (scrollable if exceeded)
* Positioning: Below trigger by default, flips above if insufficient space

### Option Item

An individual selectable entry within the dropdown panel.

**Components:**
* Checkmark icon (14px, shown when selected, positioned on left)
* Icon (optional, positioned after checkmark)
* Label text (required)
* Description (optional, smaller muted text below label)

**Spacing:**
* Padding: `var(--spacing-50)` (8px)
* Gap between options: `var(--spacing-50)` (8px)
* Minimum height varies by size (32px small, 40px medium, 48px large)

**States:**
* Default: `var(--bg-surface)` background
* Hover: `var(--bg-primary-softest)` background
* Focus: 2px primary border, inset with 8px border radius
* Selected: `var(--bg-primary-soft)` background with checkmark
* Pressed: `var(--color-primary-loud)` background with white text
* Disabled: 30% opacity, not-allowed cursor

### Group Header (Optional)

A non-interactive label used to organize options into logical groups.

* Font size: `var(--font-size-80)` (14px)
* Font weight: `var(--font-weight-semibold)` (600)
* Color: `var(--text)`
* Padding: `var(--spacing-75)` horizontal, `var(--spacing-75)` vertical
* Followed by options, then divider line

### Group Divider (Optional)

A visual separator between option groups.

* Height: 1px
* Background color: `var(--color-cool-gray-30)`
* Margin top: `var(--spacing-50)` (8px)

### Helper Text (Optional)

Supportive text below the trigger providing additional context or instructions.

* Font size: `var(--font-size-80)` (14px)
* Color: `var(--text-soft)`
* Line height: 21px
* Spacing from trigger: `var(--spacing-25)` (4px)

### Validation Message (Optional)

An error, notice, or success message displayed below the trigger.

* Font size: `var(--font-size-80)` (14px)
* Line height: 21px
* Colors:
  * Error: `var(--text-negative)`
  * Notice: `var(--text-notice)`
  * Success: `var(--text-positive)`
* Spacing from trigger: `var(--spacing-25)` (4px)

---

## Sizes

Dropdowns are available in three sizes to match text inputs and maintain visual consistency within forms.

### Small (32px)

* **Height**: `var(--size-200)` (32px)
* **Font size**: `var(--font-size-80)` (14px)
* **Line height**: 21px
* **Padding**: 0 `var(--spacing-75)` (0 12px)
* **Icon size**: 14px
* **Option height**: 32px
* **Usage**: Compact layouts, dense interfaces, toolbar filters
* **Note**: Not recommended for touch devices

### Medium (40px) - Default

* **Height**: `var(--size-250)` (40px)
* **Font size**: `var(--font-size-100)` (16px)
* **Line height**: 24px
* **Padding**: 0 `var(--spacing-100)` (0 16px)
* **Icon size**: 16px
* **Option height**: 40px
* **Usage**: Standard forms, most use cases, recommended default

### Large (48px)

* **Height**: `var(--size-300)` (48px)
* **Font size**: `var(--font-size-120)` (18px)
* **Line height**: 24px
* **Padding**: 0 `var(--spacing-125)` (0 20px)
* **Icon size**: 18px
* **Option height**: 48px
* **Usage**: Touch-first interfaces, mobile applications, high-emphasis selections

---

## States

### Trigger States

| State | Border | Background | Outline | Opacity | Description |
|-------|--------|------------|---------|---------|-------------|
| **Default** | `border-default` | `bg-surface` | None | 100% | Idle, ready for interaction |
| **Hover** | `border-primary` | `bg-surface` | None | 100% | Mouse over trigger |
| **Focus** | `border-focus` | `bg-surface` | 2px, 2px offset | 100% | Keyboard focus received |
| **Open** | `border-focus` | `bg-surface` | 2px, 2px offset | 100% | Panel is visible |
| **Disabled** | `border-default` | `bg-surface` | None | 30% | Non-interactive |
| **Error** | `border-negative` | `bg-surface` | None | 100% | Validation failed |
| **Notice** | `border-notice` | `bg-surface` | None | 100% | Warning or attention needed |
| **Success** | `border-positive` | `bg-surface` | None | 100% | Validation passed |

### Option States

| State | Background | Text Color | Border | Cursor | Description |
|-------|------------|------------|--------|--------|-------------|
| **Default** | `bg-surface` | `text` | None | pointer | Idle option in panel |
| **Hover** | `bg-primary-softest` | `text` | None | pointer | Mouse over (not focused) |
| **Focus** | `bg-surface` or `bg-primary-soft` (if selected) | `text` | 2px primary, inset | pointer | Keyboard focus |
| **Selected** | `bg-primary-soft` | `text` | None | pointer | Currently selected option |
| **Pressed** | `color-primary-loud` | `text-loud-inverse` | None | pointer | Being clicked/activated |
| **Disabled** | `bg-surface` or `bg-primary-soft` (if selected) | `text` | None | not-allowed | Non-selectable (30% opacity) |

---

## Behavior

### Opening and Closing

**Opening:**
* Click on trigger
* Press Enter or Space when trigger is focused
* Press Arrow Down when trigger is focused
* Press Arrow Up when trigger is focused

**Closing:**
* Select an option (panel closes automatically)
* Click outside panel
* Press Escape
* Click trigger again (toggle)
* Tab away from trigger

### Option Selection

1. User clicks or presses Enter/Space on option
2. Option becomes selected (checkmark appears on left)
3. Panel closes automatically
4. Selected value displays in trigger
5. Focus returns to trigger
6. onChange callback is triggered with new value

### Keyboard Navigation

| Key | Action |
|-----|--------|
| **Tab** | Move focus to/from dropdown trigger |
| **Shift + Tab** | Move focus backwards |
| **Enter / Space** | Open panel (closed) or select focused option (open) |
| **Arrow Down** | Move focus to next option; open panel if closed |
| **Arrow Up** | Move focus to previous option; open panel if closed |
| **Escape** | Close panel and return focus to trigger |
| **Home** | Move focus to first option in list |
| **End** | Move focus to last option in list |

**Focus behavior:**
* Disabled options are skipped during keyboard navigation
* Focused option scrolls into view automatically
* Focus returns to trigger when panel closes
* Focus ring clearly visible with 2px border

### Panel Positioning

**Default positioning:**
* Appears below the trigger with 4px gap
* Aligns with leading edge of trigger
* Minimum width matches trigger width
* Can expand beyond trigger if option text is longer

**Automatic flipping:**
* If insufficient space below, panel appears above trigger
* Positioning recalculates on window resize or scroll

### Scrolling

When option list exceeds maximum height (300px):
* Panel becomes scrollable
* Scrollbar appears (browser-native)
* Focused option auto-scrolls into view
* Scroll position maintained during keyboard navigation
* Panel padding maintained at top and bottom

### Validation

Validation can occur:
* On blur (when focus leaves dropdown)
* On change (when selection changes)
* On form submission

**Validation feedback:**
* Error state: Red border, error message below trigger
* Success state: Green border, success message below trigger
* Notice state: Orange border, notice message below trigger

---

## Properties

### Dropdown Component Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | string | — | The visible label text for the dropdown |
| `placeholder` | string | `"Select..."` | Hint text displayed when no option is selected |
| `value` | string | — | The currently selected value |
| `options` | DropdownOption[] | `[]` | The list of selectable options |
| `disabled` | boolean | `false` | Disables the dropdown |
| `required` | boolean | `false` | Marks the field as required |
| `helperText` | string | — | Supportive text displayed below trigger |
| `errorMessage` | string | — | Error message when validation fails |
| `successMessage` | string | — | Success message when validation passes |
| `noticeMessage` | string | — | Notice/warning message |
| `maxHeight` | string | `"300px"` | Maximum height of panel before scrolling |
| `size` | string | `"medium"` | Size variant: `small`, `medium`, `large` |
| `width` | string \| number | `"100%"` | Width of the dropdown |
| `onChange` | function | — | Callback when value changes: `(value: string) => void` |
| `id` | string | auto-generated | Unique identifier for the dropdown |
| `className` | string | — | Additional CSS classes |
| `style` | object | — | Inline styles |

### DropdownOption Interface

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | string | Yes | Display text for the option |
| `value` | string | Yes | Unique value for the option |
| `disabled` | boolean | No | Whether option can be selected |
| `description` | string | No | Additional context below label |
| `icon` | ReactNode | No | Icon element to display before label |
| `group` | string | No | Group name for categorization |

---

## Design Guidelines

### Sizing

**Trigger width:**
* Should reflect expected option length
* Avoid making too narrow (causes truncation)
* Avoid making too wide (wastes space)
* Typical range: 200px - 400px
* Panel expands beyond trigger if needed

**Panel width:**
* Minimum width matches trigger
* Can expand for longer option labels
* Maximum width should avoid overwhelming interface
* Recommended max: 600px

### Spacing

**External spacing:**
* Label to trigger: `var(--spacing-25)` (4px)
* Trigger to helper/error: `var(--spacing-25)` (4px)
* Between stacked form fields: `var(--spacing-100)` - `var(--spacing-150)` (16px - 24px)

**Internal spacing (Panel):**
* Panel padding: `var(--spacing-50)` (8px)
* Option padding: `var(--spacing-50)` (8px)
* Gap between options: `var(--spacing-50)` (8px)
* Gap between option elements: `var(--spacing-50)` then `var(--spacing-75)` for content
* Group header padding: `var(--spacing-75)` (12px)

**Trigger internal spacing:**
* Small: 0 `var(--spacing-75)` (0 12px)
* Medium: 0 `var(--spacing-100)` (0 16px)
* Large: 0 `var(--spacing-125)` (0 20px)

### Option Density

Each option should have:
* Padding: 8px all around
* Clear visual separation from adjacent options
* Height based on size: 32px (small), 40px (medium), 48px (large)
* Touch target minimum: 44px on touch devices (use Medium or Large)

**For grouped dropdowns:**
* Group headers visually distinct
* Same font size as options but semibold weight
* Divider line after each group
* Muted color to differentiate from options

### Placement within Forms

Dropdowns follow the same alignment and placement rules as text inputs:

* Labels positioned above trigger by default
* Align with adjacent form fields vertically
* Match heights with text inputs in same row
* Maintain consistent spacing between fields
* Group related dropdowns together

### Placeholder and Default Values

**Placeholder text:**
* Use clear, descriptive text (e.g., "Select a country...")
* Don't use placeholder as label
* Keep concise (2-4 words)
* Use sentence case
* Include ellipsis to indicate selection is needed

**Default values:**
* Pre-select if sensible default exists
* Don't pre-select arbitrary values
* Make clear when pre-selected value is temporary

---

## Accessibility

### ARIA Attributes

**Trigger element:**
* `role="combobox"` - Identifies as combo box control
* `aria-expanded="true|false"` - Panel open state
* `aria-haspopup="listbox"` - Indicates popup type
* `aria-controls="{panel-id}"` - References panel
* `aria-labelledby="{label-id}"` - Associates with label
* `aria-describedby="{helper-id}"` - Links helper/error text
* `aria-required="true"` - For required fields
* `aria-invalid="true"` - For validation errors

**Panel element:**
* `role="listbox"` - Identifies as list of options

**Option elements:**
* `role="option"` - Identifies as selectable option
* `aria-selected="true|false"` - Selection state
* `aria-disabled="true"` - For disabled options

**Group elements:**
* `role="group"` - Identifies as option group
* `aria-label="{group-name}"` - Group name for screen readers

### Keyboard Support

All keyboard interactions must be fully supported:

* **Tab**: Navigate to/from dropdown
* **Enter/Space**: Open panel or select option
* **Arrow keys**: Navigate through options
* **Escape**: Close panel, return to trigger
* **Home/End**: Jump to first/last option

### Focus Management

* Clear 2px focus indicator with 2px offset
* Focus returns to trigger when panel closes
* Focused option scrolls into view automatically
* Focus trapped within panel while open
* Logical tab order maintained

### Screen Reader Support

* All interactive elements announced
* Selected state clearly communicated
* Open/closed state announced
* Error messages announced on validation
* Group headers provide context
* Option descriptions read with options
* Selection changes announced

### Touch Accessibility

* Minimum 40px height for options on touch devices
* Use Medium (40px) or Large (48px) sizes on touch devices
* Adequate spacing between options
* Clear visual feedback on touch

### Color and Contrast

* All text meets WCAG AA standards (4.5:1)
* Don't rely on color alone for state
* Border changes provide non-color indicator
* Checkmark icon provides visual confirmation
* Disabled state maintains visibility at 30% opacity

---

## Content Guidelines

### Option Labels

* Use clear, concise text (1-3 words ideal)
* Apply sentence case (capitalize first letter only)
* Make labels descriptive and specific
* Avoid jargon or abbreviations
* Use parallel structure for similar options

**Examples:**
* ✅ "United States"
* ✅ "Last 30 days"
* ❌ "US" (abbreviation without context)
* ❌ "last 30 days" (incorrect case)

### Placeholder Text

* Use to describe what user should select
* Keep to 2-4 words
* Don't use as label replacement
* Use sentence case
* Include ellipsis to indicate action needed

**Examples:**
* ✅ "Select a country..."
* ✅ "Choose status..."
* ❌ "Country" (too vague)
* ❌ "Please select a country from the dropdown list" (too long)

### Descriptions

* Keep to 1-2 lines maximum
* Provide additional context, not redundancy
* Use smaller font and muted color
* Only include when truly helpful
* Use sentence case

**Examples:**
* ✅ "Currently active and available"
* ✅ "Awaiting approval or action"
* ❌ "This is the active status" (redundant)

### Helper Text

* Place below trigger
* Use for instructions or context
* Keep to 1-2 sentences
* Use clear, friendly language
* Apply sentence case

**Examples:**
* ✅ "Select your country of residence"
* ✅ "Choose the project status"
* ❌ "This field is for selecting your country" (verbose)

### Error Messages

* Be specific about the problem
* Provide guidance on how to fix
* Use actionable language
* Keep concise
* Apply sentence case

**Examples:**
* ✅ "Please select a country from the list"
* ✅ "Status is required"
* ❌ "Invalid selection" (not helpful)
* ❌ "Error" (not descriptive)

### Group Headers

* Use sentence case (not uppercase)
* Keep short (1-3 words)
* Provide meaningful categorization
* Use parallel structure
* Be consistent across similar dropdowns

**Examples:**
* ✅ "North America"
* ✅ "Recent"
* ❌ "COUNTRIES IN NORTH AMERICA" (too long and shouting)

---

## Common Patterns

### Basic Form Field

```tsx
<Dropdown
  label="Country"
  placeholder="Select a country..."
  options={countryOptions}
  value={country}
  onChange={setCountry}
  required
  helperText="Choose your country of residence"
  width="320px"
/>
```

### With Validation

```tsx
<Dropdown
  label="Status"
  placeholder="Select status..."
  options={statusOptions}
  value={status}
  onChange={setStatus}
  required
  errorMessage={error}
  width="280px"
/>
```

### Filter Control (Small)

```tsx
<Dropdown
  label="Sort by"
  placeholder="Select..."
  options={sortOptions}
  value={sortBy}
  onChange={setSortBy}
  size="small"
  width="200px"
/>
```

### With Groups

```tsx
<Dropdown
  label="State"
  placeholder="Select a state..."
  options={stateOptions} // grouped by region
  value={state}
  onChange={setState}
  width="280px"
/>
```

### With Icons and Descriptions

```tsx
<Dropdown
  label="Status"
  placeholder="Choose status..."
  options={statusOptionsWithIcons} // includes icon and description
  value={status}
  onChange={setStatus}
  width="320px"
/>
```

---

## Best Practices

### Do

* ✅ Use dropdowns for 5-15 options
* ✅ Make trigger width appropriate for expected option length
* ✅ Use clear placeholder text (e.g., "Select a country...")
* ✅ Match dropdown size to adjacent form inputs
* ✅ Provide helpful error messages
* ✅ Use icons and descriptions when they add clarity
* ✅ Group related options under headers
* ✅ Mark required fields with asterisks
* ✅ Test with keyboard navigation
* ✅ Ensure touch targets are adequate (use Medium or Large on touch)
* ✅ Pre-select sensible defaults when appropriate

### Don't

* ❌ Don't use for 2-3 options (use radio buttons instead)
* ❌ Don't use for very long lists (15+ items - use Combobox instead)
* ❌ Don't use for navigation or actions (use menu instead)
* ❌ Don't nest dropdowns
* ❌ Don't make triggers too narrow (causes truncation)
* ❌ Don't make triggers too wide (wastes space)
* ❌ Don't use placeholders as labels
* ❌ Don't forget required field indicators
* ❌ Don't use small size on touch devices
* ❌ Don't use vague error messages
* ❌ Don't disable options without explanation
* ❌ Don't use jargon in option labels

---

## Common Use Cases

### Form Fields

* **Status selection**: With descriptions explaining each status
* **Category assignment**: Grouped by type or department
* **Priority selection**: High, Medium, Low with icons
* **Time range**: Pre-defined ranges (Today, Last 7 days, Last 30 days)

### Filters and Toolbars

* **Sort by**: Small size, compact width (Date, Name, Status)
* **View options**: Single select with icons (List, Grid, Calendar)
* **Status filter**: Single status selection with colors

### Settings

* **Language preference**: With flag icons
* **Theme selection**: Light, Dark, System with preview icons
* **Timezone**: Grouped by region (for smaller lists)

---

## Related Components

* **Combobox** - For larger lists with search, or multi-selection
* **Radio Button** - For 2-5 mutually exclusive options
* **Segmented Control** - For 2-4 visually distinct options
* **Menu** - For actions and navigation (not value selection)
* **Text Input** - For freeform text entry

---

## Dropdown vs Other Components

| Use Case | Dropdown | Combobox | Radio | Menu |
|----------|----------|----------|-------|------|
| **2-3 options** | ❌ | ❌ | ✅ | ❌ |
| **5-15 options** | ✅ | ✅ | ❌ | ❌ |
| **15+ options** | ❌ | ✅ | ❌ | ❌ |
| **Single select** | ✅ | ✅ | ✅ | ❌ |
| **Multi-select** | ❌ | ✅ | ❌ | ❌ |
| **Searchable** | ❌ | ✅ | ❌ | ❌ |
| **Actions** | ❌ | ❌ | ❌ | ✅ |
| **Navigation** | ❌ | ❌ | ❌ | ✅ |
| **Space efficient** | ✅ | ✅ | ❌ | ✅ |

---

## CSS Variables Used

**Colors:**
* `var(--text-loud)` - Label text
* `var(--text)` - Option text, selected value
* `var(--text-soft)` - Helper text, placeholder
* `var(--text-negative)` - Error messages
* `var(--text-notice)` - Notice messages
* `var(--text-positive)` - Success messages
* `var(--text-loud-inverse)` - Pressed state text
* `var(--bg-surface)` - Trigger and panel background
* `var(--bg-primary-softest)` - Hover option background
* `var(--bg-primary-soft)` - Selected option background
* `var(--color-primary-loud)` - Pressed state, checkmark, focus border
* `var(--border-default)` - Default border
* `var(--border-primary)` - Hover border
* `var(--border-focus)` - Focus/open border
* `var(--border-negative)` - Error border
* `var(--border-notice)` - Notice border
* `var(--border-positive)` - Success border
* `var(--color-cool-gray-30)` - Group divider

**Spacing:**
* `var(--spacing-25)` - 4px (label gap, helper gap)
* `var(--spacing-50)` - 8px (panel padding, option padding, gaps)
* `var(--spacing-75)` - 12px (small trigger padding, group header padding)
* `var(--spacing-100)` - 16px (medium trigger padding)
* `var(--spacing-125)` - 20px (large trigger padding)

**Sizing:**
* `var(--size-200)` - 32px (small height)
* `var(--size-250)` - 40px (medium height)
* `var(--size-300)` - 48px (large height)

**Typography:**
* `var(--font-family)` - Font family
* `var(--font-size-80)` - 14px (label, helper, small)
* `var(--font-size-100)` - 16px (medium)
* `var(--font-size-120)` - 18px (large)
* `var(--font-weight-regular)` - 400
* `var(--font-weight-semibold)` - 600

**Borders:**
* `var(--border-width-100)` - 1px
* `var(--border-width-200)` - 2px (focus ring)
* `var(--border-radius-150)` - 6px (option border radius)
* `var(--border-radius-200)` - 8px (trigger, panel, focus ring)

**Shadows:**
* `var(--box-shadow-400)` - Panel shadow
