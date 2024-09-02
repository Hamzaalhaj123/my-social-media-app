import { useState } from "react";

export function useExpand(initialIsExpanded = false) {
  const [isExpanded, setIsExpanded] = useState(initialIsExpanded);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return [isExpanded, toggleReadMore] as const;
}
