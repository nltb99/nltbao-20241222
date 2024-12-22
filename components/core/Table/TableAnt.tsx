import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { TABLE_PAGE_LIMIT } from '@/common/constants/constant';

type TableAntProps<T> = {
  rowKey?: string;
  total?: number;
  dataSource: T[];
  columns?: ColumnsType<T>;
  loading?: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  onRow?: any;
};

export const TableAnt = <T extends {}>({
  rowKey,
  total,
  dataSource,
  columns,
  loading,
  page,
  setPage,
  onRow,
}: TableAntProps<T>) => {
  return (
    <div className="">
      <Table
        onRow={onRow}
        columns={columns}
        dataSource={dataSource}
        scroll={{ x: 700, y: 500 }}
        loading={loading}
        pagination={{
          pageSize: TABLE_PAGE_LIMIT,
          defaultCurrent: page,
          total,
          showSizeChanger: false,
          onChange: (nextPage: number) => {
            setPage(nextPage);
          },
        }}
        rowKey={rowKey}
      />
    </div>
  );
};
