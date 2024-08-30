import { db } from "@/db";
import { posts, users } from "../../../../drizzle/schema";
import Post from "./Post";
import { PostProps } from "./postTypes";
import { eq } from "drizzle-orm";
export default async function PostsFeed() {
  // Fetch posts and join with users to get the name field
  const postsFeed = await db
    .select({
      post: posts, // Fetch all fields from the posts table
      user: users.name, // Fetch only the name field from the users table
    })
    .from(posts)
    .innerJoin(users, eq(users.id, posts.userId)) // Join on userId
    .limit(7); // Limit to 7 posts

  return (
    <div className="h-full p-5 bg-background text-foreground max-w-lg  ">
      {postsFeed.map(({ post, user }) => (
        <Post key={post.id} {...post} name={user} /> // Spread post and add name directly
      ))}
    </div>
  );
}
