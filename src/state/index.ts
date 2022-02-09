import { createGlobalState } from 'react-hooks-global-state';
import { Istate } from './../types/state';

const inisialState: Istate = {
  blockSubmit: false,
  blockShowAnswerButton: false,
  learnType: '',
  currentAnswer: null,
  isAnswerShow: false,
  todaysWord: {
    addLang: '',
    userId: '',
    wordId: '',
    status: 0,
    basicWord: '',
    transWord: '',
    correctAnswer: {
      id: '',
      text: '',
    },
    randomWords: [],
  },
  closeLearn: false,
  breakDay: false,
  loading: false,
};

const { useGlobalState, setGlobalState } = createGlobalState(inisialState);

export { useGlobalState, setGlobalState };
