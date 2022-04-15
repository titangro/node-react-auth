import { DEFAULT_PREFIX } from 'utils/helpers/constants';
import { InitializeModules } from 'types/modules';
import authRouter from './auth';

export const initializeModules = ({
  app,
  prefix = DEFAULT_PREFIX,
}: InitializeModules) => {
  app.use(`${prefix}/auth`, authRouter);
};
