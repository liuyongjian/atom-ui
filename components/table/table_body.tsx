import TableRow from '@/components/table/table_row';

interface TableBodyProps {
    rows: any[];
    prepareRow: (row: any) => void;
    getTableBodyProps: () => any;
    getRowId: (row: any) => string; // 添加 getRowId
}

const TableBody: React.FC<TableBodyProps> = ({
    rows,
    prepareRow,
    getTableBodyProps,
    getRowId,
}) => {
    return (
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
            {rows.map((row, rowIndex) => {
                prepareRow(row);
                return <TableRow key={getRowId(row.original)} row={row} prepareRow={prepareRow} />;
            })}
        </tbody>
    );
};

export default TableBody;