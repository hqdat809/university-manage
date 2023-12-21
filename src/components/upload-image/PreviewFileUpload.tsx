import { Image } from 'antd';

import { CloseImageIcon } from 'assets/icons';
import { TSelectedFilePreview } from 'interfaces/common-interfaces';
import './PreviewFileUpload.scss';

interface IProps {
  className?: string;
  files: TSelectedFilePreview[];
  hideCloseIcon?: boolean;
  onShowAll?: () => void;
  onRemoveFile?: (file: TSelectedFilePreview) => void;
}

const PreviewFileUpload = ({ className, files, hideCloseIcon = false, onRemoveFile, onShowAll }: IProps) => {
  if (!files?.length) return null;

  return (
    <div className={`PreviewFileUpload ${className ?? ''}`}>
      {files?.map((file, index) => {
        const isImageFile = file.type?.includes('image');
        const isShowMoreFileOverlay = index === 3 && files.length > 4;

        if (index >= 4) return null;

        return (
          <div className="PreviewFileUpload__file" key={file.id}>
            {!hideCloseIcon && (
              <CloseImageIcon className="PreviewFileUpload__file-icon" onClick={() => onRemoveFile?.(file)} />
            )}
            {isImageFile ? (
              <Image
                src={file?.url}
                className="PreviewFileUpload__file-image"
                width={128}
                height={128}
                preview={false}
              />
            ) : (
              <video width={128} height={128} controls className="PreviewFileUpload__file-video">
                <source src={file?.url || (file?.originFileObj && URL.createObjectURL(file.originFileObj))} />
              </video>
            )}
            {isShowMoreFileOverlay && (
              <div className="PreviewFileUpload__file-overlay" onClick={onShowAll}>
                Show All
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PreviewFileUpload;
