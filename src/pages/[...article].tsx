import { GetServerSideProps } from "next";
import { articleFetcher } from "services/article/fetcher";
import { Article } from "components/article/Article";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { url } = context.query;
  const data = await articleFetcher(url);

  return {
    props: {
      story: data.response.docs[0]
    }
  }
}

export default function ArticlePage({ story }) {

  return (
    <Article {...story} />
  )
}