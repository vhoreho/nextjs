import { FC } from "react";
import useSWR from "swr";
import { v4 } from "uuid";
import { categoryFetcher } from "services/category/fetcher";
import { Card } from "./card/Card";
import styles from './styles.module.scss';

type Props = {
  section: string | string[];
}

export const News: FC<Props> = ({section}) => {
  const {data, error} = useSWR(section, categoryFetcher);
  const filteredData = data?.results.filter(item => item.title);
  
  return (
    <div className={styles.news}>
      {error && <h2>Something went wrong</h2>}
      {!data && <h2>Loading...</h2>}
      <ul className={styles.list}>
        {filteredData?.results.map(
          story => <Card key={v4()} story={story} section={section}/>
        )}
      </ul>
    </div>
  )
}
