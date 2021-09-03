import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import {
  Row, Button,
} from 'react-materialize';
import { zodResolver } from '@hookform/resolvers/zod';

import { getWithBigFirstLetter } from 'utils/helpers/getWithBigFirstLetter';
import { Input } from '../input';
import { LoginFormProps, LoginFormKeys } from './types';
import { schema } from './schema';
import { FormErrors } from '../form-errors/input';

export const LoginForm: React.FC = () => {
  const formMethods = useForm<LoginFormProps>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit, formState: { errors } } = formMethods;

  console.log('🚀 ~ file: index.tsx ~ line 19 ~ errors', errors);

  const onSumbit = handleSubmit((data) => {
    // !TODO: add login fetcher
    console.log(data);
  });

  const hasErrors = Boolean(Object.keys(errors).length);

  return (
    <Row>
      <FormProvider {...formMethods}>
        <form onSubmit={onSumbit}>
          <h1>Authorization form</h1>
          <Row>
            <Input
              key={LoginFormKeys.Email}
              name={LoginFormKeys.Email}
              type="text"
              required
            >
              {getWithBigFirstLetter(LoginFormKeys.Email)}
            </Input>
            <Input
              key={LoginFormKeys.Password}
              name={LoginFormKeys.Password}
              type={LoginFormKeys.Password}
              required
            >
              {getWithBigFirstLetter(LoginFormKeys.Password)}
            </Input>
          </Row>
          {hasErrors && <FormErrors errors={errors} />}
          <Row>
            <Button onClick={onSumbit}>
              Send
            </Button>
          </Row>
        </form>
      </FormProvider>
    </Row>
  );
};
