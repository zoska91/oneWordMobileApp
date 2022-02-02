import styled from 'styled-components/native';

interface LabelType {
  big?: boolean;
  light?: boolean;
}
interface WrapperType {
  small?: boolean;
}

export const FieldContainer = styled.View<WrapperType>`
  width: 80%;
  margin: ${({ small }) => (small ? '10px auto 0px' : '10px auto')};
  padding: 0;
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

export const BackdropModal = styled.TouchableOpacity`
  position: absolute;
  padding: 50% 10% 20%;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContainer = styled.View`
  position: absolute;
  bottom: 20%;
  left: 10%;
  width: 80%;
  height: 350px;
  border-radius: 30px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
`;

export const SelectValue = styled.View`
  background-color: #f7f9fc;
  padding: 10px 16px;
  border-radius: 4px;
  border-color: #e4e9f2;
  min-height: 40px;
`;
