export type AuthUser = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password2: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
  DEFAULT = "default"
}

export type UserState = {
  user: AuthUser;
  isAuth: boolean;
  status: Status;
  successMessage: string;
  errorMessage: string;
};

export type AuthLogin = {
  email: string;
  password: string;
};
