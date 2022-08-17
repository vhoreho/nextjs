import { SectionData } from "./types";

export async function categoryFetcher(category: string): Promise<SectionData> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/topstories/v2/${category}.json?api-key=${process.env.NEXT_PUBLIC_KEY}`);

  try {
    return await response.json();
  } catch (e) {
    throw new Error(e.message)
  }
}