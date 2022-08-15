import { ArticleData } from "./types";

export async function articleFetcher(id: string): Promise<ArticleData> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/search/v2/articlesearch.json?fq=uri:("nyt://article/${id}")&api-key=${process.env.NEXT_PUBLIC_KEY}`);

  try {
    return await response.json();
  } catch (e) {
    throw new Error(e.message)
  }
}