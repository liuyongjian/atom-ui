import { cn } from "@/components/__utils";

interface CardDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children, className }) => (
    <p className={cn("text-sm text-gray-500", className)}>{children}</p>
);

export { CardDescription };
