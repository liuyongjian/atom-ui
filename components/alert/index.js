import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/components/__utils';
const typeClasses = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
};
const Alert = ({ type = 'info', message, onClose, className, ...props }) => {
    return (_jsxs("div", { className: cn('flex items-center p-4 rounded', typeClasses[type], className), ...props, children: [_jsx("span", { className: "flex-1", children: message }), onClose && (_jsx("button", { onClick: onClose, className: "ml-4 text-xl font-bold", children: "\u00D7" }))] }));
};
export default Alert;
