import { GetServerSideProps } from "next";
import { categoryFetcher } from 'services/category/fetcher';
import { News } from "components/news/News";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { section } = context.query;
  const data = await categoryFetcher(section);
  const filteredData = data?.results.filter(item => item.title && item.abstract);

  return {
    props: {
      news: filteredData
    }
  }
}

export default function Section({ news }) {
  return (
    <News news={news} />
  )
}
