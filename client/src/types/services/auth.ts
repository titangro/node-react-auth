export type User = {} | string | null;

export interface authRouteSignIn {
  email: string;
  password: string;
}

export interface authRouteSignUp {
  token: string;
}
