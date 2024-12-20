interface TableFilterProps {
    column: {
        filterValue?: string;
        setFilter?: (value: string) => void;
        Header: string | React.ReactNode;
    };
}

const TableFilter: React.FC<TableFilterProps> = ({ column }) => {
    if (!column || typeof column.setFilter !== 'function') {
        return null;
    }

    return (
        <input
            value={column.filterValue || ''}
            onChange={e => column.setFilter?.(e.target.value)}
            placeholder={`搜索 ${typeof column.Header === 'string' ? column.Header : '...'}`}
            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
    );
};

export default TableFilter;
