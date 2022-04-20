import { GenerateJwt } from 'types/helpers';
import { DEFAULT_EXPIRES_IN, DEFAULT_AlGORITHM } from './constants';

import * as jwt from 'jsonwebtoken';

import { dbConfig } from 'utils/config';

export const generateJwt: GenerateJwt = ({ user, expiresIn }) =>
  jwt.sign(
    {
      userId: user.id,
    },
    dbConfig.secret,
    {
      expiresIn: expiresIn || DEFAULT_EXPIRES_IN,
      algorithm: DEFAULT_AlGORITHM,
    },
  );
