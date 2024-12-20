import type { Meta, StoryObj } from '@storybook/react';
import Table from '@/components/table';
import { columns } from '@/components/table/stories/columns';
import { sampleData, Person } from '@/components/table/stories/sample_data';

// 定义 Meta
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen', // 可选，根据需要调整
  },
  argTypes: {
    enableSortBy: {
      control: 'boolean',
      description: 'Enable or disable sorting functionality',
      defaultValue: true,
    },
    enableFilters: {
      control: 'boolean',
      description: 'Enable or disable filtering functionality',
      defaultValue: true,
    },
    enablePagination: {
      control: 'boolean',
      description: 'Enable or disable pagination functionality',
      defaultValue: true,
    },
    enableRowSelect: {
      control: 'boolean',
      description: 'Enable or disable row selection functionality',
      defaultValue: true,
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the table container',
      defaultValue: '',
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

// 定义 Story 类型
type Story = StoryObj<typeof meta>;

// 基础表格故事
export const Basic: Story = {
  args: {
    columns,
    data: sampleData,
    getRowId: (row: Person) => row.id,
    enableSortBy: true,
    enableFilters: true,
    enablePagination: true,
    enableRowSelect: true,
    className: 'shadow-md rounded-lg',
  },
  render: (args) => <Table {...args} />,
};

// 仅启用排序
export const Sortable: Story = {
  args: {
    columns,
    data: sampleData,
    getRowId: (row: Person) => row.id,
    enableSortBy: true,
    enableFilters: false,
    enablePagination: false,
    enableRowSelect: false,
    className: 'shadow-md rounded-lg',
  },
  render: (args) => <Table {...args} />,
};

// 仅启用筛选
export const Filterable: Story = {
  args: {
    columns,
    data: sampleData,
    getRowId: (row: Person) => row.id,
    enableSortBy: false,
    enableFilters: true,
    enablePagination: false,
    enableRowSelect: false,
    className: 'shadow-md rounded-lg',
  },
  render: (args) => <Table {...args} />,
};

// 仅启用分页
export const Paginated: Story = {
  args: {
    columns,
    data: sampleData,
    getRowId: (row: Person) => row.id,
    enableSortBy: false,
    enableFilters: false,
    enablePagination: true,
    enableRowSelect: false,
    className: 'shadow-md rounded-lg',
  },
  render: (args) => <Table {...args} />,
};

// 仅启用行选择
export const Selectable: Story = {
  args: {
    columns,
    data: sampleData,
    getRowId: (row: Person) => row.id,
    enableSortBy: false,
    enableFilters: false,
    enablePagination: false,
    enableRowSelect: true,
    className: 'shadow-md rounded-lg',
  },
  render: (args) => <Table {...args} />,
};

// 所有功能启用
export const AllFeatures: Story = {
  args: {
    columns,
    data: sampleData,
    getRowId: (row: Person) => row.id,
    enableSortBy: true,
    enableFilters: true,
    enablePagination: true,
    enableRowSelect: true,
    className: 'shadow-md rounded-lg',
  },
  render: (args) => <Table {...args} />,
};