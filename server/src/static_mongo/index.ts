import { Express } from 'express';
import { dbConfig } from 'utils/config';
import { runMongoose } from 'utils/helpers/mongoClient';

import { initializeModules } from './modules';

export const static_mongo = (
  app: Express,
  listener: (cb: () => void) => void,
) => {
  console.log('STATIC MONGO TEST --->');

  initializeModules({ app });

  listener(async () => {
    runMongoose(dbConfig.options);

    console.log('Modules completely downloded!');
  });
};
