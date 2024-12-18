import type { Meta, StoryObj } from '@storybook/react';
import Badge from 'component/badge';
import Avatar from 'component/avatar';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        count: {
            control: 'text',
            description: '徽章显示的内容（数字或字符串）',
        },
        variant: {
            control: {
                type: 'select',
                options: ['success', 'error', 'warning', 'info'],
            },
            description: '徽章的样式变体',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        count: 5,
        variant: 'success',
        className: '',
    },
};

export const Error: Story = {
    args: {
        count: '!',
        variant: 'error',
        className: '',
    },
};

export const Warning: Story = {
    args: {
        count: '99+',
        variant: 'warning',
        className: '',
    },
};

export const Info: Story = {
    args: {
        count: 'i',
        variant: 'info',
        className: '',
    },
};

export const WithAvatar: Story = {
    args: {
        count: 3,
        variant: 'success',
        className: '',
    },
    render: (args) => (
        <div className="flex items-center space-x-4">
            <Avatar src="https://via.placeholder.com/150" />
            <Badge {...args} />
        </div>
    ),
};
