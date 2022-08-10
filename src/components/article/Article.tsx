import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import classNames from 'classnames';
import { articleFetcher } from 'services/article/fetcher';
import { formatDate } from 'utils/formatDate';
import styles from './styles.module.scss';

type Props = {
  url: string;
}

export const Article: FC<Props> = ({ url }) => {
  console.log("ARTICLE RENDER");

  const router = useRouter();
  const { data } = useSWR(url, articleFetcher);
  const {
    section_name = 'Section not defined',
    pub_date = 'Date not defined',
    multimedia = 'Multimedia not defined',
    headline = 'Title not defined',
    abstract = 'Abstract not defined',
    lead_paragraph = 'Description not defined'
  } = data.response.docs[0];
  const image = multimedia[0].url;

  return (
    <div className={classNames('container', styles.article)}>
      <div className={styles.top}>
        <span className={styles.category}>{section_name}</span>
        <span className={styles.date}>{formatDate(pub_date, 'LLL')}</span>
        <span className={styles.backBtn} onClick={() => router.back()}>Go Back</span>
      </div>
      <div className={styles.image}>
        {image?.length ? <Image
          src={`https://www.nytimes.com/${image}`}
          layout='fill'
          objectFit='cover'
          priority
        /> :
          'Image not found'}
      </div>
      <h2 className={styles.title}>{headline.main}</h2>
      <p className={styles.quotes}>{`"${abstract}"`}</p>
      <p className={styles.description}>{lead_paragraph}</p>
    </div>
  )
}