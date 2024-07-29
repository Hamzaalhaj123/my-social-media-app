import React from "react";
import { posts } from "../../../drizzle/schema";
import Image from "next/image";

type PostProps = typeof posts.$inferSelect;

function Post({ createdAt, content, id, image, userId }: PostProps) {
  // { username }: { username: string }
  return <div>post</div>;
}

export default Post;
