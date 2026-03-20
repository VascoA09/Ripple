---
name: Range
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [form, input]
---

# Range

The range component is an input control that lets users select a numeric value or a span of values by dragging a handle along a track. It provides a visual and interactive way to set a value within a defined minimum and maximum.

---

## Usage

Use the range component when users need to select a value within a continuous or stepped numeric range and the precise value is less critical than the relative position. It works well for settings like volume, brightness, price filters, or any preference that benefits from a sliding interaction.

Use it when approximate values are acceptable and when showing the spectrum of possible values adds meaningful context to the user's choice.

Use range when:
* Users need to select a value within a continuous or stepped numeric range
* Controlling settings like volume, brightness, opacity, or zoom level
* Creating filter controls for price ranges, date spans, or numeric parameters
* Showing the spectrum of possible values adds meaningful context
* Preferences where approximate values are acceptable
* A visual representation of the value scale helps users understand options

Do not use range when:
* The user needs to enter a precise numeric value (use Number Input instead)
* For binary choices or very small sets of options (use Toggle, Radio, or Select)
* The minimum, maximum, or step values are unknown or highly variable
* For categorical data that doesn't have a natural numeric order
* Exact precision is critical and slider approximation would frustrate users
* The sliding interaction is not intuitive or accessible in the context

---

## Anatomy

The range component consists of the following structural elements:

* **Label** — A descriptive text label that identifies what value the range controls. It can be displayed above or to the left of the track.
* **Track** — The horizontal bar along which the handle(s) move. It visually represents the full range of possible values. The filled portion of the track indicates the selected value or range.
* **Handle** — The draggable control that users move to set the value. A single handle is used for a single value; two handles are used for a range selection.
* **Tooltip (optional)** — Displays the current numeric value above the handle while the user is actively dragging or when the handle has keyboard focus.
* **Markers (optional)** — Visual tick marks along the track that indicate specific steps or divisions within the range scale. When enabled, the handle snaps to marker positions.
* **Indicators (optional)** — Text labels positioned below the markers to identify key values on the scale, providing additional context about what each position means.
* **Min / Max labels (optional)** — Text labels at the start and end of the track showing the minimum and maximum values.
* **Hint text (optional)** — Supportive text below the component providing additional context or instructions.
* **Validation message (optional)** — An error, notice, or success message displayed below the component when validation is triggered.

---

## States

* **Default**
  * The range is idle and ready for interaction
  * The handle sits at the current value position on the track
  * Track: var(--bg-neutral-soft)
  * Filled track: var(--color-primary)
  * Handle: var(--bg-surface) with var(--border-primary) border

* **Hover**
  * The handle changes appearance when the user hovers over it
  * Signals interactivity
  * Subtle visual feedback on the handle

* **Active / Pressed**
  * The user is actively pressing and dragging the handle
  * The tooltip appears above the handle showing the current value
  * Handle has elevated shadow for visual feedback
  * Cursor changes to grabbing state

* **Focus**
  * The handle has keyboard focus
  * Indicated by visible focus ring: 2px solid var(--border-focus) with 4px offset
  * Tooltip appears showing current value
  * Accessible via Tab key

* **Disabled**
  * The range is non-interactive
  * Opacity: 0.5
  * Track, handle, and text appear visually muted
  * Does not respond to user input
  * Excluded from tab order
  * Cursor: not-allowed

* **Error**
  * The range has failed validation
  * Error message appears below the component
  * Filled track: var(--color-negative)
  * Handle border: var(--border-negative)
  * Error icon and message: var(--text-negative)

---

## Sizes

The range component is available in two sizes:

* **Small**
  * **Track height**: 4px
  * **Handle size**: 16px
  * **Usage**: Compact variant for dense layouts, toolbars, or secondary controls
  * **Best for**: Desktop interfaces with mouse interaction
  * **Note**: May not meet minimum touch target requirements on mobile

* **Medium (Default)**
  * **Track height**: 6px
  * **Handle size**: 20px
  * **Usage**: Default size, suitable for most form and settings contexts
  * **Best for**: All interfaces including touch devices
  * **Meets**: Minimum touch target requirements (44×44px with padding)

---

## Scale Divisions and Markers

Markers can be added to the track to divide the scale into visible steps. They appear as tick marks along the track at regular or defined intervals.

**When markers are enabled:**
* Tick marks appear at specified value positions
* Handle snaps to the nearest marker position as the user drags
* Restricts selection to the defined steps
* Provides visual guidance for discrete value selection

**Visual appearance:**
* Width: 2px
* Height: 8px
* Color: var(--border-default)
* Position: Centered vertically on track

**When to use markers:**
* For stepped scales with meaningful increments
* When discrete values are more useful than continuous selection
* To show rating scales (e.g., 0-5 stars)
* For temperature, volume, or other stepped controls

**When not to use markers:**
* For continuous ranges where any value is valid
* When there are too many steps, causing visual clutter
* If snapping behavior would frustrate users

---

## Indicators

Indicators are text labels positioned below markers that label key values on the scale, providing additional context about what each position means.

**Properties:**
* Font size: var(--font-size-80)
* Color: var(--text-soft)
* Position: Below track, aligned with marker position
* Format: Centered and nowrap

**When to use indicators:**
* To provide non-numeric context for scale positions (e.g., "Cold", "Warm", "Hot")
* When labels help users understand what values represent
* For ratings or qualitative scales
* To clarify meaning of numeric values

**Examples:**
* Temperature: "Cold", "Cool", "Moderate", "Warm", "Hot"
* Volume: "Mute", "Low", "Medium", "High", "Max"
* Speed: "Slow", "Normal", "Fast", "Very Fast"

---

## Tooltip Behavior

When the user interacts with the handle, a tooltip appears above it displaying the current numeric value.

**Tooltip appears when:**
* User is actively pressing and dragging the handle
* Handle has keyboard focus

**Tooltip disappears when:**
* User releases the handle
* Handle loses keyboard focus

**Visual appearance:**
* Background: var(--bg-inverse)
* Text color: var(--text-inverse)
* Font size: var(--font-size-80)
* Padding: var(--spacing-25) var(--spacing-50)
* Border radius: var(--border-radius-100)
* Position: Above handle with 8px margin

**Value formatting:**
* Use `formatValue` prop to customize display format
* Examples: "75%", "$500", "20°C", "3 stars"

**Accessibility:**
* Value is also announced via `aria-valuenow` and `aria-valuetext`
* Tooltip provides visual reinforcement of spoken value

---

## Min / Max Labels

Display the minimum and maximum values at either end of the track when the scale boundaries are meaningful to the user. These help anchor the user's understanding of the full range.

**Visual appearance:**
* Font size: var(--font-size-80)
* Color: var(--text-soft)
* Position: Above track at left and right ends
* Format: Uses `formatValue` prop if provided

**When to show min/max labels:**
* When scale boundaries are important to decision-making
* For ranges with non-obvious minimum or maximum
* When units or context need clarification
* In filter controls where range limits matter

**When to hide min/max labels:**
* For ranges with obvious boundaries (0-100)
* When space is extremely limited
* If indicators already show boundary values

---

## Dual Range (Two Handles)

Use two handles when the user needs to define a span — for example, a price range or a date interval. The filled portion of the track indicates the selected span between the two handles.

**Behavior:**
* Two independent handles control minimum and maximum values
* Handles cannot cross each other
* Min handle cannot exceed max handle value
* Max handle cannot go below min handle value
* Both handles are independently keyboard accessible
* Each handle shows its own tooltip when active or focused

**Use cases:**
* Price range filters ($200 - $800)
* Date or time ranges (3 days - 10 days)
* Age ranges (25 - 45 years)
* Numeric parameter filtering

**Accessibility:**
* Each handle has a distinct accessible label (e.g., "Minimum price" and "Maximum price")
* Both handles are focusable and keyboard navigable
* Tab moves focus between handles
* Each handle has independent ARIA attributes

**Visual appearance:**
* Filled track only between the two handles
* Both handles use same styling as single-handle range
* Active/focused handle has higher z-index for clear interaction

---

## Combining with Number Input

For cases where precision matters, pair the range with a number input. The two controls stay in sync — updating the range handle updates the number input, and vice versa.

**When to use combined controls:**
* Precision is important but visual feedback is also valuable
* Users may prefer either sliding or typing
* Quick approximate adjustment with option for exact value
* Common in professional tools and advanced settings

**Implementation:**
* Keep both controls synchronized via shared state
* Validate number input to ensure it's within min/max bounds
* Position number input near range for clear association
* Use consistent formatting between range tooltip and input

**Example use cases:**
* Brightness/contrast adjustments with exact percentage
* Volume control with precise dB values
* Zoom level with exact percentage input
* Temperature with specific degree input

---

## Validation

Validation can be applied to ensure the selected value meets specific requirements (e.g., must be above a minimum threshold). When validation fails, the component enters the error state and an error message is shown below it.

**Error state:**
* Border color: var(--border-negative)
* Filled track: var(--color-negative)
* Error message with icon displayed below
* Message color: var(--text-negative)

**Validation timing:**
* On blur: When user finishes interaction
* On submit: When form is submitted
* Real-time: As user drags (use sparingly)

**Error messages should:**
* Be specific about what's wrong
* Guide users to fix the issue
* Use plain, friendly language
* Examples:
  * "Value must be at least 20°C for optimal performance"
  * "Maximum volume cannot exceed 80% in this mode"
  * "Please select a value between 10 and 90"

---

## Label Properties

* **Position**
  * **Top (Default)**: Label appears above the track
  * **Left**: Label appears to the left of the track (inline layout)
  * Top position recommended for most use cases
  * Left position useful for compact horizontal forms

* **Visibility**
  * **Show (Default)**: Label is visible
  * **Hide**: Label is visually hidden but still present for accessibility
  * Always provide label text even if hidden
  * Use `hideLabel` prop to control visibility

* **Styling**
  * Font size: var(--font-size-100)
  * Font weight: var(--font-weight-semibold)
  * Color: var(--text)
  * Margin bottom (top position): var(--spacing-50)
  * Min width (left position): 120px

---

## Spacing

* Space between label and track (top position): var(--spacing-50) (8px)
* Gap between label and track (left position): var(--spacing-100) (16px)
* Space between track and hint/error message: var(--spacing-25) (4px)
* Space between track and indicators: var(--spacing-50) (8px)
* Tooltip margin above handle: var(--spacing-50) (8px)
* Tooltip padding: var(--spacing-25) var(--spacing-50) (4px 8px)
* Padding around track container (top): var(--spacing-100) (16px)
* Padding around track container (bottom): var(--spacing-50) or var(--spacing-150) with indicators
* Border radius (track): var(--border-radius-300) (12px for pill shape)
* Border radius (tooltip): var(--border-radius-100) (4px)

---

## Keyboard Navigation

| Key | Behavior |
|-----|----------|
| **Tab** | Moves focus to the handle (or between handles in dual range) |
| **Arrow Right / Arrow Up** | Increases the value by one step |
| **Arrow Left / Arrow Down** | Decreases the value by one step |
| **Home** | Sets the value to the minimum |
| **End** | Sets the value to the maximum |
| **Page Up** | Increases the value by 10% of the range |
| **Page Down** | Decreases the value by 10% of the range |

**Keyboard interaction behavior:**
* Arrow keys provide precise control
* Home/End provide quick access to boundaries
* Page Up/Down provide larger jumps (10% of range)
* All movements respect step value
* Movements snap to markers if enabled
* Tooltip appears during keyboard interaction
* Focus ring clearly indicates active handle

---

## Colors

**Default State:**
* Track background: var(--bg-neutral-soft)
* Filled track: var(--color-primary)
* Handle background: var(--bg-surface)
* Handle border: 2px solid var(--border-primary)
* Label: var(--text)
* Min/max labels: var(--text-soft)
* Indicators: var(--text-soft)
* Markers: var(--border-default)

**Focus State:**
* Focus ring: 2px solid var(--border-focus) with 4px offset
* Tooltip background: var(--bg-inverse)
* Tooltip text: var(--text-inverse)

**Active State:**
* Handle shadow: elevated (0 2px 8px rgba(0, 0, 0, 0.2))
* Tooltip visible

**Disabled State:**
* Entire component opacity: 0.5
* Cursor: not-allowed

**Error State:**
* Filled track: var(--color-negative)
* Handle border: var(--border-negative)
* Error message: var(--text-negative)
* Error icon: var(--color-negative)

---

## Accessibility

* The range input uses `role="slider"` with `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` attributes to communicate the current state to assistive technologies
* `aria-valuetext` is provided to describe formatted values (e.g., "75%" instead of just "75")
* The handle is associated with its label using `aria-labelledby` or `aria-label`
* Full keyboard navigation is supported with Arrow keys, Home, End, Page Up, and Page Down
* Focus is clearly visible on the handle with 2px border and 4px offset
* Disabled ranges have `aria-disabled="true"` and are removed from the tab order
* Error messages and hint text are associated with the component using `aria-describedby` so screen readers announce them when the component is focused
* For dual-handle range components, each handle has its own accessible label distinguishing it (e.g., "Minimum price" and "Maximum price")
* Tooltips appear on both mouse interaction and keyboard focus for consistent experience
* Color is not the sole indicator of state — error messages and hint text provide additional context
* Minimum color contrast ratios (WCAG AA):
  * Text: 4.5:1
  * UI elements (borders, handles): 3:1
* Handle size meets minimum touch target requirements (20px handle + padding = 44×44px touch area)

---

## Content Guidelines

### Label Text
* Use clear, concise language (1-3 words when possible)
* Describe what the range controls, not just the unit
* Examples:
  * Good: "Volume level", "Playback speed", "Price range"
  * Bad: "Slider", "Value", "Level"
* Use sentence case: "Playback speed" not "PLAYBACK SPEED"
* Avoid technical jargon unless appropriate for audience

### Hint Text
* Provide context or clarification
* Explain constraints or expected behavior
* Keep brief: 1-2 sentences maximum
* Examples:
  * "Adjust the volume level from 0 to 100"
  * "Select your minimum and maximum price"
  * "Values snap to the nearest marker"

### Error Messages
* Be specific about what's wrong
* Guide users to fix the issue
* Use plain, friendly language
* Examples:
  * Good: "Value must be at least 20°C for optimal performance"
  * Good: "Maximum volume cannot exceed 80% in this mode"
  * Bad: "Invalid value"
  * Bad: "Error"

### Indicators
* Use descriptive labels that add context
* Keep labels short (1-2 words)
* Use sentence case
* Examples: "Cold", "Warm", "Hot" for temperature

### Format Values
* Use appropriate units: "%", "°C", "$", "px"
* Be consistent with formatting across all displays
* Examples: "75%", "$500", "20°C", "3 stars"

---

## Best Practices

* Always provide visible labels for all range controls
* Use appropriate step values that match user expectations and use case
* Show min/max labels when boundaries are meaningful to the user
* Combine with number input when precision matters
* Use dual ranges for selecting value spans (price ranges, date intervals)
* Add markers for stepped or discrete value scales
* Use indicators to provide non-numeric context for scale positions
* Provide helpful hint text to clarify purpose or constraints
* Ensure handles are large enough for easy interaction (especially on touch devices)
* Use medium size for touch interfaces to meet accessibility requirements
* Format values appropriately with units or context
* Test keyboard navigation thoroughly
* Don't use ranges when precise numeric input is critical
* Don't make all ranges the same width regardless of use case
* Don't use ranges for binary or very small sets of choices (use Toggle or Radio instead)
* Don't hide the label without providing an accessible alternative
* Don't use step values that are too large, making it hard to select desired values
* Don't disable ranges when the value should be read-only
* Don't rely solely on color to indicate state or value
* Don't use ranges for categorical data without a natural numeric order
* Don't use small size on touch devices (fails minimum touch target requirements)
* Don't overcomplicate the interface with excessive markers or indicators
* Maintain consistent validation timing across forms
* Ensure sufficient spacing around interactive elements
* Use `formatValue` prop to customize value display consistently

---

## When to Use Range vs Number Input

### Use Range when:
* Approximate values are acceptable
* Visual feedback of the scale is valuable
* Users benefit from seeing minimum and maximum context
* Sliding interaction is natural for the task
* Content is settings, preferences, or filters

### Use Number Input when:
* Precise numeric values are required
* Users typically know the exact value they want
* Range of values is large or unbounded
* Keyboard entry is faster than sliding
* Professional tools requiring exact specifications

### Use Both when:
* Precision matters but visual feedback is also valuable
* Users may prefer either sliding or typing
* Quick approximate adjustment with option for exact value
* Common in professional tools and advanced settings
