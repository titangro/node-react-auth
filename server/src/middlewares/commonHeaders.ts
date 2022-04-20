import { Middleware } from 'types/request';

export const commonHeaders: Middleware = (req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept',
  );

  next();
};
