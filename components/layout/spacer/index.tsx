import { cn } from '@/components/__utils';

interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * 定义 Spacer 的 flex-grow 属性。
     * 默认值为 1，表示占据尽可能多的空间。
     */
    grow?: number;

    /**
     * 定义 Spacer 的 flex-shrink 属性。
     * 默认值为 1。
     */
    shrink?: number;

    /**
     * 定义 Spacer 的 flex-basis 属性。
     * 默认为 '0%'，表示初始大小为 0。
     */
    basis?: string;
}

const Spacer: React.FC<SpacerProps> = ({
    grow = 1,
    shrink = 1,
    basis = '0%',
    className,
    style,
    ...props
}) => {
    const spacerStyle: React.CSSProperties = {
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        ...style,
    };

    return <div className={cn(className)} style={spacerStyle} {...props} />;
};

export default Spacer;
