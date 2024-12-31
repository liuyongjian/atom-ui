import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import ProgressBlock from '.';

const meta: Meta<typeof ProgressBlock> = {
    title: 'Components/ProgressBlock',
    component: ProgressBlock,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        count: {
            control: { type: 'number', min: 1 },
            description: 'Total number of blocks',
        },
        filledCount: {
            control: { type: 'number', min: 0 },
            description: 'Number of filled blocks',
        },
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary'],
            },
            description: 'Style variant for blocks',
        },
        className: {
            control: 'text',
            description: 'Custom class for container',
        },
    },
} satisfies Meta<typeof ProgressBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        count: 10,
        filledCount: 5,
        variant: 'primary',
        className: '',
    },
};

export const HalfFilled: Story = {
    args: {
        count: 8,
        filledCount: 4,
        variant: 'secondary',
        className: '',
    },
};

export const FullFilled: Story = {
    args: {
        count: 6,
        filledCount: 6,
        variant: 'primary',
        className: '',
    },
};

export const Animated: Story = {
    args: {
        count: 10,
        filledCount: 0,
        variant: 'primary',
        className: '',
    },
    render: (args) => {
        const [filledCount, setFilledCount] = useState(args.filledCount);

        useEffect(() => {
            const interval = setInterval(() => {
                setFilledCount((prev) => (prev < args.count ? prev + 1 : 0));
            }, 500);
            return () => clearInterval(interval);
        }, [args.count]);

        return <ProgressBlock {...args} filledCount={filledCount} />;
    },
};
