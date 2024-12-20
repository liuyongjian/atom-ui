// src/components/Table/TableHeader.tsx
import React from 'react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import Checkbox from '@/components/checkbox';
import TableFilter from '@/components/table/table_filter';

interface TableHeaderProps {
    headerGroups: any[];
    toggleAllRowsSelected: () => void;
    allRowsSelected: boolean;
    isIndeterminate: boolean;
}

const TableHeader: React.FC<TableHeaderProps> = ({
    headerGroups,
    toggleAllRowsSelected,
    allRowsSelected,
    isIndeterminate,
}) => {
    return (
        <thead className="bg-gray-50">
            {headerGroups.map((headerGroup) => {
                const headerGroupProps = headerGroup.getHeaderGroupProps ? headerGroup.getHeaderGroupProps() : {};
                return (
                    <tr {...headerGroupProps} key={headerGroupProps.key}>
                        {headerGroup.headers.map((column) => {
                            const headerProps = column.getHeaderProps ? column.getHeaderProps() : {};
                            return (
                                <th
                                    {...headerProps}
                                    key={headerProps.key}
                                    className={headerProps.className}
                                >
                                    {column.accessor === 'selection' ? (
                                        <div className="flex items-center">
                                            <Checkbox
                                                checked={allRowsSelected}
                                                onChange={toggleAllRowsSelected}
                                                indeterminate={isIndeterminate}
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            className={`flex items-center cursor-pointer select-none ${!column.disableSortBy ? 'hover:bg-gray-100 rounded' : ''
                                                }`}
                                            onClick={column.getSortByToggleProps?.onClick}
                                        >
                                            {column.Header}
                                            {!column.disableSortBy && (
                                                <span className="ml-2">
                                                    {column.isSorted ? (
                                                        column.isSortedDesc ? (
                                                            <FaSortDown />
                                                        ) : (
                                                            <FaSortUp />
                                                        )
                                                    ) : (
                                                        <FaSort />
                                                    )}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                    {/* 添加筛选器 */}
                                    {column.canFilter && column.accessor !== 'selection' && column.Filter && (
                                        <div className="mt-1">
                                            <TableFilter column={column} />
                                        </div>
                                    )}
                                </th>
                            );
                        })}
                    </tr>
                );
            })}
        </thead>
    );
};

export default TableHeader;