import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CopyIcon } from "./icons/copy-icon";
import { PauseIcon } from "./icons/pause-icon";
import { PlusIcon } from "./icons/plus-icon";
import { TagIcon } from "./icons/tag-icon";
import { HashIcon } from "./icons/hash-icon";
import { FilePenIcon } from "./icons/file-pen-icon";

export function Component() {
  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-20 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <Link
          href="#"
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
        <Button size="icon" variant="outline" className="h-8 w-8">
          <PlusIcon className="h-4 w-4" />
          <span className="sr-only">Add Prompt</span>
        </Button>
      </header>
      <div className="flex flex-1 overflow-hidden">
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
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">Prompts</h2>
                <Button size="sm" variant="outline" className="ml-auto">
                  <PlusIcon className="mr-2 h-4 w-4" />
                  New Prompt
                </Button>
              </div>
              <p className="text-muted-foreground">
                Manage your prompts and share them with others.
              </p>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Describe a beautiful sunset</CardTitle>
                  <CardDescription>
                    Write a detailed description of a breathtaking sunset.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Public</Badge>
                      <div className="flex-1" />
                      <div className="flex items-center gap-2">
                        <TagIcon className="h-4 w-4" />
                        <span className="text-sm">nature, writing</span>
                      </div>
                    </div>
                    <p>
                      The sky was ablaze with a stunning array of colors,
                      painting the horizon in a breathtaking display. Hues of
                      fiery orange and deep crimson danced across the clouds,
                      casting a warm glow over the tranquil landscape below.
                      Streaks of vibrant pink and delicate lavender intertwined,
                      creating a mesmerizing tapestry that seemed to stretch on
                      forever.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <Button size="icon" variant="ghost">
                    <CopyIcon className="h-4 w-4" />
                    <span className="sr-only">Copy Prompt</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <FilePenIcon className="h-4 w-4" />
                    <span className="sr-only">Edit Prompt</span>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Describe a futuristic city</CardTitle>
                  <CardDescription>
                    Imagine and describe a technologically advanced city of the
                    future.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Private</Badge>
                      <div className="flex-1" />
                      <div className="flex items-center gap-2">
                        <TagIcon className="h-4 w-4" />
                        <span className="text-sm">sci-fi, writing</span>
                      </div>
                    </div>
                    <p>
                      Towering skyscrapers of gleaming glass and steel pierced
                      the sky, their sleek, futuristic designs a testament to
                      the citys technological prowess. Hovering transport pods
                      glided effortlessly through the air, while autonomous
                      vehicles navigated the bustling streets below. The city
                      hummed with the energy of innovation, where advanced AI
                      systems and renewable energy sources powered every aspect
                      of daily life.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <Button size="icon" variant="ghost">
                    <CopyIcon className="h-4 w-4" />
                    <span className="sr-only">Copy Prompt</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <FilePenIcon className="h-4 w-4" />
                    <span className="sr-only">Edit Prompt</span>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Describe a cozy cabin in the woods</CardTitle>
                  <CardDescription>
                    Paint a vivid picture of a peaceful, rustic cabin nestled in
                    a serene forest.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Public</Badge>
                      <div className="flex-1" />
                      <div className="flex items-center gap-2">
                        <TagIcon className="h-4 w-4" />
                        <span className="text-sm">nature, writing</span>
                      </div>
                    </div>
                    <p>
                      The cabin stood as a cozy haven, its weathered wooden
                      exterior blending seamlessly with the towering pines that
                      surrounded it. A plume of smoke curled from the chimney,
                      hinting at the warmth and comfort that awaited within. A
                      well-worn path led to the front door, where a rocking
                      chair beckoned visitors to pause and take in the tranquil
                      beauty of the forest.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <Button size="icon" variant="ghost">
                    <CopyIcon className="h-4 w-4" />
                    <span className="sr-only">Copy Prompt</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <FilePenIcon className="h-4 w-4" />
                    <span className="sr-only">Edit Prompt</span>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
        <div className="hidden sm:block sm:w-64 sm:flex-shrink-0 sm:border-l sm:bg-muted/40 sm:p-4">
          <div className="flex items-center gap-2 border-b pb-4">
            <TagIcon className="h-5 w-5" />
            <h3 className="text-lg font-medium">Quick Tags</h3>
          </div>
          <nav className="mt-4 flex flex-col gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="justify-start gap-2"
              onClick={() => {
                navigator.clipboard.writeText("#AI").catch(console.error);
              }}
            >
              <HashIcon className="h-4 w-4" />
              <span>#AI</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start gap-2"
              onClick={() => {
                navigator.clipboard.writeText("#Chatbot").catch(console.error);
              }}
            >
              <HashIcon className="h-4 w-4" />
              <span>#Chatbot</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="justify-start gap-2"
              onClick={() => {
                navigator.clipboard.writeText("#Chatbot").catch(console.error);
              }}
            >
              <HashIcon className="h-4 w-4" />
              <span>#Copywriting</span>
            </Button>
            <Button variant="ghost" size="sm" className="justify-start gap-2">
              <HashIcon className="h-4 w-4" />
              <span>#Productivity</span>
            </Button>
            <Button variant="ghost" size="sm" className="justify-start gap-2">
              <HashIcon className="h-4 w-4" />
              <span>#Writing</span>
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
