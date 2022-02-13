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
  position: relative;
  height: 120%;
  width: 100%;
  padding: 20px;
`;

export const BasicWord = styled.Text`
  position: relative;
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 0px #fff;
  padding-top: 25px;
  padding-bottom: 25px;

  ${flexCenter}
`;

export const TransWord = styled.ScrollView`
  width: 100%;
  margin: 0 auto;
  min-height: 55%;
`;
