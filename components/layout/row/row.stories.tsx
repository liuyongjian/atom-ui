import type { Meta, StoryObj } from '@storybook/react';
import Row from '@/components/layout/row';

const meta: Meta<typeof Row> = {
    title: 'Components/Row',
    component: Row,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        justify: {
            control: {
                type: 'select',
                options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
            },
            description: '水平排列的对齐方式',
        },
        align: {
            control: {
                type: 'select',
                options: ['start', 'center', 'end', 'stretch'],
            },
            description: '垂直排列的对齐方式',
        },
        gap: {
            control: {
                type: 'number',
                min: 0,
                max: 64,
            },
            description: '子元素之间的间距',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        justify: 'start',
        align: 'stretch',
        gap: 4,
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
