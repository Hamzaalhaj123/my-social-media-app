import { posts } from "../../../../drizzle/schema";

export type PostProps = typeof posts.$inferSelect & { name: string };
