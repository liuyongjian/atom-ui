import type { Meta, StoryObj } from '@storybook/react';
import Layer from '@/components/layout/layer';

const meta: Meta<typeof Layer> = {
    title: 'Components/Layer',
    component: Layer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        alignment: {
            control: {
                type: 'select',
                options: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center'],
            },
            description: '内容对齐方式',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Layer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        alignment: 'center',
        className: '',
        children: <div className="p-4 bg-blue-200 rounded">居中对齐的内容</div>,
    },
};

export const TopLeft: Story = {
    args: {
        alignment: 'top-left',
        className: 'w-full h-64 bg-gray-100',
        children: <div className="p-4 bg-green-200 rounded">左上角对齐的内容</div>,
    },
};

export const BottomRight: Story = {
    args: {
        alignment: 'bottom-right',
        className: 'w-full h-64 bg-gray-100',
        children: <div className="p-4 bg-red-200 rounded">右下角对齐的内容</div>,
    },
};

export const Customized: Story = {
    args: {
        alignment: 'top-right',
        className: 'w-full h-64 bg-gray-100 flex',
        children: (
            <div className="p-4 bg-purple-200 rounded">
                自定义样式和对齐的内容
            </div>
        ),
    },
};
