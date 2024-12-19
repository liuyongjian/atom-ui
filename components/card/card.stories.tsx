import type { Meta, StoryObj } from '@storybook/react';
import Card from '@/components/card';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        elevation: {
            control: {
                type: 'select',
                options: ['none', 'sm', 'md', 'lg'],
            },
            description: '卡片的阴影效果',
        },
        rounded: {
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg'],
            },
            description: '卡片的圆角大小',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        elevation: 'md',
        rounded: 'md',
        children: (
            <>
                <h2 className="text-xl font-bold mb-2">卡片标题</h2>
                <p className="text-gray-700">这是卡片的内容。</p>
            </>
        ),
        className: 'p-4',
    },
};

export const ElevatedLargeRounded: Story = {
    args: {
        elevation: 'lg',
        rounded: 'lg',
        children: (
            <>
                <h2 className="text-xl font-bold mb-2">大型阴影卡片</h2>
                <p className="text-gray-700">这个卡片有更大的阴影和圆角。</p>
            </>
        ),
        className: 'p-6',
    },
};

export const NoElevation: Story = {
    args: {
        elevation: 'none',
        rounded: 'md',
        children: (
            <>
                <h2 className="text-xl font-bold mb-2">无阴影卡片</h2>
                <p className="text-gray-700">这个卡片没有阴影效果。</p>
            </>
        ),
        className: 'p-4',
    },
};

export const Customized: Story = {
    args: {
        elevation: 'sm',
        rounded: 'sm',
        children: (
            <>
                <h2 className="text-lg font-semibold mb-1">自定义卡片</h2>
                <p className="text-gray-600">这是一个自定义样式的卡片。</p>
            </>
        ),
        className: 'p-3 bg-gray-50',
    },
};
