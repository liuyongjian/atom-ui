import { useState, useMemo } from 'react';

interface Filter {
    id: string;
    value: string;
}

interface UseFilterProps {
    initialFilters?: Filter[];
}

interface UseFilterReturn {
    filters: Filter[];
    setFilter: (id: string, value: string) => void;
    filteredData: any[];
}

const useFilter = (data: any[], initialFilters: Filter[] = []): UseFilterReturn => {
    const [filters, setFiltersState] = useState<Filter[]>(initialFilters);

    const setFilter = (id: string, value: string) => {
        setFiltersState(prev => {
            const existingFilter = prev.find(filter => filter.id === id);
            if (existingFilter) {
                return prev.map(filter =>
                    filter.id === id ? { ...filter, value } : filter
                );
            } else {
                return [...prev, { id, value }];
            }
        });
    };

    const filteredData = useMemo(() => {
        if (filters.length === 0) return data;

        return data.filter(row =>
            filters.every(filter => {
                const rowValue = row[filter.id];
                if (rowValue === undefined || rowValue === null) return false;
                return rowValue.toString().toLowerCase().includes(filter.value.toLowerCase());
            })
        );
    }, [data, filters]);

    return { filters, setFilter, filteredData };
};

export default useFilter;
