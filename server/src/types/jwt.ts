import { Jwt } from 'jsonwebtoken';

export interface JwtCustom extends Jwt {
  id?: string;
}
