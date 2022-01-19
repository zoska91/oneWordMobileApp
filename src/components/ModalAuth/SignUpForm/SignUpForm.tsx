import { Dispatch, FC, SetStateAction, useRef } from 'react';
import { FormProvider } from 'react-hook-form';
import { Dimensions, Animated } from 'react-native';

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

  const { methods, handleSubmit, onSubmit, googleSubmit } = useSignUpForm();

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
        <S.TouchableOpacity onPress={toogleUp}>
          <TitleText light>Sign In</TitleText>
        </S.TouchableOpacity>

        <GoogleButton onPress={googleSubmit} />
        <S.InputsContainer>
          <InputField name='email' required light />
          <InputField name='password' required type='password' light />
        </S.InputsContainer>

        <Button secondaryColor>Sign in</Button>
      </FormProvider>
    </Animated.View>
  );
};

export default SignUpForm;
