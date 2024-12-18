import type { Meta, StoryObj } from '@storybook/react';
import Input from 'component/input';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['default', 'outlined', 'filled'],
            },
            description: '输入框的样式变体',
        },
        placeholder: {
            control: 'text',
            description: '输入框的占位符文本',
        },
        error: {
            control: 'boolean',
            description: '是否显示错误状态',
        },
        disabled: {
            control: 'boolean',
            description: '是否禁用输入框',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'default',
        placeholder: '默认输入框',
        error: false,
        disabled: false,
        className: '',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        placeholder: '带边框的输入框',
        error: false,
        disabled: false,
        className: '',
    },
};

export const Filled: Story = {
    args: {
        variant: 'filled',
        placeholder: '填充样式的输入框',
        error: false,
        disabled: false,
        className: '',
    },
};

export const Error: Story = {
    args: {
        variant: 'default',
        placeholder: '错误状态的输入框',
        error: true,
        disabled: false,
        className: '',
    },
};

export const Disabled: Story = {
    args: {
        variant: 'default',
        placeholder: '禁用状态的输入框',
        error: false,
        disabled: true,
        className: '',
    },
};

export const Customized: Story = {
    args: {
        variant: 'outlined',
        placeholder: '自定义样式的输入框',
        error: false,
        disabled: false,
        className: 'w-64',
    },
};
