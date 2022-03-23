import React, { useContext, useEffect } from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

import { checkIsAutharized } from 'utils/helpers/checkIsAutharized';
// @ts-ignore
import { paths } from 'routes/paths';
import { AuthContext } from 'hocs/contexts/withAuth';

export const PrivateRoute: React.FC<RouteProps> = ({
  children,
  component,
  ...rest
}) => {
  // !TODO: add check isLogin

  const { authorize, isAuthorized } = useContext(AuthContext);
  console.log(
    '🚀 ~ file: PrivateRoute index.tsx ~ line 17 ~ isAuthorized',
    isAuthorized,
  );

  const isLogin = checkIsAutharized();

  const resderedComponent = component || children;

  useEffect(() => {
    authorize();
  }, [authorize]);

  return (
    <Route {...rest}>
      {isLogin ? resderedComponent : <Redirect to={paths.login} />}
    </Route>
  );
};
