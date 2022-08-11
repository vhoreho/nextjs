import { GetServerSideProps } from "next";
import { articleFetcher } from "services/article/fetcher";
import { Article } from "components/article/Article";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { url } = context.query;
  const articleUrl = typeof url === 'string' ? url : '';
  const data = await articleFetcher(articleUrl);

  return {
    props: {
      articleUrl,
      fallback: {
        [articleUrl]: data
      }
    }
  }
}

export default function ArticlePage({ articleUrl }) {
  return (
    <Article url={articleUrl} />
  )
}