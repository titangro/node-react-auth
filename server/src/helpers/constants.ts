import dotenv from 'dotenv';

export const DEFAULT_PREFIX = '/api';

export const __PROD__ = process.env.NODE_ENV === 'production';

dotenv.config();

export const PORT = Number(process.env.PORT || 3005);
export const HOST = process.env.HOST || '127.0.0.1';
export const DB_CONN = process.env.DB_CONN || '';
export const DB_CONN_MONGO_ATLAS = process.env.DB_CONN_MONGO_ATLAS || '';
export const DB_CONN_MONGO_STATIC = process.env.DB_CONN_MONGO_STATIC || '';
