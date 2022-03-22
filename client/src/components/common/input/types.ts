import { TextInputProps } from 'react-materialize';

export interface InputProps extends TextInputProps {
  name: string;
  required?: boolean;
}
