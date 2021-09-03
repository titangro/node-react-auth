import React from 'react';
import { LoginForm } from 'components/common/login-form';

export const Main: React.FC<Record<string, unknown>> = (props) => <LoginForm {...props} />;
