import { useState } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { IAuth } from '../../../types/formTypes';

import { loginByEmail, singInByGoogle } from '../../../db/API/auth';
import { showToastMsg } from '../../../common/showToastMsg';

import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import { addDefaultSettingsIfNotExistsAPI } from '../../../db/API/settings';

const useSignUpForm = () => {
  const { t } = useTranslation();
  const [redirect, setRedirect] = useState<boolean>(false);
  const methods = useForm<IAuth>();
  const { handleSubmit } = methods;

  const onError: SubmitErrorHandler<IAuth> = (errors, e) => {
    return console.log(errors);
  };

  const onSubmit: SubmitHandler<IAuth> = ({ email, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        if (user.uid) {
          loginByEmail(email, password);
          addDefaultSettingsIfNotExistsAPI(user.uid);
        }
      })
      .catch(error => {
        if (error.code === 'auth/weak-password') showToastMsg(t('api.weakPassword'), 'error');

        if (error.code === 'auth/email-already-in-use') showToastMsg(t('api.existsMail'), 'error');

        throw { code: error.code, error: error.message };
      });
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

export default useSignUpForm;
