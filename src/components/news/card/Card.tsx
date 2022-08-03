import Image from "next/image";
import moment from "moment";
import styles from './styles.module.scss';
import Link from "next/link";

export const Card = ({story, section}) => {
    const date = moment(story.published_date).format('LLL');
    const {title, uri, section:category, abstract,multimedia='image not found'} = story;
    const path = uri.slice(6);

    return (<li className={styles.card}>
        <div className={styles.card__text}>
            <span className={styles.card__section}>{!category ? section : category}</span>
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
                <a className={styles.card__title}>{!title ? 'Title is not defined' : title}</a>
            </Link>
            <p className={styles.card__description}>{!abstract ? 'Abstract is not defined' : abstract}</p>
            <span className={styles.card__date}>{date}</span>
        </div>
        <div className={styles.card__image}>
            {
                multimedia ? <Image
                    src={multimedia[1].url}
                    width={multimedia[1].width}
                    height={multimedia[1].height}
                    alt={title}
                    layout='fixed'
                    objectFit='contain'
                /> : <h4>Image not found</h4>
            }

        </div>
    </li>)
}