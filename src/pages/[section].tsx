import { GetServerSideProps } from "next";
import { SWRConfig } from "swr";
import { categoryFetcher } from 'services/category/fetcher';
import { News } from "components/news/News";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { section } = context.query;
  const category = String(section)
  const data = await categoryFetcher(category);

  return {
    props: {
      fallback: {
        [category]: data
      }
    }
  }
}

export default function Section({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <News />
    </SWRConfig>
  )
}
