import React from 'react';
import { AuthProvider } from 'contexts/auth-context';
import { useProvideAuth } from 'hooks/useProvideAuth';
import { RouteProps } from 'react-router-dom';

export const withAuth = (Component: React.FC<RouteProps>) => (props: any) => {
  const auth = useProvideAuth();

  return (
    <AuthProvider value={auth}>
      <Component {...props} />
    </AuthProvider>
  );
};
