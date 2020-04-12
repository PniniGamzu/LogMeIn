import { render } from 'react-dom';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './constants/styled-theme';
import Routes from './pages/routes';
import { store } from './redux/store';

export const history = createBrowserHistory();

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <GlobalStyle />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
