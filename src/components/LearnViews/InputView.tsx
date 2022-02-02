import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useGlobalState } from '../../state';
import { Keyboard } from 'react-native';

import * as S from './Views.css';
import Button from '../atoms/Button';
import { showToastMsg } from '../../common/showToastMsg';

interface InputViewProps {}

const InputView: FC<InputViewProps> = () => {
  const { t } = useTranslation();
  const [currentAnswer, setCurrentAnswer] = useGlobalState('currentAnswer');
  const [todaysWord] = useGlobalState('todaysWord');
  const [isAnswerShow] = useGlobalState('isAnswerShow');

  const submit = () => {
    const { text, id } = todaysWord.correctAnswer;
    let correctAnswer = text.toUpperCase();
    let msg = '';

    if (currentAnswer === correctAnswer) {
      msg = t('notifications.correctAnswer');
      showToastMsg(msg, 'success');
      return;
    }

    msg = t('notifications.dontGiveUp');
    showToastMsg(msg, 'info');
  };

  return (
    <>
      {isAnswerShow ? (
        <S.Word>{todaysWord.transWord}</S.Word>
      ) : (
        <>
          <S.WordAnswerInput
            placeholder={t('yourAnswer')}
            value={typeof currentAnswer === 'string' ? currentAnswer : ''}
            onChangeText={value => setCurrentAnswer(value.toUpperCase())}
            multiline
            enablesReturnKeyAutomatically
            onSubmitEditing={() => Keyboard.dismiss()}
            numberOfLines={3}
            style={{
              shadowColor: '#ffffffda',
              shadowOffset: { width: 5, height: 5 },
              shadowOpacity: 20,
              shadowRadius: 3,
              fontFamily: 'JosefinSans_400Regular',
            }}
          />

          <Button onPress={() => submit()} secondaryColor disabled={!currentAnswer}>
            {t('submit')}
          </Button>
        </>
      )}
    </>
  );
};

export default InputView;
