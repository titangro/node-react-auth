import { Express } from 'express';
import { PORT, HOST } from 'helpers/constants';

export const static_mongo = (app: Express) => {
  console.log('STATIC MONGO TEST --->');

  app.listen(PORT, HOST, async () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
  });
};
