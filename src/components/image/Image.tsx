import { Image as ImageAnt, ImageProps } from 'antd';

import AvatarSystem from 'assets/images/AvatarSystem.png';

interface IProps extends ImageProps {
  className?: string;
}

const Image = ({ className, preview = false, ...rest }: IProps) => {
  return <ImageAnt className={`Image ${className ?? ''}`} preview={preview} {...rest} src={rest.src || AvatarSystem} loading="lazy" />;
};

export default Image;
