import { Button } from "@/components/ui/button";
import { PlusIcon } from "@/components/icons/plus-icon";
import { PromptCard } from "@/components/shared/prompt-card.component";
import Link from "next/link";
import { getPromptsByTagAction } from "../../action";
import { notFound } from "next/navigation";

export default async function PromptPage({
  params,
}: {
  params: { tag: string };
}) {
  const prompts = await getPromptsByTagAction(params.tag);

  if (!prompts.length) {
    notFound();
  }

  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">#{params.tag}</h2>
          <Link href="/new-prompt">
            <Button size="sm" variant="outline" className="ml-auto">
              <PlusIcon className="mr-2 h-4 w-4" />
              New Prompt
            </Button>
          </Link>
        </div>
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
