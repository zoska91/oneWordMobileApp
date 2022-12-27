import { useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import * as Notification from 'expo-notifications';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

interface Inotification {
  title: 'First notification';
  body: string;
  data: {
    id: string;
  };
}

// co się stanie z notufikacjami kiedy aplikacja jest otwarta
Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
      soundName: 'default',
    };
  },
});

const useNotifications = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  useEffect(() => {
    Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(statusObj => {
        if (statusObj.status !== 'granted') {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then(statusObj => {
        if (statusObj?.status !== 'granted') {
          alert('So sad ');
          return;
        }
      });
  }, []);

  const triggerNotification = (data: { hour: number; minute: number }[]) => {
    Notification.cancelAllScheduledNotificationsAsync();

    data.map(({ hour, minute }) => {
      Notification.scheduleNotificationAsync({
        content: {
          title: t('itsTime'),
          body: t('takeAMoment'),
          data: {
            id: 'learn',
          },
        },
        trigger: {
          hour,
          minute,
          repeats: true,
        },
      });
    });
  };

  useEffect(() => {
    // triggerNotification();
    // const backgroundSubscription = Notification.addNotificationResponseReceivedListener(
    //   response => {
    //     // console.log(response);
    //     if (response && response.notification.request.content.data.id === 'test') {
    //       // navigation.navigate('Modal');
    //     }
    //   }
    // );
    // co się dzieje kiedy przychodzi notyfikacja i aplikacja jest otwarta
    const foreGroundSubscription = Notification.addNotificationReceivedListener(notification => {
      if (notification.request.content.data.id === 'learn') {
        navigation.navigate('User');
      }
    });

    return () => {
      //  czyści subskrypcje
      foreGroundSubscription.remove();
      //   backgroundSubscription.remove();
    };
  }, []);

  return triggerNotification;
};

export default useNotifications;
