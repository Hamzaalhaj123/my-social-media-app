// file: src/app/db/index.ts
import { neon } from "@neondatabase/serverless";
// import { drizzle } from "drizzle-orm/neon-http";
import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../drizzle/schema";

// Fix for "sorry, too many clients already"
declare global {
  // eslint-disable-next-line no-var -- only var works here
  var db: PostgresJsDatabase<typeof schema> | undefined;
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be a Neon postgres connection string");
}

// for production //! NOTE PLEASE DON'T FORGET TO CHANGE THE IMPORT OF THE DRIZZLE FORM POSTEGRES JS TO NEON.. UN COMMENT THE NEON IMPORT
//const sql = neon(process.env.DATABASE_URL);
// export const db = drizzle(sql, {
//   schema,

//for dev
// const sql = postgres(process.env.DATABASE_URL as string);
// export const db = drizzle(sql);

let db: PostgresJsDatabase<typeof schema>;

if (process.env.NODE_ENV === "production") {
  db = drizzle(postgres(process.env.DATABASE_URL), { schema });
} else {
  if (!global.db)
    global.db = drizzle(postgres(process.env.DATABASE_URL), { schema });

  db = global.db;
}

export { db };
