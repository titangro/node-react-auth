import React from 'react';
import { Callback } from 'types/common';
import { User } from 'types/services/auth';

export const AuthContext = React.createContext({
  user: null as User,
  signIn: (cb?: Callback) => {},
  signOut: (cb?: Callback) => {},
});

const { Provider: AuthProvider } = AuthContext;

export { AuthProvider };
