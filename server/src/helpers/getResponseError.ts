import { GetResponseError } from 'types/helpers';

const DEFAULT_ERROR_MESSAGE = 'Unknown error exeption!';

export const getResponseError: GetResponseError = ({
  res,
  statusCode,
  error,
}) => {
  const errorExaption = error instanceof Error ? error : new Error(error || DEFAULT_ERROR_MESSAGE);

  return res.status(statusCode).json(errorExaption);
};
