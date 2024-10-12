import { z } from "zod";

export const SigninSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email precisa ser preenchido" })
    .email("Email não valído."),
  password: z.string().min(4),
});
