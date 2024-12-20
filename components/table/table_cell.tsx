interface TableCellProps {
    cell: any;
}

const TableCell: React.FC<TableCellProps> = ({ cell }) => {
    return (
        <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap">
            {cell.render('Cell')}
        </td>
    );
};

export default TableCell;
