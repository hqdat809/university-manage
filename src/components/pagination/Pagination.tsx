import { Pagination as PaginationAnt, PaginationProps } from 'antd';
import { DEFAULT_PAGE_SIZE } from 'variables';
import { PrevPaginationIcon, NextPaginationIcon } from 'assets/icons';
import './Pagination.scss';

interface IProps extends PaginationProps {
  className?: string;
  defaultPageSize?: number;
}

const Pagination = ({ className, defaultPageSize, ...rest }: IProps) => {
  return (
    <PaginationAnt
      className={`Pagination ${className}`}
      nextIcon={<NextPaginationIcon />}
      prevIcon={<PrevPaginationIcon />}
      defaultPageSize={defaultPageSize || DEFAULT_PAGE_SIZE}
      responsive={true}
      {...rest}
    />
  );
};

export default Pagination;
