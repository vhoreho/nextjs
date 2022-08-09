import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import classNames from 'classnames';
import { articleFetcher } from 'services/article/fetcher';
import styles from './styles.module.scss';

type Props = {
  title: string,
  date: string,
  image: string
}

export const Article: FC<Props> = ({ title, date, image }) => {
  const router = useRouter();
  const { data, error } = useSWR(title, articleFetcher);

  return (
    <div className={classNames('container', styles.article)}>
      {error && <h2>Something went wrong</h2>}
      {!data && <h2>Loading...</h2>}
      {data && <>
        <div className={styles.top}>
          <span className={styles.category}>{data?.response.docs[0].section_name}</span>
          <span className={styles.date}>{date}</span>
          <span className={styles.backBtn} onClick={() => router.back()}>Go Back</span>
        </div>
        <div className={styles.image}>
          {image.length ? <Image
            src={image}
            alt={title}
            layout='fill'
            objectFit='cover'
          /> : 'Image not found'}
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.quotes}>{data?.response.docs[0].abstract}</p>
        <p className={styles.description}>{data?.response.docs[0].lead_paragraph}</p>
      </>}
    </div>
  )
}
