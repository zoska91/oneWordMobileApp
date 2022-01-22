import { useState } from 'react';
import { SpeedDial } from 'react-native-elements';

import { RootTabScreenProps } from '../../../types';
import Spiner from '../../components/atoms/Spiner';
import { TitleText, TitleWrapper } from '../../components/atoms/Title';
import Card from '../../components/Card/Card';
import Layout from '../../Layout/Layout';
import useMenuBottom from './useMenuBottom';

import * as S from './UserScreen.css';
import useUserScreen from './UserScreen.hook';

export default function UserScreen({ navigation }: RootTabScreenProps<'User'>) {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

  const { redirect, closeLearn, todaysWord, learnType, loading, breakDay, setRedirect } =
    useUserScreen();
  const { actions } = useMenuBottom({ navigation });

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
