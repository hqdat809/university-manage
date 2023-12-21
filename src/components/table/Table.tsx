/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table as TableAnt } from 'antd';
import { GetRowKey } from 'antd/lib/table/interface';
import { TableSkeleton } from '../skeleton';

import './Table.scss';

interface ITableProps {
  data: Array<any>;
  columns: any;
  loading?: boolean;
  skeletonRowTotal?: number;
  rowKey?: string | GetRowKey<any> | undefined;
  rowClassName?: (record: any, index: any) => string;
}

export const Table = ({ columns, data, skeletonRowTotal, loading, rowKey, rowClassName }: ITableProps) => {
  return loading ? (
    <TableSkeleton columns={columns} skeletonRowTotal={skeletonRowTotal} />
  ) : (
    <TableAnt
      rowKey={rowKey}
      className="Table"
      columns={columns}
      dataSource={data}
      pagination={false}
      rowClassName={rowClassName}
    />
  );
};
