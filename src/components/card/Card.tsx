import { Card as CardAnt, CardProps } from 'antd';

import './Card.scss';

interface ICardProps extends CardProps {
  className?: string;
  title?: string;
  children: React.ReactNode;
}

const Card = ({ className, title, children, ...rest }: ICardProps) => {
  return (
    <CardAnt className={`Card ${className ?? ''}`} title={title} {...rest}>
      {children}
    </CardAnt>
  );
};

export default Card;
