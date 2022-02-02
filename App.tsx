import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import Toast from 'react-native-toast-message';
import { LogBox } from 'react-native';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { theme } from './src/styles/theme';
import './src/translations/i18n';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

export default function App() {
  const { isLoadingComplete, fontsLoaded } = useCachedResources();
  const colorScheme = useColorScheme();

  LogBox.ignoreLogs(['Warning: ...']);

  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
            <Toast />
          </ApplicationProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
