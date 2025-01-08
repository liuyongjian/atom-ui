import { cn } from "@/components/__utils";

interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => (
    <h3 className={cn("font-semibold text-lg", className)}>{children}</h3>
);

export { CardTitle };
