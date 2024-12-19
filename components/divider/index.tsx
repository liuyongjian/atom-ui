import { cn } from '@/components/__utils';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    variant?: 'solid' | 'dashed' | 'dotted';
}

const orientationClasses: Record<NonNullable<DividerProps['orientation']>, string> = {
    horizontal: 'w-full h-px',
    vertical: 'w-px h-full',
};

const variantClasses: Record<NonNullable<DividerProps['variant']>, string> = {
    solid: 'bg-gray-300',
    dashed: 'border-dashed border-t-2 border-gray-300',
    dotted: 'border-dotted border-t-2 border-gray-300',
};

const Divider: React.FC<DividerProps> = ({
    orientation = 'horizontal',
    variant = 'solid',
    className,
    ...props
}) => {
    return (
        <div
            className={cn(
                'my-4',
                orientationClasses[orientation],
                variant === 'solid' ? variantClasses[variant] : '',
                variant !== 'solid' ? variantClasses[variant] : '',
                className
            )}
            {...props}
        />
    );
};

export default Divider;
