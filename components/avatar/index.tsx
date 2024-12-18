import { cn } from 'component/__utils';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    size?: 'sm' | 'md' | 'lg';
    status?: 'online' | 'offline' | 'busy' | 'away';
}

const sizeClasses: Record<NonNullable<AvatarProps['size']>, string> = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
};

const statusColors: Record<NonNullable<AvatarProps['status']>, string> = {
    online: 'bg-green-500',
    offline: 'bg-gray-500',
    busy: 'bg-red-500',
    away: 'bg-yellow-500',
};

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = 'Avatar',
    size = 'md',
    status,
    className,
    ...props
}) => {
    return (
        <div className="relative">
            <img
                src={src}
                alt={alt}
                className={cn(
                    'rounded-full object-cover',
                    sizeClasses[size],
                    className
                )}
                {...props}
            />
            {status && (
                <span
                    className={cn(
                        'absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-white',
                        statusColors[status]
                    )}
                ></span>
            )}
        </div>
    );
};

export default Avatar;
