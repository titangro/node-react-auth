import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import { checkIsAutharized } from 'utils/helpers/checkIsAutharized';
// @ts-ignore
import paths from 'routes/paths';

export const PrivateRoute: React.FC<RouteProps> = ({
  children,
  component,
  ...rest
}) => {
  // !TODO: add check isLogin

  const isLogin = checkIsAutharized();

  const resderedComponent = component || children;

  return (
    <Route {...rest}>
      {isLogin ? resderedComponent : <Redirect to={paths.login} />}
    </Route>
  );
};
