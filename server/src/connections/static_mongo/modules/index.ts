import { DEFAULT_PREFIX } from 'utils/helpers/constants';
import { InitializeModules } from 'types/modules';

import authRouter from './auth';
import testRouter from './test';
import { commonHeaders } from 'middlewares';

export const initializeModules = ({
  app,
  prefix = DEFAULT_PREFIX,
}: InitializeModules) => {
  app.use(`${prefix}/auth`, [commonHeaders], authRouter);
  app.use(`${prefix}/test`, [commonHeaders], testRouter);
};
