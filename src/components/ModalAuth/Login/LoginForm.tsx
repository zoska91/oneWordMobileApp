import { Dispatch, FC, SetStateAction } from 'react';
import { FormProvider } from 'react-hook-form';
import styled from 'styled-components/native';

import InputField from '../../atoms/Inputs/InputField';
import GoogleButton from '../../atoms/Inputs/GoogleButton';
import useAuth from './LoginForm.hook';
import Button from '../../atoms/Button';
import { TitleText, TitleWrapper } from '../../atoms/Title';
import { Text, View } from 'react-native';

interface LoginFormProps {
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}

const LoginForm: FC<LoginFormProps> = ({ setIsSignUp }) => {
  const { redirect, methods, handleSubmit, onSubmit, googleSubmit, onError } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <FormProvider {...methods}>
        <TitleWrapper
        // onClick={() => setIsSignUp(false)}
        >
          <TitleText>Login</TitleText>
        </TitleWrapper>
        <GoogleButton onPress={googleSubmit} />

        <InputField name='email' required />
        <InputField name='password' required />
        <Button secondaryColor onPress={methods.handleSubmit(onSubmit, onError)}>
          Log in
        </Button>
      </FormProvider>
    </View>
  );
};

export default LoginForm;
