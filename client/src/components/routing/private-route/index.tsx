import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import { checkIsAutharized } from 'utils/helpers/checkIsAutharized';
// @ts-ignore
import paths from 'routes/paths';

export const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  // !TODO: add check isLogin

  const isLogin = checkIsAutharized();

  return (
    <Route {...rest}>
      {isLogin ? children : <Redirect to={paths.login} />}
    </Route>
  );
};
