"use server";
import { validateRequest } from "@/auth";
import { commentValues, createCommentSchema } from "@/validation";
import { comments } from "../../../../drizzle/schema";
import { db } from "@/db";

export async function uploadComment({ content, postId }: commentValues) {
  const req = await validateRequest();
  if (!req.user) throw new Error("Unauthorized");

  console.log(content);
  console.log("Post ID ", postId);
  await db.insert(comments).values({
    comment: content,
    postId: postId,
    userId: req.user.id,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}
