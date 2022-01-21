import { Dispatch, FC } from 'react';
import { FormProvider } from 'react-hook-form';

import InputField from '../../atoms/Inputs/InputField';
import GoogleButton from '../../atoms/Inputs/GoogleButton';
import useAuth from './LoginForm.hook';
import Button from '../../atoms/Button';
import { TitleText } from '../../atoms/Title';

import * as S from './LoginForm.style';

interface LoginFormProps {
  toggleDown: any;
}

const LoginForm: FC<LoginFormProps> = ({ toggleDown }) => {
  const { methods, handleSubmit, onSubmit, googleSubmit, onError } = useAuth();

  return (
    <S.Wrapper>
      <FormProvider {...methods}>
        <S.TouchableOpacity onPress={toggleDown}>
          <TitleText>Login</TitleText>
        </S.TouchableOpacity>

        <GoogleButton onPress={googleSubmit} />
        <S.InputsContainer>
          <InputField name='email' required />
          <InputField name='password' required />
        </S.InputsContainer>

        <Button secondaryColor onPress={handleSubmit(onSubmit, onError)}>
          Log in
        </Button>
      </FormProvider>
    </S.Wrapper>
  );
};

export default LoginForm;
