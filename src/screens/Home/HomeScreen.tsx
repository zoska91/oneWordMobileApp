import { useEffect } from 'react';

import { Button, StyleSheet } from 'react-native';
import Svg, { Circle, RadialGradient, Defs, Stop, Ellipse, Rect } from 'react-native-svg';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../../types';
import * as Notification from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { useTranslation } from 'react-i18next';

import * as S from './HomePage.css';
import { TitleWrapper, TitleText } from '../../components/atoms/Title';
import Card from '../../components/Card/Card';
import Layout from '../../Layout/Layout';

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
          navigation.navigate('Modal');
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
    <View style={styles.container}>
      <Layout>
        <TitleWrapper>
          <TitleText small>only</TitleText>
          <TitleText>one Word</TitleText>
          <TitleText small>a day</TitleText>
        </TitleWrapper>
        <Card>
          <S.WelcomeCard>
            <Text>{t('welcome2')}</Text>
            {/* <Text>{t('welcome3')}</Text> */}
            {/* <Text>{t('welcome4')}</Text> */}
            {/* <Button dark>{t('welcome5')}</Button> */}
          </S.WelcomeCard>
        </Card>

        {/* <Button title='noti' onPress={triggerNotification} /> */}
      </Layout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
