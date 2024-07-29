"use server";
import { hash } from "@node-rs/argon2";
import { signUpSchema, SignUpValues } from "@/validation";
import { generateId, generateIdFromEntropySize } from "lucia";
import { db } from "@/db";
import { users } from "../../../../drizzle/schema";
import { lucia } from "@/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function signUp(
  credentials: SignUpValues
): Promise<{ error: string }> {
  try {
    const { email, username, password } = signUpSchema.parse(credentials);
    const passwordHash = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    // Check if username or email already exists
    const existingUser = await db.query.users.findFirst({
      where: (users, { or, eq }) =>
        or(eq(users.name, username), eq(users.email, email)),
    });
    if (existingUser) {
      return { error: "Username or email already exists" };
    }
    // Insert a new user and get the ID
    const insertedUserId = await db
      .insert(users)
      .values({
        email,
        name: username,
        password: passwordHash,
      })
      .returning({ userId: users.id })
      .then((res) => res[0]);

    // Create a session using the user ID
    const session = await lucia.createSession(insertedUserId.userId, {});
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
    return {
      error: "Something went wrong with the signup process please try again",
    };
  }
}
