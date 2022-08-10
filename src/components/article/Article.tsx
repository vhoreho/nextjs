import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { formatDate } from 'utils/formatDate';
import { Props } from './types';
import styles from './styles.module.scss';

export const Article: FC<Props> = (props) => {
  const router = useRouter();
  const { abstract, headline, section_name, lead_paragraph, pub_date, multimedia } = props;
  const date = formatDate(pub_date, 'LLL');
  const image = multimedia[0].url;

  return (
    <div className={classNames('container', styles.article)}>
      <div className={styles.top}>
        <span className={styles.category}>{section_name}</span>
        <span className={styles.date}>{date}</span>
        <span className={styles.backBtn} onClick={() => router.back()}>Go Back</span>
      </div>
      <div className={styles.image}>
        {image?.length ? <Image
          src={`https://www.nytimes.com/${image}`}
          alt={headline.main}
          layout='fill'
          objectFit='cover'
        /> :
          'Image not found'}
      </div>
      <h2 className={styles.title}>{headline.main}</h2>
      <p className={styles.quotes}>{`"${abstract}"`}</p>
      <p className={styles.description}>{lead_paragraph}</p>
    </div>
  )
}
