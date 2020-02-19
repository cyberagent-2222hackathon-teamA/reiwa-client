import React from 'react';
import { Router } from 'react-router';
import { CookiesProvider } from 'react-cookie';
import { history } from '../lib/plugins/history';
import { Routes } from '../lib/routes';
import { TopNavi } from './template/TopNavi';
import { MenuNavi } from './template/MenuNavi';

export const App: React.FC = () => {
  return (
    <>
      <CookiesProvider>
        <Router history={history}>
          <TopNavi />
          <MenuNavi />
          <Routes />
        </Router>
      </CookiesProvider>
    </>
  );
};
