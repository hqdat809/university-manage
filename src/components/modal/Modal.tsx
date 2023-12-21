import { Button, Modal as ModalAnt, ModalProps } from 'antd';

import { PrimaryButton } from '../buttons';
import './Modal.scss';

interface IModalProps extends ModalProps {
  className?: string;
  title: string;
  visible: boolean;
  showFooter?: boolean;
  cancelButton?: string;
  confirmButton?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  submitLoading?: boolean;
  width?: number;
  zIndex?: number;
  onCloseModal?: () => void;
  onFinishModal?: () => void;
}

export const Modal = ({
  className,
  title,
  visible,
  cancelButton,
  confirmButton,
  children,
  footer,
  showFooter = true,
  submitLoading,
  width,
  zIndex,
  onCloseModal,
  onFinishModal,
}: IModalProps) => {
  const defaultFooter = [
    <Button className="Modal__button-cancel" key="1" type="text" onClick={onCloseModal}>
      {cancelButton || 'Cancel'}
    </Button>,
    <PrimaryButton key="2" onClick={onFinishModal} loading={submitLoading} htmlType="submit">
      {confirmButton || 'Confirm'}
    </PrimaryButton>,
  ];

  return (
    <ModalAnt
      className={`Modal ${className ?? ''}`}
      title={title}
      visible={visible}
      centered
      onCancel={onCloseModal}
      footer={showFooter ? footer || defaultFooter : null}
      transitionName="ant-move-up"
      maskTransitionName="ant-fade"
      width={width}
      zIndex={zIndex}
    >
      {children ? children : <></>}
    </ModalAnt>
  );
};
