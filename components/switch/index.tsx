import { cn } from 'component/__utils';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Switch: React.FC<SwitchProps> = ({ label, className, ...props }) => {
    return (
        <label className={cn('flex items-center space-x-3 cursor-pointer', className)}>
            <span className="relative">
                <input type="checkbox" className="sr-only" {...props} />
                <div className="w-10 h-4 bg-gray-300 rounded-full shadow-inner"></div>
                <div className="absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
            </span>
            {label && <span className="text-gray-700">{label}</span>}
        </label>
    );
};

export default Switch;
