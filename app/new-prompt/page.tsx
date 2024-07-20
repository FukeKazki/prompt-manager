"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { PlusIcon } from "@/components/icons/plus-icon";
import { TagIcon } from "@/components/icons/tag-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Prompt, PromptSchema } from "@/schema/prompt";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Toggle } from "@/components/ui/toggle";
import { TAGS } from "@/schema/tag";
import { useRef } from "react";

export default function NewPrompt() {
  const submitRef = useRef<HTMLButtonElement>(null);
  const form = useForm<Prompt>({
    resolver: zodResolver(PromptSchema),
    defaultValues: {
      title: "",
      description: "",
      text: "",
      isPublic: true,
      tags: [],
    },
  });

  const handleSubmit: SubmitHandler<Prompt> = (data) => {
    console.log(data);
  };

  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">New Prompt</h2>
          <Button
            size="sm"
            variant="outline"
            className="ml-auto"
            type="button"
            onClick={() => {
              submitRef?.current?.click();
            }}
          >
            <PlusIcon className="h-4 w-4 mr-2" />
            Save Prompt
          </Button>
        </div>
        <p className="text-muted-foreground">
          Create a new prompt to share with others.
        </p>
      </div>

      <Form {...form}>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Card>
            <CardContent className="py-6">
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-bold">
                        Prompt Title
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="料理レシピ"
                          className="font-bold"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prompt description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="レシピのプロンプト"
                          className="text-muted-foreground"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prompt</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={`#料理レシピ\n以下の制約を遵守し料理レシピを作成すること。\n##制作条件\n- 簡単に作れる\n- 材料は5つ以内\n- 和食`}
                          className="min-h-[200px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="isPublic"
                  render={({ field }) => (
                    <FormItem className="flex gap-2 items-center">
                      <FormLabel>Public</FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          style={{
                            marginTop: 0,
                          }}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <ul className="flex gap-4">
                  {Object.values(TAGS).map((tag, index) => (
                    <li key={index}>
                      <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Toggle
                                key={index}
                                className="flex gap-2"
                                onClick={() => {
                                  const tags = field.value;
                                  if (tags.find((t) => t.title === tag.title)) {
                                    field.onChange(
                                      tags.filter((t) => t.title !== tag.title),
                                    );
                                  } else {
                                    field.onChange([...tags, tag]);
                                  }
                                }}
                              >
                                <TagIcon className="w-4 h-4" />
                                {tag.title}
                              </Toggle>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
          <button type="submit" className="hidden" ref={submitRef}>
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
}
