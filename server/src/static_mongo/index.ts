import { Express } from 'express';
import { config } from 'config';
import { PORT, HOST } from 'helpers/constants';
import { runMongoose } from 'helpers/mongoClient';

import { initializeModules } from './modules';

export const static_mongo = (app: Express) => {
  console.log('STATIC MONGO TEST --->');

  app.listen(PORT, HOST, async () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);

    initializeModules({ app });

    runMongoose(config.db.options);
  });
};
