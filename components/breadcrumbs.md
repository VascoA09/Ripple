---
name: Breadcrumbs
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation]
---

# Breadcrumbs

Breadcrumbs are a secondary navigation aid that shows users their current location within the application's hierarchy. They provide a trail of links from the root or a high-level parent down to the current page, allowing users to understand where they are and navigate back up the structure quickly.

---

## Usage

Breadcrumbs should be used when the application has a multi-level hierarchy and users may need to navigate back to a parent view. They are particularly useful in deep navigation structures where users arrive at a page through multiple steps — such as record detail pages, nested settings, or hierarchical content views.

Breadcrumbs work best as a complement to the primary navigation, not a replacement for it.

Use breadcrumbs when:
* The application has a multi-level hierarchy
* Users need to navigate back to parent views
* Content is organized in nested categories
* Users arrive at pages through multiple navigation steps
* You want to provide location context within the hierarchy

Do not use breadcrumbs when:
* On top-level pages where there is no parent to navigate back to
* In flat navigation structures where all pages exist at the same level
* As the sole means of navigation within a complex hierarchy
* In single-page applications without clear hierarchical structure
* When the navigation path is not meaningful or helpful to users

---

## Anatomy

The breadcrumb component consists of the following structural elements:

### Breadcrumb Items

Individual links representing each level of the hierarchy. Each item is a clickable link except for the current page, which is non-interactive.

* **Purpose**: Allow users to navigate to ancestor pages in the hierarchy
* **Visual Style**: Blue link text (var(--color-primary-loud)) with underline on hover
* **Font**: var(--font-size-80) (14px), var(--font-weight-regular)
* **Max Width**: 200px (truncates with ellipsis if longer)

### Separators

Visual dividers placed between breadcrumb items to indicate the hierarchical relationship.

* **Purpose**: Show directional flow from parent to child
* **Default**: Chevron icon (›)
* **Alternative**: Slash (/)
* **Color**: var(--text-soft)
* **Size**: 16px
* **Spacing**: var(--spacing-25) (4px) on each side

### Current Page Indicator

The last item in the trail, representing the current page. It is visually differentiated to distinguish it from navigable ancestors.

* **Purpose**: Indicate the current location
* **Visual Style**: Default text color (var(--text)), not a link
* **Font Weight**: var(--font-weight-semibold)
* **State**: Non-interactive, includes aria-current="page"

### Overflow Control (Optional)

When the breadcrumb trail is too long to display in full, intermediate items are collapsed and replaced by an ellipsis (…) or a menu trigger that expands the hidden levels.

* **Purpose**: Manage long breadcrumb trails
* **Visual**: Ellipsis icon button (MoreHorizontal)
* **Behavior**: Opens dropdown menu with collapsed items
* **Size**: 32x32px button
* **Color**: var(--text-soft)

---

## Types

### Level (Standard Link)

A standard breadcrumb item representing a navigable ancestor page. It is rendered as a link and takes the user to that level of the hierarchy when clicked.

**Properties:**
* `label`: String - The page name
* `href`: String - The URL to navigate to
* `current`: Boolean (optional) - Whether this is the current page

**Example:**
```tsx
{ label: 'Products', href: '/products' }
```

### Menu

A breadcrumb item that, when clicked, opens a dropdown menu listing multiple sibling or child pages at that level. This is useful when a level in the hierarchy contains many peer items and the user may want to switch between them without navigating back and then forward again.

**Properties:**
* `label`: String - The category name
* `href`: String (optional) - URL if the label itself is clickable
* `menu`: Array - List of sibling pages

**Example:**
```tsx
{ 
  label: 'Projects', 
  href: '/projects',
  menu: [
    { label: 'Website Redesign', href: '/projects/website' },
    { label: 'Mobile App', href: '/projects/mobile' }
  ]
}
```

### Current Level

The final item in the breadcrumb trail, representing the page the user is currently on. It is non-interactive (not a link) and is visually styled to indicate the active or current state.

**Properties:**
* `label`: String - The current page name
* `current`: Boolean - Set to `true`

**Example:**
```tsx
{ label: 'Laptops', current: true }
```

---

## Displaying Page Names

### Full Display

When space allows, each breadcrumb item displays its full page name. This is the preferred format as it provides the clearest orientation.

* **Max Width**: 200px on desktop
* **Responsive**: Reduces to 120px on tablets, 80px on mobile

### Truncation

When a page name is too long to display in full within the available space, it is truncated with an ellipsis (`…`). The full page name should be accessible via a tooltip on hover or focus so users can read the complete label.

* **Implementation**: CSS `text-overflow: ellipsis`
* **Title Attribute**: Should contain full label text
* **Tooltip**: Recommended for better accessibility

**Truncation Priority:**
* Prioritize showing the root and current page in full
* Intermediate items are more appropriate candidates for truncation
* Truncation applies to individual items, not the trail as a whole

### Concatenation (Overflow)

When the full breadcrumb trail is too long to fit within the available horizontal space, intermediate levels are collapsed. The collapsed items are replaced by an ellipsis button or a menu trigger. Clicking the overflow control reveals the hidden levels as a dropdown menu.

* **MaxItems Prop**: Controls how many items to display (e.g., `maxItems={4}`)
* **Always Visible**: First item (root) and last item (current page)
* **Collapsed**: Only intermediate items
* **Control**: Ellipsis button (MoreHorizontal icon)

---

## Behavior

### Navigation

Clicking a breadcrumb link navigates the user to that level of the hierarchy. The current page item does not trigger navigation.

* **Standard Links**: Use `<a>` elements with `href` attributes
* **Custom Handling**: Optional `onNavigate` callback for SPA routing
* **Keyboard**: Enter key activates links
* **Current Page**: Non-clickable, no hover state

### Overflow Expansion

When collapsed items are present, clicking the overflow control reveals the hidden breadcrumb levels.

* **Trigger**: Ellipsis button between first and remaining visible items
* **Display**: Dropdown menu with collapsed levels
* **Interaction**: Click to open, click outside to close
* **Keyboard**: Tab to focus, Enter/Space to open, Arrow keys to navigate menu

### Responsive Behavior

On smaller viewports, the breadcrumb trail compresses further, collapsing more intermediate levels as needed.

* **Desktop**: Full labels (200px max width)
* **Tablet (≤768px)**: Reduced label width (120px)
* **Mobile (≤480px)**: Further reduced (80px)
* **Minimum**: Root and current page always visible

### Mobile Alternative: Back Button Pattern

On mobile devices (viewports < 768px), full breadcrumb trails often become cluttered, difficult to use, and don't follow familiar mobile navigation patterns. A recommended alternative is to replace breadcrumbs with a simple "Back" button that shows only the immediate parent page.

#### Why Use Back Buttons on Mobile?

The back button pattern provides significant advantages over traditional breadcrumbs on small screens:

* **Better Touch Targets**: Minimum 48px interactive area makes tapping easier and more accurate
* **Reduced Screen Clutter**: Saves valuable vertical space and eliminates wrapping or excessive truncation
* **Familiar Pattern**: Follows native mobile conventions (iOS, Android back navigation)
* **Clearer Labels**: Full parent label visible without truncation to 80px
* **Linear Navigation**: Matches typical mobile user flow (step-by-step rather than multi-level jumping)
* **Improved Accessibility**: Larger targets meet WCAG touch target requirements
* **Better Readability**: No need to parse multiple truncated items in a horizontal trail

#### When to Use Mobile Back Buttons

Replace breadcrumbs with back buttons when:
* Viewport is narrower than 768px
* The breadcrumb trail has more than 2 levels
* Label truncation would make breadcrumbs unclear
* Users primarily navigate linearly (forward/backward)
* Touch is the primary interaction method

Continue using breadcrumbs on mobile when:
* The trail is only 2 levels (Home > Current)
* Labels are very short and won't truncate
* Users frequently jump to non-adjacent levels
* Desktop parity is critical for your use case

#### Implementation

Use CSS media queries or JavaScript to conditionally render based on viewport size:

```tsx
// Example: Conditional rendering based on viewport
const isMobile = useMediaQuery('(max-width: 768px)');
const parentItem = items[items.length - 2]; // Get immediate parent

{isMobile && parentItem ? (
  <BackButton 
    label={`Back to ${parentItem.label}`}
    onClick={() => navigate(parentItem.href)}
  />
) : (
  <Breadcrumbs items={items} />
)}
```

#### Back Button Specifications

**Component Structure:**
* Display a chevron-left icon (20px) followed by label text
* Label format: "Back to [Parent Page Name]"
* Minimum height: 48px (touch target requirement)
* Padding: var(--spacing-75) var(--spacing-100) (12px 16px)

**Visual Style:**
* Font Size: var(--font-size-100) (16px)
* Font Weight: var(--font-weight-medium)
* Color: var(--color-primary-loud)
* Background: Transparent
* Border Radius: var(--border-radius-200)

**States:**
* **Hover**: Background var(--bg-primary-softest), color var(--color-primary)
* **Focus**: 2px solid var(--border-focus), 2px offset
* **Active**: Background var(--bg-primary-soft)

**Accessibility:**
* Use semantic `<button>` or `<a>` element
* Include full parent label in visible text
* Ensure 48px minimum touch target
* Provide clear focus indicators
* Support keyboard activation (Enter/Space)

#### Best Practices for Mobile Navigation

* **Show Parent Only**: Display only the immediate parent, not the full trail
* **Keep Labels Complete**: Don't truncate the parent label in the back button
* **Position Consistently**: Place at the top of the page, same location as desktop breadcrumbs
* **Test Touch Targets**: Verify 48px minimum height and adequate spacing
* **Provide Visual Feedback**: Use hover/active states for touch feedback
* **Support Gestures**: Consider supporting swipe-back gestures where appropriate
* **Maintain Consistency**: Use the same back button pattern across all mobile pages
* **Consider Page Title**: Show the current page title below the back button for context

#### Visual Comparison

**Desktop/Tablet (≥ 768px):**
```
Home > Products > Electronics > Laptops
```
Full breadcrumb trail with all levels visible, separated by chevrons.

**Mobile (< 768px):**
```
← Back to Electronics

Laptops
```
Simple back button showing parent page, with current page as the main heading below.

---

## Content Guidelines

### Item Labels

Breadcrumb labels should match the page titles of the views they represent. Do not abbreviate or rewrite labels — consistency between the breadcrumb and the actual page title is essential for user orientation.

**Do:**
* Use exact page title: "User Management"
* Keep consistent across app
* Use sentence case

**Don't:**
* Abbreviate: "User Mgmt"
* Rewrite: "Manage Users" when page says "User Management"
* Use ALL CAPS or Title Case inconsistently

### Trail Length

Limit the breadcrumb trail to a maximum of four or five visible levels where possible. Deeper hierarchies should rely on the overflow/collapse pattern to keep the component manageable.

**Recommended:**
* 2-4 levels: Ideal range
* 5 levels: Use overflow control
* 6+ levels: Always use overflow

### Separator Choice

Use a consistent separator character throughout the application. The chevron (`›`) is the most common convention and clearly implies directionality. Avoid decorative or ambiguous separators.

**Default:** Chevron (›)
* Clear directionality
* Industry standard
* Works in all contexts

**Alternative:** Slash (/)
* More compact
* Traditional option
* Less directional

---

## Design Guidelines

### Placement

Breadcrumbs are placed at the top of the page, above the page title, within the page header component. They should be one of the first elements users see when arriving at a page.

**Placement Priority:**
1. Below main navigation
2. Above page title/heading
3. Within page header/content area
4. Left-aligned with content

### Visual Hierarchy

Breadcrumb text should be smaller and lighter in weight than the page title to maintain clear visual hierarchy.

* **Breadcrumb Links**: 14px (var(--font-size-80)), regular weight
* **Current Page**: 14px, semibold weight
* **Page Title**: Typically 24-40px, bold weight
* **Color Contrast**: Links use primary blue, current uses default text

### Spacing

Maintain consistent spacing between breadcrumb items and separators. The separator should have equal space on both sides to remain visually balanced within the trail.

* **Between Items & Separators**: var(--spacing-25) (4px)
* **Below Breadcrumbs**: var(--spacing-100) to var(--spacing-150) before page title
* **Internal Gaps**: Handled by flexbox gap

---

## States

### Link States

**Default:**
* Color: var(--color-primary-loud)
* Text Decoration: None
* Cursor: Pointer

**Hover:**
* Color: var(--color-primary)
* Text Decoration: Underline
* Transition: 150ms

**Focus-Visible:**
* Outline: 2px solid var(--border-focus)
* Outline Offset: 2px
* Border Radius: var(--border-radius-100)

**Active:**
* Color: var(--color-primary-loud)

### Menu Trigger States

**Default:**
* Color: var(--color-primary-loud)
* Background: Transparent
* Padding: var(--spacing-25) var(--spacing-50)

**Hover:**
* Color: var(--color-primary)
* Background: var(--bg-primary-softest)

**Focus-Visible:**
* Outline: 2px solid var(--border-focus)
* Outline Offset: 2px

**Active:**
* Color: var(--color-primary-loud)
* Background: var(--bg-primary-soft)

### Overflow Button States

**Default:**
* Color: var(--text-soft)
* Background: Transparent
* Size: 32x32px

**Hover:**
* Color: var(--text)
* Background: var(--bg-neutral-softest)

**Focus-Visible:**
* Outline: 2px solid var(--border-focus)
* Outline Offset: 2px

**Active:**
* Color: var(--text)
* Background: var(--bg-neutral-soft)

---

## Accessibility

* **Navigation Landmark**: The breadcrumb is wrapped in a `<nav>` element with `aria-label="Breadcrumb"` to identify it as a navigation landmark for screen readers
* **Semantic Structure**: Items are structured as an ordered list (`<ol>`) with each breadcrumb item in a list element (`<li>`), reflecting the hierarchical order
* **Current Page State**: The current page item includes `aria-current="page"` to communicate the active state to assistive technologies
* **Descriptive Links**: All ancestor items are rendered as `<a>` elements with descriptive link text matching their visible labels
* **Decorative Separators**: Separators are decorative and hidden from assistive technologies using `aria-hidden="true"`
* **Truncated Labels**: Truncated item labels expose the full label via a `title` attribute or associated tooltip, ensuring screen reader users and keyboard navigators can access the complete text
* **Overflow Control**: The overflow control uses an appropriate `aria-label` (e.g., "Show more breadcrumbs") and uses `aria-haspopup` and `aria-expanded` to communicate its state
* **Keyboard Navigation**: Keyboard users can navigate through breadcrumb links using Tab and activate them with Enter. Menu dropdowns support arrow key navigation

---

## Spacing

* **Gap Between Items**: var(--spacing-25) (4px)
* **Font Size**: var(--font-size-80) (14px)
* **Line Height**: var(--line-height-body)
* **Menu Padding**: var(--spacing-50) (8px)
* **Menu Item Padding**: 8px 12px
* **Trigger Padding**: var(--spacing-25) var(--spacing-50) (4px 8px)
* **Overflow Button Size**: 32x32px
* **Max Label Width (Desktop)**: 200px
* **Max Label Width (Tablet)**: 120px
* **Max Label Width (Mobile)**: 80px

---

## Colors

### Links
* **Default**: var(--color-primary-loud)
* **Hover**: var(--color-primary)
* **Focus**: var(--border-focus) (outline)

### Current Page
* **Text**: var(--text)

### Separators
* **Color**: var(--text-soft)

### Menu Trigger
* **Default**: var(--color-primary-loud)
* **Hover Background**: var(--bg-primary-softest)
* **Active Background**: var(--bg-primary-soft)

### Overflow Button
* **Default**: var(--text-soft)
* **Hover Background**: var(--bg-neutral-softest)

### Dropdown Menu
* **Background**: var(--bg-surface)
* **Border**: var(--border-neutral)
* **Shadow**: var(--box-shadow-400)
* **Item Hover**: var(--bg-primary-softest)
* **Item Active**: var(--bg-primary)

---

## Best Practices

* **Match Page Titles**: Breadcrumb labels should exactly match page titles for consistency
* **Place Above Title**: Position breadcrumbs at the top of the page, above the page title
* **Use Consistent Separators**: Use chevron (›) throughout the application
* **Limit Visible Levels**: Keep to 4-5 visible levels; use overflow for deeper hierarchies
* **Always Show Root & Current**: Never hide the first and last items, even with overflow
* **Use Semantic HTML**: Implement with `<nav>`, `<ol>`, and `<li>` elements
* **Consider Mobile Alternative**: Replace with back button pattern on viewports < 768px
* **Ensure Touch Targets**: Minimum 48px height for all interactive elements on touch devices
* **Don't Make Current Clickable**: Current page should be non-interactive
* **Don't Abbreviate**: Use full page names; truncate with ellipsis if needed
* **Don't Use as Sole Navigation**: Breadcrumbs complement, not replace, primary navigation
* **Don't Show on Top-Level Pages**: Skip breadcrumbs when there's no parent level
* **Maintain Visual Hierarchy**: Keep breadcrumbs smaller and lighter than page title
* **Support Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
* **Provide Focus Indicators**: Show clear focus states for all interactive elements
* **Test Truncation**: Verify tooltips work for long labels
* **Test Responsive Behavior**: Ensure overflow works correctly on mobile
* **Test Mobile Pattern**: Verify back button works correctly on touch devices

---

## Component API

```tsx
interface BreadcrumbItem {
  label: string;              // Page name to display
  href?: string;              // URL to navigate to
  current?: boolean;          // Whether this is the current page
  menu?: BreadcrumbMenuItem[]; // Optional dropdown menu items
}

interface BreadcrumbMenuItem {
  label: string;              // Menu item label
  href: string;               // URL to navigate to
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];    // Array of breadcrumb items
  separator?: 'chevron' | 'slash'; // Separator style (default: 'chevron')
  maxItems?: number;          // Max items to show before overflow
  className?: string;         // Additional CSS classes
  onNavigate?: (href: string) => void; // Custom navigation handler
}
```

---

## Related Components

* **Link** - Used for individual breadcrumb links
* **BackButton** - Mobile-friendly alternative showing only the parent page
* **Flyout Menu** - Dropdown pattern for overflow and menu items
* **Section** - Page layout component that contains breadcrumbs