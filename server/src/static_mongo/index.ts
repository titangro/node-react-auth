import { Express } from 'express';
import { config } from 'config';
import { PORT, HOST } from 'helpers/constants';
import { runMongoose } from 'helpers/mongoClient';

export const static_mongo = (app: Express) => {
  console.log('STATIC MONGO TEST --->');

  app.listen(PORT, HOST, async () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);

    runMongoose(config.db.options);
  });
};
