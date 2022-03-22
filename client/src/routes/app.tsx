import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { AppLaout } from 'components/layouts/app-layout';

import { PublicRoute } from 'components/routing/public-route';
import { PrivateRoute } from 'components/routing/private-route';
import { Login } from './login';
import { Profile } from './profile';
import paths from './paths';

export const App: React.FC = () => {
  return (
    <AppLaout>
      <Router>
        <Switch>
          <PrivateRoute path={paths.profile}>
            <Profile />
          </PrivateRoute>
          <PublicRoute path={paths.login}>
            <Login />
          </PublicRoute>
        </Switch>
      </Router>
    </AppLaout>
  );
};
