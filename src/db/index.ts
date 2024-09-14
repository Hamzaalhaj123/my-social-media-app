// file: src/app/db/index.ts
import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-http";
import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../drizzle/schema";

// Fix for "sorry, too many clients already"
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must exist");
}

// Singleton function to ensure only one db instance is created
function singleton<Value>(name: string, value: () => Value): Value {
  const globalAny: any = global;
  globalAny.__singletons = globalAny.__singletons || {};

  if (!globalAny.__singletons[name]) {
    globalAny.__singletons[name] = value();
  }

  return globalAny.__singletons[name];
}

// Function to create the database connection and apply migrations if needed
function createDatabaseConnection() {
  return drizzle(postgres(process.env.DATABASE_URL as string), { schema });
}
const db = singleton("db", createDatabaseConnection);

export { db };
