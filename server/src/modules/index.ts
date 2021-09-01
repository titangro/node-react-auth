// import authRouter from './auth';

import { InitializeModules } from 'types/modules';

const DEFAULT_PREFIX = '/api';

export const initializeModules = ({ app, prefix = DEFAULT_PREFIX }: InitializeModules) => {
  // app.use(`${prefix}/auth`, { authRouter });
};
