import { z } from "zod";
import { TAGS, TagSchema } from "./tag";

export const PromptSchema = z.object({
  title: z.string(),
  description: z.string(),
  text: z.string(),
  tags: z.array(TagSchema),
  isPublic: z.boolean(),
});

export type Prompt = z.infer<typeof PromptSchema>;

export const PROMPTS: Prompt[] = [
  {
    title: "画像生成",
    description: "命令書",
    text: `#命令書\n以下の制約を遵守し画像を生成すること。\n##制作条件\n- 楽譜に関連しているもの\n- 画像サイズ 960x480`,
    tags: [TAGS.Image],
    isPublic: true,
  },
  {
    title: "天気予報",
    description: "天気予報のプロンプト",
    text: `#天気予報\n以下の制約を遵守し天気予報を表示すること。\n##制作条件\n- 日本全国の天気予報\n- 今日と明日の予報を表示`,
    tags: [TAGS.Weather],
    isPublic: true,
  },
  {
    title: "料理レシピ",
    description: "レシピのプロンプト",
    text: `#料理レシピ\n以下の制約を遵守し料理レシピを作成すること。\n##制作条件\n- 簡単に作れる\n- 材料は5つ以内\n- 和食`,
    tags: [TAGS.Recipe],
    isPublic: true,
  },
  {
    title: "旅行プラン",
    description: "旅行プランのプロンプト",
    text: `#旅行プラン\n以下の制約を遵守し旅行プランを作成すること。\n##制作条件\n- 1泊2日\n- 国内旅行\n- 予算は5万円以内`,
    tags: [TAGS.Travel, TAGS.Plan],
    isPublic: true,
  },
  {
    title: "本のレビュー",
    description: "書籍レビューのプロンプト",
    text: `#本のレビュー\n以下の制約を遵守し書籍レビューを作成すること。\n##制作条件\n- 最近読んだ本\n- 感想を具体的に書く`,
    tags: [TAGS.Book, TAGS.Review],
    isPublic: true,
  },
  {
    title: "プログラミング課題",
    description: "プログラミングの課題",
    text: `#プログラミング課題\n以下の制約を遵守しプログラミング課題を作成すること。\n##制作条件\n- 初心者向け\n- JavaScriptを使用\n- 入力された文字列を逆順にする関数`,
    tags: [TAGS.Travel],
    isPublic: true,
  },
  {
    title: "エクササイズプラン",
    description: "エクササイズのプロンプト",
    text: `#エクササイズプラン\n以下の制約を遵守しエクササイズプランを作成すること。\n##制作条件\n- 毎日30分\n- 家でできる運動\n- 1週間のプラン`,
    tags: [TAGS.Plan],
    isPublic: true,
  },
  {
    title: "映画の紹介",
    description: "映画紹介のプロンプト",
    text: `#映画の紹介\n以下の制約を遵守し映画の紹介を作成すること。\n##制作条件\n- おすすめの映画\n- ジャンルを明記\n- あらすじを簡潔に`,
    tags: [TAGS.Review],
    isPublic: true,
  },
  {
    title: "音楽アルバムレビュー",
    description: "音楽レビューのプロンプト",
    text: `#音楽アルバムレビュー\n以下の制約を遵守し音楽アルバムのレビューを作成すること。\n##制作条件\n- 最近リリースされたアルバム\n- 感想を具体的に書く\n- おすすめの曲を紹介`,
    tags: [],
    isPublic: true,
  },
  {
    title: "コーディングチャレンジ",
    description: "コーディングチャレンジのプロンプト",
    text: `#コーディングチャレンジ\n以下の制約を遵守しコーディングチャレンジを作成すること。\n##制作条件\n- 中級者向け\n- Pythonを使用\n- フィボナッチ数列を生成する関数`,
    tags: [],
    isPublic: true,
  },
];
