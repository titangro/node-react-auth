import bcrypt from 'bcrypt';
import { generateJwt } from 'utils/helpers/generateJwt';
import { getResponseError } from 'utils/helpers/getResponseError';
import { Controller } from 'types/request';
import { UserModel } from 'models/user';
import { UserEmailError, UserPasswordError } from 'utils/errors';

// authentication
export const signIn: Controller = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new UserEmailError();
    }

    const userRecord = await UserModel.findOne({
      email,
    });

    if (!userRecord) {
      return getResponseError({
        res,
        error: 'User not found',
        statusCode: 404,
      });
    }

    const isCorrectpassword = await bcrypt.compare(
      password,
      userRecord.password,
    );

    if (!isCorrectpassword) {
      throw new UserPasswordError();
    }

    return res.json(
      generateJwt({
        user: userRecord,
      }),
    );
  } catch (error) {
    return getResponseError({
      res,
      error: error as Error,
    });
  }
};

// registration
export const signUp: Controller = async (req, res) => {
  try {
    const { password, name, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await UserModel.findOneAndDelete({
      email,
    });

    if (createdUser) {
      return getResponseError({
        res,
        error: 'Such user already exists',
        statusCode: 401,
      });
    }

    const userRecord = await UserModel.create({
      name,
      password: hashedPassword,
    });

    return res.json(
      generateJwt({
        user: userRecord,
      }),
    );
  } catch (error) {
    return getResponseError({
      res,
      error: error as Error,
    });
  }
};
