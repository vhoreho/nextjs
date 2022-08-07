import { useRouter } from "next/router";
import Image from "next/image";
import classNames from "classnames";

import styles from 'components/article/styles.module.scss';

export default function Article() {
  const router = useRouter();
  const { abstract, category, date, title, image } = router.query;
  const containerClass = classNames('container', styles.article);

  return (
    <div className={containerClass}>
      <div className={styles.top}>
        <span className={styles.category}>{category}</span>
        <span className={styles.date}>{date}</span>
        <span className={styles.backBtn} onClick={() => router.back()}>Go Back</span>
      </div>
      <div className={styles.articleImage}>
        {image.length ? <Image
          src={image}
          alt={title}
          layout='fill'
          objectFit='cover'
        /> : 'Image not found'}
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{abstract}</p>
    </div>
  )
}