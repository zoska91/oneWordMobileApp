import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import Img from '../../../assets/img/Google__G__Logo';

interface GoogleButtonProps {
  onPress: () => void;
}

const Wrapper = styled.TouchableOpacity`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 20px 20px 0;
  max-width: 90%;

  border: 2px solid ${({ theme }) => theme.colorPrimary};

  span {
    font-family: 'Josefin Sans', sans-serif;
    margin-right: auto;
    font-size: 1.3rem;
  }
`;

const Text = styled.Text`
  margin-left: 20px;
  font-size: 25px;
  color: ${({ theme }) => theme.colorPrimary};
  text-shadow: 1px 1px 5px #ffffffae;
`;

const GoogleButton: FC<GoogleButtonProps> = ({ onPress }) => {
  const { t } = useTranslation();

  return (
    <Wrapper
      onPress={onPress}
      style={{
        shadowColor: '#2e2757',
        shadowOffset: { width: 7, height: 5 },
        shadowOpacity: 15,
        shadowRadius: 7,
      }}
    >
      <Img />
      <Text style={{ fontFamily: 'JosefinSans_700Bold' }}>{t(`buttons.withGoogle`)}</Text>
    </Wrapper>
  );
};

export default GoogleButton;
