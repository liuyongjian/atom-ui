import { cn } from "@/components/__utils";
import { CardHeader } from "./card_header";
import { CardTitle } from "./card_title";
import { CardContent } from "./card_content";
import { CardFooter } from "./card_footer";
import { CardDescription } from "./card_description";

// CardProps 类型定义
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    elevation?: 'none' | 'sm' | 'md' | 'lg';
    rounded?: 'sm' | 'md' | 'lg';
    shadow?: boolean;
    border?: boolean;
    hoverable?: boolean;
    clickable?: boolean;
    gradient?: boolean;
    w?: string | number;  // 支持宽度设置，string 例如 "300px", number 如 1, 2 等
}

// 定义 CardComponent 类型，包括它的静态子组件
interface CardComponent extends React.FC<CardProps> {
    Header: typeof CardHeader;
    Title: typeof CardTitle;
    Content: typeof CardContent;
    Footer: typeof CardFooter;
    Description: typeof CardDescription;
}

// Elevation 和 Rounded 类名的映射
const elevationClasses: Record<CardProps['elevation'], string> = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
};

const roundedClasses: Record<CardProps['rounded'], string> = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
};

// 预定义常见宽度类的映射
const widthClasses: Record<string, string> = {
    full: 'w-full',   // 全宽
    screen: 'w-screen', // 屏幕宽度
    auto: 'w-auto',   // 自动宽度
};

// 处理宽度分数（如 "1/2", "3/4" 等）
const getFractionWidthClass = (fraction: string) => {
    const [numerator, denominator] = fraction.split('/').map(Number);
    return `w-[${(numerator / denominator) * 100}%]`; // 根据分数计算对应的宽度百分比
};

// Card 组件实现
const Card: CardComponent = ({
    children,
    elevation = 'md',
    rounded = 'md',
    shadow = true,
    border = true,
    hoverable = false,
    clickable = false,
    gradient = false,
    w, // 接受宽度属性
    className,
    ...props
}) => {
    // 处理宽度 w，支持字符串和数字
    let widthClass = '';

    if (typeof w === 'string') {
        // 如果是预定义的宽度类，直接从映射中获取
        if (widthClasses[w]) {
            widthClass = widthClasses[w];
        } else if (w.includes('/')) {
            // 如果是分数格式（例如 "1/2"），处理为相应的宽度
            widthClass = getFractionWidthClass(w);
        } else {
            // 处理任意的自定义宽度，如 "300px", "50%" 等
            widthClass = `w-[${w}]`;
        }
    } else if (typeof w === 'number') {
        // 如果是数字类型，将其转为 Tailwind 的类名
        widthClass = `w-${w}`;
    }

    // 组合类名
    const cardClass = cn(
        'bg-white',  // 背景色
        elevationClasses[elevation],  // 阴影
        roundedClasses[rounded],  // 圆角
        border ? 'border border-gray-200' : '',  // 边框
        hoverable ? 'hover:shadow-lg hover:scale-105 transition-transform duration-200' : '', // 可hover效果
        clickable ? 'cursor-pointer' : '',  // 点击样式
        gradient ? 'bg-gradient-to-r from-blue-500 to-purple-500' : '', // 渐变背景
        widthClass,  // 宽度设置
        className // 额外的自定义类名
    );

    return (
        <div className={cardClass} {...props}>
            {children}
        </div>
    );
};

// 为 Card 组件静态属性赋值
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Description = CardDescription;

export default Card;
