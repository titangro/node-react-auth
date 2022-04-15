import mongoose from 'mongoose';
import { UserModel } from './user';
import { RoleModel } from './role';
import { UserRoles } from 'types/users';

export default {
  user: UserModel,
  role: RoleModel,
  ROLES: [UserRoles.User, UserRoles.Admin, UserRoles.Moderator],
};
