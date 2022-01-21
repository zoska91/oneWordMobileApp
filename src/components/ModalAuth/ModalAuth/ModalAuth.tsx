import { FC, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LoginForm from '../Login/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';

const Wrapper = styled.View`
  padding-top: 20px;
  position: relative;
`;

interface ModalAuthAuthProps {}

const ModalAuth: FC<ModalAuthAuthProps> = () => {
  const windowHeight = Dimensions.get('window').height;

  const toggleSlide = useRef(new Animated.Value(windowHeight * 0.6)).current;

  const toogleUp = () => {
    Animated.timing(toggleSlide, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const toggleDown = () => {
    Animated.timing(toggleSlide, {
      toValue: windowHeight * 0.6,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Wrapper
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <LoginForm toggleDown={toggleDown} />
      <SignUpForm toogleUp={toogleUp} toggleSlide={toggleSlide} />
    </Wrapper>
  );
};

export default ModalAuth;
