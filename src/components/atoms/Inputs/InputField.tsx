import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import * as S from './Inputs.css';
import { Input, Layout } from '@ui-kitten/components';
import { View } from 'react-native';

interface InputFieldProps {
  name: string;
  required?: boolean;
  desc?: boolean;
  type?: string;
  noLabel?: boolean;
  defaultValue?: string;
}

const themeInput = {
  bg: 'white',
  focusBorderColor: '#2e2757',
};

const InputField: FC<InputFieldProps> = ({
  name,
  required,
  desc,
  type = 'text',
  noLabel,
  defaultValue,
  ...props
}) => {
  const {
    getValues,
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const { t } = useTranslation();

  return (
    <S.FieldContainer>
      {!noLabel && (
        <S.FormLabel style={{ fontFamily: 'JosefinSans_700Bold' }}>
          {t(`form.${name}Label`)}
        </S.FormLabel>
      )}
      {desc && <S.Desc>beriu</S.Desc>}
      {desc && <S.Desc>{t(`form.${name}Desc`)}</S.Desc>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, onBlur } }) => (
          <Input
            status={errors[name] ? 'danger' : ''}
            placeholder={t(`form.${name}Placeholder`)}
            value={value}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: t('form.require'),
          },
        }}
      />

      {errors?.[name] && <S.ErrorText>{errors?.[name]?.message}</S.ErrorText>}
    </S.FieldContainer>
  );
};

export default InputField;
