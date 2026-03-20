
export type FileItemStatus = 'added' | 'uploading' | 'uploaded' | 'error';
export type FileUploaderPosition = 'bottom' | 'right';
export interface FileItem {
    id: string;
    file: File;
    status: FileItemStatus;
    errorMessage?: string;
}
export interface FileUploaderProps {
    label?: string;
    description?: string;
    required?: boolean;
    hint?: string;
    'aria-label'?: string;
    /** Position of the file list relative to the drop zone. Default: 'bottom'. */
    position?: FileUploaderPosition;
    /** Shows an Upload button; files are staged until clicked. */
    showUploadButton?: boolean;
    /** Accepted file types, e.g. ".pdf,.doc" or "image/*". Passed to input[accept]. */
    accept?: string;
    /** Max file size in bytes. */
    maxSize?: number;
    /** Human-readable format hint displayed in the drop zone, e.g. "PDF, DOC". */
    formatText?: string;
    disabled?: boolean;
    multiple?: boolean;
    /** Called when files pass validation and are added to the list. */
    onFilesAdded?: (files: File[]) => void;
    /** Async upload handler. Called when user clicks Upload. */
    onUpload?: (files: File[]) => Promise<void>;
    /** Called when a file is removed from the list. */
    onFileRemove?: (fileId: string) => void;
    id?: string;
    className?: string;
}
export declare function FileUploader({ label, description, required, hint, 'aria-label': ariaLabel, position, showUploadButton, accept, maxSize, formatText, disabled, multiple, onFilesAdded, onUpload, onFileRemove, id: idProp, className, }: FileUploaderProps): import("react/jsx-runtime").JSX.Element;
