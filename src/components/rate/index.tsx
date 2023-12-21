import React from 'react';

import { Rate, RateProps } from 'antd';

interface IProps extends RateProps {
  className?: string;
}

const Rating = ({ className, ...rest }: IProps) => {
  return <Rate className={className} {...rest} value={rest.value} />;
};

export default Rating;
