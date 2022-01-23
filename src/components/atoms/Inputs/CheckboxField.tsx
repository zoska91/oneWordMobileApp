import { CheckBox } from '@ui-kitten/components';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import * as S from './Inputs.css';

interface CheckboxFieldProps {
  name: string;
  required?: boolean;
  desc?: boolean;
}

const CheckboxField: FC<CheckboxFieldProps> = ({ name, required, desc }) => {
  const {
    register,
    formState: { errors },
    getValues,
    control,
  } = useFormContext();

  const { t } = useTranslation();
  const values = getValues();

  return (
    <S.FieldContainer small>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <CheckBox checked={value} onChange={nextChecked => onChange(nextChecked)}>
            <S.FormLabel style={{ fontFamily: 'JosefinSans_700Bold' }}>
              {t(`form.${name}Label`)}
            </S.FormLabel>
          </CheckBox>
        )}
        rules={{
          required: {
            value: true,
            message: t('form.require'),
          },
        }}
      />
      {desc && <S.Desc>{t(`form.${name}Desc`)}</S.Desc>}
    </S.FieldContainer>
  );
};

export default CheckboxField;
