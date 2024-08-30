import Image from "next/image";
import profile from "../../../public/profile.png";
import { Comment as CommentType } from "@/app/types/commentTypes";
import CommentContent from "./CommentContent"; // Import the client component

export default function Comment({
  userId,
  comment,
  createdAt,
  name,
}: CommentType) {
  const characterLimit = 100; // Set your character limit for the comment content here

  return (
    <div className="rounded shadow-md mb-2 p-4 bg-white">
      <div className="flex items-center space-x-2">
        <Image src={profile} alt="profile" className="size-7" />
        <h1 className="font-bold">{name}</h1>
      </div>
      {/* Use the client component to handle "Read more" functionality */}
      <CommentContent comment={comment} characterLimit={characterLimit} />
    </div>
  );
}
