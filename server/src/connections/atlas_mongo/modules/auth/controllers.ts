import bcrypt from 'bcrypt';
import { generateJwt } from 'utils/helpers/generateJwt';
import { getResponseError } from 'utils/helpers/getResponseError';
import { Controller } from 'types/request';
import { UserModel } from './model';

export const login: Controller = async (req, res) => {
  try {
    // получаем данные Post запроса
    const { email, password } = req.body;

    // исключение при отсутсвии email
    if (!email) {
      throw new Error('User email is wrong');
    }

    // поиск существующего пользователя по email
    const userRecord = await UserModel.findOne({
      email,
    });

    if (!userRecord) {
      // исключение если пользователь не найден
      return getResponseError({
        res,
        error: 'User not found',
        statusCode: 404,
      });
    }

    // сравнение хешей паролей
    const isCorrectPassword = await bcrypt.compare(
      password,
      userRecord.password,
    );

    if (!isCorrectPassword) {
      // исключение если пароли разные
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
    // получаем данные Post запроса из body, хешируем пароль
    const { password, username, email } = req.body;
    const passwordHashed = await bcrypt.hash(password, 10);

    // поиск уже зарегистрированного пользователя
    const createdUser = await UserModel.findOne({
      email,
    });

    // если пользователь уже существует, кидаем исключение
    if (createdUser) {
      return getResponseError({
        res,
        error: 'Such user already exists',
        statusCode: 401,
      });
    }

    // создаем пользователя
    const userRecord = await UserModel.create({
      password: passwordHashed,
      email,
      username,
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
