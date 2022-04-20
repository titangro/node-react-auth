import { Schema, models, model } from 'mongoose';
import { User } from 'types/users';

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
  username: String,
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Role',
    // default: UserRoles.User,
  },
});

export const UserModel = models.User || model<User>('User', userSchema);
