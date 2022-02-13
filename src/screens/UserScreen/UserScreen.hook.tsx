import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

import { useGlobalState } from '../../state';

import { checkIsBreakDay, getTodayWordAPI } from '../../db/API/words';
import { getUserSettingsAPI } from '../../db/API/settings';
import { INotification } from '../../types/api';
import { learnTypes } from '../../constants/constants';

const useUserScreen = () => {
  const [loading, setLoading] = useGlobalState('loading');

  const [learnType, setLearnType] = useGlobalState('learnType');
  const [closeLearn, setCloseLearn] = useGlobalState('closeLearn');

  // for reset
  const [, setIsAnswerShow] = useGlobalState('isAnswerShow');
  const [, setCurrentAnswer] = useGlobalState('currentAnswer');
  const [, setBlockShowAnswerButton] = useGlobalState('blockShowAnswerButton');
  const [, setBlockSubmit] = useGlobalState('blockSubmit');

  const [breakDay, setBreakDay] = useGlobalState('breakDay');
  const [todaysWord, setTodaysWordData] = useGlobalState('todaysWord');

  const getTodayWord = async () => {
    const word = await getTodayWordAPI();
    setTodaysWordData(word);
  };

  const getCurrentLearnType = async () => {
    const isBrakDay = await checkIsBreakDay();
    if (isBrakDay) {
      setBreakDay(true);
      return;
    }

    const { data } = await getUserSettingsAPI();
    // const times: { time: number; type: keyof typeof learnTypes }[] =
    // TODO problem with keyof typeof
    const times: { time: number; type: string }[] = data.notifications
      .map((el: INotification) => {
        const [h, min] = el.time.split(':');

        const notificationTime = Number(h) * 60 * 60 + Number(min);
        return { time: notificationTime, type: el.type };
      })
      .reverse();

    for (const noti of times) {
      const currentTime =
        Number(new Date().getHours()) * 60 * 60 + 1 + Number(new Date().getMinutes());

      if (currentTime > noti.time) {
        //  @ts-ignore
        setLearnType(learnTypes[noti.type]);
        break;
      }
    }
  };

  const resetValues = () => {
    setIsAnswerShow(false);
    setCurrentAnswer(null);
    setBlockShowAnswerButton(false);
    setBlockSubmit(false);
  };

  const init = () => {
    setLoading(true);
    getCurrentLearnType();
    getTodayWord();
    setLoading(false);
  };

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    setLoading(true);
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        init();
      }

      if (appState.current.match(/inactive|background/) && nextAppState === 'background') {
        resetValues();
      }

      appState.current = nextAppState;
    });
  }, []);

  useEffect(() => {
    init();
  }, []);

  return {
    closeLearn,
    todaysWord,
    learnType,
    loading,
    breakDay,
  };
};

export default useUserScreen;
