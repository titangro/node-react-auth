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

<<<<<<< HEAD
=======
    runMongoose(dbConfig.options);

>>>>>>> 53a74bb9e10380dc6544dbe4340467dca3da9e0f
    console.log('Modules completely downloded!');
  });
};
