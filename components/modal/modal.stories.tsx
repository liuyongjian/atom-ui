import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Modal from '@/components/modal';
import Button from '@/components/button';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen', // Modal 通常需要 fullscreen 布局
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: '模态框标题',
        },
        children: {
            control: 'text',
            description: '模态框内容',
        },
        isOpen: {
            control: 'boolean',
            description: '模态框是否打开',
        },
        onClose: {
            action: 'closed',
            description: '关闭模态框的回调函数',
        },
        className: {
            control: 'text',
            description: '自定义样式类',
        },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// 定义 Default 故事
export const Default: Story = {
    args: {
        isOpen: false,
        title: '默认模态框',
        children: '这是模态框中的内容。',
        onClose: () => { },
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(args.isOpen);

        const handleOpen = () => setIsOpen(true);
        const handleClose = () => {
            setIsOpen(false);
            args.onClose && args.onClose();
        };

        return (
            <>
                <Button onClick={handleOpen}>打开模态框</Button>
                <Modal {...args} isOpen={isOpen} onClose={handleClose}>
                    {args.children}
                </Modal>
            </>
        );
    },
};

// 定义 WithLongContent 故事
export const WithLongContent: Story = {
    args: {
        isOpen: false,
        title: '带有长内容的模态框',
        children: (
            <div>
                <p>这个模态框包含大量内容，用于测试滚动和布局效果。</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien lectus.</p>
                <p>Curabitur tincidunt, nisl eget vestibulum volutpat, nulla erat viverra arcu, non facilisis lacus nisl nec quam.</p>
                <p>Phasellus tristique, nunc in cursus finibus, turpis tortor interdum lorem, ac hendrerit turpis tortor sit amet nisl.</p>
            </div>
        ),
        onClose: () => { },
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(args.isOpen);

        const handleOpen = () => setIsOpen(true);
        const handleClose = () => {
            setIsOpen(false);
            args.onClose && args.onClose();
        };

        return (
            <>
                <Button onClick={handleOpen}>打开带有长内容的模态框</Button>
                <Modal {...args} isOpen={isOpen} onClose={handleClose}>
                    {args.children}
                </Modal>
            </>
        );
    },
};

// 定义 WithoutTitle 故事
export const WithoutTitle: Story = {
    args: {
        isOpen: false,
        title: undefined,
        children: '这是一个没有标题的模态框。',
        onClose: () => { },
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(args.isOpen);

        const handleOpen = () => setIsOpen(true);
        const handleClose = () => {
            setIsOpen(false);
            args.onClose && args.onClose();
        };

        return (
            <>
                <Button onClick={handleOpen}>打开没有标题的模态框</Button>
                <Modal {...args} isOpen={isOpen} onClose={handleClose}>
                    {args.children}
                </Modal>
            </>
        );
    },
};
