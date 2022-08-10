import { useMemo } from "react";
import { GetServerSideProps } from "next";
import { SWRConfig } from "swr";
import { articleFetcher } from "services/article/fetcher";
import { Article } from "components/article/Article";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { url } = context.query;
  const URL = String(url);
  const data = await articleFetcher(URL);

  return {
    props: {
      fallback: {
        [URL]: data,
        URL
      }
    }
  }
}

export default function ArticlePage({ fallback }) {

  return (
    <SWRConfig value={{ fallback }}>
      <Article url={fallback.URL} />
    </SWRConfig>
  )
}