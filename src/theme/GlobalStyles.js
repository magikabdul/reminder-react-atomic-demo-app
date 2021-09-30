import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Noto Sans Display', sans-serif;
  }
`;

export default GlobalStyles;
