import React from 'react';

import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { AppLaout } from 'components/layouts/app-layout';

import { PublicRoute } from 'components/routing/public-route';
import { PrivateRoute } from 'components/routing/private-route';
import { Login } from './login';
import { Welcome } from './welcome';
import { Profile } from './profile';
import { paths } from './paths';
import { withAppData } from 'hocs/withAppData';

const App: React.FC = () => {
  return (
    <Router>
      <AppLaout>
        <Switch>
          <PublicRoute exact path={paths.welcome} component={Welcome} />
          <PublicRoute exact path={paths.login} component={Login} />
          <PrivateRoute exact path={paths.profile} component={Profile} />
          <Redirect to={paths.login} />
        </Switch>
      </AppLaout>
    </Router>
  );
};

export default withAppData(App);
