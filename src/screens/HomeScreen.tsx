import { useEffect } from 'react';

import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import * as Notification from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { NotificationBehavior } from 'expo-notifications';

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
      <Button title='noti' onPress={triggerNotification} />
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <EditScreenInfo path='/screens/HomeScreen.tsx' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
