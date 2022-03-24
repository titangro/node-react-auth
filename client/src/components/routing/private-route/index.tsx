import React, { useContext } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

// @ts-ignore
import { paths } from 'routes/paths';
import { AuthContext } from 'hocs/contexts/withAuth';

export const PrivateRoute: React.FC<RouteProps> = ({
  children,
  component,
  ...rest
}) => {
  // !TODO: add check isLogin

  const { isAuthorized } = useContext(AuthContext);
  console.log('🚀 ~ file: index.tsx ~ line 16 ~ isAuthorized', isAuthorized);

  const resderedComponent = component || children;

  return (
    <Route {...rest}>
      {isAuthorized ? resderedComponent : <Redirect to={paths.login} />}
    </Route>
  );
};
