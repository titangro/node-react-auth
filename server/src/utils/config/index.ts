import {
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DB,
  SECRET_CODE,
} from 'utils/helpers/constants';

export const dbConfig = {
  HOST: MONGO_HOST,
  PORT: MONGO_PORT,
  DB: MONGO_DB,
  secret: SECRET_CODE,
  options: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
};
