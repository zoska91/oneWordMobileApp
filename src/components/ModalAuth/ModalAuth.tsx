// import BottomLoginForm from 'components/auth/BottomLogin';
// import BottomSignForm from 'components/auth/BottomSign';
import { FC, useState } from 'react';
import styled from 'styled-components/native';
import LoginForm from './Login/LoginForm';

const Wrapper = styled.View`
  padding-top: 20px;
  position: relative;
`;

interface ModalAuthAuthProps {}

const ModalAuth: FC<ModalAuthAuthProps> = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  return (
    <Wrapper
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <LoginForm setIsSignUp={setIsSignUp} />
      {/* <BottomSignForm isSignUp={isSignUp} setIsSignUp={setIsSignUp} /> */}
    </Wrapper>
  );
};

export default ModalAuth;
