import type { Meta, StoryObj } from '@storybook/react';
import Card from '@/components/card';
import ProgressBlock from '@/components/progress/block';

const meta: Meta<typeof Card> = {
    title: 'Usage/Card',
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

export const CardWithProgress: Story = {
    args: {
        elevation: 'md',
        rounded: 'md',
        w: '1/2',  // 设置为 '1/2' 作为 Tailwind 预设宽度类
        children: (
            <Card hoverable className='w-[500px]'>
                <Card.Header>
                    <Card.Title>卡片标题</Card.Title>
                    <Card.Description>这是卡片的内容。</Card.Description>
                </Card.Header>
                <Card.Content>
                    <ProgressBlock count={20} filledCount={10}></ProgressBlock>
                </Card.Content>
            </Card>
        ),
        className: 'p-4',
    },
};