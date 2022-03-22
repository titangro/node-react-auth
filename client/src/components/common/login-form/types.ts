export enum LoginFormKeys {
  Email = 'email',
  Password = 'password'
}

export interface LoginFormProps {
  [LoginFormKeys.Email]: string;
  [LoginFormKeys.Password]: string;
}
