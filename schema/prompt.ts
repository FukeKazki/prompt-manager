import { z } from "zod";
import { BaseSchema } from "./base";

export const PromptSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().min(1),
    text: z.string().min(1),
    tags: z.array(z.string()),
    isPublic: z.boolean(),
  })
  .merge(BaseSchema);

export type Prompt = z.infer<typeof PromptSchema>;
