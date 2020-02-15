import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { pages } from './routes';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={pages.Top} />
      <Route exact path="/user/:userId" component={pages.User} />
      <Route exact path="/login" component={pages.Login} />
      <Route exact path="/setting" component={pages.Setting} />
    </Switch>
  );
};
