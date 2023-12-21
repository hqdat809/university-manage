import { Upload, UploadProps } from 'antd';
import { ReactNode } from 'react';

import { UploadIcon } from 'assets/icons';

interface IUploadFile extends UploadProps {
  className?: string;
  children?: ReactNode;
}

const UploadFile = ({ className, children, ...rest }: IUploadFile) => {
  return (
    <Upload className={`UploadFile ${className}`} {...rest}>
      {children ? children : <UploadIcon />}
    </Upload>
  );
};

export default UploadFile;
