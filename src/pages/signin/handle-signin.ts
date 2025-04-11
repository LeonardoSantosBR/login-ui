import { postSignin } from "../../http/signin";
import { ISigninRequest } from "../../interfaces";

export async function handleSignin(data: ISigninRequest) {
  return await postSignin({ email: data.email, password: data.password });
}
