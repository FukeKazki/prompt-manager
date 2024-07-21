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
import { Prompt } from "@/schema/prompt";
import { ComponentProps } from "react";
import { useToast } from "../ui/use-toast";

type Props = Prompt & ComponentProps<typeof Card>;

export function PromptCard({
  title,
  description,
  text,
  tags,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isPublic,
  ...props
}: Props) {
  const { toast } = useToast();
  const handleCopy = () => {
    navigator.clipboard.writeText(text).catch(console.error);
    toast({
      title: "クリップボードにコピーしました",
    });
  };
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {/* <Badge variant="outline">Public</Badge> */}
          <p className="whitespace-pre-wrap p-4 bg-accent">{text}</p>
        </div>
      </CardContent>
      <CardFooter className="grid gap-2">
        <Button size="icon" variant="ghost" onClick={handleCopy}>
          <CopyIcon className="h-4 w-4" />
          <span className="sr-only">Copy Prompt</span>
        </Button>
        <div className="flex items-center gap-2">
          {tags.map((tag) => (
            <span
              className="text-sm inline-flex items-center gap-1"
              key={tag.title}
            >
              <TagIcon className="h-4 w-4" />
              {tag.title}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
