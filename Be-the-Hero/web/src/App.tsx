import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyles from './styles/global';

function App() {
  const [theme, setTheme] = useState(light);
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Routes toggleTheme={toggleTheme} />
      <GlobalStyles />
    </ThemeProvider>    
  );
}

export default App;

// () => {
//   setTheme(theme.title === 'light' ? dark : light);
// }; 
