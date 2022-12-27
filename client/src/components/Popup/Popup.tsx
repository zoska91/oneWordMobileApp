import { FC } from 'react';

import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import * as S from './Popup.css';
import Spiner from '../atoms/Spiner';

interface PopupProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  height?: string;
  loading?: boolean;
}

const Popup: FC<PopupProps> = ({ children, modalVisible, setModalVisible, height, loading }) => {
  return (
    <Modal
      style={{ flex: 1, position: 'relative' }}
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(prev => !prev);
      }}
    >
      <S.BackdropModal onPress={() => setModalVisible(false)} />
      <S.ModalContainer style={{ height }}>
        <S.CloseButton onPress={() => setModalVisible(false)}>
          <AntDesign name='closecircle' size={32} color='#2e2757' />
        </S.CloseButton>
        {children}
      </S.ModalContainer>
      {loading && <Spiner />}
    </Modal>
  );
};

export default Popup;
