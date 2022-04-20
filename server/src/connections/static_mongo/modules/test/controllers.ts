import { RoleModel } from './../../../../models/role';
import { ExpiresIn } from 'types/helpers';
import bcrypt from 'bcrypt';
import { generateJwt } from 'utils/helpers/generateJwt';
import { getResponseError } from 'utils/helpers/getResponseError';
import { Controller } from 'types/request';
import { UserModel } from 'models/user';
import { UserEmailError } from 'utils/errors';

export const allAccess: Controller = async (_, res) => {
  return res.status(200).send('Public content.');
};

export const userBoard: Controller = async (_, res) => {
  return res.status(200).send('User Content.');
};

export const adminBoard: Controller = async (_, res) => {
  return res.status(200).send('Admin Content.');
};

export const moderatorBoard: Controller = async (_, res) => {
  return res.status(200).send('Moderator Content.');
};
