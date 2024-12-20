import { cn } from '@/components/__utils';
import TableCell from '@/components/table/table_cell';

interface TableRowProps {
    row: any;
    prepareRow: (row: any) => void;
}

const TableRow: React.FC<TableRowProps> = ({ row, prepareRow }) => {
    prepareRow(row);
    return (
        <tr
            {...row.getRowProps()}
            className={cn({ 'bg-gray-100': row.isSelected })}
        >
            {row.cells.map((cell: any) => (
                <TableCell key={cell.column.id} cell={cell} />
            ))}
        </tr>
    );
};

export default TableRow;
