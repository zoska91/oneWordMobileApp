import styled from 'styled-components/native';
import { View } from 'react-native';
import { device } from '../../styles/devices';

export const WelcomeCard = styled.View`
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.colorPrimary};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;

  @media ${device.tablet} {
    width: 80vw;
    min-width: 280px;
    height: 55vh;
    padding: 20px;
  }
`;

export const MenuBottomWrapper = styled.View`
  height: 80vh;

  @media (max-height: 650px) {
    height: 90vh;
  }
`;
