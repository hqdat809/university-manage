import { Col, Row, Tooltip } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import { Ref, useMemo, useRef, useState } from 'react';
import { PlayCircleFilled } from '@ant-design/icons';

import { Image } from 'components/image';
import { TFileResponse } from 'interfaces/posts-interface';
import AllUploadedFilesPreviewModal from 'components/upload-image/AllUploadedFilesPreviewModal';
import { TSelectedFilePreview } from 'interfaces/common-interfaces';
import './GridImageList.scss';

interface IProps {
  files: TFileResponse[];
}

const GridImageList = ({ files }: IProps) => {
  const sliderRef: Ref<CarouselRef> = useRef(null);

  const [visibleSelectedFilesPreviewModal, setVisibleSelectedFilesPreviewModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<number>();

  const filesPreview: TSelectedFilePreview[] = useMemo(
    () => files.map((file) => ({ id: file.id, url: file.url, type: file.mediaType })),
    [files],
  );

  const handleClickImage = (index: number) => {
    sliderRef.current?.goTo(index, false);
    setCurrentSlide(!currentSlide ? index : undefined);
    setVisibleSelectedFilesPreviewModal(true);
  };

  const handleCloseModal = () => {
    setVisibleSelectedFilesPreviewModal(false);
    const myVideo = document.getElementsByTagName('video');
    if (myVideo.length) {
      const length = myVideo.length;
      for (let i = 0; i < length; i++) {
        myVideo[i].pause();
      }
    }
  };

  const renderMediaFile = (file: TFileResponse, isOnlyOneImage?: boolean) => {
    const isImageFile = file.mediaType.includes('image');

    return isImageFile ? (
      <Image className="GridImageList__col-image image" src={file.url} preview={false} />
    ) : (
      <div style={{ position: 'relative', height: '100%' }}>
        <video
          controls={false}
          className={
            isOnlyOneImage ? `GridImageList__col-video video video_small` : `GridImageList__col-video video video_small`
          }
        >
          <source src={file.url} />
        </video>
        <h1 className="Video__button-play">
          <Tooltip title="Play">
            <PlayCircleFilled className="Video__icon-play" />
          </Tooltip>
        </h1>
      </div>
    );
  };

  const renderFirstRowImages = () => {
    const isOnlyOneImage = files.length === 1;

    return (
      <Row className="GridImageList__firstRow">
        {files.map(
          (file, index) =>
            index < 2 && (
              <Col
                key={file.id}
                span={isOnlyOneImage ? '24' : '12'}
                className="GridImageList__col"
                onClick={() => handleClickImage(index)}
              >
                {renderMediaFile(file, isOnlyOneImage)}
              </Col>
            ),
        )}
      </Row>
    );
  };

  const renderSecondRowImages = () => {
    const totalFiles = files.length;
    const isShowSecondRow = totalFiles >= 3;
    const isShowOverlay = totalFiles > 5;
    const totalFilesOnSecondRow = isShowOverlay ? 3 : totalFiles - 2;
    const spanOfEachRow = 24 / totalFilesOnSecondRow;

    if (!isShowSecondRow) return null;

    return (
      <Row className="GridImageList__secondRow">
        {files.map((file, index) =>
          index >= 2 && index <= 4 ? (
            <Col
              key={file.id}
              className="GridImageList__col"
              span={spanOfEachRow}
              onClick={() => handleClickImage(index)}
            >
              {renderMediaFile(file)}
              {isShowOverlay && index === 4 && <div className="GridImageList__overlay">+{totalFiles - 5}</div>}
            </Col>
          ) : undefined,
        )}
      </Row>
    );
  };

  if (!files.length) return null;

  return (
    <div className="GridImageList">
      {renderFirstRowImages()}
      {renderSecondRowImages()}

      <AllUploadedFilesPreviewModal
        title="All media"
        isShowDeleteIcon={false}
        files={filesPreview}
        visible={visibleSelectedFilesPreviewModal}
        sliderRef={sliderRef}
        currentSlide={currentSlide}
        onCancel={handleCloseModal}
      />
    </div>
  );
};

export default GridImageList;
