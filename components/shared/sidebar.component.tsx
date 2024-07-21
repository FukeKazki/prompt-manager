import { TagIcon } from "@/components/icons/tag-icon";
import { HashIcon } from "@/components/icons/hash-icon";
import { Button } from "@/components/ui/button";
import { getTagsAction } from "@/app/action";
import Link from "next/link";

export async function Sidebar() {
  const tags = await getTagsAction();
  return (
    <aside className="hidden w-64 flex-col border-r bg-muted/40 p-4 sm:flex">
      <div className="flex items-center gap-2 border-b pb-4">
        <TagIcon className="h-5 w-5" />
        <h3 className="text-lg font-medium">Tags</h3>
      </div>
      <nav className="mt-4 flex flex-col gap-2">
        {tags.map((tag) => (
          <Link href={`/prompt/${tag.title}`} key={tag.id}>
            <Button variant="ghost" size="sm" className="justify-start gap-2">
              <HashIcon className="h-4 w-4" />
              <span>{tag.title}</span>
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
