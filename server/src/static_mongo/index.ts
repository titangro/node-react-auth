import { Express } from 'express';
import { dbConfig } from 'utils/config';
import { PORT, HOST } from 'utils/helpers/constants';
import { runMongoose } from 'utils/helpers/mongoClient';

import { initializeModules } from './modules';

export const static_mongo = (app: Express) => {
  console.log('STATIC MONGO TEST --->');

  app.listen(PORT, HOST, async () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);

    initializeModules({ app });

    runMongoose(dbConfig.options);

    console.log('Modules completely downloded!');
  });
};
