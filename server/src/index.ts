import { DbMongoType } from './types/index';
import express from 'express';
import path from 'path';
import cors from 'cors';

import { getDbTypePath } from 'utils/helpers/getDbTypePath';
import { PORT, HOST } from 'utils/helpers/constants';
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
  cors({
    origin: `http://${HOST}:${PORT}/`,
  }),
]);

path.resolve(__filename);

((app) => {
  const funcWithBdConnector = getDbTypePath({
    dbType: DbType.Mongo,
    subDbType: DbMongoType.Static,
  });

  funcWithBdConnector(app, (cb: () => void) =>
    app.listen(PORT, HOST, () => {
      console.log(`Server running at http://${HOST}:${PORT}/`);

      if (cb) {
        cb();
      }
    }),
  );
})(app);
