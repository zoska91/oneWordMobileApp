import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useGlobalState } from '../../state';

import Button from '../atoms/Button';

import * as S from './Views.css';

interface AppearViewProps {}

const AppearView: FC<AppearViewProps> = () => {
  const { t } = useTranslation();

  const [todaysWord] = useGlobalState('todaysWord');
  const [isAnswerShow, setIsAnswerShow] = useGlobalState('isAnswerShow');

  return (
    <>
      {isAnswerShow ? (
        <S.Word
          style={{
            fontFamily: 'JosefinSans_400Regular',
          }}
        >
          {todaysWord?.transWord}
        </S.Word>
      ) : (
        <Button onPress={() => setIsAnswerShow(!isAnswerShow)} dark>
          {t('showTranslate')}
        </Button>
      )}
    </>
  );
};

export default AppearView;
