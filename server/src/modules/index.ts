import { Express } from 'express';
// import authRouter from './auth';

interface InitializeModules {
  app: Express;
  prefix?: string;
}

const DEFAULT_PREFIX = '/api';

export const initializeModules = ({ app, prefix = DEFAULT_PREFIX }: InitializeModules) => {
  // app.use(`${prefix}/auth`, {authRouter});
};
