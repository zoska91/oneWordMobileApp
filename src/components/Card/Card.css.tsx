import styled from 'styled-components/native';

interface styleProps {
  windowWidth: number;
  windowHeight: number;
}

export const Bg = styled.View<styleProps>`
  position: absolute;
  top: 25%;
  left: ${({ windowWidth }) => (windowWidth - windowWidth * 0.7) / 2};
  border-radius: 30;
  overflow: hidden;
  height: ${({ windowHeight }) => windowHeight * 0.3};
  width: ${({ windowWidth }) => windowWidth * 0.7};
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.3);
`;
