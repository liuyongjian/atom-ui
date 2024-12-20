import { useState, useEffect } from 'react';
import { cn } from '@/components/__utils';

// 简单的图片缓存机制
const imageCache = new Set<string>();

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    elevation?: 'none' | 'sm' | 'md' | 'lg';
    border?: boolean;
    borderColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | string;
    cache?: boolean; // 是否启用缓存功能
    placeholderSrc?: string; // 占位图
}

const sizeClasses: Record<NonNullable<ImageProps['size']>, string> = {
    xs: 'w-16 h-16',
    sm: 'w-24 h-24',
    base: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64',
};

const roundedClasses: Record<NonNullable<ImageProps['rounded']>, string> = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
};

const elevationClasses: Record<NonNullable<ImageProps['elevation']>, string> = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
};

const borderColorClasses: Record<NonNullable<ImageProps['borderColor']>, string> = {
    primary: 'border-blue-500',
    secondary: 'border-gray-500',
    success: 'border-green-500',
    danger: 'border-red-500',
    warning: 'border-yellow-500',
    info: 'border-teal-500',
    light: 'border-gray-200',
    dark: 'border-gray-800',
};

const Image: React.FC<ImageProps> = ({
    src,
    alt = '',
    size = 'base',
    rounded = 'md',
    elevation = 'none',
    border = false,
    borderColor = 'gray-200',
    cache = false,
    placeholderSrc = 'https://via.placeholder.com/150?text=Loading...',
    className,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(!cache || imageCache.has(src || ''));
    const [currentSrc, setCurrentSrc] = useState<string>(!cache || imageCache.has(src || '') ? src || '' : placeholderSrc);

    useEffect(() => {
        if (!src) return;

        if (cache) {
            if (imageCache.has(src)) {
                setIsLoaded(true);
                setCurrentSrc(src);
                return;
            }

            const img = new window.Image();
            img.src = src;
            img.onload = () => {
                imageCache.add(src);
                setIsLoaded(true);
                setCurrentSrc(src);
            };
            img.onerror = () => {
                setIsLoaded(false);
                setCurrentSrc(placeholderSrc);
            };
        } else {
            // 如果不使用缓存，直接加载图片
            setIsLoaded(false);
            setCurrentSrc(placeholderSrc);

            const img = new window.Image();
            img.src = src;
            img.onload = () => {
                setIsLoaded(true);
                setCurrentSrc(src);
            };
            img.onerror = () => {
                setIsLoaded(false);
                setCurrentSrc(placeholderSrc);
            };
        }
    }, [src, cache, placeholderSrc]);

    return (
        <img
            src={currentSrc}
            alt={alt}
            className={cn(
                sizeClasses[size],
                roundedClasses[rounded],
                elevationClasses[elevation],
                {
                    'border': border,
                    [`${borderColorClasses[borderColor] || borderColor}`]: border,
                    'transition-opacity duration-500': true,
                    'opacity-100': isLoaded,
                    'opacity-50': !isLoaded,
                },
                className
            )}
            {...props}
        />
    );
};

export default Image;
