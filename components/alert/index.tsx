import { cn } from '@/components/__utils';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: 'success' | 'error' | 'warning' | 'info';
    message: string;
    onClose?: () => void;
}

const typeClasses: Record<NonNullable<AlertProps['type']>, string> = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
};

const Alert: React.FC<AlertProps> = ({
    type = 'info',
    message,
    onClose,
    className,
    ...props
}) => {
    return (
        <div className={cn('flex items-center p-4 rounded', typeClasses[type], className)} {...props}>
            <span className="flex-1">{message}</span>
            {onClose && (
                <button onClick={onClose} className="ml-4 text-xl font-bold">
                    &times;
                </button>
            )}
        </div>
    );
};

export default Alert;
