import type { Meta, StoryObj } from '@storybook/react';
import Grid from '@/components/layout/grid';

const meta: Meta<typeof Grid> = {
    title: 'Components/Grid',
    component: Grid,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        gap: {
            control: {
                type: 'number',
            },
            description: 'Grid 项之间的间距',
        },
        w: {
            control: {
                type: 'text',
            },
            description: 'Grid 容器的宽度',
        },
        h: {
            control: {
                type: 'text',
            },
            description: 'Grid 容器的高度',
        },
        cols: {
            control: {
                type: 'number',
            },
            description: 'Grid 列数',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

// 默认网格，4个项目，span不同
export const DefaultGrid: Story = {
    args: {
        gap: 4,
        w: 'full',
        h: 'auto',
        cols: 3, // 设置列数
        children: (
            <>
                <Grid.Item span={2}>项目 1</Grid.Item>
                <Grid.Item>项目 2</Grid.Item>
                <Grid.Item>项目 3</Grid.Item>
                <Grid.Item>项目 4</Grid.Item>
            </>
        ),
    },
};

// 使用更大的间距
export const GridWithCustomGap: Story = {
    args: {
        gap: 6,
        w: 'full',
        h: 'auto',
        cols: 3,
        children: (
            <>
                <Grid.Item>项目 1</Grid.Item>
                <Grid.Item>项目 2</Grid.Item>
                <Grid.Item>项目 3</Grid.Item>
                <Grid.Item>项目 4</Grid.Item>
            </>
        ),
    },
};

// 使用自定义的宽度
export const GridWithCustomWidth: Story = {
    args: {
        gap: 4,
        w: '96', // 使用 Tailwind 尺寸类
        h: 'auto',
        cols: 3,
        children: (
            <>
                <Grid.Item>项目 1</Grid.Item>
                <Grid.Item>项目 2</Grid.Item>
                <Grid.Item>项目 3</Grid.Item>
                <Grid.Item>项目 4</Grid.Item>
            </>
        ),
    },
};

// 显示不同的 span 控制项
export const GridWithMixedSpan: Story = {
    args: {
        gap: 4,
        w: 'full',
        h: 'auto',
        cols: 3,
        children: (
            <>
                <Grid.Item span={2}>项目 1</Grid.Item>
                <Grid.Item>项目 2</Grid.Item>
                <Grid.Item span={3}>项目 3</Grid.Item>
                <Grid.Item>项目 4</Grid.Item>
            </>
        ),
    },
};
