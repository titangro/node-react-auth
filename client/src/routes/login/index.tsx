import React from 'react';
import { LoginForm } from 'components/common/login-form';

export const Login: React.FC<Record<string, unknown>> = (props) => <LoginForm {...props} />;
