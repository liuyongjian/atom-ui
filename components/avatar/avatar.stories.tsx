import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@/components/avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        src: {
            control: 'text',
            description: '头像图片的 URL',
        },
        alt: {
            control: 'text',
            description: '图片的替代文本',
        },
        size: {
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg'],
            },
            description: '头像大小',
        },
        status: {
            control: {
                type: 'select',
                options: ['online', 'offline', 'busy', 'away'],
            },
            description: '用户状态',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: 'https://via.placeholder.com/150',
        alt: '默认头像',
        size: 'md',
        status: undefined,
    },
};

export const Small: Story = {
    args: {
        src: 'https://via.placeholder.com/100',
        alt: '小尺寸头像',
        size: 'sm',
        status: 'online',
    },
};

export const LargeWithStatus: Story = {
    args: {
        src: 'https://via.placeholder.com/200',
        alt: '大尺寸头像',
        size: 'lg',
        status: 'busy',
    },
};

export const CustomClass: Story = {
    args: {
        src: 'https://via.placeholder.com/150',
        alt: '自定义样式头像',
        size: 'md',
        status: 'offline',
        className: 'border-4 border-blue-500',
    },
};
