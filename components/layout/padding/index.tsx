import { cn } from 'component/__utils';

interface PaddingProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * 定义 padding 的大小。可以是 Tailwind CSS 支持的所有 padding 尺寸。
     * 例如: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64
     */
    padding?: number;

    /**
     * 定义 padding 的方向。
     * 可选值包括：'all', 'top', 'right', 'bottom', 'left', 'x', 'y'
     */
    direction?: 'all' | 'top' | 'right' | 'bottom' | 'left' | 'x' | 'y';
}

const directionMap: Record<NonNullable<PaddingProps['direction']>, string> = {
    all: 'p',
    top: 'pt',
    right: 'pr',
    bottom: 'pb',
    left: 'pl',
    x: 'px',
    y: 'py',
};

const Padding: React.FC<PaddingProps> = ({
    children,
    padding = 4,
    direction = 'all',
    className,
    ...props
}) => {
    const paddingClass = `${directionMap[direction]}-${padding}`;

    return (
        <div
            className={cn(paddingClass, className)}
            {...props}
        >
            {children}
        </div>
    );
};

export default Padding;
