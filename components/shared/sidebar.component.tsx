import { TagIcon } from "@/components/icons/tag-icon";
import { HashIcon } from "@/components/icons/hash-icon";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col border-r bg-muted/40 p-4 sm:flex">
      <div className="flex items-center gap-2 border-b pb-4">
        <TagIcon className="h-5 w-5" />
        <h3 className="text-lg font-medium">Tags</h3>
      </div>
      <nav className="mt-4 flex flex-col gap-2">
        <Button variant="ghost" size="sm" className="justify-start gap-2">
          <HashIcon className="h-4 w-4" />
          <span>AI</span>
        </Button>
        <Button variant="ghost" size="sm" className="justify-start gap-2">
          <HashIcon className="h-4 w-4" />
          <span>Chatbot</span>
        </Button>
        <Button variant="ghost" size="sm" className="justify-start gap-2">
          <HashIcon className="h-4 w-4" />
          <span>Copywriting</span>
        </Button>
        <Button variant="ghost" size="sm" className="justify-start gap-2">
          <HashIcon className="h-4 w-4" />
          <span>Productivity</span>
        </Button>
        <Button variant="ghost" size="sm" className="justify-start gap-2">
          <HashIcon className="h-4 w-4" />
          <span>Writing</span>
        </Button>
      </nav>
    </aside>
  );
}
