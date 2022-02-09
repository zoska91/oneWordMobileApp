import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import Toast from 'react-native-toast-message';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { theme } from './src/styles/theme';
import './src/translations/i18n';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import useNotifications from './src/notifications/useNotifications';

export default function App() {
  const { isLoadingComplete, fontsLoaded } = useCachedResources();
  const colorScheme = useColorScheme();

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
