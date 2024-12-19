import { cn } from '@/components/__utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    elevation?: 'none' | 'sm' | 'md' | 'lg';
    rounded?: 'sm' | 'md' | 'lg';
}

const elevationClasses: Record<NonNullable<CardProps['elevation']>, string> = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
};

const roundedClasses: Record<NonNullable<CardProps['rounded']>, string> = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
};

const Card: React.FC<CardProps> = ({
    children,
    elevation = 'md',
    rounded = 'md',
    className,
    ...props
}) => {
    return (
        <div
            className={cn(
                'bg-white border',
                elevationClasses[elevation],
                roundedClasses[rounded],
                'border-gray-200',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
