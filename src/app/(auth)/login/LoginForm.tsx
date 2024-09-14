"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import {
  LoginValues,
  SignUpValues,
  loginSchema,
  signUpSchema,
} from "@/validation";
import { Button } from "@/app/_components/ui/Button";
import { PasswordInput } from "@/app/_components/ui/passwordInput";
import { login } from "@/app/(auth)/login/actions";

export default function LoginForm() {
  const [error, setError] = useState<string>();

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      usernameOrEmail: "",
      password: "",
    },
  });

  const [isLoading, startTransition] = useTransition();
  async function onSubmit(values: LoginValues) {
    setError(undefined);
    startTransition(async () => {
      try {
        await login(values);
        console.log(values);
      } catch (error) {
        console.error(error);
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        {error && <p className="text-center ">{error}</p>}
        <FormField
          control={form.control}
          name="usernameOrEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username Or Email" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder="password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant={"default"}
          colour={"secondary"}
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          Log In
        </Button>
      </form>
    </Form>
  );
}
