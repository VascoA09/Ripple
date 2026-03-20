---
name: Progress Circle
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [feedback, status]
---

# Progress Circle

The Progress Circle is a circular and compact progress indicator that offers an appealing alternative to the traditional linear progress bar. It is ideal for situations where space is limited or where a circular design fits best the overall user interface.

---

## Usage

Progress Circles should be used to provide visual feedback for progress or completion status in a compact, circular format.

Use Progress Circles when:
* Space is limited and a circular design is more compact than linear bars
* The circular design complements the overall UI aesthetic better
* Creating dashboard displays showing multiple metrics in a grid or card layout
* Highlighting a single key value or percentage
* Displaying balances or quotas (vacation days, credits, limits)
* Compact data visualization is needed in constrained spaces

Do not use Progress Circles when:
* Detailed progress tracking is needed (use Progress Bar instead)
* Multiple progress indicators are needed in sequence
* Long labels are required (circular space limits text length)
* Process steps need visualization (use Stepper or Progress Bar instead)
* File uploads or downloads are being tracked
* Multi-step processes need clear linear progression

---

## Anatomy

A Progress Circle consists of the following elements:

* **Track**
  * Represents the path along which the progress is visually indicated
  * Background circle that shows the total possible progress
  * Color: Always neutral `var(--color-cool-gray-30)` regardless of variant
  * Stroke width: Proportional to circle size (typically 6% of diameter for a thinner appearance)

* **Progress**
  * The portion of the track that is filled in to show the value of the task
  * Colored arc that fills from top (12 o'clock position) clockwise
  * Color: Variant-specific main color (e.g., `var(--color-primary)`)
  * Animated transition when value changes
  * Rounded stroke caps for smooth appearance

* **Label**
  * Provides users with numerical information about the progress
  * Positioned in the center of the circle
  * Font family: `var(--font-family)` (Open Sans)
  * Font weight: `var(--font-weight-regular)` (400)
  * Color: `var(--text-loud)`
  * Font size: Proportional to circle size (typically 25% of diameter, minimum 12px)

---

## Size

The Progress Circle is scalable and can be adjusted to different sizes while maintaining circular proportions.

**Flexibility:**
* Scalable to different widths (recommended range: 80px - 200px)
* Maintains circular shape at all sizes
* Stroke width scales proportionally to circle diameter
* Label typography scales proportionally
* Default size: 120px diameter

**Size variations:**
* **Small (80px)**: Compact displays, dense interfaces
* **Default (120px)**: Standard size for most use cases
* **Large (160px)**: Prominent displays, primary metrics
* **Extra Large (200px)**: Hero sections, featured content

---

## Variants

Progress Circle comes in four color variants to represent different semantic meanings:

* **Primary (Default)**
  * **Purpose**: General progress indication
  * **Progress color**: `var(--color-primary)`
  * **Track color**: `var(--color-cool-gray-30)`
  * **Usage**: Most common variant for neutral progress displays

* **Positive**
  * **Purpose**: Success or completion status
  * **Progress color**: `var(--color-positive)`
  * **Track color**: `var(--color-positive-soft)`
  * **Usage**: Completed tasks, achievements, success metrics

* **Notice**
  * **Purpose**: Warning or attention needed
  * **Progress color**: `var(--color-notice)`
  * **Track color**: `var(--color-notice-soft)`
  * **Usage**: Items requiring attention, approaching deadlines, warnings

* **Negative**
  * **Purpose**: Error or critical state
  * **Progress color**: `var(--color-negative)`
  * **Track color**: `var(--color-negative-soft)`
  * **Usage**: Errors, critical low values, failed states

---

## Typography

The typography size can be adjusted to be proportional to the circle size, with accessibility requirements enforced.

**Typography guidelines:**
* **Minimum size**: 12px (typography-detail) to meet WCAG AA accessibility requirements
* **Default calculation**: 25% of circle diameter (auto-calculated if not specified)
* **Font family**: `var(--font-family)` (Open Sans)
* **Font weight**: `var(--font-weight-regular)` (400)
* **Line height**: 1 (compact, centered display)
* **Color**: `var(--text-loud)`

**Proportion examples:**
* 80px circle: 16px label (custom, or auto-calculated 20px)
* 120px circle: 30px label (auto-calculated)
* 160px circle: 48px label (custom specified)
* 200px circle: 64px label (custom specified)

**Accessibility:**
* Labels must never be smaller than 12px
* Component enforces minimum even if smaller size is specified
* Ensure sufficient contrast between label and background

---

## Label Formats

Progress Circles support various label formats to fit different use cases:

* **Percentage** (Default)
  * Format: "72%", "100%"
  * Auto-generated if no label prop provided
  * Best for: Completion percentages, progress tracking

* **Integer**
  * Format: "3", "10", "25"
  * Custom label prop required
  * Best for: Count displays, available items, balances

* **Fraction**
  * Format: "72/100", "15/30"
  * Custom label prop required
  * Best for: Showing part of total, task completion

* **Overflow**
  * Format: "99+"
  * Use for values exceeding 99
  * Best for: Large counts, keeping labels compact

---

## Placement

Progress Circles can be nested inside other containers and components:

* **Card**: Dashboard widgets, summary cards, metric displays
* **Panel**: Grouped metrics, settings displays
* **Modal/Dialog**: Progress indicators, status displays
* **Section**: Content blocks with progress indicators

**Best practices for placement:**
* Center the Progress Circle within its container
* Provide adequate padding around the circle (minimum `var(--spacing-100)`)
* Ensure the container size accommodates the circle comfortably
* Use supporting text outside the circle for context
* Group related Progress Circles with consistent spacing

---

## Content Guidelines

### Label

Since the space is limited, use short numeric indicators that fit within the circular area.

**Best practices:**
* **Keep it concise**: Use short numeric values (percentages, integers, fractions)
* **Fit to space**: Ensure entire label fits within circle
* **Overflow handling**: Use "99+" for values exceeding 99
* **Maximum characters**: Typically 3-5 characters for readability

**Label format options:**
* Percentage: "50%", "75%", "100%"
* Integer: "3", "10", "25"
* Fraction: "72/100", "15/30" (may require smaller font or larger circle)
* Overflow: "99+" for large numbers

**Adjustments when label doesn't fit:**
1. Increase the circle size to accommodate the label
2. Reduce the typography size (minimum 12px enforced)
3. Use abbreviated formats (e.g., "99+" instead of "150")
4. Simplify the label format

---

## Usage in Real Products

### Timesheets Example

In timesheets, the Progress Circle component displays vacation balances with supporting context:

**"Holiday from last year"**
* Progress Circle showing "3" (integer format)
* Supporting text: "days available"
* Additional context: "Use by 31 Dec 2025"
* Variant: Notice (to indicate urgency)

**"Holiday"**
* Progress Circle showing "10" (integer format)
* Supporting text: "days available"
* Additional context: "5 days taken"
* Variant: Primary

**Key features of this implementation:**
* Progress Circle provides the primary numeric value
* Supporting text adds context and meaning
* Additional information clarifies deadlines or usage
* Clean, card-based layout groups related information
* Variant colors provide semantic meaning

---

## Accessibility

### Typography
* **Minimum size**: 12px for all labels to ensure readability (WCAG AA compliant)
* **Contrast**: Ensure sufficient color contrast between label and background
  * Label uses `var(--text-loud)` for strong contrast
  * Minimum 4.5:1 contrast ratio for text
* **Clear numerals**: Use fonts with distinct, readable numerals (Open Sans)

### Color and Visibility
* **Progress indication**: Uses color but doesn't rely on color alone
  * Progress value is communicated via ARIA attributes
  * Label provides numeric confirmation
* **Track visibility**: Track is clearly visible against the background
* **Progress visibility**: Progress fill has clear contrast with track
  * Minimum 3:1 contrast ratio for UI components

### Context and Meaning
* **ARIA attributes**: Provides appropriate context for screen readers
  * `role="progressbar"`
  * `aria-valuenow`: Current progress value
  * `aria-valuemin`: Minimum value (0)
  * `aria-valuemax`: Maximum value (100)
  * `aria-label`: Descriptive label for screen readers
* **Supporting text**: Include text outside the circle to provide context
* **Units**: Clearly indicate what the numbers represent (days, percentage, etc.)
* **State communication**: Progress value is announced to assistive technologies

### Focus and Interaction
* If interactive, ensure keyboard accessibility
* Provide clear focus indicators for interactive circles (2px outline with 2px offset)
* Minimum 44x44px touch target for interactive circles on touch devices
* Non-interactive circles (most common) are not focusable

---

## States

Progress Circles are typically non-interactive and display only a static progress value. However, the progress value can change dynamically:

* **Transition Animation**
  * Progress arc animates smoothly when value changes
  * Duration: 0.6s ease transition
  * Creates smooth, continuous progress indication

* **Value Changes**
  * Component re-renders with new progress value
  * Arc fills/unfills smoothly to new position
  * Label updates to reflect new value

---

## Spacing

* **Circle diameter**: Customizable (default 120px, range 80px-200px)
* **Stroke width**: Calculated as 6% of diameter (minimum 3px) for a thinner appearance
* **Label positioning**: Centered both horizontally and vertically
* **Container padding**: Minimum `var(--spacing-100)` (16px) around circle
* **Gap between circles**: `var(--spacing-150)` (24px) when displaying multiple
* **Supporting text gap**: `var(--spacing-100)` (16px) between circle and text

---

## Best Practices

### Do

* Use short, concise numeric labels (percentages, integers, fractions)
* Ensure typography is at least 12px for accessibility
* Scale typography proportionally to circle size
* Use Progress Circles in cards, panels, or modals for context
* Provide supporting text outside the circle for clarity
* Use "99+" notation for values exceeding 99
* Maintain adequate padding around the circle
* Consider the overall UI aesthetic when choosing circle vs bar
* Match variant color to the semantic meaning
* Use appropriate variant for the context (positive for success, negative for errors)

### Don't

* Use typography smaller than 12px
* Try to fit long text labels inside the circle
* Use Progress Circles when detailed progress tracking is needed
* Overcrowd the interface with too many Progress Circles
* Forget to provide context for what the number represents
* Use Progress Circles for sequential, multi-step processes
* Place Progress Circles in cramped spaces without adequate padding
* Use colors that don't meet contrast requirements
* Rely solely on color to convey meaning
* Use Progress Circles for file uploads/downloads (use Progress Bar)

---

## Progress Circle vs Progress Bar

| Progress Circle | Progress Bar |
|---|---|
| Compact, circular design | Linear, horizontal design |
| Best for single metrics | Best for sequential progress |
| Space-constrained layouts | Horizontal layouts with space |
| Dashboard widgets | File uploads/downloads |
| Balance/quota displays | Multi-step processes |
| Card-based layouts | Time-based progress |
| Limited label space | More room for detailed labels |

**Use Progress Circle for:**
* Compact metric displays
* Dashboard widgets
* Balance indicators
* Quota displays
* Space-constrained interfaces
* Single-value highlights
* Card-based layouts

**Use Progress Bar for:**
* File uploads/downloads
* Multi-step processes
* Detailed progress tracking
* Time-based progress
* Sequential workflows
* Horizontal layouts with more space

---

## Common Use Cases

1. **Balance Displays**
   * Vacation days available
   * Credit balances
   * Quota usage

2. **Completion Status**
   * Task completion percentage
   * Profile completion
   * Course progress

3. **Availability Indicators**
   * Available slots
   * Remaining capacity
   * Stock levels

4. **Score Displays**
   * Test scores
   * Ratings
   * Performance metrics

5. **Time Tracking**
   * Hours worked
   * Time remaining
   * Deadline proximity

6. **Capacity Indicators**
   * Storage usage
   * Bandwidth usage
   * Resource allocation

---

## Design Considerations

### Proportions
* Maintain circular shape at all sizes
* Keep progress stroke width proportional to circle size (typically 6% for a thinner look)
* Balance label size with circle diameter (typically 25%)
* Ensure stroke width is visible but not overwhelming

### Spacing
* Provide adequate padding within cards or containers (minimum 16px)
* Ensure sufficient space around the circle for clarity
* Consider grouping related Progress Circles with consistent spacing
* Use spacing tokens for consistency

### Context
* Always provide context for what the progress represents
* Use supporting text, titles, or descriptions outside the circle
* Consider placement within larger information hierarchies
* Ensure the metric is meaningful to users

### Color Usage
* Use semantic colors appropriately (positive for success, negative for errors)
* Ensure sufficient contrast between progress and track
* Don't rely solely on color to convey meaning
* Test with color blindness simulators

---

## Integration with Other Components

Progress Circles work well with:

* **Card**: Perfect for dashboard widgets and metric displays
* **Panel**: Grouped metrics within panels
* **Badge**: Combine with badges for additional context
* **Typography**: Use headings and body text for context
* **Section**: Organize multiple Progress Circles in sections

---

## Component Props

```tsx
interface ProgressCircleProps {
  /** Progress value from 0 to 100 */
  value: number;
  /** Label to display inside the circle (e.g., "50%", "3", "72/100") */
  label?: string;
  /** Size of the circle in pixels (diameter) */
  size?: number;
  /** Font size for the label in pixels (minimum 12px for accessibility) */
  labelFontSize?: number;
  /** Color variant for the progress */
  variant?: 'primary' | 'positive' | 'notice' | 'negative';
  /** Additional CSS class name */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
  /** ARIA label for accessibility */
  ariaLabel?: string;
}
```

---

## Examples

### Basic Usage

```tsx
// Default percentage display
<ProgressCircle value={75} />

// Custom integer label
<ProgressCircle value={30} label="3" />

// Custom size and variant
<ProgressCircle 
  value={90} 
  variant="positive" 
  size={160} 
  labelFontSize={48} 
/>

// Fraction display
<ProgressCircle 
  value={72} 
  label="72/100" 
  labelFontSize={20} 
/>
```

### In a Card

```tsx
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Holiday Balance</CardTitle>
  </CardHeader>
  <CardContent>
    <ProgressCircle 
      value={50} 
      label="10" 
      variant="primary" 
      size={140} 
      labelFontSize={48}
      ariaLabel="10 days available"
    />
    <p>days available</p>
  </CardContent>
</Card>
```

---

**Version:** 1.0.0  
**Last Updated:** February 13, 2026  
**Component Status:** ✅ Ready for production
