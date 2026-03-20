---
name: Accordion
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [disclosure, navigation]
---

# Accordion

The Accordion component organizes content into collapsible sections, allowing users to expand and collapse panels to view or hide information. Multiple panels can be open simultaneously, making it ideal for managing large amounts of related content in a compact space.

---

## Usage

Accordions should be used to organize and present content in a scannable, space-efficient manner. They help users focus on specific sections while keeping related content accessible.

Use Accordions when:
* Displaying content that can be organized into distinct sections
* Managing long pages with multiple topics or categories
* Users benefit from seeing section headers at a glance
* Screen space is limited and content needs to be progressive disclosed
* Creating FAQ sections or help documentation
* Building settings panels with grouped options
* Organizing form sections that can be completed independently

Do not use Accordions when:
* All content needs to be visible simultaneously for comparison
* The content is too brief to warrant collapsing
* Users need to reference multiple sections at once
* The interaction adds unnecessary complexity
* There are only 1-2 sections (use headings instead)
* Critical information might be missed when collapsed

---

## Anatomy

The Accordion consists of the following elements:

* **Accordion Container** — Wrapper for all accordion items
* **Accordion Item** — Individual collapsible section
  * **Header** — Clickable area that toggles expansion
    * Before element (optional) — Icon or visual element before header text
    * Header text — Title of the section
    * Chevron icon — Indicates expand/collapse state (rotates 180° when open)
  * **Content** — Collapsible area containing the section's content
  * **Divider** — Separator between accordion items

---

## Sizes

Accordions come in three sizes that affect the header height and spacing:

* **Small Accordion**
  * **Header height**: 32px
  * **Font size**: var(--font-size-80) (14px)
  * **Chevron icon**: 16px
  * **Header padding**: 0 var(--spacing-100) (0 16px)
  * **Content padding**: var(--spacing-75) var(--spacing-100) var(--spacing-100) (12px 16px 16px)
  * **Usage**: Compact interfaces, sidebars, or dense layouts

* **Medium Accordion (Default)**
  * **Header height**: 40px
  * **Font size**: var(--font-size-100) (16px)
  * **Chevron icon**: 20px
  * **Header padding**: 0 var(--spacing-100) (0 16px)
  * **Content padding**: var(--spacing-100) var(--spacing-100) var(--spacing-150) (16px 16px 24px)
  * **Usage**: Standard layouts, recommended for most use cases

* **Large Accordion**
  * **Header height**: 48px
  * **Font size**: var(--font-size-120) (18px)
  * **Chevron icon**: 24px
  * **Header padding**: 0 var(--spacing-100) (0 16px)
  * **Content padding**: var(--spacing-125) var(--spacing-100) var(--spacing-200) (20px 16px 32px)
  * **Usage**: Prominent sections, touch interfaces, or high-emphasis content

---

## States

### Accordion Item States

* **Collapsed (Closed)**
  * Content is hidden
  * Chevron points down (0°)
  * Header background: var(--bg-surface)
  * Border: 1px solid var(--border-default)

* **Expanded (Open)**
  * Content is visible
  * Chevron points up (rotated 180°)
  * Smooth height animation
  * Content slides down/up

* **Hover**
  * Header background: var(--bg-neutral-softest)
  * Smooth transition
  * Only applies when cursor is over header

* **Focus**
  * Outline: 2px solid var(--border-focus)
  * Outline offset: 2px
  * Clear keyboard focus indicator

* **Active (Pressed)**
  * Header background: var(--bg-neutral-soft)
  * Visual feedback during click

* **Disabled**
  * Header background: var(--bg-surface)
  * Text: var(--text-soft)
  * Chevron: var(--text-soft)
  * Opacity: 0.6
  * Cursor: not-allowed
  * Not keyboard navigable

---

## Behavior

### Expansion

* **Multiple Open Items**: All accordion items can be expanded simultaneously
* **Independent Control**: Each item expands/collapses independently
* **No Forced Collapse**: Opening one item does not close others
* **Default State**: Can set initially expanded items via `defaultValue` prop

### Animation

* **Smooth Transitions**: Content expands and collapses with height animation
* **Chevron Rotation**: Rotates 180° when toggling between states
* **Duration**: Consistent animation timing (~200-300ms)
* **Easing**: Smooth cubic-bezier easing for natural motion

### Keyboard Navigation

* **Tab**: Move focus between accordion headers
* **Enter/Space**: Toggle expansion of focused item
* **Arrow Down**: Move focus to next header
* **Arrow Up**: Move focus to previous header
* **Home**: Focus first accordion header
* **End**: Focus last accordion header

### Mouse Interaction

* Click header to toggle expansion
* Entire header area is clickable
* Hover feedback on header only
* Content is not interactive for expansion/collapse

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | AccordionItem[] | required | Array of accordion items to display |
| `size` | 'small' \| 'medium' \| 'large' | 'medium' | Size variant of the accordion |
| `defaultValue` | string[] | — | Array of initially expanded item values |
| `value` | string[] | — | Controlled expanded values |
| `onValueChange` | function | — | Callback when expanded values change |
| `className` | string | — | Optional CSS class name |

### AccordionItem Interface

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `value` | string | yes | Unique identifier for the item |
| `header` | string | yes | Header text displayed in the header |
| `content` | React.ReactNode | yes | Content displayed when expanded |
| `beforeElement` | React.ReactNode | no | Element before header text (e.g., icon) |
| `disabled` | boolean | no | Whether the item is disabled |

---

## Spacing

Use Ripple spacing tokens for all spacing:

**Small:**
* Header padding: 0 var(--spacing-100) (0 16px)
* Content padding: var(--spacing-75) var(--spacing-100) var(--spacing-100) (12px 16px 16px)
* Gap between before element and header: var(--spacing-50) (8px)

**Medium:**
* Header padding: 0 var(--spacing-100) (0 16px)
* Content padding: var(--spacing-100) var(--spacing-100) var(--spacing-150) (16px 16px 24px)
* Gap between before element and header: var(--spacing-75) (12px)

**Large:**
* Header padding: 0 var(--spacing-100) (0 16px)
* Content padding: var(--spacing-125) var(--spacing-100) var(--spacing-200) (20px 16px 32px)
* Gap between before element and header: var(--spacing-75) (12px)

**General:**
* Gap between items: 0 (items are separated by borders)
* Border radius: var(--border-radius-200) (8px)

---

## Accessibility

* **ARIA Roles**: 
  * Uses `role="region"` for accordion items
  * Headers use `role="button"` for interactivity

* **ARIA States**:
  * `aria-expanded="true/false"` indicates item state
  * `aria-controls` links header to content panel
  * `aria-disabled="true"` for disabled items
  * `aria-labelledby` connects content to header

* **Keyboard Support**:
  * Full keyboard navigation with Tab and arrow keys
  * Enter/Space to toggle expansion
  * Home/End to jump to first/last item
  * Focus visible and clearly indicated

* **Focus Management**:
  * Focus moves between headers only
  * Expanded content is not in tab order
  * Clear visible focus indicators (2px outline with 2px offset)
  * Focus remains on header after toggling

* **Screen Readers**:
  * Headers announce as buttons
  * Expansion state announced (expanded/collapsed)
  * Content is read when expanded
  * Disabled state announced

* **Touch Targets**:
  * Small: 32px height (below 48px minimum, avoid on touch devices)
  * Medium: 40px height (acceptable for desktop, marginal for touch)
  * Large: 48px height (meets accessibility minimum for touch)

* **Color Contrast**:
  * Text meets 4.5:1 contrast ratio
  * Interactive elements meet 3:1 contrast ratio
  * Focus indicators clearly visible

---

## Colors

**Collapsed State:**
* Header background: var(--bg-surface)
* Header text: var(--text-loud)
* Chevron: var(--text)
* Border: 1px solid var(--border-default)

**Expanded State:**
* Header background: var(--bg-surface)
* Header text: var(--text-loud)
* Chevron: var(--text) (rotated 180°)
* Content background: var(--bg-surface)
* Content text: var(--text)
* Border: 1px solid var(--border-default)

**Hover State:**
* Header background: var(--bg-neutral-softest)
* Header text: var(--text-loud)
* Chevron: var(--text)

**Focus State:**
* Outline: 2px solid var(--border-focus)
* Outline offset: 2px

**Active State:**
* Header background: var(--bg-neutral-soft)
* Header text: var(--text-loud)

**Disabled State:**
* Header background: var(--bg-surface)
* Header text: var(--text-soft)
* Chevron: var(--text-soft)
* Opacity: 0.6

---

## Content Guidelines

### Header Text

* Use clear, descriptive headers that summarize section content
* Keep headers concise (3-8 words ideally)
* Use sentence case
* Be specific: "Payment settings" not just "Settings"
* Start with the most important word
* Make headers scannable

### Content

* Organize related information within each section
* Keep content focused on the header topic
* Use consistent formatting across sections
* Don't hide critical information in collapsed sections
* Provide enough context in headers so users know whether to expand

### Before Elements

* Use icons to reinforce header meaning
* Maintain consistent icon style across all items
* Ensure icons are decorative, not essential for understanding
* Use appropriate icon size for accordion size

---

## Best Practices

### Do

* Use clear, descriptive section headers
* Organize content logically by topic or category
* Allow multiple sections to be open simultaneously
* Provide visual feedback on hover and focus
* Use appropriate size for the context (large for touch)
* Maintain consistent accordion item structure
* Order sections by importance or frequency of use
* Keep section headers scannable
* Use before elements (icons) consistently
* Provide keyboard navigation

### Don't

* Don't hide critical information users need immediately
* Don't use accordions for linear workflows or forms
* Don't create too many levels of nesting (avoid nested accordions)
* Don't make headers too vague ("More information")
* Don't use small size on touch devices
* Don't force all sections closed by default if users need to see content
* Don't use accordions for 1-2 simple items
* Don't mix sizes within the same accordion
* Don't forget to handle disabled states appropriately
* Don't rely solely on icons without text labels

---

## Common Patterns

### Basic Accordion
```typescript
<Accordion
  items={[
    {
      value: '1',
      header: 'Section 1',
      content: <p>Content for section 1</p>,
    },
    {
      value: '2',
      header: 'Section 2',
      content: <p>Content for section 2</p>,
    },
    {
      value: '3',
      header: 'Section 3',
      content: <p>Content for section 3</p>,
    },
  ]}
/>
```

### With Icons (Before Elements)
```typescript
<Accordion
  items={[
    {
      value: '1',
      header: 'User Settings',
      beforeElement: <User size={20} />,
      content: <p>User settings content</p>,
    },
    {
      value: '2',
      header: 'Privacy Settings',
      beforeElement: <Lock size={20} />,
      content: <p>Privacy settings content</p>,
    },
  ]}
/>
```

### With Default Expanded Items
```typescript
<Accordion
  defaultValue={['1', '3']}
  items={[
    { value: '1', header: 'Expanded by default', content: <p>Content 1</p> },
    { value: '2', header: 'Collapsed by default', content: <p>Content 2</p> },
    { value: '3', header: 'Also expanded', content: <p>Content 3</p> },
  ]}
/>
```

### Controlled Accordion
```typescript
const [expanded, setExpanded] = useState(['1']);

<Accordion
  value={expanded}
  onValueChange={setExpanded}
  items={items}
/>
```

### With Disabled Items
```typescript
<Accordion
  items={[
    { value: '1', header: 'Available Section', content: <p>Content</p> },
    { value: '2', header: 'Disabled Section', content: <p>Hidden</p>, disabled: true },
    { value: '3', header: 'Another Section', content: <p>Content</p> },
  ]}
/>
```

### Different Sizes
```typescript
// Small for compact layouts
<Accordion size="small" items={items} />

// Medium (default) for standard layouts
<Accordion size="medium" items={items} />

// Large for touch interfaces
<Accordion size="large" items={items} />
```

---

## Related Components

* **Panel**: Use for collapsible containers with single expand/collapse
* **Tabs**: Use for mutually exclusive content (one visible at a time)
* **Card**: Use for static grouped content that doesn't need collapsing
* **Dialog**: Use for content that overlays the page
* **Section**: Use for static content organization

---

## Common Use Cases

* **FAQ sections**: Questions and answers
* **Settings panels**: Grouped configuration options
* **Product details**: Specifications, reviews, shipping info
* **Documentation**: Table of contents with expandable sections
* **Forms**: Multi-section forms where sections can be completed independently
* **Filters**: Expandable filter groups in e-commerce
* **Navigation**: Sidebar navigation with collapsible groups
* **Help content**: Troubleshooting guides and documentation

---

## Typography

All text uses Ripple typography tokens:

* **Small header**: var(--font-size-80) (14px), var(--font-weight-semibold)
* **Medium header**: var(--font-size-100) (16px), var(--font-weight-semibold)
* **Large header**: var(--font-size-120) (18px), var(--font-weight-semibold)
* **Content text**: var(--font-size-100) (16px), var(--font-weight-regular)
* **Font family**: var(--font-family) (Open Sans)
* **Line height**: var(--line-height-body) (150%)

---

## Animations

* **Content Expansion**: 
  * Height animates from 0 to auto
  * Duration: ~250ms
  * Easing: cubic-bezier(0.4, 0, 0.2, 1)

* **Chevron Rotation**:
  * Rotates 180° on toggle
  * Duration: ~200ms
  * Easing: cubic-bezier(0.4, 0, 0.2, 1)

* **Hover Transition**:
  * Background color transitions smoothly
  * Duration: ~150ms

* **Respects Motion Preferences**:
  * Honors `prefers-reduced-motion` media query
  * Reduces or removes animations for accessibility

---

## Technical Notes

* Built on Radix UI Accordion primitive
* Supports both controlled and uncontrolled modes
* Multiple items can be open simultaneously (not mutually exclusive)
* Each item has unique `value` prop for identification
* Smooth height animations with CSS transitions
* Accessible by default with proper ARIA attributes
* Keyboard navigation fully supported
* Focus management handled automatically
