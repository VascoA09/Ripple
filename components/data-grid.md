---
name: Data Grid
status: stable
version: 1.2.0
last_updated: 2026-04-02
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [data, table, display]
---

# Data Grid

The Data Grid renders large, structured datasets in a scrollable, interactive table. It supports sorting, filtering, column resizing, row selection, and pagination out of the box.

Built on [AG Grid Community](https://www.ag-grid.com/) (v35, MIT licence). Ripple wraps AG Grid with a custom theme (`themeQuartz.withParams()`) that maps all visual properties to Ripple semantic tokens — fonts, colours, borders, and spacing are token-driven and will update automatically with theme changes.

---

## Usage

Use Data Grid when:

* Displaying tabular data with more than a handful of rows or columns
* Users need to sort, filter, or search within the dataset
* Rows are selectable and drive a downstream action (detail panel, bulk action)
* The dataset is large enough to benefit from virtualisation (hundreds to thousands of rows)
* Column widths need user control

Do not use Data Grid when:

* The data is static and small (fewer than ~10 rows, 4 columns) — use a plain HTML table or List instead
* The content is not truly tabular (use List or Card)
* Only one column is needed (use List)

---

## Anatomy

| Element | Description |
|---------|-------------|
| Header row | Fixed column headers with sort controls and resize handles |
| Floating filter row | Always-visible filter inputs directly below the header row |
| Column resize handle | Drag handle at the right edge of each header cell |
| Data rows | Virtualised row content; 48px default height, 32px compact |
| Selection checkbox | Ripple Checkbox in a pinned, non-resizable column (multi-select only) |
| Loading overlay | Centred Ripple Spinner above the grid when `loading` is true |
| Pagination bar | Page navigation and page-size selector; rendered when `pagination` is true |
| Filter popup | Per-column filter panel, triggered from the column header menu |

---

## Sizes

| Size | Row height | Header height | Filter row height | When to use |
|------|-----------|--------------|------------------|-------------|
| `default` | 48px | 48px | 48px | Standard — most screens |
| `compact` | 32px | 48px | 48px | Dense views, reporting tables, embedded grids |

---

## Selection modes

| Mode | Behaviour |
|------|-----------|
| `none` (default) | Rows are not selectable |
| `single` | Click a row to select it; clicking another row deselects the previous |
| `multi` | Ripple Checkbox column prepended as the first column; header checkbox selects/deselects all visible rows |

Use `onRowSelect` to receive the selected row data as an array on every selection change.

### Multi-select checkbox column

In `multi` mode, DataGrid prepends a dedicated 48px-wide checkbox column. It is pinned left, non-resizable, non-sortable, and non-filterable. The column uses Ripple's `Checkbox` component (with `indeterminate` support on the header) rather than AG Grid's built-in checkbox renderer.

AG Grid's own `checkboxes` and `headerCheckbox` options are disabled when `selectable="multi"` — they would double-render.

---

## Floating filters

Floating filters render as a persistent row directly below column headers — no need to open a popup to filter. By default, all columns use Ripple's `Input` component (`size="small"`) as the floating filter. Column-specific filter types can override this per `ColDef`.

| Column type | Filter component | How to apply |
|-------------|-----------------|-------------|
| Text (default) | Ripple `Input` | Automatic via `defaultColDef` |
| Date | Ripple `DatePicker` | `filter: 'agDateColumnFilter'`, `floatingFilterComponent: RippleDateFloatingFilter` |
| Time | Ripple `TimePicker` | `floatingFilterComponent: RippleTimeFloatingFilter` |

`RippleDateFloatingFilter` and `RippleTimeFloatingFilter` are exported from `DataGrid.tsx` for use in column definitions.

### Panel visibility

The DatePicker and TimePicker panels use `position: fixed` with viewport-relative coordinates when opened inside a floating filter. This is necessary because AG Grid's header has `overflow: hidden` for horizontal scroll, which would otherwise clip the calendar. A `MutationObserver` detects when the panel appears and repositions it automatically.

### Floating filter inputs and column width

Floating filter inputs shrink with their column. `min-width: 0` is applied through the full flex hierarchy (AG Grid body → cell wrapper → component root → inner wrapper → native input) so the input fills the available column width at any size without overflowing or obscuring the filter menu button.

---

## Pagination

Enable with `pagination={true}` and control the default page size with `pageSize` (default: 10). The pagination bar renders below the grid and includes:

* Row range label (e.g. "1–10 of 247")
* Page-size Dropdown with preset values: 10, 20, 50, 100
* First / previous / next / last navigation buttons using Ripple `IconButton` (ghost neutral, extra-small)

The grid's bottom border radius is removed when the pagination bar is visible so the two elements read as a single unit.

---

## Custom cell renderers

Pass any React component via `cellRenderer` in `ColDef`. Common patterns:

* **Link** — use Ripple `Link` (`variant="soft"`, `size="80"`) to make cell values navigable
* **Tag** — use Ripple `Tag` for status or categorical values
* **Custom actions** — use `IconButton` or `Button` for inline row actions

```tsx
{
  field: 'name',
  headerName: 'Name',
  cellRenderer: (params) => (
    <Link href={`/employees/${params.data.id}`} variant="soft" size="80">
      {params.value}
    </Link>
  ),
}
```

---

## Row selection with a detail drawer

A common pattern is to open a Ripple `Drawer` when a row is selected, showing contextual detail without leaving the page.

```tsx
const [selected, setSelected] = useState<Employee | null>(null)

<DataGrid
  columns={columns}
  rows={rows}
  selectable="single"
  onRowSelect={(rows) => setSelected(rows[0] ?? null)}
/>

<Drawer
  open={!!selected}
  onClose={() => setSelected(null)}
  side="right"
  size="medium"
>
  <DrawerHeader title={selected?.name ?? ''} />
  <DrawerContent>
    {/* detail content */}
  </DrawerContent>
</Drawer>
```

Use `persistent` on the Drawer for split-pane layouts where the grid and detail panel should coexist without an overlay.

---

## Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `ColDef<TData>[]` | — | AG Grid column definitions |
| `rows` | `TData[]` | — | Row data array |
| `size` | `'default' \| 'compact'` | `'default'` | Row density |
| `loading` | `boolean` | `false` | Shows loading overlay with Spinner |
| `selectable` | `'none' \| 'single' \| 'multi'` | `'none'` | Row selection mode |
| `onRowSelect` | `(rows: TData[]) => void` | — | Called on selection change |
| `pagination` | `boolean` | `false` | Enables pagination bar |
| `pageSize` | `number` | `10` | Rows per page |
| `gridOptions` | `GridOptions<TData>` | — | AG Grid escape hatch for unlisted options |
| `className` | `string` | — | Added to the wrapper `<div>` |
| `style` | `React.CSSProperties` | — | Inline styles on the wrapper `<div>` |

`ColDef` is re-exported directly from `ag-grid-community` — no abstraction layer. Consumers should import it from there for full type safety.

---

## Exported components

| Export | Type | Description |
|--------|------|-------------|
| `DataGrid` | Component | Main grid component |
| `DataGridProps` | Type | Component prop interface |
| `DataGridSize` | Type | `'default' \| 'compact'` |
| `RippleDateFloatingFilter` | Component | DatePicker floating filter for date columns |
| `RippleTimeFloatingFilter` | Component | TimePicker floating filter for time columns |

---

## Theme

The Ripple theme is defined using `themeQuartz.withParams()`. All visual values reference Ripple semantic tokens via CSS custom properties.

| Visual property | Ripple token |
|----------------|-------------|
| Row background | `--bg-surface` |
| Odd row background | `--bg-surface` (no stripe) |
| Header / chrome background | `--bg-neutral-softest` |
| Row hover | `--bg-primary-softest` |
| Selected row | `--bg-primary-soft` |
| Header cell hover | `--bg-neutral-softest` |
| Border | `--border-neutral` |
| Body text | `--text` |
| Font family | `--font-family-base` |
| Font size | 14px |
| Resize handle colour | `--border-neutral` |
| Resize handle height | 16px |
| Border radius | 8px |

---

## Technical notes

* **AG Grid version**: Community v35. Enterprise features (row grouping, server-side row model, Excel export) are not included. Switching to Enterprise requires only a dependency swap — no Ripple API changes.
* **Module registration**: `ModuleRegistry.registerModules([AllCommunityModule])` is called once at module load inside `DataGrid.tsx`. Consumers do not need to register modules themselves.
* **Column definitions**: Ripple passes `ColDef` directly from AG Grid without wrapping it. This avoids a leaky abstraction and gives consumers full access to AG Grid's column API.
* **Virtualisation**: AG Grid virtualises rows by default. `domLayout="autoHeight"` is set so the grid expands to fit its content. For fixed-height scrollable grids, override via `gridOptions={{ domLayout: 'normal' }}` and apply an explicit height to the wrapper.
* **Multi-select checkboxes**: Built with Ripple `Checkbox` via custom `cellRenderer` and `headerComponent`. The checkbox column is prepended programmatically — consumers do not declare it in `columns`.
* **Floating filter panels (date/time)**: Use `position: fixed` + `MutationObserver` to escape AG Grid's `overflow: hidden` header. This is an internal implementation detail; consumers just set `floatingFilterComponent` on the `ColDef`.
* **Escape hatch**: Any AG Grid `GridOptions` not surfaced by Ripple props can be passed via `gridOptions`. Values there override Ripple defaults where they conflict.

---

## Accessibility

* AG Grid Community is WCAG 2.1 AA compliant. It uses ARIA roles (`grid`, `row`, `gridcell`, `columnheader`) and supports full keyboard navigation.
* Keyboard navigation: `Tab` moves focus into the grid; arrow keys navigate cells; `Space` toggles row selection; `Enter` activates cell editors.
* Column headers announce sort state via `aria-sort`.
* Floating filter inputs use `label="Filter"` with `hideLabel` — the label is visually hidden but present for screen readers.
* Checkboxes in multi-select mode have explicit `aria-label` values ("Select row", "Select all rows").
* Loading state is announced via `aria-live="polite"` on the overlay.
* Always set `ColDef.headerName` — AG Grid falls back to `field` if omitted, which may not be screen-reader-friendly.

---

## Related

* **Drawer** — persistent or overlay panel for row detail views
* **Link** — for navigable cell values
* **Tag** — for status or categorical cell values
* **List** — for non-tabular row content
* **Card** — for entity display with rich content
