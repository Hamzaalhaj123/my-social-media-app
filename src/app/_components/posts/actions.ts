"use server";

import { validateRequest } from "@/auth";
import { db } from "@/db";
import { createPostSchema, postValues } from "@/validation";
import { posts } from "../../../../drizzle/schema";

export async function uploadPost(input: postValues) {
  const req = await validateRequest();
  if (!req.user) throw new Error("Unauthorized");

  const postStringContent = createPostSchema.parse(input);

  await db.insert(posts).values({
    content: postStringContent.content,
    userId: req.user.id,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}
