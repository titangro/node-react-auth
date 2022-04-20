import { Express } from 'express';
import mongoose from 'mongoose';

import { handleError } from 'utils/helpers/handleError';
import { DB_CONN } from 'utils/helpers/constants';
import { dbConfig } from 'utils/config';

import { initializeModules } from './modules';

export const atlas_mongo = (
  app: Express,
  listener: (cb: () => void) => void,
) => {
  // Modules
  initializeModules({ app });

  listener(async () => {
    await mongoose
      .connect(DB_CONN, dbConfig.options)
      .then(() => {
        console.log('MONGO IS CONNECTED');
      })
      .catch(handleError);
  });

  // app.listen(PORT, HOST, ;
};
