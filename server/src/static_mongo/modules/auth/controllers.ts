import bcrypt from 'bcrypt';
import { generateJwt } from 'helpers/generateJwt';
import { getResponseError } from 'helpers/getResponseError';
import { Controller } from 'types/request';
import { UserModel } from './model';

export const login: Controller = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error('User email is wrong');
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
      throw new Error('Incorrect password');
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
        error: 'Such user  already exists',
        statusCode: 401,
      });
    }

    const userRecord = await UserModel.create({
      email,
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
