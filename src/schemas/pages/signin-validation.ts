import { z, ZodType } from "zod";
import { ISigninRequest } from "../../pages/signin/interfaces";

export const SigninSchema: ZodType<ISigninRequest> = z.object({
  email: z
    .string({ required_error: "Email obrigatório." })
    .email({ message: "Email inválido." }),
  password: z
    .string({ required_error: "Senha obrigatória." })
    .min(8, { message: "Senha muito curta." })
    .max(15, { message: "Senha muito longa." }),
});
