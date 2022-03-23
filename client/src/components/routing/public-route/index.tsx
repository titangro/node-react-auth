import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

export const PublicRoute: React.FC<RouteProps> = ({
  children,
  component,
  ...rest
}) => {
  const resderedComponent = component || children;

  return <Route {...rest}>{resderedComponent}</Route>;
};
