import { FC } from 'react';
import styled from 'styled-components/native';
import { device } from '../../styles/devices';

import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold,
  JosefinSans_700Bold_Italic,
} from '@expo-google-fonts/josefin-sans';

interface TitleTextProps {
  small?: boolean;
}

interface TitleWrapperProps {
  small?: boolean;
}

interface styledProps {
  small?: boolean;
}

export const Wrapper = styled.View<styledProps>`
  position: absolute;
  top: 8%;
  left: 0;
  right: 0;
  z-index: 3;
`;

export const Text = styled.Text<styledProps>`
  color: ${({ theme }) => theme.colorPrimary};
  text-align: center;
  font-size: ${({ small }) => (small ? 30 : 45)};
  padding: 0 3px;
  text-transform: ${({ small }) => (small ? 'lowercase' : 'uppercase')};
  font-style: ${({ small }) => (small ? 'normal' : 'italic')};
`;

const TitleText: FC<TitleTextProps> = ({ small, children }) => {
  return (
    <Text
      small={small}
      style={{ fontFamily: small ? 'JosefinSans_400Regular' : 'JosefinSans_700Bold_Italic' }}
    >
      {children}
    </Text>
  );
};

const TitleWrapper: FC<TitleWrapperProps> = ({ small, children }) => {
  return <Wrapper small={small}>{children}</Wrapper>;
};

export { TitleWrapper, TitleText };
