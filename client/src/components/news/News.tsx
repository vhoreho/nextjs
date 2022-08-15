import { useMemo } from "react";
import { useRouter } from "next/router";
import { v4 } from "uuid";
import useSWRImmutable from "swr";
import { categoryFetcher } from "services/category/fetcher";
import { Card } from "./components/card/Card";
import styles from './styles.module.scss';

export const News = () => {
  const router = useRouter();
  const { section } = router.query;
  const { data: { results } } = useSWRImmutable(section, categoryFetcher);
  const memoizedData = useMemo(() => results ? [...results].filter(item => item.title && item.abstract) : [], [results]);

  return (
    <div className={styles.news}>
      {!results && <h2>Loading...</h2>}
      {!memoizedData.length && <h2>Too many requests to server, please wait some time</h2>}
      <ul className={styles.list}>
        {memoizedData?.map(
          story => <Card key={v4()} story={story} section={section} />
        )}
      </ul>
    </div>
  )
}
