import { Schema, model } from 'mongoose';
import { Role } from 'types/users';

const roleSchema = new Schema({
  name: String,
});

export const RoleModel = model<Role>('Role', roleSchema);
