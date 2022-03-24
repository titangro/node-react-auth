import React from 'react';
import { compose } from 'utils/helpers/compose';
import { withContexts } from './withContexts';

export const withAppData = (Component: React.FC) =>
  compose([withContexts])(Component);
