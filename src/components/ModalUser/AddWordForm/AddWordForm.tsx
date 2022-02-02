import { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import InputField from '../../../components/atoms/Inputs/InputField';
import SelectField from '../../../components/atoms/Inputs/SelectInput';
import Button from '../../atoms/Button';
import { TitleText } from '../../atoms/Title';
import useAddWordForm from './AddWordForm.hook';

import * as S from './AddWordForm.style';

interface AddWordFormProps {}

const AddWordForm: FC<AddWordFormProps> = () => {
  const { navigation, addLangOptions, methods, onSubmit, handleSubmit, onError, t } =
    useAddWordForm();

  return (
    <S.Wrapper>
      <FormProvider {...methods}>
        <TitleText> {t('form.addWordTitle')}</TitleText>

        <S.InputsContainer>
          <InputField name='basicWord' required />
          <InputField name='transWord' required />
          <SelectField name='addLang' required options={addLangOptions} />
        </S.InputsContainer>

        <S.ButtonContainer>
          <Button small onPress={() => navigation.goBack()}>
            {t('buttons.close')}
          </Button>
          <Button dark small onPress={handleSubmit(onSubmit, onError)}>
            {t('buttons.submit')}
          </Button>
        </S.ButtonContainer>
      </FormProvider>
    </S.Wrapper>
  );
};

export default AddWordForm;
