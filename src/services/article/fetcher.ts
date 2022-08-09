type FieldsType = {
  abstract: string | string[];
}

type ResponseData = {
  docs: FieldsType;
}

type ArticleData = {
  response: ResponseData
}

export async function articleFetcher(title: string | string[]): Promise<ArticleData> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/search/v2/articlesearch.json?q=${title}&api-key=${process.env.NEXT_PUBLIC_KEY}`);

  try {
    return await response.json();
  } catch (e) {
    throw new Error(e.message)
  }
}