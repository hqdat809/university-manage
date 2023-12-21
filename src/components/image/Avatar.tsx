import { Avatar as AvatarAnt, AvatarProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface IProps extends AvatarProps {
  className?: string;
}

const Avatar = ({ className, size, ...rest }: IProps) => {
  return (
    <AvatarAnt
      size={size} 
      className={`Avatar ${className ?? ''}`}
      shape="circle"
      icon={<UserOutlined size={(size as number) / 2 || 14} />}
      {...rest}
    />
  );
};

export default Avatar;
