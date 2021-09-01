import { Request, Response } from 'express';

export type GetTokenFromHeaders = (req: Request) => string | undefined;

export type GetResponseErrorProps = {
  res: Response;
  statusCode: number;
  error?: Error | string;
}

export type GetResponseError = (props: GetResponseErrorProps) =>
  Response<any, Record<string, unknown>>;

export type HandleError = (error: Error) => void
