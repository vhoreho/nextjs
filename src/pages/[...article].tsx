import {useRouter} from "next/router";

import styles from 'components/article/styles.module.scss';

export default function Article () {
    const router = useRouter();
    const {abstract,category,date,title} = router.query;
    console.log(router.query)

    return (
        <div className='container'>
            <div className={styles.top}>
                <span className={styles.category}>{category}</span>
                <span className={styles.date}>{date}</span>
            </div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{abstract}</p>
        </div>
    )
}