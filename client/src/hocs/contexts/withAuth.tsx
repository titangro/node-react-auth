import React, { useState } from 'react';

export const AuthContext = React.createContext({
  isAuthorized: false,
  authorize: () => {},
});
const { Provider } = AuthContext;

export const withAuth = (Component: React.FC) => (props: any) => {
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
