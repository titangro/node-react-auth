import React, { useContext } from 'react';
import useSWR from 'swr';
import { useForm, FormProvider } from 'react-hook-form';
import { Row, Button } from 'react-materialize';
import { zodResolver } from '@hookform/resolvers/zod';
import { useHistory } from 'react-router-dom';

// @ts-ignore
import { paths } from 'routes/paths';
import { getWithBigFirstLetter } from 'utils/helpers/getWithBigFirstLetter';

import { Input } from 'components/common/input';
import { FormErrors } from 'components/common/form-errors/input';
import { LoginFormProps, LoginFormKeys } from './types';
import { schema } from './schema';
import { useAuth } from 'hooks/useAuth';

export const LoginForm: React.FC = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const formMethods = useForm<LoginFormProps>({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = formMethods;

  // only for test
  // console.log('🚀 ~ file: index.tsx ~ line 19 ~ errors', errors);

  const login = () => {
    signIn(() => {
      history.replace(paths.profile);
    });
  };

  const onSumbit = handleSubmit(async ({ email, password }) => {
    // TODO: try fix connection to mongo db
    // const requestData = authRoute.login({
    //   email,
    //   password,
    // });

    // only for test
    login();

    try {
      // TODO: rewrite checking user on SQL
      // const response = await fetcher({ ...requestData });
      // authorize();
    } catch (error) {
      console.log('Error on response auth -->', error);
    }
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
            <Button>Send</Button>
          </Row>
        </form>
      </FormProvider>
    </Row>
  );
};
