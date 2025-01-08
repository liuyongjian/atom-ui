import type { Meta, StoryObj } from '@storybook/react';
import Card from '@/components/card';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        elevation: {
            control: {
                type: 'select',
                options: ['none', 'sm', 'md', 'lg'],
            },
            description: '卡片的阴影效果',
        },
        rounded: {
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg'],
            },
            description: '卡片的圆角大小',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
        w: {
            control: {
                type: 'text',  // 使用 text 控件支持任意字符串
            },
            description: '卡片的宽度设置，可以使用 Tailwind CSS 的宽度类名或者自定义宽度。',
        },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardWithHeader: Story = {
    args: {
        elevation: 'md',
        rounded: 'md',
        w: '1/2',  // 设置为 '1/2' 作为 Tailwind 预设宽度类
        children: (
            <Card>
                <Card.Header>
                    <Card.Title>卡片标题</Card.Title>
                </Card.Header>
                <Card.Content>
                    <Card.Description>这是卡片的内容。</Card.Description>
                </Card.Content>
            </Card>
        ),
        className: 'p-4',
    },
};

export const CardWithFooter: Story = {
    args: {
        elevation: 'lg',
        rounded: 'lg',
        w: 'screen',  // 设置为 'screen' 作为全屏宽度
        children: (
            <Card>
                <Card.Header>
                    <Card.Title>卡片标题</Card.Title>
                </Card.Header>
                <Card.Content>
                    <Card.Description>卡片的详细描述信息。</Card.Description>
                </Card.Content>
                <Card.Footer>
                    <p>卡片底部的内容</p>
                </Card.Footer>
            </Card>
        ),
        className: 'p-6',
    },
};

export const CardWithAllParts: Story = {
    args: {
        elevation: 'md',
        rounded: 'md',
        w: 'full',  // 设置为 'full' 作为占满全宽
        children: (
            <Card>
                <Card.Header>
                    <Card.Title>完整的卡片</Card.Title>
                </Card.Header>
                <Card.Content>
                    <Card.Description>这里是卡片的主体内容。</Card.Description>
                </Card.Content>
                <Card.Footer>
                    <p>这是卡片的底部内容。</p>
                </Card.Footer>
            </Card>
        ),
        className: 'p-6',
    },
};

export const CardWithCustomWidth: Story = {
    args: {
        elevation: 'sm',
        rounded: 'sm',
        w: '300px',  // 允许传入自定义宽度，如 '300px'
        children: (
            <Card>
                <Card.Header>
                    <Card.Title>自定义宽度卡片</Card.Title>
                </Card.Header>
                <Card.Content>
                    <Card.Description>这个卡片的宽度是 300px。</Card.Description>
                </Card.Content>
            </Card>
        ),
        className: 'p-3',
    },
};
