import { authRouteLogin, authRouteSignUp } from 'types/services/auth';
import { Method } from 'axios';

export const authRoute = {
  login: ({ email, password }: authRouteLogin) => ({
    url: '/auth/login',
    method: 'POST' as Method,
    data: {
      email,
      password,
    },
  }),
  signUp: ({ token }: authRouteSignUp) => ({
    url: '/auth/signup',
    method: 'POST' as Method,
    data: {
      token,
    },
  }),
};
