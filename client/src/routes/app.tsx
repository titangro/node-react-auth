import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { AppLaout } from 'components/layouts/app-layout';

import { Main } from './main';
import { Profile } from './profile';

export const App: React.FC = () => {
  console.log('App -->');

  // !TODO: add layout
  return (
    <AppLaout>
      <Router>

        test
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </AppLaout>
  );
};
