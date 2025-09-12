export interface ISigninRequest {
  email: string;
  password: string;
}
export interface ISigninSucess {
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}
