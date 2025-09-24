import z from "zod";

export const signUpFormSchema = z.object({
  email: z.email({ message: "Please enter a valid email." }).trim(),
  password: z.string().min(1),
  name: z.string().min(2).max(100),
});

export type SignUpFormValues = z.infer<typeof signUpFormSchema>;
