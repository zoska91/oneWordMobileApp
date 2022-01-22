import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorPrimary: string;
    colorSecondary: string;
    colorLight: string;

    status: string[];
  }
}

export const theme: DefaultTheme = {
  colorPrimary: '#2e2757',
  colorSecondary: '#8c3a68',
  colorLight: '#e5e6ef',

  status: ['#7d90f2', '#8c3a68', '#009300'],
};
