import { Button } from "@/components/ui/button";
import { PlusIcon } from "@/components/icons/plus-icon";
import { PromptCard } from "@/components/shared/prompt-card.component";
import Link from "next/link";
import { getPromptsAction } from "./action";

export default async function Home() {
  const prompts = await getPromptsAction();
  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Prompts</h2>
          <Link href="/new-prompt">
            <Button size="sm" variant="outline" className="ml-auto">
              <PlusIcon className="mr-2 h-4 w-4" />
              New Prompt
            </Button>
          </Link>
        </div>
        <p className="text-muted-foreground">
          Manage your prompts and share them with others.
        </p>
      </div>
      <ul className="grid gap-4">
        {prompts.map((prompt) => (
          <li key={prompt.id}>
            <PromptCard {...prompt} />
          </li>
        ))}
      </ul>
    </div>
  );
}
