import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/MainTheme';
import GlobalStyles from 'theme/GlobalStyles';
import HomePage from 'pages/HomePage/HomePage';

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  </>
);

export default App;
