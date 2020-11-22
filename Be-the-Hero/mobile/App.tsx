import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from './src/styles/themes/light';
import { dark } from './src/styles/themes/dark';

import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <ThemeProvider theme={light}>
      <Routes />
    </ThemeProvider>
  );
}