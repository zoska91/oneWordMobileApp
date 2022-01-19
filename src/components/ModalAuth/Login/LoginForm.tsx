import { Dispatch, FC, SetStateAction } from 'react';
import { FormProvider } from 'react-hook-form';

import InputField from '../../atoms/Inputs/InputField';
import GoogleButton from '../../atoms/Inputs/GoogleButton';
import useAuth from './LoginForm.hook';
import Button from '../../atoms/Button';
import { TitleText, TitleWrapper } from '../../atoms/Title';
import { TouchableOpacity, View } from 'react-native';

interface LoginFormProps {
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}

const LoginForm: FC<LoginFormProps> = ({ setIsSignUp }) => {
  const { methods, handleSubmit, onSubmit, googleSubmit, onError } = useAuth();

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
        <TouchableOpacity style={{ marginBottom: 50 }} onPress={() => setIsSignUp(false)}>
          <TitleText>Login</TitleText>
        </TouchableOpacity>
        <GoogleButton onPress={googleSubmit} />

        <View style={{ marginTop: 40, marginBottom: 50, width: '100%' }}>
          <InputField name='email' required />
          <InputField name='password' required />
        </View>

        <Button secondaryColor onPress={methods.handleSubmit(onSubmit, onError)}>
          Log in
        </Button>
      </FormProvider>
    </View>
  );
};

export default LoginForm;
