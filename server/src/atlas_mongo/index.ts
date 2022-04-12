import { Express } from 'express';
import path from 'path';
import mongoose from 'mongoose';

import { handleError } from './helpers/handleError';
import { DB_CONN, PORT, HOST } from './constants';
import { config } from 'atlas_mongo/config';

import { initializeModules } from 'atlas_mongo/modules';

export const atlas_mongo = (app: Express) => {
  path.resolve(__filename);

  console.log('DB_CONN ---->', DB_CONN);

  // Modules
  initializeModules({ app });

  app.listen(PORT, HOST, async () => {
    await mongoose
      .connect(DB_CONN, config.db.options)
      .then(() => {
        console.log('MONGO IS CONNECTED');
      })
      .catch((error) => handleError(error));

    console.log(`Server running at http://${HOST}:${PORT}/`);
  });
};
