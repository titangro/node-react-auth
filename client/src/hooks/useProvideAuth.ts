import { useState } from 'react';
import { fakeAuth } from 'utils/api/fakeAuth';
import { Callback } from 'types/common';
import { User } from 'types/services/auth';

export const useProvideAuth = () => {
  const [user, setUser] = useState<User>(null);

  const signIn = (cb?: Callback) => {
    return fakeAuth.singIn(() => {
      setUser('user');
      cb && cb();
    });
  };

  const signOut = (cb?: Callback) => {
    return fakeAuth.signOut(() => {
      setUser(null);
      cb && cb();
    });
  };

  return {
    user,
    signIn,
    signOut,
  };
};
