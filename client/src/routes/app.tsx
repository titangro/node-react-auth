import React from 'react';

import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { AppLaout } from 'components/layouts/app-layout';

import { PublicRoute } from 'components/routing/public-route';
import { PrivateRoute } from 'components/routing/private-route';
import { Login } from './login';
import { Profile } from './profile';
import paths from './paths';

export const App: React.FC = () => {
  return (
    <Router>
      <AppLaout>
        <Switch>
          <PublicRoute exact path={paths.login} component={Login} />
          <PrivateRoute exact path={paths.profile} component={Profile} />
          <Redirect to={paths.login} />
        </Switch>
      </AppLaout>
    </Router>
  );
};
