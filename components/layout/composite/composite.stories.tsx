import type { Meta, StoryObj } from '@storybook/react';
import Composite from '@/components/layout/composite';

const meta: Meta<typeof Composite> = {
    title: 'Components/Composite',
    component: Composite,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        as: {
            control: {
                type: 'select',
                options: ['div', 'section', 'article', 'span', 'header', 'footer'],
            },
            description: '渲染的 HTML 元素类型',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Composite>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        as: 'div',
        className: '',
        children: <p>这是一个默认的 Composite 组件。</p>,
    },
};

export const AsSection: Story = {
    args: {
        as: 'section',
        className: 'bg-yellow-100 p-4 rounded',
        children: <h2 className="text-xl font-bold">作为 Section 渲染</h2>,
    },
};

export const Customized: Story = {
    args: {
        as: 'article',
        className: 'border border-gray-300 p-6 shadow-lg',
        children: (
            <>
                <h2 className="text-2xl font-semibold mb-2">自定义 Composite</h2>
                <p className="text-gray-700">这是一个具有自定义样式的 Composite 组件。</p>
            </>
        ),
    },
};
