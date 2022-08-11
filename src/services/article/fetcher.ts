import { ArticleData } from "./types";

export async function articleFetcher(url: string): Promise<ArticleData> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/search/v2/articlesearch.json?fq=uri:("nyt:/${url}")&api-key=${process.env.NEXT_PUBLIC_KEY}`);
  console.log('RUN FETCHER', url);

  try {
    return await response.json();
  } catch (e) {
    throw new Error(e.message)
  }
}