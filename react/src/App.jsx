import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './App.scss';

import AsideMenu from './compontents/AsideMenu/AsideMenu';
import Content from './compontents/Content/Content';
import Footer from './compontents/Footer/Footer';
import Header from './compontents/Header/Header';
import StoreProvider from './store/StoreProvider';

const newHistory = createBrowserHistory();

const App = () => {
  return (
    <StoreProvider>
      <Router history={newHistory}>
        <Header />
        <div className='content-wrapper'>
          <AsideMenu />
          <Content />
        </div>
      </Router>
      <Footer />
    </StoreProvider>
  );
};

export default App;
