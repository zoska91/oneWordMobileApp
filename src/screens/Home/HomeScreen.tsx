import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Notification from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import { RootTabScreenProps } from '../../../types';
import { TitleWrapper, TitleText } from '../../components/atoms/Title';
import Card from '../../components/Card/Card';
import Layout from '../../Layout/Layout';
import TextWrapper from '../../components/atoms/Text';
import Button from '../../components/atoms/Button';

import * as S from './HomePage.css';
import { getCurrentUser } from '../../db/API/auth';

// co się stanie z notufikacjami kiedy aplikacja jest otwarta
Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    };
  },
});

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const { t } = useTranslation();

  useEffect(() => {
    const user = getCurrentUser();
    if (user) navigation.navigate('User');
  }, []);

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

  interface Inotification {
    title: 'First notification';
    body: string;
    data: {
      id: string;
    };
  }

  useEffect(() => {
    const backgroundSubscription = Notification.addNotificationResponseReceivedListener(
      response => {
        console.log(response);
        if (response && response.notification.request.content.data.id === 'test') {
          // navigation.navigate('Modal');
        }
      }
    );
    // co się dzieje kiedy przychodzi notyfikacja i aplikacja jest otwarta
    const foreGroundSubscription = Notification.addNotificationReceivedListener(notification => {
      console.log('przychodzi');
      // if (notification.request.content.data.id === 'test') {
      //   navigation.navigate('Modal');
      // }
    });

    return () => {
      //  czyście subskrypcje
      foreGroundSubscription.remove();
      backgroundSubscription.remove();
    };
  }, []);

  //   trigger: {
  //     hour: 19;
  //     minute: 45;
  //     repeats: true;
  // }

  const triggerNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: 'First notification',
        body: 'supcio tekscik',
        data: {
          id: 'test',
        },
      },
      trigger: {
        seconds: 5,
      },
    });
  };

  return (
    <S.Wrapper>
      <Layout>
        <TitleWrapper>
          <TitleText small>only</TitleText>
          <TitleText>one Word</TitleText>
          <TitleText small>a day</TitleText>
        </TitleWrapper>
        <Card>
          <S.WelcomeCard>
            <TextWrapper>{t('welcome')}</TextWrapper>
            <TextWrapper>{t('welcome2')}</TextWrapper>
            <TextWrapper>{t('welcome3')}</TextWrapper>
            <TextWrapper>{t('welcome4')}</TextWrapper>
            <Button
              dark
              onPress={() =>
                navigation.navigate('Modal', {
                  screen: 'Modal',
                  params: {
                    type: 'auth',
                  },
                })
              }
            >
              {t('welcome5')}
            </Button>
          </S.WelcomeCard>
        </Card>
        {/* <Button title='noti' onPress={triggerNotification} /> */}
      </Layout>
    </S.Wrapper>
  );
}
