import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

import { handleError } from './helpers/handleError';
import {
  __PROD__, DB_CONN, PORT, HOST,
} from './constants';
import { config } from '../config';

import { initializeModules } from './modules';

path.resolve(__filename);

console.log('DB_CONN ---->', DB_CONN);

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

// Modules
initializeModules({ app });

app.listen(PORT, HOST, async () => {
  await mongoose
    .connect(DB_CONN, config.db.options)
    .then(() => {
      console.log('MONGO IS CONNECTED');
    })
    .catch((error) => handleError(error));

  console.log(`Server running at http://${HOST}:${PORT}/`);
});
