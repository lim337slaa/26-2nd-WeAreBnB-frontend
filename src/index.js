import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import 'react-dates/initialize';
import 'rheostat/initialize';
import 'rheostat/css/rheostat.css';
import 'react-dates/lib/css/_datepicker.css';

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import cssInterface from 'react-with-styles-interface-css';
import RheostatDefaultTheme from 'rheostat/lib/themes/DefaultTheme';
import ReactDatesDefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(cssInterface);
ThemedStyleSheet.registerTheme({
  ...RheostatDefaultTheme,
  ...ReactDatesDefaultTheme,
});

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
