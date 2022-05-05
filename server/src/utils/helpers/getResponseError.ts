import { GetResponseError } from 'types/helpers';

const DEFAULT_ERROR_MESSAGE = 'Unknown error exeption!';
const DEFAULT_STATUS_CODE = 500;

export const getResponseError: GetResponseError = ({
  res,
  statusCode = DEFAULT_STATUS_CODE,
  error,
}) => {
  const errorMessage = error?.toString() || DEFAULT_ERROR_MESSAGE;
  const currentStatusCode =
    statusCode >= 100 && statusCode < 600 ? statusCode : DEFAULT_STATUS_CODE;

  return res.status(currentStatusCode).json({
    error: currentStatusCode,
    message: errorMessage,
  });
};
