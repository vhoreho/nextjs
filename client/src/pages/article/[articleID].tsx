import { GetServerSideProps } from "next";
import { articleFetcher } from "services/article/fetcher";
import { Article } from "components/article/Article";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { articleID } = context.params;
  const id = Array.isArray(articleID) ? String(articleID) : articleID;
  const data = await articleFetcher(id);

  return {
    props: {
      id,
      fallback: {
        [id]: data
      }
    }
  }
}

export default function ArticlePage({ id }) {
  return (
    <Article id={id} />
  )
}