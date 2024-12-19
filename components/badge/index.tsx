import { cn } from '@/components/__utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    count: number | string;
    variant?: 'success' | 'error' | 'warning' | 'info';
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-white',
    info: 'bg-blue-500 text-white',
};

const Badge: React.FC<BadgeProps> = ({
    count,
    variant = 'info',
    className,
    ...props
}) => {
    return (
        <span
            className={cn(
                'inline-flex items-center justify-center px-2 py-1 text-xs font-bold rounded-full',
                variantClasses[variant],
                className
            )}
            {...props}
        >
            {count}
        </span>
    );
};

export default Badge;
