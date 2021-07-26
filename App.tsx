import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import {
  useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold,
} from '@expo-google-fonts/inter';

import Routes from './src/routes';
import theme from './src/global/theme';
import { BoardProvider } from './src/hooks/Board';

const Taskboard: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <BoardProvider>
        <Routes />
      </BoardProvider>
    </ThemeProvider>
  );
};

export default Taskboard;
