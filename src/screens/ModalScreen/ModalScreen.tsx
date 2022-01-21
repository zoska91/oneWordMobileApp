import { StyleSheet, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import ModalAuth from '../../components/ModalAuth/ModalAuth';
import { RootStackParamList } from '../../../types';
import { FC } from 'react';

interface IModalScreenProps {
  route: RouteProp<RootStackParamList, 'Modal'>;
}

const ModalScreen: FC<IModalScreenProps> = ({ route }) => {
  const type = route?.params?.params?.type;

  return <View style={styles.container}>{type === 'auth' && <ModalAuth />}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ModalScreen;
