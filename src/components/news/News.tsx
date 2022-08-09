import { FC } from "react";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import { Card } from "./components/card/Card";
import styles from './styles.module.scss';

type Props = {
  [key: string]: Array<string | string[] | undefined>;
}

export const News: FC<Props> = ({ news }) => {
  const router = useRouter();
  const { section } = router.query;

  return (
    <div className={styles.news}>
      {!news.length && <h2>Loading...</h2>}
      <ul className={styles.list}>
        {news?.map(
          story => <Card key={v4()} story={story} section={section} />
        )}
      </ul>
    </div>
  )
}
