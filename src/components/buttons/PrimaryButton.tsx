import { Button, ButtonProps } from 'antd';

import './Button.scss';

interface IPrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const PrimaryButton = ({ children, ...rest }: IPrimaryButtonProps) => {
  return (
    <Button type="primary" {...rest} className={`PrimaryButton ${rest.className}`}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
