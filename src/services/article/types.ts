import { ArticleModel } from 'models/article'

type ResponseData = {
  docs: ArticleModel[];
}

export type ArticleData = {
  response?: ResponseData
}