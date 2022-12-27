import { useState } from 'react';
import { SpeedDial } from 'react-native-elements';

import Spiner from '../../components/atoms/Spiner';
import { TitleText, TitleWrapper } from '../../components/atoms/Title';
import Card from '../../components/Card/Card';
import AppearView from '../../components/LearnViews/AppearView';
import InputView from '../../components/LearnViews/InputView';
import QuizView from '../../components/LearnViews/QuizView';
import ShowWordView from '../../components/LearnViews/ShowWordView';
import { learnTypes } from '../../constants/constants';
import Layout from '../../Layout/Layout';
import useMenuBottom from './useMenuBottom';

import * as S from './UserScreen.css';
import useUserScreen from './UserScreen.hook';

export default function UserScreen() {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

  const { closeLearn, todaysWord, learnType, loading, breakDay } = useUserScreen();

  const { actions } = useMenuBottom();

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
              <S.BasicWord style={{ fontFamily: 'JosefinSans_700Bold' }}>
                {todaysWord?.basicWord}
              </S.BasicWord>

              <S.TransWord>
                {learnType === learnTypes.INPUT && <InputView />}
                {learnType === learnTypes.SHOW_WORD && <ShowWordView />}
                {learnType === learnTypes.APPEAR && <AppearView />}
                {learnType === learnTypes.QUIZ && <QuizView />}
              </S.TransWord>
            </S.WordCard>
          </Card>
        )}
      </Layout>
      <SpeedDial
        color='#2e2757'
        isOpen={isOpenMenu}
        icon={{ name: 'menu', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setOpenMenu(true)}
        onClose={() => setOpenMenu(false)}
      >
        {actions.map(el => (
          <SpeedDial.Action
            titleStyle={{ textTransform: 'uppercase' }}
            key={el.name}
            color='#aaa'
            icon={el.icon}
            title={el.name}
            onPress={() => {
              setOpenMenu(false);
              el.onClick();
            }}
          />
        ))}
      </SpeedDial>
    </S.Wrapper>
  );
}
