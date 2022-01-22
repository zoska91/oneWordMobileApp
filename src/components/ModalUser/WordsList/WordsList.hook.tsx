import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { deleteWordAPI, getAllWordsOfCurrentUser, updateWordAPI } from '../../../db/API/words';
import { IInputsAddWord } from '../../../types/formTypes';
import { ITodayWord } from '../../../types/api';

const useWordsList = () => {
  const { t } = useTranslation();
  const [words, setWords] = useState<ITodayWord[]>([]);
  const [editingWord, setEditingWord] = useState<null | ITodayWord>(null);

  const statusDict = [t('statusDict.new'), t('statusDict.today'), t('statusDict.done')];

  const getAllWords = async () => {
    const resp = await getAllWordsOfCurrentUser();
    setWords(_.cloneDeep(resp));
  };

  const deleteWord = async (wordId: string) => {
    await deleteWordAPI(wordId);
    await getAllWords();
  };

  const editWord = (word: ITodayWord | null) => {
    setEditingWord(word);
    console.log(word);
  };

  const saveEditingWord = async (wordId: string, values: IInputsAddWord) => {
    await updateWordAPI(wordId, values);
    await getAllWords();
  };

  useEffect(() => {
    getAllWords();

    return () => {
      setWords([]);
    };
  }, []);

  return {
    words: _.cloneDeep(words),
    deleteWord,
    statusDict,
    editingWord,
    editWord,
    saveEditingWord,
    t,
  };
};

export default useWordsList;
