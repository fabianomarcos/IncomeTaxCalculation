import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

import GlobalStyle from './styles/global';
import Header from './components/Header';

const App: React.FC = () => (
  <>
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes />
      </Router>
    </Provider>
  </>
);

export default App;
