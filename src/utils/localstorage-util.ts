import { IsigninSucess } from "../interfaces";

export function localStorageUtil(data: IsigninSucess) {
  try {
    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem("token", data.accessToken);
  } catch (error: any) {
    throw new Error(error);
  }
}
