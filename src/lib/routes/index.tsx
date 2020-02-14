import React from 'react';
// import { Route, Switch } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { pages } from './routes';
// import { Top } from '../../containers/Top';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={pages.Top} />
      <Route exact path="/:userId" component={pages.User} />
      <Route exact path="/login" component={pages.Login} />
      <Route exact path="/setting" component={pages.Setting} />
    </Switch>
  );
};
