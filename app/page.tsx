import { Button } from "@/components/ui/button";
import { PlusIcon } from "@/components/icons/plus-icon";
import { PromptCard } from "@/components/shared/prompt-card.component";
import Link from "next/link";
import { PROMPTS } from "@/schema/prompt";

export default function Home() {
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
      <div className="grid gap-4">
        {PROMPTS.map((prompt) => (
          <PromptCard key={prompt.title} {...prompt} />
        ))}
      </div>
    </div>
  );
}
