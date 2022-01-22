import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';

import { loginByEmail, singInByGoogle } from '../../../db/API/auth';
import { addDefaultSettingsIfNotExistsAPI } from '../../../db/API/settings';
import { IAuth } from '../../../types/formTypes';
import { showToastMsg } from '../../../common/showToastMsg';
import { useNavigation } from '@react-navigation/native';

const useLogin = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const methods = useForm<IAuth>();

  const { handleSubmit } = methods;

  const onError: SubmitErrorHandler<IAuth> = (errors, e) => {
    console.log('==============error');
    return console.log(errors);
  };

  const onSubmit: SubmitHandler<IAuth> = async ({ email, password }) => {
    try {
      const resp: any = await loginByEmail(email, password);

      if (resp.code === 'auth/user-not-found') {
        showToastMsg(t('auth.userNotFound'), 'error');
        return;
      }

      if (resp.code === 'auth/wrong-password') {
        showToastMsg(t('auth.wrongPassword'), 'error');
        return;
      }

      if (resp.code) {
        showToastMsg(t('auth.error'), 'error');
        return;
      }
      // @ts-ignore
      // navigation.navigate('User');
      navigation.goBack();
    } catch (e) {
      console.error(e);
    }
  };

  const googleSubmit = async () => {
    const result = await singInByGoogle();

    if (result.token && result.user) {
      navigation.navigate('User');
      addDefaultSettingsIfNotExistsAPI(result.user.uid);
    }
  };

  return { methods, handleSubmit, onSubmit, googleSubmit, onError };
};

export default useLogin;
