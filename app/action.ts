"use server";

import * as refs from "@/firebase-client/refs";
import { createDoc, getDocsWithQuery } from "@/firebase-client/utils";
import { OmitBase } from "@/schema/base";
import { Prompt } from "@/schema/prompt";
import { orderBy, query, where } from "firebase/firestore";

export async function getPromptsAction() {
  return refs.pipe(
    query(refs.promptsRef, orderBy("createdAt", "desc")),
    getDocsWithQuery,
  );
}

export async function getPromptsByTagAction(tagTitle: string) {
  return refs.pipe(
    query(
      refs.promptsRef,
      where("tags", "array-contains", tagTitle),
      orderBy("createdAt", "desc"),
    ),
    getDocsWithQuery,
  );
}

export async function getTagsAction() {
  return refs.pipe(refs.tagsRef, getDocsWithQuery);
}

export async function createPromptAction(data: OmitBase<Prompt>) {
  return refs.pipe(refs.promptsRef, (x) => createDoc(x, data));
}
