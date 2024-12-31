type ProgressBlockProps = {
    count: number; // 总块数
    filledCount: number; // 填充块数
    variant?: 'primary' | 'secondary'; // 样式变体
    className?: string; // 自定义类名
};

const variantClasses: Record<NonNullable<ProgressBlockProps['variant']>, string> = {
    primary: 'bg-blue-500',
    secondary: 'bg-green-500',
};

const ProgressBlock: React.FC<ProgressBlockProps> = ({
    count,
    filledCount,
    variant = 'primary',
    className,
}) => {
    const clampedFilledCount = Math.min(Math.max(filledCount, 0), count);

    return (
        <div className={`flex flex-wrap ${className}`}>
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className={`w-3 h-5 mr-1 mb-1 rounded ${index < clampedFilledCount ? variantClasses[variant] : 'bg-gray-300'
                        }`}
                ></div>
            ))}
        </div>
    );
};

export default ProgressBlock;
