import { postSignup } from "../../http/signup";
import { ISignupRequest } from "../../interfaces";

export async function handleSignup(data: ISignupRequest) {
  return await postSignup({
    email: data.email,
    name: data.name,
    password: data.password,
  });
}
