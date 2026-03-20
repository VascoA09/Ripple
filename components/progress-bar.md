---
name: Progress Bar
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [feedback, status]
---

# Progress Bar

The Progress Bar visually displays the progress of a task. It appears as a horizontal bar that fills from left to right, showing the percentage of the task that has been completed. They can represent either determinate or indeterminate progress.

---

## Usage

Progress bars should be used to provide visual feedback during loading or processing states, helping users understand that an operation is in progress.

Use progress bars when:
* Displaying measurable progress for file uploads or downloads
* Showing completion status of multi-step processes
* Tracking tasks with calculable completion time
* Visualizing time-based countdowns or timers
* Indicating system operations with unknown duration

Do not use progress bars when:
* Instantaneous operations that complete immediately
* Static displays that don't require progress tracking
* When you can't provide meaningful progress information
* Operations where users don't benefit from seeing progress

---

## Anatomy

A Progress Bar consists of the following elements:

### Progress Area
A track along which the progress value runs:

* **Track**: The static area that the bar indicator moves across, serving as a fixed visual reference for the total length and duration of the process
* **Progress**: Visual indicator of progress that fills the track to show completion
* **Value**: The value is an optional label that displays the progress of a system operation, for example, downloading, uploading, or processing. The value displayed can be swapped with an icon (success or error) depending on the scenario
* **Label**: An optional property that describes the process that the Progress Bar refers to. The label can be visually hidden but must be defined for accessibility
* **Hint**: An optional area used to provide additional information about progress

---

## Type

The Progress Bar can be either a **Determinate** progress bar used when the progress is measurable, or an **Indeterminate** progress bar used when the value cannot be quantified or predicted.

### Determinate Progress Bar

Determinate progress bars are used when the progress of a task is measurable. The Track fills according to a known percentage of completion, providing users with clear feedback on how much of the task has been completed and how much remains. This type is ideal for scenarios where you can predict or calculate the total duration or effort required to complete a task.

**Use when:**
* File uploads or downloads with known size
* Multi-step processes with defined steps
* Tasks with calculable completion time
* Processes where progress can be measured quantitatively

**Example:**
* "33.6 MB of 48 MB" with 70% completion

### Indeterminate Progress Bar

Indeterminate progress bars are used when the progress cannot be quantified or predicted. The Track displays ongoing activity through an animated pattern to indicate that the process is active and does not show a specific percentage of completion. This type is suitable for tasks where the duration is unknown or varies, ensuring that users know the system is working even if the end time is uncertain.

**Use when:**
* Loading content from external sources
* Processing with unknown duration
* System operations without measurable progress
* Tasks where completion time varies significantly

**Visual behavior:**
* Animated pattern moving across the track
* No specific percentage displayed
* Continuous motion to indicate active processing

---

## State

The Progress Bar states are relevant for both Determinate and Indeterminate progress bars. Once the process finishes, whether successfully or unsuccessfully, the Progress Bar can either stay visible as a form of confirmation or validation, or it can be automatically dismissed after a defined time-out, based on what best suits the use case.

The Progress Bar has three states:

### Active
Used when the progress is ongoing.

**Characteristics:**
* Blue (primary color) progress indicator
* Shows current percentage (for determinate)
* Animated motion (for indeterminate)

### Success
Displayed when the progress is successfully completed.

**Characteristics:**
* Green (positive color) progress indicator
* Success icon (checkmark) displayed
* Full bar indicating 100% completion
* Example: "48 MB of 48 MB" with checkmark icon

### Error
Used when the progress could not be completed.

**Characteristics:**
* Red (negative color) progress indicator
* Error icon (X) displayed
* Progress stopped at failure point
* Example: "24.3 MB of 48 MB" with error icon

---

## Size

The Progress Bar has only one size, which is scalable and can be adjusted to the chosen width.

**Flexibility:**
* Width adjusts to container
* Maintains consistent height (8px)
* Scales proportionally

---

## Placement

The Progress Bar is a versatile component that can be either used as a stand-alone component, or nested inside other Containers and components such as Card, Panel, Modal, or Data grid.

### The Progress Bar in a Modal

**Use case:** Session timeout notifications

**Example implementation:**
* Modal title: "You're about to be signed out"
* Message: "This will happen in 30 seconds"
* Progress bar showing time remaining
* Action buttons: "Sign out" and "Continue session"

**Best for:**
* Time-limited notifications
* Warning users before automatic actions
* Countdown timers with visual feedback

### The Progress Bar in a Data Grid

**Use case:** Project or task completion tracking

**Example implementation:**
* Column showing completion rate
* Progress bars for each row
* Percentage values alongside bars
* Different states (success, warning, error) indicated by color

**Best for:**
* Tracking multiple items simultaneously
* Comparing progress across different entries
* Dashboard views with status indicators

---

## Content Guidelines

### Label

The Progress Bar Label should be clear, concise and clearly communicate what the progress represents. In cases where multiple Progress Bars are used within a page, the Label should help the user to differentiate them.

**Best practices:**
* Use descriptive labels: "Loading...", "Uploading file", "Processing data"
* Keep labels concise (1-3 words when possible)
* Ensure labels are unique when multiple progress bars are present
* Make labels accessible even if visually hidden

### Hint

If the Hint is used, it should provide additional context without cluttering the label, such as indicating how much of the submitted data is uploaded.

**Best practices:**
* Provide specific details: "33.6 MB of 48 MB"
* Show estimated time remaining when available
* Keep hints informative but brief
* Update hints as progress continues

### Value Display

**Options for value display:**
* Percentage (e.g., "70%")
* Fraction (e.g., "33.6 MB of 48 MB")
* Success/error icons upon completion
* Can be hidden if context is clear from label

---

## Accessibility

* **ARIA attributes**: Use appropriate ARIA roles and properties (role="progressbar", aria-valuenow, aria-valuemin, aria-valuemax)
* **Labels**: Always define labels for screen readers, even if visually hidden
* **State announcements**: Ensure state changes (success, error) are announced to assistive technologies
* **Focus management**: Consider focus behavior when progress completes or errors occur
* **Color contrast**: Ensure sufficient contrast for progress indicators
* **Alternative text**: Provide text alternatives for icon-only states (success/error)
* **Live regions**: Use ARIA live regions to announce progress updates when appropriate
* **Motion sensitivity**: Respects `prefers-reduced-motion` media query for indeterminate animations

---

## Spacing

* Track height: 8px
* Border radius: `var(--border-radius-300)` (12px for pill shape)
* Gap between header and track: `var(--spacing-50)` (8px)
* Gap between track and hint: `var(--spacing-50)` (8px)
* Label font size: `var(--font-size-80)` (14px)
* Value font size: `var(--font-size-80)` (14px)
* Hint font size: `var(--font-size-80)` (14px)

---

## Colors

### Active State
* Progress indicator: `var(--color-primary)`
* Track background: `var(--color-cool-gray-30)`

### Success State
* Progress indicator: `var(--color-positive)`
* Track background: `var(--color-cool-gray-30)`

### Error State
* Progress indicator: `var(--color-negative)`
* Track background: `var(--color-cool-gray-30)`

---

## Best Practices

* Use determinate progress bars when progress can be measured
* Use indeterminate progress bars for unknown durations
* Provide clear labels that describe what is loading or processing
* Show success or error states when process completes
* Use hints to provide specific details (MB uploaded, time remaining)
* Position progress bars where users expect feedback
* Ensure labels are defined for accessibility even if visually hidden
* Consider auto-dismissing after success/error based on use case
* Don't use progress bars for instantaneous operations
* Don't show false progress (jumping to 100% without actual completion)
* Don't display progress bars without any context or label
* Don't use determinate bars when you can't calculate actual progress
* Don't rely solely on color to indicate state
* Don't create cluttered interfaces with redundant information
* Don't leave progress bars in active state indefinitely
* Don't forget to handle error states appropriately

---

## When to Use Progress Bar vs Spinner

### Use Progress Bar when:
* Progress is measurable and can be shown as a percentage
* Task has known duration or steps
* Users benefit from seeing incremental progress
* Multiple tasks need tracking simultaneously (e.g., in data grids)
* Time-based countdowns or timers are needed

### Use Spinner when:
* Indicating general loading or processing
* Progress cannot be measured
* Task is brief and progress tracking adds no value
* Page or component is loading initial content
* Space is limited and detailed progress isn't critical
