import { z } from "zod";

const requiredInput = z.string().trim().min(1, "Required");
const emailValidator = requiredInput.email("Invalid email");
const usernameValidator = requiredInput.regex(
  /^[a-zA-Z0-9_]+$/,
  "Only letters, numbers, and underscores"
);

export const signUpSchema = z.object({
  email: emailValidator,
  username: usernameValidator,
  password: requiredInput.min(8, "Password must be at least 8 characters"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  usernameOrEmail: z.union([emailValidator, usernameValidator]),
  password: requiredInput.min(8, "Password must be at least 8 characters"),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const createPostSchema = z.object({
  content: requiredInput.min(8, "Content is required"),
});

export type postValues = z.infer<typeof createPostSchema>;

export const createCommentSchema = z.object({
  content: requiredInput.min(2, "Content is required"),
  postId: z.number(),
});
export type commentValues = z.infer<typeof createCommentSchema>;
