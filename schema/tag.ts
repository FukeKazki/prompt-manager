import { z } from "zod";

export const TagSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export type Tag = z.infer<typeof TagSchema>;

export const TAGS = {
  Image: {
    title: "Image",
    description: "画像生成",
  },
  Weather: {
    title: "Weather",
    description: "天気予報",
  },
  API: {
    title: "API",
    description: "APIを使用",
  },
  Recipe: {
    title: "Recipe",
    description: "料理レシピ",
  },
  Food: {
    title: "Food",
    description: "食べ物",
  },
  Travel: {
    title: "Travel",
    description: "旅行",
  },
  Plan: {
    title: "Plan",
    description: "プラン",
  },
  Book: {
    title: "Book",
    description: "本",
  },
  Review: {
    title: "Review",
    description: "レビュー",
  },
};
