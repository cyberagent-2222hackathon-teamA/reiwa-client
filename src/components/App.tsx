import React from 'react';
import { Router } from 'react-router';
import { history } from '../lib/plugins/history';
import { Routes } from '../lib/routes';
import { TopNavi } from './template/TopNavi';
import { MenuNavi } from './template/MenuNavi';
import { UserProvider } from '../lib/context/UserContext';

export const App: React.FC = () => {
  return (
    <>
      <Router history={history}>
        <TopNavi />
        <MenuNavi />
        <UserProvider>
          <Routes />
        </UserProvider>
      </Router>
    </>
  );
};
