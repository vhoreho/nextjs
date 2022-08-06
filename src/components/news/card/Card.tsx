import Image from "next/image";
import moment from "moment";
import styles from './styles.module.scss';

export const Card = ({story, section}) => {
  const date = moment(story.published_date).format('LLL');
  const {section:category, title, abstract, multimedia} = story;

  return (<li className={styles.card}>
    <div className={styles.cardText}>
      <span className={styles.cardSection}>{!category ? section : category}</span>
      <h2 className={styles.cardTitle}>{!title ? 'Title is not defined' : title}</h2>
      <p className={styles.cardDescription}>{!abstract ? 'Title is not defined' : abstract}</p>
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