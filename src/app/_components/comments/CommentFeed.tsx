import { db } from "@/db"; // Import your db instance
import { comments, users } from "../../../../drizzle/schema"; // Import the comments table schema
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
  const postComments = await db
    .select({
      comment: comments,
      user: users.name,
    })
    .from(comments)
    .innerJoin(users, eq(users.id, comments.userId))
    .limit(2);

  // // Fetch posts and join with users to get the name field
  // const postsFeed = await db
  //   .select({
  //     post: posts, // Fetch all fields from the posts table
  //     user: users.name, // Fetch only the name field from the users table
  //   })
  //   .from(posts)
  //   .innerJoin(users, eq(users.id, posts.userId)) // Join on userId
  //   .limit(7); // Limit to 7 posts

  console.log(postComments);
  postComments[0].comment;

  return (
    <div className="flex flex-col">
      {postComments.map((comment) => (
        <Comment
          key={comment.comment.id}
          name={comment.user}
          {...comment.comment}
        /> // Pass the comment props
      ))}
      <CommentUploader postId={postId} />
    </div>
  );
}
