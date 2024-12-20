import { useState, useMemo } from 'react';

interface SortBy {
    id: string;
    desc: boolean;
}

interface UseSortProps {
    initialSortBy?: SortBy[];
}

interface UseSortReturn {
    sortBy: SortBy[];
    toggleSortBy: (id: string) => void;
    sortedData: any[];
}

const useSort = (data: any[], initialSortBy: SortBy[] = []): UseSortReturn => {
    const [sortBy, setSortBy] = useState<SortBy[]>(initialSortBy);

    const toggleSortBy = (id: string) => {
        setSortBy(prev => {
            const existingSort = prev.find(sort => sort.id === id);
            if (existingSort) {
                // Toggle sort direction
                return prev.map(sort =>
                    sort.id === id ? { ...sort, desc: !sort.desc } : sort
                );
            } else {
                // Add new sort
                return [...prev, { id, desc: false }];
            }
        });
    };

    const sortedData = useMemo(() => {
        if (sortBy.length === 0) return data;

        return [...data].sort((a, b) => {
            for (let sort of sortBy) {
                const { id, desc } = sort;
                if (a[id] < b[id]) return desc ? 1 : -1;
                if (a[id] > b[id]) return desc ? -1 : 1;
            }
            return 0;
        });
    }, [data, sortBy]);

    return { sortBy, toggleSortBy, sortedData };
};

export default useSort;
