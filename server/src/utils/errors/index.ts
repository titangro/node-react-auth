export class UserEmailError extends Error {
  constructor() {
    super();

    this.message = 'User email is wrong';
  }
}

export class UserPasswordError extends Error {
  constructor() {
    super();

    this.message = 'Incorrect password';
  }
}
