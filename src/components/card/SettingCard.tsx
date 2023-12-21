import { Card } from 'antd';

import './Card.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subTitle?: string;
  description?: string;
}

const SettingCard = ({ className, children, title, subTitle, description }: IProps) => {
  return (
    <Card className={`Card SettingCard ${className ?? ''}`} title={title}>
      {subTitle && <div className="SettingCard__subTitle">{subTitle}</div>}
      {description && <div className="SettingCard__description">{description}</div>}
      {children}
    </Card>
  );
};

export default SettingCard;
