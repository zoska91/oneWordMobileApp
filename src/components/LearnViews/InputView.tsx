import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useGlobalState } from '../../state';
import { Keyboard } from 'react-native';

import * as S from './Views.css';
import Button from '../atoms/Button';
import { showToastMsg } from '../../common/showToastMsg';
import { Text } from '../atoms/Title';

interface InputViewProps {}

const InputView: FC<InputViewProps> = () => {
  const { t } = useTranslation();
  const [currentAnswer, setCurrentAnswer] = useGlobalState('currentAnswer');
  const [todaysWord] = useGlobalState('todaysWord');
  const [isAnswerShow, setIsShowAnswer] = useGlobalState('isAnswerShow');

  const submit = () => {
    const { text, id } = todaysWord.correctAnswer;

    let correctAnswer = text
      .toUpperCase()
      .replace(/[^\w\s]|_/g, '')
      .replace(/\s+/g, ' ')
      .replace(/\r?\n|\r/g, ' ')
      .trim();

    const currentAnswerToSubmit =
      typeof currentAnswer === 'string' &&
      currentAnswer
        .replace(/[^\w\s]|_/g, '')
        .replace(/\s+/g, ' ')
        .replace(/\r?\n|\r/g, ' ')
        .trim();
    let msg = '';

    if (currentAnswerToSubmit === correctAnswer) {
      msg = t('notifications.correctAnswer');
      showToastMsg(msg, 'success');
      return;
    }

    msg = t('notifications.dontGiveUp');
    showToastMsg(msg, 'info');
    setIsShowAnswer(true);
  };

  return (
    <>
      <S.WordAnswerInput
        placeholder={t('yourAnswer')}
        value={typeof currentAnswer === 'string' ? currentAnswer : ''}
        onChangeText={value => setCurrentAnswer(value.toUpperCase())}
        multiline
        enablesReturnKeyAutomatically
        onSubmitEditing={() => Keyboard.dismiss()}
        numberOfLines={3}
        returnKeyType='search'
        autoFocus={true}
        clearButtonMode='while-editing'
      />
      {isAnswerShow ? (
        <Text small style={{ fontSize: 18, color: '#009300' }}>
          {todaysWord.transWord}
        </Text>
      ) : (
        <Button onPress={() => submit()} secondaryColor disabled={!currentAnswer}>
          {t('submit')}
        </Button>
      )}
    </>
  );
};

export default InputView;
