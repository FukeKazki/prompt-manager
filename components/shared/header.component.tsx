import Link from "next/link";
import { PauseIcon } from "../icons/pause-icon";
import { Input } from "../ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <Link
        href="/"
        className="flex items-center gap-2 font-semibold"
        prefetch={false}
      >
        <PauseIcon className="h-6 w-6" />
        <span>Prompt Manager</span>
      </Link>
      <div className="relative flex-1">
        <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search prompts..."
          className="w-full rounded-lg bg-muted pl-8 focus:bg-background"
        />
      </div>
    </header>
  );
}
