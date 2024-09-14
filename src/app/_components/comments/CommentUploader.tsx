"use client";

import { useTransition } from "react";
// import { uploadComment } from "./actions";
import { commentValues } from "@/validation";
import { useForm } from "react-hook-form";
import { Form, FormField } from "../ui/form";
import { Textarea } from "../ui/textarea";

import { uploadComment } from "./actions";
import { Button } from "../ui/Button";

export default function CommentUploader({ postId }: { postId: number }) {
  const form = useForm<commentValues>();
  const [isLoading, startTransition] = useTransition();
  async function onSubmit(values: commentValues) {
    startTransition(async () => {
      try {
        values.postId = postId;
        await uploadComment(values);
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
