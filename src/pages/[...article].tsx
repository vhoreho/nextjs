import { GetServerSideProps } from "next";
import { SWRConfig } from "swr";
import { articleFetcher } from "services/article/fetcher";
import { Article } from "components/article/Article";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { url } = context.query;
  const source = String(url);
  const data = await articleFetcher(source);

  return {
    props: {
      fallback: {
        [source]: data,
        source
      }
    }
  }
}

export default function ArticlePage({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Article url={fallback.source} />
    </SWRConfig>
  )
}