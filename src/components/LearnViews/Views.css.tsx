import styled from 'styled-components/native';

export const WordAnswerInput = styled.TextInput`
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  width: 80%;
  min-width: 250px;
  min-height: 30px;
  font-size: 24px;
  border-bottom-width: 5px;
  border-bottom-color: ${({ theme }) => theme.colorPrimary};
  text-align: center;
  color: ${({ theme }) => theme.colorPrimary};
  letter-spacing: 1px;
  margin-bottom: 40px;
`;

export const Word = styled.Text`
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 26px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
`;

export const SingleAnswerWrapper = styled.FlatList`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SingleAnswer = styled.TouchableOpacity<{ active: Boolean; isCorrect: boolean }>`
  background-color: ${({ theme, active }) =>
    active ? theme.colorPrimary : 'rgba(255, 255, 255, 0.26)'};
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 10px 5%;
  width: 90%;
  border-width: 2px;
  border-color: ${({ isCorrect, theme }) => (isCorrect ? theme.correctAnsw : 'transparent')};
`;

export const SingleAnswerText = styled.Text<{ active: Boolean }>`
  color: ${({ theme, active }) => (!active ? theme.colorPrimary : '#eee')};
  font-size: 20px;
`;
