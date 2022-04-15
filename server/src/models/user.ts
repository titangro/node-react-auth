import { Schema, models, model } from 'mongoose';
import { User, UserRoles } from 'types/users';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  role: {
    type: String,
    default: UserRoles.User,
  },
});

export const UserModel = models.User || model<User>('User', userSchema);
