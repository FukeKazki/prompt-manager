import { getTagsAction } from "../action";
import { NewPromptForm } from "./components/new-prompt-form.component";

export default async function NewPrompt() {
  const tags = await getTagsAction();

  return <NewPromptForm tags={tags} />;
}
