import { Document } from 'mongoose';

export enum UserRoles {
  User = 'user',
  Admin = 'admin',
  Moderator = 'moderator',
}

export interface User extends Document {
  email: string;
  password: string;
  role?: string;
  name?: string;
}
