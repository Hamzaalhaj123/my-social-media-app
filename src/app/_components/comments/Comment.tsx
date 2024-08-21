import Image from "next/image";
import profile from "../../../public/profile.png";
import { Comment as CommentType } from "@/app/types/commentTypes";

export default function Comment({ userId, comment, createdAt }: CommentType) {
  return (
    <div className="rounded shadow-md mb-2">
      <div className="flex items-center space-x-2">
        <Image src={profile} alt="profile" className="size-7" />
        <h1>User {userId}</h1>
      </div>
      <p>{comment}</p>
    </div>
  );
}
