import type { Meta, StoryObj } from '@storybook/react';
import List from '@/components/list';
import Row from '@/components/layout/row';
import Avatar from '@/components/avatar';

const meta: Meta<typeof List> = {
    title: 'Components/List',
    component: List,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        items: {
            control: { type: 'object' }, // 修正 control 类型
            description: '列表项数组',
        },
        // 移除 renderItem 的 control，因为 Storybook 无法控制函数
        renderItem: {
            description: '自定义渲染每个列表项的函数',
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
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

// 示例用户数据
const users = [
    { name: 'John Doe', avatar: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', avatar: 'https://via.placeholder.com/150' },
    { name: 'Alice Johnson', avatar: 'https://via.placeholder.com/150' },
];

export const Default: Story = {
    args: {
        items: users.map(user => user.name),
        renderItem: (item: string, index: number) => (
            <Row justify="start" align="center" gap={4}>
                <Avatar src={users[index].avatar} />
                <span>{item}</span>
            </Row>
        ),
        className: '',
    },
};

export const Customized: Story = {
    args: {
        items: users.map(user => user.name),
        renderItem: (item: string, index: number) => (
            <Row justify="start" align="center" gap={4} className="bg-gray-200 p-2 rounded">
                <Avatar src={users[index].avatar} />
                <span className="text-lg font-medium">{item}</span>
            </Row>
        ),
        className: 'w-80',
    },
};

export const WithoutRenderItem: Story = {
    args: {
        items: ['Item 1', 'Item 2', 'Item 3'],
        renderItem: undefined, // 不传 renderItem 时，组件使用默认渲染
        className: '',
    },
};
