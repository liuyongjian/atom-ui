import TableFilter from '@/components/table/table_filter';
import Image from '@/components/image';

export const columns = [
  {
    Header: '选择',
    accessor: 'selection',
    disableSortBy: true,
    disableFilters: true,
    Cell: () => null, // 选择列由 TableCell 处理
  },
  {
    Header: '姓名',
    accessor: 'name',
    Filter: TableFilter,
    Cell: ({ value }: { value: string }) => <span className="font-medium">{value}</span>,
  },
  {
    Header: '年龄',
    accessor: 'age',
    Filter: TableFilter,
  },
  {
    Header: '状态',
    accessor: 'status',
    Filter: TableFilter,
    Cell: ({ value }: { value: string }) => (
      <span
        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
      >
        {value}
      </span>
    ),
  },
  {
    Header: '访问次数',
    accessor: 'visits',
    Filter: TableFilter,
  },
  {
    Header: '进度',
    accessor: 'progress',
    Filter: TableFilter,
    Cell: ({ value }: { value: number }) => (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    ),
  },
  {
    Header: '头像',
    accessor: 'avatar',
    disableSortBy: true,
    disableFilters: true,
    Cell: ({ row }: { row: any }) => (
      <Image
        src={`https://i.pravatar.cc/150?u=${row.original.id}`}
        alt={`${row.original.name}的头像`}
        size="xs"
        rounded="full"
        elevation="none"
        className="object-cover"
      />
    ),
  },
];