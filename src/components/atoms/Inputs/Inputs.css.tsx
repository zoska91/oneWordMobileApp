import styled from 'styled-components/native';

interface LabelType {
  big?: boolean;
  light?: boolean;
}

export const FieldContainer = styled.View`
  width: 80%;
  margin: 10px auto;
`;

export const ErrorText = styled.Text`
  font-size: 12px;
  color: #a50000;
`;

export const Desc = styled.Text<LabelType>`
  font-size: 12px;
  color: ${({ theme, light }) => (light ? '#fff' : theme.colorPrimary)};
  opacity: 0.7;
  margin-bottom: 7px;
`;

export const FormLabel = styled.Text<LabelType>`
  color: ${({ theme, light }) => (light ? '#fff' : theme.colorPrimary)};
  text-transform: uppercase;

  font-size: ${({ big }) => (big ? '20px' : '16px')};

  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;
