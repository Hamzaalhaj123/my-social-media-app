"use client";
import Image from "next/image";
import React from "react";
import form from "../../../public/form.jpg";
import SignUpForm from "@/app/(auth)/signup/SignUpForm";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import useTheme from "@/app/_hooks/shared/useTheme";
import { MoonIcon, SunIcon } from "lucide-react";
import ThemeSwitcher from "@/app/_components/NavBar/ThemeSwitcher";

export default function SignUpPage() {
  const [theme, handleSwitch] = useTheme();

  return (
    <main className="flex h-screen items-center justify-center p-5 bg-background-darker">
      <ThemeSwitcher />
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl  shadow-2xl bg-background">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-primary"> Welcome to Friend</span>
              <span className="text-secondary">Hub</span>
            </h1>
            <p className="text-foreground-muted">
              A place where even <span className="italic">you</span> can find a
              caring friend!
            </p>
          </div>
          <div className="space-y-5">
            <SignUpForm />
            <Link
              href="/login"
              className="block text-center hover:underline text-foreground-muted "
            >
              Already have an account? Log in
            </Link>
          </div>
        </div>
        <Image
          src={form}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
