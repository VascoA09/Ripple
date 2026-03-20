import { Meta, StoryObj } from '@storybook/react';
import { FileViewerProps } from './FileViewer';

declare const meta: Meta<FileViewerProps>;
export default meta;
type Story = StoryObj<FileViewerProps>;
export declare const ImagePreview: Story;
export declare const PDFPreview: Story;
export declare const CSVPreview: Story;
export declare const TextPreview: Story;
export declare const UnsupportedType: Story;
export declare const MultiFile: Story;
export declare const NoHeader: Story;
export declare const InSidePanel: Story;
