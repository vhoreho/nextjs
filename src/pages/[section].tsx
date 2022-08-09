import { ReactElement } from "react";
import { GetServerSideProps } from "next";
import { categoryFetcher } from 'services/category/fetcher';
import { News } from "components/news/News";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { section } = context.query;
  const data = await categoryFetcher(section);

  const filteredData = data?.results.filter(item => item.title);

  return {
    props: {
      news: filteredData
    }
  }
}

export default function Section({ news }): ReactElement {

  return (
    <News news={news} />
  )
}
