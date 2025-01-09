import { cn } from '@/components/__utils';
import { GridItem } from './grid_item'

// GridProps 用于定义 Grid 组件的属性
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: number;  // 网格项之间的间距
    cols?: number;
    w?: string;    // 网格容器的宽度（Tailwind 尺寸类）
    h?: string;    // 网格容器的高度（Tailwind 尺寸类）
}

// 定义 GridComponent 类型，包括它的静态子组件
interface GridComponent extends React.FC<GridProps> {
    Item: typeof GridItem;
}

// Grid 组件，负责定义整个网格的布局
const Grid: GridComponent = ({
    children,
    gap = 4,  // 默认间距 4
    cols = 'auto', // 默认值 'auto' 可自动填充列数
    w,
    h,
    className,
    ...props
}) => {
    const widthClass = w ? `w-${w}` : '';
    const heightClass = h ? `h-${h}` : '';
    const gapClass = `gap-${gap}`;
    const gridColsClass = `grid-cols-${cols}`

    return (
        <div
            className={cn(
                'grid grid-flow-row',  // 使用 grid 布局，行流布局
                gridColsClass,
                gapClass,  // 设置网格项之间的间距
                widthClass,
                heightClass,
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

// 导出 Grid 和 GridItem 组件
Grid.Item = GridItem;

export default Grid;
