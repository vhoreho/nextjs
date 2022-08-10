import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
  abstract: string;
  category: string;
  date: string;
  title: string;
  image: string
}

export const Article: FC<Props> = (props) => {
  const router = useRouter();
  const { abstract, category, date, title, image } = props;
  const containerClass = classNames('container', styles.article);

  return (
    <div className={containerClass}>
      <div className={styles.top}>
        <span className={styles.category}>{category}</span>
        <span className={styles.date}>{date}</span>
        <span className={styles.backBtn} onClick={() => router.back()}>Go Back</span>
      </div>
      <div className={styles.image}>
        {image?.length ? <Image
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
