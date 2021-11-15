import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routers';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
