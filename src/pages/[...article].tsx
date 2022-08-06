import { useRouter } from "next/router";
import classNames from "classnames";

import styles from 'components/article/styles.module.scss';

export default function Article() {
  const router = useRouter();
  const {abstract, category, date, title} = router.query;
  const containerClass = classNames('container', styles.article)

  return (
    <div className={containerClass}>
      <span className={styles.backBtn} onClick={() => router.back()}>Click here to go back</span>
      <div className={styles.top}>
        <span className={styles.category}>{category}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{abstract}</p>
    </div>
  )
}