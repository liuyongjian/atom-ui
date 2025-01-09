import { cn } from '@/components/__utils';

// GridItemProps 用于定义每个网格项的属性
interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
    span?: number;  // 控制每个网格项占据的列数
}

// GridItem 组件，用于定义每个网格项
const GridItem: React.FC<GridItemProps> = ({
    children,
    span = 1,  // 默认占用 1 列
    className,
    ...props
}) => {
    // 根据 span 动态设置列占用的宽度
    const spanClass = span ? `col-span-${span}` : '';

    return (
        <div
            className={cn(
                spanClass, // 控制每个 GridItem 占用的列数
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export { GridItem }