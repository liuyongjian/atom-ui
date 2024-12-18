import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import ProgressBar from 'component/progress_bar';

const meta: Meta<typeof ProgressBar> = {
    title: 'Components/ProgressBar',
    component: ProgressBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        progress: {
            control: {
                type: 'range',
                min: 0,
                max: 100,
                step: 1,
            },
            description: '进度值（0 到 100）',
        },
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary'],
            },
            description: '进度条的样式变体',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        progress: 30,
        variant: 'primary',
        className: '',
    },
};

export const Secondary: Story = {
    args: {
        progress: 60,
        variant: 'secondary',
        className: '',
    },
};

export const FullProgress: Story = {
    args: {
        progress: 100,
        variant: 'primary',
        className: '',
    },
};

export const ZeroProgress: Story = {
    args: {
        progress: 0,
        variant: 'primary',
        className: '',
    },
};

export const Animated: Story = {
    args: {
        progress: 50,
        variant: 'primary',
        className: '',
    },
    render: (args) => {
        const [progress, setProgress] = useState(args.progress);

        useEffect(() => {
            const interval = setInterval(() => {
                setProgress((prev) => (prev < 100 ? prev + 10 : 0));
            }, 1000);
            return () => clearInterval(interval);
        }, []);

        return <ProgressBar {...args} progress={progress} />;
    },
};
