import { ISignupRequest } from "../interfaces";
import axios from "axios";

export async function postSignupHttp({ email, name, password }: ISignupRequest) {
  const request = await axios.post(`${import.meta.env.VITE_URL_BASE}/users`, {
    email,
    name,
    password,
  });

  const data = await request.data;
  return data;
}
