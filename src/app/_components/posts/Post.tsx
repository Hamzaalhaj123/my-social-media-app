import { posts } from "../../../../drizzle/schema";

import { Button } from "../../_components/ui/button";
import { Textarea } from "../../_components/ui/textarea";

import form from "../../../public/form.jpg";
import Image from "next/image";
import { MessageSquare, Share2, ThumbsUp, Upload } from "lucide-react";

import profile from "../../../public/profile.png";
import { postValues } from "@/validation";
import { uploadPost } from "./actions";
import PostUploader from "./PostUploader";
import CommentFeed from "../comments/CommentFeed";

type PostProps = typeof posts.$inferSelect & {
  username: string;
  UserImage: string;
};

function Post({
  createdAt,
  content,
  id,
  image,
  userId,
  updatedAt,
  username,
  UserImage,
}: PostProps) {
  return (
    <>
      <div>
        <PostUploader />
        <div className="flex space-x-2 items-center">
          <Image src={profile} alt="home" className="size-7" />
          <h1> {username}</h1>
        </div>
        <p>{content}</p>
      </div>
      {/* <Image src={form} alt="form" /> Add the Image upload feature later */}
      <div className="flex my-4 space-x-4">
        <ThumbsUp />
        <MessageSquare />
        <Share2 />
      </div>
      <CommentFeed userId={userId} postId={id} />
    </>
  );
}

export default Post;
