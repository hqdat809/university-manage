import { ReactNode } from 'react';
import { Button, ButtonProps } from 'antd';

interface ILinkButton extends ButtonProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const LinkButton = (props: ILinkButton) => {
  const { className, children, ...rest } = props;

  return (
    <Button type="link" className={`LinkButton ${className}`} {...rest}>
      {children}
    </Button>
  );
};

export default LinkButton;
