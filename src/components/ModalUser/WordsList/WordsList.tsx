import { FC } from 'react';
import { FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Input } from '@ui-kitten/components';

import Spiner from '../../../components/atoms/Spiner';
import { ITodayWord } from '../../../types/api';
import useWordsList from './WordsList.hook';
import TextWrapper from '../../atoms/Text';
import { TitleText } from '../../atoms/Title';
import EditWordForm from './EditWordForm';

import * as S from './WordsList.css';
import InputField from '../../atoms/Inputs/InputField';

interface WordsListProps {}

const WordsList: FC<WordsListProps> = () => {
  const {
    words,
    deleteWord,
    statusDict,
    setEditingWord,
    editingWord,
    saveEditingWord,
    loading,
    t,
    searchValue,
    setSearchValue,
  } = useWordsList();

  const renderSingleWord = ({ item, index }: { item: ITodayWord; index: number }) => (
    <LinearGradient
      colors={
        index % 2 === 0
          ? [
              'rgba(89, 131, 252, 0)',
              'rgba(46, 39, 87, 0.1)',
              'rgba(46, 39, 87, 0.1)',
              'rgba(89, 131, 252, 0)',
              'rgba(89, 131, 252, 0)',
            ]
          : ['', '', '', '', '']
      }
      locations={[0, 0.2, 0.5, 0.8, 1]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <S.SingleWord key={item.wordId}>
        <S.DataWord status={item.status}>
          <TextWrapper border>{item.basicWord}</TextWrapper>
          <TextWrapper>{item.transWord}</TextWrapper>
          <TextWrapper color={item.status}>{statusDict[item.status]}</TextWrapper>
        </S.DataWord>
        <S.ButtonsContainer>
          <AntDesign
            name='edit'
            size={32}
            color='#2e2757'
            style={{ marginRight: 20 }}
            onPress={() => setEditingWord(item)}
          />
          <MaterialIcons
            name='delete-outline'
            size={32}
            color='#2e2757'
            onPress={() => (item.wordId ? deleteWord(item.wordId) : null)}
          />
        </S.ButtonsContainer>
      </S.SingleWord>
    </LinearGradient>
  );

  return (
    <S.Wrapper>
      <TitleText> {t('form.wordsListTitle')}</TitleText>

      <Input
        placeholder={t(`searchWordInput`)}
        value={searchValue}
        onChangeText={value => setSearchValue(value)}
        style={{ marginHorizontal: 30, marginTop: 20 }}
      />
      <EditWordForm data={editingWord} saveEditingWord={saveEditingWord} loading={loading} />
      <FlatList
        style={{ paddingTop: 30 }}
        data={words}
        renderItem={renderSingleWord}
        keyExtractor={item => item.basicWord}
      />
      {!editingWord && loading && <Spiner />}
    </S.Wrapper>
  );
};

export default WordsList;
