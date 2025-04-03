import { z, ZodType } from "zod";
import { ISignupRequest } from "../../pages/signup/interfaces";

export const SignupSchema: ZodType<ISignupRequest> = z.object({
  name: z
    .string({ required_error: "Nome obrigatório." })
    .min(1, { message: "Nome obrigatório." }),
  email: z
    .string({ required_error: "Email obrigatório." })
    .email({ message: "Email inválido." }),
  password: z
    .string({ required_error: "Senha obrigatória." })
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres." })
    .max(15, { message: "A senha deve ter no maximo 15 caracteres." })
    .regex(/[A-Z]/, {
      message: "A senha deve conter pelo menos uma letra maiúscula.",
    })
    .regex(/[a-z]/, {
      message: "A senha deve conter pelo menos uma letra minúscula.",
    })
    .regex(/[0-9]/, { message: "A senha deve conter pelo menos um número." })
    .regex(/[^A-Za-z0-9]/, {
      message: "A senha deve conter pelo menos um caractere especial.",
    }),
});
