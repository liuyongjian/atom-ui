import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from '@/components/sidebar';
import { HiHome, HiInformationCircle, HiCog, HiMail } from 'react-icons/hi';

const meta: Meta<typeof Sidebar> = {
    title: 'Components/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen', // Sidebar 通常需要 fullscreen 布局
    },
    tags: ['autodocs'],
    argTypes: {
        links: {
            control: 'object',
            description: '导航链接数组，每个链接包含 name 和 href 属性',
        },
        logo: {
            control: 'object',
            description: '自定义 Logo，可以是任何 React 节点',
        },
    },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// 定义默认的导航链接
const defaultLinks = [
    { name: 'Home', href: '/', icon: <HiHome /> },
    { name: 'About', href: '/about', icon: <HiInformationCircle /> },
    { name: 'Services', href: '/services', icon: <HiCog /> },
    { name: 'Contact', href: '/contact', icon: <HiMail /> },
];

// 定义带有不同图标的链接
const iconLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: <HiHome /> },
    { name: 'Profile', href: '/profile', icon: <HiInformationCircle /> },
    { name: 'Settings', href: '/settings', icon: <HiCog /> },
    { name: 'Messages', href: '/messages', icon: <HiMail /> },
];

// 定义一个自定义 Logo 组件
const CustomLogo = (
    <div className="flex items-center">
        <img src="https://via.placeholder.com/40" alt="Custom Logo" className="h-10 w-10 mr-2" />
        <span className="text-xl font-bold">CustomLogo</span>
    </div>
);

// 定义 Default 故事
export const Default: Story = {
    args: {
        links: defaultLinks,
        logo: undefined,
    },
};

// 定义带有自定义 Logo 的故事
export const WithCustomLogo: Story = {
    args: {
        links: defaultLinks,
        logo: CustomLogo,
    },
};

// 定义带有不同链接集的故事
export const WithDifferentLinks: Story = {
    args: {
        links: iconLinks,
        logo: undefined,
    },
};

// 定义响应式行为的故事（可选）
export const Responsive: Story = {
    args: {
        links: defaultLinks,
        logo: undefined,
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1', // 使用 Storybook 的 Viewport 插件查看响应式效果
        },
    },
};
