import { GetToken } from 'types/helpers';

export const getBearerToken: GetToken = (req) => {
  if (!req.headers.authorization) {
    return;
  }

  const [prefix, token] = req.headers.authorization.split(' ');

  if (prefix !== 'Bearer') {
    return;
  }

  return token;
};

export const getToken: GetToken = (req) => {
  const token = req.headers['x-access-token'] as string | undefined;

  return token;
};
