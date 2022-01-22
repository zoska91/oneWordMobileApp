import { FC } from 'react';
import { FlatList, Text } from 'react-native';

import Spiner from '../../../components/atoms/Spiner';

import * as S from './WordsList.css';
import useWordsList from './WordsList.hook';
// import ModalEditWord from './ModalEditWord';
// import EditWordForm from './EditWordForm';

interface WordsListProps {
  type?: string;
}

const WordsList: FC<WordsListProps> = ({ type }) => {
  const { words, deleteWord, statusDict, editWord, editingWord, saveEditingWord } = useWordsList();

  const renderSingleWord = ({ item }) => (
    <S.SingleWord key={item.wordId}>
      <S.DataWord status={item.status}>
        <Text>{item.basicWord}</Text>
        <Text>{item.transWord}</Text>
        <Text>{statusDict[item.status]}</Text>
      </S.DataWord>
      {/* <div> */}
      {/* <EditIcon onClick={() => editWord(el)} />
        <DeleteIcon
          onClick={() => (el.wordId ? deleteWord(el.wordId) : null)}
        /> */}
      {/* </div> */}
    </S.SingleWord>
  );

  return (
    <>
      {words.length === 0 ? (
        <Spiner />
      ) : (
        <S.Wrapper>
          {/* {type === 'mobile' && editingWord ? (
            <EditWordForm
              onClose={() => editWord(null)}
              data={editingWord}
              saveEditingWord={saveEditingWord}
            />
          ) : ( */}
          <FlatList
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
