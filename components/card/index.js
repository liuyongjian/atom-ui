import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/components/__utils';
const elevationClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
};
const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
};
const Card = ({ children, elevation = 'md', rounded = 'md', className, ...props }) => {
    return (_jsx("div", { className: cn('bg-white border', elevationClasses[elevation], roundedClasses[rounded], 'border-gray-200', className), ...props, children: children }));
};
export default Card;
