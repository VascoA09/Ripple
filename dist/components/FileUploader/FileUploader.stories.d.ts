import { Meta, StoryObj } from '@storybook/react';
import { FileUploaderProps } from './FileUploader';

declare const meta: Meta<FileUploaderProps>;
export default meta;
type Story = StoryObj<FileUploaderProps>;
export declare const Default: Story;
export declare const WithUploadButton: Story;
export declare const UploadError: Story;
export declare const SingleImageUpload: Story;
export declare const RightLayout: Story;
export declare const WithValidation: Story;
export declare const Disabled: Story;
export declare const NoLabel: Story;
