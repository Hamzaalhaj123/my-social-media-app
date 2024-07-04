"use client";
import {
  ClerkLoaded,
  ClerkLoading,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ClerkLoading>
        <div className="inline-block size-8 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <div>Signed in</div>
        </SignedIn>
        <SignedOut>
          <div className="flex items-center gap-1 text-sm">
            <Link href="/sign-in">Login/Register</Link>
          </div>
        </SignedOut>
      </ClerkLoaded>
    </div>
  );
}
