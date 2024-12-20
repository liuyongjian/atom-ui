import { cn } from '@/components/__utils';

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
    weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | string;
    italic?: boolean;
    underline?: boolean;
    lineThrough?: boolean;
}

const sizeClasses: Record<NonNullable<TextProps['size']>, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
};

const weightClasses: Record<NonNullable<TextProps['weight']>, string> = {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
};

const colorClasses: Record<NonNullable<TextProps['color']>, string> = {
    primary: 'text-blue-500',
    secondary: 'text-gray-500',
    success: 'text-green-500',
    danger: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-teal-500',
    light: 'text-gray-200',
    dark: 'text-gray-800',
};

const Text: React.FC<TextProps> = ({
    children,
    size = 'base',
    weight = 'normal',
    color = 'dark',
    italic = false,
    underline = false,
    lineThrough = false,
    className,
    ...props
}) => {
    return (
        <div
            className={cn(
                sizeClasses[size],
                weightClasses[weight],
                colorClasses[color] || color, // Allow custom color classes or raw color values
                {
                    'italic': italic,
                    'underline': underline,
                    'line-through': lineThrough,
                },
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Text;
