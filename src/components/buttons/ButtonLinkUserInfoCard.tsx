import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';

import { DeleteTrashIcon } from 'assets/icons';
import { EAuthToken, EUserRole, LINK_TYPE } from 'variables';
import PrimaryButton from './PrimaryButton';
import { approveLinkAction, getLinkAction, unlinkAction, rejectLinkAction } from 'stores/actions/link-actions';
import { TLinkUserInfo } from 'interfaces/link-interface';
import { TRootState } from 'stores/reducers';
import { ELinkActions } from 'stores/actions/link-actions/constants';
import { EInvitationStatus } from 'interfaces/settings-interface';
import { Modal } from '../modal';

interface IProps {
  typeCard?: string;
  profileInfo: TLinkUserInfo;
  isFamilyCard?: boolean;
  onLinkProfile?: (linkProfileId: string) => void;
}

const renderCardButton = (profileInfo: TLinkUserInfo, onLinkProfile?: (linkProfileId: string) => void) => {
  switch (profileInfo.linkStatus) {
    case EInvitationStatus.PENDING:
      return (
        <Button
          className={`${
            profileInfo.type === EUserRole.FAMILY ? 'FamilyInfoCard__footer-btn' : 'EducatorInfoCard__footer-btn'
          } btn`}
          disabled
        >
          Pending
        </Button>
      );
    case EInvitationStatus.ACCEPT:
      return (
        <Button
          className={`${
            profileInfo.type === EUserRole.FAMILY ? 'FamilyInfoCard__footer-btn' : 'EducatorInfoCard__footer-btn'
          } btn`}
          disabled
        >
          Linked
        </Button>
      );
    case EInvitationStatus.CANCEL:
      return (
        <PrimaryButton
          className={`${
            profileInfo.type === EUserRole.FAMILY ? 'FamilyInfoCard__footer-btn' : 'EducatorInfoCard__footer-btn'
          } btn`}
          onClick={() => onLinkProfile?.(profileInfo.id)}
        >
          Link
        </PrimaryButton>
      );
    default:
      return (
        <PrimaryButton
          className={`${
            profileInfo.type === EUserRole.FAMILY ? 'FamilyInfoCard__footer-btn' : 'EducatorInfoCard__footer-btn'
          } btn`}
          onClick={() => onLinkProfile?.(profileInfo.id)}
        >
          Link
        </PrimaryButton>
      );
  }
};

const renderButtonLinkUser = (typeCard: string, profileInfo: TLinkUserInfo, isFamilyCard: boolean | undefined) => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const loadingApprove = useSelector((state: TRootState) => state.loading[ELinkActions.APPROVE_LINK]);
  const loadingUnlink = useSelector((state: TRootState) => state.loading[ELinkActions.UNLINK]);
  const loadingReject = useSelector((state: TRootState) => state.loading[ELinkActions.REJECT_LINK]);
  const profileId = localStorage.getItem(EAuthToken.SELECT_ROLE);
  const { otherProfileId } = useParams();

  const handleApproveLink = () => {
    dispatch(
      approveLinkAction(profileInfo.linkId, () => {
        profileId && dispatch(getLinkAction({ linkType: typeCard, profileType: profileInfo.type, id: profileId }));
      }),
    );
  };

  const handleUnlinkProfile = () => {
    dispatch(
      unlinkAction(profileInfo.linkId, () => {
        profileId && dispatch(getLinkAction({ linkType: typeCard, profileType: profileInfo.type, id: profileId }));
      }),
    );
  };

  const handleRejectLink = () => {
    dispatch(
      rejectLinkAction(profileInfo.linkId, () => {
        profileId && dispatch(getLinkAction({ linkType: typeCard, profileType: profileInfo.type, id: profileId }));
      }),
    );
  };

  const hanldeOpenModal = () => {
    setIsOpenModal(true);
  };

  const hanldeCloseModal = () => {
    setIsOpenModal(false);
  };

  switch (typeCard) {
    case LINK_TYPE.PENDING:
      return (
        <>
          <div className="LinkCard__button ">
            <PrimaryButton className="LinkCard__button-accept " onClick={handleApproveLink} loading={loadingApprove}>
              Accept
            </PrimaryButton>

            <PrimaryButton className="LinkCard__button-delete" onClick={hanldeOpenModal} loading={loadingReject}>
              <DeleteTrashIcon />
            </PrimaryButton>
          </div>
          <Modal
            title="Do you want to reject this profile?"
            onFinishModal={handleRejectLink}
            onCloseModal={hanldeCloseModal}
            visible={isOpenModal}
            className="LogoutModal__none-padding"
          ></Modal>
        </>
      );
    case LINK_TYPE.SENT:
      return (
        <>
          <div className="LinkCard__button">
            <PrimaryButton className="LinkCard__button-delete " onClick={hanldeOpenModal} loading={loadingReject}>
              <DeleteTrashIcon />
            </PrimaryButton>
          </div>
          <Modal
            title="Do you want to reject this profile?"
            onFinishModal={handleRejectLink}
            onCloseModal={hanldeCloseModal}
            visible={isOpenModal}
            className="LogoutModal__none-padding"
          ></Modal>
        </>
      );
    case LINK_TYPE.LINKED:
      return (
        <>
          <div className={`LinkCard__button ${isFamilyCard && 'LinkCard__footer-family'}`}>
            <PrimaryButton
              className="LinkCard__button-linked LinkCard__footer-family-btn"
              onClick={hanldeOpenModal}
              loading={loadingUnlink}
              disabled={!!otherProfileId}
            >
              Linked
            </PrimaryButton>
          </div>
          <Modal
            title="Do you want to unlink this profile"
            onFinishModal={handleUnlinkProfile}
            onCloseModal={hanldeCloseModal}
            visible={isOpenModal}
            className="LogoutModal__none-padding"
          ></Modal>
        </>
      );
  }
};

const ButtonLinkUserInfoCard = ({ typeCard, profileInfo, isFamilyCard, onLinkProfile }: IProps) => {
  if (typeCard) {
    return <>{renderButtonLinkUser(typeCard, profileInfo, isFamilyCard)}</>;
  } else {
    return <>{renderCardButton(profileInfo, onLinkProfile)}</>;
  }
};

export default ButtonLinkUserInfoCard;
