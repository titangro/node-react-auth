import { ExpiresIn, GenerateJwt } from 'types/helpers';

import * as jwt from 'jsonwebtoken';

const DEFAULT_EXPIRES_IN = ExpiresIn['6h'];
const DEFAULT_AlGORITHM = 'RS256';

export const generateJwt: GenerateJwt = ({ user, expiresIn }) =>
  jwt.sign(
    {
      userId: user.id,
    },
    process.env.SECRET_CODE || '',
    {
      expiresIn: expiresIn || DEFAULT_EXPIRES_IN,
      algorithm: DEFAULT_AlGORITHM,
    },
  );
