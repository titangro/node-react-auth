import { FieldErrors, FieldError } from 'react-hook-form';

export interface FormErrorsProps {
  errors: FieldErrors;
}

export type ErrorsList = [string, FieldError][];
