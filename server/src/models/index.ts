import mongoose from 'mongoose';
import { UserModel } from './user';
import { RoleModel } from './role';
import { UserRoles } from 'types/users';

const ROLES = [UserRoles.User, UserRoles.Admin, UserRoles.Moderator];

export { UserModel, RoleModel, ROLES };

const consoleSavedRole = (userRole: UserRoles) => {
  console.log(`added '${userRole}' to roles collection`);
};

export const initial = async () => {
  const estimatedDocumentCount = await RoleModel.estimatedDocumentCount();
  console.log(
    '🚀 ~ file: index.ts ~ line 16 ~ initial ~ estimatedDocumentCount',
    estimatedDocumentCount,
  );

  if (estimatedDocumentCount === 0) {
    try {
      await new RoleModel({
        name: UserRoles.User,
      }).save();
      consoleSavedRole(UserRoles.User);

      await new RoleModel({
        name: UserRoles.Moderator,
      }).save();
      consoleSavedRole(UserRoles.Moderator);

      await new RoleModel({
        name: UserRoles.Admin,
      }).save();
      consoleSavedRole(UserRoles.Admin);
    } catch (error) {
      console.log('User error --> ', error);
    }
  }
};
