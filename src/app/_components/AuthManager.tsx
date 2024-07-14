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

export default function AuthManager() {
  return (
    <>
      <ClerkLoading>
        <div className="inline-block size-8 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <SignOutButton />
          <UserButton />
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-1 text-sm">
            <SignInButton />
          </div>
        </SignedOut>
      </ClerkLoaded>
    </>
  );
}
