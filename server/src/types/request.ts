import { Response, Request, NextFunction } from 'express';

export type Controller = (
  req: Request,
  res: Response,
) => Promise<Response<any>>;

export type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void;
