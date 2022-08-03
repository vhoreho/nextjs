import {FC} from "react";
import {v4} from "uuid";
import {Card} from "./card/Card";
import styles from './styles.module.scss';

type Props = {
    data: any;
    error: string;
    section: string;
}

export const News:FC<Props> = ({data,error,section}) => {
    return (
        <div className={styles.news}>
            {error && <h2>Something went wrong</h2>}
            {!data && <h2>Loading...</h2>}
            <ul className={styles.list}>
                {data?.results.map(
                    story => <Card key={v4()} story={story} section={section} />
                )}
            </ul>
        </div>
    )
}