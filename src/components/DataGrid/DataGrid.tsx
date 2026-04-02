import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
  type ColDef,
  type GridApi,
  type GridOptions,
  type GridReadyEvent,
  type PaginationChangedEvent,
  type SelectionChangedEvent,
  type RowSelectionOptions,
} from 'ag-grid-community'
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { Spinner } from '../Spinner'
import { Dropdown } from '../Dropdown'
import { IconButton } from '../IconButton'
import { Input } from '../Input'
import { Checkbox } from '../Checkbox'
import { DatePicker } from '../DatePicker'
import { TimePicker } from '../TimePicker'
import './DataGrid.css'

// Register all community modules once
ModuleRegistry.registerModules([AllCommunityModule])

// ---------------------------------------------------------------------------
// Ripple theme — maps Ripple tokens to AG Grid params
// ---------------------------------------------------------------------------

const rippleTheme = themeQuartz.withParams({
  // Backgrounds
  backgroundColor:                'var(--bg-surface)',
  chromeBackgroundColor:          'var(--bg-neutral-softest)',
  oddRowBackgroundColor:          'var(--bg-surface)',
  rowHoverColor:                  'var(--bg-primary-softest)',
  selectedRowBackgroundColor:     'var(--bg-primary-soft)',
  headerCellHoverBackgroundColor: 'var(--bg-neutral-softest)',

  // Borders
  borderColor:         'var(--border-neutral)',
  wrapperBorder:       true,
  rowBorder:           true,
  columnBorder:        false,
  headerColumnBorder:  false,
  wrapperBorderRadius: 8,

  // Text
  foregroundColor: 'var(--text)',
  cellTextColor:   'var(--text)',

  // Typography
  fontFamily: 'var(--font-family-base)',
  fontSize:   14,

  // Sizing
  rowHeight:                       48,
  headerColumnResizeHandleColor:   'var(--border-neutral)',
  headerColumnResizeHandleHeight:  16,
  headerColumnResizeHandleWidth:   2,
})

// ---------------------------------------------------------------------------
// Ripple floating filter component
// Wraps Ripple's Input for use as an AG Grid text floating filter.
// IFloatingFilterParams is not exported from the main ag-grid-community entry,
// so we define a minimal local interface covering the props we use.
// ---------------------------------------------------------------------------

interface FloatingFilterParent {
  onFloatingFilterChanged: (type: string | null, value: string | null) => void
}

interface FloatingFilterProps {
  parentFilterInstance: (cb: (parent: FloatingFilterParent) => void) => void
  currentParentModel:   () => { filter?: string } | null
}

interface FloatingFilterRef {
  onParentModelChanged: (model: { filter?: string | null } | null) => void
}

const RippleTextFloatingFilter = React.forwardRef<FloatingFilterRef, FloatingFilterProps>(
  function RippleTextFloatingFilter(props, ref) {
    const [value, setValue] = useState('')

    useImperativeHandle(ref, () => ({
      onParentModelChanged(model) {
        setValue(model?.filter ?? '')
      },
    }))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value
      setValue(v)
      props.parentFilterInstance((parent) => {
        parent.onFloatingFilterChanged(v ? 'contains' : null, v || null)
      })
    }

    return (
      <div className="data-grid__floating-filter-cell">
        <Input
          label="Filter"
          hideLabel
          size="small"
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  },
)

// ---------------------------------------------------------------------------
// Ripple date floating filter component
// Wraps Ripple's DatePicker for use with agDateColumnFilter.
// Value format in/out of the parent filter: "YYYY-MM-DD HH:MM:SS".
// ---------------------------------------------------------------------------

interface DateFilterModel {
  type:     string
  dateFrom: string | null
  dateTo:   string | null
}

interface DateFloatingFilterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parentFilterInstance: (cb: (parent: any) => void) => void
  currentParentModel:   () => DateFilterModel | null
}

interface DateFloatingFilterRef {
  onParentModelChanged: (model: DateFilterModel | null) => void
}

export const RippleDateFloatingFilter = React.forwardRef<DateFloatingFilterRef, DateFloatingFilterProps>(
  function RippleDateFloatingFilter(props, ref) {
    const [value, setValue] = useState('')
    const cellRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      onParentModelChanged(model) {
        // AG Grid stores dates as "YYYY-MM-DD HH:MM:SS"; we only need the date part
        const dateFrom = model?.dateFrom ?? ''
        setValue(dateFrom ? (dateFrom.split(' ')[0] ?? '') : '')
      },
    }))

    // AG Grid's header has overflow:hidden (needed for horizontal scroll), which
    // clips the calendar panel. The fix: when the panel appears, switch it to
    // position:fixed with viewport-relative coords so it escapes all clipping.
    useEffect(() => {
      const cell = cellRef.current
      if (!cell) return

      function reposition() {
        const panel = cell!.querySelector<HTMLElement>('.date-picker__panel')
        if (!panel) return
        const wrapper = cell!.querySelector<HTMLElement>('.date-picker__wrapper')
        if (!wrapper) return
        const rect = wrapper.getBoundingClientRect()
        panel.style.position = 'fixed'
        panel.style.top      = `${rect.bottom + 4}px`
        panel.style.left     = `${rect.left}px`
        panel.style.zIndex   = '9999'
      }

      const observer = new MutationObserver(reposition)
      observer.observe(cell, { childList: true, subtree: true })
      return () => observer.disconnect()
    }, [])

    const handleChange = (val: string) => {
      setValue(val)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      props.parentFilterInstance((parent: any) => {
        parent.setModel(val ? { type: 'equals', dateFrom: `${val} 00:00:00`, dateTo: null } : null)
        parent.onFilterChanged?.()
      })
    }

    return (
      <div className="data-grid__floating-filter-cell" ref={cellRef}>
        <DatePicker
          label="Filter date"
          hideLabel
          size="small"
          value={value}
          onChange={handleChange}
          clearable
        />
      </div>
    )
  },
)

// ---------------------------------------------------------------------------
// Ripple time floating filter component
// Wraps Ripple's TimePicker for use with agTextColumnFilter on time columns.
// Value stored as "HH:MM" (24-hour).
// ---------------------------------------------------------------------------

interface TimeFloatingFilterProps {
  parentFilterInstance: (cb: (parent: FloatingFilterParent) => void) => void
  currentParentModel:   () => { filter?: string } | null
}

interface TimeFloatingFilterRef {
  onParentModelChanged: (model: { filter?: string | null } | null) => void
}

export const RippleTimeFloatingFilter = React.forwardRef<TimeFloatingFilterRef, TimeFloatingFilterProps>(
  function RippleTimeFloatingFilter(props, ref) {
    const [value, setValue] = useState('')
    const cellRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      onParentModelChanged(model) {
        setValue(model?.filter ?? '')
      },
    }))

    // Same panel-escape fix as RippleDateFloatingFilter — switches the panel
    // to position:fixed once it appears so the header overflow:hidden can't clip it.
    useEffect(() => {
      const cell = cellRef.current
      if (!cell) return

      function reposition() {
        const panel = cell!.querySelector<HTMLElement>('.time-picker__panel')
        if (!panel) return
        const wrapper = cell!.querySelector<HTMLElement>('.time-picker__wrapper')
        if (!wrapper) return
        const rect = wrapper.getBoundingClientRect()
        panel.style.position = 'fixed'
        panel.style.top      = `${rect.bottom + 4}px`
        panel.style.left     = `${rect.left}px`
        panel.style.zIndex   = '9999'
      }

      const observer = new MutationObserver(reposition)
      observer.observe(cell, { childList: true, subtree: true })
      return () => observer.disconnect()
    }, [])

    const handleChange = (val: string) => {
      setValue(val)
      props.parentFilterInstance((parent) => {
        parent.onFloatingFilterChanged(val ? 'contains' : null, val || null)
      })
    }

    return (
      <div className="data-grid__floating-filter-cell" ref={cellRef}>
        <TimePicker
          label="Filter time"
          hideLabel
          size="small"
          value={value}
          onChange={handleChange}
          clearable
        />
      </div>
    )
  },
)

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const PAGE_SIZE_OPTIONS = [
  { label: '10',  value: '10'  },
  { label: '20',  value: '20'  },
  { label: '50',  value: '50'  },
  { label: '100', value: '100' },
]

// ---------------------------------------------------------------------------
// Ripple checkbox cell renderer — replaces AG Grid's built-in checkbox
// ---------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RippleCheckboxCell(params: any) {
  const [checked, setChecked] = useState<boolean>(params.node.isSelected() ?? false)

  useEffect(() => {
    const handler = () => setChecked(params.node.isSelected() ?? false)
    params.api.addEventListener('selectionChanged', handler)
    return () => params.api.removeEventListener('selectionChanged', handler)
  }, [params.api, params.node])

  return (
    <div className="data-grid__checkbox-cell">
      <Checkbox
        checked={checked}
        aria-label="Select row"
        onChange={(e) => params.node.setSelected(e.target.checked, false)}
      />
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RippleHeaderCheckbox(params: any) {
  type SelectionState = 'none' | 'some' | 'all'
  const [state, setState] = useState<SelectionState>('none')

  useEffect(() => {
    const update = () => {
      const selected = params.api.getSelectedNodes().length
      const total    = params.api.getDisplayedRowCount()
      setState(selected === 0 ? 'none' : selected < total ? 'some' : 'all')
    }
    update()
    params.api.addEventListener('selectionChanged', update)
    return () => params.api.removeEventListener('selectionChanged', update)
  }, [params.api])

  return (
    <div className="data-grid__checkbox-cell">
      <Checkbox
        checked={state === 'all'}
        indeterminate={state === 'some'}
        aria-label="Select all rows"
        onChange={() => state === 'all' ? params.api.deselectAll() : params.api.selectAll()}
      />
    </div>
  )
}

const CHECKBOX_COL_DEF: ColDef = {
  colId:           '__selection__',
  width:            48,
  maxWidth:         48,
  resizable:        false,
  sortable:         false,
  filter:           false,
  floatingFilter:   false,
  suppressMovable:  true,
  lockPosition:     'left',
  pinned:           'left',
  cellRenderer:     RippleCheckboxCell,
  headerComponent:  RippleHeaderCheckbox,
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type DataGridSize = 'default' | 'compact'

interface PaginationInfo {
  currentPage:  number   // 1-indexed for display
  totalPages:   number
  startRow:     number
  endRow:       number
  totalRows:    number
}

export interface DataGridProps<TData = unknown> {
  /** Column definitions. Re-export of AG Grid's ColDef for convenience. */
  columns: ColDef<TData>[]
  /** Row data. */
  rows: TData[]
  /**
   * Row density.
   * - `default` — 40px rows
   * - `compact` — 32px rows
   */
  size?: DataGridSize
  /** Shows an overlay spinner. Does not clear row data. */
  loading?: boolean
  /**
   * Row selection mode.
   * - `'none'` — no selection (default)
   * - `'single'` — one row at a time
   * - `'multi'` — checkbox multi-select
   */
  selectable?: 'none' | 'single' | 'multi'
  /** Called with the selected row data whenever selection changes. */
  onRowSelect?: (rows: TData[]) => void
  /** Enables pagination with a custom Ripple footer. */
  pagination?: boolean
  /** Number of rows per page when pagination is enabled. Default: 10. */
  pageSize?: number
  /**
   * Escape hatch — any AG Grid GridOptions not covered by Ripple props.
   * These are merged with, and may override, Ripple defaults.
   */
  gridOptions?: GridOptions<TData>
  className?: string
  style?: React.CSSProperties
}

// ---------------------------------------------------------------------------
// DataGrid
// ---------------------------------------------------------------------------

export function DataGrid<TData = unknown>({
  columns,
  rows,
  size = 'default',
  loading = false,
  selectable = 'none',
  onRowSelect,
  pagination = false,
  pageSize = 10,
  gridOptions,
  className,
  style,
}: DataGridProps<TData>) {

  const rowHeight = size === 'compact' ? 32 : 48

  const [currentPageSize, setCurrentPageSize] = useState(pageSize)
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo | null>(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gridApiRef = useRef<GridApi<any> | null>(null)

  // ---------------------------------------------------------------------------
  // Row selection
  // ---------------------------------------------------------------------------

  const rowSelection = useMemo((): RowSelectionOptions | undefined => {
    if (selectable === 'none') return undefined
    return {
      mode:                 selectable === 'multi' ? 'multiRow' : 'singleRow',
      // multi-select uses a dedicated Ripple checkbox column; AG Grid's built-in
      // checkboxes are disabled so they don't double-render
      checkboxes:           false,
      headerCheckbox:       false,
      enableClickSelection: true,
    }
  }, [selectable])

  const handleSelectionChanged = useCallback(
    (event: SelectionChangedEvent<TData>) => {
      if (!onRowSelect) return
      onRowSelect(event.api.getSelectedRows())
    },
    [onRowSelect],
  )

  // ---------------------------------------------------------------------------
  // Pagination
  // ---------------------------------------------------------------------------

  const syncPaginationInfo = useCallback((api: GridApi) => {
    const page      = api.paginationGetCurrentPage()   // 0-indexed
    const pageSize  = api.paginationGetPageSize()
    const totalRows = api.paginationGetRowCount()
    const total     = api.paginationGetTotalPages()
    const startRow  = totalRows === 0 ? 0 : page * pageSize + 1
    const endRow    = Math.min((page + 1) * pageSize, totalRows)
    setPaginationInfo({
      currentPage: page + 1,
      totalPages:  total,
      startRow,
      endRow,
      totalRows,
    })
  }, [])

  const handleGridReady = useCallback(
    (event: GridReadyEvent) => {
      gridApiRef.current = event.api
      if (pagination) syncPaginationInfo(event.api)
      gridOptions?.onGridReady?.(event)
    },
    [pagination, syncPaginationInfo, gridOptions],
  )

  const handlePaginationChanged = useCallback(
    (event: PaginationChangedEvent) => {
      syncPaginationInfo(event.api)
    },
    [syncPaginationInfo],
  )

  const handlePageSizeChange = useCallback((value: string) => {
    const next = Number(value)
    setCurrentPageSize(next)
    gridApiRef.current?.setGridOption('paginationPageSize', next)
  }, [])

  const goFirst    = useCallback(() => gridApiRef.current?.paginationGoToFirstPage(),    [])
  const goPrev     = useCallback(() => gridApiRef.current?.paginationGoToPreviousPage(), [])
  const goNext     = useCallback(() => gridApiRef.current?.paginationGoToNextPage(),     [])
  const goLast     = useCallback(() => gridApiRef.current?.paginationGoToLastPage(),     [])

  // ---------------------------------------------------------------------------
  // Column definitions — prepend checkbox column for multi-select
  // ---------------------------------------------------------------------------

  const columnDefs = useMemo<ColDef<TData>[]>(() => {
    if (selectable !== 'multi') return columns
    return [CHECKBOX_COL_DEF as ColDef<TData>, ...columns]
  }, [columns, selectable])

  // ---------------------------------------------------------------------------
  // Column defaults
  // ---------------------------------------------------------------------------

  const defaultColDef = useMemo<ColDef>(() => ({
    sortable:                true,
    filter:                  true,
    floatingFilter:          true,
    floatingFilterComponent: RippleTextFloatingFilter,
    resizable:               true,
    minWidth:                80,
    ...gridOptions?.defaultColDef,
  }), [gridOptions?.defaultColDef])

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  const isFirstPage = !paginationInfo || paginationInfo.currentPage <= 1
  const isLastPage  = !paginationInfo || paginationInfo.currentPage >= paginationInfo.totalPages

  return (
    <div
      className={[
        'data-grid',
        `data-grid--${size}`,
        loading ? 'data-grid--loading' : '',
        className,
      ].filter(Boolean).join(' ')}
      data-paginated={pagination && paginationInfo ? '' : undefined}
      style={style}
    >
      {loading && (
        <div className="data-grid__loading-overlay" aria-live="polite" aria-label="Loading">
          <Spinner size="m" />
        </div>
      )}

      <AgGridReact<TData>
        theme={rippleTheme}
        rowData={rows}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowHeight={rowHeight}
        headerHeight={48}
        floatingFiltersHeight={48}
        rowSelection={rowSelection}
        onSelectionChanged={selectable !== 'none' ? handleSelectionChanged : undefined}
        pagination={pagination}
        paginationPageSize={currentPageSize}
        paginationPageSizeSelector={false}
        suppressPaginationPanel={pagination}
        onGridReady={handleGridReady}
        onPaginationChanged={pagination ? handlePaginationChanged : undefined}
        domLayout="autoHeight"
        suppressMovableColumns={false}
        animateRows={true}
        {...gridOptions}
      />

      {/* Custom pagination footer — only rendered when pagination is enabled */}
      {pagination && paginationInfo && (
        <div className="data-grid__pagination">

          {/* Page size */}
          <div className="data-grid__pagination-size">
            <span className="data-grid__pagination-label">Page size:</span>
            <Dropdown
              aria-label="Rows per page"
              value={String(currentPageSize)}
              options={PAGE_SIZE_OPTIONS}
              onChange={handlePageSizeChange}
              size="small"
            />
          </div>

          {/* Row range info */}
          <span className="data-grid__pagination-info">
            {paginationInfo.startRow.toLocaleString()} to {paginationInfo.endRow.toLocaleString()} of {paginationInfo.totalRows.toLocaleString()}
          </span>

          {/* Page navigation */}
          <div className="data-grid__pagination-nav">
            <IconButton
              variant="ghost" color="neutral" size="xsmall"
              icon={<ChevronsLeft size={14} />}
              aria-label="First page"
              onClick={goFirst}
              disabled={isFirstPage}
            />
            <IconButton
              variant="ghost" color="neutral" size="xsmall"
              icon={<ChevronLeft size={14} />}
              aria-label="Previous page"
              onClick={goPrev}
              disabled={isFirstPage}
            />
            <span className="data-grid__pagination-pages">
              Page <strong>{paginationInfo.currentPage.toLocaleString()}</strong> of {paginationInfo.totalPages.toLocaleString()}
            </span>
            <IconButton
              variant="ghost" color="neutral" size="xsmall"
              icon={<ChevronRight size={14} />}
              aria-label="Next page"
              onClick={goNext}
              disabled={isLastPage}
            />
            <IconButton
              variant="ghost" color="neutral" size="xsmall"
              icon={<ChevronsRight size={14} />}
              aria-label="Last page"
              onClick={goLast}
              disabled={isLastPage}
            />
          </div>

        </div>
      )}
    </div>
  )
}
