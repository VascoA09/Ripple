---
name: Tooltip
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [overlay, feedback]
---

# Tooltip

A tooltip is a small, non-interactive overlay that appears on hover or focus to provide brief supplementary information about an element. It is used to clarify the purpose or label of UI elements — particularly icon buttons, truncated text, or controls that lack a visible label.

---

## When to use

Use tooltips to provide short, contextual descriptions for interface elements that are not self-explanatory on their own. They are most appropriate for:

- Labelling icon-only buttons or controls that lack visible text
- Clarifying the meaning of abbreviated or truncated content
- Providing supplementary context that would clutter the interface if shown permanently
- Explaining the purpose of unfamiliar interface elements
- Showing keyboard shortcuts or additional information about controls

## When not to use

Do not use tooltips to convey critical information that users must read to complete a task. Tooltips are transient and may not be discoverable by all users — especially on touch devices where hover is unavailable.

Avoid tooltips for long or complex content. If the information requires more than a short phrase, consider using a popover, inline help text, or a helper panel instead.

Do not use tooltips on non-interactive elements unless there is a clear accessibility reason to do so. Screen readers may not announce tooltip content on elements without a defined interactive role.

Do not use tooltips to repeat information that is already visible in the interface.

---

## Anatomy

The tooltip component consists of the following structural elements:

1. **Container** — The floating surface that holds the tooltip content. It has a solid background, rounded corners, and a drop shadow to distinguish it from the underlying UI.
2. **Content** — A short text label or brief description. Tooltips should contain only plain text — avoid rich content, links, or interactive elements.
3. **Arrow / Caret (optional)** — A directional indicator that visually connects the tooltip to its trigger element.
4. **Trigger** — The interactive element (e.g., button, icon, or link) that the tooltip is associated with. The trigger is not part of the tooltip component itself but defines its context.

---

## Placement

Tooltips can be positioned around their trigger in four directions:

- **Top (default)** — Appears above the trigger, centred horizontally.
- **Bottom** — Appears below the trigger, centred horizontally.
- **Left** — Appears to the left of the trigger, centred vertically.
- **Right** — Appears to the right of the trigger, centred vertically.

Each direction also supports **start** and **end** alignment variants (e.g., top-start, top-end), allowing the tooltip to align with the leading or trailing edge of the trigger when centred positioning would cause the tooltip to overflow the viewport.

The tooltip automatically repositions if it would otherwise overflow the visible screen area.

---

## Behaviour

### Trigger events

Tooltips are shown when the user:

- **Hovers** the pointer over the trigger element
- **Focuses** the trigger element via keyboard navigation

Tooltips are hidden when the user:

- Moves the pointer away from the trigger
- Moves keyboard focus away from the trigger
- Presses Escape

### Delay

A short delay (typically 300–500ms) is applied before the tooltip appears on hover. This prevents tooltips from flickering when users move the pointer across the interface without intent to read them. No delay is applied when the trigger receives keyboard focus.

### Persistence

Tooltips are transient — they do not persist when the user clicks the trigger, and they cannot be interacted with. If interactive content (such as a link or button) is needed inside the overlay, use a popover instead.

### Touch devices

Tooltips triggered by hover are not natively available on touch devices. Avoid placing essential information exclusively in tooltips. On touch, tooltips may be shown on long press where platform conventions support it, but this should not be relied upon.

---

## Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `content` | string | — | The text content displayed inside the tooltip. |
| `placement` | string | `"top"` | The preferred position of the tooltip relative to the trigger: `top`, `bottom`, `left`, `right`, and their `-start` / `-end` variants. |
| `showArrow` | boolean | `true` | Controls whether the directional arrow/caret is displayed. |
| `delay` | number | `300` | The delay in milliseconds before the tooltip appears on hover. |
| `disabled` | boolean | `false` | Prevents the tooltip from appearing when set to `true`. |
| `maxWidth` | string | `"200px"` | The maximum width of the tooltip container before text wraps. |

---

## Design guidelines

### Content

Keep tooltip content concise — ideally a single short sentence or a brief label. Tooltips are not the place for detailed explanations, instructions, or interactive content.

Use sentence case for tooltip text. Do not end tooltip labels with a full stop unless the content is a complete sentence that requires it for clarity.

### Sizing and width

Tooltips should be wide enough to display their content without unnecessary wrapping, but should not exceed a sensible maximum width (typically `200px`–`280px`). If the content requires more space, reconsider whether a tooltip is the right pattern.

### Contrast

The tooltip container must have sufficient contrast against the underlying UI. Use the appropriate background and text color tokens from the design system to ensure readability in both light and dark themes.

### Z-index and layering

Tooltips must appear above all other UI elements, including modals and overlays. Ensure the tooltip's z-index is set appropriately within the design system's layering scale.

---

## Accessibility

- Tooltips are implemented using `aria-describedby` pointing to a visually rendered tooltip element, so the content is available to screen readers.
- The trigger element must be focusable (e.g., a `<button>` or element with `tabindex="0"`) for the tooltip to be accessible via keyboard.
- Tooltip content is associated with the trigger using `aria-describedby` so screen readers announce it when the trigger receives focus.
- Do not place interactive elements (links, buttons) inside a tooltip. Use a popover for interactive overlay content.
- Pressing Escape dismisses the tooltip, following established keyboard interaction conventions.
- Tooltips must not be the sole means of conveying critical information, as they are not accessible on touch devices and may be missed by users who navigate without a pointer.
- The tooltip container itself is not focusable and is excluded from the tab order.

---

## Spacing

- Padding: `var(--spacing-50) var(--spacing-75)` (8px 12px)
- Border radius: `var(--border-radius-150)` (6px)
- Side offset from trigger: 8px
- Arrow size: 12px width × 6px height
- Maximum width: 200px (customizable)

---

## Colors

### Light Mode
- Background: `var(--bg-neutral-loud)` (dark gray)
- Text: `var(--text-loud-inverse)` (white)
- Shadow: `var(--box-shadow-200)`

### Dark Mode
- Background: `var(--color-cool-gray-90)`
- Text: `var(--text-loud)` (white)
- Shadow: Enhanced for visibility on dark backgrounds

---

## Typography

- Font family: `var(--font-family)` (Open Sans)
- Font size: `var(--font-size-80)` (14px)
- Font weight: `var(--font-weight-regular)` (400)
- Line height: `var(--line-height-body)` (150%)

---

## Best Practices

### Content Guidelines

- Keep tooltip content concise — ideally a single short sentence or brief label
- Use sentence case for tooltip text
- Avoid abbreviations unless they are widely understood
- Don't end labels with a full stop unless it's a complete sentence
- Be descriptive and specific (e.g., "Download report as PDF" instead of just "Download")

### Usage Guidelines

- Provide tooltips for all icon-only buttons
- Use tooltips to explain unfamiliar or abbreviated terms
- Ensure the trigger element is keyboard focusable
- Use appropriate hover delay (300ms default) to prevent flickering
- Test tooltip positioning at viewport edges
- Don't place interactive elements (links, buttons) inside tooltips
- Don't use tooltips for critical information users must read
- Don't make tooltips too wide — consider a popover for longer content
- Don't repeat information already visible in the interface
- Don't rely on tooltips as the sole explanation on touch devices

### Accessibility Best Practices

- Always ensure trigger elements are keyboard accessible
- Use aria-describedby for proper screen reader support
- Don't rely on color alone to convey information
- Test with keyboard navigation (Tab and Escape)
- Verify screen reader announcements
- Provide alternative ways to access information on touch devices

---

## Common Use Cases

### Icon Button Toolbars

Provide clear labels for icon-only actions:
- Copy, paste, delete buttons
- Formatting controls
- Quick action menus

### Form Field Helpers

Clarify field requirements or provide additional context:
- Password requirements
- Format expectations
- Privacy information

### Truncated Content

Show full text that's been cut off due to space constraints:
- Long file names
- Email addresses
- URLs
- User names

### Status Indicators

Explain the meaning of status badges or icons:
- Connection status
- Sync status
- Processing state

---

## Related Components

- **Popover** — Use for interactive content or longer information
- **Icon Button** — Commonly paired with tooltips for labeling
- **Badge** — May use tooltips to explain status meanings
- **Help Text** — Use for permanent helper content in forms
