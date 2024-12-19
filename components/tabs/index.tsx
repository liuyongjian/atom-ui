import { useState } from 'react';
import { cn } from '@/components/__utils';

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    tabs: Tab[];
    defaultActiveId?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveId }) => {
    const [activeId, setActiveId] = useState<string>(defaultActiveId || tabs[0].id);

    const activeTab = tabs.find(tab => tab.id === activeId);

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="flex border-b">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={cn(
                            'py-2 px-4 -mb-px font-semibold text-gray-600 border-b-2',
                            activeId === tab.id ? 'border-blue-500 text-blue-500' : 'border-transparent hover:text-blue-500',
                        )}
                        onClick={() => setActiveId(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-4">
                {activeTab && activeTab.content}
            </div>
        </div>
    );
};

export default Tabs;
