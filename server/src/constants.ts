import dotenv from 'dotenv';

export const __PROD__ = process.env.NODE_ENV === 'production';

dotenv.config();

export const PORT = +(process.env.PORT || 3005);
export const HOST = process.env.HOST || '127.0.0.1';
export const DB_CONN = process.env.DB_CONN || '';
