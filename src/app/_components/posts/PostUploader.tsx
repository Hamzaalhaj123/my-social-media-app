"use client";

import React, { useState, useTransition } from "react";
import { uploadPost } from "./actions";
import { postValues } from "@/validation";
import { Form, FormField } from "../ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

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
