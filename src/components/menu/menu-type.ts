import { MenuProps } from 'antd';
import React from 'react';

export type TOnClickMenuItem = MenuProps['onClick'];

export type TMenuItem = {
  key: string;
  label: React.ReactNode;
  value?: string;
  icon?: React.ReactNode;
  onClick?: TOnClickMenuItem;
  children?: TMenuItem[];
};
