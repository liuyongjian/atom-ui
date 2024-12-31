import { cn } from '@/components/__utils';

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    progress: number; // 0 to 100
    variant?: 'primary' | 'secondary';
}

const variantClasses: Record<NonNullable<ProgressBarProps['variant']>, string> = {
    primary: 'bg-blue-500',
    secondary: 'bg-green-500',
};

const ProgressBar: React.FC<ProgressBarProps> = ({
    progress,
    variant = 'primary',
    className,
    ...props
}) => {
    const clampedProgress = Math.min(Math.max(progress, 0), 100);

    return (
        <div className={cn('w-full bg-gray-300 rounded-full h-4', className)} {...props}>
            <div
                className={cn('h-full rounded-full transition-all duration-300', variantClasses[variant])}
                style={{ width: `${clampedProgress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
