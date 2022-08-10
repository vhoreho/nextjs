import Image from "next/image";
import Link from "next/link";
import { formatDate } from "utils/formatDate";

import styles from './styles.module.scss';

export const Card = ({ story, section }) => {
  const date = formatDate(story.published_date, 'LLL');
  const { section: category, title, abstract, multimedia = 'Image not found', uri, url } = story;
  const path = uri.slice(6);
  const imageSrc = Array.isArray(multimedia) ? multimedia[0].url : '';

  return (
    <li className={styles.card}>
      <div className={styles.text}>
        <span className={styles.section}>{!category ? section : category}</span>
        <Link href={{
          pathname: '/[...article]',
          query: {
            url,
            image: imageSrc
          }
        }} as={`/${path}`}>
          <a className={styles.title}>{title.length ? title : 'Title is not defined'}</a>
        </Link>
        <p className={styles.description}>{!abstract ? 'Abstract is not defined' : abstract}</p>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.image}>
        {
          multimedia ? <Image
            src={multimedia[1].url}
            alt={title}
            layout='fill'
            objectFit='cover'
          /> : <h4>Image not found</h4>
        }

      </div>
    </li>
  )
}