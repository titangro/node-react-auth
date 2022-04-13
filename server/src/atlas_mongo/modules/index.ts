import { InitializeModules } from 'types/modules';
import authRouter from './auth';

const DEFAULT_PREFIX = '/api';

export const initializeModules = ({
  app,
  prefix = DEFAULT_PREFIX,
}: InitializeModules) => {
  app.use(`${prefix}/auth`, authRouter);
};
