import Link from "next/link";
import { PauseIcon } from "../icons/pause-icon";

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
    </header>
  );
}
