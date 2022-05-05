import jwt from 'jsonwebtoken';
import { dbConfig } from 'utils/config';
import { UserModel, RoleModel } from 'models';

import { getToken } from 'utils/helpers/getToken';
import { getResponseError } from 'utils/helpers/getResponseError';

import { Middleware } from 'types/request';
import { JwtCustom } from 'types/jwt';
import { UserRoles } from 'types/users';

export const verifyToken: Middleware = async (req, res, next) => {
  try {
    const token = getToken(req);
    const { secret } = dbConfig;

    if (!token) {
      return getResponseError({
        res,
        statusCode: 403,
        error: 'No token provided!',
      });
    }

    const decoded = jwt.verify(token, secret) as JwtCustom;

    req.userId = decoded.id;
    next();
  } catch (error) {
    return getResponseError({
      res,
      statusCode: 401,
      error: 'Unauthorized!',
    });
  }
};

export const isAdmin: Middleware = async (req, res, next) => {
  try {
    const { userId } = req;

    const user = await UserModel.findById({ userId }).exec();

    const roles = await RoleModel.find({
      _id: { $in: user?.roles },
    });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === UserRoles.Admin) {
        next();
        return;
      }
    }

    return getResponseError({
      res,
      statusCode: 403,
      error: 'Require Admin Role!',
    });
  } catch (error) {
    return getResponseError({
      res,
      error: error as Error,
    });
  }
};

export const isModerator: Middleware = async (req, res, next) => {
  try {
    const { userId } = req;

    const user = await UserModel.findById({ userId }).exec();

    const roles = await RoleModel.find({
      _id: { $in: user?.roles },
    });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === UserRoles.Moderator) {
        next();
        return;
      }
    }

    return getResponseError({
      res,
      statusCode: 403,
      error: 'Require Moderator Role!',
    });
  } catch (error) {
    return getResponseError({
      res,
      error: error as Error,
    });
  }
};
