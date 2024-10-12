import { z } from "zod";

export const SignupSchema = z.object({
  name: z.string().max(50),
  password: z.string().min(4),
  email: z
    .string()
    .min(1, { message: "Email precisa ser preenchido" })
    .email("Email não valído."),
});
