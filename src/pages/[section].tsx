import { GetServerSideProps } from "next";
import { categoryFetcher } from 'services/category/fetcher';
import { News } from "components/news/News";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { section } = context.params;
  const category = Array.isArray(section) ? String(section) : section;
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
