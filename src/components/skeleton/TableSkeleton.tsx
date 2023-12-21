/* eslint-disable @typescript-eslint/no-explicit-any */
import { Skeleton, Table } from 'antd';

import './Skeleton.scss';

interface ITableSkeleton {
  columns: Array<any>;
  skeletonRowTotal?: number;
}

const TableSkeleton = ({ columns, skeletonRowTotal = 3 }: ITableSkeleton) => {
  return (
    <div className="TableSkeleton">
      <Table
        pagination={false}
        dataSource={[...Array(skeletonRowTotal)].map((_, index) => ({
          key: `key${index}`,
        }))}
        columns={columns.map((column) => {
          return {
            ...column,
            render: () => {
              return <Skeleton.Input className="TableSkeleton__loading" active key={column.dataIndex} />;
            },
          };
        })}
      />
    </div>
  );
};

export default TableSkeleton;
