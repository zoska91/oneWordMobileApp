export const learnTypes = {
  SHOW_WORD: 'showWord',
  INPUT: 'input',
  QUIZ: 'quiz',
  APPEAR: 'appear',
};

export const buttonTypes = {
  I_KNOW: 'iKnow',
  SUBMIT: 'submit',
  SHOW_ANSWER: 'showAnswer',
  GOOD_TO_KNOW: 'goodToKnow',
};

export const defaultSettingsData = {
  breakDay: '7',
  isBreak: true,
  isSummary: true,
  notifications: [
    { time: '12:42', type: 'SHOW_WORD' },
    { time: '14:42', type: 'QUIZ' },
    { time: '12:42', type: 'APPEAR' },
  ],
  selectLanguage: 'en',
  summaryDay: '1',
};
