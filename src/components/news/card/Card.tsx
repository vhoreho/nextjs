import Image from "next/image";
import moment from "moment";
import styles from './styles.module.scss';

export const Card = ({story, section}) => {
  const date = moment(story.published_date).format('LLL');
  return (<li className={styles.card}>
    <div className={styles.cardText}>
      <span className={styles.cardSection}>{!story.section ? section : story.section}</span>
      <h2 className={styles.cardTitle}>{!story.title ? 'Title is not defined' : story.title}</h2>
      <p className={styles.cardDescription}>{!story.abstract ? 'Title is not defined' : story.abstract}</p>
      <span className={styles.cardDate}>{date}</span>
    </div>
    <div className={styles.cardImage}>
      {
        story.multimedia ? <Image
          src={story.multimedia[1].url}
          alt={story.title}
          layout='fill'
          objectFit='cover'
        /> : <h4>Image not found</h4>
      }

    </div>
  </li>)
}