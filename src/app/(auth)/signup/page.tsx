import SignUpForm from "@/app/(auth)/signup/SignUpForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SignUp",
  description: "SignUp page",
};
export default function Page() {
  return (
    <main>
      SignUp Page
      <SignUpForm />
    </main>
  );
}
