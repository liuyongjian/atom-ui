import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Switch from 'component/switch';

const meta: Meta<typeof Switch> = {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: '开关的标签',
        },
        checked: {
            control: 'boolean',
            description: '开关的选中状态',
        },
        onChange: {
            action: 'changed',
            description: '开关状态变化的回调函数',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: '启用功能',
        checked: false,
        onChange: () => { },
        className: '',
    },
    render: (args) => {
        const [checked, setChecked] = useState(args.checked);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setChecked(e.target.checked);
            args.onChange && args.onChange(e);
        };

        return <Switch {...args} checked={checked} onChange={handleChange} />;
    },
};

export const Checked: Story = {
    args: {
        label: '功能已启用',
        checked: true,
        onChange: () => { },
        className: '',
    },
    render: (args) => {
        const [checked, setChecked] = useState(args.checked);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setChecked(e.target.checked);
            args.onChange && args.onChange(e);
        };

        return <Switch {...args} checked={checked} onChange={handleChange} />;
    },
};

export const Disabled: Story = {
    args: {
        label: '禁用通知',
        checked: false,
        onChange: () => { },
        className: '',
        disabled: true,
    },
};

export const Customized: Story = {
    args: {
        label: '自定义样式开关',
        checked: true,
        onChange: () => { },
        className: 'text-blue-500',
    },
};
