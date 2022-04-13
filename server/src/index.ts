import { DbMongoType } from './types/index';
import express from 'express';
import path from 'path';

import { getDbTypePath } from './helpers/getDbTypePath';
import { DbType } from 'types';

const app = express();

// Middlewares
// TODO: realise initMiddleware
app.use([
  express.json(), // to support JSON-encoded bodies
  express.urlencoded({
    limit: '50mb',
    extended: true,
  }), // to support URL-encoded bodies
]);

path.resolve(__filename);

((app) => {
  const funcWithBdConnector = getDbTypePath({
    dbType: DbType.Mongo,
    subDbType: DbMongoType.Static,
  });

  funcWithBdConnector(app);
})(app);
