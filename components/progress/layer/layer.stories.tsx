import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProgressLayer } from '.';

const meta: Meta<typeof ProgressLayer> = {
    title: 'Components/ProgressLayer',
    component: ProgressLayer,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        usedPercent: {
            control: { type: 'number', min: 0, max: 100, step: 1 },
            description: '已使用的资源进度百分比 (0-100)。',
        },
        requestPercent: {
            control: { type: 'number', min: 0, max: 100, step: 1 },
            description: '请求的资源进度百分比 (0-100)。',
        },
        usage: {
            control: { type: 'number' },
            description: '已使用的资源量。',
        },
        request: {
            control: { type: 'number' },
            description: '请求的资源量。',
        },
        unit: {
            control: 'text',
            description: '资源的单位，例如 MB 或 GB。',
        },
        unitType: {
            control: 'text',
            description: '资源的类型，例如 CPU 或 Memory。',
        },
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary'],
            },
            description: '进度条的颜色样式变体。',
        },
        className: {
            control: 'text',
            description: '容器的自定义样式类。',
        },
    },
} satisfies Meta<typeof ProgressLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <div className="h-16">
            <ProgressLayer {...args} />
        </div>
    ),
    args: {
        usedPercent: 40,
        requestPercent: 70,
        usage: 40,
        request: 70,
        unit: 'MB',
        unitType: 'Memory',
        variant: 'primary',
        className: '',
    },
};

export const FullProgress: Story = {
    render: (args) => (
        <div className="h-16">
            <ProgressLayer {...args} />
        </div>
    ),
    args: {
        usedPercent: 100,
        requestPercent: 100,
        usage: 100,
        request: 100,
        unit: 'MB',
        unitType: 'CPU',
        variant: 'secondary',
        className: '',
    },
};

export const PartialProgress: Story = {
    render: (args) => (
        <div className="h-16">
            <ProgressLayer {...args} />
        </div>
    ),
    args: {
        usedPercent: 30,
        requestPercent: 50,
        usage: 30,
        request: 50,
        unit: 'GB',
        unitType: 'Storage',
        variant: 'primary',
        className: '',
    },
};

export const Animated: Story = {
    render: (args) => {
        const [usedPercent, setUsedPercent] = React.useState(args.usedPercent);

        React.useEffect(() => {
            const interval = setInterval(() => {
                setUsedPercent((prev) => (prev < args.requestPercent ? prev + 5 : 0));
            }, 500);

            return () => clearInterval(interval);
        }, [args.requestPercent]);

        return (
            <div className="h-16">
                <ProgressLayer {...args} usedPercent={usedPercent} />
            </div>
        );
    },
    args: {
        usedPercent: 0,
        requestPercent: 70,
        usage: 0,
        request: 70,
        unit: 'MB',
        unitType: 'Memory',
        variant: 'primary',
        className: '',
    },
};
