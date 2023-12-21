import { TNotifications } from 'interfaces/users-interfaces';
import { RoutePaths } from 'routes/route-constants';
import { readNotification } from 'services/users-service';
import { toastError } from 'utils/notification-utils';
import { ENotificationTrigger, STUDENT_TAB } from 'variables';
import NotifyCard from './NotifyCard';

interface IProps {
  listNotifications: TNotifications[];
  handleScrollNotificationsList: (e: any) => void;
}

const ListNotificationCards = ({ listNotifications, handleScrollNotificationsList }: IProps) => {
  const handleReadNotification = async (notification: TNotifications) => {
    try {
      await readNotification(notification.id);
      switch (notification.triggerType) {
        case ENotificationTrigger.TAG_POST: {
          window.location.href = RoutePaths.PROFILE;
          break;
        }
        case ENotificationTrigger.ACHIEVEMENT_VERIFIED:
        case ENotificationTrigger.NEW_ACHIEVEMENT: {
          window.location.href =
            RoutePaths.STUDENT + '/' + notification.triggerId + '/' + STUDENT_TAB.STUDENT_ACHIEVEMENT;
          break;
        }
        case ENotificationTrigger.EDUCATOR_ASSOCIATE:
        case ENotificationTrigger.SCHOOL_COMPANY_ASSOCIATE:
          window.location.href = RoutePaths.MEMBER_SETTINGS;
          break;
      }
    } catch (error) {
      toastError(error.message);
    }
  };

  const listNotificationsCard = listNotifications.map((item: TNotifications) => (
    <div onClick={() => handleReadNotification(item)} key={item.id}>
      <NotifyCard notificationInfo={item} isRead={item.isRead} />
    </div>
  ));

  return (
    <div className="ListNotificationsCard" onScroll={handleScrollNotificationsList}>
      {listNotificationsCard}
    </div>
  );
};

export default ListNotificationCards;
