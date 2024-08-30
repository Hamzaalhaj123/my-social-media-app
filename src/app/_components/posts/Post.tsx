import Image from "next/image";
import profile from "../../../public/profile.png";
import { PostProps } from "./postTypes";
import CommentFeed from "../comments/CommentFeed";
import PostContent from "./PostContent"; // Import the client component
import { MessageSquareIcon, Share2Icon, ThumbsUpIcon } from "lucide-react";

function Post({
  createdAt,
  content,
  id,
  image,
  userId,
  updatedAt,
  name,
}: PostProps) {
  const characterLimit = 150; // Set your character limit for the post content here

  return (
    <>
      <div className="rounded shadow-md mb-4 p-4 bg-white">
        <div>
          <div className="flex space-x-2 items-center">
            <Image src={profile} alt="home" className="size-7" />
            <h1 className="font-bold">{name}</h1>
          </div>
         
          <PostContent content={content} characterLimit={characterLimit} />
        </div>
        <div className="flex my-4 space-x-4">
          <ThumbsUpIcon />
          <MessageSquareIcon />
          <Share2Icon />
        </div>
        <CommentFeed userId={userId} postId={id} />
      </div>
    </>
  );
}

export default Post;
