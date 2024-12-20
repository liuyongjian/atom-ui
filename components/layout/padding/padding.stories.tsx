// src/components/layout/Padding.stories.tsx
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
        all: {
            control: 'number',
            description: '所有方向的 padding',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'undefined' },
            },
        },
        top: {
            control: 'number',
            description: '顶部的 padding',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'undefined' },
            },
        },
        right: {
            control: 'number',
            description: '右侧的 padding',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'undefined' },
            },
        },
        bottom: {
            control: 'number',
            description: '底部的 padding',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'undefined' },
            },
        },
        left: {
            control: 'number',
            description: '左侧的 padding',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'undefined' },
            },
        },
        x: {
            control: 'number',
            description: '水平的 padding（左右）',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'undefined' },
            },
        },
        y: {
            control: 'number',
            description: '垂直的 padding（上下）',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'undefined' },
            },
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
        children: {
            control: 'text',
            description: '子元素',
        },
    },
} satisfies Meta<typeof Padding>;

export default meta;
type Story = StoryObj<typeof meta>;

// 通用的背景颜色和边框类
const backgroundClasses = 'bg-blue-100 border border-blue-300';

export const AllPadding: Story = {
    args: {
        all: 4,
        children: '所有方向的 padding 4',
        className: backgroundClasses,
    },
};

export const TopBottomPadding: Story = {
    args: {
        top: 2,
        bottom: 2,
        children: '顶部和底部的 padding 2',
        className: backgroundClasses,
    },
};

export const HorizontalPadding: Story = {
    args: {
        x: 3,
        children: '水平的 padding 3',
        className: backgroundClasses,
    },
};

export const VerticalPadding: Story = {
    args: {
        y: 1,
        children: '垂直的 padding 1',
        className: backgroundClasses,
    },
};

export const LeftPadding: Story = {
    args: {
        left: 5,
        children: '左侧的 padding 5',
        className: backgroundClasses,
    },
};

export const CombinedPadding: Story = {
    args: {
        top: 2,
        bottom: 2,
        left: 4,
        right: 4,
        children: '顶部、底部、左右的 padding 4',
        className: backgroundClasses,
    },
};
