import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { showToastMsg } from '../../common/showToastMsg';
import { useGlobalState } from '../../state';
import { answerWord } from '../../types/state';
import Button from '../atoms/Button';

import Spiner from '../atoms/Spiner';

import * as S from './Views.css';

interface QuizViewProps {}

const colors = ['#8d6e8f', '#6d3796', '#5c1ca5'];

const QuizView: FC<QuizViewProps> = () => {
  const { t } = useTranslation();

  const [todaysWord] = useGlobalState('todaysWord');
  const [currentAnswer, setCurrentAnswer] = useGlobalState('currentAnswer');
  const [blockShowAnswerButton, setBlockShowAnswerButton] = useGlobalState('blockShowAnswerButton');
  const [, setIsAnswerShow] = useGlobalState('isAnswerShow');
  const [isCorrect, setIsCorrect] = useState(false);

  const renderSingleAnswer = ({ item, index }: { item: answerWord; index: number }) => (
    <S.SingleAnswer
      key={`${item.id}-${index}`}
      active={item.id === currentAnswer}
      isCorrect={isCorrect && item.id === todaysWord.wordId}
      style={{
        shadowColor: colors[index],
        shadowOffset: { width: 3, height: 10 },
        shadowOpacity: 5,
        shadowRadius: 7,
      }}
      onPress={() => setCurrentAnswer(item.id)}
    >
      <S.SingleAnswerText
        active={item.id === currentAnswer}
        style={{
          fontFamily: 'JosefinSans_400Regular',
        }}
      >
        {item.text}
      </S.SingleAnswerText>
    </S.SingleAnswer>
  );

  const showAnswer = () => {
    const { id } = todaysWord.correctAnswer;
    let correctAnswer = id;

    if (currentAnswer === correctAnswer) {
      const msg = t('notifications.correctAnswer');
      showToastMsg(msg, 'success');
      setIsCorrect(true);
      return;
    }

    setIsAnswerShow(true);
    const msg = t('notifications.dontGiveUp');
    showToastMsg(msg, 'info');
    setBlockShowAnswerButton(true);
  };

  const data: answerWord[] = [
    ...todaysWord?.randomWords,
    {
      id: todaysWord.wordId,
      text: todaysWord.transWord,
    },
  ];

  return (
    <>
      {todaysWord?.randomWords?.length < 1 ? (
        <Spiner />
      ) : (
        <>
          <S.SingleAnswerWrapper
            data={data}
            // @ts-ignore
            renderItem={renderSingleAnswer}
            // @ts-ignore
            keyExtractor={item => item.id}
          />

          <Button onPress={showAnswer} secondaryColor disabled={blockShowAnswerButton}>
            {t('showAnswer')}
          </Button>
        </>
      )}
    </>
  );
};

export default QuizView;
