import { cn } from '@/components/__utils';

interface PaddingProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * 所有方向的 padding。对应 Tailwind CSS 的 p-{size} 类
     */
    all?: number;

    /**
     * 顶部的 padding。对应 Tailwind CSS 的 pt-{size} 类
     */
    top?: number;

    /**
     * 右侧的 padding。对应 Tailwind CSS 的 pr-{size} 类
     */
    right?: number;

    /**
     * 底部的 padding。对应 Tailwind CSS 的 pb-{size} 类
     */
    bottom?: number;

    /**
     * 左侧的 padding。对应 Tailwind CSS 的 pl-{size} 类
     */
    left?: number;

    /**
     * 水平的 padding（左右）。对应 Tailwind CSS 的 px-{size} 类
     */
    x?: number;

    /**
     * 垂直的 padding（上下）。对应 Tailwind CSS 的 py-{size} 类
     */
    y?: number;
}

// 辅助函数：将方向和 padding 数值转换为 Tailwind CSS 类
const getPaddingClass = (direction: string, padding?: number): string => {
    if (padding === undefined) return '';
    return `${direction}-${padding}`;
};

const Padding: React.FC<PaddingProps> = ({
    children,
    all,
    top,
    right,
    bottom,
    left,
    x,
    y,
    className,
    ...props
}) => {
    const paddingClasses = [
        all !== undefined ? getPaddingClass('p', all) : '',
        top !== undefined ? getPaddingClass('pt', top) : '',
        right !== undefined ? getPaddingClass('pr', right) : '',
        bottom !== undefined ? getPaddingClass('pb', bottom) : '',
        left !== undefined ? getPaddingClass('pl', left) : '',
        x !== undefined ? getPaddingClass('px', x) : '',
        y !== undefined ? getPaddingClass('py', y) : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div
            className={cn(paddingClasses, className)}
            {...props}
        >
            {children}
        </div>
    );
};

export default Padding;
