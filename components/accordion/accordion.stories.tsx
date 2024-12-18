import type { Meta, StoryObj } from '@storybook/react';
import Accordion from 'component/accordion';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        items: {
            control: 'object',
            description: 'Accordion 项数组，每个项包含 id、title 和 children 属性',
        },
        allowMultiple: {
            control: 'boolean',
            description: '是否允许多个项同时展开',
        },
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// 定义默认的 Accordion 项
const defaultItems = [
    {
        id: '1',
        title: '什么是 React？',
        children: <p>React 是一个用于构建用户界面的 JavaScript 库。</p>,
    },
    {
        id: '2',
        title: '什么是 Tailwind CSS？',
        children: <p>Tailwind CSS 是一个实用优先的 CSS 框架，用于快速构建自定义设计。</p>,
    },
    {
        id: '3',
        title: '什么是 TypeScript？',
        children: <p>TypeScript 是 JavaScript 的一个类型超集，编译为纯 JavaScript。</p>,
    },
];

// 定义允许多个项展开的 Accordion 项
const multipleItems = [
    {
        id: '1',
        title: '第一项标题',
        children: <p>这是第一项的内容。</p>,
    },
    {
        id: '2',
        title: '第二项标题',
        children: <p>这是第二项的内容。</p>,
    },
    {
        id: '3',
        title: '第三项标题',
        children: <p>这是第三项的内容。</p>,
    },
];

// 定义一个自定义内容的 Accordion 项
const customizedItems = [
    {
        id: '1',
        title: '自定义项 1',
        children: (
            <div>
                <h4 className="text-lg font-semibold">子标题 1</h4>
                <p>这是自定义项 1 的详细内容。</p>
            </div>
        ),
    },
    {
        id: '2',
        title: '自定义项 2',
        children: (
            <div>
                <h4 className="text-lg font-semibold">子标题 2</h4>
                <p>这是自定义项 2 的详细内容。</p>
            </div>
        ),
    },
    {
        id: '3',
        title: '自定义项 3',
        children: (
            <div>
                <h4 className="text-lg font-semibold">子标题 3</h4>
                <p>这是自定义项 3 的详细内容。</p>
            </div>
        ),
    },
];

// 定义 Default 故事
export const Default: Story = {
    args: {
        items: defaultItems,
        allowMultiple: false,
    },
};

// 定义 AllowMultiple 故事
export const AllowMultiple: Story = {
    args: {
        items: multipleItems,
        allowMultiple: true,
    },
};

// 定义 Customized 故事
export const Customized: Story = {
    args: {
        items: customizedItems,
        allowMultiple: true,
    },
};
