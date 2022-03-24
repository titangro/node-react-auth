import { Callback } from 'types/common';

export const fakeAuth = {
  isAthorized: false,
  singIn(cb: Callback) {
    this.isAthorized = true;
    setTimeout(cb, 100);
  },
  signOut(cb: Callback) {
    this.isAthorized = false;
    setTimeout(cb, 100);
  },
};
