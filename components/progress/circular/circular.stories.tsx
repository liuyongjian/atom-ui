import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import ProgressCircular from '.';

const meta: Meta<typeof ProgressCircular> = {
    title: 'Components/ProgressCircular',
    component: ProgressCircular,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        percentage: {
            control: { type: 'number', min: 0, max: 100, step: 1 },
            description: 'Progress percentage (0 to 100)',
        },
        size: {
            control: { type: 'number', min: 16 },
            description: 'Size of the circular progress (in pixels)',
        },
        strokeWidth: {
            control: { type: 'number', min: 1 },
            description: 'Width of the circular stroke',
        },
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary'],
            },
            description: 'Color variant of the progress',
        },
        className: {
            control: 'text',
            description: 'Custom class for container',
        },
    },
} satisfies Meta<typeof ProgressCircular>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        percentage: 50,
        size: 48,
        strokeWidth: 4,
        variant: 'primary',
        className: '',
    },
};

export const FullProgress: Story = {
    args: {
        percentage: 100,
        size: 48,
        strokeWidth: 4,
        variant: 'secondary',
        className: '',
    },
};

export const Animated: Story = {
    args: {
        percentage: 0,
        size: 48,
        strokeWidth: 4,
        variant: 'primary',
        className: '',
    },
    render: (args) => {
        const [percentage, setPercentage] = useState(args.percentage);

        useEffect(() => {
            const interval = setInterval(() => {
                setPercentage((prev) => (prev < 100 ? prev + 10 : 0));
            }, 1000);
            return () => clearInterval(interval);
        }, []);

        return <ProgressCircular {...args} percentage={percentage} />;
    },
};
