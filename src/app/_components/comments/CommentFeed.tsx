import { db } from "@/db"; // Import your db instance
import { comments } from "../../../../drizzle/schema"; // Import the comments table schema
import { eq } from "drizzle-orm";
import Comment from "./Comment";
import { CommentFeedProps } from "@/app/types/commentTypes";
import CommentUploader from "./CommentUploader";

type Comment = typeof comments.$inferSelect;

export default async function CommentFeed({
  userId,
  postId,
}: CommentFeedProps) {
  // Fetch comments for the specific postId
  const postComments: Comment[] = await db
    .select()
    .from(comments)
    .where(eq(comments.postId, postId))
    .limit(2);

  console.log(postComments);

  return (
    <div className="flex flex-col">
      {postComments.map((comment) => (
        <Comment key={comment.id} {...comment} /> // Pass the comment props
      ))}
      <CommentUploader postId={postId as number} />
    </div>
  );
}
