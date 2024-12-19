import type { Meta, StoryObj } from '@storybook/react';
import Divider from '@/components/divider';

const meta: Meta<typeof Divider> = {
    title: 'Components/Divider',
    component: Divider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: {
                type: 'select',
                options: ['horizontal', 'vertical'],
            },
            description: '分隔线的方向',
        },
        variant: {
            control: {
                type: 'select',
                options: ['solid', 'dashed', 'dotted'],
            },
            description: '分隔线的样式',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SolidHorizontal: Story = {
    args: {
        orientation: 'horizontal',
        variant: 'solid',
        className: '',
    },
};

export const DashedHorizontal: Story = {
    args: {
        orientation: 'horizontal',
        variant: 'dashed',
        className: '',
    },
};

export const DottedHorizontal: Story = {
    args: {
        orientation: 'horizontal',
        variant: 'dotted',
        className: '',
    },
};

export const SolidVertical: Story = {
    args: {
        orientation: 'vertical',
        variant: 'solid',
        className: 'h-8',
    },
};

export const DashedVertical: Story = {
    args: {
        orientation: 'vertical',
        variant: 'dashed',
        className: 'h-8',
    },
};

export const DottedVertical: Story = {
    args: {
        orientation: 'vertical',
        variant: 'dotted',
        className: 'h-8',
    },
};
