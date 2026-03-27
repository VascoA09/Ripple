---
name: Buttons Toolbar
status: draft
version: 0.2.0
last_updated: 2026-03-27
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [action, form]
---

# Buttons Toolbar

The buttons toolbar is a responsive component within the page header that displays primary, secondary, and tertiary actions. It adapts automatically based on available space, progressively hiding less important actions in an overflow menu while keeping the primary action always visible.

---

## Usage

Use the buttons toolbar within the page header to surface the most important actions available to the user in the context of the current page. It is the designated location for page-level actions such as creating, saving, editing, exporting, or any other primary task the user can perform on that view.

Use buttons toolbar when:
* Surfacing 2-7 page-level actions with clear priority hierarchy
* Users need quick access to frequently performed actions
* Actions need to adapt responsively to different viewport sizes
* Maintaining consistent action placement across different pages
* You have one clear primary action with supporting secondary and tertiary actions

Do not use buttons toolbar when:
* Actions are scoped to specific items within page content (use row-level actions)
* For navigation or menu controls (use navigation components)
* For filtering or search controls (use dedicated filter components)
* All actions have equal importance (use button group instead)
* You have more than 7 total actions (review if some belong elsewhere)

---

## Anatomy

The buttons toolbar consists of the following elements:

### Toolbar Container

The outer wrapper that contains all action buttons and the overflow menu trigger.

* **Display**: Horizontal flexbox layout
* **Alignment**: Items aligned center vertically
* **Gap**: var(--spacing-50) (8px) between buttons
* **Placement**: Within page header, typically right-aligned

### Action Buttons

Individual button components representing available actions. Each action has a type that determines its visual emphasis.

**Action Types:**
* **Primary**: Most important action - fill variant with primary color
* **Secondary**: Supporting action - outline variant with neutral color
* **Tertiary**: Lower priority action - ghost variant with neutral color

**Button specifications:**
* **Sizes**: small (32px), medium (40px), large (48px)
* **Default size**: medium
* **Icons**: Optional but recommended for clarity
* **Labels**: Required (except in icon-only mode)

### Primary Action

The most important action for the page, always anchored to the trailing (rightmost) position.

* **Position**: Always rightmost
* **Emphasis**: Fill variant with primary color
* **Visibility**: Never hidden in any variant
* **Count**: Exactly one per toolbar
* **Style**: High-contrast fill button

### Secondary Action

A supporting action that is important but less prominent than the primary action.

* **Position**: Before primary action
* **Emphasis**: Outline variant with neutral color
* **Visibility**: Hidden in minimal variant
* **Count**: Maximum one (recommended)
* **Style**: Medium-contrast outline button

### Tertiary Actions

Lower priority actions that provide additional functionality.

* **Position**: Before secondary action
* **Emphasis**: Ghost variant with neutral color
* **Visibility**: Hidden in compact and minimal variants
* **Count**: Multiple allowed
* **Style**: Low-contrast ghost buttons

### Overflow Menu Trigger

A ghost neutral icon button that appears on the left when actions exceed the visible limit.

* **Icon**: MoreVertical (vertical ellipsis - three dots stacked)
* **Position**: Leftmost (leading) position
* **Variant**: Ghost icon button
* **Color**: Neutral
* **Size**: Medium (40px)
* **Behavior**: Opens flyout menu with hidden actions
* **ARIA**: aria-haspopup="menu", aria-expanded

### Overflow Flyout Menu

Dropdown menu containing actions that don't fit in the visible toolbar.

* **Position**: Dropdown below trigger, left-aligned
* **Background**: var(--bg-surface)
* **Border**: 1px solid var(--border-neutral)
* **Border radius**: var(--border-radius-150)
* **Shadow**: var(--box-shadow-400)
* **Padding**: var(--spacing-50) (8px)
* **Min width**: 200px
* **Items**: Display in original priority order

---

## Action Hierarchy

The toolbar enforces a clear action hierarchy through visual emphasis and positioning:

### Priority Order (Left to Right)

1. **Overflow menu** (when present) - Leftmost position
2. **Tertiary actions** - Ghost buttons, low emphasis
3. **Secondary action** - Outline button, medium emphasis
4. **Primary action** - Fill button, high emphasis - Rightmost position

### Action Count Recommendations

**Ideal:**
* 1 primary action (required)
* 1 secondary action (optional)
* 2-3 tertiary actions (optional)
* Total: 2-5 actions

**Maximum:**
* 1 primary action
* 1 secondary action
* 5 tertiary actions
* Total: 7 actions

**If you have more than 7 actions:**
* Review if some belong in page content
* Consider contextual menus for item-specific actions
* Evaluate if some actions should be in a secondary toolbar
* Assess if actions can be combined or removed

---

## Responsive Variants

The toolbar has three responsive variants that automatically adapt based on available space. The transition is designed to be progressive, hiding less important actions first while always keeping the primary action visible.

### Full Variant

Shows up to 5 buttons before using overflow menu. This is the default variant when horizontal space is available.

**Visible Actions:**
* Up to 5 buttons displayed
* Primary action always visible (rightmost)
* Secondary and tertiary actions visible
* Overflow menu appears if more than 5 actions

**When to use:**
* Desktop viewports (≥ 1024px)
* When horizontal space allows
* Default toolbar state
* Preferred variant for clarity

**Behavior:**
* Actions 1-5: Visible as buttons
* Actions 6+: In overflow menu
* Primary action: Always visible

### Compact Variant

Shows 3 buttons plus overflow menu. Auto-switches from Full when space becomes limited.

**Visible Actions:**
* Exactly 3 buttons displayed
* Primary action always visible (rightmost)
* Secondary action visible
* 1 tertiary action visible
* Overflow menu contains remaining actions

**When to use:**
* Tablet viewports (768px - 1023px)
* Medium-width containers
* Auto-switches from Full when no space
* Maintains key actions visible

**Behavior:**
* Last 3 actions: Visible as buttons
* Earlier actions: In overflow menu
* Primary + secondary always visible

### Minimal Variant

Shows only the primary action plus overflow menu. Auto-switches from Compact when very limited space is available.

**Visible Actions:**
* Only 1 button displayed (primary action)
* All other actions in overflow menu
* Maximum space efficiency
* Single action emphasis

**When to use:**
* Mobile viewports (< 768px)
* Very limited horizontal space
* Single-action focused pages
* Emergency responsive fallback

**Behavior:**
* Primary action only: Visible as button
* All other actions: In overflow menu
* Focus on most important action

---

## Responsive Behavior

The toolbar adapts to available width through three progressive variants:

**Breakpoint Strategy:**

1. **Desktop (≥ 1024px)**: Full variant
   * All 5 slots available for buttons
   * Overflow menu for 6+ actions
   * Optimal user experience

2. **Tablet (768px - 1023px)**: Compact variant
   * 3 slots available for buttons
   * Overflow menu for 4+ actions
   * Balances visibility and space

3. **Mobile (< 768px)**: Minimal variant
   * 1 slot (primary action only)
   * Overflow menu for all other actions
   * Maximum space efficiency

**Implementation:**
* Use CSS media queries or JavaScript to detect viewport
* Transition smoothly between variants
* Maintain functionality at all sizes
* Test overflow menu on all breakpoints
* Ensure primary action always visible

---

## Overflow Menu

When actions exceed the visible limit for a given variant, they are collapsed into an overflow menu.

### Trigger

**Visual:**
* Ghost neutral icon button
* MoreVertical icon (⋮ vertical three dots)
* Position: Leftmost in toolbar
* Size: Medium (40px)
* Color: Neutral

**Accessibility:**
* aria-label: "More actions"
* aria-haspopup: "menu"
* aria-expanded: true/false based on state
* Keyboard: Tab to focus, Enter/Space to open

### Flyout Menu Appearance

**Position & Layout:**
* Dropdown positioned below trigger
* Left-aligned with trigger button
* Z-index: 1000 (above page content)

**Styling:**
* Background: var(--bg-surface)
* Border: 1px solid var(--border-neutral)
* Border radius: var(--border-radius-150)
* Shadow: var(--box-shadow-400)
* Padding: var(--spacing-50) (8px)
* Min width: 200px

### Menu Items

**Structure:**
* role: "menuitem"
* Display: icon + label
* Padding: var(--spacing-75) var(--spacing-100) (12px 16px)
* Font size: var(--font-size-100)
* Border radius: var(--border-radius-100)

**States:**
* Default: Transparent background
* Hover: var(--bg-primary-softest)
* Focus: 2px outline var(--border-focus)
* Disabled: var(--text-disabled), cursor not-allowed

**Behavior:**
* Items appear in priority order
* Closes on item click
* Closes on outside click
* Closes on Escape key
* Focus returns to trigger on close
* Keyboard navigation with arrow keys

**Important Rules:**
* Primary action NEVER in overflow menu
* Actions maintain priority order
* Support keyboard and mouse interaction
* Respect disabled state
* Clear hover/focus feedback

---

## Icon-Only Mode

For extremely compact layouts, the toolbar can display all actions as icon-only buttons.

**Requirements:**
* All actions MUST have icons defined
* All actions MUST have tooltip text
* Tooltips appear on hover and focus
* aria-label required for screen readers
* Adequate spacing maintained (8px)

**When to use icon-only:**
* Extremely limited horizontal space
* When icons are universally recognized
* After user familiarity with interface
* In dense, professional applications

**When NOT to use icon-only:**
* For unfamiliar or ambiguous actions
* When icons lack clear meaning
* For new or infrequent users
* When labels provide critical context

**Accessibility considerations:**
* Tooltip shows full action label
* aria-label matches action label
* title attribute as fallback
* Touch targets still 40px minimum
* Clear focus indicators maintained

---

## Alignment

`alignment` describes where the primary (fill) button is anchored. The value names the position of the most prominent action, not the overflow trigger.

### Right Alignment (Default)

The default for page-level toolbars. Primary action is rightmost; emphasis reads ghost → outline → fill left to right.

**Visual order (left to right):**
* [Overflow menu] → [Ghost…] → [Outline] → [Fill]

**Primary action position:**
* Rightmost (trailing)
* Natural reading flow — most important action at the end
* Consistent with standard form patterns (Cancel / Save)

**Overflow menu position:**
* Leftmost (leading) when present
* Dropdown aligns to the start

**When to use:**
* Page headers
* Standalone toolbars
* The right toolbar in a combined layout
* Default for most use cases

### Left Alignment

Alternative where primary action is leftmost; emphasis reads fill → outline → ghost left to right.

**Visual order (left to right):**
* [Fill] → [Outline] → [Ghost…] → [Overflow menu]

**Primary action position:**
* Leftmost (leading)
* Leads the reading flow — most important action first

**Overflow menu position:**
* Rightmost (trailing) when present
* Dropdown aligns to the end

**When to use:**
* The left toolbar in a combined layout
* When the toolbar anchors to the left edge of a container
* Complementary to a right-aligned toolbar on the opposite side

### Combined Toolbars

In a combined layout, use `alignment="left"` on the left toolbar and the default `alignment="right"` on the right toolbar. This ensures both toolbars read highest-to-lowest emphasis from their respective outer edges inward.

**Example — page header:**
* Left toolbar (`alignment="left"`): `[+ New record] [Export] [Filter]`
* Right toolbar (default): `[↺] [⚙]` (icon-only utility actions)

**Guidelines:**
* Limit to 2–3 groups maximum
* Use 24px gaps between groups, 8px within
* Each group should have a clear, distinct purpose
* Avoid mixing primary actions across both toolbars

---

## Design Guidelines

### Action Priority

Establish clear priority for all toolbar actions. There should always be exactly one primary action, with supporting secondary and tertiary actions.

**Priority hierarchy:**
1. **Primary**: The single most important action (Save, Create, Send, Publish)
2. **Secondary**: Important supporting action (Export, Download, Preview)
3. **Tertiary**: Additional helpful actions (Refresh, Filter, Share, Settings)

**Assigning priority:**
* Primary: What is the main goal on this page?
* Secondary: What's the next most important action?
* Tertiary: What other actions support the workflow?

### Button Emphasis

Visual emphasis reinforces action priority through button variants.

**Emphasis levels:**
* **High (Primary)**: Fill button with primary color - stands out clearly
* **Medium (Secondary)**: Outline button with neutral color - visible but not dominant
* **Low (Tertiary)**: Ghost button with neutral color - present but subtle

**Visual hierarchy rules:**
* Only one fill button per toolbar
* Secondary outline provides contrast to primary
* Tertiary ghost buttons recede visually
* Gap spacing (8px) maintains clarity

### Label Clarity

Button labels should be concise, action-oriented, and use active verb phrases.

**Good labels:**
* Create project
* Save changes
* Export data
* Send email
* Edit profile
* Delete item

**Poor labels:**
* Submit
* OK
* Go
* Click here
* Action
* Do it

**Label guidelines:**
* Use action verbs (Create, Save, Edit, Delete)
* Be specific (not just "Export" but what is exported)
* Keep to 1-2 words when possible
* Use sentence case
* Match page context
* Avoid technical jargon

### Positioning

Maintain consistent button positioning across pages to build user muscle memory.

**Positioning rules:**
* `alignment="right"` (default): primary rightmost, overflow leftmost
* `alignment="left"`: primary leftmost, overflow rightmost
* Never rearrange individual actions within an alignment — order is always ghost → outline → fill (or reversed for left alignment)

**Why consistent positioning matters:**
* Users develop muscle memory
* Predictable interface reduces cognitive load
* Primary action always in same location
* Faster task completion
* Reduced errors

---

## Spacing

* **Gap between buttons**: var(--spacing-50) (8px)
* **Button heights**: small (32px), medium (40px), large (48px)
* **Default button size**: medium (40px)
* **Icon size**: small (14px), medium (16px), large (18px)
* **Overflow menu gap from trigger**: var(--spacing-50) (8px)
* **Menu item padding**: var(--spacing-75) var(--spacing-100) (12px 16px)
* **Menu container padding**: var(--spacing-50) (8px)
* **Minimum touch target**: 40px (48px for large size)
* **Toolbar horizontal padding**: Inherits from page header

---

## Colors

### Primary Action (Fill Button)

* **Background**: var(--color-primary)
* **Text**: var(--text-inverse)
* **Hover background**: var(--color-primary-loud)
* **Focus outline**: var(--border-focus)
* **Active background**: Darken var(--color-primary)

### Secondary Action (Outline Button)

* **Background**: Transparent
* **Border**: 1px solid var(--border-neutral-loud)
* **Text**: var(--text)
* **Hover background**: var(--bg-neutral-softest)
* **Focus outline**: var(--border-focus)
* **Active background**: var(--bg-neutral-soft)

### Tertiary Actions (Ghost Buttons)

* **Background**: Transparent
* **Border**: None
* **Text**: var(--text)
* **Hover background**: var(--bg-neutral-softest)
* **Focus outline**: var(--border-focus)
* **Active background**: var(--bg-neutral-soft)

### Overflow Menu

**Trigger:**
* Same as tertiary action (ghost button)
* Icon color: var(--text-soft)

**Menu container:**
* **Background**: var(--bg-surface)
* **Border**: var(--border-neutral)
* **Shadow**: var(--box-shadow-400)

**Menu items:**
* **Text**: var(--text)
* **Hover background**: var(--bg-primary-softest)
* **Focus outline**: var(--border-focus)
* **Disabled text**: var(--text-disabled)

---

## States

### Default

Resting state when no interaction is occurring.

* Standard button appearance based on type
* No hover or focus indicators
* Full opacity and color
* Cursor: pointer on hover

### Hover

Visual feedback when user hovers over a button.

* Background color change (based on variant)
* Subtle transition (150ms ease)
* Maintains accessibility contrast
* Reinforces interactivity

### Focus

Keyboard focus state showing which button will be activated.

* Outline: 2px solid var(--border-focus)
* Outline offset: 4px
* Blue focus ring clearly visible
* Essential for keyboard users

### Active

Pressed state when user is actively clicking/tapping.

* Slight background color darkening
* Visual feedback of interaction
* Brief duration
* Returns to hover on release

### Disabled

Button cannot be interacted with.

* Reduced opacity (0.4)
* Grayed out appearance
* Cursor: not-allowed
* Not keyboard focusable
* aria-disabled or disabled attribute
* Tooltip explains why disabled (optional)

### Loading

Action in progress, button cannot be clicked.

* Spinner or loading indicator
* Label may change (e.g., "Saving...")
* Button disabled during loading
* aria-label updated for screen readers
* Loading state announced to assistive tech

---

## Accessibility

### Keyboard Navigation

* **Tab**: Moves focus through toolbar buttons in visual order (left to right)
* **Enter / Space**: Activates the focused button or opens overflow menu
* **Escape**: Closes overflow menu and returns focus to trigger
* **Arrow keys**: Navigate through overflow menu items when open
* **Home / End**: Jump to first/last menu item (in overflow menu)

**Focus order follows visual DOM order (left to right):**
* `alignment="right"` (default): overflow trigger → ghost… → outline → fill
* `alignment="left"`: fill → outline → ghost… → overflow trigger

### Screen Reader Support

* All buttons have accessible labels matching visible text
* Icon-only buttons include `aria-label` and `title` attributes
* Overflow menu trigger uses `aria-haspopup="menu"` and `aria-expanded`
* Overflow menu uses `role="menu"` on container
* Menu items use `role="menuitem"`
* Disabled state communicated via `disabled` or `aria-disabled`
* Loading state announced via `aria-label` update or live region
* Action type (primary/secondary/tertiary) conveyed through visual styling, not required for SR

### Focus Management

* Clear focus indicators: 2px outline, 4px offset, var(--border-focus) color
* Focus visible on all interactive elements
* Focus does not trap - users can Tab out to rest of page
* Overflow menu focus returns to trigger when closed without selection
* Focus moves to first menu item when overflow opens
* Logical focus order maintained

### Touch Targets

* All toolbar buttons meet minimum 40px touch target
* Large size buttons meet 48px (recommended for mobile)
* Adequate spacing (8px) prevents accidental activation
* Touch targets don't overlap
* Sufficient padding for comfortable tapping

### Color Contrast

* All buttons meet WCAG AA contrast requirements (4.5:1 for text)
* Disabled buttons exempt from contrast requirements
* Do not rely on color alone to convey meaning
* Visual hierarchy through multiple cues (color + emphasis + position)

---

## Best Practices

* **Establish clear hierarchy**: One primary, one secondary, rest tertiary
* **Limit action count**: Keep to 2-7 actions with clear priority
* **Primary action placement**: Rightmost by default (`alignment="right"`); leftmost when `alignment="left"`
* **Consistent positioning**: Same placement across similar pages
* **Clear labels**: Action-oriented verbs (Create, Save, Export)
* **Adequate spacing**: 8px gap maintains visual clarity
* **Responsive adaptation**: Let toolbar auto-adapt to space
* **Icon-only with care**: Only for universally understood actions with tooltips
* **Test all variants**: Verify Full, Compact, and Minimal work correctly
* **Ensure accessibility**: Clear focus, keyboard nav, screen reader support
* **Avoid navigation**: Keep toolbar for page-level actions only
* **Never hide primary**: Primary action visible in all variants
* **One fill button**: Maximum one high-emphasis button per toolbar
* **Don't rearrange**: Maintain predictable order across contexts
* **Descriptive labels**: Avoid "Submit", "OK" - be specific
* **Review 7+ actions**: Evaluate if some belong elsewhere
* **Combined toolbars**: Use dividers to separate distinct groups
* **Test responsively**: Verify overflow behavior at all breakpoints

---

## Component API

```tsx
interface ToolbarAction {
  id: string                                    // Unique identifier
  label: string                                 // Button label / aria-label in icon-only mode
  icon?: React.ReactNode                        // Optional icon rendered before the label
  type?: 'primary' | 'secondary' | 'tertiary'  // Visual emphasis level
  size?: 'small' | 'medium' | 'large'          // Button height scale — defaults to medium
  onClick?: () => void                          // Click handler
  disabled?: boolean                            // Prevents interaction
  loading?: boolean                             // Shows spinner and disables button
  tooltip?: string                              // Tooltip text for icon-only mode
}

interface ButtonsToolbarProps {
  actions: ToolbarAction[]                      // Ordered array of toolbar actions
  variant?: 'full' | 'compact' | 'minimal'     // Display variant — defaults to 'full'
  iconOnly?: boolean                            // Render icon-only buttons — all actions must have icons
  alignment?: 'left' | 'right'                 // Primary button anchor position — defaults to 'right'
  className?: string
  style?: React.CSSProperties
}
```

---

## Related Components

* **Button** - Individual action button component
* **IconButton** - Icon-only button for compact layouts
* **SplitButton** - Primary action with alternative options
* **Section** - Page header component containing toolbar
* **Panel** - Alternative container for toolbars
* **Flyout Menu** - Dropdown menu used for overflow actions