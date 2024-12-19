import { cn } from '@/components/__utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'small' | 'medium' | 'large';
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    ghost: 'bg-transparent text-blue-500 hover:bg-blue-100',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-md',
    large: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    className,
    ...props
}) => {
    return (
        <button
            className={cn(
                'font-semibold rounded',
                variantClasses[variant],
                sizeClasses[size],
                disabled && 'opacity-50 cursor-not-allowed',
                className
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
