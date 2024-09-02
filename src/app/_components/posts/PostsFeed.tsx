import { db } from "@/db";
import { posts, users } from "../../../../drizzle/schema";
import Post from "./Post";
import { PostProps } from "./postTypes";
import { eq } from "drizzle-orm";
export default async function PostsFeed() {
  const postsFeed = await db
    .select({
      post: posts,
      user: users.name,
    })
    .from(posts)
    .innerJoin(users, eq(users.id, posts.userId))
    .limit(7);

  return (
    <div className="h-full p-5 bg-background text-foreground max-w-lg  ">
      {postsFeed.map(({ post, user }) => (
        <Post key={post.id} {...post} name={user} />
      ))}
    </div>
  );
}
