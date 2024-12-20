import type { Meta, StoryObj } from '@storybook/react';
import Image from '@/components/image';

const meta: Meta<typeof Image> = {
    title: 'Components/Image',
    component: Image,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['xs', 'sm', 'base', 'lg', 'xl'],
            },
            description: '图像的尺寸',
            table: {
                type: { summary: `'xs' | 'sm' | 'base' | 'lg' | 'xl'` },
                defaultValue: { summary: 'base' },
            },
        },
        rounded: {
            control: {
                type: 'select',
                options: ['none', 'sm', 'md', 'lg', 'full'],
            },
            description: '图像的圆角大小',
            table: {
                type: { summary: `'none' | 'sm' | 'md' | 'lg' | 'full'` },
                defaultValue: { summary: 'md' },
            },
        },
        elevation: {
            control: {
                type: 'select',
                options: ['none', 'sm', 'md', 'lg'],
            },
            description: '图像的阴影效果',
            table: {
                type: { summary: `'none' | 'sm' | 'md' | 'lg'` },
                defaultValue: { summary: 'none' },
            },
        },
        border: {
            control: 'boolean',
            description: '是否显示边框',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        borderColor: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'custom'],
            },
            description: '边框的颜色',
            mapping: {
                primary: 'border-blue-500',
                secondary: 'border-gray-500',
                success: 'border-green-500',
                danger: 'border-red-500',
                warning: 'border-yellow-500',
                info: 'border-teal-500',
                light: 'border-gray-200',
                dark: 'border-gray-800',
                custom: 'border-pink-500', // 示例自定义边框颜色
            },
            table: {
                type: { summary: `'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'custom'` },
                defaultValue: { summary: 'gray-200' },
            },
        },
        src: {
            control: 'text',
            description: '图像的来源 URL',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        alt: {
            control: 'text',
            description: '图像的替代文本',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '""' },
            },
        },
        placeholderSrc: {
            control: 'text',
            description: '加载中的占位图 URL',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'https://via.placeholder.com/150?text=Loading...' },
            },
        },
        cache: {
            control: 'boolean',
            description: '是否启用图片缓存功能',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        className: {
            control: 'text',
            description: '自定义样式类',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        // 其他 HTML 属性可以保持默认
    },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: 'https://via.placeholder.com/150',
        alt: '默认图像',
        size: 'base',
        rounded: 'md',
        elevation: 'none',
        border: false,
        cache: false,
    },
};

export const LargeRoundedShadowed: Story = {
    args: {
        src: 'https://via.placeholder.com/300',
        alt: '大尺寸圆角带阴影图像',
        size: 'lg',
        rounded: 'lg',
        elevation: 'md',
        border: true,
        borderColor: 'primary',
        cache: true,
    },
};

export const SmallNoBorder: Story = {
    args: {
        src: 'https://via.placeholder.com/100',
        alt: '小尺寸无边框图像',
        size: 'sm',
        rounded: 'sm',
        elevation: 'sm',
        border: false,
        cache: false,
    },
};

export const FullRoundedWithBorder: Story = {
    args: {
        src: 'https://via.placeholder.com/200',
        alt: '全圆图像带边框',
        size: 'base',
        rounded: 'full',
        elevation: 'lg',
        border: true,
        borderColor: 'success',
        cache: true,
    },
};

export const CustomBorderColor: Story = {
    args: {
        src: 'https://via.placeholder.com/250',
        alt: '自定义边框颜色图像',
        size: 'xl',
        rounded: 'md',
        elevation: 'md',
        border: true,
        borderColor: 'custom', // 对应 mapping 中的 'border-pink-500'
        cache: true,
    },
};

export const CombinedStyles: Story = {
    args: {
        src: 'https://via.placeholder.com/350',
        alt: '组合样式的图像',
        size: 'xl',
        rounded: 'full',
        elevation: 'lg',
        border: true,
        borderColor: 'warning',
        className: 'object-cover',
        cache: true,
    },
};

export const WithPlaceholder: Story = {
    args: {
        src: 'https://invalid-url.com/invalid-image.jpg', // 无效 URL 以展示占位图
        alt: '无效图像展示占位图',
        size: 'base',
        rounded: 'md',
        elevation: 'none',
        border: false,
        placeholderSrc: 'https://via.placeholder.com/150?text=Loading...',
        cache: true,
    },
};
