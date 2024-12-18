import type { Meta, StoryObj } from '@storybook/react';
import Alert from 'component/alert';

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['success', 'error', 'warning', 'info'],
            },
            description: '警告类型',
        },
        message: {
            control: 'text',
            description: '警告信息',
        },
        onClose: {
            action: 'closed',
            description: '关闭警告的回调函数',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        type: 'success',
        message: '这是一个成功的警告！',
        onClose: () => { },
    },
};

export const Error: Story = {
    args: {
        type: 'error',
        message: '这是一个错误的警告！',
        onClose: () => { },
    },
};

export const Warning: Story = {
    args: {
        type: 'warning',
        message: '这是一个警告！',
        onClose: () => { },
    },
};

export const Info: Story = {
    args: {
        type: 'info',
        message: '这是一个信息提示！',
        onClose: () => { },
    },
};

export const WithoutCloseButton: Story = {
    args: {
        type: 'info',
        message: '这是一个没有关闭按钮的警告。',
        onClose: undefined,
    },
};
