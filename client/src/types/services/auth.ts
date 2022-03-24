export type User = {} | string | null;

export interface authRouteLogin {
  email: string;
  password: string;
}

export interface authRouteSignUp {
  token: string;
}
