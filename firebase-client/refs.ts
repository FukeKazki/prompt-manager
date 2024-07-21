import { collection, CollectionReference, setDoc } from "firebase/firestore";
import { firestore } from "./app";
import { Tag } from "@/schema/tag";
import { Prompt } from "@/schema/prompt";

export { pipe } from "remeda";

export const tagsRef = collection(
  firestore,
  "tags",
) as CollectionReference<Tag>;

export const promptsRef = collection(
  firestore,
  "prompts",
) as CollectionReference<Prompt>;
