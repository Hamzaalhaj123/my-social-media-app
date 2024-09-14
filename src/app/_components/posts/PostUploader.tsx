"use client";

import { postValues } from "@/validation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Form, FormField } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { uploadPost } from "./actions";
import { Button } from "../ui/Button";

export default function PostUploader() {
  const form = useForm<postValues>();
  const [isLoading, startTransition] = useTransition();
  async function onSubmit(values: postValues) {
    startTransition(async () => {
      try {
        await uploadPost(values);
        console.log(values);
      } catch (error) {
        console.error(error);
      }
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => <Textarea placeholder="Content" {...field} />}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
