import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="h-[calc(100vh-96px)] flex items-center justify-center">
      <SignUp />
    </div>
  );
};

export default page;
