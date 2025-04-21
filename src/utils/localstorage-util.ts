import { IsigninSucess } from "../interfaces";

export function localStorageUtil(data: IsigninSucess) {
  localStorage.setItem("user", JSON.stringify(data));
  localStorage.setItem("token", data.accessToken);
}
