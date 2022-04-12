import { GetResponseError } from '../types/helpers';

const DEFAULT_ERROR_MESSAGE = 'Unknown error exeption!';
const DEFAULT_STATUS_CODE = 500;

export const getResponseError: GetResponseError = ({
  res,
  statusCode = DEFAULT_STATUS_CODE,
  error,
}) => {
  const currentStatusCode =
    statusCode >= 100 && statusCode < 600 ? statusCode : DEFAULT_STATUS_CODE;

  const errorExaption =
    error instanceof Error ? error : new Error(error || DEFAULT_ERROR_MESSAGE);

  return res.status(currentStatusCode).json(errorExaption);
};
