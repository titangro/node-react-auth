import mongoose, { ConnectOptions } from 'mongoose';
import { MongoClient, Callback } from 'mongodb';
import { DbMongoType } from 'types';
import { handleError } from './handleError';
import { DB_CONN_MONGO_ATLAS } from './constants';
import { dbConfig } from 'utils/config';

const { HOST, PORT, DB } = dbConfig;

const getConnectionMongoPath = (type: DbMongoType) => {
  const paths = {
    [DbMongoType.Static]: `mongodb://${HOST}:${PORT}/${DB}`,
    [DbMongoType.Atlas]: DB_CONN_MONGO_ATLAS,
  };

  return paths[type];
};

const connectionMongoPath = getConnectionMongoPath(DbMongoType.Static);

export const mongoClient = new MongoClient(connectionMongoPath);

export const runMongoClient = async (cb?: Callback) => {
  try {
    await mongoClient.connect();

    if (cb) {
      await cb();
    }
  } catch (error) {
    console.dir(error);
  } finally {
    await mongoClient.close();
  }
};

export const runMongoose = (options?: ConnectOptions) => {
  mongoose
    .connect(connectionMongoPath, options)
    .then(() => {
      console.log(
        'MONGO IS CONNECTED with connectionMongoPath, options --> ',
        connectionMongoPath,
        options,
      );
    })
    .catch(handleError);
};
