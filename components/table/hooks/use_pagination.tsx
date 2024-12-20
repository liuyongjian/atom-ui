import { useState, useMemo } from 'react';

interface UsePaginationProps {
    data: any[];
    initialPageSize?: number;
}

interface UsePaginationReturn {
    pageIndex: number;
    pageSize: number;
    pageCount: number;
    canPreviousPage: boolean;
    canNextPage: boolean;
    pageOptions: number[];
    currentPageData: any[];
    gotoPage: (pageIndex: number) => void;
    nextPage: () => void;
    previousPage: () => void;
    setPageSize: (size: number) => void;
}

const usePagination = (data: any[], initialPageSize: number = 10): UsePaginationReturn => {
    const [pageIndex, setPageIndex] = useState<number>(0);
    const [pageSize, setPageSizeState] = useState<number>(initialPageSize);

    const pageCount = useMemo(() => {
        return Math.ceil(data.length / pageSize);
    }, [data.length, pageSize]);

    const canPreviousPage = pageIndex > 0;
    const canNextPage = pageIndex < pageCount - 1;

    const pageOptions = useMemo(() => {
        return Array.from({ length: pageCount }, (_, i) => i);
    }, [pageCount]);

    const currentPageData = useMemo(() => {
        const start = pageIndex * pageSize;
        const end = start + pageSize;
        return data.slice(start, end);
    }, [data, pageIndex, pageSize]);

    const gotoPage = (index: number) => {
        const newIndex = Math.min(Math.max(index, 0), pageCount - 1);
        setPageIndex(newIndex);
    };

    const nextPage = () => {
        gotoPage(pageIndex + 1);
    };

    const previousPage = () => {
        gotoPage(pageIndex - 1);
    };

    const setPageSize = (size: number) => {
        setPageSizeState(size);
        setPageIndex(0); // 重置到第一页
    };

    return {
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
    };
};

export default usePagination;
