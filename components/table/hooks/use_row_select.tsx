import { useState, useMemo } from 'react';

interface UseRowSelectProps<T extends object> {
    data: T[];
    getRowId: (row: T) => string;
}

interface UseRowSelectReturn<T extends object> {
    selectedRowIds: Record<string, boolean>;
    toggleRowSelected: (id: string) => void;
    toggleAllRowsSelected: () => void;
    selectedFlatRows: T[];
}

const useRowSelect = <T extends object>({
    data,
    getRowId,
}: UseRowSelectProps<T>): UseRowSelectReturn<T> => {
    const [selectedRowIds, setSelectedRowIds] = useState<Record<string, boolean>>({});

    const toggleRowSelected = (id: string) => {
        setSelectedRowIds(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const toggleAllRowsSelected = () => {
        const allSelected = data.length > 0 && data.every(row => selectedRowIds[getRowId(row)]);
        if (allSelected) {
            setSelectedRowIds({});
        } else {
            const newSelected: Record<string, boolean> = {};
            data.forEach(row => {
                newSelected[getRowId(row)] = true;
            });
            setSelectedRowIds(newSelected);
        }
    };

    const selectedFlatRows = useMemo(() => {
        return data.filter(row => selectedRowIds[getRowId(row)]);
    }, [data, selectedRowIds, getRowId]);

    return {
        selectedRowIds,
        toggleRowSelected,
        toggleAllRowsSelected,
        selectedFlatRows,
    };
};

export default useRowSelect;
