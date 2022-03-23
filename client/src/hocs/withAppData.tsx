import React from 'react';
import { compose } from 'utils/helpers/compose';
import { withAuth } from './contexts/withAuth';
import { withContexts } from './withContexts';

export const withAppData = (Component: React.FC) =>
  // !TODO: FIX compose func
  // compose([withContexts])(Component);
  withAuth(Component);
