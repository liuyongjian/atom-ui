import { cn } from "@/components/__utils";

interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => (
    <div className={cn("p-4 border-t border-gray-200", className)}>
        {children}
    </div>
);

export { CardFooter };
