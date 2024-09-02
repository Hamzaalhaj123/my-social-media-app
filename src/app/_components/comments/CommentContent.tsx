"use client"; // This makes the component a client component

import { useExpand } from "@/app/_hooks/shared/useExpand";
import React, { useState } from "react";

function CommentContent({
  comment,
  characterLimit,
}: {
  comment: string;
  characterLimit: number;
}) {
  const [isExpanded, toggleReadMore] = useExpand();

  return (
    <div>
      <p className="break-words whitespace-normal mt-2">
        {isExpanded || comment.length <= characterLimit
          ? comment
          : `${comment.slice(0, characterLimit)}...`}
      </p>
      {comment.length > characterLimit && (
        <button
          onClick={toggleReadMore}
          className="text-blue-500 hover:underline mt-2"
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default CommentContent;
