import { Schema, models, model } from 'mongoose';

const roleSchema = new Schema({
  name: String,
});

export const RoleModel = models.Role || model('Role', roleSchema);
