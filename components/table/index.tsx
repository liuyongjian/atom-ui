import { useMemo } from 'react';
import TableHeader from '@/components/table/table_header';
import TableBody from '@/components/table/table_body';
import TablePagination from '@/components/table/table_pagination';
import { useTable } from '@/components/table/hooks/use_table';
import { cn } from '@/components/__utils';

interface TableProps<T extends object> {
    columns: any[];
    data: T[];
    className?: string;
    getRowId: (row: T) => string;
    enableSortBy?: boolean;
    enableFilters?: boolean;
    enablePagination?: boolean;
    enableRowSelect?: boolean;
}

const Table = <T extends object>({
    columns,
    data,
    className,
    getRowId,
    enableSortBy = true,
    enableFilters = true,
    enablePagination = true,
    enableRowSelect = true,
}: TableProps<T>) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, selectedRowIds },
        toggleRowSelected,
        toggleAllRowsSelected,
        selectedFlatRows,
    } = useTable({
        columns,
        data,
        getRowId,
        enableSortBy,
        enableFilters,
        enablePagination,
        enableRowSelect,
    });

    const allRowsSelected = useMemo(() => {
        const totalRows = page.length;
        const selectedRows = Object.keys(selectedRowIds).length;
        return totalRows > 0 && selectedRows === totalRows;
    }, [selectedRowIds, page]);

    const isIndeterminate = useMemo(() => {
        const selectedCount = Object.keys(selectedRowIds).length;
        const totalRows = page.length;
        return selectedCount > 0 && selectedCount < totalRows;
    }, [selectedRowIds, page]);

    const toggleAll = () => {
        toggleAllRowsSelected();
    };

    return (
        <div className={cn('overflow-x-auto w-full', className)}>
            <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                <TableHeader
                    headerGroups={headerGroups}
                    toggleAllRowsSelected={toggleAll}
                    allRowsSelected={allRowsSelected}
                    isIndeterminate={isIndeterminate}
                />
                <TableBody
                    rows={page}
                    prepareRow={prepareRow}
                    getTableBodyProps={getTableBodyProps}
                    getRowId={getRowId}
                />
            </table>
            {enablePagination && (
                <TablePagination
                    canPreviousPage={canPreviousPage}
                    canNextPage={canNextPage}
                    pageOptions={pageOptions}
                    pageCount={pageCount}
                    gotoPage={gotoPage}
                    nextPage={nextPage}
                    previousPage={previousPage}
                    setPageSize={setPageSize}
                    pageIndex={pageIndex}
                    pageSize={pageSize}
                />
            )}
        </div>
    );
};

export default Table;