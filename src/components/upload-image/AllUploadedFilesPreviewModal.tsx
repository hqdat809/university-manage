import { useEffect, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel, Image, Modal, ModalProps } from 'antd';

import { CloseImageIcon } from 'assets/icons';
import { TSelectedFilePreview } from 'interfaces/common-interfaces';
import './AllUploadedFilesPreviewModal.scss';

interface IProps extends ModalProps {
  title?: string;
  files?: TSelectedFilePreview[];
  isShowDeleteIcon?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sliderRef?: any;
  currentSlide?: number;
  onRemoveFile?: (file: TSelectedFilePreview) => void;
}

const AllUploadedFilesPreviewModal = ({
  title = 'Preview',
  isShowDeleteIcon = true,
  files,
  sliderRef,
  currentSlide,
  onRemoveFile,
  ...rest
}: IProps) => {
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    if (rest.visible) {
      setPosition(window.scrollY);
    }
  }, [rest.visible]);

  useEffect(() => {
    if (!document.fullscreenElement) {
      position && window.scrollTo(0, position);
      setPosition(0);
    }
  }, [document.fullscreenElement]);

  return (
    <Modal className="AllUploadedFilesPreviewModal" title={title} footer={null} width={800} {...rest}>
      <Carousel
        className="AllUploadedFilesPreviewModal__carousel"
        arrows
        prevArrow={<LeftOutlined width={30} height={30} />}
        nextArrow={<RightOutlined width={30} height={30} />}
        ref={sliderRef}
        initialSlide={currentSlide}
      >
        {files?.map((file) => {
          const isImageFile = file.type?.includes('image');
          return (
            <div className="AllUploadedFilesPreviewModal__file" key={file.id}>
              {isShowDeleteIcon && (
                <CloseImageIcon
                  className="AllUploadedFilesPreviewModal__file-icon"
                  width={30}
                  height={30}
                  onClick={() => onRemoveFile?.(file)}
                />
              )}

              {isImageFile ? (
                <Image src={file?.url} className="AllUploadedFilesPreviewModal__file-image" preview={false} />
              ) : (
                <div>
                  <video controls className="AllUploadedFilesPreviewModal__file-video">
                    <source
                      src={file?.url ? file.url : file?.originFileObj && URL.createObjectURL(file?.originFileObj)}
                    />
                  </video>
                </div>
              )}
            </div>
          );
        })}
      </Carousel>
    </Modal>
  );
};

export default AllUploadedFilesPreviewModal;
