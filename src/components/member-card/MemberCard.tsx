import { Avatar } from 'antd';
import { TRootState } from 'stores/reducers';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { KeyIcon } from 'assets/icons';
import { getFamilyMembers, grantMember } from 'services/profile-service';
import { Modal } from 'components/modal';
import { toastError, toastSuccess } from 'utils/notification-utils';
import { IFamilyMember } from 'interfaces/profile-interface';
import { ERoleType, RoleTypeLabel } from 'variables';

interface IMemberCard {
  avatar?: string;
  name?: string;
  role?: string;
  type?: string;
  isAdmin?: boolean;
  isGranted?: boolean;
  memberId?: string;
  setIsLoading?: (value: boolean) => void;
  setListFamilyMember?: (familyMembers: IFamilyMember[]) => void;
}

const MemberCard = (props: IMemberCard) => {
  const userInfoState = useSelector((state: TRootState) => state.users);
  const { avatar, name, role, type, isAdmin, isGranted, memberId, setIsLoading, setListFamilyMember } = props;
  const [isOpenModalGrant, setIsOpenModalGrant] = useState(false);
  const profileId = userInfoState?.otherProfile?.profileId;

  const handleGranted = () => {
    setIsOpenModalGrant(true);
  };

  const handleCloseModalGrant = () => {
    setIsOpenModalGrant(false);
  };

  const getFamilyMembersRequest = async (page?: number) => {
    setIsLoading && setIsLoading(true);
    if (profileId) {
      try {
        const res = await getFamilyMembers({ page: page }, profileId);
        setListFamilyMember && setListFamilyMember(res?.list);
      } catch (error) {
        toastError(error.message);
      }
    }
    setIsLoading && setIsLoading(false);
  };

  const handleConfirmGrant = async () => {
    if (memberId) {
      try {
        await grantMember(memberId);
        getFamilyMembersRequest();
        toastSuccess('Granted success');
      } catch (error) {
        toastError(error);
      } finally {
        setIsOpenModalGrant(false);
      }
    }
  };

  return (
    <div className="CardMember__container">
      <div className="CardMember__left">
        <Avatar src={avatar} size={64} className="CardMember__avatar" />
        <div>
          <div className="CardMember__name">{name}</div>
          <div className="CardMember__roleOrType">{role}</div>
          <div className="CardMember__roleOrType CardMember__roleOrType-green">{type}</div>
        </div>
      </div>
      {!isAdmin && !isGranted && role === RoleTypeLabel[ERoleType.STUDENT] && <KeyIcon className="grant-icon" onClick={handleGranted} />}
      <Modal
        title="Do you want grant this profile?"
        visible={isOpenModalGrant}
        onFinishModal={() => {
          handleConfirmGrant();
        }}
        onCloseModal={handleCloseModalGrant}
        className="LogoutModal__none-padding"
      ></Modal>
    </div>
  );
};

export default MemberCard;
