import express from 'express';
import path from 'path';

import { atlas_mongo } from './atlas_mongo';
import { static_mongo } from './static_mongo';

const USE_STATIC = true;

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
  if (USE_STATIC) {
    static_mongo(app);
    return;
  }

  atlas_mongo(app);
})(app);
