import { Request, Response } from 'express';

import { User } from 'atlas_mongo/types/users';

export type GetTokenFromHeaders = (req: Request) => string | undefined;

type GetResponseErrorProps = {
  res: Response;
  statusCode?: number;
  error?: Error | string;
};

export type GetResponseError = (
  props: GetResponseErrorProps,
) => Response<any, Record<string, unknown>>;

export type HandleError = (error: Error) => void;

export enum ExpiresIn {
  '6h' = '6h',
  '12h' = '12h',
  '24h' = '24h',
  '7d' = '7d',
  '30d' = '30d',
  '365d' = '365d',
}

type GenerateJWTProps = {
  user: User;
  expiresIn?: ExpiresIn;
};

export type GenerateJWT = (props: GenerateJWTProps) => void;
