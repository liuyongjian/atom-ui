import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/button';

// 定义 Meta 配置
const meta: Meta<typeof Button> = {
    title: 'Components/Button', // Storybook 中的显示名称
    component: Button,          // 关联的组件
    parameters: {
        layout: 'centered',       // 布局参数，可选 'centered', 'fullscreen' 等
    },
    tags: ['autodocs'],         // 自动生成文档
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'ghost'], // 可选择的 variant 类型
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'], // 可选择的 size 类型
            },
        },
        disabled: {
            control: 'boolean', // 布尔类型控制
        },
        onClick: { action: 'clicked' }, // 使用 actions 插件记录 onClick 事件
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 定义 Primary 按钮故事
export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'medium',
        children: 'Primary Button', // 使用 children 属性
    },
};

// 定义 Secondary 按钮故事
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'medium',
        children: 'Secondary Button',
    },
};

// 定义 Ghost 按钮故事
export const Ghost: Story = {
    args: {
        variant: 'ghost',
        size: 'medium',
        children: 'Ghost Button',
    },
};

// 定义 Large 按钮故事
export const Large: Story = {
    args: {
        variant: 'primary',
        size: 'large',
        children: 'Large Button',
    },
};

// 定义 Small 按钮故事
export const Small: Story = {
    args: {
        variant: 'primary',
        size: 'small',
        children: 'Small Button',
    },
};

// 定义 Disabled 按钮故事
export const Disabled: Story = {
    args: {
        variant: 'primary',
        size: 'medium',
        children: 'Disabled Button',
        disabled: true,
    },
};
