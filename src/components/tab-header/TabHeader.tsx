import { LeftOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { useNavigate } from 'react-router-dom';

import './TabHeader.scss';

interface ITabHeader {
  breadcrumbs: {
    name: string;
    route: string;
  }[];
  title: string;
}

const TabHeader = (props: ITabHeader) => {
  const { breadcrumbs, title } = props;
  const navigate = useNavigate();

  
  return (
    <div>
      <Breadcrumb className="TabHeader__container">
        <LeftOutlined className="TabHeader__icon" />
        {breadcrumbs.map((breadcrumb) => (
          <Breadcrumb.Item
            key={breadcrumb.name}
            className="TabHeader__breadcrumb-name"
            onClick={() => {
              navigate(breadcrumb.route, { replace: true });
            }}
          >
            {breadcrumb.name}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <div className="TabHeader__title">{title}</div>
    </div>
  );
};

export default TabHeader;
