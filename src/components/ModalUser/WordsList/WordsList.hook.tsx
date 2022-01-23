import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import { deleteWordAPI, getAllWordsOfCurrentUser, updateWordAPI } from '../../../db/API/words';
import { IInputsAddWord } from '../../../types/formTypes';
import { ITodayWord } from '../../../types/api';

const emptyWord = {
  basicWord: '',
  transWord: '',
  addLang: '',
  createdDate: '',
  status: 0,
  userId: '',
};

const useWordsList = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const [words, setWords] = useState<ITodayWord[]>([]);
  const [editingWord, setEditingWord] = useState<ITodayWord>(emptyWord);

  const statusDict = [t('statusDict.new'), t('statusDict.today'), t('statusDict.done')];

  const getAllWords = async () => {
    setLoading(true);

    try {
      const resp = await getAllWordsOfCurrentUser();
      setWords(_.cloneDeep(resp));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const deleteWord = async (wordId: string) => {
    setLoading(true);

    try {
      await deleteWordAPI(wordId);
      await getAllWords();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const saveEditingWord = async (wordId: string, values: IInputsAddWord) => {
    setLoading(true);
    try {
      const resp = await updateWordAPI(wordId, values);

      if (resp === 'success') {
        await getAllWords();
        setEditingWord(emptyWord);
        return 'success';
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
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
    setEditingWord,
    saveEditingWord,
    loading,
    t,
  };
};

export default useWordsList;
