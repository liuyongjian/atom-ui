import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '@/components/tooltip';

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        content: {
            control: 'text', // 控制内容为文本输入
            description: 'Tooltip 显示的内容',
        },
        placement: {
            control: {
                type: 'select',
                options: ['top', 'right', 'bottom', 'left'], // 可选位置
            },
            description: 'Tooltip 显示的位置',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: '这是一个 Tooltip！', // Tooltip 默认内容
        placement: 'top', // 默认位置为 top
        className: '', // 默认没有额外的 className
    },
};

export const Left: Story = {
    args: {
        content: '这是 Tooltip 左侧的内容',
        placement: 'left', // Tooltip 显示在左侧
        className: '',
    },
};

export const Right: Story = {
    args: {
        content: '这是 Tooltip 右侧的内容',
        placement: 'right', // Tooltip 显示在右侧
        className: '',
    },
};

export const Bottom: Story = {
    args: {
        content: '这是 Tooltip 底部的内容',
        placement: 'bottom', // Tooltip 显示在底部
        className: '',
    },
};

export const Customized: Story = {
    args: {
        content: '这是一个自定义样式的 Tooltip',
        placement: 'top',
        className: 'bg-blue-500 text-white', // 自定义背景色
    },
};
