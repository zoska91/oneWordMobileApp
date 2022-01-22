import { FC } from 'react';
import { View } from 'react-native';
import AddWordForm from './AddWordForm/AddWordForm';
import WordsList from './WordsList/WordsList';

interface ModalUserProps {
  action?: string;
}

const ModalUser: FC<ModalUserProps> = ({ action }) => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      {action === 'addWord' && <AddWordForm />}
      {action === 'list' && <WordsList />}
    </View>
  );
};

export default ModalUser;
