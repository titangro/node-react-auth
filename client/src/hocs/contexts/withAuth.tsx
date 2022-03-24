import React, { useState } from 'react';
import { RouteProps } from 'react-router-dom';

export const AuthContext = React.createContext({
  isAuthorized: false,
  authorize: () => {},
});
const { Provider } = AuthContext;

export const withAuth = (Component: React.FC<RouteProps>) => (props: any) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const authorize = () => {
    setIsAuthorized(true);
  };

  return (
    <Provider value={{ isAuthorized, authorize }}>
      <Component {...props} />
    </Provider>
  );
};
