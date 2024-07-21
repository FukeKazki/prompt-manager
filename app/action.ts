"use server";

import * as refs from "@/firebase-client/refs";
import { createDoc, getDocsWithQuery } from "@/firebase-client/utils";
import { OmitBase } from "@/schema/base";
import { Prompt } from "@/schema/prompt";
import { orderBy, query, where } from "firebase/firestore";
import { revalidateTag, unstable_cache } from "next/cache";

export async function getPromptsAction() {
  return unstable_cache(
    () =>
      refs.pipe(
        query(refs.promptsRef, orderBy("createdAt", "desc")),
        getDocsWithQuery,
      ),
    ["get-prompts"],
    {
      tags: ["get-prompts"],
    },
  )();
}

export async function getPromptsByTagAction(tagTitle: string) {
  return unstable_cache(
    () =>
      refs.pipe(
        query(
          refs.promptsRef,
          where("tags", "array-contains", tagTitle),
          orderBy("createdAt", "desc"),
        ),
        getDocsWithQuery,
      ),
    ["get-prompts", tagTitle],
    {
      tags: ["get-prompts", tagTitle],
    },
  )();
}

export async function getTagsAction() {
  return unstable_cache(
    () => refs.pipe(refs.tagsRef, getDocsWithQuery),
    ["get-tags"],
    {
      tags: ["get-tags"],
    },
  )();
}

export async function createPromptAction(data: OmitBase<Prompt>) {
  await refs.pipe(refs.promptsRef, (x) => createDoc(x, data));
  revalidateTag("get-prompts");
}
