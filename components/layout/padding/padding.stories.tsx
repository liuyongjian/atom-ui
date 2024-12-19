import type { Meta, StoryObj } from '@storybook/react';
import Padding from '@/components/layout/padding';

const meta: Meta<typeof Padding> = {
    title: 'Components/Padding',
    component: Padding,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        padding: {
            control: {
                type: 'number',
                min: 0,
                max: 64,
            },
            description: '定义 padding 的大小',
        },
        direction: {
            control: {
                type: 'select',
                options: ['all', 'top', 'right', 'bottom', 'left', 'x', 'y'],
            },
            description: '定义 padding 的方向',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Padding>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        padding: 4,
        direction: 'all',
        className: '',
        children: <div className="bg-blue-100">默认 Padding</div>,
    },
};

export const PaddingTop: Story = {
    args: {
        padding: 6,
        direction: 'top',
        className: '',
        children: <div className="bg-green-100">顶部 Padding</div>,
    },
};

export const PaddingX: Story = {
    args: {
        padding: 8,
        direction: 'x',
        className: 'bg-gray-100',
        children: <div className="bg-red-100">左右 Padding</div>,
    },
};

export const Customized: Story = {
    args: {
        padding: 12,
        direction: 'bottom',
        className: 'bg-yellow-100 p-2 rounded',
        children: <div className="bg-purple-100">底部自定义 Padding</div>,
    },
};
