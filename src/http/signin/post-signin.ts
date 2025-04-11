import { ISigninRequest } from "../../interfaces";
import axios from "axios";

export async function postSignin({ email, password }: ISigninRequest) {
  const urlBase = "http://localhost:5000";
  const request = await axios.post(`${urlBase}/signin`, {
    email,
    password,
  });

  const data = await request.data;
  return data;
}
