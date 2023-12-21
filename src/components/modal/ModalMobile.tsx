import { ModalProps } from 'antd';
import Modal from 'rmodal-component';

import './ModalMobile.scss';

interface IModalProps extends ModalProps {
  visible: boolean;
  children?: React.ReactNode;
  onCloseModal?: () => void;
  title?: string;
  className?: string;
}

export const ModalMobile = ({ visible, children, onCloseModal, title, className }: IModalProps) => {
  return (
    <>
      <Modal
        show={visible}
        onClose={() => {
          onCloseModal?.();
        }}
        modalTitle={title ? title : ''}
        smModal={true}
        lockBodyScroll
      >
        <div className="content-modal" style={{ overflowX: 'hidden', overflowY: 'scroll'}}>
          {children ? children : <></>}
        </div>
      </Modal>
    </>
  );
};
