import type { Meta, StoryObj } from '@storybook/react';
import Spacer from '@/components/layout/spacer';

const meta: Meta<typeof Spacer> = {
    title: 'Components/Spacer',
    component: Spacer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        grow: {
            control: {
                type: 'number',
                min: 0,
                max: 10,
            },
            description: 'flex-grow 属性',
        },
        shrink: {
            control: {
                type: 'number',
                min: 0,
                max: 10,
            },
            description: 'flex-shrink 属性',
        },
        basis: {
            control: {
                type: 'text',
            },
            description: 'flex-basis 属性',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        grow: 1,
        shrink: 1,
        basis: '0%',
        className: '',
    },
    render: (args) => (
        <div className="flex bg-gray-100 p-4">
            <div className="bg-blue-200 p-2">Item 1</div>
            <Spacer {...args} />
            <div className="bg-blue-200 p-2">Item 2</div>
        </div>
    ),
};

export const FixedSize: Story = {
    args: {
        grow: 0,
        shrink: 0,
        basis: '50px',
        className: 'bg-red-500',
    },
    render: (args) => (
        <div className="flex bg-gray-100 p-4">
            <div className="bg-green-200 p-2">Item 1</div>
            <Spacer {...args} />
            <div className="bg-green-200 p-2">Item 2</div>
        </div>
    ),
};

export const FlexibleSpacer: Story = {
    args: {
        grow: 2,
        shrink: 1,
        basis: '0%',
        className: 'bg-yellow-500',
    },
    render: (args) => (
        <div className="flex bg-gray-100 p-4">
            <div className="bg-purple-200 p-2">Item 1</div>
            <Spacer {...args} />
            <div className="bg-purple-200 p-2">Item 2</div>
        </div>
    ),
};

export const Customized: Story = {
    args: {
        grow: 1,
        shrink: 1,
        basis: '10%',
        className: 'bg-pink-500',
    },
    render: (args) => (
        <div className="flex bg-gray-100 p-4">
            <div className="bg-indigo-200 p-2">Item 1</div>
            <Spacer {...args} />
            <div className="bg-indigo-200 p-2">Item 2</div>
        </div>
    ),
};
