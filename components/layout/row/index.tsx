import { cn } from '@/components/__utils';

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'center' | 'end' | 'stretch';
    gap?: number;
}

const justifyMap: Record<NonNullable<RowProps['justify']>, string> = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
};

const alignMap: Record<NonNullable<RowProps['align']>, string> = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
};

const gapMap: Record<number, string> = {
    0: 'gap-0',
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    8: 'gap-8',
    10: 'gap-10',
    12: 'gap-12',
    16: 'gap-16',
    20: 'gap-20',
    24: 'gap-24',
    32: 'gap-32',
    40: 'gap-40',
    48: 'gap-48',
    56: 'gap-56',
    64: 'gap-64',
};

const Row: React.FC<RowProps> = ({
    children,
    justify = 'start',
    align = 'stretch',
    gap = 4,
    className,
    ...props
}) => {
    const gapClass = gapMap[gap] || 'gap-4';

    return (
        <div
            className={cn(
                'flex flex-row',
                justifyMap[justify],
                alignMap[align],
                gapClass,
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Row;
