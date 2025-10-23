import z from "zod";

export const signInFormSchema = z.object({
  email: z.email({ message: "Please enter a valid email." }).trim(),
  password: z.string().min(1),
});

export type SignInFormValues = z.infer<typeof signInFormSchema>;
