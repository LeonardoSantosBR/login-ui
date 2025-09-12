import { ISigninRequest } from "../interfaces";
import axios from "axios";

export async function postSigninHttp({ email, password }: ISigninRequest) {
  const request = await axios.post(`${import.meta.env.VITE_URL_BASE}/signin`, {
    email,
    password,
  });

  const data = await request.data;
  return data;
}
