import { default as React } from 'react';
import { ColDef, GridOptions } from 'ag-grid-community';

interface FloatingFilterParent {
    onFloatingFilterChanged: (type: string | null, value: string | null) => void;
}
interface DateFilterModel {
    type: string;
    dateFrom: string | null;
    dateTo: string | null;
}
interface DateFloatingFilterProps {
    parentFilterInstance: (cb: (parent: any) => void) => void;
    currentParentModel: () => DateFilterModel | null;
}
interface DateFloatingFilterRef {
    onParentModelChanged: (model: DateFilterModel | null) => void;
}
export declare const RippleDateFloatingFilter: React.ForwardRefExoticComponent<DateFloatingFilterProps & React.RefAttributes<DateFloatingFilterRef>>;
interface TimeFloatingFilterProps {
    parentFilterInstance: (cb: (parent: FloatingFilterParent) => void) => void;
    currentParentModel: () => {
        filter?: string;
    } | null;
}
interface TimeFloatingFilterRef {
    onParentModelChanged: (model: {
        filter?: string | null;
    } | null) => void;
}
export declare const RippleTimeFloatingFilter: React.ForwardRefExoticComponent<TimeFloatingFilterProps & React.RefAttributes<TimeFloatingFilterRef>>;
export type DataGridSize = 'default' | 'compact';
export interface DataGridProps<TData = unknown> {
    /** Column definitions. Re-export of AG Grid's ColDef for convenience. */
    columns: ColDef<TData>[];
    /** Row data. */
    rows: TData[];
    /**
     * Row density.
     * - `default` — 40px rows
     * - `compact` — 32px rows
     */
    size?: DataGridSize;
    /** Shows an overlay spinner. Does not clear row data. */
    loading?: boolean;
    /**
     * Row selection mode.
     * - `'none'` — no selection (default)
     * - `'single'` — one row at a time
     * - `'multi'` — checkbox multi-select
     */
    selectable?: 'none' | 'single' | 'multi';
    /** Called with the selected row data whenever selection changes. */
    onRowSelect?: (rows: TData[]) => void;
    /** Enables pagination with a custom Ripple footer. */
    pagination?: boolean;
    /** Number of rows per page when pagination is enabled. Default: 10. */
    pageSize?: number;
    /**
     * Escape hatch — any AG Grid GridOptions not covered by Ripple props.
     * These are merged with, and may override, Ripple defaults.
     */
    gridOptions?: GridOptions<TData>;
    className?: string;
    style?: React.CSSProperties;
}
export declare function DataGrid<TData = unknown>({ columns, rows, size, loading, selectable, onRowSelect, pagination, pageSize, gridOptions, className, style, }: DataGridProps<TData>): import("react/jsx-runtime").JSX.Element;
export {};
