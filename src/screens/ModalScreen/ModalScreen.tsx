import { StyleSheet, View } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';

import ModalAuth from '../../components/ModalAuth/ModalAuth';
import { RootStackParamList } from '../../../types';
import { FC, useEffect, useLayoutEffect } from 'react';
import ModalUser from '../../components/ModalUser/ModalUser';
import { getCurrentUser } from '../../db/API/auth';

interface IModalScreenProps {
  route: RouteProp<RootStackParamList, 'Modal'>;
}

const ModalScreen: FC<IModalScreenProps> = ({ route }) => {
  const type = route?.params?.params?.type;
  const action = route?.params?.params?.action;
  const navigation = useNavigation();

  useEffect(() => {
    return () => {
      // temporary - i dont know how to do this after login in LoginForm.hook.ts with closing modal
      const user = getCurrentUser();
      if (type === 'auth' && user) navigation.navigate('User');
    };
  }, []);

  return (
    <View style={styles.container}>
      {type === 'auth' && <ModalAuth />}
      {type === 'user' && <ModalUser action={action} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e6ef',
  },
});

export default ModalScreen;
