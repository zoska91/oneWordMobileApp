import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import {} from '@react-navigation/native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import ModalAuth from '../../components/ModalAuth/ModalAuth';

export default function ModalScreen({ route }) {
  const { type } = route.params.params;

  return <View style={styles.container}>{type === 'auth' && <ModalAuth />}</View>;
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
