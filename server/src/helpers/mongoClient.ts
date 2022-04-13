import { MongoClient, Callback } from 'mongodb';
import { DB_CONN_MONGO_STATIC } from './constants';

export const mongoClient = new MongoClient(DB_CONN_MONGO_STATIC);

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
