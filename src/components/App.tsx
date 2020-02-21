import React from 'react';
import { Router } from 'react-router';
import { CookiesProvider } from 'react-cookie';
import { history } from '../lib/plugins/history';
import { Routes } from '../lib/routes';
import { TopNavi } from './templates/TopNavi';
import { Footer } from './templates/Footer';

export const App: React.FC = () => {
  return (
    <CookiesProvider>
      <Router history={history}>
        <TopNavi />
        <Routes />
        <Footer />
      </Router>
    </CookiesProvider>
  );
};
