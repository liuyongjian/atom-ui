import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/components/__utils';
const Spacer = ({ grow = 1, shrink = 1, basis = '0%', className, style, ...props }) => {
    const spacerStyle = {
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        ...style,
    };
    return _jsx("div", { className: cn(className), style: spacerStyle, ...props });
};
export default Spacer;
