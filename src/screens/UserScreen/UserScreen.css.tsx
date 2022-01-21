import styled from 'styled-components/native';
import { flexCenter } from '../../styles/mixins';

export const Wrapper = styled.View`
  position: relative;
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WordCard = styled.View`
  height: 100%;
  width: 100%;
  padding: 0 30px;
`;

export const BasicWord = styled.Text`
  position: relative;
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin: 0;
  min-height: 30%;
  text-shadow: 2px 2px 0px #fff;

  ${flexCenter}
`;

export const TransWord = styled.View`
  width: 100%;
  min-height: 50%;
  margin: 0 auto;
  flex: 1 0 auto;

  ${flexCenter}
`;

export const MenuBottomWrapper = styled.View`
  height: 94%;
`;