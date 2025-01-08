import { cn } from "@/components/__utils";

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className }) => (
    <div className={cn("p-4", className)}>
        {children}
    </div>
);

export { CardContent };
