import styles from './Card.module.scss';
import Image from "next/image";
import moment from "moment";

export const Card = ({story, section}) => {
    const date = moment(story.published_date).format('LLL');
    return (<li className={styles.card}>
        <div className={styles.card__text}>
            <span className={styles.card__section}>{!story.section ? section : story.section}</span>
            <h2 className={styles.card__title}>{!story.title ? 'Title is not defined' : story.title}</h2>
            <p className={styles.card__description}>{!story.abstract ? 'Title is not defined' : story.abstract}</p>
            <span className={styles.card__date}>{date}</span>
        </div>
        <div className={styles.card__image}>
            {
                story.multimedia ? <Image
                    src={story.multimedia[1].url}
                    width={story.multimedia[1].width}
                    height={story.multimedia[1].height}
                    alt={story.title}
                    layout='fixed'
                    objectFit='contain'
                /> : <h4>Image not found</h4>
            }

        </div>
    </li>)
}