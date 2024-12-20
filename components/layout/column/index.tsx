import { cn } from '@/components/__utils';

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'center' | 'end' | 'stretch';
    gap?: number;
    className?: string;
    w?: string;  // 支持 Tailwind 的宽度类，如 full, 1/2 等
    h?: string;  // 支持 Tailwind 的高度类，如 full, 1/2 等
    expand?: boolean; // 是否在主轴方向上扩展以占据剩余空间
}

const justifyMap: Record<NonNullable<ColumnProps['justify']>, string> = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
};

const alignMap: Record<NonNullable<ColumnProps['align']>, string> = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
};

const Column: React.FC<ColumnProps> = ({
    children,
    justify = 'start',
    align = 'stretch',
    gap = 4,
    w,  // Tailwind 尺寸类
    h,  // Tailwind 尺寸类
    expand = false,
    className,
    ...props
}) => {
    // 将 w 和 h 转换为完整的 Tailwind 类名
    const widthClass = w ? `w-${w}` : '';  // 例如 'w-full', 'w-1/2'
    const heightClass = h ? `h-${h}` : '';  // 例如 'h-full', 'h-1/2'
    const gapClass = gap ? `gap-${gap}` : 'gap-4';
    const expandClass = expand ? 'flex-grow' : '';

    return (
        <div
            className={cn(
                'flex flex-col',
                justifyMap[justify],
                alignMap[align],
                gapClass,
                widthClass,
                heightClass,
                expandClass,
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Column;
