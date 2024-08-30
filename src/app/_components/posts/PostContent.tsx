"use client"; // This makes the component a client component

import React, { useState } from "react";

function PostContent({
  content,
  characterLimit,
}: {
  content: string;
  characterLimit: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className="break-words whitespace-normal mt-2">
        {isExpanded || content.length <= characterLimit
          ? content
          : `${content.slice(0, characterLimit)}...`}
      </p>
      {content.length > characterLimit && (
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

export default PostContent;
