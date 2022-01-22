import { FC } from 'react';
import { FlatList } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Spiner from '../../../components/atoms/Spiner';
import { ITodayWord } from '../../../types/api';
import useWordsList from './WordsList.hook';
import TextWrapper from '../../atoms/Text';

import * as S from './WordsList.css';
import { TitleText } from '../../atoms/Title';
import { LinearGradient } from 'expo-linear-gradient';
// import ModalEditWord from './ModalEditWord';
// import EditWordForm from './EditWordForm';

interface WordsListProps {}

const WordsList: FC<WordsListProps> = () => {
  const { words, deleteWord, statusDict, editWord, editingWord, saveEditingWord, t } =
    useWordsList();

  const renderSingleWord = ({ item, index }: { item: ITodayWord; index: number }) => (
    <LinearGradient
      colors={
        index % 2 === 0
          ? [
              'rgba(89, 131, 252, 0)',
              'rgba(46, 39, 87, 0.1)',
              'rgba(46, 39, 87, 0.1)',
              'rgba(89, 131, 252, 0)',
            ]
          : []
      }
      locations={[0, 0.2, 0.5, 0.8, 1]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <S.SingleWord key={item.wordId}>
        <S.DataWord status={item.status}>
          <TextWrapper>{item.basicWord}</TextWrapper>
          <TextWrapper>{item.transWord}</TextWrapper>
          <TextWrapper color={item.status}>{statusDict[item.status]}</TextWrapper>
        </S.DataWord>
        <S.ButtonsContainer>
          <AntDesign name='edit' size={32} color='#2e2757' style={{ marginRight: 20 }} />
          <MaterialIcons name='delete-outline' size={32} color='#2e2757' />
        </S.ButtonsContainer>
      </S.SingleWord>
    </LinearGradient>
  );

  return (
    <>
      {words.length === 0 ? (
        <Spiner />
      ) : (
        <S.Wrapper>
          <TitleText> {t('form.wordsListTitle')}</TitleText>
          {/* {type === 'mobile' && editingWord ? (
            <EditWordForm
              onClose={() => editWord(null)}
              data={editingWord}
              saveEditingWord={saveEditingWord}
            />
          ) : ( */}
          <FlatList
            style={{ paddingTop: 30 }}
            data={words}
            renderItem={renderSingleWord}
            keyExtractor={item => item.basicWord}
          />
          {/* )} */}
        </S.Wrapper>
      )}
    </>
  );
};

export default WordsList;
