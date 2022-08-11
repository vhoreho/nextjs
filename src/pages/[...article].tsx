import { GetServerSideProps } from "next";
import { articleFetcher } from "services/article/fetcher";
import { Article } from "components/article/Article";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { resolvedUrl: url } = context;
  const data = await articleFetcher(url);

  return {
    props: {
      url,
      fallback: {
        [url]: data
      }
    }
  }
}

export default function ArticlePage({ url }) {
  return (
    <Article url={url} />
  )
}