import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

import { IInputsAddWord } from '../../../types/formTypes';
import useGenerateOptionsFields from '../../../common/useGenereteOptionsFields';
import { addWordAPI } from '../../../db/API/words';
import { showToastMsg } from '../../../common/showToastMsg';

import * as S from './AddWordForm.style';
const useAddWordForm = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const { addLangOptions } = useGenerateOptionsFields();

  const methods = useForm<IInputsAddWord>({
    defaultValues: { addLang: 'en' },
  });
  const { handleSubmit, reset } = methods;

  const onError: SubmitErrorHandler<IInputsAddWord> = (errors, e) => {
    console.log('==============error');
    return console.log(errors);
  };

  const onSubmit: SubmitHandler<IInputsAddWord> = data => {
    console.log(data);
    addWordAPI({ ...data });
    showToastMsg(t(`wordCreated`), 'success');
    reset();
  };

  return { navigation, addLangOptions, methods, onSubmit, handleSubmit, onError, t };
};

export default useAddWordForm;
