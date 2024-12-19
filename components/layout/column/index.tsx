import { cn } from '@/components/__utils'

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'center' | 'end' | 'stretch';
    gap?: number;
}

const justifyMap = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
};

const alignMap = {
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
    className,
    ...props
}) => {
    return (
        <div
            className={cn(
                'flex flex-col',
                justifyMap[justify],
                alignMap[align],
                `gap-${gap}`,
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Column;
