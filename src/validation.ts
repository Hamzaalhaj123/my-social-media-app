import { z } from "zod";

const requiredInput = z.string().trim().min(1, "Required");

export const signUpSchema = z.object({
  email: requiredInput.email("Invalid email"),
  username: requiredInput.regex(
    /^[a-zA-Z0-9_]+$/,
    "Only letters, numbers and underscores"
  ),
  password: requiredInput.min(8, "Password must be at least 8 characters"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  username: requiredInput.regex(
    /^[a-zA-Z0-9_]+$/,
    "Only letters, numbers and underscores"
  ),
  email: requiredInput.email("Invalid email"),
  password: requiredInput.min(8, "Password must be at least 8 characters"),
});

export type LoginValues = z.infer<typeof loginSchema>;
