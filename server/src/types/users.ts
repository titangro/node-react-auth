import { Document } from 'mongoose';

export enum UserRoles {
  Default = 'user'
}

export interface User extends Document {
  email: string;
  password: string;
  role?: string;
  name?: string;
}
