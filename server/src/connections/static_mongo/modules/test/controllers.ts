import { Controller } from 'types/request';

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
