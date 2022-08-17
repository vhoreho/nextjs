type Headline = {
  main: string | string[];
}

type Multimedia = {
  url: string
}

export type ArticleModel = {
  abstract: string | string[];
  headline: Headline;
  lead_paragraph: string | string[];
  section_name: string | string[];
  pub_date?: string;
  multimedia?: Multimedia[];
}