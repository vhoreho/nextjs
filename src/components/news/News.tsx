import { v4 } from "uuid";
import useSWR from "swr";
import { useRouter } from "next/router";
import { categoryFetcher } from "services/category/fetcher";
import { Card } from "./components/card/Card";
import styles from './styles.module.scss';

export const News = () => {
  const router = useRouter();
  const { section } = router.query;
  const { data: { results } } = useSWR(String(section), categoryFetcher);
  const filteredData = results.filter(item => item.title && item.abstract);

  return (
    <div className={styles.news}>
      {!filteredData && <h2>Loading...</h2>}
      <ul className={styles.list}>
        {filteredData?.map(
          story => <Card key={v4()} story={story} section={section} />
        )}
      </ul>
    </div>
  )
}
