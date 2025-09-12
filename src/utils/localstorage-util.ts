import { ISigninSucess } from "../interfaces";

export function setTokenUtil(data: ISigninSucess) {
  try {
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", data.accessToken);
  } catch (error: any) {
    throw new Error(error);
  }
}
export function setTokenNull() {
  try {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  } catch (error: any) {
    throw new Error(error);
  }
}
export function getUserId() {
  try {
    const user: any = localStorage.getItem("user");
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
}
