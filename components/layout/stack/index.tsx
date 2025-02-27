import { cn } from '@/components/__utils';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    alignment?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
}

const alignmentMap = {
    'top-left': 'items-start justify-start',
    'top-right': 'items-start justify-end',
    'bottom-left': 'items-end justify-start',
    'bottom-right': 'items-end justify-end',
    center: 'items-center justify-center',
};

const Stack: React.FC<StackProps> = ({
    children,
    alignment = 'center',
    className,
    ...props
}) => {
    return (
        <div
            className={cn(
                'relative flex',
                alignmentMap[alignment],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Stack;
