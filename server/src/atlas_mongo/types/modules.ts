import { Express } from 'express';

export interface InitializeModules {
  app: Express;
  prefix?: string;
}
