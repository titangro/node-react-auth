import { GetTokenFromHeaders } from 'atlas_mongo/types/helpers';

export const getTokenFromHeaders: GetTokenFromHeaders = (req) => {
  if (!req.headers.authorization) {
    return;
  }

  const [prefix, token] = req.headers.authorization.split(' ');

  if (prefix !== 'Bearer') {
    return;
  }

  return token;
};
