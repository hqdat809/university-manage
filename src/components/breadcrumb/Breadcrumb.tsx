import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb as BreadcrumbAnt } from 'antd';

import { TBreadcrumbItem } from 'interfaces/common-interfaces';
import './Breadcrumb.scss';

interface IProps {
  items: TBreadcrumbItem;
  className?: string;
}

const Breadcrumb = ({ items, className }: IProps) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((path) => path);
  const breadCrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const breadcrumbItemClassName = `Breadcrumb__item ${items[url]?.icon ? 'hasIcon' : ''}`;
    return (
      <div className={className} key={index}>
        {items[url]?.label && (
          <BreadcrumbAnt.Item key={url} className={breadcrumbItemClassName}>
            {items[url]?.icon}
            <Link to={url}>{items[url]?.label}</Link>
          </BreadcrumbAnt.Item>
        )}
      </div>
    );
  });

  return <BreadcrumbAnt className="Breadcrumb">{breadCrumbItems}</BreadcrumbAnt>;
};

export default Breadcrumb;
