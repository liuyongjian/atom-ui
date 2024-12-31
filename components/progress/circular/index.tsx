type ProgressCircularProps = {
    percentage: number; // 进度百分比，0-100
    size?: number; // 圆形进度条的尺寸（像素）
    strokeWidth?: number; // 圆形进度条的宽度（像素）
    variant?: 'primary' | 'secondary'; // 样式变体
    className?: string; // 自定义容器类名
};

const ProgressCircular: React.FC<ProgressCircularProps> = ({
    percentage,
    size = 24,
    strokeWidth = 3,
    variant = 'primary',
    className = '',
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    const variantClasses: Record<string, string> = {
        primary: 'text-blue-500',
        secondary: 'text-green-500',
    };

    return (
        <div className={`flex items-center ${className}`}>
            <svg width={size} height={size} className="mr-2">
                <circle
                    className="text-gray-300"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    className={`${variantClasses[variant] || 'text-gray-500'}`}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    style={{ transition: 'stroke-dashoffset 0.3s' }}
                />
            </svg>
            <span className="text-xs text-gray-700">{percentage}%</span>
        </div>
    );
};

export default ProgressCircular;