import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    backgroundColor: '#2e2757',
    width: '100%',
    paddingTop: '30px',
    paddingBottom: '30px',
    top: 180,
  },
});

export const Title = styled.Text`
  color: ${({ theme }) => theme.colorLight};
  text-transform: uppercase;
  text-align: center;
  z-index: 3;
  padding: 0 3px;
  margin: 0;
  font-size: 14px;
  font-size: 30px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  margin-bottom: 50;
`;

export const TopRounding = styled.View`
  position: absolute;
  top: 0;
  left: 50%;
  width: 30%;
  height: 100;
  border-radius: 100;
  background-color: #2e2757;
`;

export const InputsContainer = styled.View`
  margin-top: 40;
  margin-bottom: 50;
  width: '100%';
`;
