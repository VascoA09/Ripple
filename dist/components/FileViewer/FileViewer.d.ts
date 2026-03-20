
export interface FileViewerFile {
    name: string;
    /** MIME type (e.g. "image/png") or extension (e.g. ".pdf"). */
    type: string;
    /** URL of the file to preview. */
    url: string;
    size?: number;
    uploadDate?: string;
    /** For paginated document display in the footer. */
    pageCount?: number;
}
export interface FileViewerProps {
    /** The file currently being previewed. */
    file: FileViewerFile;
    /** All files — enables multi-file navigation in the footer. */
    files?: FileViewerFile[];
    /** Index of the current file within `files`. */
    currentFileIndex?: number;
    showHeader?: boolean;
    showFooter?: boolean;
    allowDownload?: boolean;
    allowExpand?: boolean;
    allowZoom?: boolean;
    allowRotate?: boolean;
    /** CSS max-height of the preview area. Default: "500px". */
    maxHeight?: string;
    onDownload?: (file: FileViewerFile) => void;
    onExpand?: (file: FileViewerFile) => void;
    /** Called with the new index when the user navigates between files. */
    onFileChange?: (index: number) => void;
    className?: string;
    'aria-label'?: string;
}
export declare function FileViewer({ file, files, currentFileIndex, showHeader, showFooter, allowDownload, allowExpand, allowZoom, allowRotate, maxHeight, onDownload, onExpand, onFileChange, className, 'aria-label': ariaLabel, }: FileViewerProps): import("react/jsx-runtime").JSX.Element;
