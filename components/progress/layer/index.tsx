type ProgressLayerProps = {
    usedPercent: number; // 已用的百分比 (0-100)
    requestPercent: number; // 请求的百分比 (0-100)
    usage: number; // 已使用量
    request: number; // 请求量
    unit: string; // 单位
    unitType?: string; // 单位类型 (例如: "CPU", "Memory")
    variant?: 'primary' | 'secondary'; // 样式变体
    className?: string; // 容器样式
};

export const ProgressLayer: React.FC<ProgressLayerProps> = ({
    usedPercent,
    requestPercent,
    usage,
    request,
    unit,
    unitType = '',
    variant = 'primary',
    className = '',
}) => {
    // 确保百分比在 0-100 范围内
    const clampedUsedPercent = Math.min(Math.max(usedPercent, 0), 100);
    const clampedRequestPercent = Math.min(Math.max(requestPercent, 0), 100);

    const variantStyles = {
        primary: 'bg-gradient-to-r from-primary-10 to-primary-20',
        secondary: 'bg-gradient-to-r from-secondary-10 to-secondary-20',
    };

    const usedStyles = {
        primary: 'bg-gradient-to-r from-primary-20 to-primary-40',
        secondary: 'bg-gradient-to-r from-secondary-20 to-secondary-40',
    };

    return (
        <div className={`relative h-full rounded ${className}`}>
            {/* 外层进度条：请求资源进度 */}
            <div
                className={`absolute top-0 left-0 h-full rounded ${variantStyles[variant]}`}
                style={{ width: `${clampedRequestPercent}%` }}
            >
                {/* 内层进度条：已使用资源进度 */}
                <div
                    className={`h-full rounded ${usedStyles[variant]}`}
                    style={{ width: `${clampedUsedPercent}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressLayer;
