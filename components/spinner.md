---
name: Spinner
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [feedback, status]
---

# Spinner

## Overview

The Spinner component provides a visual cue to indicate loading or processing states within an interface. It is usually animated and helps users to be aware of ongoing operations.

---

### Usage

Spinners should be used to provide visual feedback during loading or processing states, helping users understand that an operation is in progress.

Use spinners when:
* Fetching data from external sources to indicate an ongoing process
* During intricate tasks like file uploads or calculations
* To provide immediate feedback to users, assuring them of system responsiveness
* Loading a specific component or module on a page

Do not use spinners when:
* Actions or processes complete almost instantaneously to prevent unnecessary visual interruptions
* Content is static and doesn't require user interaction or dynamic updates
* Loading entire page content (use skeleton placeholders instead for better UX)

---

### Anatomy

The Spinner comprises:

* **Loading spinner**: An animated circular element to visually indicate the loading state of a page or section
* **Label** (optional): Provides additional information about the loading process

---

### Variants

The Spinner has three variants that can be used according to the background color:

* **Primary**
  * **Purpose**: Default variant for light backgrounds
  * **Visual Style**: Primary color spinner (var(--color-primary)) with light gray track (var(--color-cool-gray-30))
  * **Usage**: Most commonly used on application surface colors
  * **Text Color**: var(--text)

* **Neutral**
  * **Purpose**: For application accent background colors
  * **Visual Style**: Neutral color spinner (var(--color-neutral-loud)) with medium gray track (var(--color-cool-gray-40))
  * **Usage**: Use on nav or accent colored backgrounds
  * **Text Color**: var(--text)

* **Inverse**
  * **Purpose**: For dark backgrounds
  * **Visual Style**: White spinner (var(--color-white)) with semi-transparent white track (rgba(255, 255, 255, 0.3))
  * **Usage**: Only use on dark or primary colored backgrounds
  * **Text Color**: var(--text-loud-inverse)

---

### Sizes

There are four different sizes:

* **Small (s)**
  * **Size**: 16px
  * **Stroke Width**: 2px
  * **Font Size**: var(--font-size-80) (12px)
  * **Usage**: Constrained spaces, inline with small text, or in compact UI elements

* **Medium (m)**
  * **Size**: 32px
  * **Stroke Width**: 3px
  * **Font Size**: var(--font-size-100) (16px)
  * **Usage**: Default size for most inline loading states

* **Large (l)**
  * **Size**: 64px
  * **Stroke Width**: 4px
  * **Font Size**: var(--font-size-120) (18px)
  * **Usage**: Prominent loading states within cards or sections

* **Extra-Large (xl)**
  * **Size**: 128px
  * **Stroke Width**: 6px
  * **Font Size**: var(--font-size-140) (20px)
  * **Usage**: Full-page loading overlays

---

### Label Position

The label has two positions:

* **Stacked**
  * **Purpose**: Default label position
  * **Visual Style**: Label appears below the loading spinner
  * **Gap**: var(--spacing-100) (16px)
  * **Usage**: Best for centered loading states and full-page overlays

* **Inline**
  * **Purpose**: Compact layout option
  * **Visual Style**: Label positioned next to the loading spinner
  * **Gap**: var(--spacing-75) (12px)
  * **Usage**: Best for inline loading states within buttons or small containers

---

### Placement

**Page Spinner:**
* The Extra-Large Spinner should appear centered over a page or content that it is loading
* Include a page overlay with semi-transparent black background (rgba(0, 0, 0, 0.5))
* No additional container - spinner displays directly on the backdrop
* Fixed positioning to cover entire viewport (z-index: 9999)
* Page overlays do not display a label for cleaner appearance

**Inline Spinner:**
* Can be positioned within a container to track progress of operations associated with a specific component
* Use Small or Medium sizes for inline contexts
* Center within the container using flexbox alignment
* Maintain adequate padding around the spinner
* May include optional label for context

---

### Animation

* Spinner uses a continuous rotation animation (360 degrees in 1 second)
* Animation is linear for consistent speed
* Circular arc (75% of circumference) with rounded line caps (strokeLinecap: "round")
* Animation automatically respects `prefers-reduced-motion` media query for accessibility
* When reduced motion is preferred, the animation is disabled

---

### Background Color and Variant

**Best Practices:**
* ✅ **Do**: Use the inverse variant on dark or accent colored backgrounds
* ✅ **Do**: Use primary variant on light backgrounds (white, light gray)
* ✅ **Do**: Use neutral variant on navigation or subtle accent backgrounds
* ❌ **Avoid**: Using the inverse variant on light backgrounds
* ❌ **Avoid**: Using primary variant on dark backgrounds

---

### Loading Content

Whenever possible, use skeleton placeholders over loading spinners for page content loading. Skeleton placeholders:
* Provide a perception of speed
* Maintain context and layout structure
* Engage users continuously
* Offer better visual hierarchy

**Spinner vs Skeleton:**

| Spinner | Skeleton Placeholder |
|---|---|
| Choose for tasks like file uploads or calculations | Ideal when performing a full-page load |
| Best used on a single module, card, or component | Encourages users to stay engaged |
| Indicates indefinite ongoing process | Allows users to predict where content will appear |
| Good for operations without known duration | Better for maintaining visual context |

**Spinner vs Progress Bar:**

| Spinner | Progress Bar |
|---|---|
| Best for ongoing processes without a definite endpoint | Best for tasks with known durations or quantifiable progress |
| Provides immediate feedback on system activity | Offers visual representation of progress towards completion |
| Used when progress percentage is unknown | Used when you can show percentage or steps completed |
| Simpler, less specific feedback | More detailed, specific feedback |

---

### States

The Spinner has only one visual state (loading/active). However, it can be shown or hidden based on loading state:

* **Visible**: When content is loading or processing
* **Hidden**: When content has loaded or processing is complete

For page overlays, the SpinnerOverlay component can be toggled using a `visible` prop.

---

### Accessibility

| Guideline | Implementation | Why it matters |
|-----------|----------------|----------------|
| **ARIA role** | Use `role="status"` on spinner container | Announces loading state to screen readers |
| **ARIA live region** | Include `aria-live="polite"` | Updates are announced without interrupting user |
| **ARIA label** | Provide `aria-label` or use label text | Gives context about what is loading |
| **Reduced motion** | Respect `prefers-reduced-motion` media query | Prevents motion sickness for sensitive users |
| **Page overlay** | Use `role="dialog"` and `aria-modal="true"` for overlays | Properly announces modal loading states |
| **Label hiding** | Mark visible label with `aria-hidden="true"` | Prevents duplicate announcements |
| **Descriptive text** | Use meaningful label text like "Loading content..." | Provides context beyond generic "Loading" |

**Implementation:**
```tsx
<div
  role="status"
  aria-live="polite"
  aria-label="Loading content"
>
  {/* Spinner SVG */}
</div>
```

---

### Spacing

* **Stacked label gap**: var(--spacing-100) (16px)
* **Inline label gap**: var(--spacing-75) (12px)
* **Container padding**: Maintain adequate padding around spinner based on context
* **Minimum touch target**: Ensure interactive loading states meet 44×44px touch target requirements

---

### Typography

Label text uses the following styles:

* **Font Family**: var(--font-family) (Open Sans)
* **Font Weight**: var(--font-weight-regular) (400)
* **Line Height**: var(--line-height-body) (150%)
* **Font Sizes** (based on spinner size):
  * Small: var(--font-size-80) (12px)
  * Medium: var(--font-size-100) (16px)
  * Large: var(--font-size-120) (18px)
  * Extra-Large: var(--font-size-140) (20px)

---

### Colors

**Primary Variant:**
* Spinner stroke: var(--color-primary)
* Track stroke: var(--color-cool-gray-30)
* Text color: var(--text)

**Neutral Variant:**
* Spinner stroke: var(--color-neutral-loud)
* Track stroke: var(--color-cool-gray-40)
* Text color: var(--text)

**Inverse Variant:**
* Spinner stroke: var(--color-white)
* Track stroke: rgba(255, 255, 255, 0.3)
* Text color: var(--text-loud-inverse)

---

### Content Guidelines

* Use clear, descriptive labels that explain what is loading
* Keep labels concise (1-3 words preferred)
* Use present progressive tense ("Loading...", "Processing...", "Uploading...")
* Avoid generic labels like "Please wait" when you can be more specific
* Examples of good labels:
  * "Loading content..."
  * "Uploading file..."
  * "Processing payment..."
  * "Fetching data..."

---

### Best Practices

* Use the inverse variant on dark or accent colored backgrounds only
* Prefer skeleton placeholders for full-page content loading
* Use spinners for single modules or components
* Always provide meaningful labels for better user context when using inline spinners
* Include ARIA labels for screen reader accessibility
* Use the Extra-Large size for full-page overlays without labels
* Use Medium or Large for inline loading states with optional labels
* Use Small sparingly and only in constrained spaces
* Respect `prefers-reduced-motion` for accessibility
* Don't nest spinners within spinners
* Remove or hide the spinner as soon as content is ready
* Consider adding a timeout to show error state if loading takes too long
* Use consistent spinner variants across similar contexts in your application
* For very quick operations (<300ms), consider not showing a spinner at all
* For longer operations (>10 seconds), consider showing progress information or estimated time
* Test spinner visibility and timing across different network speeds
* Ensure sufficient color contrast between spinner and background (WCAG AA: 3:1 minimum for UI elements)
