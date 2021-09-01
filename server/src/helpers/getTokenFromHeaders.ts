import { Request } from 'express';

export const getTokenFromHeaders = (req: Request) => {
  if (!req.headers.authorization) {
    return;
  }

  const [prefix, token] = req.headers.authorization.split(' ');

  if (prefix !== 'Bearer') {
    return;
  }

  return token;
};
