import { useState } from 'react';

interface AccordionItemProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItemProps[];
    allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());

    const toggleItem = (id: string) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            if (!allowMultiple) {
                newOpenItems.clear();
            }
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            {items.map((item) => (
                <div key={item.id} className="border-b">
                    <button
                        className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                        onClick={() => toggleItem(item.id)}
                    >
                        <span>{item.title}</span>
                        <span>{openItems.has(item.id) ? '-' : '+'}</span>
                    </button>
                    {openItems.has(item.id) && (
                        <div className="p-4 text-gray-700">
                            {item.children}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
