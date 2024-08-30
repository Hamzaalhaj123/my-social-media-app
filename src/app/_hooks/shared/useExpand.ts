"use client";

import { useState } from "react";

export default function useExpand(characterLimit: number) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
}
