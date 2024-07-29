import { Lucia, RegisteredDatabaseUserAttributes, Session } from "lucia";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { db } from "@/db";
import { sessionTable, users } from "../drizzle/schema";
import { cache } from "react";
import { User } from "lucia";
import { cookies } from "next/headers";

// Initialize the adapter
const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, users);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      id: attributes.id,
      name: attributes.name,
      description: attributes.description,
      image: attributes.image,
      createdAt: attributes.createdAt,
    };
  },
});

export const validateRequest = cache(
  async (): Promise<
    | {
        user: User;
        session: Session;
      }
    | {
        user: null;
        session: null;
      }
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }
    const result = await lucia.validateSession(sessionId);
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
    } catch (error) {}
    return result;
  }
);

// Declare module to override UserId type
declare module "lucia" {
  interface Register {
    Lucia: typeof Lucia;
    UserId: number;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  id: number;
  name: string;
  description: string | null;
  image: string | null;
  createdAt: Date;
}

/*
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  image: varchar("image", { length: 255 }),
*/
