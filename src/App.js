import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/MainTheme';
import GlobalStyles from 'theme/GlobalStyles';

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <div style={{ color: theme.color.primary }}>hello</div>
    </ThemeProvider>
  </>
);

export default App;
