import { FC } from 'react';
import styled from 'styled-components/native';

interface TextProps {
  small?: boolean;
  color?: number;
  children: JSX.Element | JSX.Element[] | string;
}

const Wrapper = styled.Text<TextProps>`
  color: ${({ theme, color }) =>
    color !== undefined ? theme.status[color] : theme.colorPrimary};
  text-align: center;
  font-size: ${({ small }) => (small ? '10px' : '20px')};
  padding: 1px 3px;
  text-align: left;
`;

const TextWrapper: FC<TextProps> = ({ small, children, color }) => {
  return (
    <Wrapper
      small={small}
      color={color}
      style={{ fontFamily: 'JosefinSans_400Regular' }}
    >
      {children}
    </Wrapper>
  );
};

export default TextWrapper;
