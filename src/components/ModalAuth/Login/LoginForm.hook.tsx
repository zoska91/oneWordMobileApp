import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';

import { loginByEmail, singInByGoogle } from '../../../db/API/auth';
import { addDefaultSettingsIfNotExistsAPI } from '../../../db/API/settings';
import { IAuth } from '../../../types/formTypes';
import { showToastMsg } from '../../../common/showToastMsg';

const useLogin = () => {
  const { t } = useTranslation();

  const [redirect, setRedirect] = useState<boolean>(false);

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

      setRedirect(true);
    } catch (e) {
      console.error(e);
    }
  };

  const googleSubmit = async () => {
    const result = await singInByGoogle();
    if (result.token && result.user) {
      setRedirect(true);
      addDefaultSettingsIfNotExistsAPI(result.user.uid);
    }
  };

  return { redirect, methods, handleSubmit, onSubmit, googleSubmit, onError };
};

export default useLogin;
