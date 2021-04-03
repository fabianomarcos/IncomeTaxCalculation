import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

import GlobalStyle from './styles/global';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <Routes />
        </Router>
      </Provider>
    </AppProvider>
  </>
);

export default App;

// showBtn={store.getState().employee.isUpdateRoute === ''
