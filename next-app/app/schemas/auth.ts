import z from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(4).max(35),
  email: z.email(),
  password: z.string().min(5).max(35),
})