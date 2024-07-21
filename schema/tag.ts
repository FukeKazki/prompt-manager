import { z } from "zod";
import { BaseSchema } from "./base";

export const TagSchema = z
  .object({
    title: z.string(),
    description: z.string(),
  })
  .merge(BaseSchema);

export type Tag = z.infer<typeof TagSchema>;
