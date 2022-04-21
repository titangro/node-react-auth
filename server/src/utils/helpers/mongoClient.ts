import mongoose, { ConnectOptions } from 'mongoose';
import { MongoClient, Callback } from 'mongodb';
import { DbMongoType } from 'types';
import { handleError } from './handleError';
import { DB_CONN_MONGO_ATLAS } from './constants';
import { dbConfig } from 'utils/config';
import { initial } from 'models';

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
      cb();
    }
  } catch (error) {
    console.dir(error);
  } finally {
    console.log('MongoClient is Stated!!!');

    await mongoClient.close();
  }
};

export const runMongoose = (options?: ConnectOptions) => {
  mongoose
    .connect(connectionMongoPath, options)
    .then(() => {
      console.log(
        'MONGO IS CONNECTED with connectionMongoPath --> ',
        connectionMongoPath,
      );

      initial();
    })
    .catch(handleError);
};
