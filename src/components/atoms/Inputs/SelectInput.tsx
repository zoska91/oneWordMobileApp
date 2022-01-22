import { FC, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import * as S from './Inputs.css';
import { Picker } from '@react-native-picker/picker';
import { Text, View, Modal } from 'react-native';
import styled from 'styled-components/native';
import Button from '../Button';
import { AntDesign } from '@expo/vector-icons';

export const TouchableOpacity = styled.TouchableOpacity`
  margin-bottom: 50px;
`;

interface SelectFieldProps {
  name: string;
  required?: boolean;
  desc?: boolean;
  options: { value: string | number; label: string }[];
  label?: JSX.Element | string;
}

const SelectField: FC<SelectFieldProps> = ({ name, required, desc, options, label }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    formState: { errors },
    getValues,
    control,
  } = useFormContext();

  const { t } = useTranslation();
  const value = getValues(name);

  return (
    <S.FieldContainer>
      {label ? (
        label
      ) : (
        <S.FormLabel style={{ fontFamily: 'JosefinSans_700Bold' }}>
          {t(`form.${name}Label`)}
        </S.FormLabel>
      )}
      {desc && <S.Desc>{t(`form.${name}Desc`)}</S.Desc>}

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <S.SelectValue>
          <Text>
            {options?.filter(el => el.value === value)[0]?.label || t(`form.${name}Placeholder`)}
          </Text>
        </S.SelectValue>
      </TouchableOpacity>

      {errors?.[name] && <S.ErrorText>{errors?.[name]?.message}</S.ErrorText>}

      <Modal
        style={{ flex: 1, position: 'relative' }}
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <S.BackdropModal onPress={() => setModalVisible(false)} />
        <S.ModalContainer>
          <S.CloseButton onPress={() => setModalVisible(false)}>
            <AntDesign name='closecircle' size={32} color='#2e2757' />
          </S.CloseButton>
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
              <Picker
                selectedValue={value}
                onValueChange={itemValue => onChange(itemValue)}
                style={{ marginBottom: 30 }}
              >
                {options.map((el, i) => (
                  <Picker.Item key={el.value} label={el.label} value={el.value} />
                ))}
              </Picker>
            )}
            rules={{
              required: {
                value: true,
                message: t('form.require'),
              },
            }}
          />

          <Button dark small onPress={() => setModalVisible(false)}>
            {t('buttons.submit')}
          </Button>
        </S.ModalContainer>
      </Modal>
    </S.FieldContainer>
  );
};

export default SelectField;
