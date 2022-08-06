import Image from "next/image";
import moment from "moment";
import styles from './styles.module.scss';
import Link from "next/link";

export const Card = ({story, section}) => {
  const date = moment(story.published_date).format('LLL');
  const {section:category, title, abstract, multimedia='Image not found', uri} = story;
  const path = uri.slice(6);
  console.log(title)

  return (<li className={styles.card}>
    <div className={styles.cardText}>
      <span className={styles.cardSection}>{!category ? section : category}</span>
      <Link href={{
        pathname: '/[...article]',
        query: {
          title,
          category,
          date,
          abstract,
          multimedia
        }
      }} as={`/${path}`}>
        <a className={styles.cardTitle}>{title.length ? title:'Title is not defined'}</a>
      </Link>
      <p className={styles.cardDescription}>{!abstract ? 'Abstract is not defined' : abstract}</p>
      <span className={styles.cardDate}>{date}</span>
    </div>
    <div className={styles.cardImage}>
      {
        multimedia ? <Image
          src={multimedia[1].url}
          alt={title}
          layout='fill'
          objectFit='cover'
        /> : <h4>Image not found</h4>
      }

    </div>
  </li>)
}