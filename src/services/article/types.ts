type Headline = {
  main: string | string[];
}

type Multimedia = {
  url: string
}

type FieldsType = {
  abstract: string | string[];
  headline: Headline;
  lead_paragraph: string | string[];
  section_name: string | string[];
  pub_date?: string;
  multimedia?: Multimedia[];
}

type ResponseData = {
  docs: FieldsType[];
}

export type ArticleData = {
  response?: ResponseData,
  abstract?: string;
  headline?: Headline;
  section_name?: string;
  lead_paragraph?: string;
  pub_date?: string;
  multimedia?: Multimedia[];
}