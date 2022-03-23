import React from 'react';
import { compose } from 'utils/helpers/compose';
import { withAuth } from './contexts/withAuth';

export const withContexts = (Component: React.FC) =>
  compose([withAuth])(Component);
