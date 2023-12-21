import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import './loading.scss';

const antIcon = <LoadingOutlined className="LoadingIndicator__outline" spin />;

const LoadingIndicator = () => {
  return <Spin className="AddFamilyMember__icon-add" indicator={antIcon} />;
};

export default LoadingIndicator;
