import type { Meta, StoryObj } from '@storybook/react';
import Column from '@/components/layout/column'; // 确保路径和命名正确

const meta: Meta<typeof Column> = {
    title: 'Components/Column',
    component: Column,
    parameters: {
        layout: 'fullscreen', // 使用 fullscreen 以确保有足够的空间展示 expand
    },
    tags: ['autodocs'],
    argTypes: {
        justify: {
            control: {
                type: 'select',
                options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
            },
            description: '垂直排列的对齐方式',
        },
        align: {
            control: {
                type: 'select',
                options: ['start', 'center', 'end', 'stretch'],
            },
            description: '水平排列的对齐方式',
        },
        gap: {
            control: {
                type: 'number',
                min: 0,
                max: 64,
            },
            description: '子元素之间的间距',
        },
        w: {
            control: {
                type: 'select',
                options: ['auto', 'full', '1/2', 'screen'],
            },
            description: '宽度设置（TailwindCSS 类）',
        },
        h: {
            control: {
                type: 'select',
                options: ['auto', 'full', 'screen'],
            },
            description: '高度设置（TailwindCSS 类）',
        },
        expand: {
            control: {
                type: 'boolean',
            },
            description: '是否在主轴方向上扩展以占据剩余空间',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        justify: 'start',
        align: 'stretch',
        gap: 4,
        expand: false,
        className: '',
        children: (
            <>
                <div className="p-2 bg-blue-100">Item 1</div>
                <div className="p-2 bg-blue-200">Item 2</div>
                <div className="p-2 bg-blue-300">Item 3</div>
            </>
        ),
    },
};

export const CenterAligned: Story = {
    args: {
        justify: 'center',
        align: 'center',
        gap: 8,
        expand: false,
        className: '',
        children: (
            <>
                <div className="p-2 bg-green-100">Centered Item 1</div>
                <div className="p-2 bg-green-200">Centered Item 2</div>
                <div className="p-2 bg-green-300">Centered Item 3</div>
            </>
        ),
    },
};

export const Customized: Story = {
    args: {
        justify: 'between',
        align: 'end',
        gap: 12,
        w: 'screen',  // 设置宽度为 screen
        h: 'full',    // 设置高度为 full
        expand: false,
        className: 'bg-gray-100 p-4 rounded',
        children: (
            <>
                <div className="p-2 bg-red-100">Customized Item 1</div>
                <div className="p-2 bg-red-200">Customized Item 2</div>
                <div className="p-2 bg-red-300">Customized Item 3</div>
            </>
        ),
    },
};

export const ExpandExample: Story = {
    render: (args) => (
        <div className="flex flex-row h-screen p-4">
            {/* 其他固定的 Column */}
            <Column justify="start" align="center" gap={4} className="bg-gray-200 p-2">
                <div className="p-2 bg-gray-300">Sidebar</div>
            </Column>

            {/* 可扩展的 Column */}
            <Column {...args}>
                <div className="p-2 bg-purple-100">Flexible Content</div>
                <div className="p-2 bg-purple-200">Flexible Content</div>
            </Column>

            {/* 其他固定的 Column */}
            <Column justify="start" align="center" gap={4} className="bg-gray-200 p-2">
                <div className="p-2 bg-gray-300">Ads</div>
            </Column>
        </div>
    ),
    args: {
        justify: 'start',
        align: 'stretch',
        gap: 4,
        expand: true,  // 使 Column 在主轴方向上扩展
        className: 'bg-yellow-100 p-4',
    },
};

export const MixedContent: Story = {
    render: (args) => (
        <div className="flex flex-row h-screen p-4">
            {/* 其他固定的 Column */}
            <Column justify="start" align="center" gap={4} className="bg-gray-200 p-2">
                <div className="p-2 bg-gray-300">Sidebar</div>
            </Column>

            {/* 可扩展的 Column */}
            <Column {...args}>
                <div className="p-2 bg-pink-200">Flexible Content</div>
                <div className="p-2 bg-pink-300">Flexible Content</div>
                <div className="p-2 bg-pink-400">Flexible Content</div>
            </Column>

            {/* 其他固定的 Column */}
            <Column justify="start" align="center" gap={4} className="bg-gray-200 p-2">
                <div className="p-2 bg-gray-300">Ads</div>
            </Column>
        </div>
    ),
    args: {
        justify: 'between',
        align: 'center',
        gap: 6,
        expand: true,
        className: 'bg-pink-100 p-4',
    },
};
