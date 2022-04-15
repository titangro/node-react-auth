import { authRouteSignIn, authRouteSignUp } from 'types/services/auth';
import { Method } from 'axios';

export const authRoute = {
  login: ({ email, password }: authRouteSignIn) => ({
    url: '/auth/signin',
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
