import { cn } from '@/components/__utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: 'default' | 'outlined' | 'filled';
    error?: boolean;
}

const variantClasses: Record<NonNullable<InputProps['variant']>, string> = {
    default: 'border border-gray-300',
    outlined: 'border border-gray-500',
    filled: 'bg-gray-100 border border-gray-300',
};

const Input: React.FC<InputProps> = ({
    variant = 'default',
    error = false,
    className,
    ...props
}) => {
    return (
        <input
            className={cn(
                'px-4 py-2 rounded focus:outline-none focus:ring',
                variantClasses[variant],
                error ? 'border-red-500' : 'focus:ring-blue-500',
                className
            )}
            {...props}
        />
    );
};

export default Input;
