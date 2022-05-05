import React from 'react';
import { useFormContext } from 'react-hook-form';

import { TextInput } from 'react-materialize';

import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({ name, required, ...otherProps }) => {
  const { register } = useFormContext();

  // @ts-ignore
  return <TextInput {...register(name, { required })} {...otherProps} />;
};
