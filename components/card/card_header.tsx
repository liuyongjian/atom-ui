import { cn } from "@/components/__utils";

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => (
    <div className={cn("p-4 border-b border-gray-200", className)}>
        {children}
    </div>
);

export { CardHeader };
