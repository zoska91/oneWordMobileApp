import { FC } from 'react';
import { useGlobalState } from '../../state';

import * as S from './Views.css';

interface ShowWordViewProps {}

const ShowWordView: FC<ShowWordViewProps> = () => {
  const [todaysWord] = useGlobalState('todaysWord');

  return (
    <S.Word
      style={{
        fontFamily: 'JosefinSans_400Regular',
      }}
    >
      {todaysWord?.transWord}
    </S.Word>
  );
};

export default ShowWordView;
