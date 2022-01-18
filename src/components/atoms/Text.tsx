import { FC } from 'react';
import styled from 'styled-components/native';

interface TextProps {
  small?: boolean;
}

const Wrapper = styled.Text<TextProps>`
  color: ${({ theme }) => theme.colorPrimary};
  /* font-family: 'Josefin Sans', sans-serif; */
  text-align: center;
  font-size: ${({ small }) => (small ? 10 : 20)};
  padding: 0 3px;
`;

const TextWrapper: FC<TextProps> = ({ small, children }) => {
  return (
    <Wrapper small={small} style={{ fontFamily: 'JosefinSans_400Regular' }}>
      {children}
    </Wrapper>
  );
};

export default TextWrapper;
