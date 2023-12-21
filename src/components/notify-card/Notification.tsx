import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TNotifications } from 'interfaces/users-interfaces';
import { getNotificationsAction } from 'stores/actions/users-actions';
import { TRootState } from 'stores/reducers';
import { PAGE_SIZE_NOTIFICATION, SELECT_NOTIFICATION_TYPE } from 'variables';
import Tabs from '../tab/Tab';
import ListNotificationCards from './ListNotificationCards';

import './Notification.scss';
import _ from 'lodash';

const Notification = () => {
  const dataNotifications = useSelector((state: TRootState) => state?.users?.notifications);
  const currentProfile = useSelector((state: TRootState) => state?.users?.currentProfile?.id);
  const loadingState = useSelector((state: TRootState) => state?.loading);
  const [currentPageNotifications, setCurrentPageNotifications] = useState(1);
  const [listNotification, setListNotification] = useState<TNotifications[]>([]);
  const [typeNotification, setTypeNotification] = useState('ALL');
  const dispatch = useDispatch();
  const notificationModal = useRef(null);

  const handleScrollNotificationsList = (e: any) => {
    if (currentPageNotifications < dataNotifications?.totalPage) {
      if (Math.ceil(e.target.scrollTop) + Math.ceil(e.target.offsetHeight) >= Math.ceil(e.target.scrollHeight)) {
        setCurrentPageNotifications(currentPageNotifications + 1);
      }
    }
  };

  const handleChangeTab = (value: string) => {
    setListNotification([]);
    setCurrentPageNotifications(1);
    if (value == 'ALL') {
      setTypeNotification('ALL');
    } else {
      setTypeNotification('UNREAD');
    }
  };

  const handleGetNotifications = () => {
    if (currentProfile) {
      dispatch(
        getNotificationsAction({
          page: currentPageNotifications,
          size: PAGE_SIZE_NOTIFICATION,
          isRead: typeNotification == 'ALL' ? '' : 'false',
        }),
      );
    }
  };

  useEffect(() => {
    handleGetNotifications();
  }, [currentPageNotifications, typeNotification]);

  useEffect(() => {
    setListNotification(
      _.uniqBy(listNotification.concat(dataNotifications.list), function (e) {
        return e.id;
      }),
    );
    return () => {
      setListNotification([]);
    };
  }, [dataNotifications.list]);

  return (
    <div className="Notification" ref={notificationModal}>
      <Tabs
        onChange={handleChangeTab}
        tabs={SELECT_NOTIFICATION_TYPE.map((item) => ({
          key: item.toUpperCase(),
          name: item,
          component:
            loadingState['GET_NOTIFICATION'] && currentPageNotifications === 1 ? (
              'Loading...'
            ) : (
              <>
                {listNotification.length > 0 ? (
                  <ListNotificationCards
                    listNotifications={listNotification}
                    handleScrollNotificationsList={handleScrollNotificationsList}
                  ></ListNotificationCards>
                ) : (
                  <div className="Notification__emty">No Notification</div>
                )}
              </>
            ),
        }))}
      />
    </div>
  );
};

export default Notification;
