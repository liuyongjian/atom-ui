import { useMemo, useCallback } from 'react';
import useSort from '@/components/table/hooks/use_sort';
import useFilter from '@/components/table/hooks/use_filter';
import usePagination from '@/components/table/hooks/use_pagination';
import useRowSelect from '@/components/table/hooks/use_row_select';

// 定义接口
interface UseTableProps<T extends object> {
    columns: Column[];
    data: T[];
    getRowId: (row: T) => string;
    enableSortBy?: boolean;
    enableFilters?: boolean;
    enablePagination?: boolean;
    enableRowSelect?: boolean;
}

interface UseTableReturn<T extends object> {
    getTableProps: () => any;
    getTableBodyProps: () => any;
    headerGroups: HeaderGroup[];
    rows: Row[];
    prepareRow: (row: Row) => void;
    page: Row[];
    canPreviousPage: boolean;
    canNextPage: boolean;
    pageOptions: number[];
    pageCount: number;
    gotoPage: (pageIndex: number) => void;
    nextPage: () => void;
    previousPage: () => void;
    setPageSize: (size: number) => void;
    state: {
        pageIndex: number;
        pageSize: number;
        sortBy: SortBy[];
        filters: Filter[];
        selectedRowIds: Record<string, boolean>;
    };
    toggleRowSelected: (id: string) => void;
    toggleAllRowsSelected: () => void;
    selectedFlatRows: T[];
}

interface HeaderGroup {
    headers: Column[];
    getHeaderGroupProps: () => any;
}

interface Column {
    Header: string | React.ReactNode;
    accessor: string;
    disableSortBy?: boolean;
    disableFilters?: boolean;
    canFilter?: boolean;
    getSortByToggleProps?: () => { onClick: () => void };
    isSorted?: boolean;
    isSortedDesc?: boolean;
    Filter?: React.ComponentType<any>;
    getHeaderProps?: () => any;
}

interface Row {
    original: any;
    isSelected: boolean;
    toggleRowSelected: () => void;
    cells: Cell[];
    getRowProps?: () => any; // 将在 prepareRow 中添加
}

interface Cell {
    column: Column;
    render: () => React.ReactNode;
    getCellProps: () => any;
}

interface SortBy {
    id: string;
    desc: boolean;
}

interface Filter {
    id: string;
    value: string;
}

const useTable = <T extends object>({
    columns,
    data,
    getRowId,
    enableSortBy = true,
    enableFilters = true,
    enablePagination = true,
    enableRowSelect = true,
}: UseTableProps<T>): UseTableReturn<T> => {
    // 筛选
    const { filters, setFilter, filteredData } = enableFilters
        ? useFilter(data)
        : { filters: [], setFilter: () => { }, filteredData: data };

    // 排序
    const { sortBy, toggleSortBy, sortedData } = enableSortBy
        ? useSort(filteredData)
        : { sortBy: [], toggleSortBy: () => { }, sortedData: filteredData };

    // 分页
    const {
        pageIndex,
        pageSize,
        pageCount,
        canPreviousPage,
        canNextPage,
        pageOptions,
        currentPageData,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
    } = enablePagination
            ? usePagination(sortedData)
            : {
                pageIndex: 0,
                pageSize: sortedData.length,
                pageCount: 1,
                canPreviousPage: false,
                canNextPage: false,
                pageOptions: [0],
                currentPageData: sortedData,
                gotoPage: () => { },
                nextPage: () => { },
                previousPage: () => { },
                setPageSize: () => { },
            };

    // 行选择
    const {
        selectedRowIds,
        toggleRowSelected,
        toggleAllRowsSelected,
        selectedFlatRows,
    } = enableRowSelect
            ? useRowSelect({
                data: sortedData,
                getRowId,
            })
            : {
                selectedRowIds: {},
                toggleRowSelected: () => { },
                toggleAllRowsSelected: () => { },
                selectedFlatRows: [],
            };

    // 定义 getHeaderGroupProps
    const getHeaderGroupProps = useCallback(() => ({
        key: 'header-group',
        // 可以根据需要添加更多的 props
    }), []);

    // 定义 getHeaderProps
    const getHeaderProps = useCallback((column: Column) => ({
        key: column.accessor,
        className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
        // 可以根据需要添加更多的 props
    }), []);

    // 构建 headerGroups
    const headerGroups = useMemo(() => {
        return [
            {
                headers: columns.map((column: any) => ({
                    ...column,
                    canFilter: !!column.Filter && enableFilters,
                    filterValue: enableFilters ? (filters.find(f => f.id === column.accessor)?.value || '') : undefined,
                    setFilter: enableFilters ? (value: string) => setFilter(column.accessor, value) : undefined,
                    getHeaderProps: () => getHeaderProps(column),
                })),
                getHeaderGroupProps: getHeaderGroupProps,
            },
        ];
    }, [columns, enableFilters, filters, setFilter, getHeaderProps, getHeaderGroupProps]);

    // 构建 rows
    const rows = useMemo(() => {
        return currentPageData.map((rowData, i) => {
            const row: Row = {
                original: rowData,
                isSelected: selectedRowIds[getRowId(rowData)],
                toggleRowSelected: () => toggleRowSelected(getRowId(rowData)),
                cells: columns.map((column: any) => ({
                    column,
                    render: () => {
                        if (column.accessor === 'selection') {
                            return null; // 选择列由 TableCell 处理
                        }
                        if (column.Cell) {
                            return column.Cell({ value: rowData[column.accessor], row });
                        }
                        return rowData[column.accessor];
                    },
                    getCellProps: () => ({
                        key: `${getRowId(rowData)}-${column.accessor}`,
                        // 可以根据需要添加更多的 props
                    }),
                })),
                // getRowProps 将在 prepareRow 中添加
            };
            return row;
        });
    }, [currentPageData, columns, selectedRowIds, toggleRowSelected, getRowId]);

    // 实现 prepareRow 来为 row 添加 getRowProps 方法
    const prepareRow = useCallback((row: Row) => {
        row.getRowProps = () => ({
            key: getRowId(row.original),
            // 可以根据需要添加更多的 props
        });
    }, [getRowId]);

    // 处理排序属性
    headerGroups.forEach((headerGroup) => {
        headerGroup.headers.forEach((column: any) => {
            if (enableSortBy && !column.disableSortBy) {
                column.getSortByToggleProps = () => ({
                    onClick: () => toggleSortBy(column.accessor),
                });
            }
        });
    });

    // 处理 headerGroups 中每个 header 的排序切换属性
    const processedHeaderGroups = useMemo(() => {
        return headerGroups.map((headerGroup) => ({
            ...headerGroup,
            headers: headerGroup.headers.map((column: any) => ({
                ...column,
                getSortByToggleProps: column.getSortByToggleProps,
                isSorted: column.isSorted,
                isSortedDesc: column.isSortedDesc,
            })),
        }));
    }, [headerGroups]);

    // 调试日志
    console.log('Processed Header Groups:', processedHeaderGroups);
    console.log('Rows:', rows);

    return {
        getTableProps: () => ({
            // 可以根据需要添加表格的 props
        }),
        getTableBodyProps: () => ({
            // 可以根据需要添加 tbody 的 props
        }),
        headerGroups: processedHeaderGroups,
        rows,
        prepareRow,
        page: rows,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, sortBy, filters, selectedRowIds },
        toggleRowSelected,
        toggleAllRowsSelected,
        selectedFlatRows,
    };
};

export { useTable };