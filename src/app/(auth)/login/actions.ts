"use server";

import { lucia } from "@/auth";
import { db } from "@/db";
import { loginSchema, LoginValues } from "@/validation";
import { verify } from "@node-rs/argon2";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(
  credentials: LoginValues
): Promise<{ error: string }> {
  try {
    const { usernameOrEmail, password } = loginSchema.parse(credentials);
    const existingUser = await db.query.users.findFirst({
      where: (users, { or, eq }) =>
        or(eq(users.name, usernameOrEmail), eq(users.email, usernameOrEmail)),
    });

    if (!existingUser || !existingUser.password || !existingUser.email) {
      return { error: "Incorrect username or email or password" };
    }
    const validPassword = verify(existingUser.password, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });
    if (!validPassword)
      return { error: "Incorrect username or email or password" }; // Create a session using the user ID
    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return redirect("/");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    throw new Error(
      "Something went wrong with the login process please try again"
    );
  }
}
