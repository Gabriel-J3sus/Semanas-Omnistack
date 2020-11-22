import React, { useCallback } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import Routes from './routes';

import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';
import GlobalStyles from './styles/global';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(
    () => {
      setTheme(theme.title === 'light' ? dark : light);
    }, [setTheme, theme.title]
  )
  
  return (
    <ThemeProvider theme={theme}>
      <Routes toggleTheme={toggleTheme} />
      <GlobalStyles />
    </ThemeProvider>    
  );
}

export default App;