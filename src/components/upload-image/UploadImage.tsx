import { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { UploadPhotoIcon } from 'assets/icons';
import { Skeleton, Tooltip } from 'antd';
import Image from '../image/Image';

import './Upload.scss';
import { toastError } from 'utils/notification-utils';

interface IUploadImage {
  title?: string;
  onChangeAvatar?: (file: File) => void;
}

export const UploadImage = (props: IUploadImage) => {
  const { title, onChangeAvatar } = props;

  const [selectedImage, setSelectedImage] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeFile = (e: any) => {
    if (e.target.files[0]?.size > 5 * 1024 * 1024) {
      toastError('Unable to upload picture larger than 5mb');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      onChangeAvatar && onChangeAvatar(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage('');
  };

  const handlePreviewImage = () => {
    return (
      <>
        {isLoading ? (
          <Skeleton.Image className="UploadImage__image" />
        ) : (
          <div className="UploadImage__image-container ">
            <Image src={URL.createObjectURL(selectedImage)} className="UploadImage__image" preview={false} />
            <Tooltip title="Remove">
              <div className="UploadImage__icon" onClick={removeSelectedImage}>
                <CloseOutlined className="UploadImage__icon-x" />
              </div>
            </Tooltip>
          </div>
        )}
      </>
    );
  };

  return (
    <div>
      {!selectedImage ? (
        <>
          <label htmlFor="upload__file">
            <div className="UploadImage__container square">
              <div>
                <UploadPhotoIcon />
              </div>
              <div className="UploadImage__container-text">{title || 'Add photo'}</div>
            </div>
          </label>
          <input
            type="file"
            id="upload__file"
            className="UploadImage__input"
            onChange={handleChangeFile}
            accept=".png, .jpg, .jpeg, .webp"
            style={{ display: 'none' }}
          />
        </>
      ) : (
        handlePreviewImage()
      )}
    </div>
  );
};
