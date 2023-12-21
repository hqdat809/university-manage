import { DotIcon } from 'assets/icons';
import { TNotifications } from 'interfaces/users-interfaces';
import moment from 'moment';
import { EUserRole } from 'variables';
import { Avatar } from '../image';

import './NotifyCard.scss';

interface IProps {
  notificationInfo: TNotifications;
  isRead: boolean;
}

const NotifyCard = ({ notificationInfo }: IProps) => {
  return (
    <div className="NotifyCard">
      <div className="NotifyCard__avatar">
        <Avatar
          src={notificationInfo?.sender?.avatar}
          size={86}
          shape={(notificationInfo?.sender?.type === EUserRole.SCHOOL || notificationInfo?.sender?.type === EUserRole.COMPANY) ? "square" : 'circle'}
          style={{ border: '1px solid #F2F2F2' }}
        />
      </div>
      <div className="NotifyCard__info">
        <div className="NotifyCard__info-title">
          <div className="NotifyCard__info-title-text">{notificationInfo.title}</div>
          <div className="NotifyCard__info-title-icon">
            {!notificationInfo.isRead && <DotIcon className="NotifyCard__info-dot-icon" />}
          </div>
        </div>
        <div className="NotifyCard__info-time">{moment(notificationInfo.createdAt).fromNow()}</div>
        <div className="NotifyCard__info-content">{notificationInfo.content}</div>
      </div>
    </div>
  );
};

export default NotifyCard;
