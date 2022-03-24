import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

// @ts-ignore
import { paths } from 'routes/paths';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute: React.FC<RouteProps> = ({
  children,
  component,
  ...rest
}) => {
  // TODO: rewrite checking user on SQL
  const { user } = useAuth();

  const resderedComponent = component || children;

  return (
    <Route {...rest}>
      {user ? resderedComponent : <Redirect to={paths.login} />}
    </Route>
  );
};
