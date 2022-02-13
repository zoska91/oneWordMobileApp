import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useIsFocused } from '@react-navigation/native';

import { RootTabScreenProps } from '../../../types';
import { TitleWrapper, TitleText } from '../../components/atoms/Title';
import Card from '../../components/Card/Card';
import Layout from '../../Layout/Layout';
import TextWrapper from '../../components/atoms/Text';
import Button from '../../components/atoms/Button';

import * as S from './HomePage.css';
import { getCurrentUser } from '../../db/API/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const { t } = useTranslation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, user => {
      if (user?.uid) navigation.navigate('User');
    });

    if (isFocused) {
      const user = getCurrentUser();
      if (user?.userId) navigation.navigate('User');
    }
  }, [isFocused]);

  return (
    <S.Wrapper>
      <Layout>
        <TitleWrapper>
          <TitleText small>only</TitleText>
          <TitleText>one Word</TitleText>
          <TitleText small>a day</TitleText>
        </TitleWrapper>
        <Card>
          <S.WelcomeCard>
            <TextWrapper>{t('welcome')}</TextWrapper>
            <TextWrapper>{t('welcome2')}</TextWrapper>
            <TextWrapper>{t('welcome3')}</TextWrapper>
            <TextWrapper>{t('welcome4')}</TextWrapper>
            <Button
              dark
              onPress={() =>
                navigation.navigate('Modal', {
                  screen: 'Modal',
                  params: {
                    type: 'auth',
                  },
                })
              }
            >
              {t('welcome5')}
            </Button>
          </S.WelcomeCard>
        </Card>
        {/* <Button title='noti' onPress={triggerNotification} /> */}
      </Layout>
    </S.Wrapper>
  );
}
