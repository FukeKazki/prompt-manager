"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { TagIcon } from "../icons/tag-icon";
import { Button } from "../ui/button";
import { CopyIcon } from "../icons/copy-icon";
import { FilePenIcon } from "../icons/file-pen-icon";
import { Badge } from "../ui/badge";
import { Prompt } from "@/schema/prompt";
import { ComponentProps } from "react";

type Props = Prompt & ComponentProps<typeof Card>;

export function PromptCard({
  title,
  description,
  text,
  tags,
  ...props
}: Props) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text).catch(console.error);
  };
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline">Public</Badge>
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              <TagIcon className="h-4 w-4" />
              {tags.map((tag) => (
                <span className="text-sm" key={tag.title}>
                  {tag.title}
                </span>
              ))}
            </div>
          </div>
          <p className="whitespace-pre-wrap">{text}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-2">
        <Button size="icon" variant="ghost" onClick={handleCopy}>
          <CopyIcon className="h-4 w-4" />
          <span className="sr-only">Copy Prompt</span>
        </Button>
        <Button size="icon" variant="ghost">
          <FilePenIcon className="h-4 w-4" />
          <span className="sr-only">Edit Prompt</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
