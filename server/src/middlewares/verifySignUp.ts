import { ROLES, UserModel } from 'models';
import { Middleware } from 'types/request';
import { getResponseError } from 'utils/helpers/getResponseError';

export const checkDuplicateUsernameOrEmail: Middleware = async (
  req,
  res,
  next,
) => {
  const { username, email } = req.body;

  try {
    const userByName = await UserModel.findOne({
      username,
    }).exec();

    if (userByName) {
      return getResponseError({
        res,
        statusCode: 400,
        error: 'Failed! Username is already in use!',
      });
    }

    const userByEmail = await UserModel.findOne({
      email,
    });

    if (userByEmail) {
      return getResponseError({
        res,
        statusCode: 400,
        error: 'Failed! Email is already in use!',
      });
    }

    next();
  } catch (error) {
    getResponseError({ res, error: error as Error });
  }
};

export const checkRolesExisted: Middleware = (req, res, next) => {
  const { roles } = req.body;

  if (roles) {
    for (let i = 0; i < roles.length; i++) {
      if (!ROLES.includes(roles[i])) {
        return getResponseError({
          res,
          statusCode: 400,
          error: `Failed! Role ${roles[i]} does not exist!`,
        });
      }
    }
  }

  next();
};
