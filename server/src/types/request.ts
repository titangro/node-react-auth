import { Response, Request, NextFunction } from 'express';

export interface RequestCustom extends Request {
  userId?: string;
}

export type Controller = (
  req: Request,
  res: Response,
) => Promise<Response<any>>;

export type Middleware = (
  req: RequestCustom,
  res: Response,
  next: NextFunction,
) => void;
