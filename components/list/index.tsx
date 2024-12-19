import { cn } from '@/components/__utils';

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
    items: string[];
    renderItem?: (item: string, index: number) => React.ReactNode;
}

const List: React.FC<ListProps> = ({ items, renderItem, className, ...props }) => {
    return (
        <ul className={cn('space-y-2', className)} {...props}>
            {items.map((item, index) => (
                <li key={index} className="p-4 bg-white rounded shadow-sm">
                    {renderItem ? renderItem(item, index) : item}
                </li>
            ))}
        </ul>
    );
};

export default List;
