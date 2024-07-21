import { z } from "zod";

export const BaseSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Base = z.infer<typeof BaseSchema>;

export type OmitBase<T> = Omit<T, keyof Base>;
