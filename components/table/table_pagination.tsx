interface TablePaginationProps {
    canPreviousPage: boolean;
    canNextPage: boolean;
    pageOptions: number[];
    pageCount: number;
    gotoPage: (pageIndex: number) => void;
    nextPage: () => void;
    previousPage: () => void;
    setPageSize: (size: number) => void;
    pageIndex: number;
    pageSize: number;
}

const TablePagination: React.FC<TablePaginationProps> = ({
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    pageIndex,
    pageSize,
}) => {
    return (
        <div className="py-3 flex items-center justify-between">
            <div className="flex-1 flex justify-between sm:hidden">
                <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    上一页
                </button>
                <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    下一页
                </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <span className="text-sm text-gray-700">
                        第 <span className="font-medium">{pageIndex + 1}</span> 页，共{' '}
                        <span className="font-medium">{pageOptions.length}</span> 页
                    </span>
                </div>
                <div>
                    <nav
                        className="relative z-0 inline-flex shadow-sm -space-x-px"
                        aria-label="Pagination"
                    >
                        <button
                            onClick={() => gotoPage(0)}
                            disabled={!canPreviousPage}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            首页
                        </button>
                        <button
                            onClick={() => previousPage()}
                            disabled={!canPreviousPage}
                            className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            上一页
                        </button>
                        <button
                            onClick={() => nextPage()}
                            disabled={!canNextPage}
                            className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            下一页
                        </button>
                        <button
                            onClick={() => gotoPage(pageCount - 1)}
                            disabled={!canNextPage}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            尾页
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default TablePagination;
