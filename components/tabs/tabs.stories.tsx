import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '@/components/tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        tabs: {
            control: { type: 'object' }, // 修正 control 类型
            description: 'Tabs 项数组，每个项包含 id、label 和 content 属性',
        },
        defaultActiveId: {
            control: 'text',
            description: '默认激活的 Tab id',
        },
        // 选项 1：移除 className
        // className: {
        //     control: 'text',
        //     description: '自定义样式类',
        // },
        // 选项 2：显式声明 className
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// 示例 Tabs 项
const tabItems = [
    {
        id: 'tab1',
        label: '首页',
        content: <p>欢迎来到首页！</p>,
    },
    {
        id: 'tab2',
        label: '个人资料',
        content: <p>这是你的个人资料页面。</p>,
    },
    {
        id: 'tab3',
        label: '设置',
        content: <p>在这里调整你的设置。</p>,
    },
];

export const Default: Story = {
    args: {
        tabs: tabItems,
        defaultActiveId: 'tab1',
        className: '',
    },
};

export const Customized: Story = {
    args: {
        tabs: tabItems,
        defaultActiveId: 'tab2',
        className: 'w-80',
    },
};

export const DifferentContent: Story = {
    args: {
        tabs: [
            {
                id: 'tab1',
                label: 'Tab 1',
                content: (
                    <div>
                        <h4 className="text-lg font-semibold">内容 1</h4>
                        <p>这是第一个 Tab 的内容。</p>
                    </div>
                ),
            },
            {
                id: 'tab2',
                label: 'Tab 2',
                content: (
                    <div>
                        <h4 className="text-lg font-semibold">内容 2</h4>
                        <p>这是第二个 Tab 的内容。</p>
                    </div>
                ),
            },
            {
                id: 'tab3',
                label: 'Tab 3',
                content: (
                    <div>
                        <h4 className="text-lg font-semibold">内容 3</h4>
                        <p>这是第三个 Tab 的内容。</p>
                    </div>
                ),
            },
        ],
        defaultActiveId: 'tab3',
        className: '',
    },
};
