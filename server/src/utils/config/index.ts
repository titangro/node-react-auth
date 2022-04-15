import dotenv from 'dotenv';

dotenv.config();

export const dbConfig = {
  HOST: process.env.MONGO_HOST,
  PORT: process.env.MONGO_PORT,
  DB: process.env.MONGO_DB,
  options: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
};
