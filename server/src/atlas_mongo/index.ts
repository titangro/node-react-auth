import { Express } from 'express';
import mongoose from 'mongoose';

import { handleError } from 'utils/helpers/handleError';
import { DB_CONN, PORT, HOST } from 'utils/helpers/constants';
import { config } from 'utils/config';

import { initializeModules } from './modules';

export const atlas_mongo = (app: Express) => {
  console.log('DB_CONN ---->', DB_CONN);

  // Modules
  initializeModules({ app });

  app.listen(PORT, HOST, async () => {
    await mongoose
      .connect(DB_CONN, config.db.options)
      .then(() => {
        console.log('MONGO IS CONNECTED');
      })
      .catch(handleError);

    console.log(`Server running at http://${HOST}:${PORT}/`);
  });
};
