import bcrypt from 'bcrypt';

import { generateJwt } from 'utils/helpers/generateJwt';
import { getResponseError } from 'utils/helpers/getResponseError';
import { UserEmailError } from 'utils/errors';

import { RoleModel } from 'models/role';
import { UserModel } from 'models/user';

import { Controller } from 'types/request';
import { ExpiresIn } from 'types/helpers';

// authentication
export const signIn: Controller = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new UserEmailError();
    }

    const userRecord = await UserModel.findOne({
      email,
    })
      .populate('roles', '-__v')
      .exec();

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
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }

    const token = generateJwt({
      user: userRecord,
      expiresIn: ExpiresIn['24h'],
    });

    const authorities = [];

    for (let i = 0; i < userRecord.roles.length; i++) {
      authorities.push('ROLE_' + userRecord.roles[i].name.toUpperCase());
    }

    return res.json({
      id: userRecord._id,
      username: userRecord.username,
      email: userRecord.email,
      roles: authorities,
      accessToken: token,
    });
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
    const { password, username, email, roles } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);

    const userRecord = await UserModel.create({
      email,
      username,
      password: hashedPassword,
    });

    if (roles) {
      const userRoles = await RoleModel.find({
        name: { $in: roles },
      });

      userRecord.roles = userRoles.map((role) => role._id);
      await userRecord.save();
    } else {
      const userRole = await RoleModel.findOne({
        name: 'user',
      });

      userRecord.roles = [userRole._id];
      userRecord.save();
    }

    return res.send({ message: 'User was registered successfully!' });
  } catch (error) {
    return getResponseError({
      res,
      error: error as Error,
    });
  }
};
