import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './theme/GlobalStyles';
import theme from './theme/MainTheme';

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <div style={{ color: theme.color.primary }}>hello</div>
    </ThemeProvider>
  </>
);

export default App;
