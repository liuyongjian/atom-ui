import { Meta, StoryObj } from '@storybook/react';
import Sidebar from '.';

const meta: Meta<typeof Sidebar> = {
    title: 'Components/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        links: {
            control: 'object',
            description: '导航链接数组，支持嵌套',
        },
        logo: {
            control: 'text',
            description: '可选的 Logo 内容',
        },
        className: {
            control: 'text',
            description: '额外的容器样式类',
        },
        activePath: {
            control: 'text',
            description: '当前激活的路径',
        },
        onLinkClick: {
            action: 'onLinkClick',
            description: '点击链接时的回调函数',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const links = [
    {
        name: 'Dashboard',
        href: '/dashboard',
    },
    {
        name: 'Projects',
        href: '/projects',
        children: [
            { name: 'Project A', href: '/projects/a' },
            { name: 'Project B', href: '/projects/b' },
        ],
    },
    {
        name: 'Settings',
        href: '/settings',
    },
];

export const Default: Story = {
    render: (args) => (
        <Sidebar {...args} />
    ),
    args: {
        links: links,
        logo: <span className="text-xl font-bold text-blue-400">MyApp</span>,
        className: '',
        activePath: '/dashboard',
    },
};

export const WithCustomClass: Story = {
    render: (args) => (
        <Sidebar {...args} className="border border-gray-300" />
    ),
    args: {
        links: links,
        logo: <span className="text-xl font-bold text-green-400">CustomApp</span>,
        className: '',
        activePath: '/projects',
    },
};
