import { ExpiresIn, GenerateJWT } from 'types/helpers';

import * as jwt from 'jsonwebtoken';

const DEFAULT_EXPIRES_IN = ExpiresIn['6h'];

export const generateJWT: GenerateJWT = ({ user, expiresIn }) =>
  jwt.sign(
    {
      userId: user.id,
    },
    process.env.SECRET_CODE || '',
    {
      expiresIn: expiresIn || DEFAULT_EXPIRES_IN,
    },
  );
