---
name: Combobox
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [form, input]
---

# Combobox

The Combobox component combines a text input with a dropdown list, enabling users to either type to filter and search through options or browse and select from the full list. It bridges the gap between free-form text input and constrained selection, offering flexibility while maintaining data integrity.

---

## When to Use

Use the Combobox when:

- **Large option sets**: The list contains 10 or more options where scrolling would be cumbersome
- **Known values**: Users are likely to know what they're looking for and can type it faster than scrolling
- **Search-first interactions**: Filtering by typing provides a better experience than visual scanning
- **Dynamic lists**: The option set is too long or changes frequently
- **Autocomplete needs**: Users benefit from suggestions as they type

**Common use cases:**
- Country, state, or city selection
- User or team member assignment
- Category, tag, or label selection
- Product or SKU selection in e-commerce
- Language, timezone, or currency selection

---

## When NOT to Use

Avoid using the Combobox when:

- **Few options** (< 5): Use a standard Dropdown, Radio buttons, or Segmented control instead
- **Freeform text**: Users need to enter custom text that doesn't correspond to predefined options (use Text Input)
- **Navigation or actions**: For triggering actions or navigating (use Menu or Button components)
- **Binary choices**: For simple on/off settings (use Switch or Checkbox)
- **Comparison needed**: Users must see all options simultaneously to make an informed decision

---

## Anatomy

### Required Elements

1. **Label** — Describes what the user is selecting (can be stacked or inline)
2. **Input field** — Interactive text input with border, padding, and chevron icon
3. **Option list** — Floating dropdown panel with selectable items
4. **Option item** — Individual selectable entry

### Optional Elements

5. **Placeholder text** — Hint shown when input is empty
6. **Hint text** — Supportive text below the input
7. **Validation message** — Error/success feedback below the input
8. **Tags** — Visual representation of selected items (multi-select)
9. **Group headers** — Categorical organization of options
10. **Icons/Avatars** — Visual context for options
11. **Descriptions** — Additional context for each option

---

## Variants

### Single-Select (Default)

- Users select **one option** from the list
- Selected value appears in the input field
- List closes automatically after selection
- Users can clear by deleting text

**Best for:**
- Country selection
- Status assignment
- Category selection
- Single user assignment

### Multi-Select

- Users select **multiple options** from the list
- Selected values appear as removable tags
- List stays open for continued selection
- Checkboxes indicate selected state
- Tags can be removed individually or with Backspace

**Best for:**
- Tag/label assignment
- Team member selection
- Department filtering
- Multiple category assignment

---

## Behavior

### Opening and Closing

**Opens when:**
- User clicks the input field
- User clicks the chevron icon
- User starts typing in the input
- User presses Arrow Down key

**Closes when:**
- User selects an option (single-select only)
- User clicks outside the component
- User presses Escape key
- User tabs away from the component

### Type-Ahead Filtering

- **Real-time filtering**: Options filter as user types
- **Case-insensitive**: Matching ignores letter case
- **Label matching**: Filters based on option label text
- **No results state**: Shows "No results found" when filter returns empty
- **Maintains groups**: Group headers remain even when filtering

### Selection Behavior

**Single-select:**
1. User selects option → Value fills input
2. List closes automatically
3. User can clear by deleting text
4. Selected option shows checkmark in list

**Multi-select:**
1. User selects option → Tag appears in input
2. List remains open
3. User continues selecting or types to filter
4. Selected options show checkmark + checkbox
5. Tags can be removed individually

### Tag Management (Multi-select)

- **Adding tags**: Click option or press Enter on focused option
- **Removing tags**: Click X on tag or press Backspace when input is empty
- **Tag overflow**: Tags wrap to new lines as needed
- **Tag truncation**: Long labels truncate with ellipsis (max 150px)

### Keyboard Navigation

| Key | Action |
|-----|--------|
| **Tab** | Move focus to/from combobox |
| **Arrow Down** | Open list or move to next option |
| **Arrow Up** | Move to previous option |
| **Enter** | Select focused option |
| **Escape** | Close list and clear search |
| **Backspace** | Remove last tag (multi-select, when input empty) |
| **Type-ahead** | Filter options in real-time |

---

## States

### Input States

| State | Appearance | When to Use |
|-------|-----------|-------------|
| **Default** | Standard border, placeholder visible | Idle, ready for input |
| **Hover** | Primary border color | Mouse over input |
| **Focus** | Primary border + focus outline | Active keyboard/mouse focus |
| **Filled** | Contains selected value(s) | After selection |
| **Disabled** | Muted colors, not interactive | When input shouldn't be available |
| **Read-only** | Subtle background, no interaction | Display-only mode |
| **Error** | Negative border + error message | Validation failed |
| **Success** | Positive border + success message | Validation passed |
| **Notice** | Notice border + warning message | Requires attention |

### Option States

| State | Appearance | When to Use |
|-------|-----------|-------------|
| **Default** | Standard text color | Idle state |
| **Hover** | Subtle background | Mouse over option |
| **Focus** | Highlighted background | Keyboard navigation |
| **Selected** | Checkmark + highlight | Currently selected |
| **Disabled** | Reduced opacity | Option unavailable |

---

## Sizing

### Available Sizes

| Size | Height | Font Size | Use Case |
|------|--------|-----------|----------|
| **Small** | 32px | 14px | Compact layouts, data tables, toolbars |
| **Medium** | 40px | 16px | **Default** - Most form contexts |
| **Large** | 48px | 18px | Prominent fields, touch interfaces |

### Width Guidelines

- **Minimum**: 200px (prevents excessive truncation)
- **Optimal**: 280px - 400px (accommodates most labels)
- **Maximum**: Match form width or 600px (prevents overly wide inputs)

**Width should reflect:**
- Expected label length
- Available space
- Form layout consistency

---

## Spacing

### Internal Spacing

- **Label to input**: 4px (`var(--spacing-25)`)
- **Input to helper/error**: 4px (`var(--spacing-25)`)
- **Input padding**: 12px-16px depending on size
- **Tag gaps**: 4px (`var(--spacing-25)`)
- **Option padding**: 8px-12px (`var(--spacing-50)` to `var(--spacing-75)`)

### Form Layout Spacing

- **Between fields**: 16px-24px (`var(--spacing-100)` to `var(--spacing-150)`)
- **Between sections**: 32px-48px (`var(--spacing-200)` to `var(--spacing-300)`)

---

## Label Positioning

### Stacked (Default)

- Label appears **above** the input
- Best for most forms
- Better for mobile and narrow viewports
- Allows longer label text
- Full-width label container

**Use when:**
- Building responsive forms
- Labels are descriptive or longer
- Vertical space is available

### Inline

- Label appears **beside** the input (left-aligned)
- Best for compact horizontal layouts
- Label has fixed width (120-200px)
- Requires careful alignment

**Use when:**
- Building dense desktop forms
- Labels are short and consistent
- Horizontal space is available
- Vertical space is limited

---

## Option Features

### Icons

- **Consistency**: Use icons on all options or none
- **Size**: 16px (matches text size)
- **Placement**: Before the label
- **Purpose**: Provide visual context and improve scannability

**Best for:**
- Role selection (user icons)
- Category selection (tag icons)
- Location selection (map pin icons)

### Avatars

- **Use for**: User or entity selection
- **Size**: Medium (32px) for optimal dropdown display
- **Variant**: Image variant for photos, initials for fallback
- **Grouping**: Combine with groups for department organization

### Descriptions

- **Length**: Keep concise (1 sentence maximum)
- **Purpose**: Clarify ambiguous options
- **Consistency**: Provide for all options or none
- **Font**: 14px, secondary color
- **Height**: Options with descriptions use adaptive height

### Groups

- **Headers**: Uppercase, semibold, 14px
- **Dividers**: 1px line between groups
- **Filtering**: Maintain groups even when filtering
- **Organization**: Logical categorization (geography, role, status)

---

## Validation

### When to Validate

- **On blur**: After user leaves the field
- **On change**: Real-time as user types (use sparingly)
- **On submit**: When form is submitted
- **Required fields**: Show error when empty on submit

### Validation Messages

**Error messages should:**
- Be specific and actionable
- Explain what's wrong and how to fix it
- Appear below the input
- Use negative color token

**Examples:**
- ❌ "Invalid" → ✅ "Please select a country"
- ❌ "Error" → ✅ "You must select at least one department"
- ❌ "Required" → ✅ "Team member assignment is required"

---

## Accessibility

### Semantic HTML and ARIA

```html
<div class="combobox-container">
  <label for="country-input">Country</label>
  <input
    id="country-input"
    type="text"
    role="combobox"
    aria-expanded="false"
    aria-controls="country-listbox"
    aria-activedescendant="country-option-3"
  />
  <ul id="country-listbox" role="listbox">
    <li role="option" aria-selected="true">United States</li>
  </ul>
</div>
```

### Keyboard Support

- **Full keyboard navigation**: All actions accessible without mouse
- **Focus indicators**: Clear 2px outline with offset
- **Focus management**: Focus stays on input while navigating options
- **Active descendant**: `aria-activedescendant` tracks focused option

### Screen Reader Support

- **ARIA roles**: combobox, listbox, option
- **State announcements**: Expanded/collapsed, selected state
- **Label association**: Labels linked with for/id
- **Error messages**: Linked with aria-describedby
- **Multi-select**: Announced with aria-multiselectable

### Touch Targets

- **Minimum size**: 40px height for touch devices
- **Recommended**: Use Medium or Large sizes on mobile
- **Tag removal**: Adequate touch target for X buttons
- **Option spacing**: Minimum 8px between options

---

## Best Practices

### Do ✅

- **Use for long lists** (10+ options) where typing helps users find options faster
- **Provide clear placeholders** that hint at filtering capability (e.g., "Type to search...")
- **Match input width** to expected option label length
- **Use groups** to organize long lists into logical categories
- **Show "No results"** message when filter returns empty
- **Maintain consistency** with icons, descriptions, and avatars (all or none)
- **Test with real data** to ensure performance with actual option counts
- **Provide validation** with clear, helpful error messages

### Don't ❌

- **Don't use for short lists** (< 5 options) — use Dropdown or Radio buttons
- **Don't make inputs too narrow** — causes text truncation and poor UX
- **Don't use for navigation** — use Menu or Navigation components
- **Don't mix visual elements** inconsistently (some icons, some not)
- **Don't forget "no results"** state — always handle empty filter results
- **Don't use placeholders as labels** — always provide proper labels
- **Don't prevent clearing** — allow users to easily deselect
- **Don't overload tags** — consider count/summary for many selections

---

## Design Tokens Usage

### Colors

```css
/* Input borders */
--border-default: Default state border
--border-primary: Hover and focus state
--border-focus: Focus outline
--border-negative: Error state
--border-positive: Success state
--border-notice: Warning state

/* Backgrounds */
--bg-surface: Input background
--bg-neutral-soft: Disabled background
--bg-primary-softest: Selected/focused option background
--bg-primary-soft: Selected tag background

/* Text */
--text: Primary text
--text-loud: Labels
--text-soft: Helper text, placeholders
--text-softest: Subtle placeholders
```

### Spacing

```css
--spacing-25: 4px (tight gaps)
--spacing-50: 8px (standard gaps)
--spacing-75: 12px (medium padding)
--spacing-100: 16px (standard padding)
--spacing-150: 24px (section spacing)
```

### Sizes

```css
--size-200: 32px (small height)
--size-250: 40px (medium height)
--size-300: 48px (large height)
```

---

## Performance Considerations

### Large Lists

For lists with 100+ options:

1. **Virtual scrolling**: Render only visible options
2. **Debounced filtering**: Add 150-300ms debounce on search
3. **Lazy loading**: Load additional options on scroll
4. **Pagination**: Load options in batches

### Optimization Tips

- Memoize filtered results
- Use React.memo for option components
- Implement windowing for very long lists
- Consider backend filtering for huge datasets (1000+)

---

## Common Patterns

### Country Selection

```tsx
<Combobox
  label="Country"
  placeholder="Search countries..."
  options={countryOptions}
  value={selectedCountry}
  onChange={setSelectedCountry}
  helperText="Type to quickly find your country"
/>
```

### User Assignment

```tsx
<Combobox
  label="Assign to"
  placeholder="Search team members..."
  options={teamMemberOptions}
  value={assignedUser}
  onChange={setAssignedUser}
  helperText="Type a name or department"
/>
```

### Multi-Tag Selection

```tsx
<Combobox
  label="Tags"
  placeholder="Add tags..."
  selection="multi"
  options={tagOptions}
  value={selectedTags}
  onChange={setSelectedTags}
  helperText="Select multiple tags"
/>
```

---

## Related Components

| Component | When to Use Instead |
|-----------|-------------------|
| **Dropdown** | For 5-10 options without search needs |
| **Text Input** | For freeform text without predefined options |
| **Radio Buttons** | For 2-5 mutually exclusive options |
| **Checkbox Group** | For 2-5 multi-select options |
| **Autocomplete** | For suggestions with custom input allowed |
| **Menu** | For actions or navigation |

---

## Migration from Dropdown

If you're considering migrating from Dropdown to Combobox:

### Migrate when:
- List has grown to 10+ options
- Users frequently request search functionality
- Scrolling through options is cumbersome
- Users know what they're looking for

### Keep Dropdown when:
- List has fewer than 10 options
- Users need to browse visually
- Options require no filtering
- Simpler interaction is preferred

---

## Testing Checklist

### Functional Testing

- [ ] Single-select: Selecting option fills input and closes list
- [ ] Multi-select: Selected options appear as tags
- [ ] Filtering: Typing filters options in real-time
- [ ] Keyboard: All actions work with keyboard only
- [ ] No results: "No results found" appears correctly
- [ ] Groups: Group headers and dividers display properly
- [ ] Disabled options: Cannot be selected
- [ ] Tag removal: X button and Backspace remove tags

### Accessibility Testing

- [ ] Screen reader announces combobox role
- [ ] Label is properly associated
- [ ] Expanded/collapsed state announced
- [ ] Active option announced
- [ ] Error messages announced
- [ ] All interactions keyboard accessible
- [ ] Focus indicators visible and clear

### Visual Testing

- [ ] All states render correctly (hover, focus, error, etc.)
- [ ] Tags don't overflow container
- [ ] Options align properly with icons/avatars
- [ ] Dropdown positions correctly (above/below)
- [ ] Text doesn't truncate unexpectedly
- [ ] Scrollbar appears when needed

### Performance Testing

- [ ] Filters 100+ options smoothly
- [ ] No lag when typing
- [ ] List opens/closes quickly
- [ ] Scrolling is smooth
- [ ] Memory doesn't leak with many selections

---

## Summary

The Combobox component provides a powerful, flexible selection interface that combines the best of text input and dropdown selection. By following these guidelines, you'll create consistent, accessible, and user-friendly selection experiences that scale from simple country selection to complex multi-user assignment flows.

**Key Takeaways:**
1. Use for long lists (10+) where search improves UX
2. Provide clear labels and helpful placeholders
3. Maintain consistency with icons and descriptions
4. Ensure full keyboard and screen reader support
5. Test with real data and actual option counts
6. Choose single vs multi-select based on use case
7. Follow Ripple design tokens for visual consistency
