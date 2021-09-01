import { Response, Request } from 'express';

export type Controller = (req: Request, res: Response) => Promise<Response<any>>
