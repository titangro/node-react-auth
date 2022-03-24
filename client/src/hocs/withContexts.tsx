import React from 'react';
import { compose } from 'utils/helpers/compose';
import { withAuth } from './withAuth';

export const withContexts = (Component: React.FC) =>
  compose([withAuth])(Component);
