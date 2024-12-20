import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '@/components/checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        indeterminate: {
            control: 'boolean',
            description: '表示复选框是否处于不确定状态',
            defaultValue: false,
        },
        checked: {
            control: 'boolean',
            description: '表示复选框是否被选中',
            defaultValue: false,
        },
        onChange: { action: 'changed' },
        className: {
            control: 'text',
            description: '额外的 CSS 类',
            defaultValue: '',
        },
        // 你可以根据需要添加更多的 argTypes
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// 默认状态
export const Default: Story = {
    args: {
        indeterminate: false,
        checked: false,
        // 如果需要添加 label，可以在外部包裹 <label>
        // 或者在 Checkbox 组件内部处理
    },
};

// 选中状态
export const Checked: Story = {
    args: {
        indeterminate: false,
        checked: true,
    },
};

// 不确定状态
export const Indeterminate: Story = {
    args: {
        indeterminate: true,
        checked: false,
    },
};

// 交互式示例
export const Interactive: Story = {
    render: (args) => {
        const [isChecked, setIsChecked] = useState(false);
        const [isIndeterminate, setIsIndeterminate] = useState(false);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { checked } = e.target;
            setIsChecked(checked);
            // 简单逻辑：选中时取消不确定，不选中时设为不确定
            if (checked) {
                setIsIndeterminate(false);
            } else {
                setIsIndeterminate(true);
            }
        };

        return (
            <Checkbox
                {...args}
                checked={isChecked}
                indeterminate={isIndeterminate}
                onChange={handleChange}
            />
        );
    },
    args: {
        indeterminate: false,
        checked: false,
    },
};
