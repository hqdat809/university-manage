import { Button, ButtonProps } from 'antd';

import './Button.scss';

interface IPrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const OutlineButton = ({ children, ...rest }: IPrimaryButtonProps) => {
  return (
    <Button type="primary" {...rest} className={`OutlineButton ${rest.className}`}>
      {children}
    </Button>
  );
};

export default OutlineButton;
