import { useTranslation } from 'react-i18next';
import { RootTabScreenProps } from '../../../types';
import Button from '../../components/atoms/Button';
import Spiner from '../../components/atoms/Spiner';
import TextWrapper from '../../components/atoms/Text';
import { TitleText, TitleWrapper } from '../../components/atoms/Title';
import Card from '../../components/Card/Card';
import Layout from '../../Layout/Layout';

import * as S from './UserScreen.css';
import useUserScreen from './UserScreen.hook';

export default function UserScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const { t } = useTranslation();

  const { redirect, closeLearn, todaysWord, learnType, loading, breakDay, setRedirect } =
    useUserScreen();

  if (loading) return <Spiner />;

  return (
    <S.Wrapper>
      <Layout>
        <TitleWrapper>
          <TitleText small>only</TitleText>
          <TitleText>one Word</TitleText>
          <TitleText small>a day</TitleText>
        </TitleWrapper>
        {!closeLearn && !breakDay && (
          <Card upper>
            <S.WordCard>
              <S.BasicWord>{todaysWord?.basicWord}</S.BasicWord>
              <S.TransWord>
                {/* {learnType === learnTypes.INPUT && <InputView />}
                  {learnType === learnTypes.SHOW_WORD && <ShowWordView />}
                  {learnType === learnTypes.APPEAR && <AppearView />}
                  {learnType === learnTypes.QUIZ && <QuizView />} */}
              </S.TransWord>
            </S.WordCard>
          </Card>
        )}
        {/* {!breakDay ? <ButtonsSection /> : <BreakDayView />} */}
      </Layout>
    </S.Wrapper>
  );
}
