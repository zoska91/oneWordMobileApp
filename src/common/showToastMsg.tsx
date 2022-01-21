import Toast from 'react-native-toast-message';

export const showToastMsg = (message: string, type: string) => {
  Toast.show({
    type,
    // text1: title,
    text2: message,
  });
};
