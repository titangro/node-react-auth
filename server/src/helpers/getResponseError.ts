import { Response } from 'express';

const DEFAULT_ERROR_MESSAGE = 'Unknown error exeption!';

export const getResponseError = (
  res: Response,
  statusCode: number,
  error?: Error | string,
) => {
  const errorExaption = error instanceof Error ? error : new Error(error || DEFAULT_ERROR_MESSAGE);

  return res.status(statusCode).json(errorExaption);
};
