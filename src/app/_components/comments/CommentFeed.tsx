import { db } from "@/db";
import { comments, users } from "../../../../drizzle/schema";
import { desc, eq, SQL } from "drizzle-orm";
import Comment from "./Comment";
import { CommentFeedProps } from "@/app/types/commentTypes";
import CommentUploader from "./CommentUploader";

type Comment = typeof comments.$inferSelect;

export default async function CommentFeed({
  userId,
  postId,
}: CommentFeedProps) {
  const postComments = await db
    .select({
      comment: comments,
      user: users.name,
    })
    .from(comments)
    .innerJoin(users, eq(users.id, comments.userId))
    .where(eq(comments.postId, postId))
    .orderBy(desc(comments.createdAt))
    .limit(2);

  return (
    <div className="flex flex-col">
      {postComments.map((comment) => (
        <Comment
          key={comment.comment.id}
          name={comment.user}
          {...comment.comment}
        />
      ))}
      <CommentUploader postId={postId} />
    </div>
  );
}
