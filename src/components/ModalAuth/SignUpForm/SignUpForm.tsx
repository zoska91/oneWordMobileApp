import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { Dimensions, Animated } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from '../../atoms/Button';
import GoogleButton from '../../atoms/Inputs/GoogleButton';
import InputField from '../../atoms/Inputs/InputField';
import { TitleText } from '../../atoms/Title';
import useSignUpForm from './SignUpForm.hook';

import * as S from './SignUpForm.style';

interface SignFormProps {
  toogleUp: () => void;
  toggleSlide: any;
}

const SignUpForm: FC<SignFormProps> = ({ toogleUp, toggleSlide }) => {
  const windowHeight = Dimensions.get('window').height;

  const { methods, handleSubmit, onSubmit, googleSubmit, onError } = useSignUpForm();

  return (
    <Animated.View
      style={[
        S.Wrapper.wrapper,
        {
          transform: [{ translateY: toggleSlide }],
          height: windowHeight - 100,
        },
      ]}
    >
      <S.TopRounding
        style={{ transform: [{ scaleX: 3.5 }, { translateY: -50 }, { translateX: -15 }] }}
      />

      <FormProvider {...methods}>
        <KeyboardAwareScrollView>
          <S.TouchableOpacity onPress={toogleUp}>
            <TitleText light>Sign In</TitleText>
          </S.TouchableOpacity>

          <GoogleButton onPress={googleSubmit} />
          <S.InputsContainer>
            <InputField name='email' required light />
            <InputField name='password' required light secureTextEntry />
          </S.InputsContainer>

          <Button secondaryColor onPress={handleSubmit(onSubmit, onError)}>
            Sign in
          </Button>
        </KeyboardAwareScrollView>
      </FormProvider>
    </Animated.View>
  );
};

export default SignUpForm;
