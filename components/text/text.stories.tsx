import type { Meta, StoryObj } from '@storybook/react';
import Text from '@/components/text';

const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
            },
            description: '文本的大小',
        },
        weight: {
            control: {
                type: 'select',
                options: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
            },
            description: '文本的粗细',
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'custom'],
            },
            description: '文本的颜色',
            mapping: {
                primary: 'text-blue-500',
                secondary: 'text-gray-500',
                success: 'text-green-500',
                danger: 'text-red-500',
                warning: 'text-yellow-500',
                info: 'text-teal-500',
                light: 'text-gray-200',
                dark: 'text-gray-800',
                custom: 'text-pink-500', // 示例自定义颜色
            },
        },
        italic: {
            control: 'boolean',
            description: '是否斜体',
        },
        underline: {
            control: 'boolean',
            description: '是否有下划线',
        },
        lineThrough: {
            control: 'boolean',
            description: '是否有删除线',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'base',
        weight: 'normal',
        color: 'dark',
        children: '这是默认的文本。',
    },
};

export const LargeBoldPrimary: Story = {
    args: {
        size: '2xl',
        weight: 'bold',
        color: 'primary',
        children: '这是一个大号加粗的主色文本。',
    },
};

export const SmallLightSecondary: Story = {
    args: {
        size: 'sm',
        weight: 'light',
        color: 'secondary',
        children: '这是一个小号轻量的次色文本。',
    },
};

export const ItalicUnderlineDanger: Story = {
    args: {
        size: 'base',
        weight: 'normal',
        color: 'danger',
        italic: true,
        underline: true,
        children: '这是一个斜体并带下划线的危险文本。',
    },
};

export const LineThroughCustomColor: Story = {
    args: {
        size: 'lg',
        weight: 'medium',
        color: 'custom', // 对应 mapping 中的 'text-pink-500'
        lineThrough: true,
        children: '这是一个带删除线的自定义颜色文本。',
    },
};

export const CombinedStyles: Story = {
    args: {
        size: '3xl',
        weight: 'extrabold',
        color: 'success',
        italic: true,
        underline: true,
        lineThrough: true,
        className: 'bg-yellow-100 p-2 rounded',
        children: '这是一个组合了多种样式的文本。',
    },
};
