import { Document } from 'mongoose';

export enum UserRoles {
  User = 'user',
  Admin = 'admin',
  Moderator = 'moderator',
}

export interface Role extends Document {
  name: string;
}

export interface User extends Document {
  email: string;
  password: string;
  roles: Role[];
  username?: string;
}
