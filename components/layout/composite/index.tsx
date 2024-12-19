import { cn } from '@/components/__utils'

interface CompositeProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType;
}

const Composite: React.FC<CompositeProps> = ({
    children,
    as: Component = 'div',
    className,
    ...props
}) => {
    return (
        <Component className={cn(className)} {...props}>
            {children}
        </Component>
    );
};

export default Composite;
