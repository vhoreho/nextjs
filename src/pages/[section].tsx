import { GetServerSideProps } from "next";
import { categoryFetcher } from 'services/category/fetcher';
import { News } from "components/news/News";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { section } = context.query;
  const category = typeof section === 'string' ? section : '';
  const data = await categoryFetcher(category);

  return {
    props: {
      fallback: {
        [category]: data
      }
    }
  }
}

export default function Section() {
  return (
    <News />
  )
}
