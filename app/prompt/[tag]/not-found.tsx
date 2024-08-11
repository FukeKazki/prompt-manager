import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <Link
        href="/"
        className="bg-blue-500 text-white hover:bg-blue-400 mt-4 rounded-md px-4 py-2 text-sm transition-colors"
      >
        Go Back
      </Link>
    </main>
  );
}
