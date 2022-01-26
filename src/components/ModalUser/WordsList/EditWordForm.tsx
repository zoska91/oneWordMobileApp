import { useNavigation } from '@react-navigation/native';
import { FC, useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import useGenerateOptionsFields from '../../../common/useGenereteOptionsFields';
import { ITodayWord } from '../../../types/api';
import { IInputsAddWord } from '../../../types/formTypes';
import Button from '../../atoms/Button';
import InputField from '../../atoms/Inputs/InputField';
import SelectField from '../../atoms/Inputs/SelectInput';
import { TitleText } from '../../atoms/Title';
import Popup from '../../Popup/Popup';

import * as S from '../AddWordForm/AddWordForm.style';

interface EditWordFormProps {
  data: ITodayWord;
  saveEditingWord: (wordId: string, values: IInputsAddWord) => Promise<'success' | undefined>;
  loading: boolean;
}

const EditWordForm: FC<EditWordFormProps> = ({ data, saveEditingWord, loading }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { t } = useTranslation();
  const { addLangOptions } = useGenerateOptionsFields();

  const methods = useForm<IInputsAddWord>({
    defaultValues: data || {},
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    setModalVisible(data.basicWord ? true : false);
    reset(data);
  }, [data]);

  const onSubmit: SubmitHandler<IInputsAddWord> = async values => {
    if (data?.wordId) {
      const resp = await saveEditingWord(data.wordId, values);
      if (resp === 'success') {
        setModalVisible(false);
      }
    }
  };

  return (
    <Popup
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      height='60%'
      loading={loading}
    >
      <S.Wrapper>
        <FormProvider {...methods}>
          <TitleText> {t('form.editWordTitle')}</TitleText>

          <S.InputsContainer style={{ marginBottom: 0, marginTop: 0 }}>
            <InputField name='basicWord' required />
            <InputField name='transWord' required />
            <SelectField name='addLang' required options={addLangOptions} />
          </S.InputsContainer>

          <Button dark small onPress={handleSubmit(onSubmit)}>
            {t('buttons.submit')}
          </Button>
        </FormProvider>
      </S.Wrapper>
    </Popup>
  );
};

export default EditWordForm;
