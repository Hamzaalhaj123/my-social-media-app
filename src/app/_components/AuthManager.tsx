import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import Post from "./Post";

export default function AuthManager() {
  return (
    <>
      <div className="flex flex-col gap-4 bg-white">
        <ClerkLoading>
          <div className="inline-block size-8 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <Post
              id="1"
              createdAt={new Date()}
              description="testsss"
              image="/building.jpg"
              userId="1"
              updatedAt={new Date()}
            />
            <SignOutButton />

            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-1 text-sm">
              <SignInButton />
            </div>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </>
  );
}
