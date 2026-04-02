---
name: Stackable List
status: stable
version: 1.0.0
last_updated: 2026-04-02
owner: Vasco Antunes
figma: TBD
storybook: TBD
components: [Avatar, Tag, FlyoutMenu, IconButton]
tags: [data, list, display]
---

# Stackable List

A columnar list pattern for displaying structured datasets where users need to scan, compare, and act on rows of information. Use when the data is too rich for a simple List but too read-only or lightweight for a full Data Grid.

---

## When to use

- Displaying a list of entities (people, resources, tasks) with 2–5 comparable attributes
- Users need to quickly scan and act on individual rows (view, edit, deactivate)
- The data is read-only — no inline editing, column reordering, or resizing
- The list may be embedded in a panel, card, or page section (not just full-page)

## When not to use

- Users need to filter, sort, resize columns, or export — use **Data Grid** instead
- Only one column of information is needed — use **List**
- The data is highly hierarchical or tree-structured — consider a grouped List or Accordion

---

## Anatomy

| Element | Description |
|---------|-------------|
| `StackableList` | Root container. Provides border, radius, and the column grid definition via the `columns` prop. |
| `StackableListHeader` | Sticky header row. Contains `StackableListHeaderCell` elements. |
| `StackableListHeaderCell` | Single header cell. Supports icon before/after, description, and text alignment. |
| `StackableListBody` | Scrollable container for list items. |
| `StackableListItem` | One data row. Supports unread state, selection, disabled state, click behaviour, and a trailing actions slot. |
| `StackableListCell` | One data cell within an item. Aligns to the corresponding header column. |
| `StackableListFooter` | Optional sticky footer — typically used for row count or pagination. |

---

## Column layout

The `columns` prop on `StackableList` accepts any valid CSS `grid-template-columns` value. This drives the column grid on both the header and every item row, ensuring perfect alignment.

```tsx
<StackableList columns="2fr 1fr 1fr 120px">
```

The number of `StackableListHeaderCell` elements and `StackableListCell` elements per item must match the number of columns defined.

---

## Row actions

When rows have contextual actions (view, edit, delete), use the `actions` prop on `StackableListItem` in combination with `hasActions` on the root.

```tsx
<StackableList columns="2fr 1fr 1fr" hasActions>
```

`hasActions={true}` reserves a 40px trailing slot on both the header and every item row. The actions slot is hidden by default and revealed on row hover or focus-within. It remains visible while a FlyoutMenu is open.

Use Ripple `FlyoutMenu` with an `IconButton` (`variant="ghost"`, `color="neutral"`, `size="small"`) as the standard actions trigger.

---

## Unread state

Set `unread` on `StackableListItem` to indicate the row has not been seen. Renders a left-edge accent line (`var(--color-primary)`). Pair with `font-weight: semibold` on the cell label to reinforce the distinction.

---

## Selection

Set `selected` and `onClick` on `StackableListItem` to make a row selectable. The row highlights with `var(--bg-primary-soft)` when selected.

For single-select, manage state in the parent:

```tsx
const [selectedId, setSelectedId] = useState<string | null>(null)

<StackableListItem
  selected={selectedId === item.id}
  onClick={() => setSelectedId(item.id)}
>
```

Multi-select is not built into the pattern. Add a `Checkbox` as the first `StackableListCell` if multi-select is required.

---

## Usage in context

### With Avatar and sub-label

```tsx
<StackableListCell>
  <Avatar name={emp.name} size="s" />
  <div>
    <div>{emp.name}</div>
    <div style={{ fontSize: 'var(--font-size-60)', color: 'var(--text-soft)' }}>
      {emp.id}
    </div>
  </div>
</StackableListCell>
```

### With Tag for status

```tsx
<StackableListCell>
  <Tag color="green" size="small">Active</Tag>
</StackableListCell>
```

### With footer row count

```tsx
<StackableListFooter>
  <span>1–10 of 247</span>
</StackableListFooter>
```

---

## Properties

### StackableList

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `string` | `'1fr'` | CSS `grid-template-columns` value shared by header and items |
| `hasActions` | `boolean` | `false` | Reserves a 40px trailing slot on every row for row actions |
| `children` | `ReactNode` | — | Header, Body, Footer |
| `className` | `string` | — | Additional class on the root element |
| `style` | `CSSProperties` | — | Inline styles on the root element |

### StackableListHeaderCell

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Column label text |
| `iconBefore` | `ReactNode` | — | Icon before the label |
| `iconAfter` | `ReactNode` | — | Icon after the label (e.g. sort indicator) |
| `description` | `string` | — | Secondary text below the label |
| `align` | `'start' \| 'center' \| 'end'` | `'start'` | Text alignment |

### StackableListItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `unread` | `boolean` | `false` | Shows left-edge accent line |
| `onClick` | `MouseEventHandler` | — | Makes the row interactive |
| `selected` | `boolean` | `false` | Highlights the row as selected |
| `disabled` | `boolean` | `false` | Dims and disables the row |
| `actions` | `ReactNode` | — | Trailing slot content; visible on hover/focus |
| `children` | `ReactNode` | — | `StackableListCell` elements |

### StackableListCell

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `'start' \| 'center' \| 'end'` | `'start'` | Content alignment |
| `children` | `ReactNode` | — | Cell content |

---

## Accessibility

- The root uses `role="table"`. Header uses `role="row"`, header cells use `role="columnheader"`, body uses `role="rowgroup"`, items use `role="row"`, cells use `role="cell"`.
- Interactive items (`onClick`) are keyboard operable: `Enter` and `Space` trigger the click handler. `tabIndex={0}` is applied automatically.
- The actions slot uses `opacity: 0` by default but remains in the DOM and is always accessible to keyboard and screen reader users via focus-within.
- `aria-selected` and `aria-disabled` are set from the `selected` and `disabled` props.
- Always provide meaningful `headerName` values in header cells — they are used as `aria-label` when the label is a React node rather than a string.
- Row actions must have an explicit `aria-label` that identifies the row (e.g. `aria-label="Actions for Jane Cooper"`).

---

## Related

- **Data Grid** — for large datasets with filtering, sorting, column resizing, and pagination
- **List** — for single-column or non-tabular row content
- **Avatar** — for user identity in cells
- **Tag** — for status or categorical values in cells
- **FlyoutMenu** — for contextual row actions
